# Đóng gói cấu hình cho nhóm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486939), sources/code-lessons/486939.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Plugin là gói tập hợp các thành phần như skills, tác nhân con, hooks và cấu hình kết nối MCP để cài đặt và quản lý phiên bản cùng nhau. Marketplace là nơi giúp tìm và phân phối các gói này, thay vì mỗi người tự sao chép thư mục cấu hình.

Trước khi cài, cần xem toàn bộ thành phần. Một plugin được giới thiệu vì có skill hữu ích vẫn có thể kèm hook chạy mã theo sự kiện hoặc tác nhân con có hướng dẫn riêng. Việc plugin đã được rà soát không tự chứng minh mọi hành vi đều phù hợp với dự án của bạn.

Theo bài học, hook của plugin chạy cùng hook của dự án, không mặc định thay thế chúng. Ví dụ: nếu cả hai đều kiểm tra trước khi công cụ chạy, cần thử xem các quyết định có xung đột hoặc cản trở công việc hợp lệ hay không.

Nên đóng gói cấu hình đã kiểm chứng, ghi rõ phiên bản như với các thư viện phụ thuộc và kiểm tra khi cập nhật. Phần tên riêng của plugin (namespace) giúp phân biệt thành phần đến từ đâu; nó không tự cô lập mọi tác động của mã hook.

Khi ôn thi, dùng bài này để hiểu việc chia sẻ cấu hình và quyền công cụ. Những chi tiết mới của marketplace cần được đối chiếu riêng với phạm vi đề cương.

## Câu hỏi

**1. Chọn một.** Nhóm cài plugin chỉ vì muốn một skill. Cần kiểm tra gì thêm?

A. Chỉ ảnh đại diện.

B. Hooks, các tác nhân AI, MCP configs và hành vi mã đi kèm.

C. Chỉ số ký tự tên plugin.

D. Không cần xem vì được gọi là plugin.

**2. Chọn một.** Dự án có PreToolUse hook, plugin thêm hook cùng loại. Theo bài nên giả định gì để kiểm tra?

A. Plugin tự xóa hook dự án.

B. Hook dự án vô hiệu plugin tuyệt đối.

C. Cả hai có thể chạy; cần kiểm tra tương tác.

D. Không hook nào còn chạy.

**3. Chọn một.** Mục tiêu chính của đóng gói và quản lý phiên bản?

A. Phân phối cấu hình nhất quán và theo dõi cập nhật cho nhóm.

B. Loại bỏ mọi kiểm thử.

C. Bảo đảm mọi plugin bên thứ ba đáng tin.

D. Bỏ cơ chế quản lý thay đổi.

## Đáp án

1. **B.** A và C không xét hành vi; D bỏ rủi ro mã đi kèm.
2. **C.** A, B, D đều giả định sai việc tự thay thế/vô hiệu.
3. **A.** B bỏ xác minh; C không được bảo đảm; D trái mục tiêu theo dõi phiên bản.
