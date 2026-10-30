const fs=require('fs');
const entries=[
 ['276720','API-40-temperature.md','Ví dụ Converse đặt inferenceConfig.temperature. Temperature thấp có thể giảm độ biến thiên, không bảo đảm kết quả đúng hoặc lặp lại tuyệt đối; các khoảng và default trong video không được dùng như cấu hình hiện hành cho mọi model.'],
 ['276721','API-61-response-streaming.md','Ví dụ dùng converse_stream, response.stream và contentBlockDelta.delta.text. Bộ xử lý thực tế phải phân biệt text/tool/reasoning/error events, tích lũy theo block và kiểm tra trạng thái kết thúc, không giả định mọi delta đều có text.'],
 ['276767','API-51-text-editor.md','Schema text editor do nhà cung cấp định nghĩa; ứng dụng vẫn phải triển khai đọc/ghi file và giới hạn đường dẫn. IDs và undo trong video phụ thuộc phiên bản, không phải mọi phiên bản editor đều hỗ trợ cùng lệnh.'],
 ['276811','API-30-code-workflow.md','Nguồn Bedrock cũng trình bày đọc code, lập kế hoạch rồi triển khai; TDD chọn test phù hợp trước khi viết code. /init và CLAUDE.md phục vụ ngữ cảnh dự án; phím # và cú pháp giao diện cũ trong video cần kiểm tra trước khi dùng. Không tự stage/commit chỉ vì bài có ví dụ.'],
 ['276806','API-31-code-mcp.md','Claude Code là MCP client; ví dụ server documents chuyển PDF/Word thành Markdown. Server mở rộng tools/resources/prompts nhưng chỉ dùng capability client hỗ trợ. Danh sách server là ví dụ lịch sử, không khẳng định uy tín hay cài sẵn; quyền truy cập và cấu hình phải có phạm vi rõ.']
];
for(const [id,file,note] of entries){const r=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));const path='lessons/'+file;let t=fs.readFileSync(path,'utf8');if(!t.includes(r.url))fs.writeFileSync(path,t+'\n## Đối chiếu Bedrock\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/bedrock-lessons/'+id+'.json. '+note+' Dùng chung câu hỏi khái niệm, không đếm trùng.\n');}
fs.writeFileSync('sources/bedrock-final-shared-mappings.json',JSON.stringify(entries.map(([id,lesson,note])=>({id,lesson,note,review:'full_collected_text_read'})),null,2));
console.log('Mapped '+entries.length+' reviewed lessons');
