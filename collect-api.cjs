const fs=require('fs');
const path=require('path');
const base='http://127.0.0.1:43128';
const courseKey=process.argv[2]||'api';
if(!/^[a-z][a-z0-9-]*$/.test(courseKey))throw Error('Invalid course key');
const items=JSON.parse(fs.readFileSync('sources/'+courseKey+'-curriculum.json','utf8').replace(/^\uFEFF/,''));
(async()=>{
 fs.mkdirSync('sources/'+courseKey+'-lessons',{recursive:true});
 for(const item of items){
  const id=item.href.split('/').pop();
  const output=path.join('sources/'+courseKey+'-lessons',id+'.json');
  if(fs.existsSync(output) && JSON.parse(fs.readFileSync(output,'utf8')).contentStatus==='captured')continue;
  if(/quiz|assessment|survey/i.test(item.text)){console.log('SKIP assessment: '+item.text);continue;}
  const nav=await fetch(base+'/goto?url='+encodeURIComponent(item.href));
  if(!nav.ok)throw Error('Navigation failed '+id+': '+await nav.text());
  await new Promise(r=>setTimeout(r,1800));
  const response=await fetch(base+'/state');
  if(!response.ok)throw Error('State failed '+id);
  const pages=await response.json();
  const page=pages.find(p=>p.url===item.href);
  if(!page || /User login required/.test(page.text))throw Error('Login or page missing '+id);
  if(!page.text.includes(item.text.trim()))throw Error('Unexpected page '+id);
  const main=/claude-101|ai-fluency-framework-foundations/.test(item.href) ? page.text.trim() : page.text.split('Open in Claude').at(-1).split('Previous -')[0].trim();
  const contentStatus=main.length>200?'captured':'missing_or_video_only';
  fs.writeFileSync(output,JSON.stringify({lesson:item.text.trim(),url:item.href,collectedAt:new Date().toISOString(),contentStatus,mainText:main,text:page.text},null,2));
  console.log('SAVED '+id+' '+item.text.trim()+' ('+page.text.length+' chars)');
 }
 console.log('COLLECTION COMPLETE');
})().catch(e=>{console.error(e.message);process.exit(1)});
