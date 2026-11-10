# Getting better results

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383392), sources/claude101-lessons/383392.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Khi câu trả lời chưa đạt, hãy xác định cụ thể vấn đề trước khi sửa yêu cầu:

- Quá chung chung: bổ sung tình huống, người đọc và mục tiêu.
- Quá dài: nêu độ dài hoặc số ý cần có.
- Sai định dạng: đưa cấu trúc mong muốn và một ví dụ.
- Có thông tin đáng ngờ: đối chiếu với nguồn phù hợp trước khi sử dụng.

Ví dụ: Claude viết lời tư vấn chưa sát khách hàng. Bạn cần bổ sung khách hàng đang gặp vấn đề gì và muốn đạt kết quả nào. Chỉ yêu cầu “hãy viết tốt hơn” không cho Claude biết thông tin còn thiếu.

Với công việc lặp lại, hãy chọn một số ví dụ thật, đặt tiêu chí đánh giá, thử yêu cầu rồi sửa theo lỗi quan sát được. Một vài lần thử thành công giúp bạn làm quen và cải tiến, nhưng chưa đủ để kết luận hệ thống sẽ làm tốt trong mọi tình huống thực tế.

Nếu số liệu đã đúng nhưng kết luận thiếu ý, hãy chỉ ra ý cần phân tích thêm. Viết dài hơn hoặc trả lời tự tin hơn không tự làm kết quả chính xác hơn.

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
