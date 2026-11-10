# Giữ đầy đủ cấu trúc phản hồi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287757), sources/api-lessons/287757.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Phản hồi của Claude có thể gồm nhiều khối nội dung, gọi là block, thay vì chỉ một chuỗi văn bản. Trường `content` chứa danh sách các khối này. Trong bài, hai loại cần phân biệt là `text` để chứa lời trả lời và `tool_use` để yêu cầu gọi công cụ.

Khối `tool_use` có mã định danh lần gọi, tên công cụ và đầu vào cần truyền. Ứng dụng dùng các thông tin này để thực hiện thao tác. Một câu như “Tôi sẽ kiểm tra đơn hàng” chỉ là lời diễn đạt, chưa phải yêu cầu gọi công cụ có cấu trúc.

Khi gửi yêu cầu, ứng dụng khai báo các công cụ cho Claude qua danh sách `tools`. Khi nhận phản hồi, cần lưu toàn bộ `response.content` vào tin nhắn có vai trò `assistant`, rồi duyệt từng khối theo trường `type`.

Nếu chỉ lấy `content[0].text`, bạn có thể làm mất các khối yêu cầu công cụ. Cũng không nên mặc định công cụ luôn nằm ở vị trí thứ hai chỉ vì một ví dụ có thứ tự như vậy. Sau khi xử lý yêu cầu công cụ, ứng dụng gửi kết quả cùng lịch sử cần thiết để Claude tiếp tục.

## Câu hỏi

**1. Chọn một.** Hàm hỗ trợ chỉ lưu text, làm mất tool-use block. Sửa trực tiếp?

A. Xóa lịch sử.

B. Chuyển tất cả thành tin nhắn của người dùng.

C. Lưu toàn bộ `response.content` với role `assistant`.

D. Chỉ hiển thị thêm lời giải thích.

**2. Chọn hai.** Tool-use block mang những dữ liệu nào?

A. Tên và đối số công cụ.

B. Mật khẩu đăng nhập bắt buộc.

C. ID để liên kết lần gọi.

D. Kết quả hệ thống xử lý phía máy chủ luôn có sẵn.

**3. Chọn một.** Claude nói “tôi sẽ kiểm tra đơn hàng”. Điều đó có đủ để ứng dụng thực thi đúng công cụ không?

A. Có, chỉ cần dò chữ “kiểm tra”.

B. Không; cần xử lý yêu cầu công cụ có cấu trúc.

C. Có, đó đã là kết quả hệ thống xử lý phía máy chủ.

D. Có, mọi text đều là công cụ call.

## Đáp án

1. **C.** A mất ngữ cảnh; B sai vai trò; D chỉ đổi cách hiển thị.
2. **A, C.** B không phải trường bắt buộc; D nhầm yêu cầu với kết quả.
3. **B.** A dễ diễn giải sai văn bản; C và D nhầm text với thao tác hoặc kết quả thực tế.

## Đối chiếu Bedrock: Handling tool use responses

Converse dùng `toolUse` với các trường `toolUseId`, `name`, `input` và có `stopReason` trong phản hồi. Giữ mọi khối nội dung, không giả định khối đầu luôn là văn bản. Cách chọn `auto`, `any` hoặc công cụ theo tên qua `toolChoice` phải theo giao diện nhà cung cấp. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276764). Bản lưu: `sources/bedrock-lessons/276764.json`.

## Đối chiếu Vertex

Giữ toàn bộ nội dung phản hồi của trợ lý, gồm `text`, `tool_use` và các trường ID, tên, đầu vào. Không giả định chỉ có một khối văn bản hoặc `tool_use` luôn ở vị trí cố định. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Handling message blocks](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289179). Bản lưu: `sources/vertex-lessons/289179.json`.
