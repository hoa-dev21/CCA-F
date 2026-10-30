# Validation và retry có phản hồi lỗi

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.4, trang PDF 18. Câu hỏi tự biên soạn.

## Tóm tắt

Khi validation thất bại, lượt sửa cần tài liệu gốc, bản trích xuất lỗi và thông báo cụ thể. “Làm lại cho đúng” cung cấp ít tín hiệu hơn “calculated_total khác stated_total ở các dòng này”. Giữ các trường tính toán và trường ghi trong nguồn riêng giúp phát hiện khác biệt thay vì ghi đè một giá trị bằng giá trị còn lại.

Retry phù hợp với lỗi có thể sửa từ dữ liệu đã cung cấp, như nhầm trường hoặc chuẩn hóa sai định dạng. Nếu thông tin chỉ ở phụ lục chưa được đưa vào, lặp lại cùng input không tạo thêm bằng chứng. Cần lấy nguồn còn thiếu, biểu diễn missing hoặc chuyển review phù hợp.

Nếu nguồn tự mâu thuẫn, ghi nhận conflict thay vì bắt mô hình tạo một giá trị “đẹp”. Với code review, trường detected_pattern giúp phân tích loại phát hiện thường bị người dùng bác bỏ, từ đó cải tiến prompt có mục tiêu.

Có thể dùng boolean `conflict_detected` cùng `stated_total` và `calculated_total`, giữ các giá trị nguồn và quy tắc tính để người duyệt xem lệch. Phân biệt validation cấu trúc với validation ngữ nghĩa: JSON đúng/schema hợp lệ chưa chứng minh tổng đúng hoặc field được gán đúng nguồn. Cấu hình strict được hỗ trợ giúp giảm lỗi cú pháp/cấu trúc; code nghiệp vụ vẫn phải kiểm tra quan hệ giữa các giá trị.

Ví dụ tự biên soạn: ba dòng hàng cộng thành 120 nhưng nguồn ghi tổng 125. Hệ thống cần giữ cả hai và đánh dấu lệch, không tự đổi thành 125 để vượt kiểm tra.

## Câu hỏi tình huống

**1. Chọn một.** Muốn model sửa kết quả đặt nhầm trường. Request bổ sung hữu ích nhất?

A. Chỉ câu “thử lại”.

B. Chỉ một điểm confidence.

C. Tài liệu gốc, extraction lỗi và lỗi validation cụ thể.

D. Xóa tài liệu để tiết kiệm context bằng mọi giá.

**2. Chọn một.** Ngày hiệu lực chỉ xuất hiện trong phụ lục chưa cung cấp. Retry cùng dữ liệu nhiều lần không giúp. Bước phù hợp?

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
