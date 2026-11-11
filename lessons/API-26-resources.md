# Cung cấp dữ liệu theo URI

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287782), sources/api-lessons/287782.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Resource là nguồn nội dung mà MCP server cung cấp để ứng dụng đọc. Mỗi resource có một địa chỉ gọi là URI. Ứng dụng chọn nội dung cần dùng rồi đưa vào ngữ cảnh cho Claude.

Ví dụ của bài hỗ trợ chọn tài liệu bằng ký hiệu `@`. Một resource trả danh sách để giao diện gợi ý tên khi người dùng gõ; một mẫu địa chỉ khác cho phép đọc từng tài liệu.

URI cố định như `docs://documents` không có tham số. URI có tham số như `docs://documents/{doc_id}` cho phép thay `doc_id` bằng mã tài liệu cần lấy. “Cố định” nói về địa chỉ, không có nghĩa nội dung không bao giờ thay đổi.

MIME type cho biết loại nội dung, chẳng hạn JSON cho danh sách hoặc văn bản thuần cho tài liệu. Trong mẫu thư viện, giá trị trả về được chuyển sang dạng truyền đi phù hợp, nên không phải tự biến mọi giá trị thành chuỗi JSON.

Resources công bố nội dung để ứng dụng đọc; tools cung cấp thao tác có thể gọi. Đây không phải quy tắc cấm công cụ đọc dữ liệu: bài trước đã có công cụ đọc tài liệu. Hãy chọn theo cách ứng dụng hoặc mô hình sẽ chủ động lấy thông tin.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Autocomplete tài liệu phải hiện khi người dùng gõ @, trước khi gọi mô hình. Thiết kế nào đáp ứng đúng quyền chủ động của UI?

A. Công bố resource danh mục để ứng dụng đọc trực tiếp.

B. Yêu cầu Claude gọi tool liệt kê sau mỗi ký tự người dùng nhập.

C. Chỉ cung cấp prompt mô tả tên tài liệu thường gặp.

D. Đưa tất cả tài liệu vào system prompt ngay khi mở ứng dụng.

**Câu 2 — Chọn hai.** Server có docs://documents cho danh mục và docs://documents/{doc_id} cho nội dung. Hai nhận định nào đúng?

A. Địa chỉ danh mục cố định nên ứng dụng có thể coi nội dung không đổi.

B. Template cho phép đọc đối tượng cụ thể bằng tham số định danh.

C. Nội dung tại URI cố định vẫn có thể đổi khi kho tài liệu đổi.

D. Template tự bảo đảm mọi doc_id người dùng gửi đều được phép đọc.

**Câu 3 — Chọn một.** Resource danh mục trả JSON, resource chi tiết trả văn bản. Client đang nối mọi phản hồi vào một chuỗi và UI không đọc được danh sách. Sửa nào phù hợp nhất?

A. Đổi mọi resource sang MIME text/plain.

B. Yêu cầu người dùng chọn tài liệu bằng vị trí ký tự trong chuỗi.

C. Bỏ resource danh mục và dùng tên tài liệu trong prompt mẫu.

D. Parse JSON danh mục; giữ text theo MIME/hợp đồng.

**Câu 4 — Chọn hai.** Một server đã có tool đọc tài liệu; nhóm muốn thêm resource đọc tài liệu đã chọn từ UI. Hai kết luận nào phù hợp?

A. Hai cách có thể cùng tồn tại vì quyền chủ động sử dụng khác nhau.

B. Tool đọc dữ liệu phải bị xóa vì resources độc quyền mọi thao tác đọc.

C. Chọn primitive theo luồng ứng dụng/mô hình và hợp đồng dữ liệu.

D. Resource chỉ hợp lệ nếu mô hình chủ động yêu cầu mỗi lần đọc.

**Câu 5 — Chọn một.** UI đã cache danh mục từ URI cố định. Một tài liệu mới xuất hiện trên server nhưng không hiện ở UI. Nguyên nhân nào nên kiểm tra trước?

A. URI cố định không hỗ trợ bổ sung mục nên phải đổi toàn bộ scheme.

B. Dữ liệu resource hiện tại và chính sách cache của app.

C. Độ dài tối đa câu trả lời của Claude khi gợi ý tài liệu.

D. Đổi danh mục sang URI template có tham số.

## Đáp án và giải thích

1. **A.** A để ứng dụng đọc dữ liệu phục vụ UI mà không cần lượt mô hình. B thêm phụ thuộc suy luận không cần thiết. C không cung cấp danh mục thật. D tải thừa nội dung để giải bài toán danh sách.

2. **B, C.** B nói về tham số hóa địa chỉ; C phân biệt địa chỉ và nội dung. A suy ra tính bất biến không có căn cứ. D định dạng URI không thay thế kiểm tra quyền/đối tượng.

3. **D.** D tôn trọng kiểu nội dung. A xóa thông tin kiểu thay vì sửa adapter. B làm UI phụ thuộc biểu diễn chuỗi. C mất nguồn danh mục đang cần cho autocomplete.

4. **A, C.** A và C phân biệt cách kích hoạt thay vì cấm trùng loại dữ liệu. B đặt quy tắc không có trong bài. D đảo vai trò ứng dụng chủ động đọc resource.

5. **B.** B xét trạng thái nguồn và cache. A nhầm cố định địa chỉ với bất biến nội dung. C luồng UI đọc resource không phụ thuộc câu trả lời mô hình. D danh mục có thể dùng URI cố định.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296699). Bản lưu: `sources/mcp-lessons/296699.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock dùng cùng khái niệm URI cố định, URI có tham số, loại nội dung MIME và cách chuyển dữ liệu sang dạng truyền đi. Địa chỉ cố định không có nghĩa nội dung bất biến. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276799). Bản lưu: `sources/bedrock-lessons/276799.json`.

## Đối chiếu Vertex

Việc đọc URI trực tiếp hoặc có tham số dùng `ReadResourceRequest` và `ReadResourceResult`; `mimeType` cho biết loại dữ liệu. Chọn tài liệu bằng `@` và gợi ý tên là cách giao diện mẫu dùng resource, không bắt buộc mọi ứng dụng có cùng giao diện. Resource phục vụ đọc nhưng server vẫn phải bảo vệ quyền truy cập. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289248). Bản lưu: `sources/vertex-lessons/289248.json`.
