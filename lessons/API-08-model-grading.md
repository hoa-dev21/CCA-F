# Chấm bằng mô hình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287742), bản nội dung sources/api-lessons/287742.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có ba cách chấm kết quả: dùng mã chương trình, dùng mô hình AI hoặc nhờ con người. Chọn cách chấm theo tiêu chí cần kiểm tra. Mã phù hợp với quy tắc rõ như cấu trúc dữ liệu; mô hình có thể hỗ trợ xem câu trả lời có đầy đủ và đúng yêu cầu không; người chấm có thể vận dụng chuyên môn nhưng cần thời gian.

Khi dùng mô hình làm người chấm, cần cung cấp cả yêu cầu gốc và câu trả lời cần đánh giá. Bài học đề xuất kết quả chấm gồm điểm mạnh, điểm yếu, lý do và điểm số. Nhờ phần giải thích, bạn biết vì sao câu trả lời chưa đạt và nên sửa yêu cầu ở đâu.

Ví dụ: AI tạo dữ liệu JSON đúng cú pháp nhưng lọc nhầm loại đơn hàng. Chương trình đọc JSON chỉ xác nhận dữ liệu có đúng định dạng. Muốn phát hiện lỗi lọc nhầm, phải đối chiếu nội dung với yêu cầu gốc; có thể dùng mô hình hỗ trợ việc đánh giá này.

Điểm do mô hình chấm có thể thay đổi giữa các lần và bản thân mô hình chấm cũng có thể sai. Vì vậy, dùng điểm trung bình để hỗ trợ so sánh, đồng thời xem nhận xét và lỗi cụ thể. Không coi một điểm số cao là bằng chứng tuyệt đối rằng kết quả đúng.

## Tự kiểm tra

**Question 1 — Choose one.** Generated JSON parses, but its deployment region violates the request. The grader only parses JSON. What should be added?

A. Evaluate configuration content against the original task.

B. Check whitespace formatting.

C. Repeat parsing for reliability.

D. Score explanation fluency instead of the region.

**Question 2 — Choose two.** Which TWO elements make model-based grading inspectable?

A. The label “improved prompt” to influence preferences.

B. Only the generating model's confidence.

C. Reasons, strengths, and weaknesses alongside the score.

D. The original request and the output being graded.

**Question 3 — Choose one.** An output needs valid JSON and a complete risk summary that cannot be assessed by exact string matching. Which grader design fits?

A. Match every summary verbatim against one reference.

B. Use code for JSON validity and a rubric-based model for content.

C. Use a model for everything and remove parsing checks.

D. Parse JSON and check only that `risks` exists.

**Question 4 — Choose two.** A grader gives high scores to contradictory answers. Which TWO steps help distinguish rubric errors from grading errors?

A. Inspect grading reasons against the original request.

B. Use the generating model's name to settle disagreements.

C. Check consistency against reviewed, labeled cases.

D. Raise both scores to avoid disagreement.

**Question 5 — Choose one.** A fluent answer omits two mandatory constraints, but the grader asks only whether it is well written. What addresses the cause?

A. Prefer longer responses as more complete.

B. Score compliance separately from clarity and identify specific violations.

C. Use presentation points to offset missing information.

D. Lower generation temperature and assume constraints will be preserved.

## Đáp án và giải thích

1. **A.** A đo ngữ nghĩa nhiệm vụ. B và C vẫn chỉ đo cú pháp; D chuyển sang văn phong, không kiểm tra ràng buộc bị vi phạm.

2. **C, D.** D tạo cơ sở đối chiếu; C giúp kiểm tra lý do chấm. A dễ gây thiên lệch; B không đánh giá đáp ứng yêu cầu thực tế.

3. **B.** B kết hợp phép đo phù hợp từng tiêu chí. C bỏ một kiểm tra tất định dễ làm; D nhầm có trường với đủ ý; A phạt những cách diễn đạt đúng khác mẫu.

4. **A, C.** A kiểm tra căn cứ từng điểm; C kiểm tra grader trên chuẩn biết trước. D che mâu thuẫn; B đánh giá danh tính thay cho nội dung.

5. **B.** B làm rõ điều phải chấm. A và C dùng hình thức thay cho độ đầy đủ; D thay cấu hình sinh nhưng không sửa thước đo đang bỏ sót lỗi.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276738). Bản lưu: `sources/bedrock-lessons/276738.json`.

## Đối chiếu Vertex

Chọn chấm bằng mã, mô hình hay con người theo tiêu chí cần đo. Mã có thể kiểm tra cú pháp; việc làm đúng nhiệm vụ cần xem hành vi và tiêu chí, có thể kết hợp AI với người đánh giá. Lời giải thích của mô hình chấm chưa chứng minh điểm đúng. Cần đối chiếu mẫu có nhãn và xem lỗi theo nhóm, không chỉ điểm trung bình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289168). Bản lưu: `sources/vertex-lessons/289168.json`.
