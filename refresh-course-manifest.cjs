const fs=require('fs');
const file='sources/course-manifest.json';
const rows=JSON.parse(fs.readFileSync(file,'utf8'));
const keys=['fluency','api','vertex','code','claude101','bedrock','mcp'];
for(let i=0;i<rows.length;i++){
 const key=keys[i];const r=rows[i];r.key=key;
 const curriculum='sources/'+key+'-curriculum.json';
 if(!fs.existsSync(curriculum)){r.status='curriculum_pending';continue;}
 const items=JSON.parse(fs.readFileSync(curriculum,'utf8').replace(/^\uFEFF/,''));
 const dir='sources/'+key+'-lessons';
 const records=fs.existsSync(dir)?fs.readdirSync(dir).filter(x=>x.endsWith('.json')).map(x=>JSON.parse(fs.readFileSync(dir+'/'+x,'utf8'))):[];
 r.curriculum=key+'-curriculum.json';r.curriculumItems=items.length;
 r.collectedRecords=records.length;r.capturedRecords=records.filter(x=>x.contentStatus==='captured').length;
 const coverage='sources/'+key+'-coverage.json';
 if(fs.existsSync(coverage)){const c=JSON.parse(fs.readFileSync(coverage,'utf8'));r.coverage=key+'-coverage.json';r.mappedSummaries=c.filter(x=>x.lesson).length;const learning=c.filter(x=>!x.assessment&&!x.administrative&&!/certificate/i.test(x.title));r.learningItems=learning.length;r.pendingLearningItems=learning.filter(x=>!x.lesson).length;}
 const auditPath='sources/delivery-audit.json',audit=fs.existsSync(auditPath)?JSON.parse(fs.readFileSync(auditPath,'utf8')):null;
 r.status=r.pendingLearningItems===0&&audit?.issues.length===0&&audit?.sourceEvidenceIssues?.length===0&&audit?.blueprint.reviewedTasks===30?'study_materials_reviewed':'incomplete_pending_content_and_scope_audit';r.completionEvidence='delivery-audit.json';
}
fs.writeFileSync(file,JSON.stringify(rows,null,2));
console.log(rows.map(x=>({key:x.key,curriculum:x.curriculumItems,collected:x.collectedRecords,mapped:x.mappedSummaries})));
