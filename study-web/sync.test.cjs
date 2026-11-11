const {test}=require('node:test');
const assert=require('node:assert/strict');
const {createClient}=require('@libsql/client');
const {createSync}=require('./turso-sync.cjs');
const model=require('./sync-state.js');
const record=(key,value,at=10,id='device-a')=>({key,value,at,id});
test('old question results cannot mark revised questions complete, including after cloud merge',()=>{
 const answer={selected:['A'],checked:true,correct:false};
 const state={read:{lesson:123},answers:{legacy:answer,changed:{...answer,revision:'old'},current:{...answer,revision:'new'}}};
 const records=model.capture(state,{},true);
 model.merge(records,[record('answers:changed',{...answer,revision:'old'},20)]);
 model.apply(state,records);
 state.answers=model.currentAnswers(state.answers,{legacy:'new',changed:'new',current:'new'});
 assert.deepEqual(Object.keys(state.answers),['current']);assert.equal(state.read.lesson,123);
 assert.equal(state.answers.current.checked,true);
});
test('two devices merge independent changes, retries, conflicts, resets and profiles',async()=>{
 const client=createClient({url:'file::memory:'});
 const a=createSync({STUDY_SYNC_PROFILE:'a'},client),b=createSync({STUDY_SYNC_PROFILE:'b'},client);
 try{
  await a.exchange([record('read:API-01-tool-use.md',true)]);
  let result=await a.exchange([record('read:API-02-multi-turn.md',true)]);
  assert.equal(result.records.length,2);
  await a.exchange([record('read:API-01-tool-use.md',null,20)]);
  result=await a.exchange([record('read:API-01-tool-use.md',true)]);
  assert.equal(result.records.find(r=>r.key==='read:API-01-tool-use.md').value,null);
  await a.exchange([record('read:API-02-multi-turn.md',false,10,'device-z')]);
  result=await a.exchange([record('read:API-02-multi-turn.md',true,10,'device-a')]);
  assert.equal(result.records.find(r=>r.key==='read:API-02-multi-turn.md').value,false);
  assert.deepEqual((await b.exchange([])).records,[]);
  await assert.rejects(a.exchange([record('read:unknown',true)]),{status:400});
  await assert.rejects(a.exchange([record('path',{},10)]),{status:400});
 }finally{client.close();}
});
test('offline deletion survives reload and stale cloud data; in-flight edits survive merge',()=>{
 const state={read:{'API-01-tool-use.md':true},answers:{q:{selected:['A'],checked:false}},path:'quick'};
 const records=model.capture(state,{},true);
 assert.equal(records['read:API-01-tool-use.md'].at,1);
 delete state.answers.q;model.capture(state,records);
 assert.equal(records['answers:q'].value,null);
 const reloaded=JSON.parse(JSON.stringify(records));
 model.merge(reloaded,[record('answers:q',{selected:['B'],checked:false},1)]);
 model.apply(state,reloaded);assert.equal(state.answers.q,undefined);
 state.read['API-01-tool-use.md']=false;model.capture(state,reloaded);
 model.merge(reloaded,[record('read:API-01-tool-use.md',true,2)]);
 model.apply(state,reloaded);assert.equal(state.read['API-01-tool-use.md'],false);
});
test('unconfigured sync leaves local mode available',async()=>{
 const sync=createSync({});assert.equal(sync.enabled,false);
 await assert.rejects(sync.exchange([]),{status:503});
});
test('mutating a previously synced answer creates a new change',()=>{
 const state={answers:{q:{selected:['A'],checked:false}}};
 const records=model.capture(state,{},true),before=records['answers:q'].id;
 state.answers.q.selected=['B'];model.capture(state,records);
 assert.notEqual(records['answers:q'].id,before);
 model.apply(state,records);const after=records['answers:q'].id;
 state.answers.q.checked=true;state.answers.q.correct=true;model.capture(state,records);
 assert.notEqual(records['answers:q'].id,after);
});
