# Quy trình đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287736), bản nội dung sources/api-lessons/287736.json. Câu hỏi bên dưới tự biên soạn.

## Nội dung bài học


Quy trình đánh giá gồm năm bước: viết yêu cầu ban đầu, chuẩn bị bộ đầu vào kiểm thử, chạy từng đầu vào qua Claude, chấm kết quả, rồi sửa yêu cầu và chạy lại. Kết quả lần đầu là mốc so sánh, thường gọi là baseline.

Bộ đầu vào nên đại diện cho những việc ứng dụng sẽ xử lý. Bạn có thể viết thủ công hoặc nhờ mô hình hỗ trợ tạo. Khi chấm, cần cung cấp cả yêu cầu gốc và câu trả lời để biết Claude có giải quyết đúng nhiệm vụ hay không.

Trong ví dụ của khóa học, mỗi trường hợp được cho điểm rồi tính điểm trung bình. Điểm tổng hợp giúp so sánh các phiên bản; nhận xét từng trường hợp giúp xác định chỗ cần sửa. Muốn biết việc đổi prompt có tác dụng gì, phải giữ cùng bộ kiểm thử và cách chấm.

Ví dụ: Trợ lý hỗ trợ khách hàng thường trả lời sai các yêu cầu hoàn tiền. Hãy đọc những trường hợp sai để hiểu nguyên nhân, sửa hướng dẫn rồi chạy lại toàn bộ bộ kiểm thử. Cách này giúp phát hiện bản sửa có cải thiện phần hoàn tiền nhưng làm kém đi ở nhóm yêu cầu khác hay không.

Mỗi lần sửa và đánh giá lại là một vòng cải tiến (iteration). Đừng xóa kết quả ban đầu hoặc chỉ đổi sang câu hỏi dễ hơn để có điểm cao hơn.

## Tự kiểm tra

**Câu 1 — Chọn một.** Đánh giá vòng đầu dùng 100 ca; vòng sau dùng 100 ca khác dễ hơn. Nhóm muốn chứng minh sửa prompt có ích. Bước tiếp theo nào trực tiếp nhất?

A. Tăng số lần chạy bản mới trên tập dễ cho điểm ổn định.

B. Chỉ so các ca mà bản mới đạt điểm tối đa.

C. So hai phiên bản trên cùng tập và cùng bộ chấm.

D. Tính trung bình cộng hai điểm để giảm sai số lấy mẫu.

**Câu 2 — Chọn hai.** Bộ chấm mô hình nhận mỗi đầu ra rồi cho điểm “đúng yêu cầu”. Hai thành phần nào cần thêm để phép chấm có căn cứ?

A. Yêu cầu gốc tương ứng với đầu ra.

B. Chỉ tên model đã sinh đầu ra để suy ra năng lực.

C. Điểm của prompt đang được kỳ vọng thắng để định hướng người chấm.

D. Tiêu chí đánh giá thống nhất cho nhiệm vụ đó.

**Câu 3 — Chọn một.** Sau khi sửa prompt để khắc phục một ca thiếu trường, ca đó đã đạt. Nhóm định bỏ bước chạy lại toàn tập. Rủi ro nào cần xử lý?

A. Cần so với baseline để phát hiện hồi quy ở các ca khác.

B. Cần tạo một thước đo mới để bảo đảm thay đổi có điểm cao hơn.

C. Bỏ baseline của prompt cũ khỏi so sánh.

D. Điểm ca vừa sửa không thể sử dụng vì mọi lần chạy lại đều mất giá trị.

**Câu 4 — Chọn hai.** Muốn tái hiện một lần đánh giá có điểm giảm, nhóm cần lưu những gì ngoài điểm tổng?

A. Đầu ra từng ca cùng kết quả chấm của ca đó.

B. Phiên bản prompt và tập đầu vào đã chạy.

C. Chỉ ca tốt nhất để kiểm tra model có từng thành công.

D. Chỉ thời lượng chạy tổng để xác định lỗi nội dung.

**Câu 5 — Chọn một.** Quy trình đã viết prompt, tạo tập và sinh câu trả lời; nhóm gọi đó là đánh giá hoàn tất dù chưa có chấm điểm. Phần còn thiếu là gì?

A. Chấm theo rubric, lưu baseline rồi sửa và đánh giá lại.

B. Viết prompt mới trước để tránh bị baseline ảnh hưởng.

C. Đưa cùng đầu ra trở lại model để model xác nhận mình đã làm đúng.

D. Tăng kích thước tập nhưng vẫn chỉ lưu câu trả lời.

## Đáp án và giải thích

1. **C.** C khôi phục baseline so sánh. D trộn phép đo không tương đương; A làm kết quả ổn định nhưng vẫn lệch; B lựa chọn ca theo kết quả.

2. **A, D.** A xác định điều phải làm; D xác định cách đánh giá. C làm lệch người chấm; B không thay thế việc đối chiếu nội dung.

3. **A.** A giữ chu trình thử–chấm–sửa–đo lại. D phủ nhận phép đo hữu ích; B thay thước đo để ưu ái thay đổi; C bỏ mốc cần cho so sánh.

4. **A, B.** B tái lập điều kiện đầu vào; A cho phép truy nguyên lỗi chấm hoặc sinh. C che các thất bại; D đo hiệu năng chứ không giải thích giảm chất lượng.

5. **A.** A đóng vòng đánh giá. C thiếu tiêu chí độc lập rõ ràng; B sửa khi chưa biết lỗi; D tăng dữ liệu chưa được đo chứ chưa tạo phép đánh giá.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276732). Bản lưu: `sources/bedrock-lessons/276732.json`.

## Đối chiếu Vertex

Bài Vertex có cùng năm bước: viết bản đầu, chuẩn bị dữ liệu, chạy mô hình, chấm, rồi sửa prompt và chạy lại. Các điểm trung bình 7.66 và 8.7 chỉ thuộc ví dụ. Cần giữ điều kiện so sánh, xem từng nhóm lỗi và tránh chỉ tối ưu trên một bộ dữ liệu dùng để phát triển. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289161). Bản lưu: `sources/vertex-lessons/289161.json`.
