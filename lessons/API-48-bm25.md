# BM25 lexical search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287767), sources/api-lessons/287767.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Tìm kiếm theo ý nghĩa (semantic search) có thể tìm đoạn liên quan dù cách dùng từ khác câu hỏi. Tuy nhiên, nó có thể bỏ sót một mã sự cố hoặc thuật ngữ cần khớp chính xác.

Tìm kiếm theo từ khóa (lexical search), chẳng hạn BM25, bổ sung khả năng tìm theo những từ hoặc mã cụ thể. Bài giới thiệu cách tính đến việc một từ xuất hiện phổ biến hay hiếm trong kho để hỗ trợ xếp hạng kết quả; đây chỉ là giải thích khái niệm, không phải toàn bộ công thức BM25.

Ví dụ: Bạn hỏi nguyên nhân của sự cố có mã INC-204. Tìm kiếm theo ý nghĩa có thể trả các bài cùng chủ đề nhưng không nói về đúng sự cố. Tìm theo mã INC-204 giúp bổ sung kết quả cần khớp chính xác.

Hai cách tìm kiếm có thể kết hợp. Tuy vậy, một đoạn chứa đúng mã vẫn chưa chắc nói rõ nguyên nhân sự cố. Cần đọc nội dung và bối cảnh để xác định có đủ bằng chứng trả lời không. Chi tiết thuật toán là phần bổ trợ cho mục tiêu thi hiện tại.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Hỏi về INC-204, semantic search trả nhiều sự cố tương tự nhưng không đúng mã. Bổ sung nào nhắm đúng khoảng trống?

A. Dùng sự cố gần nhất làm thay thế nếu mô tả tương tự.

B. Xóa mã INC-204 khỏi truy vấn để tăng độ gần nghĩa.

C. Tìm chính xác mã, rồi kiểm tra nội dung ứng viên.

D. Tăng temperature cho câu trả lời để thử nhiều sự cố hơn.

**Câu 2 — Chọn một.** BM25 tìm đúng trang chứa INC-204 nhưng trang chỉ liệt kê mã, không nói nguyên nhân. Có thể kết luận gì?

A. Mã trùng chứng minh đoạn giải thích nguyên nhân trong câu hỏi là đúng.

B. Điểm cao nhất đủ thay phần nội dung chưa có.

C. Khớp mã giúp tìm ứng viên, vẫn thiếu bằng chứng về nguyên nhân.

D. Chỉ cần thêm trích dẫn trang này vào kết luận dự đoán.

**Câu 3 — Chọn hai.** Kho có cả thuật ngữ kỹ thuật chính xác và câu hỏi dùng cách diễn đạt đời thường. Hai thiết kế nào có cơ sở?

A. Dùng lexical search để bổ sung tín hiệu khớp thuật ngữ hoặc mã.

B. Coi mọi từ xuất hiện nhiều trong kho là bằng chứng mạnh hơn từ hiếm.

C. Dùng semantic search cho các cách diễn đạt gần nghĩa.

D. Chỉ giữ thuật ngữ hiếm nhất rồi bỏ toàn bộ ngữ cảnh truy vấn.

**Câu 4 — Chọn một.** Sau thay đổi dữ liệu, nhiều trang lặp một từ chung và đứng cao trong tìm kiếm. Vì sao chỉ đếm số lần từ xuất hiện là chưa đủ?

A. Từ xuất hiện nhiều luôn nên bị loại dù là mã cần tìm.

B. Còn phải xét độ phổ biến của từ trên toàn kho.

C. Độ dài câu trả lời cuối sẽ sửa được thứ hạng truy xuất.

D. Mỗi từ hiếm phải được coi là đáp án nghiệp vụ đúng.

**Câu 5 — Chọn hai.** Đánh giá thêm BM25 vào hệ RAG, hai nhóm ca nào cần giữ trong bộ thử?

A. Chỉ các câu chứa nguyên văn tiêu đề tài liệu.

B. Chỉ đo có ít nhất một từ chung giữa truy vấn và kết quả.

C. Câu hỏi dùng từ đồng nghĩa và cần bối cảnh để trả lời.

D. Câu hỏi có mã/tên riêng cần khớp đúng đối tượng.

## Đáp án và giải thích

1. **C.** A sai: Tương tự không chứng minh cùng sự cố. B sai: Loại điều kiện định danh quan trọng. C đúng: Lexical search bổ sung khả năng khớp mã. D sai: Sampling đầu ra không sửa chọn sai tài liệu.

2. **C.** A sai: Không có quan hệ hỗ trợ đó. B sai: Điểm xếp hạng không tạo bằng chứng. C đúng: Đúng từ khóa chưa đủ trả lời nội dung yêu cầu. D sai: Có liên kết không làm suy đoán thành có căn cứ.

3. **A, C.** A đúng: Khớp chính xác có giá trị riêng. B sai: Không phản ánh logic phân biệt của truy xuất từ khóa. C đúng: Có thể hỗ trợ khi không trùng từ. D sai: Mất quan hệ và điều kiện của câu hỏi.

4. **B.** A sai: Loại máy móc có thể bỏ định danh quan trọng. B đúng: Tần suất thô không đo sức phân biệt của từ. C sai: Tầng sinh không đổi thứ hạng đã dùng. D sai: Hiếm chỉ là tín hiệu tìm kiếm.

5. **C, D.** A sai: Mẫu quá thuận lợi không đại diện cách hỏi thực tế. B sai: Điều kiện đó yếu hơn yêu cầu đủ bằng chứng. C đúng: Kiểm tra không đánh đổi mất semantic coverage. D đúng: Đo lợi ích lexical cụ thể.

## Đối chiếu RAG trên Bedrock

Bài Bedrock dùng mã sự cố để minh họa việc tìm theo từ khóa bổ sung cho tìm theo ý nghĩa. Giải thích về tần suất và độ hiếm của từ trong khóa chưa phải toàn bộ công thức BM25. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276776). Bản lưu: `sources/bedrock-lessons/276776.json`.

## Đối chiếu Vertex

Mã sự cố hiếm cần khả năng khớp từ cụ thể bên cạnh tìm gần nghĩa. BM25 xét tần suất, độ hiếm và chuẩn hóa độ dài, không chỉ đếm từ. Kiểm tra cách tách từ với mã có dấu hoặc ký hiệu. Khớp đúng mã chưa chứng minh đoạn đó trả lời câu hỏi hay được xếp hạng đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289195). Bản lưu: `sources/vertex-lessons/289195.json`.
