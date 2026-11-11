# Giữ đầy đủ cấu trúc phản hồi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287757), sources/api-lessons/287757.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Phản hồi của Claude có thể gồm nhiều khối nội dung, gọi là block, thay vì chỉ một chuỗi văn bản. Trường `content` chứa danh sách các khối này. Trong bài, hai loại cần phân biệt là `text` để chứa lời trả lời và `tool_use` để yêu cầu gọi công cụ.

Khối `tool_use` có mã định danh lần gọi, tên công cụ và đầu vào cần truyền. Ứng dụng dùng các thông tin này để thực hiện thao tác. Một câu như “Tôi sẽ kiểm tra đơn hàng” chỉ là lời diễn đạt, chưa phải yêu cầu gọi công cụ có cấu trúc.

Khi gửi yêu cầu, ứng dụng khai báo các công cụ cho Claude qua danh sách `tools`. Khi nhận phản hồi, cần lưu toàn bộ `response.content` vào tin nhắn có vai trò `assistant`, rồi duyệt từng khối theo trường `type`.

Nếu chỉ lấy `content[0].text`, bạn có thể làm mất các khối yêu cầu công cụ. Cũng không nên mặc định công cụ luôn nằm ở vị trí thứ hai chỉ vì một ví dụ có thứ tự như vậy. Sau khi xử lý yêu cầu công cụ, ứng dụng gửi kết quả cùng lịch sử cần thiết để Claude tiếp tục.

## Tự kiểm tra

**Question 1 — Choose one.** A response contains text, two `tool_use` blocks, and more text. The UI stores only `content[0].text` in history. What is the main architectural consequence?

A. Only presentation is lost; the connection preserves tool requests.

B. Both tools execute because they were declared.

C. There is no problem if the first text promises a lookup.

D. Tool requests and information needed to link later results are lost.

**Question 2 — Choose two.** Which TWO steps support mixed response blocks without assuming their order?

A. Store complete `response.content` in the assistant message.

B. Read only the second block because tools usually follow explanations.

C. Iterate blocks and dispatch by each block's `type`.

D. Flatten everything into a string and search for “tool.”

**Question 3 — Choose one.** The model says “I will check the order” but returns no `tool_use`. What should the router do?

A. Invent a tool request ID.

B. Mark the tool successful because intent was stated.

C. Execute only appropriately structured tool calls, not prose promises.

D. Extract an order ID and invoke a similarly named tool.

**Question 4 — Choose two.** Which TWO relationships must be preserved for a `tool_use` block containing `id`, `name`, and `input`?

A. The ID links a later result to the correct invocation.

B. Array position replaces the ID for parallel tools.

C. Adjacent text always overrides input when easier to read.

D. The name and input identify the function and arguments to execute.

**Question 5 — Choose one.** The UI needs a string, while the tool loop needs the same response. Which design is appropriate?

A. Delete tool blocks after rendering and reuse the modified object.

B. Reconstruct IDs and inputs from the UI summary.

C. Replace content with text immediately.

D. Retain the full response for orchestration and extract text separately for display.

## Đáp án và giải thích

1. **D.** D mất dữ liệu điều phối, không chỉ hiển thị. A giả định trạng thái tự lưu; B khai báo không thực thi; C lời diễn đạt không thay khối có cấu trúc.

2. **A, C.** A bảo toàn lịch sử; C xử lý theo hợp đồng. B giả định vị trí cố định; D mất cấu trúc và dễ nhầm văn bản với yêu cầu thực thi.

3. **C.** C giữ ranh giới diễn đạt và điều khiển. D thêm hành động không được biểu diễn trong luồng; A bịa yêu cầu; B nhầm ý định với kết quả thực thi.

4. **A, D.** D giữ hợp đồng thực thi; A giữ tương quan yêu cầu–kết quả. B không bền khi thứ tự hoàn thành đổi; C bỏ dữ liệu có cấu trúc để suy diễn từ lời nói.

5. **D.** D tách biểu diễn khỏi dữ liệu giao thức. C và A phá dữ liệu cần xử lý; B suy diễn lại thông tin đã có chính xác và dễ làm sai ID.

## Đối chiếu Bedrock: Handling tool use responses

Converse dùng `toolUse` với các trường `toolUseId`, `name`, `input` và có `stopReason` trong phản hồi. Giữ mọi khối nội dung, không giả định khối đầu luôn là văn bản. Cách chọn `auto`, `any` hoặc công cụ theo tên qua `toolChoice` phải theo giao diện nhà cung cấp. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276764). Bản lưu: `sources/bedrock-lessons/276764.json`.

## Đối chiếu Vertex

Giữ toàn bộ nội dung phản hồi của trợ lý, gồm `text`, `tool_use` và các trường ID, tên, đầu vào. Không giả định chỉ có một khối văn bản hoặc `tool_use` luôn ở vị trí cố định. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Handling message blocks](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289179). Bản lưu: `sources/vertex-lessons/289179.json`.
