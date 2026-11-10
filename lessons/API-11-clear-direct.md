# Giao nhiệm vụ rõ ràng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287744), sources/api-lessons/287744.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Hãy mở đầu yêu cầu bằng việc bạn muốn Claude thực hiện. Nêu hành động, kết quả cần nhận và phạm vi công việc bằng ngôn ngữ đơn giản.

Ví dụ: “Tóm tắt báo cáo thành ba gạch đầu dòng và nêu rủi ro chính” cho biết rõ cần làm gì. Câu “Báo cáo này khá thú vị, tôi muốn hiểu thêm” chỉ nêu sự quan tâm và để Claude tự đoán bạn muốn tóm tắt, giải thích hay phân tích.

Trong ví dụ của bài, một câu hỏi chung về ăn uống được đổi thành yêu cầu tạo thực đơn một ngày, có đối tượng sử dụng và các điều kiện cần đáp ứng. Kết quả đánh giá tăng trong ví dụ đó, nhưng mức tăng này không phải lời bảo đảm cho mọi ứng dụng.

Bạn vẫn có thể viết yêu cầu dưới dạng câu hỏi. Điều cần kiểm tra là người đọc có hiểu chính xác nhiệm vụ và đầu ra mong muốn hay không. Sau khi sửa cách diễn đạt, hãy thử với dữ liệu của mình để biết kết quả có tốt hơn.

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

Bài Bedrock cùng nhấn mạnh nêu rõ hành động và đầu ra. Việc khuyên viết trực tiếp không có nghĩa mọi yêu cầu dạng câu hỏi đều kém. Dùng chung câu hỏi cho các kiến thức tương đương.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276743). Bản lưu: `sources/bedrock-lessons/276743.json`.

## Đối chiếu Vertex

Nêu rõ hành động, đối tượng và điều kiện ngay đầu prompt. Các điểm 2.32 và 3.92 là kết quả của ví dụ, không bảo đảm mức cải thiện cho mọi nhiệm vụ. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Being clear and direct](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289170). Bản lưu: `sources/vertex-lessons/289170.json`.
