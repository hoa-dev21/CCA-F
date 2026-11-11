# Định hướng vai trò và cách trả lời

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Nội dung lưu tại sources/api-lessons/287733.json. Câu luyện tập tự biên soạn.

## Nội dung bài học


System prompt là phần hướng dẫn chung về vai trò, giọng điệu và cách trả lời của AI. Ví dụ: với một gia sư, bạn có thể yêu cầu gợi ý từng bước và để người học tự làm trước khi đưa lời giải. Chỉ gửi một bài toán chưa nói rõ cách dạy mong muốn này.

Trong mẫu Messages API của bài, hướng dẫn chung được truyền qua tham số `system`. Các tin nhắn trao đổi nằm trong `messages`. Hàm gửi yêu cầu có thể nhận `system` làm đầu vào, nhờ đó cùng một hàm có thể dùng cho gia sư hoặc trợ lý biên tập bằng cách thay hướng dẫn.

Ví dụ: Gia sư hỏi người học muốn thực hiện phép biến đổi nào trước, rồi phản hồi theo câu trả lời của họ. Khi đánh giá chatbot, cần kiểm tra cả cách hướng dẫn này. Đáp số đúng chưa đủ nếu chatbot luôn đưa ngay lời giải, trái phương pháp đã yêu cầu.

Trong mã minh họa, khi không có hướng dẫn hệ thống, hàm bỏ tham số `system` thay vì truyền `None`. Đây là cách xử lý của mẫu mã, không phải phần cần học thuộc để hiểu khái niệm.

Theo phần liên hệ với đề cương thi, prompt giúp định hướng hành vi nhưng không bảo đảm AI luôn tuân thủ. Các điều kiện bắt buộc vẫn cần kiểm tra hoặc chặn bằng chương trình.

## Tự kiểm tra

**Question 1 — Choose one.** A tutor solves problems correctly but reveals answers before students try. It shares an API wrapper with an editing assistant. How should application-specific behavior be configured?

A. Pass the role and teaching policy through the shared `system` parameter.

B. Append a sample answer to every student question.

C. Convert all user messages into system messages.

D. Hard-code the tutor instructions for both applications.

**Question 2 — Choose two.** Which TWO criteria are necessary when evaluating a tutor's system prompt?

A. Whether it gives progressive hints and lets students try.

B. Whether its length matches one prompt example.

C. Whether every response repeats the word “tutor.”

D. Whether its mathematical answers and reasoning are correct.

**Question 3 — Choose one.** A shared function reads a global `system` variable. Concurrent tutor and editor requests sometimes exchange styles. Which design is appropriate?

A. Add application names after generation.

B. Accept `system` separately for each call.

C. Combine both system prompts and let the model choose.

D. Add more examples to the global variable.

**Question 4 — Choose two.** A prompt says only “you are an expert,” but the tutor must avoid immediate solutions. Which TWO changes make the behavior testable?

A. Add more professional titles without changing the response process.

B. Require hints before complete solutions.

C. Use formal language instead of teaching criteria.

D. Specify how to respond after a student's incorrect attempt.

**Question 5 — Choose one.** A new system prompt maintains math scores while reducing premature answer disclosure. What is the best release decision?

A. Reject it because math accuracy did not improve.

B. Measure response length alone as a proxy for hints.

C. Release after one successful tutoring conversation.

D. Evaluate both correctness and teaching behavior on representative cases.

## Đáp án và giải thích

1. **A.** A đặt hành vi đúng phạm vi mà vẫn tái sử dụng hàm. B không xác định quy trình dạy; C trộn vai trò dữ liệu; D làm trợ lý biên tập chịu quy tắc không phù hợp.

2. **A, D.** D đo độ đúng, A đo phương pháp dạy. C chỉ kiểm tra từ khóa; B kiểm tra hình thức không đại diện cho hành vi mong muốn.

3. **B.** B gắn cấu hình với request. A sửa nhãn chứ không sửa hành vi; C tạo hướng dẫn cạnh tranh; D vẫn giữ nguyên trạng thái dùng chung gây lẫn vai trò.

4. **B, D.** B và D mô tả hành vi quan sát được. A tăng vai trò chung nhưng chưa định nghĩa cách dạy; C đo giọng văn thay vì trình tự hỗ trợ.

5. **D.** D đánh giá đúng hai mục tiêu. A bỏ qua mục tiêu hành vi; C thiếu độ bao phủ; B độ ngắn không chứng minh đã hướng dẫn phù hợp.

## Đối chiếu Bedrock

Mẫu Converse truyền hướng dẫn hệ thống dưới dạng danh sách khối văn bản, khác chuỗi trong mẫu Messages API. Vai trò giúp định hướng hành vi, không bảo đảm tuân thủ tuyệt đối. Nhận định trong video về việc thay hướng dẫn hệ thống giữa cuộc trò chuyện cần được kiểm tra theo API đang dùng. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276726). Bản lưu: `sources/bedrock-lessons/276726.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu, phần văn bản chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Đây là kết quả đối chiếu toàn văn, không phải suy ra từ tiêu đề.

Nguồn đối chiếu: [System prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289153); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Bản lưu: `sources/vertex-lessons/289153.json`.
