# Mô tả hàm và tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287797), sources/api-lessons/287797.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học dùng bộ thư viện Python cho MCP để tạo công cụ đọc và sửa tài liệu. Một decorator — phần đánh dấu đặt trên hàm — đăng ký hàm đó thành công cụ. Chú thích kiểu dữ liệu (type hints) và mô tả tham số giúp thư viện tạo bản mô tả đầu vào, giảm việc khai báo lặp.

Cần mô tả rõ công cụ làm gì và từng tham số có nghĩa gì. Ví dụ: `doc_id` xác định tài liệu cần xử lý. Với công cụ thay chuỗi, phải nói rõ chuỗi cũ cần khớp chính xác, kể cả khoảng trắng, để Claude biết cách tạo yêu cầu phù hợp.

Thư viện hỗ trợ giao tiếp theo MCP và kiểm tra tham số. Hàm của bạn vẫn phải thực hiện việc đọc hoặc sửa tài liệu. Một `doc_id` đúng kiểu chuỗi vẫn có thể chỉ tới tài liệu không tồn tại. Mẫu của bài trả lỗi có mô tả trong trường hợp này, thay vì bịa nội dung.

Ví dụ lưu tài liệu trong một dictionary trong bộ nhớ chỉ để minh họa; không nên coi đó là thiết kế lưu trữ hoàn chỉnh cho ứng dụng thực tế.

## Câu hỏi

**1. Chọn một.** SDK tạo bản mô tả cấu trúc dữ liệu từ type hints có thay thế logic sửa tài liệu không?

A. Có, mọi nghiệp vụ tự được sinh.

B. Có, chỉ cần đặt tên hàm.

C. Không, hàm vẫn phải triển khai hành động thực tế.

D. Không cần hàm nếu có description dài.

**2. Chọn một.** Công cụ yêu cầu chuỗi khớp cả khoảng trắng. Nên mô tả ở đâu?

A. Trong mô tả tham số liên quan.

B. Chỉ ở một cuộc họp không được ghi lại.

C. Không cần mô tả.

D. Thay trong tên người dùng.

**3. Chọn một.** `doc_id` là chuỗi hợp lệ nhưng không tồn tại. Hệ thống nên làm gì theo mẫu?

A. Tự tạo nội dung rồi coi là tài liệu gốc.

B. Trả lỗi có mô tả để nhận biết tình trạng.

C. Luôn trả thành công rỗng.

D. Đọc tài liệu bất kỳ khác.

## Đáp án

1. **C.** A, B, D nhầm khai báo giao diện với thực thi nghiệp vụ.
2. **A.** B không cung cấp thông tin cho mô hình; C bỏ điều kiện quan trọng; D không mô tả hợp đồng.
3. **B.** A bịa nội dung; C che lỗi; D trả sai đối tượng.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296697). Bản lưu: `sources/mcp-lessons/296697.json`.

## Đối chiếu MCP trong khóa Bedrock

Mẫu dùng decorator, chú thích kiểu và `Field` để tạo schema cho công cụ đọc, sửa tài liệu. Phép thay chuỗi Python trong ví dụ chỉ là cách làm đơn giản, chưa chứng minh nó bảo đảm đúng một vị trí khớp hoặc đáp ứng đầy đủ yêu cầu vận hành. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276800). Bản lưu: `sources/bedrock-lessons/276800.json`.

## Đối chiếu Vertex

Decorator FastMCP và tham số có kiểu giúp tạo schema; ứng dụng vẫn cần kiểm tra nghiệp vụ và quyền. Hàm `edit_document` dùng `str.replace` có thể thay mọi lần khớp và không tự báo lỗi khi thiếu `old_str`. Nếu chỉ được sửa một vị trí, cần thêm kiểm tra tương ứng. Mẫu `add_ints` thiếu kiểu tham số không phải schema hoàn chỉnh đã kiểm thử. Dùng chung câu hỏi.

Nguồn đối chiếu: [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289235). Bản lưu: `sources/vertex-lessons/289235.json`.
