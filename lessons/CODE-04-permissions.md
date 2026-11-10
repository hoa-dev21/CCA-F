# Quyền thực thi và kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486932), sources/code-lessons/486932.json. Câu hỏi tự biên soạn; tên và hành vi mode cần kiểm tra lại khi triển khai phiên bản khác.

## Nội dung bài học


Chế độ quyền quyết định công cụ được làm gì và khi nào cần người duyệt. Hãy chọn theo nhiệm vụ và việc có người theo dõi hay không. Bài học mô tả các chế độ sau; tên và hành vi cụ thể cần đối chiếu với phiên bản đang dùng:

- Manual: yêu cầu phê duyệt cho các thao tác ngoài việc đọc theo phạm vi bài mô tả.
- Accept edits: hỗ trợ quá trình sửa tệp có người theo dõi.
- Plan: đọc và phân tích để lập kế hoạch trước khi thực hiện.
- Auto: dùng bộ phân loại để xem xét hành động.
- Don't ask: dùng các công cụ đã được phê duyệt trước, tự từ chối thao tác ngoài phạm vi thay vì chờ hỏi.
- Bypass: bỏ kiểm tra quyền trong môi trường cô lập như trường hợp bài giới thiệu.

Cần phân biệt “được phép làm” với “làm đúng”. AI có thể được phép sửa một tệp nhưng vẫn viết sai logic. Kiểm tra quyền không thay thế việc đọc thay đổi và chạy kiểm thử.

Với CI — quy trình tự động xây dựng và kiểm thử mã — thường không có người trực để trả lời hộp thoại phê duyệt. Cần cho phép trước các công cụ cần thiết và xác định rõ cách từ chối thao tác ngoài phạm vi. Không nên dùng bypass chỉ để giải quyết việc cấu hình quyền còn thiếu.

## Câu hỏi

**1. Chọn một.** Job qua được kiểm tra quyền nhưng test thất bại. Cách hiểu đúng?

A. Kiểm tra quyền chứng minh tính đúng của mã.

B. Mã hợp phạm vi thao tác vẫn có thể sai; cần gate kiểm chứng riêng.

C. Không cần sửa mã vì hành động được phép.

D. Chỉ tăng quyền sẽ sửa test.

**2. Chọn một.** CI treo vì chờ phê duyệt. Thiết kế phù hợp bài?

A. Chờ vô hạn.

B. Bỏ mọi kiểm tra quyền ở production.

C. Dùng chế độ không hỏi với các công cụ được phê duyệt trước và từ chối phần ngoài danh sách.

D. Đổi câu chào của tác nhân AI.

**3. Chọn một.** Nhóm muốn nghiên cứu thay đổi kiến trúc trước khi sửa. Mode nào sát mục đích?

A. Plan.

B. Bypass chỉ vì nhanh.

C. Tự cấp mọi quyền không cần thiết.

D. Chạy tác vụ ghi trước rồi mới hỏi.

## Đáp án

1. **B.** A và C nhầm hai loại kiểm tra; D không sửa logic.
2. **C.** A không giải quyết unattended; B bỏ kiểm soát quá mức; D không ảnh hưởng quyền.
3. **A.** B, C không cần cho khảo sát; D đảo thứ tự kiểm soát.
