# Đưa tài liệu vào ngữ cảnh

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287783), sources/api-lessons/287783.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Ứng dụng có thể đọc tài liệu trước khi gửi câu hỏi cho Claude. Ví dụ: người dùng chọn `@report.pdf`, client đọc resource tương ứng từ MCP server, rồi ứng dụng đưa nội dung vào prompt. Claude có sẵn dữ liệu mà không cần thêm một lượt gọi công cụ chỉ để lấy tài liệu đã chọn.

Client gửi yêu cầu đọc và xử lý phản hồi. MIME type cho biết loại nội dung để chọn cách xử lý: với `application/json`, mẫu client phân tích chuỗi JSON thành cấu trúc dữ liệu; với văn bản thuần, giữ nội dung dạng chuỗi.

Ứng dụng quyết định tài liệu nào được đưa vào câu hỏi và trình bày ra sao. Client đảm nhiệm giao tiếp, không bắt buộc tự quyết định mọi tài liệu thay người dùng.

Mẫu của khóa chỉ lấy phần tử đầu tiên trong `contents`. Không nên suy ra rằng mọi resource chỉ có một phần nội dung. Khi triển khai, cần xử lý đầy đủ các phần mà loại resource đó có thể trả về.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Người dùng đã chọn chính xác report-42 trước khi gửi câu hỏi. Nhóm muốn giảm một vòng tool chỉ để lấy tài liệu đó. Thiết kế nào phù hợp?

A. Đọc resource đã chọn, xử lý nội dung rồi đưa vào yêu cầu ban đầu.

B. Đưa chỉ tên report-42 vào prompt và giả định mô hình đã biết nội dung.

C. Gọi mô hình để chọn lại tài liệu dù người dùng đã chọn.

D. Tải mọi report để tránh phải truyền định danh cụ thể.

**Câu 2 — Chọn hai.** Resource trả ba phần contents: metadata JSON và hai đoạn văn bản. Mẫu client chỉ đọc contents[0]. Hai thay đổi nào cần cho triển khai này?

A. Xử lý đầy đủ các phần cần theo hợp đồng resource.

B. Giữ phần đầu vì MCP luôn đặt nội dung nghiệp vụ đầy đủ ở đó.

C. Dùng MIME của từng phần để chọn parser/biểu diễn tương ứng.

D. Ép cả ba phần qua JSON.parse bất kể loại nội dung.

**Câu 3 — Chọn một.** Client nhận application/json nhưng parse thất bại do payload lỗi. UI vẫn đưa chuỗi đó vào prompt như thể là danh mục hợp lệ. Cách xử lý tốt hơn?

A. Đổi MIME thành text/plain ngay ở client rồi tiếp tục.

B. Để Claude sửa rồi coi dữ liệu hợp lệ.

C. Báo lỗi resource và phục hồi theo hợp đồng.

D. Lấy mọi từ giữa dấu ngoặc kép làm tên tài liệu.

**Câu 4 — Chọn hai.** Một client thư viện đang tự đọc toàn bộ tài liệu server và đưa vào mọi câu hỏi. Người dùng chỉ chọn một tài liệu. Hai trách nhiệm nên tách ra là gì?

A. Client giao tiếp server và trả dữ liệu theo giao thức.

B. Client luôn quyết định phạm vi nội dung thay cho ứng dụng.

C. Ứng dụng chọn dữ liệu liên quan và cách đưa vào prompt.

D. Mô hình tự loại mọi tài liệu ngoài ý muốn sau khi đã nhận chúng.

**Câu 5 — Chọn một.** Hai người dùng chọn cùng tên report.pdf nhưng có định danh và quyền khác nhau. Adapter cache chỉ theo tên hiển thị. Sửa nào giữ đúng tài liệu được chọn?

A. Dùng độ dài file để phân biệt các bản có cùng tên.

B. Nối tên file với câu hỏi tự nhiên làm cache key.

C. Trả bản tải gần nhất vì cả hai cùng tên.

D. Dùng định danh resource cùng phạm vi truy cập.

## Đáp án và giải thích

1. **A.** A đưa bằng chứng vào context trước suy luận. B nhầm định danh với nội dung. C lặp quyết định đã có. D tải quá phạm vi thay vì dùng lựa chọn rõ ràng.

2. **A, C.** A tránh mất phần văn bản, C tránh parse sai kiểu. B suy rộng hạn chế của mẫu. D văn bản thuần không nhất thiết là JSON hợp lệ.

3. **C.** C không che lỗi giao thức thành dữ liệu hợp lệ. A thay nhãn không sửa nguồn. B suy luận không thay validation. D heuristic có thể tạo danh mục sai từ payload hỏng.

4. **A, C.** A là giao tiếp; C là chính sách sử dụng/ngữ cảnh. B làm lớp giao tiếp tự áp chính sách phạm vi. D chuyển trách nhiệm lọc sang mô hình sau khi dữ liệu đã được đưa vào.

5. **D.** D giữ quan hệ lựa chọn–đối tượng–phạm vi. A không duy nhất. B câu hỏi không xác định quyền. C có thể trả nhầm dữ liệu của người khác.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296695). Bản lưu: `sources/mcp-lessons/296695.json`.

## Đối chiếu MCP trong khóa Bedrock

Client gọi `read_resource`, đọc dữ liệu theo loại MIME, rồi ứng dụng đưa nội dung vào ngữ cảnh. Giảm một lượt mô hình chọn công cụ không có nghĩa bỏ được yêu cầu giữa client và server để lấy tài liệu. Dùng chung câu hỏi.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276797). Bản lưu: `sources/bedrock-lessons/276797.json`.

## Đối chiếu Vertex

`read_resource` vẫn gửi yêu cầu giữa client và server; ứng dụng nhận nội dung rồi đưa vào prompt. Mẫu chỉ đọc `contents[0]`. Client thực tế cần xử lý đúng số phần nội dung, văn bản hoặc dữ liệu nhị phân (blob), loại MIME và các kiểm tra phù hợp. Dùng chung câu hỏi.

Nguồn đối chiếu: [Accessing resources](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289247). Bản lưu: `sources/vertex-lessons/289247.json`.
