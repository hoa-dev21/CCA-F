# Chọn cách điều phối

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287796), sources/api-lessons/287796.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có hai cách tổ chức ứng dụng AI cần phân biệt: quy trình định sẵn (workflow) và tác nhân AI (agent).

Với workflow, chương trình quy định trước các bước và đường đi chính, phù hợp khi nhiệm vụ có trình tự rõ. Với agent, mô hình chọn bước và công cụ tiếp theo dựa trên mục tiêu cùng thông tin vừa nhận, phù hợp khi chưa biết trước toàn bộ cách giải.

Số lần gọi mô hình không quyết định hệ thống thuộc loại nào. Năm lần gọi theo thứ tự cố định vẫn có thể là workflow. Một agent có thể giải yêu cầu đơn giản bằng ít bước. Câu hỏi quan trọng là ai quyết định bước tiếp theo.

Bài còn giới thiệu cách tạo rồi đánh giá và sửa kết quả (evaluator–optimizer). Một thành phần tạo bản đầu, thành phần khác đánh giá theo tiêu chí, rồi phản hồi được dùng để sửa. Vẫn phải có mã điều phối và điều kiện chấp nhận kết quả.

Ví dụ: Chuẩn hóa báo cáo theo các bước đã biết có thể dùng workflow. Điều tra lỗi chưa rõ nguyên nhân có thể cần agent chọn hướng khảo sát theo phát hiện mới. Hãy chọn theo nhiệm vụ, không mặc định agent luôn tốt hơn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Hệ gọi mô hình năm lần theo các bước cố định; một hệ khác cho mô hình chọn công cụ tiếp theo từ kết quả tra cứu. Tiêu chí phân biệt phù hợp nhất?

A. Mức độ phức tạp của chuỗi: nhiều bước cần phối hợp được xem là agent.

B. Chủ thể quyết định bước tiếp theo trong hệ thống.

C. Việc có vòng sửa đầu ra sau đánh giá, dù điều kiện chuyển bước đã lập trình cố định.

D. Khả năng gọi nhiều tools trong một nhiệm vụ, không xét ai chọn thứ tự.

**Câu 2 — Chọn một.** Nhiệm vụ chuẩn hóa báo cáo có các bước bắt buộc, ổn định và cần audit thứ tự. Lựa chọn khởi đầu hợp lý nhất?

A. Agent tự chọn bước để có linh hoạt tối đa.

B. Một prompt dài yêu cầu tự tuân thủ mọi bước, không ghi trạng thái.

C. Workflow có chuyển bước và kiểm tra rõ theo quy trình đã biết.

D. Chạy mọi bước song song rồi chọn kết quả có vẻ đầy đủ nhất.

**Câu 3 — Chọn hai.** Điều tra lỗi chưa rõ nguyên nhân: đọc log có thể dẫn sang kiểm tra cấu hình hoặc truy dữ liệu. Hai đặc điểm nào ủng hộ thiết kế agent có giới hạn?

A. Bước khảo sát tiếp theo phụ thuộc phát hiện mới.

B. Mọi yêu cầu đều có cùng chuỗi thao tác không đổi.

C. Mô hình có các công cụ rõ phạm vi để khảo sát và điều kiện dừng/chi phí được kiểm soát.

D. Chưa có tiêu chí thành công nên để tác nhân tự chạy đến khi hết tài nguyên.

**Câu 4 — Chọn một.** Trong evaluator–optimizer, evaluator liên tục yêu cầu đổi giọng văn qua lại; chất lượng nghiệp vụ không tăng. Sửa nào nhắm đúng vấn đề?

A. Tăng số vòng tối đa để chờ hai phía đồng thuận.

B. Dùng cùng prompt cho generator và evaluator.

C. Bỏ evaluator sau một lần thất bại và coi bản đầu là đạt.

D. Rubric rõ, có ngưỡng chấp nhận và giới hạn vòng.

**Câu 5 — Chọn hai.** Nhóm muốn thay workflow đã đo tốt bằng agent vì tên gọi hiện đại hơn. Hai bằng chứng nào cần để biện minh thay đổi?

A. Tác vụ có biến thiên khiến đường đi cố định thực sự bỏ sót hoặc tốn công.

B. Agent có thể tạo câu trả lời dài hơn workflow.

C. Đánh giá cho thấy lợi ích chất lượng/khả năng thích ứng vượt chi phí và độ phức tạp bổ sung.

D. Mô hình đã dùng nhiều tool trong một demo thành công.

## Đáp án và giải thích

1. **B.** B xét chủ thể quyết định bước tiếp. A độ phức tạp không xác định cơ chế điều khiển. C vòng evaluator–optimizer vẫn có thể là workflow định sẵn. D nhiều tools cũng có thể được gọi theo chuỗi cố định.

2. **C.** C tận dụng cấu trúc nhiệm vụ và khả năng audit. A thêm tự do chưa cần. B khó quan sát/cưỡng chế bước. D bỏ phụ thuộc và thứ tự bắt buộc.

3. **A, C.** A tạo nhu cầu quyết định thích ứng; C cung cấp năng lực và giới hạn vận hành. B phù hợp workflow hơn. D thiếu mục tiêu/điểm dừng làm chất lượng khó đánh giá.

4. **D.** D tạo mục tiêu ổn định và điều khiển vòng lặp. A tăng chi phí trong chu kỳ không rõ mục tiêu. B không giải quyết tiêu chí. C thay việc đánh giá bằng giả định thành công.

5. **A, C.** A xác định nhu cầu; C đo lợi ích ròng. B độ dài không đo hiệu quả. D một demo không đại diện cho chất lượng và chi phí vận hành.

## Đối chiếu Vertex

Ví dụ Image-to-CAD đi từ mô tả sang mã CadQuery, dựng hình rồi chấm và sửa. Đây là quy trình tạo–đánh giá–cải thiện có các bước định trước, không tự trở thành agent chỉ vì gọi mô hình nhiều lần. Ứng dụng phải điều phối, đặt điều kiện chấp nhận và giới hạn lỗi hoặc số vòng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289244). Bản lưu: `sources/vertex-lessons/289244.json`.
