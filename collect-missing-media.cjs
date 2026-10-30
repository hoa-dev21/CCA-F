const fs=require('fs');const base='http://127.0.0.1:43128';
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function json(path){const r=await fetch(base+path);if(!r.ok)throw Error('Browser '+r.status+' '+await r.text());return r.json();}
async function collect(key){const rows=JSON.parse(fs.readFileSync('sources/'+key+'-coverage.json','utf8'));fs.mkdirSync('sources/'+key+'-media',{recursive:true});
 for(const row of rows.filter(r=>!r.assessment&&!r.administrative&&(r.source==='missing_or_video_only'||!r.lesson))){const id=row.url.split('/').pop(),out='sources/'+key+'-media/'+id+'.json';if(fs.existsSync(out)&&JSON.parse(fs.readFileSync(out,'utf8')).transcriptText)continue;
  const nav=await fetch(base+'/goto?url='+encodeURIComponent(row.url));if(!nav.ok)throw Error('Navigation '+id+': '+await nav.text());
  let media;for(let attempt=0;attempt<12;attempt++){await pause(600);media=await json('/media');if(media.url!==row.url)throw Error('Unexpected page '+id);if(media.players?.some(p=>p.playlist?.some(v=>v.tracks?.some(t=>t.kind==='captions'&&/english/i.test(t.label)))))break;}
  const entries=(media.players||[]).flatMap(p=>(p.playlist||[]).map(v=>({player:p.id,...v})));let track=entries.flatMap(v=>v.tracks||[]).find(t=>t.kind==='captions'&&/^english$/i.test(t.label));
  let raw='',transcriptText='';if(track){const u=new URL(track.file);if(u.protocol!=='https:'||!['cdn.jwplayer.com','content.jwplatform.com'].includes(u.hostname))throw Error('Unexpected caption host '+u.hostname);const response=await fetch(u);if(!response.ok)throw Error('Caption HTTP '+response.status+' '+id);raw=await response.text();transcriptText=raw.replace(/^\uFEFF/,'').split(/\r?\n/).filter(s=>!/^\s*\d+\s*$/.test(s)&&!s.includes('-->')&&!/^WEBVTT/.test(s)).join('\n').replace(/\n{3,}/g,'\n\n').trim();}
  const links=await json('/links');const downloads=links.filter(x=>/\.(?:ipynb|zip|pdf|srt|vtt)(?:[?#]|$)/i.test(x.href));
  fs.writeFileSync(out,JSON.stringify({lesson:row.title,url:row.url,collectedAt:new Date().toISOString(),sourceType:'English captions linked by official lesson player',media,captionUrl:track?.file||null,rawCaptions:raw,transcriptText,downloads},null,2));console.log('MEDIA '+key+' '+id+' '+row.title+' '+transcriptText.length+' chars');
 }
}
(async()=>{for(const key of process.argv.slice(2).length?process.argv.slice(2):['api','bedrock','vertex','mcp']){console.log('START MEDIA '+key);await collect(key);}console.log('MEDIA COLLECTION COMPLETE');})().catch(e=>{console.error(e.message);process.exitCode=1;});
