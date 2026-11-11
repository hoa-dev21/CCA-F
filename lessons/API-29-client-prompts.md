# Khám phá và lấy mẫu có tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287786), sources/api-lessons/287786.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Client dùng `list_prompts()` để lấy danh sách mẫu hướng dẫn trên MCP server, và `get_prompt(name, args)` để lấy các tin nhắn của một mẫu sau khi điền tham số.

Trong giao diện dòng lệnh của bài, người dùng chọn mẫu bằng lệnh bắt đầu với dấu gạch chéo, còn gọi là slash command, rồi cung cấp thông tin như mã tài liệu. Client lấy mẫu, ứng dụng gửi các tin nhắn cho Claude, sau đó xử lý những yêu cầu công cụ cần thiết.

Tên và giá trị tham số phải đúng với định nghĩa phía server. Ví dụ: mẫu yêu cầu `doc_id` nhưng client gửi một tên trường khác thì có thể không lấy được mẫu. Nếu gửi nhầm mã tài liệu, hướng dẫn có thể nhắm sai đối tượng.

Cần phân biệt ba mốc: biết có những mẫu nào, lấy được hướng dẫn đã điền tham số và thực hiện xong nhiệm vụ. Việc lấy mẫu thành công chưa chứng minh tài liệu đã được chỉnh sửa.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** `/format` appears in the UI, but execution lacks `doc_id` because the client sends `document`. What is the direct fix?

A. Change the displayed command label.

B. Remove document selection from the prompt.

C. Map arguments according to the `get_prompt` contract.

D. Put the value in the system prompt while retaining incorrect arguments.

**Question 2 — Choose two.** Which TWO operations support showing a prompt menu and retrieving the selected template before model execution?

A. Use `list_prompts` to discover descriptions and parameters.

B. Use `call_tool` with the prompt name to retrieve and execute it.

C. Use `get_prompt` with its name and arguments to obtain populated messages.

D. Declare business completion when the menu appears.

**Question 3 — Choose one.** `get_prompt` returns correct messages, but logs end there and the document stays unchanged. What is missing?

A. Increase its timeout so the server edits the document.

B. Execute the messages through the model/tool loop and verify the result.

C. Replace the accepted document ID with a full path.

D. Use discovery to confirm completion.

**Question 4 — Choose two.** The user selects document A, but cached arguments still identify B. Which TWO controls prevent editing the wrong document?

A. Bind arguments to the current selection before retrieval.

B. Infer the document from the slash-command name.

C. Check the identifier in generated messages and the actual execution target.

D. Check only successful HTTP status.

**Question 5 — Choose one.** A server adds a required prompt parameter, while the client caches old discovery data. What should happen on a missing-parameter error?

A. Fill every new parameter with an empty string.

B. Retry unchanged because discovery once succeeded.

C. Delete the requirement from retrieved messages.

D. Refresh the definition and collect all required arguments under the new contract.

## Đáp án và giải thích

1. **C.** C sửa hợp đồng lời gọi. A chỉ thay UI. B né yêu cầu cần thiết. D dữ liệu trong prompt khác không sửa tham số thiếu của get_prompt.

2. **A, C.** A khám phá, C lấy mẫu cụ thể. B nhầm primitive prompt với tool. D menu chỉ chứng minh bước khám phá, chưa có tác động nghiệp vụ.

3. **B.** B thực thi hướng dẫn đã lấy. A giả định get_prompt thực hiện tác vụ. C không giải quyết thiếu vòng thực thi. D danh mục không có vai trò xác nhận kết quả sửa tài liệu.

4. **A, C.** A tránh dữ liệu stale, C kiểm tra xuyên các tầng. B tên hành động không chỉ ra đối tượng. D phản hồi thành công vẫn có thể nhắm sai ID hợp lệ.

5. **D.** D xử lý thay đổi hợp đồng. A có thể tạo giá trị không hợp lệ. B giữ nguyên nguyên nhân. C chưa lấy được mẫu và bỏ trường không giải quyết nhu cầu nghiệp vụ.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296692). Bản lưu: `sources/mcp-lessons/296692.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cùng sử dụng `list_prompts`, `get_prompt` và tham số `doc_id`. Phân biệt danh sách mẫu, tin nhắn đã điền tham số và kết quả thực thi. Các bước này không thay nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276795). Bản lưu: `sources/bedrock-lessons/276795.json`.

## Đối chiếu Vertex

`list_prompts` lấy danh sách; `get_prompt` gửi tham số để server tạo tin nhắn. Client có thể hiển thị lệnh bắt đầu bằng dấu gạch chéo nếu hỗ trợ, nhưng không phải mọi client đều có giao diện này. Khám phá mẫu khác với chạy nhiệm vụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289209). Bản lưu: `sources/vertex-lessons/289209.json`.
