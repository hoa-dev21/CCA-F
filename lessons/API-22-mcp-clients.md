# Khám phá và gọi công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287775), sources/api-lessons/287775.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP client là thành phần trao đổi với MCP server. Hai việc cơ bản của client là lấy danh sách công cụ và gửi yêu cầu gọi một công cụ.

Luồng trong bài gồm: ứng dụng lấy định nghĩa công cụ qua client, gửi câu hỏi và các định nghĩa cho Claude, rồi nhận yêu cầu gọi công cụ. Client chuyển tên và đầu vào đến server. Server thực hiện thao tác với dịch vụ phía sau, trả kết quả về ứng dụng. Cuối cùng, ứng dụng gửi dữ liệu đó lại cho Claude để tạo câu trả lời.

Lấy danh sách chỉ giúp biết công cụ nào có sẵn, chưa chạy công cụ. Tương tự, server trả được dữ liệu chưa có nghĩa Claude đã nhận dữ liệu ấy. Ứng dụng vẫn phải đưa kết quả vào lượt hội thoại tiếp theo.

Bài còn nhắc đến các cách truyền thông điệp giữa client và server, gọi là transport. Ở đây cần nắm trách nhiệm của client; khi triển khai, phải kiểm tra cách kết nối phù hợp với phiên bản giao thức đang dùng.

## Câu hỏi

**1. Chọn một.** Muốn biết server cung cấp công cụ gì, client cần làm gì?

A. Tự đoán từ tên dịch vụ.

B. Yêu cầu liệt kê các công cụ.

C. Tạo câu trả lời cuối ngay.

D. Gửi kết quả giả.

**2. Chọn một.** Claude đã yêu cầu một công cụ. Bước nào nối tới MCP server?

A. Chỉ hiển thị tên công cụ.

B. Xóa các đối số.

C. Đổi tên câu hỏi.

D. Client gửi yêu cầu gọi công cụ với tên và đối số.

**3. Chọn một.** Server đã trả dữ liệu. Điều gì cần để Claude dùng dữ liệu ấy?

A. Ứng dụng gửi kết quả vào lượt hội thoại tiếp theo.

B. Chỉ giữ trong log mà không gửi.

C. Không cần làm gì vì đã liệt kê các công cụ.

D. Đổi bản mô tả cấu trúc dữ liệu thành câu trả lời của người dùng.

## Đáp án

1. **B.** A không đáng tin; C chưa có dữ liệu; D tạo thông tin giả.
2. **D.** A không thực thi; B bỏ thông tin đầu vào; C không liên quan lớp tích hợp.
3. **A.** B không đưa dữ liệu vào ngữ cảnh; C nhầm khám phá với trả kết quả; D nhầm định nghĩa và dữ liệu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296690). Bản lưu: `sources/mcp-lessons/296690.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock dùng cùng luồng lấy danh sách và gọi công cụ. Các phương thức truyền thông điệp được liệt kê trong khóa thuộc thời điểm giảng; phải kiểm tra khả năng hỗ trợ khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276793). Bản lưu: `sources/bedrock-lessons/276793.json`.

## Đối chiếu Vertex

Luồng là lấy danh sách qua `list_tools`, cho mô hình chọn, gọi `call_tool`, nhận kết quả rồi gửi lại mô hình. Cách truyền qua stdio hoặc HTTP phải theo đặc tả và cách triển khai. Không mặc định WebSocket được nhắc trong lời giảng là phương thức chuẩn có sẵn ở mọi client. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289204). Bản lưu: `sources/vertex-lessons/289204.json`.
