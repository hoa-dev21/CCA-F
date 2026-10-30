# Implementing the RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287761), sources/api-lessons/287761.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Vector store cần giữ chunk gốc hoặc tham chiếu để lấy lại văn bản, không chỉ giữ vector. Khi tìm kiếm trả kết quả, ứng dụng cần đưa đúng nội dung liên quan vào bước sinh câu trả lời.

Mẫu tách chunk, tạo embeddings, thêm cặp vector–content và truy vấn top-k. Chọn k là quyết định thiết kế phải đánh giá; lấy nhiều hơn không luôn tốt nếu thêm nội dung nhiễu hoặc vượt context. Kiểm tra dữ liệu/chunk và ánh xạ nguồn trước khi đổi prompt để sửa lỗi retrieval.

## Câu hỏi

**1. Chọn một.** Store chỉ giữ vector và không có đường lấy nội dung. Còn thiếu gì?

A. Chỉ màu giao diện.

B. Chỉ token dài hơn.

C. Chỉ lời giải thích.

D. Chunk gốc hoặc tham chiếu ánh xạ về văn bản.

**2. Chọn một.** Query trả nhầm chunk. Nên kiểm tra trực tiếp phần nào?

A. Dữ liệu/chunk, embeddings và tìm kiếm/ánh xạ kết quả.

B. Chỉ độ lịch sự câu trả lời.

C. Chỉ thông báo “đã xong”.

D. Không cần xem nguồn.

**3. Chọn một.** Tăng k lên rất lớn có luôn tốt không?

A. Có, mọi nguồn đều hữu ích.

B. Không; cần cân bằng bao phủ với nhiễu/context và đo trên tác vụ.

C. Có, context vô hạn.

D. Có, không cần evaluation.

## Đáp án

1. **D.** D nối retrieval với grounding; A, B, C không khôi phục nguồn.

2. **A.** A kiểm tra tầng gây lỗi; B và C không sửa retrieval, D bỏ bằng chứng.

3. **B.** B thể hiện đánh đổi; A giả định mọi dữ liệu liên quan, C và D bỏ giới hạn/kiểm chứng.

## Đối chiếu RAG trên Bedrock

Đã đọc [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276781), sources/bedrock-lessons/276781.json và đối chiếu với bản API. Mẫu tạo embeddings từng chunk và lưu cùng content. Distance hỗ trợ xếp hạng liên quan, không phải confidence đã hiệu chỉnh hoặc xác suất câu trả lời đúng. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289186), sources/vertex-lessons/289186.json. VectorIndex lưu embedding kèm text hoặc source ID. generate_embedding có thể trả list vectors: cần kiểm tra shape truy vấn đơn và cardinality trước zip để không bỏ chunk âm thầm. Distance0.71/0.72 không là confidence đáp án. Dùng chung câu hỏi khái niệm.
