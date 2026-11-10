# Điều phối nhiều agent và truyền ngữ cảnh

Nguồn bổ trợ: Exam Guide CCAR-F v1.0 July 2026, mục 1.2–1.3, trang PDF 5–6. Đây là bài biên soạn theo đề cương thi, không phải một bài video Skilljar. Câu hỏi mới tự biên soạn.

## Nội dung bài học


Trong mô hình hub-and-spoke của đề cương, một tác nhân điều phối đứng ở trung tâm: phân tích yêu cầu, chia việc, chọn tác nhân con, nhận kết quả và xử lý lỗi. Không phải yêu cầu nào cũng cần gọi mọi tác nhân. Một câu hỏi đơn giản có thể chỉ cần một nhánh.

Chia việc theo chủ đề hoặc nguồn dữ liệu để hạn chế làm trùng. Tuy nhiên, cần kiểm tra tổng thể để việc chia quá nhỏ không bỏ sót phạm vi quan trọng. Sau khi tổng hợp, nếu thiếu một góc nhìn, giao thêm nhiệm vụ cụ thể cho phần thiếu thay vì chạy lại toàn bộ nghiên cứu.

Tác nhân con có ngữ cảnh riêng, không tự biết toàn bộ cuộc trò chuyện của tác nhân điều phối. Khi giao việc, cần gửi mục tiêu, phạm vi, tiêu chí chất lượng, dữ liệu và kết quả trước đó có liên quan. Kết quả bàn giao nên tách phát hiện khỏi thông tin nguồn như URL, tên tài liệu, trang và ngày để không mất căn cứ khi tổng hợp.

Theo giao diện trong đề cương, tác nhân điều phối cần `Task` trong `allowedTools` để gọi tác nhân con. `AgentDefinition` khai báo mô tả, hướng dẫn hệ thống và giới hạn công cụ. Các nhiệm vụ độc lập có thể được yêu cầu trong cùng lượt để chạy song song. Đây là tên giao diện theo đề cương; khi triển khai phải đối chiếu thư viện đang dùng.

Ví dụ: Nghiên cứu thị trường có một nhánh đọc quy định và một nhánh đọc dữ liệu khách hàng. Tác nhân điều phối giao phạm vi riêng, nhận kết quả có nguồn rồi kiểm tra xem có thiếu dữ liệu của một thời kỳ nào không. Nếu thiếu, nó giao truy vấn bổ sung và chuyển phát hiện mới vào bước tổng hợp.

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
