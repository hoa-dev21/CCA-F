const fs=require('fs');
if(fs.existsSync('sources/blueprint-checklist.json')&&fs.readdirSync('sources').some(f=>/^blueprint-audit-domain\d+\.json$/.test(f))){require('./render-blueprint-audit.cjs');process.exit(0);}
const pages=JSON.parse(fs.readFileSync('sources/architect-exam-guide-text.json','utf8'));
const objectives=[];
for(const page of pages){
 const re=/Task Statement\s+(\d+\.\d+):\s*([\s\S]*?)(?=Knowledge of:)/g;
 for(const m of page.text.matchAll(re))objectives.push({id:m[1],title:m[2].replace(/\s+/g,' ').trim(),page:page.page,status:'needs_content_review'});
}
if(!objectives.length)throw Error('No objectives extracted');
fs.writeFileSync('sources/blueprint-objectives.json',JSON.stringify(objectives,null,2));
let md='# Kiểm toán phạm vi Exam Guide\n\nNguồn: sources/architect-exam-guide.pdf, CCAR-F v1.0 July 2026. Số trang là trang PDF. Chưa đánh dấu hoàn thành: phải đọc cả knowledge/skills của từng mục và đối chiếu bài/câu hỏi trước khi xác nhận bao phủ. Số lượng tài liệu không tự chứng minh đạt yêu cầu.\n\n| Mục tiêu | Nội dung nguyên bản | Trang | Trạng thái |\n|---|---|---:|---|\n';
for(const o of objectives)md+=`| ${o.id} | ${o.title} | ${o.page} | Chưa kiểm toán nội dung |\n`;
fs.writeFileSync('BLUEPRINT_AUDIT.md',md);
console.log(JSON.stringify(objectives));
