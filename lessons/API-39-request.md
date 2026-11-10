# Making a request

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287725), sources/api-lessons/287725.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Trong mẫu Python của khóa, ứng dụng gọi `client.messages.create` và truyền tên mô hình, `max_tokens` cùng danh sách `messages`. Mỗi tin nhắn ghi vai trò người nói (role) và nội dung.

`max_tokens` là giới hạn trên cho lượng đầu ra mô hình được sinh, không phải độ dài bắt buộc. Ví dụ: đặt 1000 không có nghĩa câu trả lời luôn phải dùng đủ 1000 token. Token là đơn vị mà mô hình dùng để xử lý văn bản, không nhất thiết tương ứng với một từ.

Phản hồi là một đối tượng chứa nội dung và các thông tin khác. Ví dụ cơ bản chỉ lấy `content[0].text` vì giả định câu trả lời là văn bản đơn giản. Khi bổ sung công cụ, cần giữ các khối nội dung và `stop_reason` để xử lý đúng luồng, thay vì chỉ lấy phần chữ đầu tiên.

Bài cũng đề cập đặt khóa API trong cấu hình môi trường và không đưa tệp `.env` chứa thông tin bí mật vào kho mã nguồn. Tên mô hình trong notebook là ví dụ tại thời điểm giảng, cần kiểm tra khả năng hỗ trợ khi triển khai. Xác thực và quản lý tài khoản không phải trọng tâm đề cương thi đã lưu.

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

Mẫu dùng `AnthropicVertex(region, project_id)`, `client.messages.create` và mã mô hình theo Vertex. Phần cài thư viện bổ sung `[vertex]`, vùng `global` và mã mô hình trong khóa không bảo đảm dùng được với mọi dự án. `max_tokens` là giới hạn trên, không phải độ dài mục tiêu. Lấy `content[0].text` chỉ phù hợp với ví dụ văn bản đơn giản.

Nguồn đối chiếu: [Making a request](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289155). Bản lưu: `sources/vertex-lessons/289155.json`.
