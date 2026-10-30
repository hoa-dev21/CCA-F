const fs=require('fs');
const base='http://127.0.0.1:43128';
const courses=[['fluency','ai-fluency-framework-foundations'],['claude101','claude-101'],['bedrock','claude-in-amazon-bedrock'],['vertex','claude-with-google-vertex']];
async function get(route){const r=await fetch(base+route);if(!r.ok)throw Error(await r.text());return r.json();}
async function go(url){const r=await fetch(base+'/goto?url='+encodeURIComponent(url));if(!r.ok)throw Error(await r.text());}
(async()=>{
 for(const [key,slug]of courses){
  const url='https://anthropic-partners.skilljar.com/'+slug;
  await go(url);
  let links=await get('/links');
  let curriculum=links.filter(x=>x.href.startsWith(url+'/')&&/\/\d+$/.test(x.href));
  if(!curriculum.length){
   const states=await get('/state');
   const state=states.find(x=>x.url===url);
   const enroll=links.find(x=>x.text.trim()==='Enroll in Course');
   if(enroll && state && /\bFREE\b/.test(state.text)){
    await go(enroll.href);
    links=await get('/links');
    curriculum=links.filter(x=>x.href.startsWith(url+'/')&&/\/\d+$/.test(x.href));
   }
  }
  const unique=[...new Map(curriculum.map(x=>[x.href,{text:x.text.trim(),href:x.href}])).values()];
  fs.writeFileSync('sources/'+key+'-curriculum.json',JSON.stringify(unique,null,2));
  console.log(key+': '+unique.length+' curriculum items');
  if(!unique.length){const states=await get('/state');fs.writeFileSync('sources/'+key+'-access-status.json',JSON.stringify(states.map(x=>({url:x.url,title:x.title,text:x.text})),null,2));}
 }
 console.log('DISCOVERY COMPLETE');
})().catch(e=>{console.error(e.message);process.exit(1)});
