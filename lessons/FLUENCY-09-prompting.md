# Effective prompting techniques

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291895), sources/fluency-lessons/291895.json. Bản rút gọn/chuyển ngữ từ văn bản bài học; câu hỏi tự biên soạn, không phải đề thi thật.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025). Bản gốc và phần chuyển thể này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); có bổ sung ví dụ/câu hỏi.

## Nội dung bài học


Prompt là câu yêu cầu hoặc phần hướng dẫn bạn gửi cho AI. Bài học giới thiệu sáu cách giúp yêu cầu rõ hơn:

1. Cung cấp bối cảnh: cho AI biết mục tiêu, người đọc và dữ liệu liên quan.
2. Đưa ví dụ: cho một mẫu để AI hiểu kết quả bạn mong muốn.
3. Nêu điều kiện cần tuân thủ: chẳng hạn độ dài, định dạng hoặc những nội dung phải có.
4. Chia nhiệm vụ phức tạp thành các bước có phạm vi rõ.
5. Dành một bước kiểm tra dữ liệu và yêu cầu trước khi đưa ra câu trả lời.
6. Xác định vai trò và giọng điệu phù hợp, chẳng hạn giải thích như một gia sư cho người mới học.

Chọn cách sửa dựa trên lỗi thực tế. Nếu AI trả sai cấu trúc JSON, hãy nêu rõ cấu trúc và đưa mẫu. Nếu AI bỏ sót nhiều yêu cầu, hãy chia nhiệm vụ thành các bước. Nếu câu trả lời thiếu căn cứ, hãy bổ sung dữ liệu liên quan.

Bạn có thể nhờ AI góp ý để cải thiện prompt, rồi thử lại và đánh giá kết quả theo tiêu chí đã đặt. Yêu cầu “hãy suy nghĩ trước khi trả lời” không bảo đảm câu trả lời đúng; điều cần kiểm tra là kết quả và căn cứ mà AI trình bày.

## Tự kiểm tra

**Question 1 — Choose one.** Correct JSON data uses changing field names and breaks an adapter. What prompt revision is most direct?

A. Ask for more careful thinking.

B. Assign a data-expert role without structure.

C. Increase length for field-name explanations.

D. Specify the schema, a valid example, and missing-data representation.

**Question 2 — Choose two.** A nine-criterion analysis covers only the first five. Which TWO changes target coverage?

A. Add an output check against the complete criteria list.

B. Divide work into clearly scoped steps and outputs.

C. Keep only the five easiest criteria.

D. Use a decisive tone.

**Question 3 — Choose one.** A plausible purchase recommendation invents prices and terms absent from supplied documents. What is appropriate?

A. Assign a more experienced role.

B. Add persuasive writing examples.

C. Shorten the answer to reduce claims.

D. Provide price and term sources and distinguish known from unknown.

**Question 4 — Choose one.** AI proposes a prompt three times longer and promises better quality. How should the team decide?

A. Let AI rate professionalism.

B. Choose the version repeating “check” most often.

C. Compare both on the same dataset and criteria, examining old and new errors.

D. Accept because it has more steps.

**Question 5 — Choose two.** All few-shot classification examples are easy and positive. Which TWO additions clarify decision boundaries?

A. Duplicate positive examples.

B. Specify classification criteria and task-appropriate uncertainty handling.

C. Relabel examples merely to balance counts.

D. Add borderline examples reflecting observed confusion.

## Đáp án và giải thích

1. **D.** D làm rõ hợp đồng đầu ra cần kiểm chứng. A/B không cung cấp cấu trúc cụ thể. C tăng diễn giải, không bảo đảm trường ổn định; prompt cũng không thay thế validation của ứng dụng.

2. **A, B.** B giảm việc phải xử lý quá nhiều mục trong một bước. A phát hiện phần còn thiếu. D thay cách nói, không đo bao phủ. C giảm yêu cầu nghiệp vụ để che lỗi thay vì đáp ứng nhiệm vụ.

3. **D.** D nhắm thiếu căn cứ. B định hình văn phong, C giảm chiều dài và A định hướng vai trò; cả ba không bổ sung dữ liệu còn thiếu và có thể giữ nguyên suy đoán.

4. **C.** C đánh giá tác động lên đầu ra. D/B suy chất lượng từ hình thức prompt. A có thể góp ý nhưng không thay bằng chứng thực nghiệm trên nhiệm vụ.

5. **B, D.** D minh họa vùng khó; B làm rõ quy tắc và giới hạn. A không mở rộng dạng tình huống. C cân bằng bằng cách đổi nhãn không có căn cứ sẽ dạy sai hợp đồng.
