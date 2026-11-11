# Mô tả hàm và tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287797), sources/api-lessons/287797.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học dùng bộ thư viện Python cho MCP để tạo công cụ đọc và sửa tài liệu. Một decorator — phần đánh dấu đặt trên hàm — đăng ký hàm đó thành công cụ. Chú thích kiểu dữ liệu (type hints) và mô tả tham số giúp thư viện tạo bản mô tả đầu vào, giảm việc khai báo lặp.

Cần mô tả rõ công cụ làm gì và từng tham số có nghĩa gì. Ví dụ: `doc_id` xác định tài liệu cần xử lý. Với công cụ thay chuỗi, phải nói rõ chuỗi cũ cần khớp chính xác, kể cả khoảng trắng, để Claude biết cách tạo yêu cầu phù hợp.

Thư viện hỗ trợ giao tiếp theo MCP và kiểm tra tham số. Hàm của bạn vẫn phải thực hiện việc đọc hoặc sửa tài liệu. Một `doc_id` đúng kiểu chuỗi vẫn có thể chỉ tới tài liệu không tồn tại. Mẫu của bài trả lỗi có mô tả trong trường hợp này, thay vì bịa nội dung.

Ví dụ lưu tài liệu trong một dictionary trong bộ nhớ chỉ để minh họa; không nên coi đó là thiết kế lưu trữ hoàn chỉnh cho ứng dụng thực tế.

## Tự kiểm tra

**Câu 1 — Chọn một.** Decorator đăng ký hàm và type hints sinh input schema chính xác, nhưng thân hàm chỉ trả “success”. Test nào bác bỏ việc công cụ đã hoàn thiện?

A. Gọi sửa rồi đọc lại để xác minh trạng thái tài liệu.

B. Kiểm tra JSON của schema có đúng dấu ngoặc.

C. Xác nhận tên hàm xuất hiện trong danh sách tools.

D. Kiểm tra doc_id được chú thích là chuỗi.

**Câu 2 — Chọn hai.** Công cụ thay chuỗi yêu cầu old_text khớp chính xác cả khoảng trắng. Hai thiết kế nào giúp tránh sửa sai hoặc gọi mù?

A. Trả lỗi có ý nghĩa khi không tìm thấy chuỗi hoặc tài liệu.

B. Mô tả rõ quy tắc khớp trong tham số old_text.

C. Báo thành công khi không có gì thay đổi để model tiếp tục.

D. Tự xóa khoảng trắng trước khi so khớp dù hợp đồng yêu cầu chính xác.

**Câu 3 — Chọn một.** doc_id đúng kiểu string nhưng không tồn tại trong kho. Schema đã validate. Hành vi nào phù hợp?

A. Chọn tài liệu đầu tiên vì mọi ID đều đã qua schema.

B. Trả kết quả thành công rỗng vì string là kiểu hợp lệ.

C. Hàm kiểm tra dữ liệu và trả lỗi mô tả tài liệu không tồn tại.

D. Tạo tự động một tài liệu rỗng dù công cụ được mô tả chỉ để sửa.

**Câu 4 — Chọn hai.** Nhóm muốn giảm khai báo lặp nhưng vẫn duyệt được hợp đồng công cụ. Hai việc nào nên làm?

A. Dùng type hints và mô tả để SDK tạo schema.

B. Coi schema tự sinh là bằng chứng đầy đủ về quyền sửa tài liệu.

C. Bỏ mọi thông báo lỗi vì kiểu dữ liệu đã chặn hết đầu vào sai.

D. Đối chiếu schema tạo ra với logic và giới hạn thật của hàm.

**Câu 5 — Chọn một.** Hai tham số old_text và new_text đều là string; model hay đảo chúng. Chỉnh sửa nào trực tiếp nhất?

A. Thử cả hai chiều thay thế rồi lấy chiều khớp.

B. Thêm một tham số optional không liên quan để schema rõ hơn.

C. Nêu vai trò tham số và yêu cầu old_text khớp nguồn.

D. Đổi cả hai kiểu thành string dài hơn trong tài liệu.

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
