# Quy trình đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287736), bản nội dung sources/api-lessons/287736.json. Câu hỏi bên dưới tự biên soạn.

## Nội dung bài học


Quy trình đánh giá gồm năm bước: viết yêu cầu ban đầu, chuẩn bị bộ đầu vào kiểm thử, chạy từng đầu vào qua Claude, chấm kết quả, rồi sửa yêu cầu và chạy lại. Kết quả lần đầu là mốc so sánh, thường gọi là baseline.

Bộ đầu vào nên đại diện cho những việc ứng dụng sẽ xử lý. Bạn có thể viết thủ công hoặc nhờ mô hình hỗ trợ tạo. Khi chấm, cần cung cấp cả yêu cầu gốc và câu trả lời để biết Claude có giải quyết đúng nhiệm vụ hay không.

Trong ví dụ của khóa học, mỗi trường hợp được cho điểm rồi tính điểm trung bình. Điểm tổng hợp giúp so sánh các phiên bản; nhận xét từng trường hợp giúp xác định chỗ cần sửa. Muốn biết việc đổi prompt có tác dụng gì, phải giữ cùng bộ kiểm thử và cách chấm.

Ví dụ: Trợ lý hỗ trợ khách hàng thường trả lời sai các yêu cầu hoàn tiền. Hãy đọc những trường hợp sai để hiểu nguyên nhân, sửa hướng dẫn rồi chạy lại toàn bộ bộ kiểm thử. Cách này giúp phát hiện bản sửa có cải thiện phần hoàn tiền nhưng làm kém đi ở nhóm yêu cầu khác hay không.

Mỗi lần sửa và đánh giá lại là một vòng cải tiến (iteration). Đừng xóa kết quả ban đầu hoặc chỉ đổi sang câu hỏi dễ hơn để có điểm cao hơn.

## Câu hỏi

**1. Chọn một.** Bản mới có điểm cao hơn nhưng dùng bộ câu hỏi dễ hơn. Kết luận nào phù hợp?

A. Chưa đủ căn cứ; cần so hai bản với cùng bộ kiểm thử và cách chấm.

B. Chắc chắn bản mới tốt hơn.

C. Điểm số luôn vô dụng.

D. Không cần lưu kết quả từng trường hợp.

**2. Chọn một.** Bộ chấm điểm chỉ thấy đầu ra, không thấy yêu cầu gốc. Rủi ro chính?

A. Không thể đếm ký tự.

B. Mọi đầu ra đều không parse được.

C. Khó đánh giá câu trả lời có giải quyết đúng yêu cầu không.

D. Claude tự xóa dữ liệu kiểm thử.

**3. Chọn một.** Sau khi sửa prompt cho một lỗi, nên làm gì?

A. Chỉ xem độ dài prompt.

B. Chạy lại đánh giá và so kết quả với kết quả ban đầu để so sánh.

C. Xóa kết quả ban đầu để so sánh.

D. Gán điểm tối đa cho các câu đã sửa.

## Đáp án

1. **A.** B thay đổi hai yếu tố cùng lúc; C phủ nhận sai giá trị đo; D bỏ bằng chứng chẩn đoán.
2. **C.** A và B là kiểm tra hình thức không đòi hỏi hiểu yêu cầu; D không liên quan.
3. **B.** Cần đo tác động thực tế. A không đo đầu ra; C mất mốc so sánh; D tạo số liệu giả.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276732). Bản lưu: `sources/bedrock-lessons/276732.json`.

## Đối chiếu Vertex

Bài Vertex có cùng năm bước: viết bản đầu, chuẩn bị dữ liệu, chạy mô hình, chấm, rồi sửa prompt và chạy lại. Các điểm trung bình 7.66 và 8.7 chỉ thuộc ví dụ. Cần giữ điều kiện so sánh, xem từng nhóm lỗi và tránh chỉ tối ưu trên một bộ dữ liệu dùng để phát triển. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289161). Bản lưu: `sources/vertex-lessons/289161.json`.
