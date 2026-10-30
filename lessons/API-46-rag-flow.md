# The full RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287764), sources/api-lessons/287764.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Luồng đầy đủ: chia nguồn, tạo embedding, lưu vector cùng thông tin truy ngược nội dung; khi có query, tạo biểu diễn tương thích, tìm phần liên quan và ghép văn bản với câu hỏi để model trả lời.

Bài dùng cosine similarity/distance minh họa cách xếp độ gần. Phân biệt score cao là gần nếu dùng similarity với distance thấp là gần theo định nghĩa tương ứng. Đây là điểm retrieval, không phải confidence về độ đúng câu trả lời. Tài liệu minh họa liên quan chủ đề nhưng thiếu con số được hỏi thì hệ thống vẫn không nên tự điền con số.

## Câu hỏi

**1. Chọn một.** Sau khi tìm được vector liên quan, cần đưa gì vào prompt trả lời?

A. Chỉ một mảng số không có nguồn.

B. Chỉ tên model.

C. Câu hỏi cùng nội dung nguồn cần thiết.

D. Một điểm similarity như đáp án.

**2. Chọn một.** Với cosine distance định nghĩa 1-similarity, giá trị thấp thường chỉ điều gì?

A. Độ gần cao hơn theo thước đo đó.

B. Luôn là câu trả lời đúng.

C. Không có tài liệu.

D. Quyền truy cập cao hơn.

**3. Chọn một.** Nguồn nói về kỹ thuật nhưng không có số bug đã sửa được hỏi. Nên làm gì?

A. Tự tạo một con số hợp lý.

B. Nêu thiếu bằng chứng hoặc truy xuất thêm nguồn phù hợp.

C. Coi tiêu đề là đáp án số.

D. Dùng distance làm số bug.

## Đáp án

1. **C.** C cung cấp bằng chứng có nghĩa; A thiếu văn bản, B không có dữ liệu, D nhầm score với nội dung.

2. **A.** A đúng quan hệ thước đo; B suy rộng độ đúng, C và D không liên quan.

3. **B.** B giữ grounding; A bịa, C và D nhầm metadata/score với sự kiện.

## Đối chiếu RAG trên Bedrock

Đã đọc [The full RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276774), sources/bedrock-lessons/276774.json và đối chiếu với bản API. Cùng pipeline và ví dụ cosine. Các trục có nhãn trong hình là mô hình tưởng tượng để giải thích, không chứng minh vector thật diễn giải được từng chiều. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [The full RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289190), sources/vertex-lessons/289190.json. Pipeline offline chunk/embed/store và online query/embed/search/prompt. Vector2chiều có trục medicine/software là mô hình minh họa, không là nhãn thực của embedding. Không tự giả định mọi API đã chuẩn hóa; query hỏi số bug nhưng nguồn chỉ nói nỗ lực không đủ để suy con số. Dùng chung câu hỏi khái niệm.
