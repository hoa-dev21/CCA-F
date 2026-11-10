# Review độc lập và review nhiều lượt

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.6, trang PDF 19. Câu hỏi tự biên soạn.

## Nội dung bài học


Mô hình tự rà soát ngay trong cuộc trò chuyện đã viết mã có thể tiếp tục dựa vào các giả định cũ. Một phiên kiểm tra độc lập, nhận yêu cầu và mã nhưng không nhận lời lý giải của bên viết, có thể cung cấp góc nhìn mới.

Với thay đổi nhiều tệp, dồn tất cả vào một prompt lớn có thể khiến một số tệp được xem kỹ còn các tệp khác bị lướt qua. Bài đề xuất hai mức kiểm tra: rà từng tệp, rồi có một lượt riêng xem quan hệ giữa các tệp và đường đi của dữ liệu.

Ví dụ: Một tệp đổi kiểu dữ liệu trả về, nhưng tệp gọi hàm vẫn xử lý theo kiểu cũ. Chỉ kiểm tra từng tệp có thể bỏ sót lỗi này; lượt tích hợp cần đối chiếu hai phía.

Mỗi phát hiện có thể kèm bằng chứng và điểm tự tin. Muốn dùng điểm để quyết định chuyển người duyệt, phải đối chiếu và hiệu chỉnh bằng dữ liệu có nhãn trước. Điểm tự tin không thay bằng chứng và không tự chứng minh phát hiện đúng.

Tăng thời gian suy luận hoặc yêu cầu “tự phản biện kỹ hơn” trong cùng phiên không tạo sự độc lập về ngữ cảnh như một phiên khác. Dù chọn cách nào, vẫn cần đo hiệu quả trên nhiệm vụ cụ thể và thực hiện các kiểm tra cần thiết; không phương pháp nào tự bảo đảm tìm hết lỗi.

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
