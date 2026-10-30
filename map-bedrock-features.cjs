const fs=require('fs');
const entries=[
 ['276788','API-60-thinking.md','Mẫu Converse dùng reasoning content/signature/redactedContent và cấu hình model-specific. Không coi phần hiển thị là toàn bộ suy nghĩ nội bộ hay bằng chứng correctness; giữ blocks theo hợp đồng. Budget/tính tương thích phải kiểm tra khi triển khai.'],
 ['276789','API-59-images.md','Mẫu dùng image.format/source.bytes, khác image base64 block của Messages API. Giới hạn ảnh trong hai khóa khác nhau và phụ thuộc provider/model/phiên bản; không dùng chúng làm thông số hiện hành mặc định.'],
 ['308839','API-58-pdf-input.md','Mẫu Converse dùng document.format/name/source.bytes. Khả năng hỗ trợ PDF không bảo đảm mọi trang được hiểu đúng; kiểm tra nguồn và đầu ra.'],
 ['308840','API-53-citations.md','Converse có citations content parts; giữ ánh xạ claim–source theo cấu trúc provider. Citation không làm lộ toàn bộ suy nghĩ nội bộ và không tự chứng minh claim được nguồn hỗ trợ đúng.'],
 ['276786','API-54-cache-intro.md','Bài Bedrock nói TTL5 phút, bản API nói1 giờ; đó là ví dụ/cấu hình khác nhau, không chọn một giá trị làm bảo đảm phổ quát. Dùng cùng kiến thức về tái sử dụng xử lý input, cần xác minh TTL/ngưỡng hiện hành trước triển khai.'],
 ['276785','API-55-cache-rules.md','Mẫu Converse chèn cachePoint block, khác cache_control của Messages API. Giữ prefix ổn định và quan sát usage, không thêm văn bản vô nghĩa chỉ để vượt ngưỡng trong ví dụ. Không map bài caching-in-action chỉ có links/video chưa đọc.']
];
const mapped=[];
for(const [id,file,note]of entries){const r=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));const path='lessons/'+file;let text=fs.readFileSync(path,'utf8');if(!text.includes(r.url)){text+='\n## Đối chiếu tính năng trên Bedrock\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/bedrock-lessons/'+id+'.json. '+note+' Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.\n';fs.writeFileSync(path,text);}mapped.push({id,lesson:file,source:r.url,review:'full_collected_text_read_concepts_compared',note});}
fs.writeFileSync('sources/bedrock-feature-mappings.json',JSON.stringify(mapped,null,2));console.log('Mapped '+entries.length+' feature lessons');
