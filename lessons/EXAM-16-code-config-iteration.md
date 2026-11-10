# Tình huống cấu hình Claude Code và lặp sửa theo bằng chứng

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục3.1–3.6, trang PDF12–15. Câu hỏi tự biên soạn.

## Nội dung bài học

Chọn nơi đặt cấu hình theo người cần nhận quy ước và thời điểm áp dụng. CLAUDE.md giữ chuẩn chung; path-scoped rules giới hạn quy ước cho file khớp glob; skill đóng gói quy trình làm việc khi cần. Imports giúp modular hóa nhưng không miễn chi phí ngữ cảnh nếu vẫn nạp toàn bộ.

Với tác vụ nhiều phương án hoặc nhiều phụ thuộc, khảo sát/lập kế hoạch rồi thực thi. Với thay đổi nhỏ đã hiểu, có thể sửa trực tiếp và kiểm chứng. Cụ thể hóa yêu cầu bằng input/output và test failure; dùng interview khi cần làm rõ các lựa chọn thiết kế chưa biết.

CI cần chế độ không tương tác, quy định về đầu ra và ngữ cảnh dự án. Không biến một JSON envelope hợp lệ thành bằng chứng rằng kiểm tra đúng hoặc test có giá trị; kiểm tra nội dung dữ liệu gửi đi, vị trí và bằng chứng trước khi downstream xử lý.

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

3. **A, D.** B không giải quyết non-interactive CI; C tăng thiên lệch tự xác nhận. Output bản mô tả cấu trúc dữ liệu vẫn cần validation và kiểm tra chất lượng.
