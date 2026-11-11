# Quản lý session và giao diện gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287793), sources/api-lessons/287793.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học tách hai thành phần: client session là đối tượng của thư viện MCP quản lý kết nối tới server; lớp tiện ích do ứng dụng viết cung cấp cách gọi dễ dùng và quản lý việc mở, đóng kết nối.

Hai phương thức chính là `list_tools()` để lấy định nghĩa công cụ và `call_tool(name, input)` để gửi tên cùng đầu vào của công cụ được chọn. Ứng dụng đưa danh sách công cụ cho Claude, chuyển yêu cầu gọi tới client, rồi gửi kết quả trở lại mô hình.

Kiểm tra `list_tools()` trả đúng danh sách mới xác nhận bước khám phá công cụ, chưa kiểm tra toàn bộ luồng gọi và trả kết quả.

Mẫu Python dùng trình quản lý ngữ cảnh bất đồng bộ (async context manager) để quản lý vòng đời kết nối và dọn tài nguyên khi kết thúc. Cần hiểu ai chịu trách nhiệm đóng kết nối, tránh để phiên không còn dùng tiếp tục chiếm tài nguyên.

Khóa học xây cả client lẫn server để minh họa. Nếu đã có server phù hợp từ nhà cung cấp, bạn có thể viết client kết nối tới đó, không cần viết lại cả hai phía.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Discovery returns two tools, but the chatbot gives only their names and logs show no `call_tool`. What is missing?

A. More detailed descriptions.

B. Connect `tool_use` to `call_tool` and return the result to Claude.

C. Run discovery after every token.

D. Replace schemas with tool names in the system prompt.

**Question 2 — Choose two.** A service opens an MCP session per job but leaks sockets on failure. Which TWO changes fix lifecycle management?

A. Assign explicit ownership for opening and closing sessions.

B. Use a context manager or `finally` for cleanup on exceptions.

C. Leave all cleanup timing to garbage collection.

D. Retry jobs in leaked sessions before cleanup.

**Question 3 — Choose one.** A vendor already provides the required MCP tool. How can an internal chatbot reuse it with minimal duplicated code?

A. Rewrite the server in the chatbot repository.

B. Move all chatbot logic to the vendor's server.

C. Integrate a client through discovery, invocation, and result handling.

D. Put the URL in the prompt and let the model connect.

**Question 4 — Choose two.** `list_tools` unit tests pass. Which TWO tests provide important end-to-end evidence?

A. Requested names and inputs reach the selected tool correctly.

B. Add only another snapshot of discovered schemas.

C. Tool results or errors return to Claude's correct conversation turn.

D. Check only HTTP success without inspecting model-bound results.

**Question 5 — Choose one.** Concurrent requests use different sessions, but an adapter assigns results by completion order to submission-order requests. What directly fixes data mixing?

A. Group by tool name and assign to the oldest waiting request.

B. Log session IDs but keep queue-based assignment.

C. Wait for all results and join by arrival order.

D. Preserve request-session-result mappings and return data to the originating context.

## Đáp án và giải thích

1. **B.** B hoàn thiện đường thực thi và trả dữ liệu. A có thể giúp chọn tool nhưng không chạy mã. C lặp bước khám phá. D mô tả tên không tạo được đường thực thi.

2. **A, B.** A tránh trách nhiệm cleanup bị bỏ trống; B bảo đảm đường lỗi cũng dọn tài nguyên. C không tạo thời điểm đóng xác định. D có thể tăng số tài nguyên bị giữ và không sửa vòng đời.

3. **C.** C tái sử dụng năng lực có sẵn và giữ trách nhiệm ứng dụng. A không cần thiết nếu server đáp ứng. B thay đổi ranh giới không được yêu cầu. D chuỗi URL không tạo transport/client.

4. **A, C.** A kiểm tra dispatch và tham số; C kiểm tra đường phản hồi. B vẫn chủ yếu kiểm tra khám phá đã được unit test, chưa chứng minh vòng thực thi. D chỉ xác nhận trao đổi kỹ thuật, không xác nhận dữ liệu/lỗi được nối đúng về mô hình.

5. **D.** D bảo toàn danh tính qua ranh giới bất đồng bộ. A vẫn nhầm khi nhiều yêu cầu cùng tool hoàn tất khác thứ tự. B có thêm thông tin quan sát nhưng chưa dùng nó để định tuyến. C đợi đủ kết quả không làm thứ tự nhận trở thành thứ tự gửi.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296696). Bản lưu: `sources/mcp-lessons/296696.json`.

## Đối chiếu MCP trong khóa Bedrock

Schema công cụ MCP không cùng định dạng với Converse. Mẫu dùng `to_bedrock_tools` trong `core/bedrock.py` để chuyển đổi. Cần kiểm tra phần chuyển đổi thay vì gửi nguyên schema MCP và cho rằng kết nối thành công là đủ. Phiên kết nối vẫn phải được đóng và dọn tài nguyên. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276802). Bản lưu: `sources/bedrock-lessons/276802.json`.

## Đối chiếu Vertex

Lớp hỗ trợ quản lý `ClientSession`, dọn tài nguyên và cung cấp `list_tools`, `call_tool`; ứng dụng nối kết quả với mô hình. Có thể xây cả client và server nếu cần; nhận định “thường xây một phía” chỉ là bối cảnh bài giảng. Chuyển schema và kết quả theo đúng giao diện, không trộn `inputSchema` với `input_schema`. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289206). Bản lưu: `sources/vertex-lessons/289206.json`.
