# A typical eval workflow — Quy trình đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287736), bản nội dung sources/api-lessons/287736.json. Câu hỏi bên dưới tự biên soạn.

## Tóm tắt

Bài học tổ chức đánh giá thành năm bước: viết prompt ban đầu, tạo tập đầu vào, chạy từng đầu vào qua Claude, chấm đầu ra, rồi sửa prompt và chạy lại. Kết quả ban đầu là **baseline** — mốc so sánh.

Tập đầu vào nên đại diện cho loại yêu cầu ứng dụng sẽ xử lý. Có thể tạo thủ công hoặc dùng mô hình hỗ trợ. Grader cần xem câu hỏi gốc cùng câu trả lời, vì đầu ra trôi chảy chưa chắc đáp ứng yêu cầu.

Trong ví dụ của khóa, grader cho điểm từng trường hợp rồi tính trung bình. Điểm giúp so sánh phiên bản; nhận xét từng trường hợp giúp biết cần sửa gì. Khi thay prompt, giữ bộ kiểm thử và cách chấm nhất quán để đánh giá tác động của thay đổi.

Ví dụ tự biên soạn: prompt trả lời yêu cầu hỗ trợ đạt điểm thấp ở nhóm hoàn tiền. Hãy xem các lỗi trong nhóm ấy trước khi sửa prompt, rồi đánh giá lại toàn bộ tập để phát hiện ảnh hưởng lên nhóm khác.

Từ khóa: **baseline** — mốc ban đầu; **grader** — bộ chấm; **iteration** — vòng cải tiến.

## Câu hỏi

**1. Chọn một.** Bản mới có điểm cao hơn nhưng dùng bộ câu hỏi dễ hơn. Kết luận nào phù hợp?

A. Chưa đủ căn cứ; cần so hai bản với cùng bộ kiểm thử và cách chấm.

B. Chắc chắn bản mới tốt hơn.

C. Điểm số luôn vô dụng.

D. Không cần lưu kết quả từng trường hợp.

**2. Chọn một.** Grader chỉ thấy đầu ra, không thấy yêu cầu gốc. Rủi ro chính?

A. Không thể đếm ký tự.

B. Mọi đầu ra đều không parse được.

C. Khó đánh giá câu trả lời có giải quyết đúng yêu cầu không.

D. Claude tự xóa dữ liệu kiểm thử.

**3. Chọn một.** Sau khi sửa prompt cho một lỗi, nên làm gì?

A. Chỉ xem độ dài prompt.

B. Chạy lại đánh giá và so kết quả với baseline.

C. Xóa baseline.

D. Gán điểm tối đa cho các câu đã sửa.

## Đáp án

1. **A.** B thay đổi hai yếu tố cùng lúc; C phủ nhận sai giá trị đo; D bỏ bằng chứng chẩn đoán.
2. **C.** A và B là kiểm tra hình thức không đòi hỏi hiểu yêu cầu; D không liên quan.
3. **B.** Cần đo tác động thực tế. A không đo đầu ra; C mất mốc so sánh; D tạo số liệu giả.

## Đối chiếu Bedrock

Đã đọc và đối chiếu [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276732), sources/bedrock-lessons/276732.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Đã đọc [A typical eval workflow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289161), sources/vertex-lessons/289161.json. Năm bước: draft, dataset, run model, grade, đổi prompt và chạy lại. Trung bình7.66/8.7 chỉ minh họa; cần giữ điều kiện so sánh, kiểm tra từng loại lỗi và tránh tối ưu theo bộ phát triển duy nhất. Dùng chung câu hỏi khái niệm.
