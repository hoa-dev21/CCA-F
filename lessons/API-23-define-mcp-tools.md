# Mô tả hàm và tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287797), sources/api-lessons/287797.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học dùng bộ thư viện Python cho MCP để tạo công cụ đọc và sửa tài liệu. Một decorator — phần đánh dấu đặt trên hàm — đăng ký hàm đó thành công cụ. Chú thích kiểu dữ liệu (type hints) và mô tả tham số giúp thư viện tạo bản mô tả đầu vào, giảm việc khai báo lặp.

Cần mô tả rõ công cụ làm gì và từng tham số có nghĩa gì. Ví dụ: `doc_id` xác định tài liệu cần xử lý. Với công cụ thay chuỗi, phải nói rõ chuỗi cũ cần khớp chính xác, kể cả khoảng trắng, để Claude biết cách tạo yêu cầu phù hợp.

Thư viện hỗ trợ giao tiếp theo MCP và kiểm tra tham số. Hàm của bạn vẫn phải thực hiện việc đọc hoặc sửa tài liệu. Một `doc_id` đúng kiểu chuỗi vẫn có thể chỉ tới tài liệu không tồn tại. Mẫu của bài trả lỗi có mô tả trong trường hợp này, thay vì bịa nội dung.

Ví dụ lưu tài liệu trong một dictionary trong bộ nhớ chỉ để minh họa; không nên coi đó là thiết kế lưu trữ hoàn chỉnh cho ứng dụng thực tế.

## Tự kiểm tra

**Question 1 — Choose one.** A decorator registers a function and generates the right schema, but the function only returns “success.” Which test disproves completion?

A. Edit a document and read it back to verify its state.

B. Check schema JSON brackets.

C. Confirm the tool name is listed.

D. Confirm `doc_id` is annotated as a string.

**Question 2 — Choose two.** Replacement requires `old_text` to match whitespace exactly. Which TWO design choices reduce incorrect or blind edits?

A. Return meaningful missing-document or missing-text errors.

B. Describe exact matching in the `old_text` parameter.

C. Report success when nothing changes.

D. Strip whitespace despite the exact-match contract.

**Question 3 — Choose one.** `doc_id` is a valid string but identifies no document. What should happen?

A. Select the first document because schema validation passed.

B. Return empty success because the type is valid.

C. Check the store and return a descriptive missing-document error.

D. Create an empty document although the tool is edit-only.

**Question 4 — Choose two.** Which TWO actions reduce duplicate schema declarations while preserving reviewability?

A. Generate schemas from type hints and descriptions.

B. Treat generated schemas as proof of edit authorization.

C. Remove errors because types prevent all invalid inputs.

D. Compare generated schemas with actual function logic and limits.

**Question 5 — Choose one.** The model swaps `old_text` and `new_text`, both strings. What is the direct improvement?

A. Try both replacement directions and use whichever matches.

B. Add an unrelated optional parameter.

C. Explain each parameter's role and require `old_text` to match the source.

D. Describe both as longer strings.

## Đáp án và giải thích

1. **A.** A kiểm tra hành vi còn thiếu. B, C, D đều kiểm tra định nghĩa/khám phá, không chứng minh mã đã thực hiện thao tác.

2. **A, B.** B hướng dẫn đầu vào, A hỗ trợ chẩn đoán. D âm thầm đổi ngữ nghĩa; C che thất bại và khiến model tin thao tác đã xảy ra.

3. **C.** C tách hợp lệ kiểu và tồn tại nghiệp vụ. D thêm hành động ngoài hợp đồng; A có thể sửa sai đối tượng; B biến điều kiện dữ liệu thất bại thành thành công.

4. **A, D.** A giảm lặp, D kiểm chứng hợp đồng. B nhầm mô tả với phân quyền; C kiểu không chặn tài liệu thiếu hay chuỗi không khớp.

5. **C.** C cung cấp khác biệt ngữ nghĩa mà kiểu giống nhau không thể hiện. D không giải thích vai trò; B thêm nhiễu; A thực hiện biến đổi ngoài ý định rõ ràng của người dùng.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296697). Bản lưu: `sources/mcp-lessons/296697.json`.

## Đối chiếu MCP trong khóa Bedrock

Mẫu dùng decorator, chú thích kiểu và `Field` để tạo schema cho công cụ đọc, sửa tài liệu. Phép thay chuỗi Python trong ví dụ chỉ là cách làm đơn giản, chưa chứng minh nó bảo đảm đúng một vị trí khớp hoặc đáp ứng đầy đủ yêu cầu vận hành. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276800). Bản lưu: `sources/bedrock-lessons/276800.json`.

## Đối chiếu Vertex

Decorator FastMCP và tham số có kiểu giúp tạo schema; ứng dụng vẫn cần kiểm tra nghiệp vụ và quyền. Hàm `edit_document` dùng `str.replace` có thể thay mọi lần khớp và không tự báo lỗi khi thiếu `old_str`. Nếu chỉ được sửa một vị trí, cần thêm kiểm tra tương ứng. Mẫu `add_ints` thiếu kiểu tham số không phải schema hoàn chỉnh đã kiểm thử. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289235). Bản lưu: `sources/vertex-lessons/289235.json`.
