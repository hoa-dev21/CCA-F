# Handling message blocks — Giữ đầy đủ cấu trúc phản hồi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287757), sources/api-lessons/287757.json. Câu hỏi tự biên soạn.

## Tóm tắt

Phản hồi có công cụ không chỉ là một chuỗi văn bản. `content` là danh sách block: có thể chứa `text` và `tool_use`. Tool-use block có ID, tên công cụ và đầu vào.

Nếu helper chỉ trả `content[0].text`, ứng dụng có thể đánh mất yêu cầu gọi công cụ. Cần giữ toàn bộ `response.content` trong assistant message của lịch sử, rồi xử lý từng block theo loại.

Để Claude có tool để chọn, request truyền danh sách định nghĩa qua `tools`. Sau phản hồi, ứng dụng đọc tool-use block, thực thi công cụ và gửi kết quả cùng lịch sử đầy đủ.

Lưu ý thực hành bổ sung: không nên giả định tool luôn ở vị trí thứ hai chỉ vì ví dụ hiển thị như vậy. Ý nghĩa của `type` mới cho biết block cần xử lý. Text giải thích như “tôi sẽ tra cứu” không thay thế tool-use block.

## Câu hỏi

**1. Chọn một.** Helper chỉ lưu text, làm mất tool-use block. Sửa trực tiếp?

A. Xóa lịch sử.

B. Chuyển tất cả thành user message.

C. Lưu toàn bộ `response.content` với role `assistant`.

D. Chỉ hiển thị thêm lời giải thích.

**2. Chọn hai.** Tool-use block mang những dữ liệu nào?

A. Tên và đối số công cụ.

B. Mật khẩu đăng nhập bắt buộc.

C. ID để liên kết lần gọi.

D. Kết quả backend luôn có sẵn.

**3. Chọn một.** Claude nói “tôi sẽ kiểm tra đơn hàng”. Điều đó có đủ để ứng dụng thực thi đúng tool không?

A. Có, chỉ cần dò chữ “kiểm tra”.

B. Không; cần xử lý yêu cầu công cụ có cấu trúc.

C. Có, đó đã là kết quả backend.

D. Có, mọi text đều là tool call.

## Đáp án

1. **C.** A mất ngữ cảnh; B sai vai trò; D chỉ đổi cách hiển thị.
2. **A, C.** B không phải trường bắt buộc; D nhầm yêu cầu với kết quả.
3. **B.** A dễ diễn giải sai văn bản; C và D nhầm text với thao tác hoặc kết quả thực tế.

## Đối chiếu Bedrock: Handling tool use responses

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276764) và đối chiếu khái niệm với bài chung. Converse dùng toolUse với toolUseId/name/input; phản hồi có stopReason. Giữ mọi content parts thay vì giả định block đầu luôn text. toolChoice trong ví dụ phân biệt auto/any/tool theo adapter provider. Nguồn: sources/bedrock-lessons/276764.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Handling message blocks](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289179), sources/vertex-lessons/289179.json. Giữ toàn bộ assistant response.content gồm text/tool_use và ID/input/name. Không giả định một text block hoặc vị trí cố định cho tool_use. Dùng chung câu hỏi khái niệm.
