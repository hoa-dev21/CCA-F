# Tiêu chí review, phản hồi và CI có thể kiểm tra

Nguồn: Exam Guide CCAR-F v1.0, mục 3.5–3.6 và 4.1–4.2, trang PDF 14–17. Câu hỏi tự biên soạn.

## Tóm tắt

“Hãy bảo thủ” hoặc “chỉ báo lỗi tự tin cao” không thay tiêu chí cụ thể. Nêu rõ cần báo bug/security nào và bỏ qua style nào. Với comment, chỉ báo khi hành vi được mô tả mâu thuẫn code, thay vì bắt mọi cách diễn đạt khác sở thích.

Dùng vài ví dụ nhắm tình huống mơ hồ, gồm cả pattern hợp lệ dễ bị gắn cờ sai, severity và output như vị trí/vấn đề/cách sửa. Theo dõi nhóm false positives; có thể tạm tắt nhóm nhiễu cao trong khi cải tiến thay vì làm giảm niềm tin vào mọi finding.

Theo mục4.1–4.2, chọn2–4 few-shot examples có chủ đích, nêu ngắn lý do chọn hành động này thay phương án có vẻ hợp lý khác. Ví dụ hợp lệ: `if (x == null) return; use(x.id);` có guard trước dereference, không gắn lỗi null chỉ vì thấy `x.id`. Ví dụ cần báo: `return user.name` ở nhánh `user` có thể null từ truy vấn, với input tái hiện; classification phải theo tác động thật. Rubric severity có thể phân biệt lộ dữ liệu tenant khác là lỗi bảo mật nghiêm trọng, null crash trên một nhánh có thể tái hiện là bug chức năng, còn tên biến khác sở thích thì skip. Ghi rõ file/vị trí, issue, severity, suggested fix để reviewer thấy output mong đợi. Đừng dạy model chỉ dò đúng đoạn mẫu: kiểm tra nó áp dụng nguyên tắc cho ca mới.

Với extraction, few-shot nên phủ cấu trúc tài liệu khác nhau: nguồn trích ngay trong câu so với bibliography cuối tài liệu; phương pháp trong section riêng so với mô tả nhúng trong đoạn; đơn vị đo viết không trang trọng nhưng có bằng chứng để chuẩn hóa. Nếu field bắt buộc thường trả null dù nguồn có thông tin, thêm ví dụ chỉ cách tìm đúng vị trí ở các bố cục đó. Nếu nguồn thực sự không có dữ liệu, giữ missing theo contract thay vì dạy điền một giá trị có vẻ hợp lý.

Khi mô tả chuyển đổi không nhất quán, đưa input/output cụ thể. Với vấn đề tương tác, cung cấp chúng cùng lúc để nhìn phụ thuộc; vấn đề độc lập có thể sửa tuần tự. Interview trước triển khai giúp lộ giả định ở lĩnh vực chưa quen.

Theo mục3.5, bắt đầu bằng2–3 cặp input/output đã kiểm tra. Ví dụ migration phải giữ `null` là `null`, không biến thành chuỗi `"null"`; đưa ca cụ thể và expected output thay vì chỉ nói “xử lý null đúng”. Chọn test trước triển khai cho hành vi, edge cases và yêu cầu hiệu năng phù hợp, rồi gửi failure có input/expected/actual để lặp sửa. Interview có thể hỏi về invalidation cache hoặc failure modes trước khi chọn giải pháp, không chỉ hỏi lại thông tin đã có. Nếu hai lỗi cùng đổi một pipeline và ảnh hưởng nhau, mô tả cùng lúc; lỗi độc lập có thể giải lần lượt.

CI chạy không tương tác với `-p`, dùng JSON/schema cho đầu ra máy đọc. Cung cấp context dự án/test fixtures và các test đã có để giảm đề xuất trùng. Lần review lại nhận findings cũ và chỉ báo mới hoặc chưa sửa. Khóa Code mới có chi tiết khác về tự nạp cấu hình trong headless; không dựa vào giả định tự nạp: xác minh cấu hình/context thực tế đã có khi chạy.

Cú pháp theo mục3.6 gồm `-p`/`--print`, `--output-format json` và `--json-schema`. Adapter CI đọc payload có cấu trúc, validate finding có file/vị trí/nội dung hợp lệ rồi mới đăng inline PR comment theo quyền pipeline; flag JSON không tự đăng comment hoặc chứng minh finding đúng. CLAUDE.md ghi testing standards, fixtures và tiêu chí review có ích; test hiện hữu vẫn phải được cung cấp trong context phù hợp. Dùng reviewer instance độc lập với context tạo code để giảm thiên lệch tự xác nhận, đồng thời truyền requirements và diff cần review.

## Câu hỏi

**1. Chọn một.** Reviewer báo nhiều style nit không phải bug. Prompt nào nhắm lỗi tốt nhất?

A. “Tự tin hơn.”

B. Tiêu chí report/skip rõ, ví dụ pattern hợp lệ và severity cụ thể.

C. “Hãy thật bảo thủ” mà không định nghĩa.

D. Tăng số bình luận.

**2. Chọn một.** PR có commit mới, review bot lặp lại cả finding đã sửa. Cách cải thiện?

A. Bỏ review hoàn toàn.

B. Đăng mọi comment cũ thêm lần nữa.

C. Cung cấp finding trước và yêu cầu chỉ báo mới/chưa được giải quyết dựa trên diff hiện tại.

D. Xóa mọi trạng thái và không cho xem mã.

**3. Chọn một.** Test generator liên tục đề xuất test có sẵn. Context nào cần bổ sung?

A. Test files hiện hữu, tiêu chí giá trị và fixtures của dự án.

B. Chỉ tên model.

C. Chỉ thông báo “không trùng”.

D. Chỉ màu CI badge.

## Đáp án

1. **B.** A và C mơ hồ; D tăng nhiễu thay vì precision.
2. **C.** A bỏ giá trị; B giữ lỗi trùng; D bỏ bằng chứng cần đánh giá.
3. **A.** B và D không chỉ coverage hiện hữu; C nêu mục tiêu nhưng thiếu dữ liệu để tránh trùng.
