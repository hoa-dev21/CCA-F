# Đưa tài liệu vào ngữ cảnh

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287783), sources/api-lessons/287783.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Ứng dụng có thể đọc tài liệu trước khi gửi câu hỏi cho Claude. Ví dụ: người dùng chọn `@report.pdf`, client đọc resource tương ứng từ MCP server, rồi ứng dụng đưa nội dung vào prompt. Claude có sẵn dữ liệu mà không cần thêm một lượt gọi công cụ chỉ để lấy tài liệu đã chọn.

Client gửi yêu cầu đọc và xử lý phản hồi. MIME type cho biết loại nội dung để chọn cách xử lý: với `application/json`, mẫu client phân tích chuỗi JSON thành cấu trúc dữ liệu; với văn bản thuần, giữ nội dung dạng chuỗi.

Ứng dụng quyết định tài liệu nào được đưa vào câu hỏi và trình bày ra sao. Client đảm nhiệm giao tiếp, không bắt buộc tự quyết định mọi tài liệu thay người dùng.

Mẫu của khóa chỉ lấy phần tử đầu tiên trong `contents`. Không nên suy ra rằng mọi resource chỉ có một phần nội dung. Khi triển khai, cần xử lý đầy đủ các phần mà loại resource đó có thể trả về.

## Câu hỏi

**1. Chọn một.** Người dùng đã chọn tài liệu cụ thể. Ứng dụng muốn tránh vòng gọi công cụ lấy tài liệu sau đó. Thiết kế phù hợp bài?

A. Chỉ gửi tên file và yêu cầu đoán.

B. Đọc resource rồi đưa nội dung vào prompt ban đầu.

C. Xóa lựa chọn người dùng.

D. Chỉ đổi system prompt.

**2. Chọn một.** Resource text có MIME `application/json`. Mẫu client làm gì?

A. Coi mọi JSON là mã cần thực thi.

B. Xóa nội dung vì không phải plain text.

C. Parse JSON theo kiểu nội dung.

D. Gắn nội dung vào tên công cụ.

**3. Chọn một.** Phân công nào đúng?

A. Client giao tiếp server; ứng dụng quyết định cách dùng dữ liệu trong prompt.

B. Client bắt buộc tự chọn mọi tài liệu thay người dùng.

C. Server tự tạo mọi hội thoại cuối cùng.

D. MIME type thay thế nội dung resource.

## Đáp án

1. **B.** A thiếu dữ liệu; C bỏ yêu cầu; D không đưa tài liệu vào ngữ cảnh.
2. **C.** A nhầm dữ liệu với mã; B làm mất dữ liệu; D sai vị trí sử dụng.
3. **A.** B và C gán trách nhiệm không có trong mẫu; D nhầm thông tin mô tả với dữ liệu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296695). Bản lưu: `sources/mcp-lessons/296695.json`.

## Đối chiếu MCP trong khóa Bedrock

Client gọi `read_resource`, đọc dữ liệu theo loại MIME, rồi ứng dụng đưa nội dung vào ngữ cảnh. Giảm một lượt mô hình chọn công cụ không có nghĩa bỏ được yêu cầu giữa client và server để lấy tài liệu. Dùng chung câu hỏi.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276797). Bản lưu: `sources/bedrock-lessons/276797.json`.

## Đối chiếu Vertex

`read_resource` vẫn gửi yêu cầu giữa client và server; ứng dụng nhận nội dung rồi đưa vào prompt. Mẫu chỉ đọc `contents[0]`. Client thực tế cần xử lý đúng số phần nội dung, văn bản hoặc dữ liệu nhị phân (blob), loại MIME và các kiểm tra phù hợp. Dùng chung câu hỏi.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289247). Bản lưu: `sources/vertex-lessons/289247.json`.
