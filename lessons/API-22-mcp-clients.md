# MCP clients — Khám phá và gọi công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287775), sources/api-lessons/287775.json. Câu hỏi tự biên soạn.

## Tóm tắt

MCP client là cầu nối giao tiếp với MCP server. Hai hoạt động quan trọng là **liệt kê công cụ** và **gọi công cụ**. Liệt kê cung cấp định nghĩa để ứng dụng đưa vào request cho Claude; gọi công cụ yêu cầu server thực thi tên và đối số đã chọn.

Luồng trong bài: người dùng hỏi → ứng dụng lấy danh sách tools qua client → gửi câu hỏi và tools cho Claude → nhận tool request → client chuyển yêu cầu sang server → server gọi dịch vụ → kết quả về ứng dụng → gửi lại Claude để tạo câu trả lời.

Lấy danh sách không thực thi công cụ. Gọi công cụ cũng chưa tự tạo câu trả lời cuối: ứng dụng vẫn cần nối kết quả vào hội thoại.

Bài đề cập khả năng dùng nhiều phương thức giao tiếp. Phần ôn ở đây tập trung trách nhiệm của client; không dùng danh sách transport trong bài làm hướng dẫn triển khai phiên bản protocol hiện hành khi chưa xác minh.

## Câu hỏi

**1. Chọn một.** Muốn biết server cung cấp công cụ gì, client cần làm gì?

A. Tự đoán từ tên dịch vụ.

B. Yêu cầu liệt kê tools.

C. Tạo câu trả lời cuối ngay.

D. Gửi kết quả giả.

**2. Chọn một.** Claude đã yêu cầu một tool. Bước nào nối tới MCP server?

A. Chỉ hiển thị tên tool.

B. Xóa các đối số.

C. Đổi tên câu hỏi.

D. Client gửi yêu cầu gọi tool với tên và đối số.

**3. Chọn một.** Server đã trả dữ liệu. Điều gì cần để Claude dùng dữ liệu ấy?

A. Ứng dụng gửi kết quả vào lượt hội thoại tiếp theo.

B. Chỉ giữ trong log mà không gửi.

C. Không cần làm gì vì đã liệt kê tools.

D. Đổi schema thành câu trả lời của người dùng.

## Đáp án

1. **B.** A không đáng tin; C chưa có dữ liệu; D tạo thông tin giả.
2. **D.** A không thực thi; B bỏ thông tin đầu vào; C không liên quan lớp tích hợp.
3. **A.** B không đưa dữ liệu vào context; C nhầm khám phá với trả kết quả; D nhầm định nghĩa và dữ liệu.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [MCP clients](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296690) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296690.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [MCP clients](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276793), sources/bedrock-lessons/276793.json và đối chiếu với bài chung. Cùng list/call flow. Danh sách transport trong khóa là mô tả lúc giảng, không xác nhận mọi transport đó là chuẩn được hỗ trợ hiện hành. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [MCP clients](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289204), sources/vertex-lessons/289204.json. Mạch list_tools -> model tool_use -> call_tool -> result -> model. Stdio và HTTP là các lựa chọn cần theo specification/implementation; WebSocket trong lời kể không được mặc định là transport tiêu chuẩn có sẵn ở mọi client. Dùng chung câu hỏi khái niệm.
