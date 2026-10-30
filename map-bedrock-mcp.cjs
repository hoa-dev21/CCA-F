const fs=require('fs');
const rows=[
 ['276798','API-21-intro-mcp.md','Cùng lớp tích hợp client/server và tái sử dụng công cụ. MCP không đồng nghĩa toàn bộ tool loop tự vận hành.'],
 ['276793','API-22-mcp-clients.md','Cùng list/call flow. Danh sách transport trong khóa là mô tả lúc giảng, không xác nhận mọi transport đó là chuẩn được hỗ trợ hiện hành.'],
 ['276792','API-65-mcp-project-setup.md','Dự án thêm mention @document và command /name, storage trong memory; không cần viết cả client/server nếu phía còn lại đã có. Chưa mở ZIP nên không tuyên bố hoàn thành bài thực hành.'],
 ['276800','API-23-define-mcp-tools.md','Cùng decorator, type hints và Field tạo schema đọc/sửa tài liệu. Python replace trong ví dụ là thao tác đơn giản, không chứng minh uniqueness hay hợp đồng production.'],
 ['276796','API-24-mcp-inspector.md','Cùng thử tool độc lập rồi đọc lại để xác minh sửa. Cổng/UI inspector có thể khác theo phiên bản; không học thuộc cổng thay phương pháp kiểm tra.'],
 ['276802','API-25-mcp-client-implementation.md','Bản Bedrock nêu rõ MCP tool schema không trùng định dạng Converse. Helper to_bedrock_tools trong core/bedrock.py chuyển schema; cần kiểm tra adapter thay vì gửi schema MCP nguyên dạng rồi coi kết nối là đã đủ. Session vẫn cần cleanup.'],
 ['276799','API-26-resources.md','Cùng resource URI cố định/template, MIME và serialization. URI cố định không đồng nghĩa dữ liệu bất biến.'],
 ['276797','API-27-access-resources.md','Cùng read_resource và parse theo MIME, ứng dụng đưa dữ liệu vào context. Giảm một vòng model tool call không có nghĩa không còn request client/server để đọc resource.'],
 ['276801','API-28-define-prompts.md','Cùng prompt trả messages và interpolation; import path SDK trong bài cần kiểm tra theo bản đang dùng. Template tạo đúng không chứng minh thao tác sửa tài liệu đã chạy.'],
 ['276795','API-29-client-prompts.md','Cùng list_prompts/get_prompt và đối số doc_id. Giữ ranh giới giữa danh sách mẫu, messages sau điền tham số và kết quả thực thi.'],
 ['276794','MCP-01-control-patterns.md','Cùng tools/model, resources/application, prompts/user. Model-controlled là chọn lời gọi trong pattern, không phải vượt qua quyền ứng dụng hoặc backend.']
];
const mappings=[];
for(const [id,file,note]of rows){const r=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));const p='lessons/'+file;let text=fs.readFileSync(p,'utf8');if(!text.includes(r.url)){text+='\n## Đối chiếu MCP trong khóa Bedrock\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/bedrock-lessons/'+id+'.json và đối chiếu với bài chung. '+note+' Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.\n';fs.writeFileSync(p,text);}mappings.push({id,lesson:file,source:r.url,review:'full_collected_text_read_concepts_compared',note});}
fs.writeFileSync('sources/bedrock-mcp-mappings.json',JSON.stringify(mappings,null,2));console.log('Mapped '+rows.length+' MCP lessons');
