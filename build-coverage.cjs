const fs=require('fs');
const key=process.argv[2]||'api';
if(!/^[a-z][a-z0-9-]*$/.test(key))throw Error('Invalid key');
const list=JSON.parse(fs.readFileSync('sources/'+key+'-curriculum.json','utf8').replace(/^\uFEFF/,''));
const authored=fs.readdirSync('lessons').filter(x=>/\.md$/.test(x)).map(x=>({file:x,text:fs.readFileSync('lessons/'+x,'utf8')}));
const rows=list.map(item=>{
 const id=item.href.split('/').pop();
 const sourcePath='sources/'+key+'-lessons/'+id+'.json';
 const source=fs.existsSync(sourcePath)?JSON.parse(fs.readFileSync(sourcePath,'utf8')):null;
 const lesson=authored.find(x=>x.text.includes(item.href));
 const mediaPath='sources/'+key+'-media/'+id+'.json';
 const media=fs.existsSync(mediaPath)?JSON.parse(fs.readFileSync(mediaPath,'utf8')):null;
 const notesPath='sources/official-note-lessons/'+key+'-'+id+'.json';
 const visualPath='sources/'+key+'-media/'+id+'-visual-review.json';
 return {title:item.text.trim(),url:item.href,source:source?.contentStatus||'not_collected',lesson:lesson?.file||null,assessment:/quiz|assessment|survey/i.test(item.text),administrative:/certificate/i.test(item.text),evidence:{pageText:sourcePath,captionsCollected:!!media?.transcriptText,captionsReviewed:!!media?.transcriptText&&!!lesson?.text.includes(mediaPath),officialNotesReviewed:fs.existsSync(notesPath)&&!!lesson?.text.includes(notesPath),visualReviewed:fs.existsSync(visualPath)&&!!lesson?.text.includes(visualPath)}};
});
fs.writeFileSync('sources/'+key+'-coverage.json',JSON.stringify(rows,null,2));
let md='# Tiến độ từng mục khóa '+key+'\n\nBảng được tạo từ curriculum đã đọc sau đăng nhập. Cờ văn bản trang không tự chứng minh đã tóm tắt; phụ đề/ghi chú chính thức được phân biệt riêng. “Đã đọc phụ đề” dựa trên phần dẫn nguồn đã review trong bài, khác chỉ tải file. Quiz/assessment/survey không được làm hay nộp tự động; certificate là mục hành chính.\n\n| Mục chính thức | Nguồn đã review hoặc trạng thái thu thập | Bài tóm tắt |\n|---|---|---|\n';
for(const r of rows){const label=r.assessment?'assessment — chưa thực hiện':r.administrative?'hành chính — không nhận chứng nhận hộ':r.evidence.captionsReviewed?'Đã đọc phụ đề chính thức':r.evidence.officialNotesReviewed?'Đã đọc ghi chú chính thức':r.evidence.visualReviewed?'Đã review notebook/report hiển thị trong video':r.source+(r.evidence.captionsCollected?' + đã tải phụ đề, chờ review':'');md+=`| [${r.title}](${r.url}) | ${label} | ${r.lesson?'[Đã soạn](lessons/'+r.lesson+')':r.administrative?'Không phải bài kiến thức':'Chưa soạn'} |\n`;}
fs.writeFileSync(key==='api'?'COVERAGE.md':'COVERAGE-'+key+'.md',md);
console.log(JSON.stringify({curriculum:rows.length,authored:rows.filter(x=>x.lesson).length,captured:rows.filter(x=>x.source==='captured').length,missing:rows.filter(x=>x.source==='missing_or_video_only').length}));
