# Embedding: tìm văn bản theo ý nghĩa

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287759), sources/api-lessons/287759.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học

Embedding là cách chuyển văn bản thành một dãy số, gọi là vectơ. Máy tính dùng các vectơ này để tìm những đoạn văn có ý nghĩa gần với câu hỏi của bạn.

Ví dụ, bạn hỏi “Làm sao lấy lại mật khẩu?”. Hệ thống có thể tìm thấy tài liệu “Hướng dẫn đặt lại mật khẩu” dù tài liệu không dùng đúng từng từ trong câu hỏi.

Để so sánh được, câu hỏi và tài liệu phải được chuyển thành các vectơ tương thích. Không nên tự gán ý nghĩa cho từng con số, chẳng hạn cho rằng số đầu tiên luôn thể hiện chủ đề, còn số thứ hai luôn thể hiện cảm xúc.

Hai vectơ gần nhau chỉ cho thấy nội dung có thể liên quan. Điều đó chưa chứng minh tài liệu chứa đáp án đúng. Hệ thống vẫn phải đọc văn bản gốc và kiểm tra xem có đủ thông tin để trả lời hay không.

Các con số, nhà cung cấp và mô hình trong khóa học là ví dụ tại thời điểm ghi hình. Không áp dụng chúng như quy tắc chung cho mọi mô hình embedding. Phần triển khai cơ sở dữ liệu vectơ nằm ngoài phạm vi đề cương thi đã lưu trong dự án.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Queries use a new embedding model while documents use an old one with the same dimensions. Search behaves strangely. What should be checked first?

A. Whether both models produce vectors in a compatible space.

B. Rename the vector field.

C. Normalize generated answer lengths.

D. Increase top-k to compensate for any model difference.

**Question 2 — Choose one.** A password-reset result concerns administrators, but the user is a guest. What should happen before answering?

A. Check the passage and its applicability conditions.

B. Average guest and administrator vectors.

C. Remove account type from the question.

D. Treat the highest similarity score as sufficient for every account.

**Question 3 — Choose two.** Which TWO statements correctly explain embedding search?

A. Nearby vectors prove equal truth values.

B. Vector similarity identifies potentially relevant content.

C. The first dimension always represents topic.

D. Original text is needed to assess whether a passage answers the question.

**Question 4 — Choose one.** Exact search fails when a user says “forgot access code” and documents say “reset password.” What benefit should be tested?

A. Converting queries into verified answers.

B. Guaranteed success because synonyms have identical vectors.

C. Updating password procedures without reading sources.

D. Finding semantically related phrasing without identical words.

**Question 5 — Choose two.** Which TWO conditions make an embedding-model comparison meaningful?

A. Only equal vector dimensions.

B. Judge retrieved passages against question needs and conditions.

C. Use compatible query and document embedding configurations.

D. Compare raw scores from different models as one shared scale.

## Đáp án và giải thích

1. **A.** A đúng: Cùng số chiều chưa chứng minh cùng biểu diễn ngữ nghĩa. B sai: Metadata không biến đổi giá trị đã tạo. C sai: Không sửa sự không tương thích truy xuất. D sai: Không giải quyết cơ sở so sánh vectơ sai.

2. **A.** A đúng: Gần ngữ nghĩa không chứng minh đúng đối tượng. B sai: Phép toán không xác nhận quy trình đúng. C sai: Loại ràng buộc quan trọng làm sai nhiệm vụ. D sai: Điểm gần không mã hóa kết luận nghiệp vụ.

3. **B, D.** A sai: Tương tự ngữ nghĩa không phải tương đương chân lý. B đúng: Đó là vai trò tìm kiếm, chưa là xác minh. C sai: Không có diễn giải đơn giản được bảo đảm cho từng chiều. D đúng: Bằng chứng nằm trong nội dung nguồn.

4. **D.** A sai: Embedding không tạo bằng chứng đáp án. B sai: Gần nghĩa không có bảo đảm giống hệt hoặc luôn đúng. C sai: Biểu diễn không tạo kiến thức hiện hành. D đúng: Đây là khoảng trống của khớp từ nguyên văn.

5. **B, C.** A sai: Đủ hình dạng không đủ tương thích hoặc chất lượng. B đúng: Đo giá trị truy xuất thay vì chỉ số hình học. C đúng: Tránh đo lỗi do trộn không gian. D sai: Các điểm có thể khác ý nghĩa và phân bố.

## Đối chiếu RAG trên Bedrock

Mẫu Bedrock dùng `invoke_model` với Titan, khác thư viện và nhà cung cấp embedding của khóa API. Số chiều, khoảng giá trị và cách chuẩn hóa trong video không phải thuộc tính của mọi vectơ. Câu hỏi và tài liệu cần được biểu diễn tương thích để so sánh. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text embeddings](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276777). Bản lưu: `sources/bedrock-lessons/276777.json`.

## Đối chiếu Vertex

Mẫu Vertex dùng `embed_content` của google-genai với `text-embedding-005`, khác Titan của Bedrock. Đây là cấu hình trong khóa, không phải danh mục mô hình hoặc vùng hiện hành. Khoảng [-1, 1] không phải đặc tính chung của mọi embedding. Kiểm tra đúng mô hình, không gian biểu diễn, cách xử lý câu hỏi và tài liệu, cùng hình dạng dữ liệu và số chiều. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text embeddings](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289188). Bản lưu: `sources/vertex-lessons/289188.json`.
