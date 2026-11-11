# Đóng gói mẫu hướng dẫn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287784), sources/api-lessons/287784.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP prompts là các mẫu hướng dẫn được lưu trên server để dùng lại. Khi client yêu cầu một mẫu và cung cấp tham số, server trả về danh sách tin nhắn (messages) đã điền thông tin cần thiết. Ứng dụng dùng danh sách này để làm việc với mô hình.

Ví dụ: Mẫu chuyển tài liệu sang Markdown nhận `doc_id`, đưa mã tài liệu vào hướng dẫn, nêu cấu trúc cần có và cách dùng công cụ chỉnh sửa. Người dùng không phải tự viết lại toàn bộ quy trình mỗi lần.

Lấy được mẫu mới là lấy được hướng dẫn, chưa phải sửa xong tài liệu. Ứng dụng còn phải gửi hướng dẫn cho Claude và xử lý các thao tác cần thiết.

Dùng Inspector để thử mẫu với tham số cụ thể và xem các tin nhắn được tạo ra. Kiểm tra mã tài liệu, nội dung hướng dẫn và cấu trúc tin nhắn, rồi thử trên dữ liệu thực tế để biết chất lượng kết quả. Mẫu hữu ích cần gắn với nhiệm vụ của server, có mô tả rõ và dùng được các công cụ, tài liệu sẵn có.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Inspector lấy mẫu chuyển đổi tài liệu và hiển thị messages đúng doc_id. Nhóm đánh dấu tác vụ chuyển đổi đã hoàn tất. Nhận định nào chính xác hơn?

A. Prompt được lấy thành công nên server đã chạy tool chuyển đổi.

B. Mới sinh hướng dẫn; còn chạy model/tool và kiểm chứng.

C. Messages đúng doc_id chứng minh chất lượng Markdown đạt yêu cầu.

D. Lưu messages làm tài liệu đã chuyển đổi.

**Câu 2 — Chọn hai.** Mẫu nhận doc_id nhưng nội dung messages luôn dùng một ID hard-code. Hai kiểm thử nào tìm và ngăn lỗi này?

A. Gọi mẫu với ít nhất hai ID khác nhau và đối chiếu messages.

B. Chỉ kiểm tra list_prompts có tên mẫu.

C. Kiểm tra tác vụ thực tế tác động đúng tài liệu được yêu cầu.

D. Đếm số messages để suy ra tham số đã được nội suy.

**Câu 3 — Chọn một.** Một prompt chuyển đổi yêu cầu công cụ edit_document, nhưng server triển khai chỉ read_document. Lựa chọn nào phù hợp nhất trước khi cung cấp cho người dùng?

A. Giữ prompt vì mô hình có thể suy ra cách sửa từ tool đọc.

B. Đổi tên tool đọc trong prompt thành tool sửa.

C. Đánh dấu prompt đã kiểm thử vì Inspector trả messages.

D. Khớp prompt với năng lực thực, bổ sung tool nếu cần.

**Câu 4 — Chọn hai.** Nhóm muốn prompt dùng lại có giá trị hơn một câu “hãy xử lý tài liệu”. Hai thành phần nào nên có?

A. Tiêu chí đầu ra và các bước chuyên môn gắn nhiệm vụ server.

B. Tên người dùng cố định để giảm số tham số.

C. Tham số đối tượng rõ và cách dùng resources/tools sẵn có.

D. Toàn bộ lịch sử hội thoại của tác giả mẫu.

**Câu 5 — Chọn một.** Prompt đã được sửa để thêm một tiêu chí định dạng. Inspector trả cấu trúc messages hợp lệ. Bằng chứng nào còn cần để chấp nhận thay đổi?

A. So độ dài prompt mới và cũ, dài hơn thì đầy đủ hơn.

B. Kiểm tra chỉ tên mẫu trong danh mục sau cập nhật.

C. Đo tiêu chí mới và hồi quy trên tài liệu đại diện.

D. Đảm bảo mọi messages đều dùng cùng role để thống nhất.

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
