# Truyền tiêu chí cho bộ chấm điểm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287738), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287738.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập bổ sung tiêu chí cho từng trường hợp để mô hình chấm kết quả có căn cứ rõ hơn. Có hai thay đổi nối tiếp.

Trước hết, yêu cầu chương trình tạo dữ liệu sinh thêm trường `solution_criteria`, tức tiêu chí của lời giải, bên cạnh `task` và `format`. Sau đó, hàm `grade_by_model` phải nhận tiêu chí của đúng trường hợp, cùng nhiệm vụ gốc và câu trả lời cần chấm.

Cần tạo lại, lưu và dùng bộ dữ liệu mới khi chạy đánh giá. Nếu chỉ sửa mã tạo dữ liệu nhưng vẫn đọc tệp cũ, tiêu chí mới chưa thực sự đến được mô hình chấm. Hãy xem kết quả từng trường hợp và lời giải thích để biết tiêu chí được dùng ra sao.

Tiêu chí do AI tạo cũng cần rà soát. Nếu nó yêu cầu một điều không có trong nhiệm vụ, cần sửa trước khi chấm. Lời giải thích dài hơn hoặc điểm cao hơn chưa chứng minh việc chấm chính xác hơn.

Để so sánh đáng tin, dùng tiêu chí ổn định, đối chiếu với các mẫu đã được kiểm tra và giữ bộ kiểm thử độc lập. Không để câu trả lời đang được chấm tự tạo tiêu chí có lợi cho chính nó.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** The generator adds `solution_criteria`, but scores do not change and the job still loads an old dataset path. What should be checked first?

A. Increase grader tokens to infer missing criteria.

B. Remove the original task to emphasize the new field.

C. The effective dataset and per-case criteria actually sent for grading.

D. Increase score weights to reveal a change.

**Question 2 — Choose two.** Generated criteria require library X although any correct solution is permitted. Which TWO steps align evaluation with the task?

A. Exclude solutions that do not use X.

B. Validate grading against reviewed answers, including correct alternatives without X.

C. Rewrite every candidate to use X before reporting improvement.

D. Review and correct criteria against task requirements before using them.

**Question 3 — Choose one.** After adding criteria, explanations lengthen and average scores rise from seven to nine. What evidence is missing for a product-quality claim?

A. More technical vocabulary in explanations.

B. Comparison against ground-truth labels and a held-out evaluation.

C. The grader's confidence in its own scores.

D. Rescaling scores to 100.

**Question 4 — Choose one.** Each candidate generates its own criteria, which the grader then uses. What is the main risk and remedy?

A. Long rubrics should be shortened by the candidate.

B. Combine generation and self-grading to increase trust.

C. Discard the task and grade fluency only.

D. Criteria may favor the candidate; use reviewed task-based criteria fixed before grading.

**Question 5 — Choose two.** After shuffling, some answers receive another case's criteria. Which TWO designs prevent and expose this?

A. Inspect sample payloads and control cases with clearly different criteria.

B. Bind tasks, criteria, and answers using stable case IDs throughout the pipeline.

C. Raise grader temperature.

D. Equal answer and criteria counts prove correct mapping.

## Đáp án và giải thích

1. **C.** A sai: Ngân sách đầu ra không truyền trường dữ liệu bị bỏ khỏi pipeline. B sai: Task gốc là căn cứ kiểm tra tiêu chí; bỏ nó làm mất ngữ cảnh quan trọng. C đúng: Thay generator chưa đủ nếu dữ liệu mới chưa đến bộ chấm. D sai: Đổi thang điểm không sửa việc grader chưa nhận tiêu chí.

2. **B, D.** A sai: Loại theo thuộc tính không được yêu cầu tạo thiên lệch và giấu lỗi chấm. B đúng: Ca đối chứng phát hiện grader trừng phạt cách giải hợp lệ vì rubric sai. C sai: Cách này đổi mục tiêu đánh giá theo lỗi rubric thay vì đo yêu cầu ban đầu. D đúng: Ràng buộc do generator thêm không được coi là yêu cầu gốc.

3. **B.** A sai: Tính chuyên môn của lời văn không là bằng chứng độ đúng của quyết định. B đúng: Điểm và văn phong của thước đo thay đổi không chứng minh sản phẩm tốt hơn. C sai: Tự xác nhận không cung cấp kiểm tra độc lập về độ đúng. D sai: Đổi đơn vị không xác nhận thước đo đã chính xác.

4. **D.** A sai: Rút ngắn không làm tiêu chí độc lập hoặc đúng yêu cầu hơn. B sai: Gộp request không loại xung đột của việc tự đặt tiêu chí. C sai: Tính trôi chảy không thay chất lượng đáp ứng nhiệm vụ. D đúng: Nhờ vậy các ứng viên được so theo cùng mục tiêu thay vì chuẩn do chính mình đặt.

5. **A, B.** A đúng: Quan sát trường hợp cụ thể phát hiện ghép nhầm mà điểm trung bình có thể che khuất. B đúng: Không phụ thuộc thứ tự hàng sau các bước sắp xếp hoặc xử lý song song. C sai: Biến thiên sinh không sửa liên kết dữ liệu giữa case và rubric. D sai: Hai danh sách cùng độ dài vẫn có thể ghép sai từng phần tử.

## Đối chiếu phụ đề chính thức

Phụ đề Bedrock xác nhận hai bước: thêm `solution_criteria` cho từng trường hợp, tạo lại bộ dữ liệu rồi truyền tiêu chí tương ứng vào `grade_by_model`. Điểm 9 hoặc lời giải thích dài hơn trong ví dụ chưa chứng minh mô hình chấm chính xác; vẫn cần kiểm tra tiêu chí và nhãn chuẩn. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276734). Bản lưu: `sources/bedrock-media/276734.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ phụ đề Vertex cũng xác nhận tạo tiêu chí riêng cho từng trường hợp, sinh lại dữ liệu và gửi đúng tiêu chí cho bộ chấm. Điểm hoặc lời giải thích trong minh họa không phải bằng chứng chất lượng đã được hiệu chỉnh. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289164). Bản lưu: `sources/vertex-media/289164.json`.
