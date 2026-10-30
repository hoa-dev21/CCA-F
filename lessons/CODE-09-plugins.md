# Plugins — Đóng gói cấu hình cho nhóm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486939), sources/code-lessons/486939.json. Câu hỏi tự biên soạn.

## Tóm tắt

Plugin gom các thành phần như skills, subagents, hooks và cấu hình MCP thành đơn vị có thể cài và quản lý phiên bản. Marketplace giúp nhóm khám phá và phân phối chung thay vì sao chép thư mục thủ công.

Cần xem toàn bộ thành phần trước khi cài. Một plugin được quảng bá nhờ skill vẫn có thể chứa hook chạy mã theo sự kiện hoặc agent với chỉ dẫn riêng. Việc đã qua review không có nghĩa mọi hành vi đều phù hợp với môi trường của bạn.

Bài nhấn mạnh hooks của plugin chạy cùng hooks của dự án, không mặc định thay thế chúng. Vì vậy phải xem tương tác của các quy tắc, không chỉ kiểm tra từng thành phần riêng lẻ.

Đóng gói cấu hình đã kiểm chứng, ghi phiên bản như dependency và cập nhật có kiểm tra. Namespace giúp phân biệt thành phần từ plugin; không đồng nghĩa cô lập mọi tác động của mã hook.

Liên hệ ôn thi: dùng để hiểu phân phối cấu hình và quyền công cụ; không mặc định mọi chi tiết marketplace mới đều là mục tiêu thi.

## Câu hỏi

**1. Chọn một.** Nhóm cài plugin chỉ vì muốn một skill. Cần kiểm tra gì thêm?

A. Chỉ ảnh đại diện.

B. Hooks, agents, MCP configs và hành vi mã đi kèm.

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
