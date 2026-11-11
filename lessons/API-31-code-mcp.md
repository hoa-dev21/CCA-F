# Mở rộng Claude Code

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287792), sources/api-lessons/287792.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học giới thiệu cách mở rộng Claude Code bằng MCP. Thành phần MCP client trong Claude Code kết nối tới server để sử dụng thêm công cụ, nguồn tài liệu (resources) và mẫu hướng dẫn (prompt templates).

Ví dụ: Dự án cần chuyển một định dạng tài liệu sang Markdown. Server phải có công cụ thực hiện chuyển đổi và Claude Code phải được cấu hình kết nối tới server đó. Chỉ nhắc tên công cụ trong yêu cầu không tạo ra khả năng thực thi.

Hãy chọn kết nối theo công việc thực tế: lấy thông tin lỗi, đọc yêu cầu hỗ trợ, tìm tài liệu thiết kế hoặc gọi dịch vụ nội bộ. Thêm nhiều server mà không biết chúng phục vụ việc gì có thể làm cấu hình phức tạp hơn mà chưa giúp hoàn thành nhiệm vụ.

Tên các server cộng đồng trong video chỉ là ví dụ ở thời điểm giảng, cần kiểm tra trước khi sử dụng. Phạm vi cấu hình cá nhân hoặc dự án và quyền công cụ được học thêm trong nhóm Claude Code và phần liên quan của đề cương thi.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Claude knows a conversion tool's name from README but cannot call it; no MCP server is configured. What addresses the missing layer?

A. Add invocation examples without changing the environment.

B. Configure the actual MCP server and test its connection.

C. Increase agent turns to infer implementation from the name.

D. Replace it with a prompt template of the same name.

**Question 2 — Choose two.** Which TWO criteria should determine which MCP servers a customer-support project adds?

A. A concrete task needs the server's capabilities.

B. It has more tools than alternatives.

C. Its permissions, configuration, and connectivity suit the project environment.

D. Its name appeared in a course video.

**Question 3 — Choose one.** A connected server exposes ticket updates, but the user requests only status. Which design is appropriate?

A. Enable every tool because authentication succeeded.

B. Invoke the update endpoint with an empty payload.

C. Keep broad write access and ask the model to promise not to edit.

D. Provide read capability and enforce permissions at the executor.

**Question 4 — Choose one.** An MCP connection works for the author but disappears on a teammate's clone. What should be checked first?

A. README wording, assuming the shared name guarantees discovery.

B. The author's cached tools before checking the new connection.

C. Configuration scope, credentials, and connectivity on the new machine.

D. Rename the tool to avoid namespace collisions.

**Question 5 — Choose two.** Which TWO statements apply when using MCP for design documents and internal services?

A. Clients can access server-provided tools, resources, and prompts.

B. Every server exposes identical tools and default permissions.

C. Discovered tools execute automatically when a session opens.

D. Usability depends on actual server capabilities and permitted configuration.

## Đáp án và giải thích

1. **B.** B tạo khả năng thực thi thực tế. A chỉ giúp lựa chọn khi công cụ đã khả dụng. C không tạo kết nối. D mẫu hướng dẫn không thay thế implementation công cụ.

2. **A, C.** A xác định lợi ích, C xác định khả năng dùng đúng phạm vi. B số lượng không chứng minh giá trị. D ví dụ lịch sử không chứng minh server hiện phù hợp hay hoạt động.

3. **D.** D giới hạn năng lực theo yêu cầu. A nhầm xác thực kết nối với quyền mọi hành động. B có thể gây tác động ngoài ý muốn. C là hướng dẫn, không thu hẹp khả năng thực thi.

4. **C.** C nhắm scope và kết nối thực tế của môi trường mới. A mô tả không tạo kết nối. B danh sách cache chưa chứng minh server khả dụng trên máy mới. D đổi tên không sửa scope hay credential.

5. **A, D.** A nêu các loại thành phần có thể cung cấp; D tránh suy rộng giao thức thành năng lực cụ thể. B và C nhầm khám phá/cấu hình với quyền và thực thi.

## Đối chiếu Bedrock

Claude Code đóng vai trò MCP client. Ví dụ server tài liệu chuyển PDF hoặc Word sang Markdown. Server có thể cung cấp tools, resources, prompts, nhưng ứng dụng chỉ dùng được khả năng client hỗ trợ. Danh sách server trong video không chứng minh chúng đã cài sẵn hoặc đáng tin; cấu hình và quyền cần phạm vi rõ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276806). Bản lưu: `sources/bedrock-lessons/276806.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, mẫu thêm server tài liệu bằng `claude mcp add` rồi kiểm tra công cụ chuyển đổi với tệp PDF và Word mẫu. Sentry, Jira và Slack là ví dụ tích hợp, không tự cấp quyền gửi tin hoặc ghi dữ liệu; hành động vẫn phải phù hợp nhiệm vụ được giao. Dùng chung câu hỏi.

Nguồn đối chiếu: [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289231). Bản lưu: `sources/vertex-media/289231.json`.
