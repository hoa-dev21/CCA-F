'use strict';
const {createClient}=require('@libsql/client');
const {lessons}=require('./library.cjs');
const questionIds=new Set([...lessons.values()].flatMap(l=>l.questions.map(q=>q.id)));
const schema=`CREATE TABLE IF NOT EXISTS study_sync_v1 (
  profile TEXT NOT NULL, key TEXT NOT NULL, value TEXT NOT NULL,
  updated_at INTEGER NOT NULL, change_id TEXT NOT NULL,
  PRIMARY KEY (profile, key)
)`;
function validRecord(r){
  if(!r||typeof r.key!=='string'||!Number.isSafeInteger(r.at)||r.at<1||r.at>Date.now()+86400000||typeof r.id!=='string'||!/^[a-zA-Z0-9-]{1,64}$/.test(r.id))return false;
  const value=r.value,key=r.key;
  if(key==='path')return value===null||['quick','beginner'].includes(value);
  if(key==='last')return value===null||lessons.has(value);
  const split=key.indexOf(':'),field=key.slice(0,split),id=key.slice(split+1);
  if(field==='read')return lessons.has(id)&&(value===null||typeof value==='boolean'||(Number.isSafeInteger(value)&&value>0));
  if(field==='pathLast')return ['quick','beginner'].includes(id)&&(value===null||lessons.has(value));
  if(field==='answers')return questionIds.has(id)&&(value===null||(typeof value==='object'&&Array.isArray(value.selected)&&value.selected.length<=4&&value.selected.every(k=>['A','B','C','D','E','F'].includes(k))&&typeof value.checked==='boolean'&&(!value.checked||typeof value.correct==='boolean')));
  return false;
}
function createSync(env=process.env,providedClient){
  const enabled=Boolean(env.TURSO_DATABASE_URL&&env.TURSO_AUTH_TOKEN);
  const profile=env.STUDY_SYNC_PROFILE||'personal';
  let client=providedClient,ready;
  async function exchange(records){
    if(!enabled&&!providedClient)throw Object.assign(new Error('Chưa cấu hình Turso trong .env.'),{status:503});
    if(!Array.isArray(records)||records.length>1000||!records.every(validRecord))throw Object.assign(new Error('Dữ liệu đồng bộ không hợp lệ.'),{status:400});
    client||=createClient({url:env.TURSO_DATABASE_URL,authToken:env.TURSO_AUTH_TOKEN});
    if(!ready)ready=client.execute(schema).catch(e=>{ready=null;throw e;});
    await ready;
    const statements=records.map(r=>({sql:`INSERT INTO study_sync_v1(profile,key,value,updated_at,change_id) VALUES (?,?,?,?,?)
      ON CONFLICT(profile,key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at,change_id=excluded.change_id
      WHERE excluded.updated_at>study_sync_v1.updated_at OR (excluded.updated_at=study_sync_v1.updated_at AND excluded.change_id>study_sync_v1.change_id)`,args:[profile,r.key,JSON.stringify(r.value),r.at,r.id]}));
    statements.push({sql:'SELECT key,value,updated_at,change_id FROM study_sync_v1 WHERE profile=?',args:[profile]});
    const results=await client.batch(statements,'write');
    return {records:results.at(-1).rows.map(r=>({key:r.key,value:JSON.parse(r.value),at:Number(r.updated_at),id:r.change_id}))};
  }
  return {enabled,profile,exchange,close(){client?.close();}};
}
module.exports={createSync,validRecord};
