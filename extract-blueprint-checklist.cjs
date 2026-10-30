const fs=require('fs');
const pages=JSON.parse(fs.readFileSync('sources/architect-exam-guide-text.json','utf8'));
const text=pages.filter(p=>p.page>=5&&p.page<=23).map(p=>p.text.replace(/Claude Certification Program\s+Exam guide/g,'')).join('\n').split('7. How to Prepare')[0];
const tasks=[];
for(const m of text.matchAll(/Task Statement\s+(\d+\.\d+):\s*([\s\S]*?)(?=Task Statement\s+\d+\.\d+:|$)/g)){
 const body=m[2],k=body.indexOf('Knowledge of:'),s=body.indexOf('Skills in:');if(k<0||s<0)throw Error('Missing section '+m[1]);
 const bullets=t=>t.split('•').slice(1).map(x=>x.replace(/\nDomain \d+:[\s\S]*/,'').replace(/\s+/g,' ').trim());
 tasks.push({id:m[1],title:body.slice(0,k).replace(/\s+/g,' ').trim(),page:pages.find(p=>p.text.includes('Task Statement '+m[1]+':')).page,knowledge:bullets(body.slice(k+13,s)),skills:bullets(body.slice(s+10))});
}
if(tasks.length!==30)throw Error('Expected30tasks');
fs.writeFileSync('sources/blueprint-checklist.json',JSON.stringify(tasks,null,2));console.log(JSON.stringify(tasks.map(t=>({id:t.id,knowledge:t.knowledge.length,skills:t.skills.length})),null,2));
