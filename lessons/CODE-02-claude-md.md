# A CLAUDE.md That Follows — Đặt hướng dẫn đúng chỗ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486929), sources/code-lessons/486929.json. Câu hỏi tự biên soạn.

## Tóm tắt

CLAUDE.md là hướng dẫn mô hình đọc, không phải cơ chế cưỡng chế mọi thao tác. Quy ước như cách đặt tên hoặc vị trí file phù hợp ở đây; hành động không được phép xảy ra cần hook hoặc kiểm soát bằng mã.

Bài phân biệt managed policy cấp tổ chức, user cho sở thích qua các dự án, project chia sẻ trong repo và local cho ghi chú cá nhân của repo đó. Chọn phạm vi theo người cần chịu ảnh hưởng. Không đặt quyết định riêng của một nhánh vào quy tắc dùng chung nếu không muốn ảnh hưởng cả nhóm.

Imports giúp chia file theo chủ đề, nhưng nội dung được mở rộng vào context. Chia thành nhiều file rồi import toàn bộ không tự giảm token cần đọc.

Quy tắc tốt phải cụ thể, kiểm tra được và nói rõ hành vi thay thế. “Đặt API handler trong thư mục X, mỗi file một handler” rõ hơn “làm theo best practices”. Giữ file gọn và sửa những quy tắc gây hiểu nhầm thay vì cứ nối thêm các chỉ dẫn trùng hoặc mâu thuẫn.

## Câu hỏi

**1. Chọn một.** Cần chặn tuyệt đối thao tác push nhánh bảo vệ. Cách nào phù hợp hơn chỉ ghi trong CLAUDE.md?

A. Viết cùng câu cấm thêm mười lần.

B. Dùng nhiều chữ in hoa.

C. Hook/kiểm soát bằng mã chặn thao tác trước thực thi.

D. Chỉ nhắc ở phản hồi cuối.

**2. Chọn một.** Tách file dài thành ba file rồi import cả ba có giảm context tự động không?

A. Không; imports tổ chức nội dung, phần được import vẫn phải đọc.

B. Có, mọi import đều miễn phí token.

C. Có, tên file thay thế toàn bộ nội dung.

D. Có, miễn đổi đuôi thành Markdown.

**3. Chọn một.** Ghi chú tạm của cá nhân cho một repo nên thuộc phạm vi nào trong bài?

A. Managed policy của toàn tổ chức.

B. Local của repo.

C. User cho mọi repo bất kể liên quan.

D. Project chung cho cả nhóm một cách mặc định.

## Đáp án

1. **C.** A và B vẫn là hướng dẫn xác suất; D không chặn hành động trước khi xảy ra.
2. **A.** B và C nhầm tổ chức file với nạp ngữ cảnh; D không thay cơ chế.
3. **B.** A quá rộng và không đúng chủ sở hữu; C vượt phạm vi repo; D ảnh hưởng người khác không cần thiết.
