# Trả kết quả đúng lần gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287752), sources/api-lessons/287752.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Sau khi Claude yêu cầu gọi công cụ, ứng dụng lấy đầu vào trong khối `tool_use` và chạy hàm tương ứng. Kết quả cần được gửi lại để Claude có thể trả lời hoặc quyết định bước tiếp theo.

Trong mẫu của bài, ứng dụng tạo khối `tool_result` bên trong một tin nhắn có vai trò `user`. Đây là cách biểu diễn kết quả công cụ trong giao thức; không có nghĩa người dùng phải tự gõ kết quả đó.

Khối kết quả có các thông tin quan trọng: `tool_use_id` khớp với mã của lần gọi ban đầu; `content` chứa dữ liệu trả về; `is_error` đánh dấu lỗi khi thao tác thất bại.

Một phản hồi có thể yêu cầu nhiều công cụ. Giả sử hai phép tra cứu chạy cùng lúc nhưng kết thúc theo thứ tự khác nhau: phải ghép kết quả bằng mã định danh, không bằng thứ tự hoàn thành.

Ở yêu cầu tiếp theo, giữ lịch sử trước đó, tin nhắn `assistant` chứa yêu cầu gọi công cụ và tin nhắn `user` chứa kết quả. Mẫu của bài cũng tiếp tục gửi định nghĩa công cụ. Chạy hàm thành công mới là một phần của luồng; cần gửi kết quả lại cho Claude thì mô hình mới sử dụng được dữ liệu ấy.

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

## Đối chiếu Bedrock: gửi kết quả công cụ

Converse đặt tất cả các khối kết quả công cụ vào tin nhắn vai trò `user`. Yêu cầu tiếp theo cần giữ phản hồi `assistant` chứa các lời gọi cùng định nghĩa công cụ. Mỗi kết quả phải có mã định danh khớp lần gọi tương ứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276760). Bản lưu: `sources/bedrock-lessons/276760.json`.

## Đối chiếu Vertex

Mẫu Vertex gửi khối `tool_result` trong nội dung tin nhắn `user`, gồm `tool_use_id`, nội dung và dấu lỗi `is_error`. Lấy `response.content[1]` chỉ là cách minh họa; khi triển khai cần duyệt theo loại và trả đủ kết quả của mọi lời gọi. Không trộn `is_error` với `isError` của MCP hoặc `status` của Converse. Dùng chung câu hỏi.

Nguồn đối chiếu: [Sending tool results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289184). Bản lưu: `sources/vertex-lessons/289184.json`.
