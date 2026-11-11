# Embedding: tìm văn bản theo ý nghĩa

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287759), sources/api-lessons/287759.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học

Embedding là cách chuyển văn bản thành một dãy số, gọi là vectơ. Máy tính dùng các vectơ này để tìm những đoạn văn có ý nghĩa gần với câu hỏi của bạn.

Ví dụ, bạn hỏi “Làm sao lấy lại mật khẩu?”. Hệ thống có thể tìm thấy tài liệu “Hướng dẫn đặt lại mật khẩu” dù tài liệu không dùng đúng từng từ trong câu hỏi.

Để so sánh được, câu hỏi và tài liệu phải được chuyển thành các vectơ tương thích. Không nên tự gán ý nghĩa cho từng con số, chẳng hạn cho rằng số đầu tiên luôn thể hiện chủ đề, còn số thứ hai luôn thể hiện cảm xúc.

Hai vectơ gần nhau chỉ cho thấy nội dung có thể liên quan. Điều đó chưa chứng minh tài liệu chứa đáp án đúng. Hệ thống vẫn phải đọc văn bản gốc và kiểm tra xem có đủ thông tin để trả lời hay không.

Các con số, nhà cung cấp và mô hình trong khóa học là ví dụ tại thời điểm ghi hình. Không áp dụng chúng như quy tắc chung cho mọi mô hình embedding. Phần triển khai cơ sở dữ liệu vectơ nằm ngoài phạm vi đề cương thi đã lưu trong dự án.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Truy vấn được tạo embedding bằng mô hình mới, kho vẫn dùng mô hình cũ có cùng số chiều. Tìm kiếm trả kết quả lạ. Kiểm tra nào cần ưu tiên?

A. Kiểm tra hai model có tạo vectơ cùng không gian không.

B. Đổi tên trường lưu vectơ thành tên mô hình mới.

C. Chuẩn hóa độ dài câu trả lời của mô hình sinh.

D. Tăng top-k để bù mọi khác biệt giữa hai mô hình.

**Câu 2 — Chọn một.** Đoạn đứng đầu rất gần truy vấn “đặt lại mật khẩu” nhưng nói về tài khoản quản trị, còn người hỏi dùng tài khoản khách. Điều gì cần làm trước trả lời?

A. Đọc nội dung và điều kiện áp dụng của đoạn nguồn.

B. Lấy trung bình vectơ của tài khoản khách và quản trị rồi trả lời.

C. Bỏ loại tài khoản khỏi câu hỏi để tăng độ tương đồng.

D. Dùng điểm cao nhất làm bằng chứng đủ cho mọi tài khoản.

**Câu 3 — Chọn hai.** Nhóm muốn giải thích kết quả tìm kiếm bằng embedding. Hai phát biểu nào chính xác?

A. Hai vectơ gần nhau chứng minh hai mệnh đề có cùng giá trị đúng/sai.

B. Vectơ hỗ trợ so độ gần để tìm nội dung có thể liên quan.

C. Chiều đầu tiên luôn là chủ đề nên dùng nó làm bộ lọc cố định.

D. Cần giữ văn bản gốc để đánh giá đoạn có thực sự trả lời câu hỏi.

**Câu 4 — Chọn một.** Người dùng hỏi “quên mã truy cập”, tài liệu ghi “đặt lại mật khẩu”. Tìm theo đúng cụm từ thất bại. Lợi ích nào của embedding đáng thử ở đây?

A. Chuyển truy vấn thành một câu trả lời đã được xác minh.

B. Bảo đảm tìm đúng vì mọi từ đồng nghĩa đều có vectơ giống hệt.

C. Tự cập nhật quy trình đổi mật khẩu mà không cần đọc tài liệu.

D. Tìm các cách diễn đạt gần nghĩa dù không trùng toàn bộ từ.

**Câu 5 — Chọn hai.** Đánh giá thay mô hình embedding, hai điều kiện nào giúp kết quả có ý nghĩa?

A. Chỉ kiểm tra số chiều đầu ra bằng nhau.

B. Chấm đoạn lấy được theo nhu cầu và điều kiện của câu hỏi.

C. Tạo biểu diễn truy vấn và tài liệu bằng cấu hình tương thích.

D. So trực tiếp điểm gần từ hai mô hình như cùng một thang đo.

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
