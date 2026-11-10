# Công cụ qua nhiều lượt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287750), sources/api-lessons/287750.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một câu hỏi có thể cần nhiều lần trao đổi giữa Claude và công cụ. Ví dụ: để xác định một ngày trong tương lai, Claude có thể cần công cụ lấy ngày hiện tại, rồi dùng kết quả đó để tính ngày sau một khoảng thời gian. Vì vậy, không nên dừng chỉ vì đã gọi một công cụ.

Hàm gửi yêu cầu cần nhận danh sách công cụ và trả về đối tượng phản hồi đầy đủ. Phần lưu lịch sử phải giữ được các dạng nội dung mà chương trình sử dụng, như chuỗi văn bản, danh sách khối hoặc nội dung của tin nhắn. Có thể viết hàm riêng để lấy văn bản hiển thị, nhưng không dùng phần văn bản đó thay cho toàn bộ phản hồi trong luồng xử lý.

Vòng xử lý gồm: gửi yêu cầu, lưu phản hồi, thực hiện các công cụ được yêu cầu, thêm kết quả vào lịch sử rồi gọi Claude tiếp. Claude dùng kết quả mới để trả lời hoặc yêu cầu công cụ khác.

Phần liên hệ với đề cương thi nhấn mạnh trường `stop_reason`, tức lý do mô hình dừng phản hồi. Giá trị `tool_use` cho biết cần xử lý yêu cầu công cụ; `end_turn` cho biết mô hình kết thúc lượt. Có văn bản trong phản hồi chưa đủ để kết luận đã xong, vì cùng phản hồi đó vẫn có thể chứa khối `tool_use`.

## Câu hỏi

**1. Chọn một.** Sau công cụ thứ nhất, Claude yêu cầu công cụ thứ hai để hoàn tất nhiệm vụ. Hệ thống nên làm gì?

A. Dừng vì đã dùng một công cụ.

B. Bỏ công cụ thứ hai và đoán kết quả.

C. Thực thi yêu cầu hợp lệ, trả kết quả và tiếp tục vòng lặp.

D. Xóa lịch sử trước khi chạy tiếp.

**2. Chọn một.** Vì sao tách hàm hiển thị text khỏi hàm hỗ trợ chat?

A. Để luồng xử lý giữ đầy đủ blocks và thông tin mô tả cần thiết.

B. Để luôn loại bỏ công cụ call.

C. Để không cần lưu assistant message.

D. Để mô hình tự gọi hệ thống xử lý phía máy chủ mà không có mã.

**3. Chọn một.** Phản hồi có text và `stop_reason=tool_use`. Theo Exam Guide, nên hiểu thế nào?

A. Hoàn tất vì đã có text.

B. Vẫn cần xử lý yêu cầu công cụ.

C. Mọi công cụ đều đã chạy.

D. Phải bỏ qua kết quả công cụ.

## Đáp án

1. **C.** A dừng sớm; B bịa dữ liệu; D mất ngữ cảnh.
2. **A.** B và C phá luồng công cụ; D nhầm việc trích text với thực thi hệ thống xử lý phía máy chủ.
3. **B.** A dùng sai tín hiệu kết thúc; C nhầm yêu cầu với thực thi; D loại bỏ dữ liệu cần cho bước tiếp.

## Đối chiếu Bedrock: hội thoại nhiều lượt có công cụ

Đọc `stopReason` để chọn nhánh của vòng xử lý. Ví dụ dừng khi giá trị khác `tool_use` không có nghĩa mọi lý do còn lại đều là thành công; trường hợp `max_tokens` cần kiểm tra nội dung bị cắt. Nếu mô hình không yêu cầu công cụ, không thêm một tin nhắn kết quả công cụ rỗng. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276759). Bản lưu: `sources/bedrock-lessons/276759.json`.

## Đối chiếu Vertex

Ví dụ lấy ngày rồi cộng 103 ngày thể hiện hai bước phụ thuộc nhau, cần chạy theo thứ tự. Hàm hỗ trợ giữ tin nhắn và các khối đầy đủ, còn `text_from_message` chỉ dùng hiển thị. Không sao chép cách dùng danh sách mặc định có thể bị sửa đổi giữa các lần gọi vào mã vận hành. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Multi-turn conversations with tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289178). Bản lưu: `sources/vertex-lessons/289178.json`.
