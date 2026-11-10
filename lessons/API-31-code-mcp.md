# Mở rộng Claude Code

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287792), sources/api-lessons/287792.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học giới thiệu cách mở rộng Claude Code bằng MCP. Thành phần MCP client trong Claude Code kết nối tới server để sử dụng thêm công cụ, nguồn tài liệu (resources) và mẫu hướng dẫn (prompt templates).

Ví dụ: Dự án cần chuyển một định dạng tài liệu sang Markdown. Server phải có công cụ thực hiện chuyển đổi và Claude Code phải được cấu hình kết nối tới server đó. Chỉ nhắc tên công cụ trong yêu cầu không tạo ra khả năng thực thi.

Hãy chọn kết nối theo công việc thực tế: lấy thông tin lỗi, đọc yêu cầu hỗ trợ, tìm tài liệu thiết kế hoặc gọi dịch vụ nội bộ. Thêm nhiều server mà không biết chúng phục vụ việc gì có thể làm cấu hình phức tạp hơn mà chưa giúp hoàn thành nhiệm vụ.

Tên các server cộng đồng trong video chỉ là ví dụ ở thời điểm giảng, cần kiểm tra trước khi sử dụng. Phạm vi cấu hình cá nhân hoặc dự án và quyền công cụ được học thêm trong nhóm Claude Code và phần liên quan của đề cương thi.

## Câu hỏi

**1. Chọn một.** Claude Code cần chức năng đọc định dạng nội bộ mà công cụ sẵn có không hỗ trợ. Cách mở rộng theo bài?

A. Yêu cầu mô hình đoán định dạng.

B. Chỉ đổi tên file thành văn bản.

C. Kết nối MCP server cung cấp chức năng tương ứng.

D. Coi việc nhắc tên công cụ là đã tích hợp.

**2. Chọn hai.** Ngoài các công cụ, hai thành phần nào được bài nhắc tới?

A. Resources.

B. Prompt templates.

C. Tự động huấn luyện lại mọi mô hình.

D. Bảo đảm không cần kiểm tra kết quả.

**3. Chọn một.** Nhóm muốn nối mọi server có thể tìm thấy dù chưa có nhu cầu. Cách quyết định phù hợp hơn?

A. Chọn theo số lượng sao của toàn bộ danh sách.

B. Nối tất cả rồi bỏ mọi mô tả.

C. Chỉ nhìn số server để đánh giá năng lực.

D. Xác định khả năng cần cho quy trình làm việc rồi chọn tích hợp tương ứng.

## Đáp án

1. **C.** A không có cơ sở dữ liệu; B không chuyển đổi thật; D thiếu kết nối và thực thi.
2. **A, B.** C và D không phải khả năng mà MCP bảo đảm.
3. **D.** A không xét độ phù hợp tác vụ; B tăng tích hợp thiếu mục tiêu; C nhầm số lượng với hiệu quả.

## Đối chiếu Bedrock

Claude Code đóng vai trò MCP client. Ví dụ server tài liệu chuyển PDF hoặc Word sang Markdown. Server có thể cung cấp tools, resources, prompts, nhưng ứng dụng chỉ dùng được khả năng client hỗ trợ. Danh sách server trong video không chứng minh chúng đã cài sẵn hoặc đáng tin; cấu hình và quyền cần phạm vi rõ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276806). Bản lưu: `sources/bedrock-lessons/276806.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, mẫu thêm server tài liệu bằng `claude mcp add` rồi kiểm tra công cụ chuyển đổi với tệp PDF và Word mẫu. Sentry, Jira và Slack là ví dụ tích hợp, không tự cấp quyền gửi tin hoặc ghi dữ liệu; hành động vẫn phải phù hợp nhiệm vụ được giao. Dùng chung câu hỏi.

Nguồn đối chiếu: [Enhancements with MCP servers](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289231). Bản lưu: `sources/vertex-media/289231.json`.
