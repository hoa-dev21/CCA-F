# Khám phá và gọi công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287775), sources/api-lessons/287775.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP client là thành phần trao đổi với MCP server. Hai việc cơ bản của client là lấy danh sách công cụ và gửi yêu cầu gọi một công cụ.

Luồng trong bài gồm: ứng dụng lấy định nghĩa công cụ qua client, gửi câu hỏi và các định nghĩa cho Claude, rồi nhận yêu cầu gọi công cụ. Client chuyển tên và đầu vào đến server. Server thực hiện thao tác với dịch vụ phía sau, trả kết quả về ứng dụng. Cuối cùng, ứng dụng gửi dữ liệu đó lại cho Claude để tạo câu trả lời.

Lấy danh sách chỉ giúp biết công cụ nào có sẵn, chưa chạy công cụ. Tương tự, server trả được dữ liệu chưa có nghĩa Claude đã nhận dữ liệu ấy. Ứng dụng vẫn phải đưa kết quả vào lượt hội thoại tiếp theo.

Bài còn nhắc đến các cách truyền thông điệp giữa client và server, gọi là transport. Ở đây cần nắm trách nhiệm của client; khi triển khai, phải kiểm tra cách kết nối phù hợp với phiên bản giao thức đang dùng.

## Tự kiểm tra

**Question 1 — Choose one.** The host connects to an MCP server, but sends Claude an empty tools list. What bridge step is missing?

A. Invoke all tools so the model discovers them.

B. Replace tool definitions with “MCP connected” in the system prompt.

C. Have the server generate the final answer.

D. Discover server tools and expose their definitions to the model.

**Question 2 — Choose two.** Claude requests an MCP tool. Which TWO steps must the host coordinate next?

A. Pass its name and arguments to the client for server invocation.

B. Store the result only in operational logs and stop.

C. Rename the tool according to discovery-list position.

D. Return the server result in Claude's next conversation turn.

**Question 3 — Choose one.** Client logs show correct document data, but the model says no document is available. What should be checked first?

A. The filename length in autocomplete.

B. Install another server.

C. The bridge from client results to the next model request.

D. The server description, because all post-call failures originate there.

**Question 4 — Choose two.** Which TWO client-wrapper behaviors are central to the lesson's MCP flow?

A. Invoke a selected tool by name and arguments.

B. Use a model to reinterpret results before returning them to the host.

C. Merge every host's conversation history.

D. List tools so the host can discover available definitions.

**Question 5 — Choose one.** A server changes a parameter from `document` to `doc_id`, but the host exposes the old schema. What is the durable fix?

A. Improve only the user-facing error wording.

B. Update the tool definition advertised to the model.

C. Treat argument errors as document-not-found results.

D. Let Claude guess the new name after each failure.

## Đáp án và giải thích

1. **D.** D nối khám phá server với khả năng model thấy. A có thể gây tác động không cần; B thiếu hợp đồng từng công cụ; C đổi trách nhiệm hội thoại.

2. **A, D.** A thực thi yêu cầu, D hoàn tất vòng dữ liệu. B model vẫn chưa nhận kết quả; C mất hợp đồng tên và có thể gọi sai công cụ.

3. **C.** C nhắm ranh giới dữ liệu còn thiếu sau khi đã có kết quả. D ít phù hợp bằng chứng thực thi đúng; A không kiểm tra request; B tăng tích hợp không sửa luồng hiện tại.

4. **A, D.** D là khám phá; A là thực thi. B thêm lớp diễn giải không cần cho giao thức; C phá ranh giới hội thoại và không thuộc trách nhiệm client.

5. **B.** B khôi phục hợp đồng giữa ba bên. A không sửa đầu vào; D dùng thử sai thay đồng bộ định nghĩa; C làm sai bản chất lỗi schema thành lỗi dữ liệu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296690). Bản lưu: `sources/mcp-lessons/296690.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock dùng cùng luồng lấy danh sách và gọi công cụ. Các phương thức truyền thông điệp được liệt kê trong khóa thuộc thời điểm giảng; phải kiểm tra khả năng hỗ trợ khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276793). Bản lưu: `sources/bedrock-lessons/276793.json`.

## Đối chiếu Vertex

Luồng là lấy danh sách qua `list_tools`, cho mô hình chọn, gọi `call_tool`, nhận kết quả rồi gửi lại mô hình. Cách truyền qua stdio hoặc HTTP phải theo đặc tả và cách triển khai. Không mặc định WebSocket được nhắc trong lời giảng là phương thức chuẩn có sẵn ở mọi client. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289204). Bản lưu: `sources/vertex-lessons/289204.json`.
