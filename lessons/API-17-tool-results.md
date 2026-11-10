# Trả kết quả đúng lần gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287752), sources/api-lessons/287752.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Ứng dụng lấy đối số từ tool-use block để chạy hàm. Sau đó tạo `tool_result` trong một tin nhắn của người dùng. `tool_use_id` phải khớp ID lần gọi; `content` chứa kết quả; `is_error` biểu thị thao tác thất bại khi có lỗi.

Một phản hồi có thể yêu cầu nhiều công cụ. Ghép bằng ID, không dựa vào thứ tự hoàn thành. Nếu hai phép tra cứu kết thúc đảo thứ tự, ID vẫn cho biết kết quả thuộc yêu cầu nào.

Yêu cầu tiếp theo giữ lịch sử gốc, assistant message chứa công cụ call và tin nhắn của người dùng chứa kết quả. Mẫu của bài tiếp tục truyền định nghĩa các công cụ, giúp duy trì ngữ cảnh sử dụng công cụ.

Điểm cần nhớ: gọi hàm thành công chưa phải kết thúc luồng. Claude cần nhận kết quả để dùng nó trong phản hồi hoặc quyết định bước tiếp theo.

## Câu hỏi

**1. Chọn một.** Hai công cụ hoàn thành theo thứ tự đảo ngược. Ghép kết quả bằng gì?

A. Độ dài kết quả.

B. Vị trí hoàn thành.

C. Tên người dùng.

D. `tool_use_id` khớp ID yêu cầu.

**2. Chọn một.** Trong mẫu công cụ do ứng dụng thực thi, `tool_result` được đặt ở đâu?

A. Nội dung của tin nhắn của người dùng tiếp theo.

B. Thay vào tên mô hình.

C. Xóa assistant message rồi chỉ gửi text trống.

D. Trong API key.

**3. Chọn một.** Hệ thống xử lý phía máy chủ đã trả kết quả nhưng ứng dụng chưa gửi lại cho Claude. Bước nào còn thiếu?

A. Đổi tên cuộc hội thoại.

B. Tạo tool-result block liên kết đúng và gửi cùng lịch sử.

C. Coi lời dự đoán trước đó là kết quả thật.

D. Chỉ thay giọng điệu prompt.

## Đáp án

1. **D.** A và C không liên kết yêu cầu; B sai khi hoàn thành đảo thứ tự.
2. **A.** B và D sai vị trí; C xóa ngữ cảnh cần thiết.
3. **B.** A và D không chuyển dữ liệu; C thay bằng chứng bằng dự đoán.

## Đối chiếu Bedrock: Sending kết quả công cụ

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276760) và đối chiếu khái niệm với bài chung. Converse thêm tất cả kết quả công cụ parts vào tin nhắn của người dùng, bảo toàn assistant công cụ requests và định nghĩa công cụ trong yêu cầu tiếp theo. Đầu ra thực thi vẫn phải có ID khớp. Nguồn: sources/bedrock-lessons/276760.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Sending tool results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289184), sources/vertex-lessons/289184.json. Kết quả công cụ ở user nội dung, type tool_result, tool_use_id khớp yêu cầu, nội dung và is_error. Mẫu phản hồi.nội dung[1] chỉ minh họa; cần duyệt theo type và trả đủ kết quả cho mọi yêu cầu trong lượt. Không trộn is_error với MCP isError/Converse status. Dùng chung câu hỏi khái niệm.
