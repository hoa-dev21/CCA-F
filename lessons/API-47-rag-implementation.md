# Implementing the RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287761), sources/api-lessons/287761.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Kho vectơ (vector store) cần giữ đoạn văn bản gốc hoặc một tham chiếu để lấy lại đoạn đó. Chỉ có vectơ mà không biết nó thuộc nội dung nào thì ứng dụng không thể đưa đúng tài liệu vào câu hỏi cho mô hình.

Mẫu trong bài thực hiện các bước: chia tài liệu, tạo vectơ, lưu cặp vectơ và nội dung, rồi tìm những kết quả phù hợp nhất. Việc lấy k kết quả đầu thường được gọi là truy vấn top-k.

Chọn k là một quyết định cần thử trên dữ liệu thật. Lấy nhiều đoạn hơn có thể bổ sung bằng chứng, nhưng cũng có thể thêm nội dung gây nhiễu hoặc vượt lượng ngữ cảnh mô hình xử lý được. Không nên mặc định càng nhiều càng tốt.

Ví dụ: Kết quả tìm kiếm trỏ nhầm đoạn văn. Trước khi sửa prompt trả lời, hãy kiểm tra cách chia dữ liệu, tạo vectơ, tìm kiếm và ánh xạ kết quả về nguồn. Đầu vào sai có thể là nguyên nhân khiến câu trả lời sai.

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

Mẫu Bedrock tạo vectơ cho từng đoạn và lưu cùng nội dung. Điểm khoảng cách giúp xếp mức liên quan, không phải xác suất đúng hoặc độ tự tin đã hiệu chỉnh của câu trả lời. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276781). Bản lưu: `sources/bedrock-lessons/276781.json`.

## Đối chiếu Vertex

`VectorIndex` lưu vectơ kèm văn bản hoặc mã nguồn tham chiếu. `generate_embedding` có thể trả danh sách vectơ, nên kiểm tra cấu trúc kết quả cho truy vấn đơn và số phần tử trước khi ghép bằng `zip`, tránh âm thầm bỏ đoạn. Các khoảng cách 0.71 và 0.72 không phải điểm tự tin của đáp án. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289186). Bản lưu: `sources/vertex-lessons/289186.json`.
