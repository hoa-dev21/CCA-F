# Enterprise search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383398), sources/claude101-lessons/383398.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Tóm tắt

Enterprise Search phục vụ tìm và tổng hợp tri thức nội bộ qua các nguồn tổ chức đã kết nối. Nó phù hợp câu hỏi về chính sách, dự án, quyết định hoặc tài liệu nằm rải rác nhiều công cụ.

Bài mô tả hai tầng thiết lập: quản trị viên cấu hình nguồn/chức năng cho tổ chức; người dùng xác thực với dịch vụ theo quyền của mình. Thiết lập chung không tự cấp cho mọi người quyền xem mọi tài liệu.

Khi dùng kết quả tổng hợp, mở citation để kiểm tra bối cảnh, phiên bản và thời điểm. Một câu trả lời có nguồn thuận tiện hơn để xác minh, không phải bảo đảm mọi suy luận đều đúng. Availability, cách thiết lập và mô hình lưu trữ là thông tin sản phẩm cần kiểm tra lại khi triển khai, không học thuộc thay mục tiêu Architect.

## Câu hỏi

**1. Chọn một.** Cần tìm quyết định nội bộ trong chat và tài liệu dự án. Tính năng sát bài nhất?

A. Chỉ suy luận từ dữ liệu huấn luyện.

B. Chỉ tìm một trang web công khai.

C. Enterprise Search với nguồn và quyền phù hợp.

D. Một file trống.

**2. Chọn một.** Admin đã cấu hình nguồn, người dùng vẫn chưa xác thực dịch vụ. Bước còn thiếu theo bài?

A. Hoàn tất xác thực người dùng và kiểm tra quyền nguồn.

B. Gán mọi tài liệu là công khai.

C. Chỉ đổi tên project.

D. Bỏ giới hạn truy cập.

**3. Chọn một.** Vì sao nên mở citation của kết quả nội bộ?

A. Chỉ để đếm link.

B. Kiểm tra nguồn, bối cảnh và phiên bản liên quan.

C. Để thay mọi phép kiểm chứng.

D. Vì citation luôn chứng minh mọi kết luận.

## Đáp án

1. **C.** C nhắm tri thức nội bộ đa nguồn; A không có trạng thái tổ chức, B sai phạm vi, D không có dữ liệu.

2. **A.** A hoàn thiện luồng hợp lệ; B và D mở rộng quyền không cần thiết, C không xác thực.

3. **B.** B dùng nguồn để xác minh; A không đánh giá nội dung, C và D coi citation là bảo đảm.
