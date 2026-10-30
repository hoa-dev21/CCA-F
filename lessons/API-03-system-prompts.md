# System prompts — Định hướng vai trò và cách trả lời

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Nội dung lưu tại sources/api-lessons/287733.json. Câu luyện tập tự biên soạn.

## Tóm tắt

**System prompt** hướng dẫn vai trò, giọng điệu và phương pháp phản hồi. Trong ví dụ của khóa học, chatbot gia sư cần gợi ý từng bước thay vì lập tức đưa đáp số. Chỉ yêu cầu giải toán ở user message chưa mô tả đầy đủ cách dạy mong muốn.

Trong Messages API, truyền hướng dẫn qua tham số `system` của lời gọi tạo message. Nội dung hội thoại nằm trong `messages`. Hàm chat có thể nhận `system` làm đối số để tái sử dụng cùng cơ chế gửi request cho nhiều vai trò.

Ví dụ tự biên soạn: gia sư hỏi người học muốn thực hiện phép biến đổi nào trước, sau đó phản hồi theo câu trả lời của họ. Khi kiểm thử, cần kiểm tra cả cách hướng dẫn, không chỉ đáp số cuối cùng.

Lưu ý theo ví dụ trong bài: khi không cung cấp system prompt, helper bỏ tham số `system` thay vì truyền `None`. Đây là chi tiết của mẫu triển khai, không cần học thuộc mã Python để hiểu vai trò của system prompt.

Liên hệ Exam Guide: hướng dẫn bằng prompt định hướng hành vi; các yêu cầu tuân thủ bắt buộc vẫn cần cơ chế kiểm soát bằng chương trình. Phân biệt này được bổ sung từ Exam Guide, không phải cam kết rằng system prompt bảo đảm tuyệt đối.

## Câu hỏi

**1. Chọn một.** Gia sư trả lời đúng nhưng luôn đưa ngay lời giải, trái phương pháp dạy. Điều chỉnh nào phù hợp nhất với bài học?

A. Tăng trần token.

B. Nêu vai trò gia sư và yêu cầu gợi ý từng bước trong `system`.

C. Xóa lịch sử ở mỗi lượt.

D. Chỉ định câu trả lời phải dài hơn.

**2. Chọn một.** Nhóm muốn dùng chung hàm gửi request cho gia sư và trợ lý biên tập. Thiết kế nào phù hợp?

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
2. **C.** Tách cấu hình vai trò khỏi cơ chế gửi request. A giảm khả năng tái sử dụng; B bỏ khác biệt tác vụ; D làm sai vai trò hội thoại.
3. **A.** Thành công gồm hành vi sư phạm, không chỉ kết quả. B và D không phải tiêu chí dạy học; C nhầm giới hạn với mục tiêu.

## Đối chiếu Bedrock

Đã đọc [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276726) và dùng chung kiến thức/câu hỏi về vai trò hoặc quản lý context. Mẫu Converse truyền system dạng danh sách text blocks, khác chuỗi trong mẫu Messages API. Vai trò hướng dẫn hành vi không phải bảo đảm tuân thủ tuyệt đối. Khẳng định thay system giữa hội thoại trong video cần kiểm tra theo API, không coi là giới hạn bất biến. Nguồn: sources/bedrock-lessons/276726.json.

## Đối chiếu Vertex

Nguồn [System prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289153), sources/vertex-lessons/289153.json. Toàn bộ mainText sau bỏ whitespace, timestamp và player timer trùng nguồn đã đọc https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733. Đối chiếu toàn văn, không suy từ tiêu đề.
