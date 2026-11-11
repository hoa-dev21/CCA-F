# MCP scope và chọn công cụ khám phá codebase

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 2.4–2.5, trang PDF 11–12. Câu hỏi tự biên soạn theo đề cương, không phải bài video.

## Nội dung bài học


Theo cấu hình trong đề cương, MCP server dùng chung cho nhóm được đặt ở `.mcp.json` của dự án. Server cá nhân hoặc thử nghiệm dùng phạm vi người dùng (user scope), được mô tả là lưu tại `~/.claude.json`.

Dùng tham chiếu biến môi trường như `${GITHUB_TOKEN}` thay vì ghi khóa bí mật vào tệp chia sẻ. Mỗi thành viên cung cấp giá trị và quyền phù hợp trên máy mình. Có tên server trong cấu hình chưa chứng minh đã kết nối; cần kiểm tra danh sách công cụ thực sự được phát hiện và quyền sử dụng.

Nhiều server có thể cùng cung cấp công cụ. Mô tả rõ đầu vào, đầu ra và khi nào nên dùng giúp mô hình chọn đúng. Ví dụ: công cụ MCP tìm tài liệu theo ý nghĩa cần giải thích điểm khác với Grep chỉ tìm nội dung khớp trong tệp.

Resource dạng danh mục (catalog) giúp ứng dụng biết nguồn nào có sẵn trước khi chọn nội dung: danh sách yêu cầu hỗ trợ kèm tóm tắt, cây tài liệu hoặc cấu trúc cơ sở dữ liệu. Vẫn cần thao tác đọc resource và kiểm tra quyền.

Với nhu cầu phổ biến như tích hợp Jira, có thể cân nhắc server sẵn có đã được đánh giá phù hợp. Quy trình đặc thù mới có thể cần server riêng. Không chọn chỉ vì tìm thấy một server.

Khi đọc và sửa kho mã, phân biệt các công cụ:

- Glob tìm đường dẫn theo mẫu, chẳng hạn `**/*.test.tsx`.
- Grep tìm nội dung trong tệp.
- Read đọc nội dung.
- Edit thay một phần dựa trên đoạn dùng làm mốc nhận diện (anchor).
- Write ghi nội dung tệp.

Nếu mốc của Edit xuất hiện nhiều lần và không xác định được vị trí duy nhất, hãy đọc đầy đủ rồi chỉnh hoặc ghi có kiểm soát, kiểm tra diff sau đó. Khám phá mã từng bước từ điểm bắt đầu, theo phần nhập mô-đun và luồng gọi, thay vì nạp mọi tệp cùng lúc. Nếu hàm được xuất qua lớp trung gian, tìm các tên được xuất rồi tìm từng tên để không bỏ sót nơi gọi.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An MCP ticket server works on its author's machine but is absent when teammates clone the repository. Its configuration is user-scoped. How should shared configuration and individual credentials be handled?

A. Commit the entire user configuration and working token.

B. Version project-level connection configuration while keeping credentials and permissions individual.

C. Have everyone use the author's machine account.

D. Document the server in README without changing configuration scope.

**Question 2 — Choose one.** You need to find files matching `**/*.test.tsx` that call `saveOrder` in a large repository. Which search sequence is appropriate?

A. Grep for the string `.test.tsx` inside file contents, then read every match.

B. Read all directories and search manually.

C. Glob for test paths, Grep their contents, then Read the matching context.

D. Glob for `saveOrder` because it is the function name.

**Question 3 — Choose two.** Edit reports that its anchor appears three times, and someone else has just modified the file. Which TWO actions reduce accidental overwrites and incorrect edits?

A. Read the current file and obtain enough context to distinguish the target location.

B. Use the old Read result to rewrite the entire file.

C. Use a unique anchor or controlled replacement, then inspect the diff.

D. Edit the first occurrence because the target string exists.

**Question 4 — Choose one.** Grep finds one caller of `fetchRecord`, but a wrapper re-exports it as `loadCustomer`. What should happen before changing its signature?

A. Assume the search is complete because the implementation has one name.

B. Change the signature and use production logs to find broken callers.

C. Change every file containing “Record.”

D. Trace aliases and exports, then inspect wrappers and callers of each relevant name.

**Question 5 — Choose two.** Project-scoped MCP configuration is visible to teammates. Which TWO things still need checking in each environment?

A. Actual credentials and permissions on the target system.

B. The author's successful connection as a substitute for local checks.

C. Required approvals, environment configuration, and server reachability.

D. Identical write permissions inferred solely from the committed configuration.

## Đáp án và giải thích

1. **B.** B chia sẻ định nghĩa kết nối mà giữ credential theo người/môi trường. A phát tán bí mật; C trộn quyền và danh tính; D hướng dẫn không làm cấu hình user trở thành cấu hình dự án.

2. **C.** C phân biệt tìm tên đường dẫn, tìm nội dung và đọc ngữ cảnh. A tìm sai miền dữ liệu; B tốn công chưa thu hẹp; D tên hàm trong nội dung không phải mẫu đường dẫn.

3. **A, C.** A cập nhật trạng thái; C kiểm tra đúng phạm vi sửa. B có thể ghi đè thay đổi mới. D xác nhận tồn tại không chứng minh đó là vị trí đúng.

4. **D.** D theo quan hệ ký hiệu và luồng dữ liệu. A bỏ alias; B đẩy phát hiện lỗi sang production; C vừa có false positive vừa không bảo đảm bắt tên alias khác.

5. **A, C.** A và C quyết định kết nối có dùng được trong môi trường mới. B chỉ là bằng chứng ở môi trường khác. D chia sẻ cấu hình không tự cấp cùng quyền hay cùng danh tính.
