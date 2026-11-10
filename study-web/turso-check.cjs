'use strict';
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {createClient}=require('@libsql/client');
const {createSync}=require('./turso-sync.cjs');
(async()=>{
 if(!process.env.TURSO_DATABASE_URL||!process.env.TURSO_AUTH_TOKEN)throw new Error('MISSING_CONFIG');
 const client=createClient({url:process.env.TURSO_DATABASE_URL,authToken:process.env.TURSO_AUTH_TOKEN});
 const profile='connection-check-'+crypto.randomUUID();
 const sync=createSync({...process.env,STUDY_SYNC_PROFILE:profile},client);
 try{
  const record={key:'read:API-01-tool-use.md',value:true,at:Date.now(),id:crypto.randomUUID()};
  await sync.exchange([record]);
  const result=await sync.exchange([]);
  assert.deepEqual(result.records,[record]);
  console.log('PASS: Turso schema created/verified; write and read succeeded.');
 }finally{
  try{await client.execute({sql:'DELETE FROM study_sync_v1 WHERE profile=?',args:[profile]});console.log('PASS: temporary check data removed.');}
  finally{client.close();}
 }
})().catch(e=>{console.error('Turso check failed:',e.code||e.name,'Cause:',e.cause?.code||'none');process.exitCode=1;});
