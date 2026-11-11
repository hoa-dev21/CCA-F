# Your first conversation with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383390), sources/claude101-lessons/383390.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Một yêu cầu gửi cho Claude, còn gọi là prompt, nên có ba phần: bối cảnh và mục tiêu, nhiệm vụ cụ thể, cùng yêu cầu về kết quả. Nếu nhiệm vụ dựa trên tài liệu, hãy cung cấp tài liệu liên quan để Claude có căn cứ trả lời.

Ví dụ: “Tôi cần giới thiệu quy trình này cho nhân viên mới. Hãy tóm tắt tài liệu đính kèm thành năm bước, dùng từ dễ hiểu và giải thích các chữ viết tắt”. Yêu cầu này rõ hơn câu “Tóm tắt giúp tôi”.

Sau câu trả lời đầu tiên, bạn có thể gửi yêu cầu tiếp để chỉnh sửa. Hãy chỉ rõ phần cần giữ và phần cần đổi, chẳng hạn: “Giữ năm bước trên, nhưng rút ngắn bước 2 và đổi giọng văn cho thân thiện hơn”. Nếu cuộc trò chuyện đã lệch quá xa mục tiêu, có thể mở cuộc trò chuyện mới với yêu cầu rõ hơn.

Bài gốc có nhắc đến tính năng ghi nhớ (memory) và bộ hướng dẫn cho nhiệm vụ chuyên biệt (skills) trong ứng dụng. Đừng suy ra rằng các yêu cầu API gửi riêng lẻ cũng tự nhớ nhau. Trong cách dùng Messages API được học ở đây, ứng dụng cần gửi kèm ngữ cảnh liên quan. Một số thao tác giao diện trong video đã thay đổi; điều cần nắm là cách cung cấp thông tin và phản hồi.

## Tự kiểm tra

**Question 1 — Choose one.** A second standalone API request says “shorten step 2” without the prior answer. What is the correct fix?

A. Add generic writing instructions.

B. Request chat-product memory without supplying context.

C. Send the content to revise, the objective, and constraints to preserve.

D. Add a username so the API finds the conversation.

**Question 2 — Choose two.** Which TWO inputs reduce guessing when drafting onboarding instructions from internal procedures?

A. Only the procedure name.

B. A specific task, structure, and required detail level.

C. The correct procedure version and reader objectives.

D. “Be professional” instead of content criteria.

**Question 3 — Choose one.** A five-step draft is correct except step 2 is too long. Which feedback best controls the change?

A. Keep five steps; shorten step 2 to two sentences while preserving conditions.

B. Rewrite everything and choose a new structure.

C. Keep length and change the expert role.

D. Generate five styles and choose the most natural.

**Question 4 — Choose two.** Old and new documents conflict after many conversation topics. Which TWO steps support a controlled restart?

A. Provide current objectives and correctly versioned sources in a new session.

B. Copy everything without identifying versions.

C. Start blank and say only “continue.”

D. State decisions to preserve and requirements that were superseded.

**Question 5 — Choose one.** An accurate beginner summary uses too many unexplained abbreviations. What directly addresses the problem?

A. Replace the model before specifying expression requirements.

B. Double response length.

C. Specify the audience, abbreviation explanations, and an example sentence.

D. Add more technical references without changing instructions.

## Đáp án và giải thích

1. **C.** C cung cấp đối tượng cần sửa. D không tạo lịch sử; A thêm chữ nhưng thiếu dữ liệu; B suy hành vi của sản phẩm sang các yêu cầu API độc lập.

2. **B, C.** C cung cấp căn cứ và bối cảnh; B xác định sản phẩm cần tạo. A bỏ dữ liệu riêng; D chỉ định phong cách nhưng chưa xác định thông tin cần có.

3. **A.** A nêu phần giữ và phần đổi. B có thể làm mất nội dung đã đúng; C không sửa lỗi độ dài; D thêm lựa chọn nhưng không kiểm soát phạm vi sửa.

4. **A, D.** A tái lập căn cứ; D tránh hồi sinh yêu cầu cũ. C thiếu trạng thái; B giữ nguyên sự nhập nhằng đã gây vấn đề.

5. **C.** C sửa tiêu chí giao tiếp còn thiếu. D tăng dữ liệu không giải quyết đối tượng; A đổi công cụ trước khi sửa hợp đồng đầu ra; B độ dài không bảo đảm thuật ngữ được giải thích.
