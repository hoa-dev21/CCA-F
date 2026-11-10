# Getting better results

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383392), sources/claude101-lessons/383392.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học

Chẩn đoán theo lỗi: quá chung cần thêm ngữ cảnh; quá dài cần ràng buộc độ dài; sai định dạng cần cấu trúc hoặc ví dụ; sự kiện có thể sai cần kiểm chứng nguồn. Điểm tự tin hay văn phong không thay xác minh độc lập.

Với tác vụ lặp lại, thu thập ví dụ thật, viết prompt có bối cảnh, so kết quả với tiêu chí và sửa theo lỗi. Mẫu nhỏ phục vụ làm quen hoặc phát triển; không chứng minh đầy đủ chất lượng production.

Ví dụ để dễ hình dung: nếu báo cáo có đúng số nhưng kết luận thiếu ý, sửa tiêu chí đánh giá và prompt theo phần còn thiếu thay vì chỉ yêu cầu văn bản dài hơn.

## Câu hỏi

**1. Chọn một.** Bạn nhờ Claude soạn nội dung tư vấn cho một khách hàng, nhưng câu trả lời còn chung chung, chưa sát nhu cầu của khách. Bạn nên sửa prompt (yêu cầu gửi cho Claude) như thế nào trước tiên?

A. Chỉ tăng tham số `temperature` để thay đổi mức độ ngẫu nhiên khi mô hình tạo câu trả lời.

B. Bổ sung thông tin về khách hàng, tình huống cần tư vấn và các yêu cầu cụ thể.

C. Bỏ mọi dữ liệu thực tế.

D. Chỉ đổi tên tài liệu.

**2. Chọn một.** Câu trả lời tự tin nhưng số liệu chưa được xác minh. Cách phù hợp?

A. Chấp nhận vì tone rõ.

B. Chỉ hỏi mô hình có chắc không rồi coi là đủ.

C. Đối chiếu nguồn/bằng chứng phù hợp trước khi sử dụng.

D. Chỉ tăng độ dài.

**3. Chọn một.** Muốn biết Claude phù hợp tác vụ lặp lại của nhóm không. Cách đánh giá ban đầu?

A. Dùng ví dụ công việc thật và tiêu chí rõ để so kết quả, rồi cải tiến.

B. Chỉ một demo bất kỳ không giống tác vụ.

C. Luôn gán điểm cao.

D. Chỉ xem tên mô hình.

## Đáp án

1. **B.** Claude cần biết khách hàng là ai, đang gặp vấn đề gì và cần kết quả như thế nào để trả lời sát nhu cầu. A chỉ thay đổi `temperature`, không cung cấp thông tin còn thiếu về khách hàng. C bỏ đi dữ liệu cần thiết. D đổi tên tài liệu nhưng không làm rõ tình huống. `temperature` là tên tham số kỹ thuật; trong bài này không dịch thành “nhiệt độ”.

2. **C.** C kiểm chứng sự kiện; A, B dùng tín hiệu không đủ, D không thêm nguồn.

3. **A.** A đo theo nhu cầu; B thiếu đại diện, C sai phép đo, D không kiểm tra đầu ra.
