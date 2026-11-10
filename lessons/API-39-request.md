# Making a request

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287725), sources/api-lessons/287725.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học

Trong mẫu Python của khóa, client.messages.create nhận mô hình, max_tokens và messages. max_tokens là trần sinh đầu ra, không phải độ dài bắt buộc phải đạt. Messages ghi role và nội dung; phản hồi là đối tượng có nội dung cùng thông tin mô tả.

Ví dụ cơ bản chỉ lấy nội dung[0].text vì giả định đầu ra văn bản đơn giản. Khi mở rộng sang các công cụ, không dùng cách lấy text này làm toàn bộ luồng: cần giữ các blocks và stop_reason.

Bài đề cập cấu hình khóa trong môi trường và không commit .env. Mã mô hình minh họa là mã lúc khóa được ghi, không mặc định còn phù hợp hiện tại. Authentication và quản lý tài khoản không thuộc trọng tâm Exam Guide đã tải.

## Câu hỏi

**1. Chọn một.** max_tokens=1000 có nghĩa gì trong mẫu?

A. Mọi câu trả lời bắt buộc dài đúng 1000 token.

B. Giới hạn trên cho đầu ra, không phải mục tiêu độ dài.

C. Giới hạn số message bằng 1000.

D. Bảo đảm tác vụ đã hoàn thành.

**2. Chọn một.** Hàm hỗ trợ chỉ lấy block text đầu tiên. Khi thêm tool use, cần thay đổi gì?

A. Bỏ mọi thông tin mô tả.

B. Đổi tên biến là đủ.

C. Giữ và xử lý toàn bộ blocks/metadata cần cho vòng gọi.

D. Coi mọi công cụ call là câu trả lời cuối.

**3. Chọn một.** Nên hiểu mô hình ID trong notebook khóa như thế nào?

A. Ví dụ theo thời điểm khóa; kiểm tra mô hình hỗ trợ khi triển khai.

B. Bảo đảm là mô hình mới nhất mãi mãi.

C. Thay thế hoàn toàn lựa chọn theo nhu cầu.

D. Không cần kiểm tra API hỗ trợ.

## Đáp án

1. **B.** B đúng vai trò trần; A nhầm mục tiêu, C sai loại giới hạn, D không suy ra từ tham số.

2. **C.** C bảo toàn yêu cầu công cụ; A mất tín hiệu, B không đổi luồng, D dừng sớm.

3. **A.** A phân biệt ví dụ và hiện hành; B, C, D bỏ xác minh tương thích.

## Đối chiếu Vertex

Nguồn [Making a request](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289155), sources/vertex-lessons/289155.json. Bài dùng AnthropicVertex(region, project_id), client.messages.create và mô hình ID có dạng riêng của Vertex. SDK extra [vertex], region global và mô hình ID trong mẫu là chi tiết khóa học, không phải bảo đảm khả dụng cho mọi project/model. max_tokens là trần, không là mục tiêu; nội dung[0].text chỉ phù hợp ví dụ text đơn giản.
