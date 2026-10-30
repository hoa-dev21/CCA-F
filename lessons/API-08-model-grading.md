# Model based grading — Chấm bằng mô hình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287742), bản nội dung sources/api-lessons/287742.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài phân biệt ba cách chấm: mã chương trình, mô hình và con người. Code phù hợp kiểm tra quy tắc rõ; model linh hoạt với việc đáp ứng yêu cầu, độ đầy đủ và chất lượng; người chấm linh hoạt nhưng tốn thời gian.

Trước khi chọn grader, xác định tiêu chí. Với ứng dụng sinh mã, định dạng và cú pháp có thể kiểm tra bằng code; việc giải quyết đúng tác vụ cần đánh giá nội dung.

Model grader nhận **yêu cầu gốc và đầu ra cần chấm**. Bài đề xuất trả cấu trúc gồm điểm mạnh, điểm yếu, lý do và điểm số. Các thông tin giải thích giúp hiểu điểm, thay vì chỉ nhận một con số khó chẩn đoán.

Không nên coi model grader là chân lý tuyệt đối: bài cũng lưu ý điểm mô hình có thể biến động. Điểm trung bình hỗ trợ so sánh, còn nhận xét và lỗi cụ thể hỗ trợ sửa prompt.

Ví dụ tự biên soạn: JSON hợp lệ nhưng lọc nhầm loại đơn hàng. Code parser xác nhận cú pháp; grader đánh giá theo yêu cầu gốc mới xem xét được lỗi tác vụ.

## Câu hỏi

**1. Chọn một.** Đầu ra parse được nhưng không giải quyết yêu cầu. Tiêu chí nào bị vi phạm?

A. Chỉ độ dài.

B. Task following — làm đúng tác vụ.

C. Tính tồn tại của dataset.

D. Chắc chắn cú pháp JSON.

**2. Chọn một.** Cấu trúc grader nào hỗ trợ chẩn đoán tốt nhất theo bài?

A. Chỉ ghi “ổn”.

B. Chỉ ghi tên model.

C. Điểm mạnh, điểm yếu, lý do và điểm.

D. Luôn trả 10.

**3. Chọn hai.** Những gì model grader cần để đối chiếu yêu cầu và kết quả?

A. Yêu cầu gốc.

B. Đầu ra cần chấm.

C. Thông tin đăng nhập của người dùng.

D. Một nhãn “đúng” gán cố định.

## Đáp án

1. **B.** A không mô tả lỗi; C không phải tiêu chí đầu ra; D trái dữ kiện parse được.
2. **C.** A và B thiếu đánh giá hữu ích; D không chấm thực tế.
3. **A, B.** C không cần cho đánh giá; D thay việc đánh giá bằng kết luận cố định.

## Đối chiếu Bedrock

Đã đọc và đối chiếu [Model based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276738), sources/bedrock-lessons/276738.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Đã đọc [Model based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289168), sources/vertex-lessons/289168.json. Chọn code/model/human grader theo tiêu chí. Syntax kiểm tra được bằng code; task following cần bằng chứng hành vi/rubric, có thể kết hợp model và con người. Lời giải thích của grader không tự chứng minh điểm đúng; hiệu chỉnh với mẫu gán nhãn và xem lỗi theo nhóm thay vì chỉ trung bình. Dùng chung câu hỏi khái niệm.
