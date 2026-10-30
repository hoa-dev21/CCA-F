const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{
 const b=await chromium.launch({channel:'msedge',headless:true});
 try {
 const p=await b.newPage();
 await p.goto('https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification');
 const text=await p.locator('body').innerText();
 const links=await p.locator('a[href]').evaluateAll(a=>a.map(x=>({text:x.innerText,href:x.href})).filter(x=>/guide|pdf/i.test(x.text+x.href)));
 fs.mkdirSync('sources',{recursive:true});
 fs.writeFileSync('sources/architect-exam-page.json',JSON.stringify({url:p.url(),text,links},null,2));
 const guide=links.find(x=>/exam guide/i.test(x.text));
 if(guide){const response=await p.request.get(guide.href); if(!response.ok()) throw Error('Guide HTTP '+response.status()); fs.writeFileSync('sources/architect-exam-guide.pdf',await response.body()); console.log('Guide downloaded');}
 console.log(text.slice(0,14000)); console.log(JSON.stringify(links));
 } finally {await b.close();}
})().catch(e=>{console.error(e.message);process.exit(1)});
