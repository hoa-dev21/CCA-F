# Luồng qua Bedrock

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276716), sources/bedrock-lessons/276716.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Trong ví dụ trò chuyện trên web, yêu cầu đi qua bốn chặng: người dùng nhập câu hỏi trên trình duyệt; máy chủ ứng dụng dùng Bedrock client để gọi mô hình; Bedrock trả tin nhắn của trợ lý; máy chủ chuyển kết quả về giao diện.

Dùng nhà cung cấp đám mây thay đổi cách kết nối tới mô hình. Ứng dụng vẫn chịu trách nhiệm gửi dữ liệu phù hợp, quản lý lịch sử hội thoại và xử lý phản hồi.

Ví dụ: Giao diện không hiện câu trả lời. Cần xác định câu hỏi đã tới máy chủ chưa, lời gọi Bedrock có thành công không và mã xử lý có đọc đúng phản hồi không. Chỉ thay prompt có thể không giải quyết lỗi nằm ở một chặng khác.

Gửi yêu cầu thành công cũng chưa chứng minh câu trả lời đúng nhiệm vụ. Sơ đồ này chỉ mô tả luồng tổng thể, không đủ để kết luận về quyền truy cập, vùng triển khai hoặc chính sách lưu dữ liệu. Các chi tiết đó cần tài liệu và cấu hình của môi trường thực tế.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** The provider returns HTTP success, but the UI is blank and adapter behavior is unknown. What should be inspected first?

A. Shorten the system prompt.

B. The payload through the backend adapter to the UI.

C. Replace the model.

D. Retry in the browser regardless of existing results.

**Question 2 — Choose two.** Which TWO responsibilities remain with the application when moving from direct API access to Bedrock?

A. Maintain conversation history and send necessary context.

B. Assume the provider stores all conversations by user ID.

C. Handle responses correctly and transmit suitable data to the UI.

D. Let browsers infer response schemas from model names.

**Question 3 — Choose one.** The backend logs “request succeeded,” but the answer omits a required condition. What is correct?

A. Transport success does not establish task quality.

B. Provider success proves the user requirement was met.

C. This must be a browser defect.

D. More cloud permissions will improve comprehension.

**Question 4 — Choose one.** A browser-backend-Bedrock diagram is used to promise the provider never stores data. What is actually needed?

A. Backend approval of the diagram as full lifecycle evidence.

B. Assume only the backend stores data.

C. Transport encryption as proof of no retention.

D. Verification of actual retention policies and configuration.

**Question 5 — Choose two.** Which TWO observations help distinguish browser, backend, and provider failures?

A. Statuses and correlation IDs across boundaries.

B. Only total duration and “failed.”

C. Validated adapter inputs and outputs without exposing secrets.

D. Only model confidence.

## Đáp án và giải thích

1. **B.** B theo chặng còn chưa xác minh trong luồng. A/C chưa có bằng chứng lỗi ở sinh nội dung. D có thể tạo yêu cầu lặp mà không sửa adapter/hiển thị.

2. **A, C.** A và C là trách nhiệm điều phối dữ liệu của ứng dụng. B không được suy ra từ đổi provider. D cấu trúc phải theo hợp đồng, không đoán từ tên model.

3. **A.** A phân biệt vận hành và chất lượng ngữ nghĩa. B suy quá tín hiệu HTTP. C khoanh lỗi chưa có bằng chứng. D quyền không trực tiếp sửa thiếu ngữ cảnh hoặc suy luận.

4. **D.** D cần chính sách và cấu hình có thẩm quyền về lưu trữ. A sơ đồ luồng giản lược không mô tả đầy đủ retention. B nơi browser gọi không xác định nơi provider lưu. C mã hóa khi truyền khác việc giữ dữ liệu sau xử lý.

5. **A, C.** A nối các chặng, C xác định chỗ sai hợp đồng dữ liệu. B không khoanh được tầng lỗi. D không đo hoạt động truyền tải hay parse dữ liệu.
