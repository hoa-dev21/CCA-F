# Truyền tiêu chí cho bộ chấm điểm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287738), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287738.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập bổ sung tiêu chí cho từng trường hợp để mô hình chấm kết quả có căn cứ rõ hơn. Có hai thay đổi nối tiếp.

Trước hết, yêu cầu chương trình tạo dữ liệu sinh thêm trường `solution_criteria`, tức tiêu chí của lời giải, bên cạnh `task` và `format`. Sau đó, hàm `grade_by_model` phải nhận tiêu chí của đúng trường hợp, cùng nhiệm vụ gốc và câu trả lời cần chấm.

Cần tạo lại, lưu và dùng bộ dữ liệu mới khi chạy đánh giá. Nếu chỉ sửa mã tạo dữ liệu nhưng vẫn đọc tệp cũ, tiêu chí mới chưa thực sự đến được mô hình chấm. Hãy xem kết quả từng trường hợp và lời giải thích để biết tiêu chí được dùng ra sao.

Tiêu chí do AI tạo cũng cần rà soát. Nếu nó yêu cầu một điều không có trong nhiệm vụ, cần sửa trước khi chấm. Lời giải thích dài hơn hoặc điểm cao hơn chưa chứng minh việc chấm chính xác hơn.

Để so sánh đáng tin, dùng tiêu chí ổn định, đối chiếu với các mẫu đã được kiểm tra và giữ bộ kiểm thử độc lập. Không để câu trả lời đang được chấm tự tạo tiêu chí có lợi cho chính nó.

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

Phụ đề Bedrock xác nhận hai bước: thêm `solution_criteria` cho từng trường hợp, tạo lại bộ dữ liệu rồi truyền tiêu chí tương ứng vào `grade_by_model`. Điểm 9 hoặc lời giải thích dài hơn trong ví dụ chưa chứng minh mô hình chấm chính xác; vẫn cần kiểm tra tiêu chí và nhãn chuẩn. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276734). Bản lưu: `sources/bedrock-media/276734.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ phụ đề Vertex cũng xác nhận tạo tiêu chí riêng cho từng trường hợp, sinh lại dữ liệu và gửi đúng tiêu chí cho bộ chấm. Điểm hoặc lời giải thích trong minh họa không phải bằng chứng chất lượng đã được hiệu chỉnh. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289164). Bản lưu: `sources/vertex-media/289164.json`.
