# Khả năng và giới hạn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291880), sources/fluency-lessons/291880.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học

AI tạo sinh (Generative AI) có thể giúp bạn viết, tóm tắt, dịch và trả lời câu hỏi. AI cũng có thể trả lời tiếp dựa trên nội dung trò chuyện trước đó, nếu được cung cấp nội dung này. Khi kết nối với công cụ hoặc nguồn dữ liệu bên ngoài, AI có thể tra cứu thêm thông tin để trả lời.

Tuy nhiên, AI vẫn có thể trả lời sai, kể cả khi câu trả lời nghe rất tự tin và hợp lý. Kiến thức có sẵn của AI có thể đã cũ. AI cũng có thể bỏ sót thông tin trong cuộc trò chuyện dài hoặc gặp khó khăn với những bài toán cần suy luận nhiều bước.

Vì vậy, đừng vội tin chỉ vì AI trả lời trôi chảy, và đừng cho rằng AI luôn làm tốt chỉ sau vài lần thử thành công. Hãy chọn công việc phù hợp với khả năng của AI và kiểm tra kết quả trước khi sử dụng. Con người vẫn cần dùng kiến thức và kinh nghiệm của mình để đánh giá, quyết định và chịu trách nhiệm.

Ví dụ: Nếu bạn hỏi “Đơn hàng của tôi đang ở đâu?”, AI cần tra cứu hệ thống đơn hàng để biết tình trạng mới nhất. Chỉ dựa vào kiến thức có sẵn thì AI không thể biết đơn hàng hiện đang ở đâu.

Khi xây dựng ứng dụng dùng API: Ứng dụng cần gửi kèm những phần liên quan của cuộc trò chuyện trước đó để AI hiểu câu hỏi tiếp theo. Đừng mặc định rằng AI tự nhớ các yêu cầu đã gửi riêng lẻ.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An assistant gives precise current order locations with only an order ID and no system connection. What addresses the information gap?

A. Use less confident wording without changing the flow.

B. Choose the nearest example status.

C. Provide an authorized current source and verify the lookup.

D. Repeat the question and vote.

**Question 2 — Choose one.** Five demos succeed, but real inputs are varied and need multistep reasoning. What deployment decision fits?

A. Treat five successes as proof of general capability.

B. Evaluate representative and difficult cases with risk-based verification.

C. Check grammar only.

D. Demand more confidence on unfamiliar cases.

**Question 3 — Choose two.** Standalone API calls omit history for “make the second option cheaper.” Which TWO changes address this?

A. Send previous options with the new request.

B. Retry unchanged until memory returns.

C. Identify the second option and constraints to preserve.

D. Assume one API key shares conversational memory.

**Question 4 — Choose one.** A lookup fetches last month's source, but the user needs today's status. What is correct?

A. Tool access guarantees freshness.

B. Use retrieval time as the source-update time.

C. Tool output always outweighs user evidence.

D. Check source freshness and scope, not just retrieval time.

**Question 5 — Choose two.** The model forgets a constraint and states unsupported figures confidently. Which TWO actions address these limits?

A. Reload important constraints into active context.

B. Only request a humble tone.

C. Verify figures against sources and identify unverified information.

D. Accept because consistent style proves understanding.

## Đáp án và giải thích

1. **C.** C cung cấp bằng chứng riêng cho đơn hàng. A giảm mức khẳng định nhưng chưa trả được trạng thái. B cung cấp mẫu, không phải dữ liệu đơn. D đồng thuận giữa các suy đoán không tạo thông tin hiện tại.

2. **B.** B không suy rộng quá demo và xét giới hạn suy luận. A mẫu nhỏ chưa bao phủ thực tế. C văn phong trôi chảy không báo độ đúng. D thay đổi cách diễn đạt, không chứng minh khả năng giải quyết.

3. **A, C.** A cung cấp thông tin bị thiếu; C loại mơ hồ về đối tượng và điều kiện. B không thêm dữ liệu. D danh tính xác thực không chứng minh lịch sử yêu cầu đã được cung cấp cho mô hình.

4. **D.** D phân biệt thời điểm truy xuất và thời điểm thông tin có hiệu lực. A coi kết nối là bảo đảm. B làm sai metadata của dữ liệu. C xếp hạng nguồn tuyệt đối mà không kiểm tra chất lượng cụ thể.

5. **A, C.** A xử lý thiếu/bỏ sót context; C xử lý nội dung thiếu căn cứ. B sửa mức thể hiện tự tin chứ không sửa dữ kiện. D phong cách nhất quán không chứng minh tính đúng hay mức hiểu ràng buộc.
