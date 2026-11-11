(function(root){
  'use strict';
  const fields=['read','answers','pathLast'];
  function snapshot(state){
    const result={};
    for(const field of fields)for(const [key,value] of Object.entries(state[field]||{}))result[field+':'+key]=value;
    for(const field of ['path','last'])if(state[field])result[field]=state[field];
    return result;
  }
  function newer(a,b){return !b||a.at>b.at||(a.at===b.at&&a.id>b.id);}
  function capture(state,records={},initial=false){
    const values=snapshot(state);
    const at=initial?1:Math.max(Date.now(),...Object.values(records).map(r=>r.at+1));
    for(const key of new Set([...Object.keys(values),...Object.keys(records)])){
      const value=values[key]??null;
      if(!records[key]||JSON.stringify(records[key].value)!==JSON.stringify(value))records[key]={key,value:JSON.parse(JSON.stringify(value)),at,id:globalThis.crypto.randomUUID()};
    }
    return records;
  }
  function merge(records,incoming){for(const r of incoming)if(newer(r,records[r.key]))records[r.key]=r;return records;}
  function apply(state,records){
    for(const field of fields)state[field]={};
    for(const r of Object.values(records)){
      if(r.value===null)continue;
      const split=r.key.indexOf(':');
      if(split<0){if(['path','last'].includes(r.key))state[r.key]=r.value;}
      else {const field=r.key.slice(0,split),key=r.key.slice(split+1);if(fields.includes(field)&&!['__proto__','constructor','prototype'].includes(key))state[field][key]=JSON.parse(JSON.stringify(r.value));}
    }
  }
  function currentAnswers(answers,revisions){
    return Object.fromEntries(Object.entries(answers).filter(([id,answer])=>answer&&revisions[id]&&answer.revision===revisions[id]));
  }
  const api={snapshot,newer,capture,merge,apply,currentAnswers};
  if(typeof module!=='undefined')module.exports=api;else root.StudySyncState=api;
})(globalThis);
