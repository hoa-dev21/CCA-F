# Ai chủ động chọn công cụ, nguồn nội dung và mẫu hướng dẫn?

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296691), sources/mcp-lessons/296691.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP có ba loại thành phần cơ bản, thường gọi là primitives: công cụ (tools), nguồn nội dung (resources) và mẫu hướng dẫn (prompts). Bài phân biệt chúng theo bên chủ động lựa chọn trong cách thiết kế ứng dụng.

| Thành phần | Ai chủ động chọn? | Ví dụ |
| --- | --- | --- |
| Tools | Mô hình chọn công cụ cần dùng để xử lý yêu cầu. | Claude yêu cầu tra cứu đơn hàng khi cần trạng thái mới. |
| Resources | Ứng dụng chọn đọc dữ liệu để hiển thị hoặc đưa vào ngữ cảnh. | Giao diện đọc danh mục tài liệu để gợi ý tên. |
| Prompts | Người dùng chọn mẫu nhiệm vụ muốn thực hiện. | Chọn mẫu “định dạng tài liệu” rồi cung cấp mã tài liệu. |

Đây là cách phân vai, không phải trao quyền không giới hạn cho mô hình. Claude chọn yêu cầu gọi công cụ; ứng dụng và server vẫn kiểm tra quyền, thực hiện thao tác và trả kết quả theo quy định.

Hãy chọn thành phần theo trải nghiệm cần tạo. Nếu giao diện cần danh sách tài liệu ngay khi mở bộ chọn, ứng dụng có thể đọc resource mà không chờ mô hình quyết định gọi công cụ. Nếu người dùng muốn một quy trình có sẵn, prompt trả các tin nhắn hướng dẫn để ứng dụng sử dụng. Nếu cần Claude tự chọn thời điểm thực hiện một chức năng, hãy cung cấp tool có mô tả và đầu vào rõ.

Lấy được mẫu hướng dẫn chưa có nghĩa nhiệm vụ đã hoàn thành. Sau bước lấy mẫu, ứng dụng còn phải gọi mô hình và xử lý các công cụ cần thiết.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** The UI must show a document catalog when a picker opens, before any model question. Which primitive matches this control pattern?

A. A tool the model may invoke in its next turn.

B. A resource the application reads and displays directly.

C. A prompt predicting document names.

D. A tool that executes automatically when listed.

**Question 2 — Choose one.** A user selects a formatting template with `doc_id`. After retrieving the prompt, what completes the task?

A. Report formatting complete because the template was returned.

B. Save the URI template as the new document.

C. Run the model with the prompt, handle tools, and verify the result.

D. List prompts again to confirm execution.

**Question 3 — Choose two.** Tools are described as model-controlled. Which TWO responsibilities remain with application and server code?

A. Check permissions and execution preconditions.

B. Perform authorized actions and return contract-compliant results.

C. Execute every tool when its definition is exposed.

D. Treat model selection as sufficient resource authorization.

**Question 4 — Choose one.** A read-only user sees an update tool in discovery, and the model requests it. What is correct?

A. Execute because discovery proves write permission.

B. Grant temporary writes if the model explains itself.

C. Invoke through a higher-privilege account.

D. Apply current permissions and deny unauthorized execution.

**Question 5 — Choose two.** A design combines user-selected workflows, UI-loaded content, and model-chosen actions. Which TWO statements are correct?

A. Every experience must use only one primitive.

B. Prompts can provide user-selected templates while resources provide application-loaded data.

C. Successful prompt retrieval does not prove tool execution.

D. Resources eliminate the need to return tool results to the model.

## Đáp án và giải thích

1. **B.** B đáp ứng hành vi app-controlled không chờ mô hình. A thêm phụ thuộc quyết định mô hình. C tạo nội dung thay vì lấy danh mục thật. D nhầm khám phá tool với thực thi.

2. **C.** C phân biệt lấy hướng dẫn và thực hiện công việc. A đánh dấu thành công quá sớm. B nhầm tham chiếu mẫu với nội dung kết quả. D lặp khám phá không thực thi tác vụ.

3. **A, B.** A/B giữ ranh giới thực thi. C nhầm liệt kê với yêu cầu gọi. D suy từ chủ động lựa chọn sang quyền truy cập; model-controlled không xóa kiểm soát của host/server.

4. **D.** D phân biệt khả năng nhìn thấy định nghĩa và quyền thực thi. A nhầm discovery với authorization. B tự nới quyền dựa trên lý do mô hình thay vì thẩm quyền của người dùng. C mở rộng quyền trái phạm vi người dùng.

5. **B, C.** B mô tả cách phối hợp các vai trò; C phân biệt chuẩn bị và thực thi. A áp giới hạn không có trong cách phân vai. D dữ liệu resource không thay thế phản hồi cho lời gọi tool cụ thể.

## Đối chiếu MCP trong khóa Bedrock

Cách phân vai giống bài chung: mô hình chọn công cụ, ứng dụng chọn nguồn nội dung, người dùng chọn mẫu hướng dẫn. Mô hình chủ động chọn lời gọi không có nghĩa vượt qua quyền ứng dụng hoặc máy chủ. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276794). Bản lưu: `sources/bedrock-lessons/276794.json`.

## Đối chiếu Vertex

Phân vai model-controlled, app-controlled, user-controlled là hướng thiết kế. Ứng dụng vẫn kiểm tra quyền và có thể chặn lời gọi; cách diễn đạt “Claude kiểm soát hoàn toàn” không xóa trách nhiệm đó. Giao diện minh họa cũng không chứng minh mỗi nút trò chuyện đều tương ứng một MCP server thật. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289205). Bản lưu: `sources/vertex-lessons/289205.json`.

## Đối chiếu qua phụ đề chính thức

Phụ đề tổng kết ba thành phần và chủ thể chủ động lựa chọn. Giao diện chỉ minh họa một cách có thể dùng MCP, không chứng minh mọi nút Claude.ai thực sự gọi MCP. Ứng dụng vẫn thực thi quyền và có thể chặn yêu cầu công cụ. Dùng chung câu hỏi phân biệt ba thành phần.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287790). Bản lưu: `sources/api-media/287790.json`.
