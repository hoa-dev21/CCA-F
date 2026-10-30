const fs=require('fs');
const rows=[
 ['289169','API-10-prompt-engineering.md','Chu trình goal/baseline/eval/thay đổi/re-eval; đọc lỗi theo nhóm. Ví dụ meal plan và concurrency1–3 là minh họa, không là benchmark hay giới hạn universal. Không phải mọi thay đổi đều tăng điểm; giữ hay bỏ dựa trên bằng chứng.'],
 ['289170','API-11-clear-direct.md','Nêu hành động, đối tượng và ràng buộc trực tiếp ở đầu prompt. Các mức điểm2.32/3.92 thuộc ví dụ khóa, không bảo đảm tăng chất lượng cho mọi bài toán.'],
 ['289165','API-12-specificity.md','Tách thuộc tính đầu ra với bước xử lý; ràng buộc lượng/định dạng/nội dung cần đo được. Bước cân nhắc không đồng nghĩa yêu cầu lộ toàn bộ suy nghĩ nội bộ. Điểm3.92/7.86 chỉ là ví dụ.'],
 ['289171','API-13-xml.md','XML phân ranh instructions/data/code/docs và tên tag mô tả vai trò. Delimiter tăng rõ ràng nhưng không tạo ranh giới bảo mật tự động; nội dung bên trong vẫn là dữ liệu chưa tin cậy theo nguồn.'],
 ['289177','API-14-examples.md','Input/output mẫu giúp format và ca khó như sarcasm; chọn ví dụ phát triển đã review và giữ test holdout riêng. Điểm10 từ model grader chưa đủ chứng minh mẫu hoàn hảo; tránh đưa test đang chấm vào prompt rồi báo điểm như bằng chứng khái quát hóa.']
];
for(const [id,file,note]of rows){const r=JSON.parse(fs.readFileSync('sources/vertex-lessons/'+id+'.json','utf8')),p='lessons/'+file,t=fs.readFileSync(p,'utf8');if(!t.includes(r.url))fs.writeFileSync(p,t+'\n## Đối chiếu Vertex\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/vertex-lessons/'+id+'.json. '+note+' Dùng chung câu hỏi khái niệm.\n');}
fs.writeFileSync('sources/vertex-prompting-mappings.json',JSON.stringify(rows.map(([id,lesson,note])=>({id,lesson,note,review:'full_collected_text_read'})),null,2));console.log('Mapped '+rows.length);
