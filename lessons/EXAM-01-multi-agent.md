# Điều phối nhiều agent và truyền ngữ cảnh

Nguồn bổ trợ: Exam Guide CCAR-F v1.0 July 2026, mục 1.2–1.3, trang PDF 5–6. Đây là bài biên soạn theo đề cương thi, không phải một bài video Skilljar. Câu hỏi mới tự biên soạn.

## Nội dung bài học

Trong mô hình hub-and-spoke của đề cương, tác nhân điều phối phân tích yêu cầu, chia phạm vi, chọn các tác nhân con cần thiết, gom kết quả và xử lý lỗi. Không bắt mọi yêu cầu đi qua toàn bộ quy trình xử lý nếu chỉ cần một nhánh.

Chia nhiệm vụ theo chủ đề hoặc loại nguồn để hạn chế trùng lặp; nhưng đừng chia hẹp đến mức bỏ sót phạm vi lớn. Sau tổng hợp, kiểm tra khoảng trống và giao lại truy vấn có mục tiêu, thay vì luôn lặp toàn bộ nghiên cứu.

Tác nhân con có ngữ cảnh riêng. Không giả định nó tự biết lịch sử tác nhân điều phối hoặc kết quả tác nhân AI trước. Prompt bàn giao cần mục tiêu, tiêu chí chất lượng, dữ liệu liên quan và nguồn. Tách nội dung phát hiện khỏi thông tin mô tả như URL, trang, ngày và tên tài liệu để giữ việc ghi rõ nguồn.

Theo giao diện được Exam Guide mô tả, tác nhân điều phối cần Task trong allowedTools để gọi các tác nhân con; AgentDefinition khai báo mô tả, system prompt và giới hạn công cụ. Các tác vụ độc lập có thể được yêu cầu trong cùng lượt để chạy song song. Tên API thực tế cần kiểm tra theo SDK đang dùng, không trộn cú pháp của bản khác với đề cương.

Ví dụ để dễ hình dung: nghiên cứu một thị trường có nhánh tài liệu pháp lý và nhánh dữ liệu khách hàng. Tác nhân điều phối gửi tiêu chí và phạm vi khác nhau, nhận bảng phát hiện có nguồn, rồi giao một truy vấn bổ sung nếu tổng hợp thiếu thông tin theo thời kỳ.

## Câu hỏi tình huống

**1. Chọn một.** Tác nhân AI tổng hợp không thấy báo cáo mà tác nhân AI tìm kiếm đã đọc, dù tác nhân điều phối có trong lịch sử. Cách nào giải quyết trực tiếp vấn đề này?

A. Tăng quyền tìm kiếm cho mọi tác nhân AI và giữ nguyên prompt.

B. Truyền phát hiện cần thiết cùng nguồn vào prompt của tác nhân AI tổng hợp.

C. Chỉ yêu cầu tổng hợp tự tin hơn.

D. Mặc định phiên con dùng chung toàn bộ bộ nhớ.

**2. Chọn một.** Câu hỏi đơn giản vẫn gọi bốn tác nhân AI, gây chậm và trùng kết quả. Thiết kế nào phù hợp với đề cương?

A. Gọi cả bốn hai lần để lấy đồng thuận.

B. Chuyển mọi liên lạc thành mạng tác nhân AI tự do.

C. Tác nhân điều phối chọn tác nhân AI theo yêu cầu, phân phạm vi rõ và giữ định tuyến tập trung.

D. Bỏ tổng hợp, trả bốn kết quả bất kể mâu thuẫn.

**3. Chọn hai.** Tổng hợp thiếu một góc quan trọng. Tác nhân điều phối nên làm gì?

A. Xác định khoảng trống và giao truy vấn bổ sung có mục tiêu.

B. Giấu khoảng trống để báo cáo có vẻ hoàn chỉnh.

C. Bắt đầu mọi nhánh lại mà không xem nguyên nhân.

D. Truyền kết quả bổ sung vào lượt tổng hợp tiếp theo, bảo toàn thông tin mô tả nguồn.

## Đáp án

1. **B.** A chưa cung cấp dữ liệu đã có; C không sửa thiếu ngữ cảnh; D giả định cơ chế thừa kế không có.
2. **C.** A thêm chi phí mà không giảm trùng; B bỏ kiến trúc định tuyến của tình huống; D không tạo kết luận thống nhất.
3. **A, D.** B che thiếu bao phủ; C có thể lãng phí và không nhắm khoảng trống.
