const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const {createClient}=require('@libsql/client');
const {createSync}=require('./turso-sync.cjs');
(async()=>{
 const origin=process.env.STUDY_TEST_ORIGIN||'http://127.0.0.1:43130';
 const client=createClient({url:'file::memory:'}),sync=createSync({},client);
 const browser=await chromium.launch({channel:'msedge',headless:true});
 let offline=false;
 try{
  async function device(){
   const context=await browser.newContext();
   await context.route('**/api/sync/status',route=>route.fulfill({json:{enabled:true,profile:'personal'}}));
   await context.route('**/api/sync',async route=>{
    if(offline)return route.fulfill({status:503,json:{error:'Offline'}});
    try{const result=await sync.exchange(route.request().postDataJSON().records);await route.fulfill({json:result});}
    catch(e){await route.fulfill({status:e.status||503,json:{error:e.message}});}
   });
   const page=await context.newPage();await page.goto(origin);await page.waitForSelector('#lesson-article h2');return page;
  }
  async function flush(page){await page.waitForFunction(()=>!document.querySelector('#sync-now').disabled);await page.click('#sync-now');await page.waitForFunction(()=>document.querySelector('#sync-status').textContent.startsWith('Đã đồng bộ'));}
  await sync.exchange([{key:'answers:EXAM-14-loop-decomposition.md:2',value:{selected:['A'],checked:true,correct:false},at:1,id:'legacy-answer'}]);
  const a=await device(),b=await device();
  assert.equal(await a.locator('#wrong-count').innerText(),'0');
  assert.equal(await b.locator('#wrong-count').innerText(),'0');
  await a.click('#mark-read');await a.locator('.quiz-card').first().locator('[data-option="A"]').click();await a.locator('.quiz-card').first().locator('[data-check]').click();await flush(a);
  await flush(b);assert.match(await b.locator('#progress-label').innerText(),/^1 \//);assert.equal(await b.locator('#wrong-count').innerText(),'1');
  offline=true;await a.click('#quiz-reset');await a.click('#sync-now');await a.waitForFunction(()=>document.querySelector('#sync-status').textContent.startsWith('Chưa đồng bộ'));
  await a.reload();await a.waitForSelector('#lesson-article h2');assert.equal(await a.locator('#wrong-count').innerText(),'0');
  offline=false;await flush(a);await flush(b);assert.equal(await b.locator('#wrong-count').innerText(),'0');
  await b.selectOption('#learning-path','beginner');await b.waitForFunction(()=>document.querySelector('#lesson-code').textContent==='CLAUDE101 01');await b.click('#mark-read');await flush(b);await flush(a);
  assert.match(await a.locator('#progress-label').innerText(),/^2 \//);
  await a.reload();await a.waitForSelector('#lesson-article h2');assert.equal(await a.locator('#learning-path').inputValue(),'beginner');
  const status=await(await fetch(origin+'/api/sync/status')).json();assert.equal(status.enabled,false);
  const forbidden=await fetch(origin+'/api/sync',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://untrusted.example'},body:'{"records":[]}'});assert.equal(forbidden.status,403);
  console.log('PASS: two browser devices, answer/reset sync, offline reload/retry, independent progress, saved path and origin protection.');
 }finally{await browser.close();client.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
