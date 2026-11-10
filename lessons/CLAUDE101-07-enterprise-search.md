# Enterprise search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383398), sources/claude101-lessons/383398.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Enterprise Search là tính năng tìm kiếm và tổng hợp thông tin nội bộ từ những nguồn tổ chức đã kết nối. Nó hữu ích khi tài liệu và trao đổi về một việc nằm rải rác ở nhiều nơi.

Ví dụ: Bạn muốn biết vì sao nhóm đổi lịch ra mắt sản phẩm. Thông tin có thể nằm trong tài liệu dự án và các cuộc trao đổi nội bộ. Tìm kiếm trên các nguồn được kết nối giúp tập hợp những bằng chứng liên quan.

Bài học mô tả hai phần thiết lập: quản trị viên cấu hình nguồn và tính năng cho tổ chức; người dùng đăng nhập hoặc xác thực với dịch vụ theo quyền của mình. Việc quản trị viên đã thêm nguồn không có nghĩa mọi người đều được xem mọi tài liệu trong nguồn đó.

Khi nhận câu trả lời, hãy mở các trích dẫn để kiểm tra nội dung gốc, bối cảnh, phiên bản và thời điểm. Có trích dẫn giúp bạn kiểm chứng dễ hơn, nhưng không bảo đảm mọi kết luận của AI đều đúng. Khả năng cung cấp tính năng, cách thiết lập và cách lưu trữ dữ liệu cần được kiểm tra lại khi triển khai.

## Câu hỏi

**1. Chọn một.** Cần tìm quyết định nội bộ trong chat và tài liệu dự án. Tính năng sát bài nhất?

A. Chỉ suy luận từ dữ liệu huấn luyện.

B. Chỉ tìm một trang web công khai.

C. Enterprise Search với nguồn và quyền phù hợp.

D. Một file trống.

**2. Chọn một.** Admin đã cấu hình nguồn, người dùng vẫn chưa xác thực dịch vụ. Bước còn thiếu theo bài?

A. Hoàn tất xác thực người dùng và kiểm tra quyền nguồn.

B. Gán mọi tài liệu là công khai.

C. Chỉ đổi tên dự án.

D. Bỏ giới hạn truy cập.

**3. Chọn một.** Vì sao nên mở trích dẫn nguồn của kết quả nội bộ?

A. Chỉ để đếm link.

B. Kiểm tra nguồn, bối cảnh và phiên bản liên quan.

C. Để thay mọi phép kiểm chứng.

D. Vì trích dẫn nguồn luôn chứng minh mọi kết luận.

## Đáp án

1. **C.** C nhắm tri thức nội bộ đa nguồn; A không có trạng thái tổ chức, B sai phạm vi, D không có dữ liệu.

2. **A.** A hoàn thiện luồng hợp lệ; B và D mở rộng quyền không cần thiết, C không xác thực.

3. **B.** B dùng nguồn để xác minh; A không đánh giá nội dung, C và D coi trích dẫn nguồn là bảo đảm.
