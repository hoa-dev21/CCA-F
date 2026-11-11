const test=require('node:test');
const assert=require('node:assert/strict');
const http=require('node:http');

test('Vercel handler starts and serves the course without local tutor or shared sync',async t=>{
  process.env.VERCEL='1';
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
  assert.equal((await (await get('/api/sync/status')).json()).enabled,false);
  const post=await fetch(base+'/api/sync',{method:'POST',headers:{'content-type':'application/json','x-study-token':library.token,origin:base},body:'{"records":[]}'});
  assert.equal(post.status,403);
});
