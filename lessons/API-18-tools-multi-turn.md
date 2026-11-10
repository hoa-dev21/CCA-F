# Công cụ qua nhiều lượt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287750), sources/api-lessons/287750.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Một yêu cầu người dùng có thể cần nhiều vòng mô hình–công cụ. Trong bài, xác định một ngày tương lai cần lấy ngày hiện tại trước, rồi mới tính thời gian cộng thêm. Không thể mặc định một lượt công cụ luôn đủ.

Hàm hỗ trợ chat cần nhận danh sách các công cụ và trả đối tượng message đầy đủ. Hàm hỗ trợ thêm lịch sử phải chấp nhận chuỗi, danh sách block hoặc nội dung message. Hàm trích xuất text riêng chỉ dùng khi cần hiển thị, không thay thế đối tượng phản hồi trong luồng xử lý.

Vòng hội thoại gửi yêu cầu, lưu phản hồi, thực thi công cụ nếu được yêu cầu, đưa kết quả vào lịch sử và tiếp tục. Khi không còn cần công cụ, hệ thống có thể trả câu trả lời cuối.

Bổ sung từ Exam Guide, mục 1.1: điều khiển vòng lặp bằng `stop_reason`; `tool_use` yêu cầu tiếp tục xử lý công cụ, `end_turn` kết thúc lượt. Không dùng việc xuất hiện text làm dấu hiệu hoàn tất, vì một phản hồi vẫn có thể chứa cả text và tool-use block.

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

## Đối chiếu Bedrock: Multi-Turn conversations with các công cụ

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276759) và đối chiếu khái niệm với bài chung. Đọc stopReason rồi ánh xạ sang trạng thái loop. Ví dụ dừng khi khác tool_use không chứng minh mọi lý do khác là thành công; max_tokens cần xử lý đầu ra bị cắt. Không thêm tin nhắn của người dùng kết quả rỗng khi mô hình không yêu cầu công cụ. Nguồn: sources/bedrock-lessons/276759.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Multi-turn conversations with tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289178), sources/vertex-lessons/289178.json. Ví dụ lấy ngày rồi cộng103ngày thể hiện dependency phải tuần tự. Wrapper giữ full blocks/message và các công cụ; text_from_message chỉ dành hiển thị. Không dùng mutable default list trong mã production sao chép từ video. Dùng chung câu hỏi khái niệm.
