# Tình huống context dài, nguồn mâu thuẫn và review có chọn mẫu

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục5.1–5.6, trang PDF19–23. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi rút gọn lịch sử, giữ riêng những dữ kiện quyết định dưới dạng có cấu trúc: mã đơn, số tiền, ngày, trạng thái và mong muốn cụ thể. Ví dụ: “hoàn 35% đơn A trước ngày 12” không được biến thành “khách muốn hoàn sớm”.

Bản ghi lưu trên đĩa hoặc máy chủ chưa đủ. Mỗi yêu cầu hoặc tác nhân được khởi động lại cần thực sự nhận phần dữ kiện liên quan. Tách kết quả khám phá dài khỏi phiên chính và đặt phát hiện quan trọng ở đầu bản tổng hợp giúp giảm bỏ sót.

Khi nguồn bất đồng, chuyển cả các giá trị cùng nguồn, thời gian và phương pháp cho bên điều phối đối chiếu trước khi tổng hợp. Hai giá trị đo ở hai thời kỳ khác nhau chưa chắc mâu thuẫn. Không xóa một nguồn hoặc đoán thêm dữ liệu để báo cáo có vẻ đầy đủ.

Lỗi truy cập phải được báo là lỗi hoặc khoảng trống thông tin. Không biến nó thành một lần tìm kiếm thành công nhưng không có kết quả.

Trước khi giảm người kiểm tra, đo độ chính xác theo trường dữ liệu và loại tài liệu, rồi hiệu chỉnh điểm tự tin bằng dữ liệu có nhãn. Chuyển các trường hợp yếu hoặc mơ hồ cho người duyệt, đồng thời vẫn chọn mẫu ngẫu nhiên trong từng nhóm điểm cao để phát hiện lỗi đang lọt. Một tỷ lệ đúng chung, chẳng hạn 97%, chưa đủ để tự động thông qua mọi nhóm dữ liệu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Sau compact, yêu cầu “hoàn 35% đơn A trước ngày 12” mất số và ngày. Cách sửa kiến trúc nào bảo vệ các facts quan trọng xuyên phiên?

A. Tăng độ dài summary và coi đó là nguồn duy nhất.

B. Lưu case/order facts có cấu trúc, nạp phần liên quan mỗi lượt.

C. Dùng transcript gần nhất để suy lại các số đã mất.

D. Đặt confidence cao hơn cho dữ kiện được nhắc nhiều lần.

**Câu 2 — Chọn một.** Hai nguồn tài chính uy tín công bố hai giá trị khác nhau cho các kỳ đo khác nhau. Downstream cần nhận gì để tránh kết luận xung đột giả?

A. Cả hai giá trị cùng nguồn, kỳ đo, phương pháp và giới hạn so sánh.

B. Trung bình hai giá trị để dung hòa hai nguồn.

C. Chỉ giá trị mới nhất vì nguồn cũ không còn ý nghĩa.

D. Giá trị do mô hình đánh confidence cao hơn, bỏ nguồn còn lại.

**Câu 3 — Chọn hai.** Độ đúng tổng thể 97%, nhưng mẫu hiếm ít được đo. Hai bước nào cần trước và trong giảm review thủ công?

A. Dùng 97% làm ngưỡng chung cho mọi trường.

B. Phân tích theo loại tài liệu/trường và hiệu chỉnh điểm trên nhãn thật.

C. Chỉ kiểm tra nhóm confidence thấp vì nhóm cao đã đủ an toàn.

D. Lấy mẫu ngẫu nhiên phân tầng ở nhóm được tự động chấp nhận.

**Câu 4 — Chọn một.** Tác nhân tổng hợp nhận summary “nguồn thống nhất”, nhưng các con số bên dưới thực ra cùng trích một báo cáo. Cách sửa bàn giao nào ngăn việc đếm lặp bằng chứng?

A. Chỉ giữ số lượng website và điểm uy tín trung bình.

B. Bỏ mọi nguồn thứ cấp và giữ kết luận đã có.

C. Giữ claim–nguồn và nguồn gốc để kiểm tra tính độc lập.

D. Yêu cầu một tác nhân khác viết lại summary bằng ngôn từ mới.

**Câu 5 — Chọn hai.** Reviewer độc lập phải kiểm tra một thay đổi chạm API và consumer, trong khi findings cũ thuộc revision trước. Hai loại ngữ cảnh nào cần có?

A. Hợp đồng hiện tại, diff các phía và tiêu chí tác động cần báo.

B. Findings cũ kèm trạng thái để xác minh trên revision mới.

C. Chỉ giải thích của tác giả để reviewer tránh phân tâm bởi code.

D. Chỉ kết quả test xanh để suy ra các hợp đồng đã nhất quán.

## Đáp án và giải thích

1. **B.** B có nơi lưu chuẩn tách khỏi tóm tắt. A vẫn có nguy cơ mất chi tiết; C không phục hồi được dữ kiện đã không còn; D tần suất nhắc không chứng minh độ đúng.

2. **A.** A giữ điều kiện diễn giải. B tạo số tổng hợp không có phương pháp; C có thể mất dữ liệu so sánh lịch sử; D confidence không giải quyết khác biệt kỳ đo.

3. **B, D.** B kiểm tra khác biệt giữa nhóm và ý nghĩa điểm; D phát hiện lỗi confidence cao. A che nhóm yếu; C bỏ một nguồn sai lệch quan trọng và không đo được lỗi lọt.

4. **C.** C cho thấy các bản sao dùng chung một dòng bằng chứng. A đếm website; B có thể loại dữ liệu mà chưa xét nguồn; D đổi diễn đạt không tạo bằng chứng độc lập.

5. **A, B.** A cho reviewer đủ phạm vi kiểm tra liên file; B tránh lặp lỗi đã sửa và giữ lỗi chưa giải quyết. C dễ giữ thiên lệch của tác giả. D test xanh không chứng minh mọi tương tác đã được kiểm tra.
