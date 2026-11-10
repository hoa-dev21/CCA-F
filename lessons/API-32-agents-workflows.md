# Chọn cách điều phối

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287796), sources/api-lessons/287796.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có hai cách tổ chức ứng dụng AI cần phân biệt: quy trình định sẵn (workflow) và tác nhân AI (agent).

Với workflow, chương trình quy định trước các bước và đường đi chính, phù hợp khi nhiệm vụ có trình tự rõ. Với agent, mô hình chọn bước và công cụ tiếp theo dựa trên mục tiêu cùng thông tin vừa nhận, phù hợp khi chưa biết trước toàn bộ cách giải.

Số lần gọi mô hình không quyết định hệ thống thuộc loại nào. Năm lần gọi theo thứ tự cố định vẫn có thể là workflow. Một agent có thể giải yêu cầu đơn giản bằng ít bước. Câu hỏi quan trọng là ai quyết định bước tiếp theo.

Bài còn giới thiệu cách tạo rồi đánh giá và sửa kết quả (evaluator–optimizer). Một thành phần tạo bản đầu, thành phần khác đánh giá theo tiêu chí, rồi phản hồi được dùng để sửa. Vẫn phải có mã điều phối và điều kiện chấp nhận kết quả.

Ví dụ: Chuẩn hóa báo cáo theo các bước đã biết có thể dùng workflow. Điều tra lỗi chưa rõ nguyên nhân có thể cần agent chọn hướng khảo sát theo phát hiện mới. Hãy chọn theo nhiệm vụ, không mặc định agent luôn tốt hơn.

## Câu hỏi

**1. Chọn một.** Tác vụ có ba bước cố định, đầu ra mỗi bước đã rõ. Thiết kế ban đầu phù hợp?

A. Tác nhân AI không giới hạn mục tiêu.

B. Quy trình làm việc điều phối các bước đã biết.

C. Chỉ tăng số công cụ tùy ý.

D. Không cần tiêu chí đầu ra.

**2. Chọn một.** Hệ thống gọi mô hình năm lần theo thứ tự mã cố định. Điều đó chứng minh gì?

A. Chắc chắn là tác nhân AI tự chủ.

B. Không thể là quy trình làm việc.

C. Số lần gọi không tự quyết định nó là tác nhân AI; cần xem ai điều khiển bước tiếp.

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

Ví dụ Image-to-CAD đi từ mô tả sang mã CadQuery, dựng hình rồi chấm và sửa. Đây là quy trình tạo–đánh giá–cải thiện có các bước định trước, không tự trở thành agent chỉ vì gọi mô hình nhiều lần. Ứng dụng phải điều phối, đặt điều kiện chấp nhận và giới hạn lỗi hoặc số vòng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289244). Bản lưu: `sources/vertex-lessons/289244.json`.
