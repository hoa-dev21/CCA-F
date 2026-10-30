# Sending tool results — Trả kết quả đúng lần gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287752), sources/api-lessons/287752.json. Câu hỏi tự biên soạn.

## Tóm tắt

Ứng dụng lấy đối số từ tool-use block để chạy hàm. Sau đó tạo `tool_result` trong một user message. `tool_use_id` phải khớp ID lần gọi; `content` chứa kết quả; `is_error` biểu thị thao tác thất bại khi có lỗi.

Một phản hồi có thể yêu cầu nhiều tool. Ghép bằng ID, không dựa vào thứ tự hoàn thành. Nếu hai phép tra cứu kết thúc đảo thứ tự, ID vẫn cho biết kết quả thuộc yêu cầu nào.

Request tiếp theo giữ lịch sử gốc, assistant message chứa tool call và user message chứa kết quả. Mẫu của bài tiếp tục truyền định nghĩa tools, giúp duy trì ngữ cảnh sử dụng công cụ.

Điểm cần nhớ: gọi hàm thành công chưa phải kết thúc luồng. Claude cần nhận kết quả để dùng nó trong phản hồi hoặc quyết định bước tiếp theo.

## Câu hỏi

**1. Chọn một.** Hai tool hoàn thành theo thứ tự đảo ngược. Ghép kết quả bằng gì?

A. Độ dài kết quả.

B. Vị trí hoàn thành.

C. Tên người dùng.

D. `tool_use_id` khớp ID yêu cầu.

**2. Chọn một.** Trong mẫu client tool, `tool_result` được đặt ở đâu?

A. Content của user message tiếp theo.

B. Thay vào tên model.

C. Xóa assistant message rồi chỉ gửi text trống.

D. Trong API key.

**3. Chọn một.** Backend đã trả kết quả nhưng ứng dụng chưa gửi lại cho Claude. Bước nào còn thiếu?

A. Đổi tên cuộc hội thoại.

B. Tạo tool-result block liên kết đúng và gửi cùng lịch sử.

C. Coi lời dự đoán trước đó là kết quả thật.

D. Chỉ thay giọng điệu prompt.

## Đáp án

1. **D.** A và C không liên kết yêu cầu; B sai khi hoàn thành đảo thứ tự.
2. **A.** B và D sai vị trí; C xóa ngữ cảnh cần thiết.
3. **B.** A và D không chuyển dữ liệu; C thay bằng chứng bằng dự đoán.

## Đối chiếu Bedrock: Sending tool results

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276760) và đối chiếu khái niệm với bài chung. Converse thêm tất cả tool result parts vào user message, bảo toàn assistant tool requests và định nghĩa tool trong request tiếp theo. Đầu ra thực thi vẫn phải có ID khớp. Nguồn: sources/bedrock-lessons/276760.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Sending tool results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289184), sources/vertex-lessons/289184.json. Tool result ở user content, type tool_result, tool_use_id khớp request, content và is_error. Mẫu response.content[1] chỉ minh họa; cần duyệt theo type và trả đủ kết quả cho mọi request trong lượt. Không trộn is_error với MCP isError/Converse status. Dùng chung câu hỏi khái niệm.
