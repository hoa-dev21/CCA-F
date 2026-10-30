const test=require('node:test');
const assert=require('node:assert/strict');
const {PassThrough}=require('node:stream');
const {EventEmitter}=require('node:events');
const readline=require('node:readline');
const {lessons,library,render}=require('./library.cjs');
const {CodexBridge}=require('./codex-bridge.cjs');

test('the real course bank parses all lessons, including the first lesson’s different heading style',()=>{
  assert.equal(lessons.size,142);assert.equal([...lessons.values()].flatMap(l=>l.questions).length,426);
  assert.equal(library[0].id,'EXAM-14-loop-decomposition.md');
  const l=lessons.get(library[0].id);assert.match(l.summary,/stop_reason/);assert.doesNotMatch(l.summaryHtml,/Đáp án|Chọn một/);
  assert.deepEqual(l.questions[0].correct,['B']);assert.deepEqual(l.questions[2].correct,['A','D']);
  assert.equal(l.questions[2].multiple,true);assert.match(l.questions[2].explanation,/compliance/);
  const first=lessons.get('API-01-tool-use.md');assert.equal(first.questions.length,3);assert.ok(first.notesHtml.includes('Đối chiếu'));
});
test('rendered study text cannot inject HTML, scripts, image handlers or javascript links',()=>{
  const html=render('<script>alert(1)</script>\n\n<img src=x onerror=alert(1)>\n\n[x](javascript:alert)\n\n![picture](javascript:alert)');
  assert.ok(!html.includes('<script>'));assert.ok(!html.includes('<img'));assert.ok(!html.includes('href="javascript:'));
  assert.ok(render('[nguồn](https://example.com)').includes('rel="noopener noreferrer"'));
});
function fakeServer(account={type:'chatgpt',email:'unused@example.com',planType:'plus'},mode='normal'){
  const calls=[];let proc;
  const spawnProcess=()=>{proc=new EventEmitter();proc.stdin=new PassThrough();proc.stdout=new PassThrough();proc.stderr=new PassThrough();proc.kill=()=>{proc.stdin.end();proc.stdout.end();proc.stderr.end();proc.emit('exit',0);};
    const send=x=>proc.stdout.write(JSON.stringify(x)+'\n');const rl=readline.createInterface({input:proc.stdin});
    rl.on('line',line=>{const m=JSON.parse(line);calls.push(m);if(m.id==null)return;setImmediate(()=>{
      if(m.method==='initialize')send({id:m.id,result:{userAgent:'test'}});
      else if(m.method==='config/read')send({id:m.id,result:{config:{mcp_servers:{documents:{}},plugins:{example:{enabled:true}}}}});
      else if(m.method==='account/read')send({id:m.id,result:{account,requiresOpenaiAuth:true}});
      else if(m.method==='thread/start')send({id:m.id,result:{thread:{id:'owned-thread'}}});
      else if(m.method==='turn/start'){
        send({method:'item/agentMessage/delta',params:{threadId:'other-thread',turnId:'other-turn',delta:'DO NOT LEAK'}});
        send({method:'item/agentMessage/delta',params:{threadId:'owned-thread',turnId:'t1',delta:'Xin '}});
        send({id:m.id,result:{turn:{id:'t1',status:'inProgress',items:[]}}});
        if(mode==='normal')setImmediate(()=>{send({method:'item/agentMessage/delta',params:{threadId:'owned-thread',turnId:'t1',delta:'chào'}});send({method:'item/completed',params:{threadId:'owned-thread',turnId:'t1',item:{type:'agentMessage',text:'Xin chào'}}});send({method:'turn/completed',params:{threadId:'owned-thread',turn:{id:'t1',status:'completed',items:[]}}});});
      }else send({id:m.id,result:{}});
    });});return proc;};return {spawnProcess,calls};
}
test('tutor streams a single owned conversation and scopes its commands to read-only',async()=>{
  const fake=fakeServer();const bridge=new CodexBridge({cwd:process.cwd(),spawnProcess:fake.spawnProcess});
  try{const s=await bridge.status();assert.equal(s.ready,true);assert.ok(!('email' in s));const {threadId}=await bridge.newThread();let text='';const result=await bridge.runTurn(threadId,'Explain tool use',d=>text+=d);assert.equal(text,'Xin chào');assert.equal(result.text,'Xin chào');
    const start=fake.calls.find(c=>c.method==='thread/start');assert.equal(start.params.sandbox,'read-only');assert.equal(start.params.approvalPolicy,'never');assert.equal(start.params.config['mcp_servers.documents.enabled'],false);assert.equal(start.params.config['plugins.example.enabled'],false);
    const turn=fake.calls.find(c=>c.method==='turn/start');assert.deepEqual(turn.params.sandboxPolicy,{type:'readOnly',networkAccess:false});
    await assert.rejects(bridge.runTurn('unowned-thread','x',()=>{}),/SESSION_EXPIRED/);
  }finally{bridge.close();}
});
test('API-key auth never silently becomes paid API inference',async()=>{
  const fake=fakeServer({type:'apiKey'}),bridge=new CodexBridge({cwd:process.cwd(),spawnProcess:fake.spawnProcess});
  try{assert.equal((await bridge.status()).code,'CHATGPT_LOGIN_REQUIRED');await assert.rejects(bridge.newThread());assert.equal(fake.calls.filter(c=>c.method==='turn/start'||c.method==='thread/start').length,0);}finally{bridge.close();}
});
test('a cancelled learner message interrupts its owned turn and removes listeners',async()=>{
  const fake=fakeServer(undefined,'waiting'),bridge=new CodexBridge({cwd:process.cwd(),spawnProcess:fake.spawnProcess});
  try{const {threadId}=await bridge.newThread(),controller=new AbortController();const promise=bridge.runTurn(threadId,'x',()=>setImmediate(()=>controller.abort()),controller.signal);await assert.rejects(promise,/CHAT_CANCELLED/);assert.equal(bridge.listenerCount('notification'),0);assert.ok(fake.calls.some(c=>c.method==='turn/interrupt'));}finally{bridge.close();}
});
