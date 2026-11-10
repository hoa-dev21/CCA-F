# Nêu tiêu chí và bước xử lý

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287740), sources/api-lessons/287740.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một yêu cầu cụ thể có thể làm rõ hai điều khác nhau:

- Kết quả cần có: độ dài, cấu trúc, nội dung bắt buộc và giọng văn.
- Cách thực hiện: những bước cần xem xét để đi đến kết quả.

Ví dụ: Nếu chỉ yêu cầu “Phân tích vì sao doanh số giảm”, AI có thể chỉ xét một nguyên nhân. Bạn có thể yêu cầu xem lần lượt tình hình thị trường, thay đổi nội bộ và phản hồi khách hàng. Đây là hướng dẫn về cách thực hiện.

Sau đó, yêu cầu “Trình bày bảng gồm giả thuyết, bằng chứng và thông tin còn thiếu”. Đây là mô tả kết quả cần có. Hai loại hướng dẫn bổ sung cho nhau: một loại giúp tránh bỏ sót khi phân tích, loại còn lại giúp bạn kiểm tra báo cáo cuối.

Không phải nhiệm vụ nào cũng cần hướng dẫn dài. Với việc đơn giản, chỉ cần nêu rõ kết quả. Với vấn đề nhiều yếu tố, các bước khảo sát có thể hữu ích. “Viết báo cáo chất lượng cao” là mong muốn chung; “mỗi kết luận phải có bằng chứng và nêu hạn chế” là tiêu chí cụ thể hơn.

## Câu hỏi

**1. Chọn một.** Chỉ dẫn nào mô tả đặc tính đầu ra?

A. “Trình bày bảng gồm kết luận, bằng chứng và hạn chế.”

B. “Khảo sát nguyên nhân nội bộ trước.”

C. “So sánh hai giả thuyết trước khi chọn.”

D. “Kiểm tra nguồn dữ liệu rồi tổng hợp.”

**2. Chọn một.** Phân tích luôn bỏ sót thay đổi nội bộ. Sửa prompt nào trực tiếp nhất?

A. Chỉ yêu cầu thêm tính từ.

B. Yêu cầu bao quát các nhóm nguyên nhân, gồm thay đổi nội bộ.

C. Bỏ mọi tiêu chí.

D. Chỉ tăng số chữ.

**3. Chọn một.** “Viết thật hay” có hạn chế gì?

A. Không thể dùng tiếng Việt.

B. Luôn sai cú pháp.

C. Chưa xác định rõ tiêu chí đầu ra để kiểm tra.

D. Là một bản mô tả cấu trúc dữ liệu bắt buộc.

## Đáp án

1. **A.** B, C, D mô tả quá trình, không phải cấu trúc sản phẩm.
2. **B.** A và D thay hình thức; C làm yêu cầu mơ hồ hơn.
3. **C.** A và B không đúng; D nhầm lời hướng dẫn với bản mô tả cấu trúc dữ liệu.

## Đối chiếu Bedrock: Being specific

Bài Bedrock cũng tách tiêu chí của kết quả khỏi các bước thực hiện. Điểm số minh họa cho từng cách không phải kết quả có thể áp dụng chung. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276745). Bản lưu: `sources/bedrock-lessons/276745.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt yêu cầu về đầu ra với hướng dẫn cách xử lý. Điều kiện về lượng, định dạng và nội dung cần kiểm tra được. Yêu cầu cân nhắc trước khi trả lời không đồng nghĩa yêu cầu hiển thị toàn bộ suy nghĩ bên trong. Các điểm 3.92 và 7.86 chỉ là minh họa; dùng chung câu hỏi.

Nguồn đối chiếu: [Being specific](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289165). Bản lưu: `sources/vertex-lessons/289165.json`.
