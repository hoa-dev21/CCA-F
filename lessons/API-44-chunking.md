# Text chunking strategies

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287776), sources/api-lessons/287776.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Chunk theo kích thước dễ áp dụng nhưng có thể cắt câu hoặc tách tiêu đề khỏi nội dung. Overlap giữ phần lân cận, đổi lại tăng dữ liệu trùng. Chunk theo cấu trúc phù hợp khi định dạng tài liệu đủ ổn định. Theo câu là phương án trung gian; theo ngữ nghĩa thêm độ phức tạp xử lý.

Không có một kích thước hay phương pháp tốt cho mọi kho. Thử trên câu hỏi thật, kiểm tra có giữ được đơn vị ý nghĩa và nguồn. Không suy rằng phương pháp phức tạp nhất luôn đáng chi phí.

## Câu hỏi

**1. Chọn một.** Chunk bị tách điều kiện khỏi quy tắc ở câu kế. Hướng kiểm tra phù hợp?

A. Chỉ đổi model ngay.

B. Cắt nhỏ hơn tùy tiện.

C. Đánh dấu mọi đáp án đúng.

D. Điều chỉnh ranh giới/overlap và đo chất lượng context.

**2. Chọn một.** Kho Markdown có tiêu đề nhất quán. Chiến lược nào đáng thử?

A. Chunk theo phần/tiêu đề rồi kiểm tra độ đầy đủ.

B. Luôn bỏ tiêu đề.

C. Chỉ một chunk rỗng.

D. Không cần xét cấu trúc.

**3. Chọn một.** Overlap tạo đánh đổi nào?

A. Chỉ giảm dữ liệu vô hạn.

B. Giữ bối cảnh lân cận nhưng tăng phần trùng/lượng lưu.

C. Bảo đảm mọi truy vấn đúng.

D. Thay thế mọi đánh giá.

## Đáp án

1. **D.** D nhắm nguyên nhân; A chưa sửa retrieval, B có thể làm tệ hơn, C che lỗi.

2. **A.** A dùng bảo đảm của nguồn; B mất nghĩa, C không có dữ liệu, D bỏ tín hiệu hữu ích.

3. **B.** B mô tả chi phí/lợi ích; A sai về lượng dữ liệu, C và D bảo đảm quá mức.

## Đối chiếu RAG trên Bedrock

Đã đọc [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276782), sources/bedrock-lessons/276782.json và đối chiếu với bản API. Cùng so sánh size/structure/semantic và overlap; lựa chọn cần đánh giá trên tài liệu thật, không mặc định một cách luôn tốt nhất. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289208), sources/vertex-lessons/289208.json. So sánh size/structure/semantic và overlap. Hai vòng chunk mẫu cần bảo đảm0<=overlap<size để tiến triển; câu character-based luôn đáng tin nhất cho code không là quy tắc phổ quát. Giữ header/metadata và đo chất lượng retrieval. Dùng chung câu hỏi khái niệm.
