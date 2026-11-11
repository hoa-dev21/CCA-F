# Cải tiến có kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287745), sources/api-lessons/287745.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Cải thiện prompt là một quá trình thử, đo và sửa. Trước hết, xác định kết quả ứng dụng cần tạo ra. Sau đó viết yêu cầu ban đầu, đánh giá kết quả, áp dụng một cách sửa rồi đánh giá lại. Chỉ nên giữ thay đổi khi kết quả kiểm tra cho thấy nó có ích.

Tiêu chí đánh giá phải bám vào nhiệm vụ thật. Ví dụ: với ứng dụng lập thực đơn, văn phong dễ đọc chưa đủ. Bạn còn phải kiểm tra khẩu phần và các yêu cầu về ăn uống. Nếu bỏ những tiêu chí này, điểm cao vẫn có thể đi kèm một thực đơn không dùng được.

Bài học khuyến nghị thay một yếu tố mỗi lần để dễ biết điều gì làm kết quả thay đổi. Nếu vừa thêm ví dụ, vừa đổi cách diễn đạt, vừa đổi cách chấm, bạn khó xác định nguyên nhân điểm tăng hoặc giảm.

Có thể dùng bộ kiểm thử nhỏ để thử ý tưởng nhanh, rồi mở rộng khi đánh giá trước khi đưa vào sử dụng. Hãy đọc từng trường hợp sai: điểm trung bình cho thấy xu hướng chung, còn lỗi cụ thể cho biết phần hướng dẫn nào cần sửa. Một vài ví dụ thành công chưa chứng minh ứng dụng xử lý tốt mọi tình huống thực tế.

## Tự kiểm tra

**Question 1 — Choose one.** The team changes a prompt, examples, model, and grader simultaneously, and scores improve. How can it isolate the prompt's effect?

A. Compare prompt lengths.

B. Repeat the new configuration and credit all gains to the prompt.

C. Select the easiest change to explain as the cause.

D. Hold other factors fixed and compare prompts on the same dataset.

**Question 2 — Choose two.** A meal planner writes well but violates portion sizes and dietary requirements. Which TWO actions should precede further optimization?

A. Revise relevant instructions based on observed errors, then rerun evaluation.

B. Add only stylistically polished examples.

C. Include portions and dietary constraints in evaluation criteria.

D. Lower content-error weights to reflect the favorable impression.

**Question 3 — Choose one.** A prompt change improves ten quick-iteration cases. What is appropriate before a broader release?

A. Use those ten cases as the only evidence.

B. Repeat the easiest case to save money.

C. Discard old cases and use only new cases selected by the author.

D. Validate on a broader representative set and check regressions.

**Question 4 — Choose two.** A change fixes a missing field but breaks another output-format category. Which TWO inputs inform whether to keep it?

A. Acceptable regression limits and the affected category's importance.

B. Scores and errors by task category, not just the average.

C. The author's confidence that the wording is clearer.

D. The number of prompting techniques added.

**Question 5 — Choose one.** A prompt omits `customer_id`. Instead of adding many unrelated rules, what is a targeted fix?

A. Clarify `customer_id` and compare results before and after, including missing-field cases.

B. Import every rule from previous projects.

C. Use a formal tone and infer stronger structural compliance.

D. Increase the output limit even though it is not being reached.

## Đáp án và giải thích

1. **D.** D cô lập tác động cần đo. C không có bằng chứng; B đo lặp cấu hình gộp vẫn không tách nguyên nhân; A độ dài không đo hiệu quả.

2. **A, C.** C sửa thước đo; A tạo vòng cải tiến có kiểm chứng. B tối ưu sai mục tiêu; D che lỗi quan trọng thay vì sửa.

3. **D.** D phân biệt lặp nhanh với xác thực. A tăng nguy cơ tối ưu theo tập nhỏ; B thiếu bao phủ; C mất so sánh và có thiên lệch chọn mẫu.

4. **A, B.** B thể hiện đánh đổi thực tế; A gắn đánh đổi với yêu cầu sản phẩm. D số kỹ thuật không đo chất lượng; C nhận xét chủ quan không thay phép đo.

5. **A.** A bám lỗi quan sát và kiểm chứng. B tạo nhiễu không liên quan; D không xử lý nguyên nhân đã nêu; C nhầm giọng văn với tuân thủ cấu trúc.

## Đối chiếu Bedrock: Kỹ thuật viết yêu cầu cho AI

Bài Bedrock dùng cùng chu trình: đặt mục tiêu, đo kết quả ban đầu, thử cách sửa và đánh giá lại. Mức tăng điểm trong ví dụ không được bảo đảm cho nhiệm vụ khác. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276749). Bản lưu: `sources/bedrock-lessons/276749.json`.

## Đối chiếu Vertex

Bài Vertex cũng yêu cầu đo trước và sau khi thay prompt, rồi đọc lỗi theo nhóm. Ví dụ lập thực đơn và cấu hình chạy đồng thời từ 1–3 chỉ để minh họa, không phải số đo hiệu năng chuẩn hay giới hạn chung. Thay đổi có thể tốt hơn hoặc kém hơn; quyết định giữ hay bỏ cần dựa trên bằng chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt engineering](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289169). Bản lưu: `sources/vertex-lessons/289169.json`.
