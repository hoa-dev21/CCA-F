# Truyền tiêu chí cho bộ chấm điểm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287738), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287738.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học

Bài cải thiện mô hình bộ chấm điểm bằng hai thay đổi nối tiếp. Trước hết, prompt tạo bộ dữ liệu sinh thêm solution_criteria cho từng test case ngoài task/format. Sau đó, prompt grade_by_model nhận tiêu chí của đúng test case cùng tác vụ gốc và output cần chấm.

Phải tái sinh/lưu bộ dữ liệu rồi chạy lại quy trình xử lý để criteria mới thực sự đi vào bộ chấm điểm; chỉ sửa file generator mà vẫn dùng bộ dữ liệu cũ không tạo thêm ngữ cảnh. Xem kết quả từng ca và lời giải thích để biết tiêu chí được áp dụng, không chỉ nhìn điểm trung bình.

Criteria sinh bằng mô hình cần kiểm tra về độ đúng, liên quan và khả năng đo. Bộ chấm điểm giải thích dài hơn hay cho điểm cao hơn không chứng minh chất lượng tăng. So sánh trên tiêu chí ổn định có nhãn/kiểm tra phù hợp và giữ tập test độc lập; tránh để output đang chấm tự quyết định bảng tiêu chí chấm điểm có lợi cho chính nó.

## Câu hỏi

**1. Chọn một.** Đã thêm solution_criteria vào generator nhưng bộ chấm điểm không đổi. Bước kiểm tra trực tiếp nhất?

A. Tăng max_tokens cho mọi ca.

B. Chỉ đổi tên trường score.

C. Kiểm tra bộ dữ liệu thực dùng có criteria và prompt bộ chấm điểm đã nhận criteria đúng test case.

D. Bỏ task gốc khỏi bộ chấm điểm.

**2. Chọn một.** Mô hình sinh bảng tiêu chí chấm điểm có một yêu cầu không tồn tại trong task. Xử lý phù hợp?

A. Coi mọi tiêu chí sinh ra là chuẩn vàng.

B. Review/sửa bảng tiêu chí chấm điểm theo task và kiểm tra nhãn trước khi dùng chấm.

C. Ép output thêm điều không được yêu cầu để tăng điểm.

D. Chỉ bỏ ca điểm thấp khỏi report.

**3. Chọn một.** Sau khi truyền criteria, reasoning của bộ chấm điểm dài hơn. Có thể kết luận gì?

A. Độ chính xác của sản phẩm chắc chắn tăng.

B. Mọi điểm9 đều đúng.

C. Không cần human/code checks nữa.

D. Bộ chấm điểm có thêm ngữ cảnh; độ đúng của chấm vẫn cần đối chiếu và đo.

## Đáp án

1. **C.** Kiểm tra bộ dữ liệu thực dùng có criteria và prompt bộ chấm điểm đã nhận criteria đúng test case. A/B không sửa luồng dữ liệu; D làm mất tiêu chí nhiệm vụ.

2. **B.** Review/sửa bảng tiêu chí chấm điểm theo task và kiểm tra nhãn trước khi dùng chấm. A bỏ kiểm chứng; C đổi mục tiêu; D thiên lệch phép đo.

3. **D.** Bộ chấm điểm có thêm ngữ cảnh; độ đúng của chấm vẫn cần đối chiếu và đo. A/B/C nhầm thay đổi hình thức phản hồi với bằng chứng chất lượng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276734), sources/bedrock-media/276734.json. Bài Bedrock xác nhận hai bước: thêm solution_criteria vào từng test case, tái sinh bộ dữ liệu rồi truyền criteria của đúng ca vào grade_by_model. Điểm9/lý giải dài hơn trong demo không đủ để chứng minh bộ chấm điểm chính xác; kiểm tra bảng tiêu chí chấm điểm và kiểm tra nhãn vẫn cần thiết. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289164), sources/vertex-media/289164.json. Đã đọc phụ đề đầy đủ: thêm solution_criteria cho từng test case, tái sinh bộ dữ liệu và đưa đúng criteria vào bộ chấm điểm. Không nhầm điểm/lý giải demo với bằng chứng chất lượng đã hiệu chỉnh. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
