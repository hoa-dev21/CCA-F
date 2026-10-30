// Stable lesson IDs preserve progress across learning paths.
function buildLearningPaths(files,recommended){
 const pick=(prefix,numbers)=>numbers.map(n=>{const id=files.find(f=>f.startsWith(prefix+'-'+String(n).padStart(2,'0')+'-'));if(!id)throw Error('Missing lesson '+prefix+n);return id;});
 const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i);
 const stages=[
 ['intro','Làm quen với Claude',pick('CLAUDE101',[1,2,3])],
 ['fluency','Nền tảng cộng tác với AI',pick('FLUENCY',[4,5,6,8,9,10,11,12])],
 ['basics','API căn bản',pick('API',[68,62,63,39,40,2,3,69])],
 ['prompt','Đánh giá và cải thiện prompt',pick('API',[4,5,6,7,8,9,71,10,11,12,13,14,72,64,70])],
 ['tools','Công cụ và điều phối agent',pick('API',[1,15,16,17,42,18,19,20,32,33,34,35,36,37,38])],
 ['mcp','Tích hợp MCP',[...pick('API',[21,65,22,23,24,25,26,27,28,29]),...pick('MCP',[1])]],
 ['code','Claude Code',[...pick('API',[67,30,31]),...pick('CODE',range(1,9))]],
 ['exam','Ôn theo mục tiêu thi',recommended]
 ];
 const used=new Set(stages.flatMap(s=>s[2]));
 for(const [prefix,label]of [['API','API mở rộng'],['CLAUDE101','Ứng dụng Claude mở rộng'],['FLUENCY','Cộng tác AI mở rộng'],['BEDROCK','Amazon Bedrock'],['VERTEX','Google Vertex']]){const ids=files.filter(f=>f.startsWith(prefix+'-')&&!used.has(f)).sort();if(ids.length)stages.push(['extra-'+prefix,label,ids]);}
 const beginner=stages.map(([id,name,lessons])=>({id,name,lessons}));
 const quick=[{id:'exam',name:'18 bài ôn trọng tâm',lessons:recommended},...beginner.filter(s=>s.id!=='exam').map(s=>({...s,name:'Học bổ sung · '+s.name}))];
 return {beginner:{name:'Học từ đầu',description:'Nền tảng → thực hành → ôn thi. Các chặng mở rộng học theo nhu cầu.',stages:beginner},quick:{name:'Ôn nhanh',description:'18 bài trọng tâm trước; học bổ sung theo những phần còn chưa rõ.',stages:quick}};
}
module.exports={buildLearningPaths};
