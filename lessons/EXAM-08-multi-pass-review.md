# Review độc lập và review nhiều lượt

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.6, trang PDF 19. Câu hỏi tự biên soạn.

## Nội dung bài học

Mô hình tự kiểm tra ngay trong ngữ cảnh đã sinh mã có thể giữ các giả định cũ và ít chất vấn quyết định của mình. Một instance độc lập không nhận lý giải của người tạo cung cấp góc nhìn mới; vẫn phải nhận yêu cầu và mã cần kiểm tra.

Kiểm tra nhiều file trong một prompt lớn dễ có độ sâu không đồng đều và phát hiện mâu thuẫn. Tách lượt kiểm tra cục bộ từng file, rồi một lượt riêng kiểm tra tương tác liên file và luồng dữ liệu. Chỉ tách từng file mà bỏ bước tích hợp sẽ mất loại lỗi quan trọng khác.

Điểm tự tin của mỗi finding có thể hỗ trợ chuyển người duyệt nếu đã hiệu chỉnh; không dùng độ tự tin để thay thế bằng chứng hoặc tự động coi finding là đúng.

Một verification pass có thể yêu cầu mô hình tự báo điểm tự tin kèm bằng chứng cho từng finding; routing dùng các điểm đó sau khi đối chiếu tập có nhãn. Tăng extended thinking hoặc yêu cầu “tự phản biện kỹ hơn” trong cùng phiên không tạo sự độc lập về ngữ cảnh như người kiểm tra instance riêng. Các kết luận về hiệu quả cần đo trên bài toán cụ thể, không coi một pattern tự bảo đảm bắt hết lỗi.

Ví dụ để dễ hình dung: một file đổi kiểu trả về, file gọi vẫn dùng cách cũ. Kiểm tra từng file có thể không thấy vấn đề; lượt tích hợp cần đối chiếu hợp đồng giữa hai bên.

## Câu hỏi tình huống

**1. Chọn một.** Kiểm tra PR 20 file thường sâu ở đầu và hời hợt ở cuối. Thiết kế phù hợp nhất?

A. Chỉ tăng số từ bản tóm tắt.

B. Chỉ kiểm tra file đầu.

C. Kiểm tra từng file rồi chạy pass tích hợp liên file.

D. Bỏ mọi quy tắc kiểm tra.

**2. Chọn một.** Muốn giảm việc người kiểm tra bị cuốn theo lý giải của tác nhân AI viết mã. Làm gì?

A. Gửi toàn bộ lý giải người viết và yêu cầu đồng ý.

B. Dùng instance độc lập với yêu cầu và mã, không mang ngữ cảnh lý giải đã sinh.

C. Chỉ yêu cầu người viết nói tự tin hơn.

D. Không cho người kiểm tra xem mã.

**3. Chọn một.** Sau khi tách kiểm tra từng file, lỗi hợp đồng giữa module vẫn lọt. Cần bổ sung gì?

A. Pass xem tương tác, luồng dữ liệu và thay đổi liên file.

B. Chỉ đổi thứ tự tên file.

C. Bỏ kiểm tra từng file đã làm.

D. Chọn finding có câu dài nhất.

## Đáp án

1. **C.** A không tăng độ tập trung từng phần; B mất bao phủ; D bỏ tiêu chí.
2. **B.** A củng cố giả định cũ; C không tạo góc nhìn mới; D bỏ đối tượng kiểm tra.
3. **A.** B không kiểm tra hợp đồng; C bỏ phần hữu ích; D không dựa bằng chứng.
