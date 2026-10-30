const fs=require('fs');
(async()=>{const url='https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287727';const r=await fetch(url),h=await r.text();
console.log(JSON.stringify({status:r.status,url:r.url,length:h.length,scriptSources:[...h.matchAll(/<script[^>]+src=["']([^"']+)/gi)].map(x=>x[1]),iframes:[...h.matchAll(/<iframe[^>]+src=["']([^"']+)/gi)].map(x=>x[1])}));
fs.writeFileSync('sources/public-api-overview.html',h);
for(const term of ['jwplayer(','setup(','.m3u8','mediaid','video_data','lesson_video','playerConfig','playlist:','captions','287727']){let indices=[...h.matchAll(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'))].slice(0,3).map(m=>m.index);console.log(JSON.stringify({term,indices,snippets:indices.map(i=>h.slice(Math.max(0,i-80),i+220))}));}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
