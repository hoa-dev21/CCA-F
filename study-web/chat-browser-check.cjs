const assert=require('node:assert/strict');
const {chromium}=require('playwright');
(async()=>{
 const origin=process.env.STUDY_TEST_ORIGIN||'http://127.0.0.1:43132';
 const b=await chromium.launch({channel:'msedge',headless:true});
 try{const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('**/api/chat/status',r=>r.fulfill({json:{ready:true,code:'READY',message:'Mock authenticated transport for UI test'}}));
 let count=0;
 await p.route('**/api/chat',async route=>{const body=route.request().postDataJSON();assert.equal(body.lessonId,'EXAM-14-loop-decomposition.md');count++;
 if(count===1){const chunks=['### Ph\u00e2n bi\u1ec7t\n\n**Tool ', 'schema** describes calls.\n\n- Executor runs tools.\n- Use \x60end_turn\x60.\n\n', '\x60\x60\x60js\nconst done = true;\n\x60\x60\x60\n\n[Source](https://example.com) [x](javascript:alert(1))\n\n<img src=x onerror=alert(1)><script>window.__chatInjected=true</script>'];const events=[['session',{sessionId:'test-session'}],...chunks.map(text=>['delta',{text}]),['done',{}]];return route.fulfill({status:200,contentType:'text/event-stream',body:events.map(([event,data])=>'event: '+event+'\ndata: '+JSON.stringify(data)+'\n\n').join('')});}
 if(count===2)return route.fulfill({status:503,json:{error:'Tài khoản chưa đăng nhập. Hãy kết nối lại.'}});
 return route.fulfill({status:200,contentType:'text/event-stream',body:'event: delta\ndata: {"text":"Câu trả lời một phần."}\n\n'});
 });
 await p.goto(origin);await p.waitForFunction(()=>document.querySelector('#connection-dot').classList.contains('ready'));
 await p.fill('#chat-input','Schema khác executor thế nào?');await p.click('#chat-send');await p.waitForFunction(()=>!document.querySelector('#chat-send').hidden&&document.querySelectorAll('.chat-message.assistant').length===1);
 const reply=p.locator('.chat-message.assistant .message-text');
 assert.equal(await reply.locator('h3').innerText(),'Ph\u00e2n bi\u1ec7t');assert.equal(await reply.locator('strong').innerText(),'Tool schema');assert.equal(await reply.locator('li').count(),2);assert.equal(await reply.locator('pre code').innerText(),'const done = true;\n');assert.equal(await reply.locator('a').getAttribute('href'),'https://example.com');assert.equal(await reply.locator('a').getAttribute('rel'),'noopener noreferrer');assert.equal(await reply.locator('img,script,[onerror],a[href^="javascript:"]').count(),0);assert.equal(await p.evaluate(()=>window.__chatInjected),undefined);
 await p.fill('#chat-input','Thử lại');await p.click('#chat-send');await p.waitForSelector('.chat-message.error');assert.match(await p.locator('.chat-message.error').innerText(),/chưa đăng nhập/);
 await p.fill('#chat-input','Kiểm tra kết nối ngắt');await p.click('#chat-send');await p.waitForFunction(()=>document.querySelectorAll('.chat-message.error').length===2);assert.match(await p.locator('.chat-message.assistant').last().innerText(),/một phần/);assert.match(await p.locator('.chat-message.assistant').last().innerText(),/bị ngắt/);
 await p.reload();await p.waitForSelector('.chat-message.assistant');assert.equal(await p.locator('.chat-message.user').count(),3);assert.equal(await p.locator('.chat-message.assistant strong').first().innerText(),'Tool schema');assert.deepEqual(errors,[]);
 console.log('PASS: tutor UI streams SSE, preserves lesson context/history, handles auth failures and truncated streams. Transport mocked; not a live model authentication test.');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
