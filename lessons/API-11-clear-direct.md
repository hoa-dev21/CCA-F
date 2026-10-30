# Being clear and direct — Giao nhiệm vụ rõ ràng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287744), sources/api-lessons/287744.json. Câu hỏi tự biên soạn.

## Tóm tắt

Mở đầu prompt bằng việc Claude cần thực hiện. Dùng ngôn ngữ đơn giản, động từ hành động và mô tả sản phẩm mong muốn, thay vì kể dài về chủ đề rồi để mô hình đoán nhiệm vụ.

“Tạo bản tóm tắt ba đoạn về tài liệu sau” rõ hơn “Tài liệu này khá thú vị, tôi đang muốn hiểu thêm”. Câu đầu chỉ định hành động, đầu ra và phạm vi. Câu sau mới nêu sự quan tâm.

Bài minh họa bằng việc thay câu hỏi mơ hồ về ăn uống thành yêu cầu tạo thực đơn một ngày, có đối tượng và ràng buộc. Mức tăng điểm trong ví dụ là kết quả của ví dụ ấy, không phải mức tăng được bảo đảm cho ứng dụng khác.

Đây là kỹ thuật diễn đạt nhiệm vụ, không phải quy định mọi câu hỏi đều sai. Với prompt dùng trong ứng dụng, mục tiêu là giảm cách hiểu khác nhau và kiểm chứng bằng eval.

## Câu hỏi

**1. Chọn một.** Prompt nào chỉ định rõ sản phẩm nhất?

A. “Tôi thích tìm hiểu báo cáo.”

B. “Báo cáo này hay nhỉ?”

C. “Có nhiều số liệu trong đây.”

D. “Tóm tắt báo cáo thành ba gạch đầu dòng, nêu rủi ro chính.”

**2. Chọn một.** Chỉnh sửa nào trực tiếp giảm mơ hồ về nhiệm vụ?

A. Thêm đoạn tự giới thiệu không liên quan.

B. Nêu hành động và đầu ra mong muốn ngay đầu prompt.

C. Xóa mọi ràng buộc.

D. Yêu cầu “cố gắng hơn”.

**3. Chọn một.** Bài có một ví dụ điểm tăng sau sửa prompt. Có thể kết luận gì?

A. Mọi ứng dụng tăng đúng mức đó.

B. Không cần kiểm thử lại.

C. Kỹ thuật hữu ích trong ví dụ, cần đo với tác vụ của mình.

D. Mọi prompt ngắn đều tốt.

## Đáp án

1. **D.** A, B, C chỉ nêu quan tâm hoặc nhận xét, chưa xác định đầu ra.
2. **B.** A thêm nhiễu; C mất yêu cầu; D không cho biết thành công trông như thế nào.
3. **C.** A suy rộng số đo; B bỏ xác minh; D nhầm ngắn với rõ.

## Đối chiếu Bedrock: Being clear and direct

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276743) và đối chiếu khái niệm với bài chung. Cùng nguyên tắc giao nhiệm vụ rõ bằng hành động và đầu ra. Không biến “dùng mệnh lệnh” thành quy định mọi câu hỏi đều kém. Nguồn: sources/bedrock-lessons/276743.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Being clear and direct](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289170), sources/vertex-lessons/289170.json. Nêu hành động, đối tượng và ràng buộc trực tiếp ở đầu prompt. Các mức điểm2.32/3.92 thuộc ví dụ khóa, không bảo đảm tăng chất lượng cho mọi bài toán. Dùng chung câu hỏi khái niệm.
