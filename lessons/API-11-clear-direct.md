# Giao nhiệm vụ rõ ràng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287744), sources/api-lessons/287744.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Hãy mở đầu yêu cầu bằng việc bạn muốn Claude thực hiện. Nêu hành động, kết quả cần nhận và phạm vi công việc bằng ngôn ngữ đơn giản.

Ví dụ: “Tóm tắt báo cáo thành ba gạch đầu dòng và nêu rủi ro chính” cho biết rõ cần làm gì. Câu “Báo cáo này khá thú vị, tôi muốn hiểu thêm” chỉ nêu sự quan tâm và để Claude tự đoán bạn muốn tóm tắt, giải thích hay phân tích.

Trong ví dụ của bài, một câu hỏi chung về ăn uống được đổi thành yêu cầu tạo thực đơn một ngày, có đối tượng sử dụng và các điều kiện cần đáp ứng. Kết quả đánh giá tăng trong ví dụ đó, nhưng mức tăng này không phải lời bảo đảm cho mọi ứng dụng.

Bạn vẫn có thể viết yêu cầu dưới dạng câu hỏi. Điều cần kiểm tra là người đọc có hiểu chính xác nhiệm vụ và đầu ra mong muốn hay không. Sau khi sửa cách diễn đạt, hãy thử với dữ liệu của mình để biết kết quả có tốt hơn.

## Tự kiểm tra

**Question 1 — Choose one.** A stakeholder asks vaguely to understand a report, but the product needs three executive summary points. Which revision reduces ambiguity?

A. State the three-point deliverable, target risks, and audience at the start.

B. Change only the ending to “be helpful.”

C. Include the report twice.

D. Praise the model's expertise without changing the request.

**Question 2 — Choose two.** A prompt must produce a decision report. Which TWO details should it state explicitly?

A. The problem scope and intended audience.

B. The deliverable and desired structure.

C. The requester's entire unrelated personal history.

D. A requirement to always sound confident.

**Question 3 — Choose one.** A direct prompt improves one case. The team wants to apply the same formula everywhere. What is a useful, cautious conclusion?

A. Visual inspection of prompt clarity is sufficient.

B. Evaluate the technique against each application's tasks and rubric.

C. One improvement proves longer prompts always perform better.

D. The technique applies only to the exact demo wording.

**Question 4 — Choose two.** Which TWO additions make “analyze this data” easier to evaluate?

A. Repeat “accurately” instead of concrete criteria.

B. Require a results table and data limitations.

C. Specify the metrics and comparison period.

D. Require “in-depth” in the title.

**Question 5 — Choose one.** A prompt requests three key risks, but sources support only two. Which instruction avoids fabrication?

A. Split one risk into two entries.

B. Replace “three” with “many” to avoid counting.

C. Report only supported risks and disclose insufficient evidence.

D. Allow speculation to fill all three slots.

## Đáp án và giải thích

1. **A.** A nêu hành động, sản phẩm và phạm vi. D xác định vai trò nhưng chưa xác định việc; C lặp dữ liệu; B vẫn là tiêu chí chung khó kiểm tra.

2. **A, B.** B làm rõ đầu ra, A định hướng phạm vi. C thêm nhiễu; D thúc đẩy cách diễn đạt mà không làm rõ tác vụ hay bằng chứng.

3. **B.** B giữ giá trị gợi ý nhưng không suy rộng thiếu dữ liệu. C đánh tráo rõ ràng với độ dài; A bỏ kiểm chứng; D phủ nhận khả năng khái quát mà chưa thử.

4. **B, C.** C xác định công việc, B xác định sản phẩm. D và A là dấu hiệu hình thức không cho biết phân tích đã giải quyết yêu cầu chưa.

5. **C.** C làm rõ cách xử lý thiếu dữ liệu. D và A đạt hình thức bằng nội dung không được hỗ trợ; B bớt ràng buộc nhưng chưa quy định xử lý thiếu nguồn.

## Đối chiếu Bedrock: Being clear and direct

Bài Bedrock cùng nhấn mạnh nêu rõ hành động và đầu ra. Việc khuyên viết trực tiếp không có nghĩa mọi yêu cầu dạng câu hỏi đều kém. Dùng chung câu hỏi cho các kiến thức tương đương.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276743). Bản lưu: `sources/bedrock-lessons/276743.json`.

## Đối chiếu Vertex

Nêu rõ hành động, đối tượng và điều kiện ngay đầu prompt. Các điểm 2.32 và 3.92 là kết quả của ví dụ, không bảo đảm mức cải thiện cho mọi nhiệm vụ. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Being clear and direct](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289170). Bản lưu: `sources/vertex-lessons/289170.json`.
