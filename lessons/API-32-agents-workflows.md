# Agents and workflows — Chọn cách điều phối

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287796), sources/api-lessons/287796.json. Câu hỏi tự biên soạn.

## Tóm tắt

Workflow phù hợp khi có thể xác định trước các bước, hoặc giao diện chỉ cho phép một tập tác vụ rõ. Agent phù hợp khi mục tiêu hoặc đường giải quyết thay đổi, cần mô hình tự chọn bước và công cụ theo thông tin mới.

Đừng đồng nhất “nhiều lần gọi model” với agent: một chuỗi gọi cố định vẫn là workflow. Ngược lại, một agent có thể giải một yêu cầu đơn giản bằng rất ít bước.

Bài giới thiệu evaluator–optimizer: một thành phần tạo đầu ra, thành phần khác đánh giá theo tiêu chí, phản hồi được đưa lại để sửa. Việc đặt tên pattern chưa tạo hệ thống; vẫn cần mã điều phối và tiêu chí chấp nhận.

Ví dụ tự biên soạn: chuẩn hóa báo cáo theo một chuỗi bước cố định phù hợp workflow; điều tra nguyên nhân lỗi chưa biết trước cần cách làm thích ứng. Chọn theo bản chất tác vụ thay vì coi agent là cấp độ cao hơn trong mọi trường hợp.

## Câu hỏi

**1. Chọn một.** Tác vụ có ba bước cố định, đầu ra mỗi bước đã rõ. Thiết kế ban đầu phù hợp?

A. Agent không giới hạn mục tiêu.

B. Workflow điều phối các bước đã biết.

C. Chỉ tăng số tool tùy ý.

D. Không cần tiêu chí đầu ra.

**2. Chọn một.** Hệ thống gọi model năm lần theo thứ tự mã cố định. Điều đó chứng minh gì?

A. Chắc chắn là agent tự chủ.

B. Không thể là workflow.

C. Số lần gọi không tự quyết định nó là agent; cần xem ai điều khiển bước tiếp.

D. Mọi lần gọi đều song song.

**3. Chọn một.** Thành phần đánh giá tìm lỗi rồi gửi phản hồi để sửa đầu ra. Pattern nào sát nhất?

A. Evaluator–optimizer.

B. Chỉ liệt kê resources.

C. Router chọn một nhánh rồi không đánh giá.

D. Parse một chuỗi JSON duy nhất.

## Đáp án

1. **B.** A thêm tự do không cần thiết; C không tổ chức quy trình; D thiếu tiêu chí thành công.
2. **C.** A và B suy từ số lượng; D không theo dữ kiện thứ tự cố định.
3. **A.** B, C, D thiếu vòng tạo–đánh giá–sửa.

## Đối chiếu Vertex

Đã đọc [Agents and workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289244), sources/vertex-lessons/289244.json. Mẫu Image-to-CAD dùng mô tả -> CadQuery -> render -> chấm và sửa: evaluator-optimizer có flow xác định trước, không mặc định là agent chỉ vì gọi nhiều lần. Host phải triển khai flow, acceptance và giới hạn lỗi/vòng lặp. Dùng chung câu hỏi khái niệm.
