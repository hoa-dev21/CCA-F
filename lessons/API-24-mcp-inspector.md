# Kiểm tra MCP server độc lập

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287781), sources/api-lessons/287781.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP Inspector giúp thử MCP server trực tiếp, trước khi tích hợp toàn bộ ứng dụng với Claude. Bạn có thể xem danh sách công cụ, chọn công cụ, nhập đầu vào và xem kết quả.

Ví dụ: Chatbot không đọc được tài liệu. Hãy thử gọi công cụ đọc với một mã tài liệu đã biết trong Inspector. Nếu công cụ vẫn lỗi, cần xem server hoặc dữ liệu. Nếu công cụ chạy đúng nhưng chatbot không gọi nó, cần kiểm tra cách ứng dụng cung cấp định nghĩa công cụ và xử lý yêu cầu của Claude.

Với thao tác sửa tài liệu, thông báo “success” chưa đủ để biết nội dung đã đúng. Hãy dùng công cụ đọc lại tài liệu và đối chiếu với thay đổi mong muốn. Quy trình phát triển gồm sửa mã, thử thao tác, xem trạng thái thực tế và tìm nguyên nhân lỗi.

Giao diện và lệnh khởi chạy Inspector có thể thay đổi theo phiên bản. Điều chính cần học là thử riêng từng phần của hệ thống và kiểm tra kết quả sau thao tác.

## Tự kiểm tra

**Question 1 — Choose one.** A chatbot cannot read documents. Which test isolates the MCP server from the host?

A. Call the read tool directly in Inspector using a valid ID.

B. Expose more tools to the model.

C. Change the system prompt and rerun the entire flow.

D. Replace the model before inspecting tools.

**Question 2 — Choose two.** Inspector returns success after an edit. Which TWO checks provide stronger correctness evidence?

A. Check only the spelling of “success.”

B. Verify unrelated content remains unchanged.

C. Treat discovery-list presence as sufficient for every input.

D. Read back the document and compare the intended change.

**Question 3 — Choose one.** Inspector reads a document correctly, but the chatbot emits no `tool_use`. What should be investigated first?

A. Change stored IDs until the model calls a tool.

B. The host's advertised tools and response handling.

C. Rewrite the document backend immediately.

D. Add server retries although no request reaches it.

**Question 4 — Choose two.** Which TWO independent-server tests reveal the editing contract?

A. A valid ID and matching text for the success path.

B. Only the server's displayed name.

C. Repeated `list_tools` calls only.

D. An invalid ID or unmatched text for error behavior.

**Question 5 — Choose one.** Inspector fails for an ID the application previously read. What is better than immediately editing the prompt?

A. Convert the failure into an empty document and claim success.

B. Use direct calls to isolate data, permissions, or server logic.

C. Add prompt examples because every tool error originates in the model.

D. Force the model to say the document was read.

## Đáp án và giải thích

1. **A.** A bỏ các tầng hội thoại để thử server. C và D thay nhiều thành phần nhưng chưa cô lập; B thêm khả năng không xác định nguyên nhân.

2. **B, D.** D kiểm tra tác động yêu cầu; B kiểm tra tác động ngoài ý muốn. A chỉ đo thông báo; C nhầm khám phá với độ đúng thực thi.

3. **B.** B nhắm tầng lựa chọn/điều phối chưa hoạt động. C trái bằng chứng server đọc được; A thay dữ liệu không sửa công bố công cụ; D retry không chạy khi chưa có lời gọi.

4. **A, D.** A kiểm tra thực thi, D kiểm tra lỗi có thể xử lý. C và B chỉ đo kết nối/khám phá, không đo hành vi đọc sửa.

5. **B.** B bám bằng chứng lỗi xuất hiện cả khi bỏ model. C không phù hợp tầng đã cô lập; D và A che sự cố thay vì khắc phục.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296693). Bản lưu: `sources/mcp-lessons/296693.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cũng thử riêng công cụ rồi đọc lại tài liệu để xác minh thay đổi. Cổng và giao diện Inspector có thể đổi theo phiên bản; điều cần học là phương pháp kiểm tra. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276796). Bản lưu: `sources/bedrock-lessons/276796.json`.

## Đối chiếu Vertex

Inspector giúp kiểm tra danh sách công cụ, tham số, thực thi và đọc lại kết quả sửa. Thử trực tiếp thành công chưa chứng minh mô hình sẽ chọn đúng công cụ. Cần kiểm tra cả luồng từ đầu đến cuối, gồm lỗi và đầu vào không hợp lệ; giao diện và cổng tùy phiên bản. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289207). Bản lưu: `sources/vertex-lessons/289207.json`.
