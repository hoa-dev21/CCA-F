# Exercise on prompt evals — Truyền tiêu chí cho grader

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287738), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287738.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Bài cải thiện model grader bằng hai thay đổi nối tiếp. Trước hết, prompt tạo dataset sinh thêm solution_criteria cho từng test case ngoài task/format. Sau đó, prompt grade_by_model nhận tiêu chí của đúng test case cùng tác vụ gốc và output cần chấm.

Phải tái sinh/lưu dataset rồi chạy lại pipeline để criteria mới thực sự đi vào grader; chỉ sửa file generator mà vẫn dùng dataset cũ không tạo thêm context. Xem kết quả từng ca và lời giải thích để biết tiêu chí được áp dụng, không chỉ nhìn điểm trung bình.

Criteria sinh bằng model cần review về độ đúng, liên quan và khả năng đo. Grader giải thích dài hơn hay cho điểm cao hơn không chứng minh chất lượng tăng. So sánh trên tiêu chí ổn định có nhãn/kiểm tra phù hợp và giữ tập test độc lập; tránh để output đang chấm tự quyết định rubric có lợi cho chính nó.

## Câu hỏi

**1. Chọn một.** Đã thêm solution_criteria vào generator nhưng grader không đổi. Bước kiểm tra trực tiếp nhất?

A. Tăng max_tokens cho mọi ca.

B. Chỉ đổi tên trường score.

C. Kiểm tra dataset thực dùng có criteria và prompt grader đã nhận criteria đúng test case.

D. Bỏ task gốc khỏi grader.

**2. Chọn một.** Model sinh rubric có một yêu cầu không tồn tại trong task. Xử lý phù hợp?

A. Coi mọi tiêu chí sinh ra là chuẩn vàng.

B. Review/sửa rubric theo task và kiểm tra nhãn trước khi dùng chấm.

C. Ép output thêm điều không được yêu cầu để tăng điểm.

D. Chỉ bỏ ca điểm thấp khỏi report.

**3. Chọn một.** Sau khi truyền criteria, reasoning của grader dài hơn. Có thể kết luận gì?

A. Accuracy của sản phẩm chắc chắn tăng.

B. Mọi điểm9 đều đúng.

C. Không cần human/code checks nữa.

D. Grader có thêm context; độ đúng của chấm vẫn cần đối chiếu và đo.

## Đáp án

1. **C.** Kiểm tra dataset thực dùng có criteria và prompt grader đã nhận criteria đúng test case. A/B không sửa luồng dữ liệu; D làm mất tiêu chí nhiệm vụ.

2. **B.** Review/sửa rubric theo task và kiểm tra nhãn trước khi dùng chấm. A bỏ kiểm chứng; C đổi mục tiêu; D thiên lệch phép đo.

3. **D.** Grader có thêm context; độ đúng của chấm vẫn cần đối chiếu và đo. A/B/C nhầm thay đổi hình thức phản hồi với bằng chứng chất lượng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276734), sources/bedrock-media/276734.json. Bài Bedrock xác nhận hai bước: thêm solution_criteria vào từng test case, tái sinh dataset rồi truyền criteria của đúng ca vào grade_by_model. Điểm9/lý giải dài hơn trong demo không tự chứng minh grader chính xác; review rubric và kiểm tra nhãn vẫn cần thiết. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289164), sources/vertex-media/289164.json. Đã đọc phụ đề đầy đủ: thêm solution_criteria cho từng test case, tái sinh dataset và đưa đúng criteria vào grader. Không nhầm điểm/lý giải demo với bằng chứng chất lượng đã hiệu chỉnh. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
