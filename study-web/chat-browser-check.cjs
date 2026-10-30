const assert=require('node:assert/strict');
const {chromium}=require('playwright');
(async()=>{
 const origin=process.env.STUDY_TEST_ORIGIN||'http://127.0.0.1:43132';
 const b=await chromium.launch({channel:'msedge',headless:true});
 try{const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('**/api/chat/status',r=>r.fulfill({json:{ready:true,code:'READY',message:'Mock authenticated transport for UI test'}}));
 let count=0;
 await p.route('**/api/chat',async route=>{const body=route.request().postDataJSON();assert.equal(body.lessonId,'EXAM-14-loop-decomposition.md');count++;
 if(count===1)return route.fulfill({status:200,contentType:'text/event-stream',body:'event: session\ndata: {"sessionId":"test-session"}\n\nevent: delta\ndata: {"text":"Tool schema "}\n\nevent: delta\ndata: {"text":"mô tả cách gọi, executor thực thi."}\n\nevent: done\ndata: {}\n\n'});
 if(count===2)return route.fulfill({status:503,json:{error:'Tài khoản chưa đăng nhập. Hãy kết nối lại.'}});
 return route.fulfill({status:200,contentType:'text/event-stream',body:'event: delta\ndata: {"text":"Câu trả lời một phần."}\n\n'});
 });
 await p.goto(origin);await p.waitForFunction(()=>document.querySelector('#connection-dot').classList.contains('ready'));
 await p.fill('#chat-input','Schema khác executor thế nào?');await p.click('#chat-send');await p.waitForFunction(()=>!document.querySelector('#chat-send').hidden&&document.querySelectorAll('.chat-message.assistant').length===1);
 assert.equal(await p.locator('.chat-message.assistant .message-text').innerText(),'Tool schema mô tả cách gọi, executor thực thi.');
 await p.fill('#chat-input','Thử lại');await p.click('#chat-send');await p.waitForSelector('.chat-message.error');assert.match(await p.locator('.chat-message.error').innerText(),/chưa đăng nhập/);
 await p.fill('#chat-input','Kiểm tra kết nối ngắt');await p.click('#chat-send');await p.waitForFunction(()=>document.querySelectorAll('.chat-message.error').length===2);assert.match(await p.locator('.chat-message.assistant').last().innerText(),/một phần/);assert.match(await p.locator('.chat-message.assistant').last().innerText(),/bị ngắt/);
 await p.reload();await p.waitForSelector('.chat-message.assistant');assert.equal(await p.locator('.chat-message.user').count(),3);assert.deepEqual(errors,[]);
 console.log('PASS: tutor UI streams SSE, preserves lesson context/history, handles auth failures and truncated streams. Transport mocked; not a live model authentication test.');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
