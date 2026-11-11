# Đóng gói cấu hình cho nhóm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486939), sources/code-lessons/486939.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Plugin là gói tập hợp các thành phần như skills, tác nhân con, hooks và cấu hình kết nối MCP để cài đặt và quản lý phiên bản cùng nhau. Marketplace là nơi giúp tìm và phân phối các gói này, thay vì mỗi người tự sao chép thư mục cấu hình.

Trước khi cài, cần xem toàn bộ thành phần. Một plugin được giới thiệu vì có skill hữu ích vẫn có thể kèm hook chạy mã theo sự kiện hoặc tác nhân con có hướng dẫn riêng. Việc plugin đã được rà soát không tự chứng minh mọi hành vi đều phù hợp với dự án của bạn.

Theo bài học, hook của plugin chạy cùng hook của dự án, không mặc định thay thế chúng. Ví dụ: nếu cả hai đều kiểm tra trước khi công cụ chạy, cần thử xem các quyết định có xung đột hoặc cản trở công việc hợp lệ hay không.

Nên đóng gói cấu hình đã kiểm chứng, ghi rõ phiên bản như với các thư viện phụ thuộc và kiểm tra khi cập nhật. Phần tên riêng của plugin (namespace) giúp phân biệt thành phần đến từ đâu; nó không tự cô lập mọi tác động của mã hook.

Khi ôn thi, dùng bài này để hiểu việc chia sẻ cấu hình và quyền công cụ. Những chi tiết mới của marketplace cần được đối chiếu riêng với phạm vi đề cương.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A desired plugin skill comes with hooks and MCP configuration. What should installation review cover?

A. Only the skill instructions.

B. Only marketplace author reputation.

C. All executable components, permissions, and repository interactions.

D. Only namespace names as automatic hook isolation.

**Question 2 — Choose one.** A project and plugin both define PreToolUse hooks. What should testing assume?

A. Both may run; test interactions and allowed and denied cases.

B. The plugin always replaces project hooks.

C. Project hooks automatically disable plugin hooks.

D. Matching hooks cancel each other.

**Question 3 — Choose two.** A plugin update adds input-modifying hooks. Which TWO actions are appropriate?

A. Upgrade everyone automatically because the skill name is unchanged.

B. Review component changes and test against project configuration.

C. Record versions for traceability and rollback.

D. Check marketplace description only.

**Question 4 — Choose one.** Teammates use different versions of one plugin and get different checks. What improves deployment consistency?

A. Use the same prompt and ignore versions.

B. Choose the version using fewer tokens.

C. Rename the plugin on one machine.

D. Manage shared versions and configuration and test upgrades.

**Question 5 — Choose two.** A plugin passed external review, but the repository has specific data rules. Which TWO concerns remain?

A. Hook and MCP behavior and permissions fit project boundaries.

B. External review automatically grants repository authority.

C. Interactions with existing configuration and allow-or-deny cases.

D. Different namespaces guarantee hooks cannot affect the project.

## Đáp án và giải thích

1. **C.** C xét hành vi thực tế của cả gói. A bỏ thành phần chạy theo sự kiện; B uy tín không thay đánh giá tính phù hợp; D tên riêng phân biệt nguồn nhưng không tự cô lập mọi tác động.

2. **A.** A phù hợp khả năng cùng hoạt động và yêu cầu kiểm chứng. B/C/D đều giả định cơ chế thay thế hoặc triệt tiêu chưa được bảo đảm, có thể che hành vi ngoài dự kiến.

3. **B, C.** B đánh giá tác động hành vi mới, C quản lý thay đổi có thể truy nguyên. A bỏ qua hook dù skill cùng tên. D văn bản giới thiệu không đại diện đầy đủ mã thực thi.

4. **D.** D kiểm soát biến môi trường có thể gây khác biệt. A giữ nguyên khác phiên bản. B không đo tính tương thích. C phân biệt tên không làm hành vi nhất quán.

5. **A, C.** A kiểm tra chính sách địa phương; C kiểm tra kết hợp thực tế. B nhầm đánh giá bên ngoài với thẩm quyền cấp quyền. D nhầm phân biệt tên với cách ly tác động.
