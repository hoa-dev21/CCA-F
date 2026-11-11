# Tình huống cấu hình Claude Code và lặp sửa theo bằng chứng

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục3.1–3.6, trang PDF12–15. Câu hỏi tự biên soạn.

## Nội dung bài học


Chọn nơi đặt hướng dẫn theo người cần dùng và thời điểm áp dụng. CLAUDE.md chứa quy ước chung; quy tắc theo đường dẫn (path-scoped rules) áp dụng cho tệp khớp mẫu; skill đóng gói quy trình gọi khi cần. Chia tài liệu bằng imports giúp tổ chức, nhưng phần được nạp vẫn chiếm ngữ cảnh.

Ví dụ: Quy ước kiểm thử của cả nhóm không nên chỉ nằm trong `~/.claude/CLAUDE.md` cá nhân. Có thể đặt quy tắc trong `.claude/rules/` của dự án, khai báo YAML `paths` khớp `**/*.test.tsx`, quản lý phiên bản và kiểm tra quy tắc đã được nạp.

Nhiệm vụ nhiều phương án hoặc phụ thuộc cần khảo sát, lập kế hoạch rồi mới thực hiện. Thay đổi nhỏ đã rõ có thể sửa trực tiếp và kiểm chứng. Nếu còn giả định thiết kế chưa biết, hỏi để làm rõ trước khi chọn phương án.

Khi mô tả bị hiểu khác nhau, đưa đầu vào và đầu ra cụ thể. Ví dụ: “xử lý giá trị trống” cần các mẫu phân biệt `null` với chuỗi rỗng, kèm kết quả kiểm thử mong đợi và thực tế. Hai hoặc ba cặp mẫu đã kiểm tra có ích hơn yêu cầu chung “sửa cho đúng”.

Trong CI, dùng chế độ không tương tác, cấu trúc đầu ra rõ và đủ ngữ cảnh dự án. Phản hồi JSON hợp lệ chưa chứng minh nhận xét đúng hoặc kiểm thử có giá trị; cần kiểm tra nội dung, vị trí và bằng chứng trước khi chuyển sang bước sau. Phiên rà soát độc lập nên nhận yêu cầu, diff, tiêu chí và các phát hiện cũ nếu đang kiểm tra lại.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Rule test đang ở file CLAUDE.md trong thư mục cấu hình cá nhân của tác giả; đồng đội không nhận được. Chỉ test .test.tsx ở mọi package cần rule. Thiết kế nào sát cả yêu cầu chia sẻ lẫn phạm vi?

A. Version project rule có paths phù hợp; thử nạp trên máy mới.

B. Dán nguyên user config của tác giả vào mọi máy để đồng nhất toàn bộ thiết lập.

C. Đặt rule trong README có tên test để công cụ tự suy ra phạm vi.

D. Chuyển rule sang system prompt của một phiên rồi chia sẻ session ID.

**Câu 2 — Chọn một.** Tác nhân hiểu “xử lý giá trị trống” lúc là null, lúc là chuỗi rỗng. Phản hồi nào giúp sửa đúng với ít vòng lặp hơn?

A. “Làm chặt chẽ hơn, đừng bỏ edge case.”

B. Tăng test ngẫu nhiên nhưng không định nghĩa kết quả mong đợi.

C. Ví dụ null/rỗng/whitespace cùng expected/actual của test lỗi.

D. Gửi toàn bộ log build và yêu cầu tự đoán ý nghĩa giá trị trống.

**Câu 3 — Chọn hai.** CI review đang treo chờ nhập liệu và reviewer dùng nguyên context của tác nhân viết code. Hai thay đổi nào nhắm hai nguyên nhân?

A. Cho CI tự bấm đồng ý mọi prompt để không bị treo.

B. Chạy headless với quyền định trước và xử lý từ chối rõ ràng.

C. Tạo reviewer độc lập nhận requirements, diff và tiêu chí kiểm tra.

D. Tăng thời gian chờ CI và yêu cầu tác nhân hiện tại tự phản biện.

**Câu 4 — Chọn một.** CLI trả envelope JSON chứa kết quả có cấu trúc. Adapter đưa toàn bộ stdout vào parser schema của findings và bị lỗi. Sửa nào đúng?

A. Chỉ lấy dòng cuối stdout vì thường là câu trả lời.

B. Nới schema để chấp nhận mọi object rồi coi parse được là hợp lệ.

C. Yêu cầu mô hình không dùng markdown nhưng giữ nguyên adapter.

D. Đọc envelope; validate kết quả cấu trúc và trạng thái chạy.

**Câu 5 — Chọn hai.** Sau thay đổi rule, nhóm muốn biết nó đã tác động đúng lên test mà không ảnh hưởng file khác. Hai bằng chứng nào có giá trị?

A. Kiểm tra rule được nạp ở đường dẫn test đại diện trong nhiều package.

B. Dựa vào việc file cấu hình commit thành công.

C. Thử đường dẫn ngoài phạm vi để xác nhận không áp dụng ngoài ý muốn.

D. Chỉ đọc tên rule để suy ra glob đã đúng.

## Đáp án và giải thích

1. **A.** A đưa hướng dẫn tới đúng scope và kiểm chứng tải. B lan cả thiết lập cá nhân không liên quan; C tên tài liệu không bảo đảm cơ chế nạp/scoping; D không tạo cấu hình dự án bền vững.

2. **C.** C biến yêu cầu mơ hồ thành hành vi kiểm chứng được. A không định nghĩa semantics; B có thể kiểm tra sai kỳ vọng; D thêm dữ liệu nhưng vẫn thiếu hợp đồng cần thực hiện.

3. **B, C.** B bỏ tương tác không phù hợp CI mà vẫn giữ phạm vi quyền; C giảm ảnh hưởng lập luận của tác giả. A cấp quyền không phân biệt; D không loại cả nguyên nhân chờ lẫn thiên lệch context.

4. **D.** D phân biệt giao thức CLI và schema nghiệp vụ. A phụ thuộc trình bày; B mất kiểm tra; C thay văn phong mô hình không sửa việc adapter đọc nhầm tầng dữ liệu.

5. **A, C.** A kiểm tra positive case, C kiểm tra boundary/negative case. B chỉ chứng minh lưu vào Git. D tên có ý nghĩa không xác nhận cú pháp và hành vi glob.
