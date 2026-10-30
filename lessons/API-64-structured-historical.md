# Structured data — Ví dụ prefill và stop sequence

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287732), sources/api-lessons/287732.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Tóm tắt

Bài giải quyết đầu ra JSON bị bao bởi Markdown và lời giải thích. Ví dụ lịch sử dùng assistant prefill mở code fence và stop sequence ở dấu đóng, rồi parse chuỗi nhận được.

Đây là kỹ thuật định hướng định dạng trong mẫu model/SDK của khóa, không phải bảo đảm schema hoặc độ đúng nghiệp vụ. Không mặc định model hiện tại hỗ trợ prefill hay phối hợp với mọi tính năng. Bản này mô tả bài đã học, không khuyến nghị chạy mã ví dụ chưa kiểm tra tương thích.

Để ôn Architect, đọc thêm EXAM-05 về tool_choice/schema và EXAM-06 về validation. Parser JSON thành công chưa chứng minh đủ trường, đúng giá trị hoặc nguồn có thông tin. Stop sequence cũng có thể làm đầu ra dừng không như mong muốn nếu thiết kế sai.

## Câu hỏi

**1. Chọn một.** Ví dụ cắt Markdown để thu JSON có tự bảo đảm đúng schema nghiệp vụ không?

A. Có, mọi JSON hợp lệ đều đúng.

B. Không; cần schema/validation và kiểm tra ngữ nghĩa phù hợp.

C. Có, chỉ cần strip whitespace.

D. Có, không cần dữ liệu nguồn.

**2. Chọn một.** Muốn chạy prefill từ notebook trên model khác. Cần làm gì trước?

A. Giả định mọi model giống nhau.

B. Chỉ đổi tên biến.

C. Kiểm tra hỗ trợ/tương thích theo model/API thực tế.

D. Bỏ mọi lỗi API.

**3. Chọn một.** Ôn lựa chọn bắt buộc tool extraction theo Exam Guide nên đọc bài nào trong bộ?

A. EXAM-05 structured output/tool_choice.

B. Chỉ bảng giới hạn ảnh.

C. Chỉ cài Node.

D. Chỉ đổi màu UI.

## Đáp án

1. **B.** B phân biệt cú pháp và yêu cầu; A, C, D coi hình thức thay nội dung.

2. **C.** C kiểm tra hợp đồng; A suy rộng, B không sửa tương thích, D che lỗi.

3. **A.** A đi đúng mục tiêu4.3; B, C, D không giải quyết hợp đồng extraction.

## Đối chiếu bài Bedrock

Đã đọc [Structured data](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276724), sources/bedrock-lessons/276724.json. Cùng ví dụ prefill mở code fence và stop marker để bỏ phần bao Markdown. Chỉ mô tả kỹ thuật lịch sử; cần kiểm tra model tương thích và validation, không coi parse được là đúng nghiệp vụ. Dùng chung bản giải thích/câu hỏi tương đương, không tăng số câu.

## Đối chiếu Vertex

Đã đọc [Structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289158), sources/vertex-lessons/289158.json. Mẫu ghép assistant prefill ```json với stop sequence ``` rồi json.loads. Đây là kỹ thuật lịch sử trong video, không bảo đảm schema/giá trị đúng và không mặc định tương thích mọi model/thinking mode. Ưu tiên output contract được hỗ trợ cùng validation. Dùng chung câu hỏi khái niệm.
