# Nêu tiêu chí và bước xử lý

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287740), sources/api-lessons/287740.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một yêu cầu cụ thể có thể làm rõ hai điều khác nhau:

- Kết quả cần có: độ dài, cấu trúc, nội dung bắt buộc và giọng văn.
- Cách thực hiện: những bước cần xem xét để đi đến kết quả.

Ví dụ: Nếu chỉ yêu cầu “Phân tích vì sao doanh số giảm”, AI có thể chỉ xét một nguyên nhân. Bạn có thể yêu cầu xem lần lượt tình hình thị trường, thay đổi nội bộ và phản hồi khách hàng. Đây là hướng dẫn về cách thực hiện.

Sau đó, yêu cầu “Trình bày bảng gồm giả thuyết, bằng chứng và thông tin còn thiếu”. Đây là mô tả kết quả cần có. Hai loại hướng dẫn bổ sung cho nhau: một loại giúp tránh bỏ sót khi phân tích, loại còn lại giúp bạn kiểm tra báo cáo cuối.

Không phải nhiệm vụ nào cũng cần hướng dẫn dài. Với việc đơn giản, chỉ cần nêu rõ kết quả. Với vấn đề nhiều yếu tố, các bước khảo sát có thể hữu ích. “Viết báo cáo chất lượng cao” là mong muốn chung; “mỗi kết luận phải có bằng chứng và nêu hạn chế” là tiêu chí cụ thể hơn.

## Tự kiểm tra

**Câu 1 — Chọn một.** Phân tích doanh số luôn xét thị trường nhưng bỏ thay đổi nội bộ. Đội đã quy định đầu ra là bảng rất chi tiết. Sửa nào nhắm đúng phần còn thiếu?

A. Đổi giọng văn sang phản biện nhưng không nêu phạm vi nguyên nhân.

B. Xem riêng thị trường, nội bộ và phản hồi khách hàng.

C. Thêm cột tác động và mức ưu tiên, giữ nguyên phạm vi nguyên nhân cần phân tích.

D. Tăng số dòng tối thiểu của phần phân tích.

**Câu 2 — Chọn hai.** Muốn phân biệt đặc tính đầu ra với bước xử lý, hai chỉ dẫn nào mô tả sản phẩm bàn giao?

A. Giới hạn phần kết luận ở ba gạch đầu dòng cho lãnh đạo.

B. Đối chiếu số liệu từng tháng trước khi xác định xu hướng.

C. Xem thay đổi nội bộ trước khi loại trừ nguyên nhân vận hành.

D. Trả bảng gồm giả thuyết, bằng chứng và hạn chế.

**Câu 3 — Chọn một.** Prompt yêu cầu “viết thật hay và đầy đủ”. Hai người duyệt cho điểm trái ngược. Điều chỉnh nào tạo cơ sở chấm nhất quán?

A. Dùng điểm model tự chấm thay người duyệt.

B. Dùng độ dài lớn nhất trong hai câu trả lời làm chuẩn chất lượng.

C. Quy định nội dung, cấu trúc và giới hạn bằng chứng.

D. Thêm nhiều tính từ như sâu sắc, xuất sắc và chuyên nghiệp.

**Câu 4 — Chọn hai.** Đội yêu cầu phân tích nhiều nhóm nguyên nhân và xuất bảng chứng cứ. Hai kiểm tra nào giúp phát hiện “đúng mẫu nhưng phân tích thiếu”?

A. Chỉ xác nhận bảng có đúng số cột.

B. Kiểm tra bằng chứng có thực sự hỗ trợ giả thuyết được nêu.

C. Chỉ xác nhận câu trả lời dùng đúng giọng văn trang trọng.

D. Kiểm tra mỗi nhóm nguyên nhân bắt buộc đã được xem xét.

**Câu 5 — Chọn một.** Prompt cố định chuỗi bước có bước “chọn nguyên nhân chính”, nhưng dữ liệu hiện có mâu thuẫn. Cách cụ thể hóa nào hợp lý nhất?

A. Thêm bước viết kết luận mạnh hơn sau khi hoàn thành bảng.

B. Buộc chọn một nguyên nhân cuối cùng.

C. Cho phép nêu giả thuyết và dữ liệu còn thiếu.

D. Cho phép bỏ mọi bằng chứng mâu thuẫn để bảng nhất quán.

## Đáp án và giải thích

1. **B.** B bổ sung cách xem xét vấn đề. C bổ sung cột nhưng chưa mở rộng phạm vi nguyên nhân; D tăng lượng không bảo đảm nhóm nguyên nhân; A vẫn thiếu phạm vi cụ thể.

2. **A, D.** D và A mô tả cấu trúc, độ dài và người đọc. B và C mô tả cách tiến hành phân tích, không phải đặc tính trực tiếp của đầu ra.

3. **C.** C chuyển mong muốn chủ quan thành tiêu chí. D vẫn mơ hồ; A không giải quyết thiếu rubric; B nhầm độ dài với đủ và đúng.

4. **B, D.** D đo độ bao phủ phân tích, B đo quan hệ kết luận–bằng chứng. A và C chỉ đo hình thức nên có thể cho qua phân tích rỗng.

5. **C.** C làm quy trình phù hợp điều kiện dữ liệu. B ép quyết định quá mức; D loại bằng chứng bất lợi; A tăng mức khẳng định nhưng không giải quyết mâu thuẫn.

## Đối chiếu Bedrock: Being specific

Bài Bedrock cũng tách tiêu chí của kết quả khỏi các bước thực hiện. Điểm số minh họa cho từng cách không phải kết quả có thể áp dụng chung. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276745). Bản lưu: `sources/bedrock-lessons/276745.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt yêu cầu về đầu ra với hướng dẫn cách xử lý. Điều kiện về lượng, định dạng và nội dung cần kiểm tra được. Yêu cầu cân nhắc trước khi trả lời không đồng nghĩa yêu cầu hiển thị toàn bộ suy nghĩ bên trong. Các điểm 3.92 và 7.86 chỉ là minh họa; dùng chung câu hỏi.

Nguồn đối chiếu: [Being specific](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289165). Bản lưu: `sources/vertex-lessons/289165.json`.
