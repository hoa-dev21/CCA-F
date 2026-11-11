# Validation và retry có phản hồi lỗi

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.4, trang PDF 18. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi dữ liệu trích xuất không qua kiểm tra, yêu cầu sửa nên chứa tài liệu gốc, kết quả đang sai và lỗi cụ thể. “Làm lại cho đúng” ít hữu ích hơn việc chỉ ra trường nào sai hoặc các giá trị nào không khớp.

Thử lại phù hợp khi mô hình có thể sửa từ dữ liệu đã nhận, chẳng hạn đặt nhầm trường hoặc đổi sai định dạng ngày. Nếu ngày hiệu lực chỉ nằm trong phụ lục chưa được cung cấp, gửi lại cùng đầu vào nhiều lần không bổ sung bằng chứng. Cần lấy phụ lục, biểu diễn dữ liệu còn thiếu hoặc chuyển người kiểm tra theo quy trình.

Phân biệt kiểm tra cấu trúc với kiểm tra ý nghĩa. JSON đúng và đủ trường chưa chứng minh tổng tiền chính xác hay từng trường lấy đúng từ nguồn. Chế độ kiểm tra nghiêm ngặt được hỗ trợ có thể giảm lỗi cấu trúc; mã nghiệp vụ vẫn phải kiểm tra quan hệ giữa các giá trị.

Ví dụ: Các dòng hàng cộng thành 120 nhưng hóa đơn ghi tổng 125. Giữ `stated_total` là tổng ghi trên nguồn và `calculated_total` là tổng được tính, kèm `conflict_detected` để đánh dấu có xung đột. Giữ cả cách tính và nguồn để người duyệt kiểm tra; không tự sửa một số cho bằng số còn lại chỉ để vượt kiểm tra.

Trong hệ thống rà soát mã, trường `detected_pattern` có thể ghi loại vấn đề phát hiện được. Phân tích những loại thường bị người dùng bác bỏ giúp sửa prompt đúng chỗ, thay vì thay đổi toàn bộ cách chấm một cách mơ hồ.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Kết quả trích xuất đặt ngày ký vào trường ngày hiệu lực. Cả hai đều có trên tài liệu. Retry nào nhắm đúng lỗi với ít mơ hồ nhất?

A. “Hãy cẩn thận hơn” cùng schema đã dùng.

B. Chỉ gửi JSON lỗi và yêu cầu đổi ngày.

C. Gửi nguồn, JSON lỗi và quy tắc phân biệt ngày bị nhầm.

D. Tăng số lần retry với nguyên prompt để lấy đa số kết quả.

**Câu 2 — Chọn một.** Ngày hiệu lực được dẫn chiếu sang phụ lục chưa cung cấp. Ba lần retry trả ba ngày khác nhau. Bước tiếp theo phù hợp nhất?

A. Lấy ngày xuất hiện nhiều lần nhất trong ba đáp án.

B. Lấy phụ lục hoặc trả trạng thái thiếu dữ liệu/review theo hợp đồng.

C. Chọn ngày ký vì là mốc có trong tài liệu gốc.

D. Giữ retry tới khi confidence vượt ngưỡng chấp nhận.

**Câu 3 — Chọn hai.** Tổng hóa đơn ghi 1.000 nhưng cộng các dòng được 950; chưa biết do thiếu dòng hay lỗi nguồn. Hai dữ liệu nào cần giữ cho xử lý tiếp theo?

A. Giá trị khai báo và giá trị tính lại, phân biệt trường.

B. Giá trị 950 thay cho 1.000 vì phép cộng là xác định.

C. Trạng thái xung đột cùng nguồn/vị trí liên quan.

D. Giá trị 975 làm trung gian đến khi có bản mới.

**Câu 4 — Chọn một.** Validator báo cùng lỗi nghiệp vụ sau mỗi lần retry; lần nào mô hình cũng trả JSON hợp lệ nhưng giữ nguyên giá trị. Thiết kế nào tránh vòng lặp vô hạn và hỗ trợ điều tra?

A. Bỏ validator sau lần thứ ba vì lỗi có thể do quy tắc quá nghiêm.

B. Đặt timeout rồi báo thành công với JSON cuối.

C. Chuyển tự động mọi giá trị lỗi sang null dù schema không định nghĩa.

D. Giới hạn retry; giữ chẩn đoán, lấy nguồn hoặc chuyển review.

**Câu 5 — Chọn hai.** Validator phát hiện một tài liệu vừa thiếu số đơn vừa có tổng nguồn mâu thuẫn. Hai yêu cầu nào giúp retry có ích mà không khuyến khích sửa bằng chứng?

A. Yêu cầu tạo số đơn theo mẫu phổ biến của nhà cung cấp.

B. Nêu rõ trường thiếu, nguồn hiện có và cho phép trạng thái thiếu theo hợp đồng.

C. Yêu cầu điều chỉnh các dòng sao cho khớp tổng được ghi.

D. Yêu cầu giữ cả tổng nguồn và tổng tính, đánh dấu xung đột chưa giải quyết.

## Đáp án và giải thích

1. **C.** C cung cấp nguồn và chẩn đoán cụ thể. A không chỉ ra sai lệch; B thiếu căn cứ chọn ngày; D lặp lại điều kiện gây nhầm và đa số không bảo đảm đúng.

2. **B.** B bổ sung bằng chứng hoặc biểu diễn đúng giới hạn. A bỏ phiếu trên suy đoán; C thay một khái niệm bằng khái niệm khác; D không khắc phục thiếu nguồn.

3. **A, C.** A giữ hai quan sát, C làm downstream biết phải xử lý mâu thuẫn. B chọn bên đúng khi chưa đủ thông tin; D tạo số không có cơ sở kế toán.

4. **D.** D giới hạn chi phí và giữ trạng thái thất bại có thể hành động. A bỏ kiểm soát; B nhầm parse được với đạt yêu cầu; C làm mất ý nghĩa hợp đồng và bằng chứng.

5. **B, D.** B cho phép báo thiếu trung thực; D bảo toàn bất đồng. A tạo định danh không có nguồn; C thay dữ liệu để vượt validation, che lỗi mà bước kiểm tra cần phát hiện.
