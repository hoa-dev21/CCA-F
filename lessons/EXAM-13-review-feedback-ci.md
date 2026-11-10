# Tiêu chí review, phản hồi và CI có thể kiểm tra

Nguồn: Exam Guide CCAR-F v1.0, mục 3.5–3.6 và 4.1–4.2, trang PDF 14–17. Câu hỏi tự biên soạn.

## Nội dung bài học


Yêu cầu “hãy bảo thủ” hoặc “chỉ báo lỗi tự tin cao” chưa cho người rà soát AI biết điều gì đáng báo. Hãy nêu rõ loại lỗi chức năng, bảo mật cần tìm và những góp ý về phong cách nên bỏ qua. Với chú thích trong mã, chỉ báo khi mô tả hành vi mâu thuẫn với mã, không báo chỉ vì khác sở thích diễn đạt.

Theo đề cương, có thể dùng 2–4 ví dụ có chủ đích, gồm cả trường hợp hợp lệ dễ bị báo nhầm và lỗi thật. Nêu ngắn lý do cùng kết quả mong muốn: tệp, vị trí, vấn đề, mức độ nghiêm trọng và cách sửa.

Ví dụ: `if (x == null) return; use(x.id);` đã kiểm tra null trước khi truy cập, nên không gắn lỗi chỉ vì thấy `x.id`. Ngược lại, `return user.name` trên đường chạy mà `user` có thể null cần được xem xét với đầu vào tái hiện. Phân mức theo tác động thật: lộ dữ liệu khách hàng khác là lỗi bảo mật nghiêm trọng, lỗi null có thể tái hiện là lỗi chức năng, tên biến khác sở thích thì bỏ qua.

Theo dõi cảnh báo sai theo nhóm. Nếu một nhóm quá nhiễu làm người dùng bỏ qua cả phát hiện có giá trị, có thể tạm tắt nhóm đó trong khi sửa tiêu chí và đánh giá lại. Kiểm tra mô hình áp dụng nguyên tắc cho trường hợp mới, không chỉ nhận ra đúng đoạn mã mẫu.

Với trích xuất tài liệu, ví dụ nên có nhiều bố cục: trích dẫn trong câu hoặc ở danh mục cuối, phương pháp nghiên cứu trong mục riêng hoặc lồng trong đoạn, đơn vị đo viết không trang trọng nhưng đủ căn cứ để chuẩn hóa. Nếu thông tin có thật mà mô hình thường trả null, minh họa cách tìm ở các bố cục này. Nếu nguồn không có, phải giữ trạng thái thiếu dữ liệu, không dạy mô hình đoán.

Khi yêu cầu sửa mã bị hiểu không nhất quán, bắt đầu bằng 2–3 cặp đầu vào và đầu ra đã kiểm tra. Ví dụ: chuyển đổi dữ liệu phải giữ `null` là `null`, không thành chuỗi `"null"`. Chọn kiểm thử về hành vi, trường hợp biên và hiệu năng phù hợp trước khi triển khai. Khi kiểm thử thất bại, gửi đầu vào, kết quả mong đợi và kết quả thực tế.

Các lỗi ảnh hưởng lẫn nhau nên được mô tả cùng lúc để thấy phụ thuộc; lỗi độc lập có thể giải từng việc. Khi còn lựa chọn thiết kế chưa rõ, hỏi để làm rõ, chẳng hạn khi nào xóa cache hoặc xử lý các kiểu thất bại ra sao, thay vì hỏi lại thông tin đã có.

Trong CI, dùng chế độ không tương tác như `-p` hoặc `--print`. Các tùy chọn `--output-format json` và `--json-schema` hỗ trợ đầu ra cho chương trình đọc. Phần tích hợp CI vẫn phải kiểm tra nội dung, đường dẫn và vị trí phát hiện trước khi đăng nhận xét lên PR theo quyền được cấp. Có JSON hợp lệ không tự chứng minh phát hiện đúng hoặc tự tạo bình luận.

Cung cấp yêu cầu, diff, tiêu chuẩn kiểm thử, dữ liệu mẫu và các kiểm thử hiện có để giảm đề xuất trùng. Khi rà lại PR, đưa phát hiện cũ và yêu cầu chỉ báo lỗi mới hoặc chưa giải quyết dựa trên mã hiện tại. Xác minh hướng dẫn dự án thực sự đã được nạp, không giả định mọi chế độ tự nạp giống nhau. Có thể dùng phiên rà soát độc lập với phiên viết mã để giảm việc bị ảnh hưởng bởi lý giải của bên tạo.

## Câu hỏi

**1. Chọn một.** Người kiểm tra báo nhiều style nit không phải lỗi chương trình. Prompt nào nhắm lỗi tốt nhất?

A. “Tự tin hơn.”

B. Tiêu chí report/skip rõ, ví dụ pattern hợp lệ và severity cụ thể.

C. “Hãy thật bảo thủ” mà không định nghĩa.

D. Tăng số bình luận.

**2. Chọn một.** PR có commit mới, kiểm tra bot lặp lại cả finding đã sửa. Cách cải thiện?

A. Bỏ kiểm tra hoàn toàn.

B. Đăng mọi comment cũ thêm lần nữa.

C. Cung cấp finding trước và yêu cầu chỉ báo mới/chưa được giải quyết dựa trên diff hiện tại.

D. Xóa mọi trạng thái và không cho xem mã.

**3. Chọn một.** Test generator liên tục đề xuất test có sẵn. Ngữ cảnh nào cần bổ sung?

A. Test files hiện hữu, tiêu chí giá trị và fixtures của dự án.

B. Chỉ tên mô hình.

C. Chỉ thông báo “không trùng”.

D. Chỉ màu CI badge.

## Đáp án

1. **B.** A và C mơ hồ; D tăng nhiễu thay vì precision.
2. **C.** A bỏ giá trị; B giữ lỗi trùng; D bỏ bằng chứng cần đánh giá.
3. **A.** B và D không chỉ coverage hiện hữu; C nêu mục tiêu nhưng thiếu dữ liệu để tránh trùng.
