# Connecting your tools

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383397), sources/claude101-lessons/383397.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Connector là kết nối giúp Claude truy cập một nguồn dữ liệu hoặc công cụ bên ngoài. Tùy khả năng và quyền được cấp, kết nối có thể chỉ đọc thông tin hoặc còn cho phép thực hiện hành động.

Bài học giới thiệu MCP như một giao thức chung để kết nối ứng dụng AI với công cụ và dữ liệu. Các kết nối web phục vụ dịch vụ trên mạng; tiện ích của ứng dụng máy tính (desktop extensions) phục vụ các khả năng cục bộ, chẳng hạn truy cập tệp trong môi trường được cho phép.

Ví dụ: Muốn tổng hợp các yêu cầu hỗ trợ khách hàng, còn gọi là ticket, Claude cần kết nối tới hệ thống quản lý ticket và có quyền đọc dữ liệu. Chỉ viết tên hệ thống trong câu yêu cầu không tạo ra kết nối này.

Sau khi thiết lập kết nối, cần đăng nhập hoặc xác thực, cấp quyền phù hợp rồi thử một yêu cầu đơn giản để kiểm tra dữ liệu nhận được. Quyền đọc tài liệu không đồng nghĩa với quyền sửa, gửi thông tin hoặc truy cập mọi dữ liệu của tổ chức.

## Tự kiểm tra

**Question 1 — Choose one.** AI writes a plausible internal-ticket report without a connector. What must happen before using it?

A. Mention the domain as read authorization.

B. Ask whether the AI is sure it accessed data.

C. Connect, authenticate, and verify access to the actual tickets.

D. Require more ticket identifiers for specificity.

**Question 2 — Choose two.** A connector reads documents but cannot send email. Which TWO checks precede prompt changes?

A. Prompt length because reading implies sending.

B. The authenticated identity's permission to send.

C. Whether the connector supports sending or only reading.

D. Document names because one connector guarantees identical rights.

**Question 3 — Choose one.** A task needs allowed local files, but only web-service connectivity exists. What should be selected?

A. A local tool authorized for the relevant directory.

B. Send a drive path to the web service and assume access.

C. Grant more web-service read rights to expose local disks.

D. Use English so paths are understood.

**Question 4 — Choose two.** Which TWO initial checks should follow connector installation?

A. Try a small read with independently checkable data.

B. Accept the connector icon as success.

C. Use administrator access to bypass permissions.

D. Verify the account and effective permission scope.

**Question 5 — Choose one.** Does a common MCP protocol give every connected tool identical rights and actions?

A. Yes, if an administrator installed it.

B. Identical tool names unify all behavior.

C. No; protocol consistency still requires capability and permission checks per integration.

D. Yes, when all tools return JSON.

## Đáp án và giải thích

1. **C.** C tạo và kiểm tra đường dữ liệu. D có thể tăng chi tiết bịa; A không tạo kết nối/quyền; B tự xác nhận không thay bằng chứng thực thi.

2. **B, C.** C kiểm tra khả năng; B kiểm tra quyền. A và D cùng nhầm một kết nối với toàn bộ quyền hành động.

3. **A.** A chọn công cụ đúng vị trí dữ liệu. B thiếu đường truy cập; C tăng quyền sai hệ thống; D ngôn ngữ không giải quyết khả năng truy cập.

4. **A, D.** A kiểm tra đầu cuối; D kiểm tra phạm vi. C che lỗi cấu hình và mở quyền quá mức; B chỉ chứng minh một phần thiết lập giao diện.

5. **C.** C phân biệt chuẩn giao tiếp với hợp đồng thực tế. D nhầm định dạng với ngữ nghĩa; A nhầm cài đặt với quyền người dùng; B tên chung không tạo cùng khả năng.
