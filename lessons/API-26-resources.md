# Defining resources — Cung cấp dữ liệu theo URI

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287782), sources/api-lessons/287782.json. Câu hỏi tự biên soạn.

## Tóm tắt

Resources cho client đọc dữ liệu từ MCP server theo URI. Ví dụ của khóa hỗ trợ tính năng nhắc tài liệu bằng `@`: một resource cung cấp danh sách tài liệu để autocomplete; resource template cung cấp nội dung tài liệu cụ thể.

Phân biệt **URI cố định** như `docs://documents` và **URI template** như `docs://documents/{doc_id}`. Cố định là địa chỉ không có tham số, không đồng nghĩa nội dung không bao giờ thay đổi. Template nhận ID để tìm đúng đối tượng.

MIME type mô tả kiểu nội dung, chẳng hạn JSON cho danh sách hoặc plain text cho văn bản. Trong mẫu SDK, giá trị trả về được tuần tự hóa giúp lập trình viên không phải tự biến mọi thứ thành JSON string.

Resources phù hợp công bố nội dung để ứng dụng đọc và chọn đưa vào context. Tools cung cấp giao diện thực thi chức năng. Đừng hiểu thành lệnh cấm mọi tool đọc dữ liệu: chính khóa này có tool đọc tài liệu. Cần chọn giao diện theo cách client hoặc mô hình sẽ sử dụng.

## Câu hỏi

**1. Chọn một.** Giao diện cần danh mục tài liệu để autocomplete trước khi gửi câu hỏi cho Claude. Thiết kế phù hợp?

A. Resource trả danh mục mà ứng dụng đọc được.

B. Chờ Claude tự bịa tên tài liệu.

C. Dùng tool sửa tài liệu để liệt kê.

D. Chỉ mô tả danh mục trong tên model.

**2. Chọn một.** Cần đọc nội dung theo `doc_id`. Cách thiết kế trong bài?

A. Một URI khác không liên quan tài liệu.

B. URI template có tham số `doc_id`.

C. Chỉ trả danh sách tên, không có cách đọc.

D. Dùng điểm eval làm ID.

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

Đã đọc và đối chiếu [Defining resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296699) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296699.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Defining resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276799), sources/bedrock-lessons/276799.json và đối chiếu với bài chung. Cùng resource URI cố định/template, MIME và serialization. URI cố định không đồng nghĩa dữ liệu bất biến. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Defining resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289248), sources/vertex-lessons/289248.json. Direct URI và URI template dùng ReadResourceRequest/Result; mimeType mô tả dữ liệu. @document/autocomplete là cách client dùng resource, không bắt buộc mọi host có cùng UI. Resource read-only theo mục đích, server vẫn phải bảo vệ quyền truy cập. Dùng chung câu hỏi khái niệm.
