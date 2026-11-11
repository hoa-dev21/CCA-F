# Chuẩn hóa lớp tích hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287780), sources/api-lessons/287780.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP (Model Context Protocol) là giao thức giúp ứng dụng AI kết nối với công cụ và dữ liệu theo một cách thống nhất. Phần tích hợp với dịch vụ được đóng gói trong MCP server để nhiều ứng dụng có thể sử dụng lại.

Có ba vai trò cần phân biệt: ứng dụng của bạn quản lý hội thoại với Claude; MCP client là thành phần giao tiếp với server; MCP server cung cấp công cụ hoặc dữ liệu và kết nối với dịch vụ phía sau. Server có thể do nhà cung cấp dịch vụ hoặc nhóm phát triển khác xây dựng.

Ví dụ: Hai ứng dụng đều cần tra cứu yêu cầu hỗ trợ khách hàng. Thay vì sao chép mã tích hợp vào từng ứng dụng, cả hai có thể dùng client kết nối tới server có khả năng này.

MCP và cơ chế dùng công cụ (tool use) bổ sung cho nhau. Tool use là quá trình Claude yêu cầu thao tác và nhận kết quả; MCP chuẩn hóa cách ứng dụng tìm và gọi công cụ đó. Không phải công cụ nào cũng cần MCP. Ngược lại, chỉ có MCP server chưa đủ để tự điều hành hội thoại hay bảo đảm Claude ra quyết định đúng.

## Tự kiểm tra

**Question 1 — Choose one.** Two applications duplicate integration code for the same ticket system. Which architecture promotes reuse while preserving separate conversations?

A. Embed both implementations in system prompts.

B. Use a shared MCP server with separate clients and contexts per application.

C. Omit clients and put the server address in the prompt.

D. Store both conversation histories in the ticket server.

**Question 2 — Choose two.** Which TWO statements correct the claim that MCP replaces all tool use?

A. Every local tool must become an MCP tool to work.

B. Installing an MCP server makes it manage the whole conversation.

C. MCP standardizes discovery and invocation of server capabilities.

D. Tool use represents model requests for actions followed by returned results.

**Question 3 — Choose one.** A vendor supplies an MCP server for tickets. What must the application still connect or implement?

A. A client that invokes the server and a host that returns results to the model.

B. A copy of the ticket database in model weights.

C. A server name in the system prompt instead of a client.

D. A server mechanism to read every open conversation automatically.

**Question 4 — Choose two.** The server reads tickets successfully, but the chatbot cannot answer. Which TWO boundaries should be checked?

A. Whether the description lets the model infer unseen ticket content.

B. Whether the application puts results into model context.

C. Whether more reasoning budget can restore untransmitted data.

D. Whether the client receives and returns data correctly to the host.

**Question 5 — Choose one.** A utility needs one existing local function with no shared integration requirement. Which design is appropriate?

A. Tool use is impossible without a resource URI.

B. An MCP server is mandatory.

C. Convert the function into a prompt so the model executes its code.

D. Use a direct client tool and add MCP when its benefits are needed.

## Đáp án và giải thích

1. **B.** B tái sử dụng tầng tích hợp và giữ trách nhiệm host. D trộn trạng thái không cần thiết; C thiếu thành phần giao tiếp; A mã trong prompt không thay kết nối thực thi.

2. **C, D.** D và C mô tả hai vai trò bổ sung. B gán nhiệm vụ điều phối host cho server; A suy rộng giao thức thành yêu cầu bắt buộc cho mọi công cụ.

3. **A.** A nối dữ liệu vào hội thoại. B không phải mô hình hoạt động của MCP; C tên không tạo kết nối; D không cần và làm sai phân tách trách nhiệm.

4. **B, D.** D kiểm tra đường dữ liệu server–host; B kiểm tra host–model. A mô tả khả năng không thay dữ liệu của ticket cụ thể; C tăng ngân sách suy luận không đưa kết quả chưa truyền vào context.

5. **D.** D chọn cơ chế theo nhu cầu. B áp đặt không có trong bài; A nhầm resource với điều kiện tool use; C template hướng dẫn không chạy hàm.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296689). Bản lưu: `sources/mcp-lessons/296689.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock có cùng cách phân vai client và server để dùng lại tích hợp công cụ. MCP không tự vận hành toàn bộ vòng gọi công cụ và hội thoại. Dùng chung câu hỏi cho các kiến thức tương đương.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276798). Bản lưu: `sources/bedrock-lessons/276798.json`.

## Đối chiếu Vertex

MCP chuẩn hóa việc kết nối và tìm hiểu các khả năng server cung cấp. Nó không đồng nghĩa với toàn bộ cơ chế dùng công cụ, cũng không bảo đảm server đáng tin. Ứng dụng chứa MCP client vẫn chịu trách nhiệm về quyền, công cụ cung cấp cho mô hình và xử lý kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289201). Bản lưu: `sources/vertex-lessons/289201.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đọc phụ đề, bài mở đầu giới thiệu MCP, client, server và ba thành phần tools, resources, prompts. Mẫu thực hành cần Python, môi trường chạy cục bộ và UV. Có UV chưa chứng minh kết nối hoặc công cụ đã chạy được. Ba thành phần được củng cố ở MCP-01; dùng chung câu hỏi liên quan.

Nguồn đối chiếu: [Welcome to the course](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/303756). Bản lưu: `sources/mcp-media/303756.json`.
