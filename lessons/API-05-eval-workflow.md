# Quy trình đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287736), bản nội dung sources/api-lessons/287736.json. Câu hỏi bên dưới tự biên soạn.

## Nội dung bài học


Quy trình đánh giá gồm năm bước: viết yêu cầu ban đầu, chuẩn bị bộ đầu vào kiểm thử, chạy từng đầu vào qua Claude, chấm kết quả, rồi sửa yêu cầu và chạy lại. Kết quả lần đầu là mốc so sánh, thường gọi là baseline.

Bộ đầu vào nên đại diện cho những việc ứng dụng sẽ xử lý. Bạn có thể viết thủ công hoặc nhờ mô hình hỗ trợ tạo. Khi chấm, cần cung cấp cả yêu cầu gốc và câu trả lời để biết Claude có giải quyết đúng nhiệm vụ hay không.

Trong ví dụ của khóa học, mỗi trường hợp được cho điểm rồi tính điểm trung bình. Điểm tổng hợp giúp so sánh các phiên bản; nhận xét từng trường hợp giúp xác định chỗ cần sửa. Muốn biết việc đổi prompt có tác dụng gì, phải giữ cùng bộ kiểm thử và cách chấm.

Ví dụ: Trợ lý hỗ trợ khách hàng thường trả lời sai các yêu cầu hoàn tiền. Hãy đọc những trường hợp sai để hiểu nguyên nhân, sửa hướng dẫn rồi chạy lại toàn bộ bộ kiểm thử. Cách này giúp phát hiện bản sửa có cải thiện phần hoàn tiền nhưng làm kém đi ở nhóm yêu cầu khác hay không.

Mỗi lần sửa và đánh giá lại là một vòng cải tiến (iteration). Đừng xóa kết quả ban đầu hoặc chỉ đổi sang câu hỏi dễ hơn để có điểm cao hơn.

## Tự kiểm tra

**Question 1 — Choose one.** The first evaluation uses 100 cases; the next uses 100 easier cases. How should the team test whether its prompt change helped?

A. Repeat the new version on the easier set.

B. Compare only cases where the new version scores perfectly.

C. Run both versions on the same set with the same grader.

D. Average the two evaluations' scores.

**Question 2 — Choose two.** A model grader receives only an output and scores whether it meets requirements. Which TWO inputs are missing?

A. The original request corresponding to that output.

B. Only the generating model's name.

C. The expected winning prompt's score.

D. Consistent evaluation criteria for the task.

**Question 3 — Choose one.** A prompt fix resolves one missing-field case. What risk requires rerunning the full set?

A. Regressions in other cases must be checked against the baseline.

B. A new metric is needed to guarantee a higher score.

C. The old baseline must be discarded.

D. Every rerun makes the fixed case's score unusable.

**Question 4 — Choose two.** Besides the aggregate score, which TWO items are needed to reproduce an evaluation regression?

A. Each actual output and its grading result.

B. The prompt version and input dataset used.

C. Only the best case as evidence the model once succeeded.

D. Only total runtime to diagnose content errors.

**Question 5 — Choose one.** The team has written a prompt, built a dataset, and generated answers, but has not scored them. What remains?

A. Score against a rubric, record a baseline, then revise and reevaluate.

B. Write another prompt before observing the baseline.

C. Ask the generating model to confirm its own outputs are correct.

D. Increase dataset size while still storing only answers.

## Đáp án và giải thích

1. **C.** C khôi phục baseline so sánh. D trộn phép đo không tương đương; A làm kết quả ổn định nhưng vẫn lệch; B lựa chọn ca theo kết quả.

2. **A, D.** A xác định điều phải làm; D xác định cách đánh giá. C làm lệch người chấm; B không thay thế việc đối chiếu nội dung.

3. **A.** A giữ chu trình thử–chấm–sửa–đo lại. D phủ nhận phép đo hữu ích; B thay thước đo để ưu ái thay đổi; C bỏ mốc cần cho so sánh.

4. **A, B.** B tái lập điều kiện đầu vào; A cho phép truy nguyên lỗi chấm hoặc sinh. C che các thất bại; D đo hiệu năng chứ không giải thích giảm chất lượng.

5. **A.** A đóng vòng đánh giá. C thiếu tiêu chí độc lập rõ ràng; B sửa khi chưa biết lỗi; D tăng dữ liệu chưa được đo chứ chưa tạo phép đánh giá.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276732). Bản lưu: `sources/bedrock-lessons/276732.json`.

## Đối chiếu Vertex

Bài Vertex có cùng năm bước: viết bản đầu, chuẩn bị dữ liệu, chạy mô hình, chấm, rồi sửa prompt và chạy lại. Các điểm trung bình 7.66 và 8.7 chỉ thuộc ví dụ. Cần giữ điều kiện so sánh, xem từng nhóm lỗi và tránh chỉ tối ưu trên một bộ dữ liệu dùng để phát triển. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289161). Bản lưu: `sources/vertex-lessons/289161.json`.
