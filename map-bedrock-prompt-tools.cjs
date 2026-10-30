const fs=require('fs');const crypto=require('crypto');
const pairs=[
 ['276749','API-10-prompt-engineering.md','Cùng chu trình mục tiêu–baseline–thử kỹ thuật–đánh giá lại. Mức tăng điểm trong ví dụ không bảo đảm cho tác vụ khác.'],
 ['276743','API-11-clear-direct.md','Cùng nguyên tắc giao nhiệm vụ rõ bằng hành động và đầu ra. Không biến “dùng mệnh lệnh” thành quy định mọi câu hỏi đều kém.'],
 ['276745','API-12-specificity.md','Cùng phân biệt quality guidelines và process steps; có thêm điểm minh họa theo từng cách, không phải kết quả áp dụng phổ quát.'],
 ['276744','API-13-xml.md','Cùng phân vùng mã/tài liệu và dữ liệu đầu vào bằng tags có nghĩa. Tags là tổ chức context, không tự là cơ chế bảo mật dữ liệu.'],
 ['276747','API-14-examples.md','Cùng ví dụ châm biếm, few-shot và lựa chọn ví dụ từ eval. Tập ví dụ tốt không loại bỏ yêu cầu đánh giá trên trường hợp mới.'],
 ['276756','API-01-tool-use.md','Cùng luồng yêu cầu dữ liệu–ứng dụng thực thi–model dùng kết quả. Thứ tự viết các thành phần mã có thể khác thứ tự chạy.'],
 ['276757','API-42-tool-functions.md','Cùng mẫu công cụ thời gian/reminder và hợp đồng đầu vào. Không coi việc model có thể retry là bảo đảm mọi lỗi phải retry.'],
 ['276758','API-15-tool-schemas.md','Converse minh họa lớp toolSpec và inputSchema; không sao chép input_schema của Messages API thành field Converse. Sinh schema từ mẫu dữ liệu chỉ là khởi đầu, phải đối chiếu hợp đồng hàm và dữ liệu thật; không đưa secret/dữ liệu riêng vào converter bên ngoài.'],
 ['276764','API-16-message-blocks.md','Converse dùng toolUse với toolUseId/name/input; phản hồi có stopReason. Giữ mọi content parts thay vì giả định block đầu luôn text. toolChoice trong ví dụ phân biệt auto/any/tool theo adapter provider.'],
 ['276762','API-19-implement-loop.md','Converse trả toolResult, toolUseId, content blocks và status success/error. Không nhầm status của provider với is_error trong API hoặc isError của MCP. Mỗi tool request cần kết quả liên kết đúng ID kể cả lỗi.'],
 ['276760','API-17-tool-results.md','Converse thêm tất cả tool result parts vào user message, bảo toàn assistant tool requests và định nghĩa tool trong request tiếp theo. Đầu ra thực thi vẫn phải có ID khớp.'],
 ['276759','API-18-tools-multi-turn.md','Đọc stopReason rồi ánh xạ sang trạng thái loop. Ví dụ dừng khi khác tool_use không chứng minh mọi lý do khác là thành công; max_tokens cần xử lý đầu ra bị cắt. Không thêm user message kết quả rỗng khi model không yêu cầu tool.'],
 ['276761','API-20-multiple-tools.md','Converse thêm schemas và router theo cùng nguyên tắc. Bài nói rõ set_reminder mẫu chỉ in output; nó chưa chứng minh có reminder thật tồn tại trong lịch/backend. Muốn triển khai phải có tích hợp và kiểm chứng trạng thái thực.']
];
const records=[];
for(const [id,file,note]of pairs){const srcPath='sources/bedrock-lessons/'+id+'.json';const raw=fs.readFileSync(srcPath,'utf8');const r=JSON.parse(raw);const path='lessons/'+file;let text=fs.readFileSync(path,'utf8');if(!text.includes(r.url)){text+='\n## Đối chiếu Bedrock: '+r.lesson+'\n\nĐã đọc [bài Bedrock]('+r.url+') và đối chiếu khái niệm với bài chung. '+note+' Nguồn: '+srcPath+'. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.\n';fs.writeFileSync(path,text);}records.push({id,title:r.lesson,source:r.url,sha256:crypto.createHash('sha256').update(raw).digest('hex'),lesson:file,review:'full_text_read_concepts_compared',providerNotes:note});}
fs.writeFileSync('sources/bedrock-prompt-tool-mappings.json',JSON.stringify(records,null,2));console.log('Mapped '+records.length+' reviewed Bedrock lessons');
