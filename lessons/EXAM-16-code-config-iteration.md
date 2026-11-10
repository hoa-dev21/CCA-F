# Tình huống cấu hình Claude Code và lặp sửa theo bằng chứng

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục3.1–3.6, trang PDF12–15. Câu hỏi tự biên soạn.

## Nội dung bài học


Chọn nơi đặt hướng dẫn theo người cần dùng và thời điểm áp dụng. CLAUDE.md chứa quy ước chung; quy tắc theo đường dẫn (path-scoped rules) áp dụng cho tệp khớp mẫu; skill đóng gói quy trình gọi khi cần. Chia tài liệu bằng imports giúp tổ chức, nhưng phần được nạp vẫn chiếm ngữ cảnh.

Ví dụ: Quy ước kiểm thử của cả nhóm không nên chỉ nằm trong `~/.claude/CLAUDE.md` cá nhân. Có thể đặt quy tắc trong `.claude/rules/` của dự án, khai báo YAML `paths` khớp `**/*.test.tsx`, quản lý phiên bản và kiểm tra quy tắc đã được nạp.

Nhiệm vụ nhiều phương án hoặc phụ thuộc cần khảo sát, lập kế hoạch rồi mới thực hiện. Thay đổi nhỏ đã rõ có thể sửa trực tiếp và kiểm chứng. Nếu còn giả định thiết kế chưa biết, hỏi để làm rõ trước khi chọn phương án.

Khi mô tả bị hiểu khác nhau, đưa đầu vào và đầu ra cụ thể. Ví dụ: “xử lý giá trị trống” cần các mẫu phân biệt `null` với chuỗi rỗng, kèm kết quả kiểm thử mong đợi và thực tế. Hai hoặc ba cặp mẫu đã kiểm tra có ích hơn yêu cầu chung “sửa cho đúng”.

Trong CI, dùng chế độ không tương tác, cấu trúc đầu ra rõ và đủ ngữ cảnh dự án. Phản hồi JSON hợp lệ chưa chứng minh nhận xét đúng hoặc kiểm thử có giá trị; cần kiểm tra nội dung, vị trí và bằng chứng trước khi chuyển sang bước sau. Phiên rà soát độc lập nên nhận yêu cầu, diff, tiêu chí và các phát hiện cũ nếu đang kiểm tra lại.

## Câu hỏi

**1. Chọn một.** Quy ước đang ở `~/.claude/CLAUDE.md` của tác giả nên đồng đội không nhận được. Quy ước phải áp cho test `.test.tsx` ở nhiều package. Thiết kế phù hợp nhất?

A. Yêu cầu từng người tự chép toàn bộ file home của tác giả.

B. Đưa rule vào dự án `.claude/rules/` với YAML `paths` khớp `**/*.test.tsx`, quản lý phiên bản và kiểm tra đã nạp.

C. Chỉ đổi tên file cá nhân.

D. Import mọi tài liệu của mọi package vào mọi phiên.

**2. Chọn một.** Tác nhân AI hiểu không nhất quán câu “migration phải xử lý giá trị trống”. Phản hồi nào giúp sửa trực tiếp nhất?

A. Chỉ nhắc “cẩn thận hơn” và tăng tham số `temperature`.

B. Chỉ gửi số lượng test thất bại.

C. Gửi2–3 cặp input/output gồm null/chuỗi rỗng, test failure có expected/actual và quy tắc phân biệt chúng.

D. Xóa ca null để suite xanh.

**3. Chọn hai.** Bot kiểm tra CI treo chờ nhập liệu và tự kiểm tra bằng phiên vừa sinh code. Chọn cải thiện phù hợp.

A. Chạy `-p`/`--print`, cấu hình JSON/schema và adapter kiểm tra findings.

B. Giữ giao diện tương tác rồi hy vọng runner bấm nút.

C. Giữ mọi lý giải của tác giả và yêu cầu người kiểm tra đồng ý.

D. Dùng instance kiểm tra độc lập với requirements, diff, tiêu chí và findings cũ nếu kiểm tra lại.

## Đáp án

1. **B.** A dễ lệch và sai phạm vi chia sẻ; C không đổi scope; D nạp ngữ cảnh không liên quan.

2. **C.** A không xác định semantics; B thiếu tình huống để tái hiện; D làm yếu bằng chứng thay vì sửa.

3. **A, D.** B không giúp CI chạy mà không cần người nhập liệu; C làm tăng nguy cơ tiếp tục tin vào lập luận của chính phiên viết mã. Dù đầu ra có schema, vẫn cần kiểm tra dữ liệu và chất lượng nhận xét.
