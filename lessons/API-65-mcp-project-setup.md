# CLI và server tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287785), sources/api-lessons/287785.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Dự án mẫu gồm chatbot chạy qua dòng lệnh (CLI) và MCP server quản lý tài liệu. Server có công cụ đọc, sửa tài liệu; dữ liệu được giữ trong bộ nhớ để đơn giản hóa việc học.

Trước khi thêm chức năng MCP, bài hướng dẫn lấy mã khởi đầu, đọc README, chuẩn bị môi trường và các thư viện cần thiết rồi chạy thử luồng cơ bản. Việc biết bản gốc chạy được giúp bạn phân biệt lỗi cài đặt với lỗi do phần mới thêm.

Ví dụ: Nếu chatbot chưa khởi động được ngay từ đầu, cần kiểm tra hướng dẫn thiết lập trước khi kết luận mã MCP sai. Sau khi luồng cơ bản hoạt động, mới có mốc để so sánh thay đổi.

Ứng dụng thật không bắt buộc tự xây cả client và server nếu đã có một phía phù hợp. Dữ liệu nằm trong dictionary ở bộ nhớ cũng không được bảo đảm giữ lại khi khởi động lại; nếu cần lưu bền, phải thiết kế riêng. Bản tóm tắt dựa trên văn bản bài học, không phải xác nhận đã chạy bài tập hoặc kiểm tra mọi tệp trong gói mã mẫu.

## Câu hỏi

**1. Chọn một.** Starter chưa chạy được trước khi sửa MCP. Nên làm gì?

A. Thêm nhiều công cụ ngay.

B. Bỏ môi trường.

C. Kiểm tra baseline/setup theo README trước khi chẩn đoán logic mới.

D. Chỉ báo hoàn tất.

**2. Chọn một.** Vì bài xây cả client và server, dự án thật bắt buộc cũng phải viết cả hai không?

A. Không; có thể dùng phía đã có và chỉ xây phần cần thiết.

B. Có, luôn phải viết lại server.

C. Có, không được dùng client có sẵn.

D. Có, mọi tích hợp giống nhau.

**3. Chọn một.** Dữ liệu trong dictionary memory có chắc tồn tại qua restart không?

A. Có, mọi memory là database.

B. Không; cần thiết kế lưu bền riêng nếu yêu cầu.

C. Có, tên tài liệu tự lưu ra đĩa.

D. Có, không cần kiểm tra.

## Đáp án

1. **C.** C cô lập lỗi nền; A thêm biến, B không giải quyết, D không có bằng chứng.

2. **A.** A phản ánh mục đích giáo dục; B, C, D áp đặt kiến trúc không cần.

3. **B.** B phân biệt ví dụ và persistence; A, C, D giả định cơ chế không có.

## Đối chiếu MCP trong khóa Bedrock

Dự án thêm lựa chọn tài liệu bằng `@document` và lệnh dạng `/name`, lưu dữ liệu trong bộ nhớ. Không cần tự viết cả client và server nếu một phía đã có. Hồ sơ này chưa xác nhận mở gói ZIP hoặc hoàn thành bài thực hành. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276792). Bản lưu: `sources/bedrock-lessons/276792.json`.

## Đối chiếu Vertex

Bài chuyển sang dự án dòng lệnh mẫu dùng `ANTHROPIC_API_KEY` trong `.env` và tài liệu trong bộ nhớ. Đó là cấu hình gọi API trực tiếp của dự án mẫu, không chứng minh Vertex dùng khóa Anthropic. Đổi nhà cung cấp phải sửa client và xác thực tương ứng. Tên tài liệu có đuôi PDF hoặc xlsx chưa chứng minh có bộ đọc tệp nhị phân thật. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289199). Bản lưu: `sources/vertex-lessons/289199.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, dự án xây cả client và server để học, dùng tài liệu giả trong bộ nhớ cùng công cụ đọc, cập nhật. README hướng dẫn khóa trong `.env`, các thư viện và chạy bằng `uv run main.py` hoặc `python main.py` theo môi trường. Không suy từ đuôi tệp rằng mẫu đã đọc được PDF, xlsx thật, hoặc dữ liệu trong bộ nhớ còn sau khởi động lại. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project setup](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296694). Bản lưu: `sources/mcp-media/296694.json`.
