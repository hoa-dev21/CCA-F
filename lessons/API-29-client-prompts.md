# Prompts in the client — Khám phá và lấy mẫu có tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287786), sources/api-lessons/287786.json. Câu hỏi tự biên soạn.

## Tóm tắt

Client dùng `list_prompts()` để khám phá mẫu có sẵn, và `get_prompt(name, args)` để lấy messages của mẫu cụ thể sau khi thay tham số.

Trong CLI của bài, người dùng chọn mẫu qua slash command, cung cấp đối số như tài liệu cần định dạng. Client lấy mẫu, ứng dụng gửi messages cho Claude, rồi Claude có thể dùng công cụ để thực hiện tác vụ.

Đối số phải khớp tên tham số server mong đợi. Một template đúng nhưng client truyền sai `doc_id` vẫn tạo ra tác vụ nhắm sai đối tượng hoặc không gọi được mẫu.

Phân biệt ba kết quả: danh sách mô tả các mẫu; messages của mẫu đã điền tham số; kết quả tác vụ sau khi chạy mô hình và công cụ. Ba bước này không thay thế nhau.

## Câu hỏi

**1. Chọn một.** Người dùng cần xem các mẫu có sẵn. Gọi gì trước?

A. `call_tool` với tên đoán.

B. `list_prompts()`.

C. Trả kết quả định dạng giả.

D. Xóa context.

**2. Chọn một.** Mẫu yêu cầu `doc_id`, client truyền một khóa không đúng tên. Cần kiểm tra gì?

A. Chỉ tăng độ dài output.

B. Chỉ đổi model.

C. Hợp đồng tham số giữa client và prompt phía server.

D. Chỉ thay giọng điệu user message.

**3. Chọn một.** `get_prompt` trả messages đúng. Để hoàn thành tác vụ, bước nào còn cần?

A. Gửi messages cho Claude và xử lý các tool calls cần thiết.

B. Coi việc lấy template là đã sửa tài liệu.

C. Chỉ hiển thị tên template.

D. Bỏ mọi tham số và chạy lại danh sách.

## Đáp án

1. **B.** A gọi hành động khác; C bịa kết quả; D không khám phá mẫu.
2. **C.** A, B, D không sửa sự không khớp tên đối số.
3. **A.** B nhầm chuẩn bị với hoàn tất; C không thực thi; D quay lại khám phá thay vì dùng mẫu đã lấy.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [Prompts in the client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296692) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296692.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Prompts in the client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276795), sources/bedrock-lessons/276795.json và đối chiếu với bài chung. Cùng list_prompts/get_prompt và đối số doc_id. Giữ ranh giới giữa danh sách mẫu, messages sau điền tham số và kết quả thực thi. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Prompts in the client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289209), sources/vertex-lessons/289209.json. list_prompts lấy danh sách; get_prompt truyền arguments để server tạo messages; client hiển thị slash command nếu hỗ trợ. Discovery không là execution, không mặc định mọi MCP client tự có slash UI. Dùng chung câu hỏi khái niệm.
