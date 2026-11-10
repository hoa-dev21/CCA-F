# Claude Code setup

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287788), sources/api-lessons/287788.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài giới thiệu Claude Code như công cụ hỗ trợ tìm, đọc, sửa tệp và chạy lệnh trong quá trình phát triển phần mềm. Kết nối MCP cho phép bổ sung công cụ hoặc dữ liệu chuyên biệt.

Trước khi dùng với dự án, cần cài công cụ dòng lệnh (CLI), đăng nhập theo cách phù hợp và kiểm tra nó chạy được trong đúng môi trường. Khi thực hành, hãy đối chiếu hướng dẫn chính thức, vì lệnh npm và danh sách hệ điều hành trong video thuộc thời điểm ghi hình, không phải cách cài duy nhất cho mọi phiên bản.

Sau khi thiết lập, xác định đúng thư mục dự án và phạm vi làm việc. Cài đặt thành công chỉ chứng minh công cụ đã sẵn sàng sử dụng, chưa chứng minh mã do nó tạo sẽ đúng.

Các bước đọc dự án, lập kế hoạch, sửa mã và kiểm thử được học tiếp ở các bài sau. Bản tóm tắt này mô tả việc chuẩn bị, không phải xác nhận đã cài hoặc đăng nhập trên máy của người học.

## Câu hỏi

**1. Chọn một.** Cài CLI thành công có chứng minh tính năng được viết đúng không?

A. Có, setup thay mọi test.

B. Có, nếu đã login.

C. Có, mọi repo giống nhau.

D. Không; còn cần kiểm tra hành vi và kết quả triển khai.

**2. Chọn một.** Video chỉ một cách cài cũ. Khi thực hành nên làm gì?

A. Đối chiếu hướng dẫn chính thức phù hợp môi trường hiện tại.

B. Luôn bỏ lỗi tương thích.

C. Cài mọi phần mềm từ link bất kỳ.

D. Coi mọi hệ điều hành giống nhau.

**3. Chọn một.** MCP hỗ trợ Code mở rộng thế nào?

A. Thay mọi phép kiểm chứng.

B. Kết nối server cung cấp công cụ/dữ liệu chuyên biệt phù hợp.

C. Tự cấp mọi quyền file.

D. Không cần cấu hình tích hợp.

## Đáp án

1. **D.** D tách môi trường khỏi chất lượng; A, B, C suy rộng quá mức.

2. **A.** A kiểm tra đường cài đúng; B che lỗi, C không xét nguồn, D bỏ môi trường.

3. **B.** B là mở rộng khả năng; A và C sai bảo đảm/quyền, D bỏ thiết lập.

## Đối chiếu phụ đề chính thức

Theo phụ đề, Claude Code làm việc trên dòng lệnh, tìm, đọc, sửa tệp, chạy lệnh và kết nối MCP. Dùng Bedrock cần cấu hình nhà cung cấp, thông tin xác thực AWS và quyền mô hình, không chỉ đăng nhập Anthropic. Phụ đề nhắc ba biến môi trường nhưng không đọc tên trên slide, nên không tự đoán tên. Lệnh npm cũ cũng không phải cách cài duy nhất hiện nay. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276809). Bản lưu: `sources/bedrock-media/276809.json`.

## Đối chiếu phụ đề chính thức

Bài giới thiệu công cụ dòng lệnh, thao tác tệp, web, terminal và MCP, rồi cài đặt với ba biến môi trường trên slide. Phụ đề không nêu tên biến nên không sao chép tên suy đoán. Cấu hình Vertex phải đúng dự án, vùng và thông tin xác thực, không trộn với cấu hình API trực tiếp hoặc Bedrock. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289232). Bản lưu: `sources/vertex-media/289232.json`.
