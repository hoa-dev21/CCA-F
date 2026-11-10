# Text chunking strategies

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287776), sources/api-lessons/287776.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Chunking là chia tài liệu thành các đoạn nhỏ để lưu và tìm kiếm. Cách chia ảnh hưởng trực tiếp đến việc hệ thống có lấy được đủ ngữ cảnh hay không.

Có vài hướng thường gặp trong bài:

- Chia theo kích thước: dễ áp dụng nhưng có thể cắt giữa câu hoặc tách tiêu đề khỏi nội dung.
- Cho các đoạn chồng lên nhau một phần (overlap): giữ thông tin lân cận ở ranh giới, đổi lại có thêm dữ liệu trùng và lượng lưu trữ.
- Chia theo cấu trúc như phần hoặc tiêu đề: phù hợp khi tài liệu có định dạng nhất quán.
- Chia theo câu hoặc ý nghĩa: có thể giữ nội dung liền mạch hơn; cách dựa trên ý nghĩa cần thêm xử lý.

Ví dụ: Quy tắc nằm ở cuối đoạn, còn ngoại lệ nằm ở đầu đoạn tiếp theo. Nếu chỉ tìm được đoạn đầu, AI có thể trả lời thiếu điều kiện. Cần xem lại ranh giới chia hoặc phần chồng lặp rồi thử với câu hỏi thực tế.

Không có kích thước hay phương pháp tốt nhất cho mọi kho. Hãy kiểm tra đoạn được lấy có giữ đủ ý nghĩa và truy được về nguồn không; cách phức tạp nhất chưa chắc đáng với công sức thêm vào.

## Câu hỏi

**1. Chọn một.** Đoạn văn bản bị tách điều kiện khỏi quy tắc ở câu kế. Hướng kiểm tra phù hợp?

A. Chỉ đổi mô hình ngay.

B. Cắt nhỏ hơn tùy tiện.

C. Đánh dấu mọi đáp án đúng.

D. Điều chỉnh ranh giới/overlap và đo chất lượng ngữ cảnh.

**2. Chọn một.** Kho Markdown có tiêu đề nhất quán. Chiến lược nào đáng thử?

A. Đoạn văn bản theo phần/tiêu đề rồi kiểm tra độ đầy đủ.

B. Luôn bỏ tiêu đề.

C. Chỉ một đoạn văn bản rỗng.

D. Không cần xét cấu trúc.

**3. Chọn một.** Overlap tạo đánh đổi nào?

A. Chỉ giảm dữ liệu vô hạn.

B. Giữ bối cảnh lân cận nhưng tăng phần trùng/lượng lưu.

C. Bảo đảm mọi truy vấn đúng.

D. Thay thế mọi đánh giá.

## Đáp án

1. **D.** D nhắm nguyên nhân; A chưa sửa truy xuất dữ liệu, B có thể làm tệ hơn, C che lỗi.

2. **A.** A dùng bảo đảm của nguồn; B mất nghĩa, C không có dữ liệu, D bỏ tín hiệu hữu ích.

3. **B.** B mô tả chi phí/lợi ích; A sai về lượng dữ liệu, C và D bảo đảm quá mức.

## Đối chiếu RAG trên Bedrock

Bài Bedrock so sánh chia theo kích thước, cấu trúc, ý nghĩa và việc cho các đoạn chồng nhau một phần. Cần đánh giá trên tài liệu thật, không mặc định một cách luôn tốt nhất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276782). Bản lưu: `sources/bedrock-lessons/276782.json`.

## Đối chiếu Vertex

Mẫu chia đoạn cần bảo đảm `0 <= overlap < size` để vòng lặp tiếp tục tiến lên. Nhận định chia theo ký tự luôn đáng tin nhất cho mã không phải quy tắc chung. Hãy giữ tiêu đề và thông tin nguồn, rồi đo chất lượng tìm kiếm khi so sánh các cách chia. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289208). Bản lưu: `sources/vertex-lessons/289208.json`.
