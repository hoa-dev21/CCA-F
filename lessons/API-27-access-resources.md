# Đưa tài liệu vào ngữ cảnh

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287783), sources/api-lessons/287783.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Ứng dụng có thể đọc tài liệu trước khi gửi câu hỏi cho Claude. Ví dụ: người dùng chọn `@report.pdf`, client đọc resource tương ứng từ MCP server, rồi ứng dụng đưa nội dung vào prompt. Claude có sẵn dữ liệu mà không cần thêm một lượt gọi công cụ chỉ để lấy tài liệu đã chọn.

Client gửi yêu cầu đọc và xử lý phản hồi. MIME type cho biết loại nội dung để chọn cách xử lý: với `application/json`, mẫu client phân tích chuỗi JSON thành cấu trúc dữ liệu; với văn bản thuần, giữ nội dung dạng chuỗi.

Ứng dụng quyết định tài liệu nào được đưa vào câu hỏi và trình bày ra sao. Client đảm nhiệm giao tiếp, không bắt buộc tự quyết định mọi tài liệu thay người dùng.

Mẫu của khóa chỉ lấy phần tử đầu tiên trong `contents`. Không nên suy ra rằng mọi resource chỉ có một phần nội dung. Khi triển khai, cần xử lý đầy đủ các phần mà loại resource đó có thể trả về.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A user selects `report-42` before asking a question. How can the application avoid a model tool round trip just to fetch it?

A. Read the selected resource, process it, and include it in the initial request.

B. Send only its name and assume the model knows the contents.

C. Ask the model to select the document again.

D. Download every report.

**Question 2 — Choose two.** A resource returns JSON metadata and two text parts, but the client reads only `contents[0]`. Which TWO changes are needed?

A. Handle all required parts under the resource contract.

B. Keep only the first part because it always contains all business content.

C. Select parsing and representation using each part's MIME type.

D. Apply `JSON.parse` to every part regardless of type.

**Question 3 — Choose one.** A malformed JSON resource fails parsing, but the UI sends it as a valid catalog. What is better?

A. Relabel it `text/plain` and continue.

B. Ask Claude to repair it and assume validity.

C. Report the resource error and recover according to the contract.

D. Treat every quoted fragment as a document name.

**Question 4 — Choose two.** A client loads all server documents into every question although the user selects one. Which TWO responsibilities should be separated?

A. The client handles protocol communication and returns server data.

B. The client always decides relevance instead of the application.

C. The application selects relevant data and how to include it in prompts.

D. The model removes unwanted documents after receiving everything.

**Question 5 — Choose one.** Two users select different authorized resources both named `report.pdf`. A cache keyed only by display name mixes them. What fixes this?

A. Use file length to distinguish them.

B. Combine display name with the natural-language question.

C. Return the most recently fetched document.

D. Key by resource identity and access scope.

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
