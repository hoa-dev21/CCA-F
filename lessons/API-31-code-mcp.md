# Mở rộng Claude Code

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287792), sources/api-lessons/287792.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học giới thiệu cách mở rộng Claude Code bằng MCP. Thành phần MCP client trong Claude Code kết nối tới server để sử dụng thêm công cụ, nguồn tài liệu (resources) và mẫu hướng dẫn (prompt templates).

Ví dụ: Dự án cần chuyển một định dạng tài liệu sang Markdown. Server phải có công cụ thực hiện chuyển đổi và Claude Code phải được cấu hình kết nối tới server đó. Chỉ nhắc tên công cụ trong yêu cầu không tạo ra khả năng thực thi.

Hãy chọn kết nối theo công việc thực tế: lấy thông tin lỗi, đọc yêu cầu hỗ trợ, tìm tài liệu thiết kế hoặc gọi dịch vụ nội bộ. Thêm nhiều server mà không biết chúng phục vụ việc gì có thể làm cấu hình phức tạp hơn mà chưa giúp hoàn thành nhiệm vụ.

Tên các server cộng đồng trong video chỉ là ví dụ ở thời điểm giảng, cần kiểm tra trước khi sử dụng. Phạm vi cấu hình cá nhân hoặc dự án và quyền công cụ được học thêm trong nhóm Claude Code và phần liên quan của đề cương thi.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Claude Code được yêu cầu chuyển tài liệu sang Markdown và đã biết tên công cụ từ README, nhưng không gọi được. Repo chưa cấu hình server chuyển đổi. Cách sửa đúng tầng nào?

A. Thêm ví dụ gọi công cụ vào prompt rồi giữ nguyên môi trường.

B. Cấu hình MCP tới server thực có tool rồi thử kết nối.

C. Tăng số lượt tác nhân để nó tự tìm implementation từ tên.

D. Đổi yêu cầu sang prompt template cùng tên.

**Câu 2 — Chọn hai.** Nhóm muốn kết nối ba server cho dự án hỗ trợ khách hàng. Hai tiêu chí nào nên quyết định server nào được thêm?

A. Có tác vụ cụ thể cần khả năng mà server cung cấp.

B. Server có nhiều công cụ hơn các lựa chọn còn lại.

C. Phạm vi quyền, cấu hình và khả năng truy cập phù hợp môi trường dự án.

D. Tên server từng xuất hiện trong video khóa học.

**Câu 3 — Chọn một.** Server đã kết nối và liệt kê tool cập nhật ticket. Người dùng chỉ yêu cầu đọc trạng thái. Thiết kế nào phù hợp nhất?

A. Cho mọi tool vì đã xác thực kết nối.

B. Dùng tool cập nhật với payload rỗng để tận dụng cùng endpoint.

C. Yêu cầu mô hình tự hứa không thay đổi rồi giữ quyền ghi rộng.

D. Cấp khả năng đọc và kiểm quyền tại executor.

**Câu 4 — Chọn một.** Một kết nối MCP dùng tốt ở máy tác giả nhưng mất khi clone repo trên máy đồng đội. Chẩn đoán nào nên được kiểm tra trước?

A. README và prompt mà đồng đội dùng, vì có cùng tên server là đủ cho discovery.

B. Danh sách tools cache từ máy tác giả, trước khi xác minh client trên máy mới kết nối được.

C. Scope cấu hình, credential và kết nối trên máy mới.

D. Đổi tên tool để tránh trùng namespace.

**Câu 5 — Chọn hai.** Team muốn dùng MCP vừa lấy tài liệu thiết kế vừa gọi dịch vụ nội bộ. Hai nhận định nào đúng khi đánh giá tích hợp?

A. MCP client có thể tiếp cận các loại thành phần server cung cấp như tools/resources/prompts.

B. Có MCP nghĩa là mọi server có cùng các tool và quyền mặc định.

C. Công cụ được liệt kê tự động thực thi khi người dùng mở phiên.

D. Khả năng sử dụng phụ thuộc những thành phần server thật sự triển khai và cấu hình cho phép.

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
