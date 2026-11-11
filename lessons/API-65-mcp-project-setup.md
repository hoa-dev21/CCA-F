# CLI và server tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287785), sources/api-lessons/287785.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Dự án mẫu gồm chatbot chạy qua dòng lệnh (CLI) và MCP server quản lý tài liệu. Server có công cụ đọc, sửa tài liệu; dữ liệu được giữ trong bộ nhớ để đơn giản hóa việc học.

Trước khi thêm chức năng MCP, bài hướng dẫn lấy mã khởi đầu, đọc README, chuẩn bị môi trường và các thư viện cần thiết rồi chạy thử luồng cơ bản. Việc biết bản gốc chạy được giúp bạn phân biệt lỗi cài đặt với lỗi do phần mới thêm.

Ví dụ: Nếu chatbot chưa khởi động được ngay từ đầu, cần kiểm tra hướng dẫn thiết lập trước khi kết luận mã MCP sai. Sau khi luồng cơ bản hoạt động, mới có mốc để so sánh thay đổi.

Ứng dụng thật không bắt buộc tự xây cả client và server nếu đã có một phía phù hợp. Dữ liệu nằm trong dictionary ở bộ nhớ cũng không được bảo đảm giữ lại khi khởi động lại; nếu cần lưu bền, phải thiết kế riêng. Bản tóm tắt dựa trên văn bản bài học, không phải xác nhận đã chạy bài tập hoặc kiểm tra mọi tệp trong gói mã mẫu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A starter CLI already has import errors before MCP is added. Changing both client and server does not fix it. What isolates the cause?

A. Rewrite the protocol because both sides changed.

B. Change only the chatbot prompt.

C. Restore a working baseline, then introduce changes incrementally.

D. Add connection diagnostics to a server that cannot start.

**Question 2 — Choose two.** A learning project stores mock documents in a dictionary with names such as `report.pdf`. Which TWO requirements precede real records surviving restarts?

A. Rename PDFs to XLSX.

B. Use absolute dictionary keys for automatic persistence.

C. Support actual binary file reading and decoding rather than filename-labeled mock content.

D. Provide suitable durable storage and recovery.

**Question 3 — Choose one.** A company already has a suitable document MCP server and needs a custom CLI. How should the two-sided course example be applied?

A. Rewrite the server because both sides must have one author.

B. Connect and consider tool discovery the entire finished task.

C. Verify the server contract and permissions, then build the missing client.

D. Skip authorization because another client used the server.

**Question 4 — Choose one.** A CLI keeps the direct API client while moving to Vertex. Changing project ID has no effect. Which layer needs correction?

A. The MCP server name, which always selects the model provider.

B. Load Google credentials but retain the direct client.

C. Provider-specific client routing and authentication configuration.

D. Mention Vertex in the system prompt.

**Question 5 — Choose two.** Which TWO checks verify integration of a new document-update tool beyond startup?

A. Missing-document and update-failure cases do not report false success.

B. Only README reading and dependency installation.

C. Selection, execution, and correctly linked result return work end to end.

D. Only the tool name appears in discovery.

## Đáp án và giải thích

1. **C.** A sai: Chưa có bằng chứng lỗi nằm ở giao thức khi import nền còn thất bại. B sai: Lỗi khởi động xảy ra trước suy luận nên nội dung prompt chưa giải quyết được. C đúng: Cần tách lỗi thiết lập sẵn có khỏi lỗi do thay đổi MCP. D sai: Công cụ mới không sửa được bước import trước khi server chạy.

2. **C, D.** A sai: Đổi tên không cài đặt parser định dạng mới. B sai: Đổi khóa trong bộ nhớ không tạo thao tác ghi ra ổ lưu trữ. C đúng: Đuôi PDF không chứng minh implementation có bộ đọc PDF. D đúng: Tên tài liệu không tạo persistence cho dữ liệu đang chỉ nằm trong bộ nhớ.

3. **C.** A sai: Giao thức hướng đến tương tác giữa các implementation, không yêu cầu cùng tác giả. B sai: Khám phá thành công chưa kiểm chứng gọi tool, dữ liệu và luồng xử lý lỗi. C đúng: Mẫu xây cả hai để học, không buộc production viết lại phía đã đáp ứng. D sai: Quyền/danh tính của client mới vẫn cần được xác minh.

4. **C.** A sai: Kết nối công cụ và client gọi mô hình là hai trách nhiệm khác nhau trong kiến trúc này. B sai: Credential phải phù hợp client và endpoint; nạp danh tính Google không tự chuyển client API trực tiếp sang Vertex. C đúng: Biến môi trường riêng lẻ không chuyển loại client hay endpoint thực tế. D sai: Prompt không quyết định đường mạng hoặc credential của request.

5. **A, C.** A đúng: Đường lỗi giúp kiểm tra hợp đồng khi dữ liệu hoặc thao tác không hợp lệ. B sai: Đó là bước chuẩn bị, chưa chứng minh chức năng mới hoạt động. C đúng: Vòng hoạt động đầy đủ cần nhiều hơn việc tiến trình đã chạy. D sai: Tên xuất hiện chưa xác nhận dispatch, mutation và bàn giao kết quả.

## Đối chiếu MCP trong khóa Bedrock

Dự án thêm lựa chọn tài liệu bằng `@document` và lệnh dạng `/name`, lưu dữ liệu trong bộ nhớ. Không cần tự viết cả client và server nếu một phía đã có. Hồ sơ này chưa xác nhận mở gói ZIP hoặc hoàn thành bài thực hành. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276792). Bản lưu: `sources/bedrock-lessons/276792.json`.

## Đối chiếu Vertex

Bài chuyển sang dự án dòng lệnh mẫu dùng `ANTHROPIC_API_KEY` trong `.env` và tài liệu trong bộ nhớ. Đó là cấu hình gọi API trực tiếp của dự án mẫu, không chứng minh Vertex dùng khóa Anthropic. Đổi nhà cung cấp phải sửa client và xác thực tương ứng. Tên tài liệu có đuôi PDF hoặc xlsx chưa chứng minh có bộ đọc tệp nhị phân thật. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289199). Bản lưu: `sources/vertex-lessons/289199.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, dự án xây cả client và server để học, dùng tài liệu giả trong bộ nhớ cùng công cụ đọc, cập nhật. README hướng dẫn khóa trong `.env`, các thư viện và chạy bằng `uv run main.py` hoặc `python main.py` theo môi trường. Không suy từ đuôi tệp rằng mẫu đã đọc được PDF, xlsx thật, hoặc dữ liệu trong bộ nhớ còn sau khởi động lại. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296694). Bản lưu: `sources/mcp-media/296694.json`.
