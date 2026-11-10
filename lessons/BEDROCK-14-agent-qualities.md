# Quan sát, hành động, đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276808), sources/bedrock-lessons/276808.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học

Bài rút ra các đặc điểm từ Claude Code và Computer Use: bộ công cụ có mục đích rõ, vòng lặp có giới hạn, thu thập trạng thái môi trường và đánh giá liên tục. Tác nhân AI cần đọc code hoặc quan sát giao diện trước khi sửa; không thể biết trạng thái riêng của hệ thống chỉ từ kiến thức huấn luyện.

Phản hồi công cụ giúp chọn bước tiếp theo và kiểm tra kết quả. Chạy test vừa là hành động vừa cung cấp bằng chứng, không đơn giản chỉ là đọc dữ liệu. Định nghĩa success, error và iteration limit trước khi chạy; chất lượng phải đo trên tình huống đại diện gồm thất bại và hồi phục.

Chi phí lỗi phụ thuộc quyền và tác động của tác vụ. Ví dụ sửa code có kiểm tra khác với tự triển khai production hoặc click thanh toán. Không áp dụng nhận định “Computer Use luôn ít rủi ro” của ví dụ cho mọi môi trường. Chọn mức tự chủ theo khả năng đảo ngược, kiểm chứng và chuyển người xử lý khi cần. Liên hệ thi: tác nhân AI loop, công cụ scope, phép đánh giá và chuyển vấn đề cho người có thẩm quyền.

## Câu hỏi

**1. Chọn một.** Tác nhân AI sửa file dựa trên giả định về cấu trúc repo rồi thất bại. Thiết kế nào giải quyết nguyên nhân?

A. Cấp mọi công cụ có thể có.

B. Thêm lời khẳng định mô hình rất giỏi.

C. Bỏ kiểm tra đầu ra.

D. Cho tác nhân AI đọc trạng thái repo cần thiết trước khi sửa và kiểm chứng sau đó.

**2. Chọn một.** Tác nhân AI lặp cùng công cụ dù liên tục nhận lỗi. Thiếu điều gì?

A. Thêm output dài hơn.

B. Giới hạn vòng lặp và nhánh xử lý lỗi/chuyển cấp.

C. Công cụ có tên ngắn hơn.

D. Bỏ kết quả công cụ.

**3. Chọn một.** Hai tác nhân AI cùng dùng Computer Use: một thử UI staging, một chuyển tiền thật. Có thể dùng cùng mức tự chủ vì cùng công cụ?

A. Có, tên công cụ quyết định toàn bộ rủi ro.

B. Có, screenshot bảo đảm đúng.

C. Không; cần xét tác động, quyền, khả năng đảo ngược và kiểm chứng của từng tác vụ.

D. Có, Docker loại bỏ hậu quả ngoài hệ thống.

## Đáp án

1. **D.** Cho tác nhân AI đọc trạng thái repo cần thiết trước khi sửa và kiểm chứng sau đó. A không bảo đảm ngữ cảnh phù hợp; B không cung cấp dữ kiện; C bỏ phản hồi.

2. **B.** Giới hạn vòng lặp và nhánh xử lý lỗi/chuyển cấp. A/C không giải quyết vòng lặp; D làm mất bằng chứng lỗi.

3. **C.** Không; cần xét tác động, quyền, khả năng đảo ngược và kiểm chứng của từng tác vụ. A bỏ ngữ cảnh; B nhầm quan sát với bảo đảm; D bỏ tác động qua dịch vụ/tài khoản thật.
