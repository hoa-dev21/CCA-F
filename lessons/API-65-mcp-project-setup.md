# Project setup — CLI và server tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287785), sources/api-lessons/287785.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Tóm tắt

Dự án mẫu có CLI chatbot và MCP server quản lý tài liệu. Server cung cấp công cụ đọc/sửa; dữ liệu giữ trong memory để đơn giản hóa bài thực hành. Trong sản phẩm thật có thể chỉ xây client hoặc server tùy phần tích hợp cần thiết.

Bài hướng dẫn lấy starter, đọc README, thiết lập môi trường, dependencies rồi chạy thử luồng cơ bản trước khi thêm MCP. Kiểm tra baseline giúp tách lỗi môi trường khỏi lỗi chức năng mới.

Bản tóm tắt dựa trên phần văn bản giải thích, chưa xác nhận đã mở mọi nội dung trong ZIP hoặc thực hiện bài tập. Memory store là lựa chọn minh họa, không bảo đảm lưu bền qua restart.

## Câu hỏi

**1. Chọn một.** Starter chưa chạy được trước khi sửa MCP. Nên làm gì?

A. Thêm nhiều tool ngay.

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

Đã đọc [Project setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276792), sources/bedrock-lessons/276792.json và đối chiếu với bài chung. Dự án thêm mention @document và command /name, storage trong memory; không cần viết cả client/server nếu phía còn lại đã có. Chưa mở ZIP nên không tuyên bố hoàn thành bài thực hành. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Project setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289199), sources/vertex-lessons/289199.json. Bài Vertex chuyển sang dự án CLI dùng .env ANTHROPIC_API_KEY và tài liệu in-memory. Đây là cấu hình dự án mẫu trực tiếp, không chứng minh Vertex dùng key Anthropic. Thay backend phải chỉnh client/xác thực tương ứng; filename PDF/xlsx không chứng minh parser file nhị phân thực. Dùng chung câu hỏi khái niệm.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Project setup](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296694), sources/mcp-media/296694.json. Dự án CLI xây cả client/server để học, tài liệu giả trong memory, tools read/update. README hướng dẫn API key trong .env và dependencies; uv run main.py hoặc python main.py theo môi trường. Không giả định tên file PDF/xlsx chứng minh parser nhị phân hay memory persist sau restart. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
