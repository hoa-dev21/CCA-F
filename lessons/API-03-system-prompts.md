# Định hướng vai trò và cách trả lời

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Nội dung lưu tại sources/api-lessons/287733.json. Câu luyện tập tự biên soạn.

## Nội dung bài học


System prompt là phần hướng dẫn chung về vai trò, giọng điệu và cách trả lời của AI. Ví dụ: với một gia sư, bạn có thể yêu cầu gợi ý từng bước và để người học tự làm trước khi đưa lời giải. Chỉ gửi một bài toán chưa nói rõ cách dạy mong muốn này.

Trong mẫu Messages API của bài, hướng dẫn chung được truyền qua tham số `system`. Các tin nhắn trao đổi nằm trong `messages`. Hàm gửi yêu cầu có thể nhận `system` làm đầu vào, nhờ đó cùng một hàm có thể dùng cho gia sư hoặc trợ lý biên tập bằng cách thay hướng dẫn.

Ví dụ: Gia sư hỏi người học muốn thực hiện phép biến đổi nào trước, rồi phản hồi theo câu trả lời của họ. Khi đánh giá chatbot, cần kiểm tra cả cách hướng dẫn này. Đáp số đúng chưa đủ nếu chatbot luôn đưa ngay lời giải, trái phương pháp đã yêu cầu.

Trong mã minh họa, khi không có hướng dẫn hệ thống, hàm bỏ tham số `system` thay vì truyền `None`. Đây là cách xử lý của mẫu mã, không phải phần cần học thuộc để hiểu khái niệm.

Theo phần liên hệ với đề cương thi, prompt giúp định hướng hành vi nhưng không bảo đảm AI luôn tuân thủ. Các điều kiện bắt buộc vẫn cần kiểm tra hoặc chặn bằng chương trình.

## Câu hỏi

**1. Chọn một.** Gia sư trả lời đúng nhưng luôn đưa ngay lời giải, trái phương pháp dạy. Điều chỉnh nào phù hợp nhất với bài học?

A. Tăng trần token.

B. Nêu vai trò gia sư và yêu cầu gợi ý từng bước trong `system`.

C. Xóa lịch sử ở mỗi lượt.

D. Chỉ định câu trả lời phải dài hơn.

**2. Chọn một.** Nhóm muốn dùng chung hàm gửi yêu cầu cho gia sư và trợ lý biên tập. Thiết kế nào phù hợp?

A. Đóng cứng vai trò gia sư bên trong hàm.

B. Dùng một prompt không có vai trò cho mọi tác vụ.

C. Truyền system prompt qua tham số của hàm.

D. Đổi role của câu hỏi thành `assistant`.

**3. Chọn một.** Kiểm thử chỉ chấm đáp số toán học. Nó bỏ sót yêu cầu nào trong ví dụ gia sư?

A. Có hướng dẫn người học từng bước trước khi đưa lời giải không.

B. Có tạo API key mới mỗi lượt không.

C. Có chạm đúng trần `max_tokens` không.

D. Có bỏ toàn bộ lịch sử không.

## Đáp án

1. **B.** Chỉ rõ phương pháp phản hồi. A và D thay độ dài, không xác định phương pháp; C làm mất ngữ cảnh.
2. **C.** Tách cấu hình vai trò khỏi cơ chế gửi yêu cầu. A giảm khả năng tái sử dụng; B bỏ khác biệt tác vụ; D làm sai vai trò hội thoại.
3. **A.** Thành công gồm hành vi sư phạm, không chỉ kết quả. B và D không phải tiêu chí dạy học; C nhầm giới hạn với mục tiêu.

## Đối chiếu Bedrock

Mẫu Converse truyền hướng dẫn hệ thống dưới dạng danh sách khối văn bản, khác chuỗi trong mẫu Messages API. Vai trò giúp định hướng hành vi, không bảo đảm tuân thủ tuyệt đối. Nhận định trong video về việc thay hướng dẫn hệ thống giữa cuộc trò chuyện cần được kiểm tra theo API đang dùng. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276726). Bản lưu: `sources/bedrock-lessons/276726.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu, phần văn bản chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Đây là kết quả đối chiếu toàn văn, không phải suy ra từ tiêu đề.

Nguồn đối chiếu: [System prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289153); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Bản lưu: `sources/vertex-lessons/289153.json`.
