# Review độc lập và review nhiều lượt

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.6, trang PDF 19. Câu hỏi tự biên soạn.

## Tóm tắt

Model tự review ngay trong context đã sinh mã có thể giữ các giả định cũ và ít chất vấn quyết định của mình. Một instance độc lập không nhận lý giải của người tạo cung cấp góc nhìn mới; vẫn phải nhận yêu cầu và mã cần kiểm tra.

Review nhiều file trong một prompt lớn dễ có độ sâu không đồng đều và phát hiện mâu thuẫn. Tách lượt kiểm tra cục bộ từng file, rồi một lượt riêng kiểm tra tương tác liên file và luồng dữ liệu. Chỉ tách từng file mà bỏ bước tích hợp sẽ mất loại lỗi quan trọng khác.

Confidence của mỗi finding có thể hỗ trợ chuyển người duyệt nếu đã hiệu chỉnh; không dùng độ tự tin để thay thế bằng chứng hoặc tự động coi finding là đúng.

Một verification pass có thể yêu cầu model tự báo confidence kèm bằng chứng cho từng finding; routing dùng các điểm đó sau khi đối chiếu tập có nhãn. Tăng extended thinking hoặc yêu cầu “tự phản biện kỹ hơn” trong cùng phiên không tạo sự độc lập về context như reviewer instance riêng. Các kết luận về hiệu quả cần đo trên bài toán cụ thể, không coi một pattern tự bảo đảm bắt hết lỗi.

Ví dụ tự biên soạn: một file đổi kiểu trả về, file gọi vẫn dùng cách cũ. Kiểm tra từng file có thể không thấy vấn đề; lượt tích hợp cần đối chiếu hợp đồng giữa hai bên.

## Câu hỏi tình huống

**1. Chọn một.** Review PR 20 file thường sâu ở đầu và hời hợt ở cuối. Thiết kế phù hợp nhất?

A. Chỉ tăng số từ bản tóm tắt.

B. Chỉ kiểm tra file đầu.

C. Kiểm tra từng file rồi chạy pass tích hợp liên file.

D. Bỏ mọi quy tắc review.

**2. Chọn một.** Muốn giảm việc reviewer bị cuốn theo lý giải của agent viết mã. Làm gì?

A. Gửi toàn bộ lý giải người viết và yêu cầu đồng ý.

B. Dùng instance độc lập với yêu cầu và mã, không mang context lý giải đã sinh.

C. Chỉ yêu cầu người viết nói tự tin hơn.

D. Không cho reviewer xem mã.

**3. Chọn một.** Sau khi tách review từng file, lỗi hợp đồng giữa module vẫn lọt. Cần bổ sung gì?

A. Pass xem tương tác, luồng dữ liệu và thay đổi liên file.

B. Chỉ đổi thứ tự tên file.

C. Bỏ review từng file đã làm.

D. Chọn finding có câu dài nhất.

## Đáp án

1. **C.** A không tăng độ tập trung từng phần; B mất bao phủ; D bỏ tiêu chí.
2. **B.** A củng cố giả định cũ; C không tạo góc nhìn mới; D bỏ đối tượng review.
3. **A.** B không kiểm tra hợp đồng; C bỏ phần hữu ích; D không dựa bằng chứng.
