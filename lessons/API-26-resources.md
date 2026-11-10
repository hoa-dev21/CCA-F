# Cung cấp dữ liệu theo URI

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287782), sources/api-lessons/287782.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Resource là nguồn nội dung mà MCP server cung cấp để ứng dụng đọc. Mỗi resource có một địa chỉ gọi là URI. Ứng dụng chọn nội dung cần dùng rồi đưa vào ngữ cảnh cho Claude.

Ví dụ của bài hỗ trợ chọn tài liệu bằng ký hiệu `@`. Một resource trả danh sách để giao diện gợi ý tên khi người dùng gõ; một mẫu địa chỉ khác cho phép đọc từng tài liệu.

URI cố định như `docs://documents` không có tham số. URI có tham số như `docs://documents/{doc_id}` cho phép thay `doc_id` bằng mã tài liệu cần lấy. “Cố định” nói về địa chỉ, không có nghĩa nội dung không bao giờ thay đổi.

MIME type cho biết loại nội dung, chẳng hạn JSON cho danh sách hoặc văn bản thuần cho tài liệu. Trong mẫu thư viện, giá trị trả về được chuyển sang dạng truyền đi phù hợp, nên không phải tự biến mọi giá trị thành chuỗi JSON.

Resources công bố nội dung để ứng dụng đọc; tools cung cấp thao tác có thể gọi. Đây không phải quy tắc cấm công cụ đọc dữ liệu: bài trước đã có công cụ đọc tài liệu. Hãy chọn theo cách ứng dụng hoặc mô hình sẽ chủ động lấy thông tin.

## Câu hỏi

**1. Chọn một.** Giao diện cần danh mục tài liệu để autocomplete trước khi gửi câu hỏi cho Claude. Thiết kế phù hợp?

A. Resource trả danh mục mà ứng dụng đọc được.

B. Chờ Claude tự bịa tên tài liệu.

C. Dùng công cụ sửa tài liệu để liệt kê.

D. Chỉ mô tả danh mục trong tên mô hình.

**2. Chọn một.** Cần đọc nội dung theo `doc_id`. Cách thiết kế trong bài?

A. Một URI khác không liên quan tài liệu.

B. URI template có tham số `doc_id`.

C. Chỉ trả danh sách tên, không có cách đọc.

D. Dùng điểm phép đánh giá làm ID.

**3. Chọn một.** URI resource cố định có nghĩa gì?

A. Nội dung không thể thay đổi.

B. Không bao giờ cần server.

C. Địa chỉ không có tham số, nội dung vẫn có thể được cập nhật.

D. Chỉ dùng cho ảnh.

## Đáp án

1. **A.** B không dựa vào danh mục thật; C sai mục đích; D không tạo giao diện đọc.
2. **B.** A và D sai định danh; C chưa đáp ứng đọc nội dung.
3. **C.** A nhầm địa chỉ với nội dung; B bỏ nơi cung cấp; D giới hạn sai kiểu dữ liệu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296699). Bản lưu: `sources/mcp-lessons/296699.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock dùng cùng khái niệm URI cố định, URI có tham số, loại nội dung MIME và cách chuyển dữ liệu sang dạng truyền đi. Địa chỉ cố định không có nghĩa nội dung bất biến. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276799). Bản lưu: `sources/bedrock-lessons/276799.json`.

## Đối chiếu Vertex

Việc đọc URI trực tiếp hoặc có tham số dùng `ReadResourceRequest` và `ReadResourceResult`; `mimeType` cho biết loại dữ liệu. Chọn tài liệu bằng `@` và gợi ý tên là cách giao diện mẫu dùng resource, không bắt buộc mọi ứng dụng có cùng giao diện. Resource phục vụ đọc nhưng server vẫn phải bảo vệ quyền truy cập. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289248). Bản lưu: `sources/vertex-lessons/289248.json`.
