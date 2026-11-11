const test=require('node:test');
const assert=require('node:assert/strict');
const http=require('node:http');

test('Vercel serves the course and syncs across instances with same-origin protection',async t=>{
  process.env.VERCEL='1';
  process.env.TURSO_AUTH_TOKEN='deployment-test-secret';
  process.env.TURSO_DATABASE_URL='libsql://test.invalid';
  const client=require('@libsql/client').createClient({url:':memory:'});
  t.after(()=>client.close());
  const syncModule=require('./turso-sync.cjs');
  const createSync=syncModule.createSync;
  syncModule.createSync=()=>createSync(process.env,client);
  t.after(()=>{syncModule.createSync=createSync;});
  const handler=require('../api/index.js');
  assert.equal(typeof handler,'function');
  const server=http.createServer(handler);
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const base=`http://127.0.0.1:${server.address().port}`;
  const get=route=>fetch(base+route,{headers:{host:'course.vercel.app'}});
  for(const route of ['/','/app.js','/styles.css','/marked.js','/fonts/NotoSans-Variable.ttf']){
    const response=await get(route);
    assert.equal(response.status,200,route);
    assert.ok((await response.arrayBuffer()).byteLength>0,route);
  }
  const library=await (await get('/api/library')).json();
  assert.equal(library.lessons.length,142);
  assert.equal(library.totalQuestions,710);
  const lesson=await (await get('/api/lesson?id='+library.lessons[0].id)).json();
  assert.equal(lesson.questions.length,5);
  assert.equal((await (await get('/api/chat/status')).json()).code,'LOCAL_ONLY');
  assert.equal((await (await get('/api/sync/status')).json()).enabled,true);
  delete require.cache[require.resolve('../study-server.cjs')];
  const second=http.createServer(require('../study-server.cjs'));
  await new Promise(resolve=>second.listen(0,'127.0.0.1',resolve));
  t.after(()=>new Promise(resolve=>second.close(resolve)));
  const secondBase=`http://127.0.0.1:${second.address().port}`;
  const headers={'content-type':'application/json','x-study-token':library.token,origin:secondBase.replace('http:','https:')};
  const records=[{key:'last',value:library.lessons[0].id,at:Date.now(),id:'device-a'}];
  const post=await fetch(secondBase+'/api/sync',{method:'POST',headers,body:JSON.stringify({records})});
  assert.equal(post.status,200);
  assert.deepEqual((await post.json()).records,records);
  const read=await fetch(base+'/api/sync',{method:'POST',headers:{...headers,origin:base.replace('http:','https:')},body:'{"records":[]}'});
  assert.deepEqual((await read.json()).records,records);
  for(const changed of [{origin:'https://other.vercel.app'},{'x-study-token':'invalid'}]){
    assert.equal((await fetch(secondBase+'/api/sync',{method:'POST',headers:{...headers,...changed},body:'{"records":[]}'})).status,403);
  }
  assert.equal((await fetch(base+'/api/chat',{method:'POST',headers,body:'{}'})).status,403);
});
