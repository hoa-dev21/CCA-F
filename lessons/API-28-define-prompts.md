# Đóng gói mẫu hướng dẫn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287784), sources/api-lessons/287784.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP prompts là các mẫu hướng dẫn được lưu trên server để dùng lại. Khi client yêu cầu một mẫu và cung cấp tham số, server trả về danh sách tin nhắn (messages) đã điền thông tin cần thiết. Ứng dụng dùng danh sách này để làm việc với mô hình.

Ví dụ: Mẫu chuyển tài liệu sang Markdown nhận `doc_id`, đưa mã tài liệu vào hướng dẫn, nêu cấu trúc cần có và cách dùng công cụ chỉnh sửa. Người dùng không phải tự viết lại toàn bộ quy trình mỗi lần.

Lấy được mẫu mới là lấy được hướng dẫn, chưa phải sửa xong tài liệu. Ứng dụng còn phải gửi hướng dẫn cho Claude và xử lý các thao tác cần thiết.

Dùng Inspector để thử mẫu với tham số cụ thể và xem các tin nhắn được tạo ra. Kiểm tra mã tài liệu, nội dung hướng dẫn và cấu trúc tin nhắn, rồi thử trên dữ liệu thực tế để biết chất lượng kết quả. Mẫu hữu ích cần gắn với nhiệm vụ của server, có mô tả rõ và dùng được các công cụ, tài liệu sẵn có.

## Câu hỏi

**1. Chọn một.** Client lấy prompt “định dạng” thành công. Điều gì đã xảy ra chắc chắn theo bài?

A. Mọi tài liệu đã được sửa xong.

B. Hệ thống xử lý phía máy chủ đã tự chạy mọi công cụ.

C. Server đã trả messages của mẫu hướng dẫn.

D. Không cần gửi gì cho Claude.

**2. Chọn một.** Muốn kiểm tra `doc_id` được chèn đúng trước tích hợp, làm gì?

A. Dùng inspector lấy prompt với tham số và xem messages.

B. Chỉ đọc tên decorator.

C. Bỏ tham số để đoán giá trị.

D. Đếm số ký tự description.

**3. Chọn một.** Mẫu hướng dẫn có giá trị nhất khi nào?

A. Càng mơ hồ càng tốt.

B. Không liên quan chức năng server.

C. Luôn bỏ mọi công cụ hiện có.

D. Thể hiện hướng dẫn chuyên môn cụ thể, liên quan và đã kiểm thử.

## Đáp án

1. **C.** A và B nhầm tạo hướng dẫn với thực thi; D bỏ bước chạy với mô hình.
2. **A.** B và D không kiểm tra nội dung được tạo; C không xác minh thay tham số.
3. **D.** A tăng mơ hồ; B thiếu giá trị tác vụ; C bỏ khả năng hỗ trợ thực thi.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296698). Bản lưu: `sources/mcp-lessons/296698.json`.

## Đối chiếu MCP trong khóa Bedrock

Mẫu hướng dẫn trả về tin nhắn sau khi điền tham số. Đường dẫn nhập thành phần thư viện trong mã cần đối chiếu với phiên bản đang dùng. Tạo đúng mẫu chưa chứng minh thao tác sửa tài liệu đã chạy. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276801). Bản lưu: `sources/bedrock-lessons/276801.json`.

## Đối chiếu Vertex

Decorator đăng ký prompt trả danh sách tin nhắn với tham số `doc_id`. Mẫu dùng lại không tự sửa tài liệu; mô hình và ứng dụng phải thực hiện vòng công cụ theo quyền. Nhận định “đáng tin cậy mọi lần” là lợi ích mong muốn, không phải bảo đảm cho mọi đầu vào. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289249). Bản lưu: `sources/vertex-lessons/289249.json`.
