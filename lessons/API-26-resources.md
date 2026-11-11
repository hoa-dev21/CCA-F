# Cung cấp dữ liệu theo URI

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287782), sources/api-lessons/287782.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Resource là nguồn nội dung mà MCP server cung cấp để ứng dụng đọc. Mỗi resource có một địa chỉ gọi là URI. Ứng dụng chọn nội dung cần dùng rồi đưa vào ngữ cảnh cho Claude.

Ví dụ của bài hỗ trợ chọn tài liệu bằng ký hiệu `@`. Một resource trả danh sách để giao diện gợi ý tên khi người dùng gõ; một mẫu địa chỉ khác cho phép đọc từng tài liệu.

URI cố định như `docs://documents` không có tham số. URI có tham số như `docs://documents/{doc_id}` cho phép thay `doc_id` bằng mã tài liệu cần lấy. “Cố định” nói về địa chỉ, không có nghĩa nội dung không bao giờ thay đổi.

MIME type cho biết loại nội dung, chẳng hạn JSON cho danh sách hoặc văn bản thuần cho tài liệu. Trong mẫu thư viện, giá trị trả về được chuyển sang dạng truyền đi phù hợp, nên không phải tự biến mọi giá trị thành chuỗi JSON.

Resources công bố nội dung để ứng dụng đọc; tools cung cấp thao tác có thể gọi. Đây không phải quy tắc cấm công cụ đọc dữ liệu: bài trước đã có công cụ đọc tài liệu. Hãy chọn theo cách ứng dụng hoặc mô hình sẽ chủ động lấy thông tin.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Document autocomplete must appear on `@`, before any model call. Which design gives the UI control?

A. Expose a catalog resource the application reads directly.

B. Ask Claude to list documents after every keystroke.

C. Provide only a prompt with common document names.

D. Load all documents into the system prompt at startup.

**Question 2 — Choose two.** A server exposes `docs://documents` and `docs://documents/{doc_id}`. Which TWO statements are correct?

A. A fixed catalog URI means its contents never change.

B. The template identifies a specific document through a parameter.

C. Contents at the fixed URI can change as the store changes.

D. The template automatically authorizes every document ID.

**Question 3 — Choose one.** The catalog returns JSON and document details return text. Flattening both into a string breaks the UI. What is the fix?

A. Change all MIME types to `text/plain`.

B. Select documents by character offsets in the string.

C. Remove the catalog and use prompt examples.

D. Parse catalog JSON and preserve text according to each resource contract and MIME type.

**Question 4 — Choose two.** A server has a read tool and adds a resource for UI-selected documents. Which TWO conclusions are appropriate?

A. Both can coexist because different parties initiate their use.

B. Delete the tool because resources exclusively own reads.

C. Choose the primitive according to application or model control and the data contract.

D. A resource is valid only when the model requests every read.

**Question 5 — Choose one.** A cached catalog from a fixed URI omits a newly added document. What should be checked first?

A. Fixed URIs cannot support additions; replace the URI scheme.

B. Current resource data and the application's cache policy.

C. Claude's maximum answer length.

D. Replace the catalog with a parameterized URI template.

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
