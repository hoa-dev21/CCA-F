# Prompt engineering — Cải tiến có kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287745), sources/api-lessons/287745.json. Câu hỏi tự biên soạn.

## Tóm tắt

Chu trình của bài: xác định mục tiêu → viết prompt ban đầu → đánh giá → áp dụng một kỹ thuật → đánh giá lại. Không mặc định thay đổi nào cũng làm chất lượng tăng; giữ thay đổi khi kết quả đo ủng hộ nó.

Tiêu chí chấm cần phản ánh sản phẩm thật sự phải tạo ra. Trong ví dụ lên thực đơn, chỉ đánh giá văn phong không đủ nếu yêu cầu còn có khẩu phần và ràng buộc ăn uống. Khi chuyển sang ứng dụng của bạn, hãy xác định tiêu chí tương ứng trước khi tối ưu prompt.

Bài khuyến nghị thay một yếu tố mỗi lần để dễ xác định tác động. Có thể dùng tập nhỏ trong vòng phát triển nhanh, sau đó mở rộng để xác thực; vài trường hợp minh họa không chứng minh khả năng xử lý production.

Đọc báo cáo từng trường hợp để tìm nguyên nhân điểm thấp. Điểm tổng hợp cho biết mức thay đổi; lỗi cụ thể cho biết nên sửa phần nào.

Từ khóa: **iterative refinement** — cải tiến lặp; **evaluation criteria** — tiêu chí đánh giá.

## Câu hỏi

**1. Chọn một.** Nhóm đổi cách diễn đạt, thêm ví dụ và thay grader cùng lúc. Vì sao khó kết luận?

A. Không xác định được yếu tố nào tạo ra thay đổi điểm.

B. Prompt không được chứa ví dụ.

C. Grader không được đọc đầu ra.

D. Mọi điểm số đều vô nghĩa.

**2. Chọn một.** Điểm thấp vì thiếu trường bắt buộc. Bước phù hợp nhất?

A. Chỉ tăng số lần chạy.

B. Xem lỗi, sửa chỉ dẫn liên quan và đo lại.

C. Đổi tên dataset.

D. Gán điểm cao hơn.

**3. Chọn một.** Tập nhỏ dùng để lặp nhanh có vai trò gì?

A. Thay thế hoàn toàn xác thực cuối.

B. Bảo đảm mọi đầu vào đều đúng.

C. Giảm thời gian thử thay đổi ban đầu, cần mở rộng khi xác thực.

D. Loại bỏ nhu cầu chấm điểm.

## Đáp án

1. **A.** B và C cấm sai kỹ thuật; D phủ nhận quá mức giá trị đánh giá.
2. **B.** A không sửa nguyên nhân; C không đổi hành vi; D làm sai số đo.
3. **C.** A và B suy rộng quá bao phủ; D bỏ phép đo cần thiết.

## Đối chiếu Bedrock: Prompt engineering

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276749) và đối chiếu khái niệm với bài chung. Cùng chu trình mục tiêu–baseline–thử kỹ thuật–đánh giá lại. Mức tăng điểm trong ví dụ không bảo đảm cho tác vụ khác. Nguồn: sources/bedrock-lessons/276749.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Prompt engineering](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289169), sources/vertex-lessons/289169.json. Chu trình goal/baseline/eval/thay đổi/re-eval; đọc lỗi theo nhóm. Ví dụ meal plan và concurrency1–3 là minh họa, không là benchmark hay giới hạn universal. Không phải mọi thay đổi đều tăng điểm; giữ hay bỏ dựa trên bằng chứng. Dùng chung câu hỏi khái niệm.
