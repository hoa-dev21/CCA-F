# CLI và server tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287785), sources/api-lessons/287785.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Dự án mẫu gồm chatbot chạy qua dòng lệnh (CLI) và MCP server quản lý tài liệu. Server có công cụ đọc, sửa tài liệu; dữ liệu được giữ trong bộ nhớ để đơn giản hóa việc học.

Trước khi thêm chức năng MCP, bài hướng dẫn lấy mã khởi đầu, đọc README, chuẩn bị môi trường và các thư viện cần thiết rồi chạy thử luồng cơ bản. Việc biết bản gốc chạy được giúp bạn phân biệt lỗi cài đặt với lỗi do phần mới thêm.

Ví dụ: Nếu chatbot chưa khởi động được ngay từ đầu, cần kiểm tra hướng dẫn thiết lập trước khi kết luận mã MCP sai. Sau khi luồng cơ bản hoạt động, mới có mốc để so sánh thay đổi.

Ứng dụng thật không bắt buộc tự xây cả client và server nếu đã có một phía phù hợp. Dữ liệu nằm trong dictionary ở bộ nhớ cũng không được bảo đảm giữ lại khi khởi động lại; nếu cần lưu bền, phải thiết kế riêng. Bản tóm tắt dựa trên văn bản bài học, không phải xác nhận đã chạy bài tập hoặc kiểm tra mọi tệp trong gói mã mẫu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Starter CLI đã lỗi import trước khi bạn thêm MCP. Sau đó bạn thay client và server cùng lúc, lỗi vẫn còn. Cách xác định nguyên nhân hiệu quả nhất?

A. Viết lại giao thức MCP vì cả client lẫn server đều đã thay đổi.

B. Chỉ sửa prompt chatbot vì đó là phần nhận yêu cầu đầu tiên.

C. Đưa baseline về trạng thái chạy được rồi thêm từng thay đổi.

D. Thêm công cụ kiểm tra kết nối vào server chưa khởi động được.

**Câu 2 — Chọn hai.** Dự án học lưu tài liệu trong dictionary và có tên report.pdf. Nhóm muốn dùng ngay cho hồ sơ thật cần tồn tại qua restart. Hai điều nào phải xác minh/bổ sung?

A. Dùng extension xlsx thay pdf để server nhận dữ liệu như bảng.

B. Chỉ đổi dictionary key thành đường dẫn tuyệt đối để dữ liệu tự lưu.

C. Khả năng đọc/giải mã tệp nhị phân thật thay vì chỉ nội dung giả có tên tệp.

D. Cơ chế lưu bền và khôi phục dữ liệu đáp ứng yêu cầu restart.

**Câu 3 — Chọn một.** Doanh nghiệp đã có MCP server tài liệu phù hợp, cần thêm trải nghiệm CLI riêng. Mẫu khóa học tự viết cả hai phía. Cách áp dụng nào hợp lý?

A. Viết lại server theo mẫu trước vì MCP yêu cầu cùng tác giả ở hai phía.

B. Gắn server vào CLI rồi coi việc list được tools là toàn bộ tác vụ đã hoàn tất.

C. Xác minh hợp đồng/quyền server rồi xây phần client còn thiếu.

D. Bỏ kiểm tra quyền vì server dùng lại đã từng hoạt động với client khác.

**Câu 4 — Chọn một.** Mẫu CLI dùng ANTHROPIC_API_KEY trong .env; nhóm chuyển sang môi trường Vertex nhưng giữ client gọi API trực tiếp. Chỉnh project ID không làm request dùng Vertex. Cần sửa lớp nào?

A. Đổi tên server MCP vì server luôn quyết định nhà cung cấp mô hình.

B. Nạp Google credentials nhưng giữ client trực tiếp vì cùng gọi Claude.

C. Cấu hình client/định tuyến và cơ chế xác thực đúng nhà cung cấp đích.

D. Giữ API trực tiếp và thay system prompt nêu tên Vertex.

**Câu 5 — Chọn hai.** Nhóm đã chạy được baseline, muốn thêm công cụ cập nhật tài liệu vào CLI. Hai kiểm tra nào giúp xác nhận tích hợp thay vì chỉ xác nhận khởi động?

A. Thử tài liệu không tồn tại và lỗi cập nhật, xác nhận không báo thành công giả.

B. Chỉ xác nhận README đã được đọc và dependencies đã cài.

C. Thử đường chọn tool, thực thi và trả kết quả về đúng lời gọi.

D. Chỉ kiểm tra tên công cụ xuất hiện trong danh sách khám phá.

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
