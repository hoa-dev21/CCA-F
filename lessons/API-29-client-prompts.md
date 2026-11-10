# Khám phá và lấy mẫu có tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287786), sources/api-lessons/287786.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Client dùng `list_prompts()` để lấy danh sách mẫu hướng dẫn trên MCP server, và `get_prompt(name, args)` để lấy các tin nhắn của một mẫu sau khi điền tham số.

Trong giao diện dòng lệnh của bài, người dùng chọn mẫu bằng lệnh bắt đầu với dấu gạch chéo, còn gọi là slash command, rồi cung cấp thông tin như mã tài liệu. Client lấy mẫu, ứng dụng gửi các tin nhắn cho Claude, sau đó xử lý những yêu cầu công cụ cần thiết.

Tên và giá trị tham số phải đúng với định nghĩa phía server. Ví dụ: mẫu yêu cầu `doc_id` nhưng client gửi một tên trường khác thì có thể không lấy được mẫu. Nếu gửi nhầm mã tài liệu, hướng dẫn có thể nhắm sai đối tượng.

Cần phân biệt ba mốc: biết có những mẫu nào, lấy được hướng dẫn đã điền tham số và thực hiện xong nhiệm vụ. Việc lấy mẫu thành công chưa chứng minh tài liệu đã được chỉnh sửa.

## Câu hỏi

**1. Chọn một.** Người dùng cần xem các mẫu có sẵn. Gọi gì trước?

A. `call_tool` với tên đoán.

B. `list_prompts()`.

C. Trả kết quả định dạng giả.

D. Xóa ngữ cảnh.

**2. Chọn một.** Mẫu yêu cầu `doc_id`, client truyền một khóa không đúng tên. Cần kiểm tra gì?

A. Chỉ tăng độ dài output.

B. Chỉ đổi mô hình.

C. Hợp đồng tham số giữa client và prompt phía server.

D. Chỉ thay giọng điệu tin nhắn của người dùng.

**3. Chọn một.** `get_prompt` trả messages đúng. Để hoàn thành tác vụ, bước nào còn cần?

A. Gửi các tin nhắn cho Claude và xử lý những yêu cầu gọi công cụ cần thiết.

B. Coi việc lấy template là đã sửa tài liệu.

C. Chỉ hiển thị tên template.

D. Bỏ mọi tham số và chạy lại danh sách.

## Đáp án

1. **B.** A gọi hành động khác; C bịa kết quả; D không khám phá mẫu.
2. **C.** A, B, D không sửa sự không khớp tên đối số.
3. **A.** B nhầm chuẩn bị với hoàn tất; C không thực thi; D quay lại khám phá thay vì dùng mẫu đã lấy.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296692). Bản lưu: `sources/mcp-lessons/296692.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cùng sử dụng `list_prompts`, `get_prompt` và tham số `doc_id`. Phân biệt danh sách mẫu, tin nhắn đã điền tham số và kết quả thực thi. Các bước này không thay nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276795). Bản lưu: `sources/bedrock-lessons/276795.json`.

## Đối chiếu Vertex

`list_prompts` lấy danh sách; `get_prompt` gửi tham số để server tạo tin nhắn. Client có thể hiển thị lệnh bắt đầu bằng dấu gạch chéo nếu hỗ trợ, nhưng không phải mọi client đều có giao diện này. Khám phá mẫu khác với chạy nhiệm vụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289209). Bản lưu: `sources/vertex-lessons/289209.json`.
