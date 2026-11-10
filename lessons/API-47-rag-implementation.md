# Implementing the RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287761), sources/api-lessons/287761.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học

Vectơ store cần giữ đoạn văn bản gốc hoặc tham chiếu để lấy lại văn bản, không chỉ giữ vectơ. Khi tìm kiếm trả kết quả, ứng dụng cần đưa đúng nội dung liên quan vào bước sinh câu trả lời.

Mẫu tách đoạn văn bản, tạo các vectơ biểu diễn, thêm cặp vectơ–nội dung và truy vấn top-k. Chọn k là quyết định thiết kế phải đánh giá; lấy nhiều hơn không luôn tốt nếu thêm nội dung nhiễu hoặc vượt ngữ cảnh. Kiểm tra dữ liệu/chunk và ánh xạ nguồn trước khi đổi prompt để sửa lỗi truy xuất dữ liệu.

## Câu hỏi

**1. Chọn một.** Store chỉ giữ vectơ và không có đường lấy nội dung. Còn thiếu gì?

A. Chỉ màu giao diện.

B. Chỉ token dài hơn.

C. Chỉ lời giải thích.

D. Đoạn văn bản gốc hoặc tham chiếu ánh xạ về văn bản.

**2. Chọn một.** Truy vấn tìm kiếm trả nhầm đoạn văn bản. Nên kiểm tra trực tiếp phần nào?

A. Dữ liệu/chunk, các vectơ biểu diễn và tìm kiếm/ánh xạ kết quả.

B. Chỉ độ lịch sự câu trả lời.

C. Chỉ thông báo “đã xong”.

D. Không cần xem nguồn.

**3. Chọn một.** Tăng k lên rất lớn có luôn tốt không?

A. Có, mọi nguồn đều hữu ích.

B. Không; cần cân bằng bao phủ với nhiễu/context và đo trên tác vụ.

C. Có, ngữ cảnh vô hạn.

D. Có, không cần evaluation.

## Đáp án

1. **D.** D nối truy xuất dữ liệu với đối chiếu dữ liệu nguồn; A, B, C không khôi phục nguồn.

2. **A.** A kiểm tra tầng gây lỗi; B và C không sửa truy xuất dữ liệu, D bỏ bằng chứng.

3. **B.** B thể hiện đánh đổi; A giả định mọi dữ liệu liên quan, C và D bỏ giới hạn/kiểm chứng.

## Đối chiếu RAG trên Bedrock

Đã đọc [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276781), sources/bedrock-lessons/276781.json và đối chiếu với bản API. Mẫu tạo các vectơ biểu diễn từng đoạn văn bản và lưu cùng nội dung. Distance hỗ trợ xếp hạng liên quan, không phải điểm tự tin đã hiệu chỉnh hoặc xác suất câu trả lời đúng. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289186), sources/vertex-lessons/289186.json. VectorIndex lưu vectơ biểu diễn kèm text hoặc source ID. generate_embedding có thể trả list vectors: cần kiểm tra shape truy vấn đơn và cardinality trước zip để không bỏ đoạn văn bản âm thầm. Distance0.71/0.72 không là điểm tự tin đáp án. Dùng chung câu hỏi khái niệm.
