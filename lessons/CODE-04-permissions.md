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

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Job được phép sửa file và chạy test nhưng test thất bại. Nhóm cho rằng qua permission check nghĩa là đã an toàn để merge. Cách giải thích đúng?

A. Quyền được cấp chứng minh tác nhân sẽ chọn hành động đúng.

B. Permission check thất bại ngầm nên cần cấp thêm quyền.

C. Quyền giới hạn thao tác; gate riêng kiểm chứng chất lượng.

D. Chỉ cần đổi mode để cùng code trở thành hợp lệ.

**Câu 2 — Chọn một.** CI không có người trực nhưng đang chờ prompt phê duyệt. Thiết kế nào giữ giới hạn thao tác và tránh treo?

A. Chạy không tương tác với allowlist; ngoài phạm vi thì từ chối.

B. Tự trả lời yes cho mọi prompt để bảo đảm tiến độ.

C. Tăng timeout CI vì sớm muộn người dùng sẽ trả lời.

D. Bỏ kiểm tra quyền cho job đầu tiên, bổ sung lại sau.

**Câu 3 — Chọn hai.** Nhóm muốn đánh giá hai phương án kiến trúc trước khi cho phép sửa mã. Hai điều nào phù hợp với giai đoạn này?

A. Chọn chế độ lập kế hoạch và nêu rõ đầu ra cần so sánh.

B. Cho tác nhân sửa cả hai phương án trong cùng thư mục để dễ minh họa.

C. Đưa ràng buộc, dữ liệu cần đọc và tiêu chí quyết định.

D. Coi việc cho phép lập kế hoạch là phê duyệt triển khai phương án tác nhân thích.

**Câu 4 — Chọn một.** Lệnh test cần ghi cache trong thư mục được phép nhưng bị từ chối. Tác nhân đề xuất vô hiệu mọi kiểm soát filesystem. Cách xử lý tối thiểu phù hợp?

A. Cấp toàn bộ quyền filesystem vì test là thao tác đáng tin.

B. Xác minh nhu cầu cache; chỉ cho ghi đúng phạm vi cần thiết.

C. Bỏ chạy test và dùng suy luận thay kết quả.

D. Đổi tên lệnh test để vượt quy tắc chặn.

**Câu 5 — Chọn hai.** Một tác vụ chỉ cần đọc diff và xuất findings nhưng được cấp quyền ghi và mạng rộng. Hai thay đổi nào giảm quyền thừa?

A. Hạn chế công cụ/quyền theo nhiệm vụ review chỉ đọc.

B. Giữ toàn bộ quyền nhưng thêm câu “cẩn thận” ở cuối prompt.

C. Định nghĩa cách báo khi cần thao tác ngoài phạm vi thay vì tự mở rộng.

D. Cho quyền rộng vì mô hình đã có thành tích tốt trong các lần trước.

## Đáp án và giải thích

1. **C.** C phân biệt quyền hành động và tính đúng của sản phẩm. A nhầm hai khái niệm. B không có căn cứ từ lỗi test. D thay mode không sửa hành vi lỗi của code.

2. **A.** A định trước quyền và đường thất bại trong môi trường headless. B/C không kiểm soát đúng giới hạn hoặc không phù hợp không người trực. D mở quyền trước khi hiểu tác động.

3. **A, C.** A đặt chế độ/mục tiêu nghiên cứu; C cung cấp cơ sở so sánh. B đã thực hiện thay đổi trước quyết định. D suy rộng quyền nghiên cứu thành quyền triển khai.

4. **B.** B xử lý nhu cầu cụ thể với phạm vi nhỏ nhất phù hợp. A mở quá rộng; C mất bằng chứng; D né cơ chế quyền mà không giải quyết giới hạn được đặt.

5. **A, C.** A giới hạn năng lực; C tạo đường xử lý nhu cầu mới. B chỉ hướng dẫn. D lịch sử chất lượng không chứng minh mọi thao tác tương lai đều phù hợp nhiệm vụ hiện tại.
