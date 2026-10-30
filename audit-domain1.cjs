const fs=require('fs');
const data={
 '1.1':{
  files:['API-19-implement-loop.md','API-32-agents-workflows.md','EXAM-14-loop-decomposition.md'],questions:['API-19 Q1–3','EXAM-14 Q1'],
  knowledge:['API19: lifecycle/tool_use/end_turn và ngoại lệ.','API19: lưu assistant rồi user tool results có ID.','API19/API32: model chọn bước theo context, khác cây quyết định mã hóa.'],
  skills:['API19/EXAM14: tiếp tục tool_use, kết thúc end_turn, xử lý reason khác.','API19: thêm kết quả từng ID và is_error vào history.','API19/EXAM14: không parse lời nói, text hoặc cap để chứng minh thành công.']},
 '1.2':{
  files:['EXAM-01-multi-agent.md'],questions:['EXAM-01 Q1–3'],
  knowledge:['Tóm tắt: hub-and-spoke và coordinator định tuyến/xử lý lỗi.','Tóm tắt: context riêng, không tự kế thừa lịch sử.','Tóm tắt: coordinator phân tích, phân việc, chọn nhánh và tổng hợp.','Tóm tắt: chia hẹp quá gây bỏ sót nghiên cứu rộng.'],
  skills:['Tóm tắt/Q2: chọn agent theo yêu cầu, không gọi mọi nhánh.','Tóm tắt: chia theo subtopic/loại nguồn, giảm trùng.','Tóm tắt/Q3: tìm gap và giao lại truy vấn có mục tiêu trước tổng hợp.','Tóm tắt/Q2: định tuyến tập trung qua coordinator.']},
 '1.3':{
  files:['EXAM-01-multi-agent.md','EXAM-12-session-context.md'],questions:['EXAM-01 Q1–3','EXAM-12 Q1–2'],
  knowledge:['EXAM01: Task phải có trong allowedTools theo giao diện đề cương.','EXAM01: prompt chứa context rõ, không shared memory ngầm.','EXAM01: AgentDefinition có description/system prompt/tool restrictions.','EXAM12: fork tạo nhánh từ baseline chung.'],
  skills:['EXAM01/Q1: truyền findings trước vào synthesis prompt.','EXAM01: tách findings khỏi URLs/names/pages/date.','EXAM01: nhiều yêu cầu độc lập cùng lượt cho song song.','EXAM01: giao mục tiêu/tiêu chí chất lượng/phạm vi thay kịch bản cứng.']},
 '1.4':{
  files:['EXAM-02-escalation.md'],questions:['EXAM-02 Q1–3'],
  knowledge:['Tóm tắt: gate mã khác prompt.','Tóm tắt/Q1: xác minh tài chính cần cưỡng chế.','Handoff: định danh, nguyên nhân, đề xuất cho người không có transcript.'],
  skills:['Tóm tắt/Q1: block refund nếu chưa xác minh hợp lệ.','Đoạn nhiều vấn đề: tách hạng mục, shared facts, điều tra độc lập song song, tổng hợp.','Handoff: customer ID/root cause/refund amount/recommended action rõ ràng.']},
 '1.5':{
  files:['EXAM-02-escalation.md','EXAM-14-loop-decomposition.md'],questions:['EXAM-14 Q3','EXAM-02 Q1'],
  knowledge:['EXAM02: PostToolUse chuẩn hóa kết quả trước model.','EXAM02/14: hook trước tool chặn hành động vượt ngưỡng.','EXAM02: deterministic enforcement khác compliance xác suất.'],
  skills:['EXAM02/14: Unix/ISO8601/numeric status theo contract và timezone, giữ nguồn.','EXAM02/14: gate trước refund vượt ngưỡng và redirect human.','EXAM02/Q1: chọn gate/hooks thay prompt khi cần cưỡng chế.']},
 '1.6':{
  files:['API-32-agents-workflows.md','API-34-chaining.md','EXAM-08-multi-pass-review.md','EXAM-14-loop-decomposition.md'],questions:['API-32 Q1–3','EXAM-08 Q1/Q3','EXAM-14 Q2'],
  knowledge:['API32/34: predictable chaining khác dynamic adaptive plan.','EXAM08/14: per-file rồi cross-file integration.','EXAM14: kế hoạch điều tra sinh nhiệm vụ theo findings.'],
  skills:['API32/EXAM14: chọn chaining cho bước biết trước, adaptive cho điều tra mở.','EXAM08 Q1/Q3: local review rồi integration tránh attention dilution.','EXAM14 Q2: map legacy repo, ưu tiên high-impact, cập nhật theo dependencies.']},
 '1.7':{
  files:['EXAM-12-session-context.md'],questions:['EXAM-12 Q1–2'],
  knowledge:['Đoạn bổ sung: --resume <session-name> chọn phiên đặt tên.','Tóm tắt: fork_session nhánh độc lập từ baseline.','Đoạn resume: thông báo file đã sửa.','Tóm tắt/Q1: summary mới khi tool results cũ nhiều.'],
  skills:['Đoạn bổ sung: resume named investigation theo đề cương.','Tóm tắt: fork so sánh phương án độc lập, không đồng bộ findings ngầm.','Tóm tắt/Q1: chọn resume nếu context còn đúng, summary mới nếu stale.','Đoạn bổ sung: nêu file thay đổi để targeted re-analysis.']}
};
const checklist=JSON.parse(fs.readFileSync('sources/blueprint-checklist.json','utf8'));
const result=[];
for(const [id,r]of Object.entries(data)){const source=checklist.find(t=>t.id===id);for(const f of r.files)if(!fs.existsSync('lessons/'+f))throw Error('Missing evidence '+f);for(const type of ['knowledge','skills']){if(source[type].length!==r[type].length)throw Error('Item count mismatch '+id+' '+type);}
 result.push({id,page:source.page,title:source.title,scope:'summary coverage reviewed against every knowledge/skill; questions are learning exercises, not an exam-readiness certification',files:r.files,questions:r.questions,knowledge:source.knowledge.map((item,i)=>({item,evidence:r.knowledge[i],status:'covered_in_summary'})),skills:source.skills.map((item,i)=>({item,evidence:r.skills[i],status:'covered_in_summary'}))});}
fs.writeFileSync('sources/blueprint-audit-domain1.json',JSON.stringify(result,null,2));console.log('Reviewed '+result.length+' tasks / '+result.reduce((n,r)=>n+r.knowledge.length+r.skills.length,0)+' individual items');
