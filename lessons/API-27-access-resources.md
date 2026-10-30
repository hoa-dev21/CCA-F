# Accessing resources — Đưa tài liệu vào ngữ cảnh

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287783), sources/api-lessons/287783.json. Câu hỏi tự biên soạn.

## Tóm tắt

Ứng dụng có thể lấy resource trước khi gọi Claude. Khi người dùng chọn `@report.pdf`, client đọc URI tương ứng, nhận dữ liệu rồi ứng dụng chèn nội dung vào prompt. Với luồng này, mô hình không cần thêm một vòng tool call chỉ để lấy tài liệu đã được chọn.

Client thực hiện đọc và phân tích phản hồi. MIME type giúp quyết định cách xử lý: JSON được parse thành cấu trúc dữ liệu; plain text giữ dạng chuỗi. Logic ứng dụng quyết định tài liệu nào được đưa vào context; client chịu trách nhiệm giao tiếp.

Mẫu khóa học lấy phần tử đầu trong `contents`. Không nên suy rộng thành bảo đảm mọi resource thực tế chỉ có một nội dung; khi triển khai cần xử lý hợp đồng phản hồi phù hợp. Phần ôn tập ở đây nhấn mạnh luồng lấy dữ liệu và cách dùng metadata.

## Câu hỏi

**1. Chọn một.** Người dùng đã chọn tài liệu cụ thể. Ứng dụng muốn tránh vòng gọi tool lấy tài liệu sau đó. Thiết kế phù hợp bài?

A. Chỉ gửi tên file và yêu cầu đoán.

B. Đọc resource rồi đưa nội dung vào prompt ban đầu.

C. Xóa lựa chọn người dùng.

D. Chỉ đổi system prompt.

**2. Chọn một.** Resource text có MIME `application/json`. Mẫu client làm gì?

A. Coi mọi JSON là mã cần thực thi.

B. Xóa nội dung vì không phải plain text.

C. Parse JSON theo kiểu nội dung.

D. Gắn nội dung vào tên tool.

**3. Chọn một.** Phân công nào đúng?

A. Client giao tiếp server; ứng dụng quyết định cách dùng dữ liệu trong prompt.

B. Client bắt buộc tự chọn mọi tài liệu thay người dùng.

C. Server tự tạo mọi hội thoại cuối cùng.

D. MIME type thay thế nội dung resource.

## Đáp án

1. **B.** A thiếu dữ liệu; C bỏ yêu cầu; D không đưa tài liệu vào context.
2. **C.** A nhầm dữ liệu với mã; B làm mất dữ liệu; D sai vị trí sử dụng.
3. **A.** B và C gán trách nhiệm không có trong mẫu; D nhầm metadata với dữ liệu.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [Accessing resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296695) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296695.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Accessing resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276797), sources/bedrock-lessons/276797.json và đối chiếu với bài chung. Cùng read_resource và parse theo MIME, ứng dụng đưa dữ liệu vào context. Giảm một vòng model tool call không có nghĩa không còn request client/server để đọc resource. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Accessing resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289247), sources/vertex-lessons/289247.json. read_resource gửi request client/server rồi host chèn nội dung vào prompt, tiết kiệm lượt model chọn tool chứ không loại bỏ request mạng. Mẫu chỉ lấy contents[0]; client thật cần xử lý nhiều contents, text/blob/MIME và validation phù hợp. Dùng chung câu hỏi khái niệm.
