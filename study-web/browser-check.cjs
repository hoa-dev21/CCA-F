const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require('playwright');
(async()=>{
 const origin=process.env.STUDY_TEST_ORIGIN||'http://127.0.0.1:43130';
 fs.mkdirSync('.study-test',{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.__copiedStudyText=text;}}});});
  await page.goto(origin);await page.waitForSelector('#lesson-article h2');
  assert.match(await page.locator('#lesson-title').innerText(),/Điều kiện dừng/);
  await page.click('#mark-read');assert.equal(await page.locator('.quiz-card').count(),5);
  await page.locator('.quiz-card').nth(0).locator('[data-option="A"]').click();await page.locator('.quiz-card').nth(0).locator('[data-check]').click();
  assert.match(await page.locator('.quiz-card').nth(0).locator('.answer-feedback').innerText(),/Đáp án: B/);
  await page.locator('.quiz-card').nth(2).locator('[data-option="A"]').click();assert.equal(await page.locator('.quiz-card').nth(2).locator('[data-check]').isDisabled(),true);
  await page.locator('.quiz-card').nth(2).locator('[data-option="D"]').click();await page.locator('.quiz-card').nth(2).locator('[data-check]').click();assert.match(await page.locator('.quiz-card').nth(2).locator('.feedback-title').innerText(),/Đúng rồi/);
  await page.reload();await page.waitForSelector('#lesson-article h2');assert.match(await page.locator('#progress-label').innerText(),/^1 \/ 142/);assert.equal(await page.locator('#wrong-count').innerText(),'1');
  await page.click('#review-wrong');assert.equal(await page.locator('.quiz-card').count(),1);assert.equal(await page.locator('#wrong-count').innerText(),'1'); // opening review preserves the queue
  assert.equal(await page.locator('.answer-feedback').count(),0);
  await page.locator('.quiz-card [data-option="B"]').click();await page.locator('.quiz-card [data-check]').click();assert.equal(await page.locator('#wrong-count').innerText(),'0');
  await page.click('#practice-start');await page.waitForFunction(()=>document.querySelectorAll('.quiz-card').length===10);assert.equal(await page.locator('.quiz-card').count(),10);
  await page.fill('#search','MCP');assert.ok((await page.locator('.lesson-link').count())>0);
  await page.locator('.lesson-link').first().click();await page.waitForTimeout(150);await page.fill('#chat-input','Vì sao schema chưa phải là executor?');await page.click('#copy-question');const copied=await page.evaluate(()=>window.__copiedStudyText);assert.match(copied,/schema chưa phải/);assert.ok(!copied.includes('Đáp án tham chiếu'));
  const lib=await(await fetch(origin+'/api/library')).json();assert.equal(lib.lessons.length,142);assert.equal(lib.totalQuestions,710);
  for(const path of ['beginner','quick']){
   assert.ok(lib.learningPaths[path].stages.length);
   await page.selectOption('#learning-path',path);
   await page.waitForFunction(expected=>JSON.parse(localStorage.getItem('architect-study-v1')).path===expected,path);
   assert.equal(await page.locator('#learning-path').inputValue(),path);
   assert.equal(await page.locator('#path-description').innerText(),lib.learningPaths[path].description);
   assert.equal(await page.locator('.lesson-link').count(),142);
  }
  const forbidden=await fetch(origin+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json','Origin':'https://untrusted.example','X-Study-Token':lib.token},body:'{}'});assert.equal(forbidden.status,403);
  assert.equal((await fetch(origin+'/sources/current-media.json')).status,404);assert.equal((await fetch(origin+'/api/lesson?id=../.codex/auth.json')).status,404);
  await page.screenshot({path:'.study-test/desktop-final.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.click('#menu-toggle');assert.equal(await page.locator('#sidebar').evaluate(el=>el.classList.contains('open')),true);await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true);
  await page.click('#mobile-tutor');assert.equal(await page.locator('#tutor').isVisible(),true);await page.screenshot({path:'.study-test/mobile-tutor.png'});await page.click('#mobile-tutor');await page.screenshot({path:'.study-test/mobile.png',fullPage:true});
  assert.deepEqual(errors,[]);
  const lesson=await(await fetch(origin+'/api/lesson?id=EXAM-14-loop-decomposition.md')).json();
  const migration=await browser.newContext();
  await migration.addInitScript(({lesson})=>{
   if(localStorage.getItem('architect-study-v1'))return;
   const [legacy,changed,current]=lesson.questions;
   localStorage.setItem('architect-study-v1',JSON.stringify({read:{[lesson.id]:123},answers:{
    [legacy.id]:{selected:['A'],checked:true,correct:false},
    [changed.id]:{selected:['A'],checked:true,correct:false,revision:'outdated'},
    [current.id]:{selected:current.correct,checked:true,correct:true,revision:current.revision}
   }}));
  },{lesson});
  const migrated=await migration.newPage();await migrated.goto(origin);await migrated.waitForSelector('#lesson-article h2');await migrated.click('#tab-quiz');
  assert.equal(await migrated.locator('#wrong-count').innerText(),'0');
  assert.match(await migrated.locator('#progress-label').innerText(),/^1 \/ 142/);
  assert.equal(await migrated.locator('.answer-feedback').count(),1);
  assert.equal(await migrated.locator('.quiz-card').nth(0).locator('.answer-option.selected').count(),0);
  assert.equal(await migrated.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('architect-study-v1')).answers).length),3);
  for(const q of lesson.questions.filter(q=>q.number!==3)){
   const card=migrated.locator('.quiz-card').nth(q.number-1);
   for(const key of q.correct)await card.locator(`[data-option="${key}"]`).click();
   await card.locator('[data-check]').click();
  }
  assert.match(await migrated.locator('#quiz-summary').innerText(),/5 \/ 5/);
  await migrated.reload();await migrated.waitForSelector('#lesson-article h2');await migrated.click('#tab-quiz');
  assert.match(await migrated.locator('#quiz-summary').innerText(),/5 \/ 5/);
  await migrated.click('#quiz-reset');assert.equal(await migrated.locator('.answer-feedback').count(),0);
  assert.equal(await migrated.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('architect-study-v1')).answers).length),0);
  await migration.close();
  console.log('PASS: desktop/mobile, five-question scoring, single/multiple choice, version migration, persistence, wrong-answer review, practice, clipboard and API isolation.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
