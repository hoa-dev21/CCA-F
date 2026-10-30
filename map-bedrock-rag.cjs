const fs=require('fs');
const rows=[
 ['276780','API-43-rag-intro.md','Cùng đánh đổi truy xuất phần liên quan với việc đưa toàn bộ tài liệu vào prompt.'],
 ['276782','API-44-chunking.md','Cùng so sánh size/structure/semantic và overlap; lựa chọn cần đánh giá trên tài liệu thật, không mặc định một cách luôn tốt nhất.'],
 ['276777','API-45-embeddings.md','Mẫu dùng Bedrock invoke_model với Titan, khác SDK/provider embeddings trong khóa API. Dimension/range/normalization trong video không phải thuộc tính mọi embedding; query và chunks phải dùng biểu diễn tương thích.'],
 ['276774','API-46-rag-flow.md','Cùng pipeline và ví dụ cosine. Các trục có nhãn trong hình là mô hình tưởng tượng để giải thích, không chứng minh vector thật diễn giải được từng chiều.'],
 ['276781','API-47-rag-implementation.md','Mẫu tạo embeddings từng chunk và lưu cùng content. Distance hỗ trợ xếp hạng liên quan, không phải confidence đã hiệu chỉnh hoặc xác suất câu trả lời đúng.'],
 ['276776','API-48-bm25.md','Cùng ví dụ incident ID và bổ sung lexical với semantic search. Giải thích term-frequency/rarity trong khóa chưa phải toàn bộ công thức BM25.'],
 ['276779','API-49-hybrid.md','Cùng Retriever và RRF theo thứ hạng; không cộng raw scores khác thang. Đoạn code rút gọn trong trang là skeleton, không xác nhận đã thực thi pipeline hoàn chỉnh.']
];
const mappings=[];
for(const [id,file,note]of rows){const r=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));const p='lessons/'+file;let text=fs.readFileSync(p,'utf8');if(!text.includes(r.url)){text+='\n## Đối chiếu RAG trên Bedrock\n\nĐã đọc ['+r.lesson+']('+r.url+'), sources/bedrock-lessons/'+id+'.json và đối chiếu với bản API. '+note+' Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.\n';fs.writeFileSync(p,text);}mappings.push({id,lesson:file,url:r.url,review:'full_text_read_concepts_compared',note});}
fs.writeFileSync('sources/bedrock-rag-mappings.json',JSON.stringify(mappings,null,2));console.log('Mapped '+rows.length+' RAG lessons');
