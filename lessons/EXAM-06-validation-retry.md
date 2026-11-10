# Validation và retry có phản hồi lỗi

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.4, trang PDF 18. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi dữ liệu trích xuất không qua kiểm tra, yêu cầu sửa nên chứa tài liệu gốc, kết quả đang sai và lỗi cụ thể. “Làm lại cho đúng” ít hữu ích hơn việc chỉ ra trường nào sai hoặc các giá trị nào không khớp.

Thử lại phù hợp khi mô hình có thể sửa từ dữ liệu đã nhận, chẳng hạn đặt nhầm trường hoặc đổi sai định dạng ngày. Nếu ngày hiệu lực chỉ nằm trong phụ lục chưa được cung cấp, gửi lại cùng đầu vào nhiều lần không bổ sung bằng chứng. Cần lấy phụ lục, biểu diễn dữ liệu còn thiếu hoặc chuyển người kiểm tra theo quy trình.

Phân biệt kiểm tra cấu trúc với kiểm tra ý nghĩa. JSON đúng và đủ trường chưa chứng minh tổng tiền chính xác hay từng trường lấy đúng từ nguồn. Chế độ kiểm tra nghiêm ngặt được hỗ trợ có thể giảm lỗi cấu trúc; mã nghiệp vụ vẫn phải kiểm tra quan hệ giữa các giá trị.

Ví dụ: Các dòng hàng cộng thành 120 nhưng hóa đơn ghi tổng 125. Giữ `stated_total` là tổng ghi trên nguồn và `calculated_total` là tổng được tính, kèm `conflict_detected` để đánh dấu có xung đột. Giữ cả cách tính và nguồn để người duyệt kiểm tra; không tự sửa một số cho bằng số còn lại chỉ để vượt kiểm tra.

Trong hệ thống rà soát mã, trường `detected_pattern` có thể ghi loại vấn đề phát hiện được. Phân tích những loại thường bị người dùng bác bỏ giúp sửa prompt đúng chỗ, thay vì thay đổi toàn bộ cách chấm một cách mơ hồ.

## Câu hỏi tình huống

**1. Chọn một.** Muốn mô hình sửa kết quả đặt nhầm trường. Yêu cầu bổ sung hữu ích nhất?

A. Chỉ câu “thử lại”.

B. Chỉ một điểm tự tin.

C. Tài liệu gốc, extraction lỗi và lỗi validation cụ thể.

D. Xóa tài liệu để tiết kiệm ngữ cảnh bằng mọi giá.

**2. Chọn một.** Ngày hiệu lực chỉ xuất hiện trong phụ lục chưa cung cấp. Thử lại cùng dữ liệu nhiều lần không giúp. Bước phù hợp?

A. Tiếp tục vô hạn tới khi xuất hiện một ngày.

B. Lấy phụ lục hoặc xử lý thiếu dữ liệu/review theo hợp đồng.

C. Dùng ngày hôm nay mà không báo.

D. Chấm mọi kết quả là đúng.

**3. Chọn hai.** Để kiểm tra hóa đơn có số liệu nguồn mâu thuẫn, nên làm gì?

A. Giữ stated_total và calculated_total riêng.

B. Ghi đè một giá trị để chúng luôn bằng nhau.

C. Xóa dữ liệu các dòng hàng.

D. Đánh dấu conflict để downstream biết tình trạng.

## Đáp án

1. **C.** A thiếu hướng sửa; B không chỉ lỗi; D có thể bỏ bằng chứng cần sửa.
2. **B.** A không bổ sung nguồn; C bịa; D che thiếu thông tin.
3. **A, D.** B làm mất mâu thuẫn; C mất dữ liệu kiểm chứng.
