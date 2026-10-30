const fs=require('fs');
const rows=[
 ['289244','API-32-agents-workflows.md','Mẫu Image-to-CAD dùng mô tả -> CadQuery -> render -> chấm và sửa: evaluator-optimizer có flow xác định trước, không mặc định là agent chỉ vì gọi nhiều lần. Host phải triển khai flow, acceptance và giới hạn lỗi/vòng lặp.'],
 ['289236','API-33-parallel.md','Tách phân tích vật liệu theo các nhánh độc lập, cùng ảnh và tiêu chí riêng rồi tổng hợp. Thời gian thường thấp hơn nhưng phụ thuộc concurrency/rate limits và latency tổng hợp; chuyên môn hóa không tự bảo đảm khuyến nghị kỹ thuật đúng.'],
 ['289239','API-34-chaining.md','Chuỗi bước phụ thuộc kết quả trước, có thể xen validation/non-LLM processing. Ví dụ tạo rồi sửa bài theo ràng buộc không cho phép tự đăng social media; quyền xuất bản và tác động ngoài cần theo nhiệm vụ được giao. Đánh giá thay đổi để biết lợi ích có đáng latency bổ sung.']
];
for(const [id,file,note]of rows){const r=JSON.parse(fs.readFileSync('sources/vertex-lessons/'+id+'.json','utf8')),p='lessons/'+file,t=fs.readFileSync(p,'utf8');if(!t.includes(r.url))fs.writeFileSync(p,t+'\n## Đối chiếu Vertex\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/vertex-lessons/'+id+'.json. '+note+' Dùng chung câu hỏi khái niệm.\n');}
fs.writeFileSync('sources/vertex-workflow-start-mappings.json',JSON.stringify(rows.map(([id,lesson,note])=>({id,lesson,note,review:'full_collected_text_read'})),null,2));console.log('Mapped '+rows.length);
