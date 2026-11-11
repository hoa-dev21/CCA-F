# Đóng gói mẫu hướng dẫn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287784), sources/api-lessons/287784.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP prompts là các mẫu hướng dẫn được lưu trên server để dùng lại. Khi client yêu cầu một mẫu và cung cấp tham số, server trả về danh sách tin nhắn (messages) đã điền thông tin cần thiết. Ứng dụng dùng danh sách này để làm việc với mô hình.

Ví dụ: Mẫu chuyển tài liệu sang Markdown nhận `doc_id`, đưa mã tài liệu vào hướng dẫn, nêu cấu trúc cần có và cách dùng công cụ chỉnh sửa. Người dùng không phải tự viết lại toàn bộ quy trình mỗi lần.

Lấy được mẫu mới là lấy được hướng dẫn, chưa phải sửa xong tài liệu. Ứng dụng còn phải gửi hướng dẫn cho Claude và xử lý các thao tác cần thiết.

Dùng Inspector để thử mẫu với tham số cụ thể và xem các tin nhắn được tạo ra. Kiểm tra mã tài liệu, nội dung hướng dẫn và cấu trúc tin nhắn, rồi thử trên dữ liệu thực tế để biết chất lượng kết quả. Mẫu hữu ích cần gắn với nhiệm vụ của server, có mô tả rõ và dùng được các công cụ, tài liệu sẵn có.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Inspector retrieves a conversion prompt with the correct `doc_id`. Has document conversion finished?

A. Yes; successful prompt retrieval executes conversion.

B. No; instructions were generated, but model/tool execution and verification remain.

C. Correct messages prove Markdown quality.

D. Save the prompt messages as the converted document.

**Question 2 — Choose two.** A template accepts `doc_id` but hard-codes one ID in its messages. Which TWO tests expose and prevent this?

A. Call it with at least two IDs and compare messages.

B. Check only that `list_prompts` contains its name.

C. Verify execution affects the requested document.

D. Count messages to infer parameter interpolation.

**Question 3 — Choose one.** A conversion prompt requires `edit_document`, but the server only implements `read_document`. What should happen before release?

A. Keep it because the model can infer edits from reads.

B. Rename the read tool in the prompt.

C. Declare it tested because Inspector returns messages.

D. Align the prompt with actual capabilities, adding a tool if needed.

**Question 4 — Choose two.** Which TWO elements make a reusable prompt more useful than “process this document”?

A. Task-specific output criteria and domain steps.

B. A hard-coded username to reduce parameters.

C. Clear object parameters and use of available resources and tools.

D. The template author's complete conversation history.

**Question 5 — Choose one.** A new formatting criterion is added and Inspector returns valid messages. What evidence is still needed?

A. Longer prompt length than before.

B. Only the prompt name in discovery.

C. Evaluation of the new criterion and regressions on representative documents.

D. Identical roles for every message.

## Đáp án và giải thích

1. **B.** B tách hướng dẫn và thực thi. A suy ra tác động chưa diễn ra. C chỉ kiểm tra tham số, không kiểm tra kết quả. D lưu hướng dẫn không phải chuyển đổi tài liệu.

2. **A, C.** A phát hiện hard-code trong sinh hướng dẫn; C kiểm tra đúng đối tượng đầu-cuối. B chỉ khám phá danh sách. D số messages không phản ánh giá trị định danh.

3. **D.** D xử lý khoảng cách hướng dẫn–năng lực. A/B không tạo chức năng ghi. C nhầm việc lấy mẫu với khả năng hoàn thành nhiệm vụ.

4. **A, C.** A làm rõ chất lượng công việc; C giúp tái dùng đúng đối tượng/năng lực. B làm mẫu kém tổng quát. D đưa ngữ cảnh cá nhân không cần thiết và không thay quy trình rõ ràng.

5. **C.** C kiểm tra hành vi và hồi quy. A độ dài không đo chất lượng. B xác nhận khám phá, không thực thi. D đồng nhất role không phải tiêu chí đúng và có thể phá hợp đồng messages.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296698). Bản lưu: `sources/mcp-lessons/296698.json`.

## Đối chiếu MCP trong khóa Bedrock

Mẫu hướng dẫn trả về tin nhắn sau khi điền tham số. Đường dẫn nhập thành phần thư viện trong mã cần đối chiếu với phiên bản đang dùng. Tạo đúng mẫu chưa chứng minh thao tác sửa tài liệu đã chạy. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276801). Bản lưu: `sources/bedrock-lessons/276801.json`.

## Đối chiếu Vertex

Decorator đăng ký prompt trả danh sách tin nhắn với tham số `doc_id`. Mẫu dùng lại không tự sửa tài liệu; mô hình và ứng dụng phải thực hiện vòng công cụ theo quyền. Nhận định “đáng tin cậy mọi lần” là lợi ích mong muốn, không phải bảo đảm cho mọi đầu vào. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289249). Bản lưu: `sources/vertex-lessons/289249.json`.
