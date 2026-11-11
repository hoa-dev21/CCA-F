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

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Bot review báo nhiều style nit khiến kỹ sư bỏ qua lỗi thực. Nhóm muốn tăng giá trị findings thay vì chỉ giảm số lượng. Thay đổi nào tốt nhất?

A. Giới hạn mỗi PR một finding bất kể mức nghiêm trọng.

B. Tiêu chí report/skip, ví dụ hợp lệ và bằng chứng tác động.

C. Yêu cầu giọng văn ít khẳng định hơn nhưng giữ mọi loại báo cáo.

D. Chỉ đổi sang mô hình lớn hơn và giữ prompt.

**Câu 2 — Chọn một.** Commit mới sửa một finding, giữ nguyên finding khác và gây lỗi mới. Input nào giúp bot báo đúng thay đổi?

A. Chỉ danh sách findings cũ để tránh lạc phạm vi.

B. Chỉ lời tác giả nói đã sửa những gì.

C. Diff hiện tại và findings cũ; xác minh trạng thái từng lỗi.

D. Toàn bộ lịch sử PR nhưng không cần revision hiện tại.

**Câu 3 — Chọn hai.** Test generator liên tục tạo test đã có nhưng bỏ sót nhánh lỗi quan trọng. Hai loại input nào hữu ích nhất?

A. Test và fixtures hiện tại để biết hành vi đã được kiểm chứng.

B. Tiêu chí rủi ro/hành vi cần kiểm tra và khoảng trống còn lại.

C. Chỉ số lượng test mục tiêu để buộc sinh nhiều hơn.

D. Yêu cầu đặt tên test khác để tránh trùng theo tên.

**Câu 4 — Chọn một.** Bot đưa finding severity cao nhưng không chỉ ra đường thực thi bị ảnh hưởng; ví dụ đầu vào không tái hiện lỗi. Quyết định nào phù hợp cho gate?

A. Chặn merge vì nhãn severity do bot đã đưa ra.

B. Bỏ mọi finding cùng category từ nay.

C. Đổi severity thành thấp mà không xem lại lập luận.

D. Kiểm tra bằng chứng/tái hiện và tiêu chí report trước khi quyết định chặn.

**Câu 5 — Chọn hai.** Một category review có false positive cao, category bảo mật vẫn hữu ích. Hai biện pháp nào giảm nhiễu có kiểm soát?

A. Tạm tắt category nhiễu, giữ những kiểm tra đã có giá trị.

B. Tắt toàn bộ bot cho tới khi mọi category đạt cùng chất lượng.

C. Bổ sung ví dụ report/skip và đo lại category trên tập riêng trước khi bật lại.

D. Giấu các finding nhiễu trong phần cuối báo cáo nhưng vẫn tính vào gate.

## Đáp án và giải thích

1. **B.** B tác động vào tiêu chí phân biệt lỗi và pattern hợp lệ. A có thể bỏ lỗi quan trọng; C thay văn phong không giảm false positive; D chưa nhắm nguyên nhân tạo nhiễu.

2. **C.** C nối lịch sử lỗi với bằng chứng hiện tại. A thiếu thay đổi mới; B là tuyên bố cần kiểm tra; D không bảo đảm đọc đúng trạng thái đang review.

3. **A, B.** A cho biết độ bao phủ hiện có; B hướng vào giá trị tăng thêm. C tối ưu số lượng. D đổi tên không thay đổi việc kiểm tra trùng hành vi.

4. **D.** D đánh giá lỗi theo tác động được chứng minh. A coi nhãn là bằng chứng. B loại cả nhóm từ một trường hợp. C thay nhãn mà không xác định có lỗi thật hay không.

5. **A, C.** A giới hạn tác động vào nguồn nhiễu; C đặt tiêu chí để phục hồi chức năng. B bỏ cả lợi ích không bị lỗi; D thay vị trí hiển thị không khắc phục quyết định gate sai.
