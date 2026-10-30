# Enhancements with MCP servers — Mở rộng Claude Code

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287792), sources/api-lessons/287792.json. Câu hỏi tự biên soạn.

## Tóm tắt

Claude Code có MCP client tích hợp để kết nối server cung cấp khả năng ngoài các công cụ sẵn có. Server có thể cung cấp tools, resources và prompt templates cho một dịch vụ hoặc chức năng nội bộ.

Bài minh họa server chuyển tài liệu sang Markdown. Cần có công cụ thực thi ở server và đăng ký kết nối để Claude Code dùng được, thay vì chỉ nêu tên công cụ trong yêu cầu.

Chọn tích hợp theo luồng công việc: dữ liệu lỗi, yêu cầu ticket, tài liệu thiết kế hoặc dịch vụ nội bộ. Không mặc định thêm càng nhiều server càng tốt; phải biết khả năng nào phục vụ tác vụ nào. Tên các server cộng đồng trong video là ví dụ tại thời điểm giảng, cần kiểm tra riêng trước khi sử dụng.

Bài này nêu khả năng mở rộng. Các vấn đề phạm vi cấu hình project/user và quyền công cụ sẽ cần đối chiếu thêm với khóa Claude Code riêng cùng Exam Guide.

## Câu hỏi

**1. Chọn một.** Claude Code cần chức năng đọc định dạng nội bộ mà công cụ sẵn có không hỗ trợ. Cách mở rộng theo bài?

A. Yêu cầu model đoán định dạng.

B. Chỉ đổi tên file thành văn bản.

C. Kết nối MCP server cung cấp chức năng tương ứng.

D. Coi việc nhắc tên tool là đã tích hợp.

**2. Chọn hai.** Ngoài tools, hai thành phần nào được bài nhắc tới?

A. Resources.

B. Prompt templates.

C. Tự động huấn luyện lại mọi model.

D. Bảo đảm không cần kiểm tra kết quả.

**3. Chọn một.** Nhóm muốn nối mọi server có thể tìm thấy dù chưa có nhu cầu. Cách quyết định phù hợp hơn?

A. Chọn theo số lượng sao của toàn bộ danh sách.

B. Nối tất cả rồi bỏ mọi mô tả.

C. Chỉ nhìn số server để đánh giá năng lực.

D. Xác định khả năng cần cho workflow rồi chọn tích hợp tương ứng.

## Đáp án

1. **C.** A không có cơ sở dữ liệu; B không chuyển đổi thật; D thiếu kết nối và thực thi.
2. **A, B.** C và D không phải khả năng mà MCP bảo đảm.
3. **D.** A không xét độ phù hợp tác vụ; B tăng tích hợp thiếu mục tiêu; C nhầm số lượng với hiệu quả.

## Đối chiếu Bedrock

Đã đọc [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276806), sources/bedrock-lessons/276806.json. Claude Code là MCP client; ví dụ server documents chuyển PDF/Word thành Markdown. Server mở rộng tools/resources/prompts nhưng chỉ dùng capability client hỗ trợ. Danh sách server là ví dụ lịch sử, không khẳng định uy tín hay cài sẵn; quyền truy cập và cấu hình phải có phạm vi rõ. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289231), sources/vertex-media/289231.json. MCP client tích hợp nhận server documents cung cấp conversion tool, ví dụ claude mcp add rồi kiểm tra với fixtures PDF/Word. Danh sách Sentry/Jira/Slack là ví dụ tích hợp; quyền gửi tin và ghi dữ liệu vẫn theo nhiệm vụ được giao. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
