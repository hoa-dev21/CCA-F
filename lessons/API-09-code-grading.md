# Code based grading — Chấm bằng mã chương trình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287737), bản nội dung sources/api-lessons/287737.json. Câu hỏi tự biên soạn.

## Tóm tắt

Code grader phù hợp với các điều kiện kiểm tra được bằng chương trình. Trong bài, JSON được parse bằng `json.loads`, Python được kiểm tra cú pháp qua `ast.parse`, regex được biên dịch bằng `re.compile`.

Dataset có trường `format` để chọn đúng validator. Đầu ra JSON phải được kiểm tra như JSON; một chuỗi hợp lệ ở định dạng khác không đáp ứng hợp đồng đầu ra.

Điểm mấu chốt: **parse được không đồng nghĩa làm đúng tác vụ**. Python đúng cú pháp có thể thực hiện phép tính sai; regex biên dịch được có thể khớp nhầm chuỗi. Bài kết hợp code grader với model grader để kiểm tra cả hình thức và nội dung.

Mẫu tính trung bình hai điểm là một lựa chọn minh họa. Trọng số có thể điều chỉnh theo yêu cầu ứng dụng; không mặc định điểm trung bình cao khiến một lỗi cú pháp bắt buộc được chấp nhận.

Ví dụ tự biên soạn: hệ thống nhận regex phải lọc mã hợp lệ. Cần phân biệt kiểm tra biên dịch regex và kiểm tra nó chấp nhận, từ chối đúng các mẫu dữ liệu.

## Câu hỏi

**1. Chọn một.** Regex biên dịch thành công nhưng nhận mọi chuỗi. Kết luận đúng?

A. Đã chứng minh đúng yêu cầu nghiệp vụ.

B. Không cần kiểm tra thêm.

C. Mọi regex đều sai cú pháp.

D. Đã qua kiểm tra cú pháp, chưa chứng minh đúng hành vi.

**2. Chọn một.** Trường nào giúp chọn validator trong bài?

A. `format`.

B. Tên người dùng.

C. Thời gian mở trình duyệt.

D. Điểm cố định.

**3. Chọn hai.** Đánh giá tổng thể cần phân biệt những khía cạnh nào?

A. Cú pháp hợp lệ.

B. Mọi đầu ra phải dài bằng nhau.

C. Giải quyết đúng yêu cầu.

D. Mọi trường hợp phải đạt 10.

## Đáp án

1. **D.** A và B suy rộng quá bằng chứng; C trái dữ kiện biên dịch thành công.
2. **A.** B, C không mô tả loại đầu ra; D là điểm chứ không phải bộ chọn validator.
3. **A, C.** B không phải yêu cầu chung; D biến mục tiêu thành giả định, không phải đánh giá.

## Đối chiếu Bedrock

Đã đọc và đối chiếu [Code based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276735), sources/bedrock-lessons/276735.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Nguồn [Code based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289167), sources/vertex-lessons/289167.json. Đã so sánh toàn văn chuẩn hóa với nguồn API287737: chỉ khác cách diễn đạt upfront/ahead of time và average/take the average. Dùng chung kiến thức code-based grading, không đếm câu hỏi trùng.
