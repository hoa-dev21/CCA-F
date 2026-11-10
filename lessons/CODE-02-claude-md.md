# Đặt hướng dẫn đúng chỗ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486929), sources/code-lessons/486929.json. Câu hỏi tự biên soạn.

## Nội dung bài học


CLAUDE.md là tệp hướng dẫn để mô hình đọc, thường dùng cho quy ước của dự án như cách đặt tên hoặc nơi đặt tệp. Đây không phải cơ chế tự động chặn mọi thao tác sai. Nếu một hành động bắt buộc phải bị ngăn, cần có kiểm soát bằng chương trình, chẳng hạn hook chạy trước thao tác.

Bài học phân biệt các phạm vi hướng dẫn:

- Chính sách tổ chức (managed policy): áp dụng theo quản lý của tổ chức.
- Hướng dẫn người dùng (user): sở thích cá nhân dùng qua nhiều dự án.
- Hướng dẫn dự án: quy ước được lưu trong kho mã nguồn và chia sẻ với nhóm.
- Hướng dẫn cục bộ (local): ghi chú cá nhân chỉ dành cho dự án đó.

Chọn phạm vi theo người và công việc cần chịu ảnh hưởng. Ví dụ: một ghi chú thử nghiệm riêng trên nhánh của bạn thường không nên trở thành quy tắc chung cho cả nhóm.

Bạn có thể dùng imports để đưa nội dung từ tệp khác vào hướng dẫn. Cách này giúp tổ chức tài liệu, nhưng toàn bộ phần được đưa vào vẫn chiếm ngữ cảnh. Chia một tệp thành ba tệp rồi nạp cả ba không tự giảm lượng thông tin mô hình phải đọc.

Viết quy tắc cụ thể và nêu rõ cần làm gì. “Đặt mã xử lý API trong thư mục X, mỗi tệp một phần xử lý” dễ thực hiện hơn “làm theo cách tốt nhất”. Khi quy tắc gây hiểu nhầm, hãy sửa nó thay vì liên tục thêm chỉ dẫn trùng lặp hoặc mâu thuẫn.

## Câu hỏi

**1. Chọn một.** Cần chặn tuyệt đối thao tác push nhánh bảo vệ. Cách nào phù hợp hơn chỉ ghi trong CLAUDE.md?

A. Viết cùng câu cấm thêm mười lần.

B. Dùng nhiều chữ in hoa.

C. Hook/kiểm soát bằng mã chặn thao tác trước thực thi.

D. Chỉ nhắc ở phản hồi cuối.

**2. Chọn một.** Tách file dài thành ba file rồi import cả ba có giảm ngữ cảnh tự động không?

A. Không; imports tổ chức nội dung, phần được import vẫn phải đọc.

B. Có, mọi import đều miễn phí token.

C. Có, tên file thay thế toàn bộ nội dung.

D. Có, miễn đổi đuôi thành Markdown.

**3. Chọn một.** Ghi chú tạm của cá nhân cho một repo nên thuộc phạm vi nào trong bài?

A. Managed policy của toàn tổ chức.

B. Local của repo.

C. User cho mọi repo bất kể liên quan.

D. Dự án chung cho cả nhóm một cách mặc định.

## Đáp án

1. **C.** A và B vẫn là hướng dẫn xác suất; D không chặn hành động trước khi xảy ra.
2. **A.** B và C nhầm tổ chức file với nạp ngữ cảnh; D không thay cơ chế.
3. **B.** A quá rộng và không đúng chủ sở hữu; C vượt phạm vi repo; D ảnh hưởng người khác không cần thiết.
