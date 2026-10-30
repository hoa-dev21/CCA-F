# Claude Code setup

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287788), sources/api-lessons/287788.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Tóm tắt

Claude Code cung cấp công cụ tìm/đọc/sửa file, chạy lệnh và nối MCP để mở rộng khả năng. Bài minh họa quy trình cài CLI và đăng nhập trước khi làm việc trên dự án.

Lệnh npm và danh sách hệ điều hành trong video là theo thời điểm ghi, không phải khẳng định đó là đường cài hiện hành duy nhất. Bản tóm tắt không cài thêm CLI hay đăng nhập thay người học; cần kiểm tra tài liệu cài đặt chính thức khi thực hành.

Sau setup, xác minh công cụ thực sự chạy được trong đúng môi trường và phạm vi dự án. Cài thành công chưa chứng minh code sinh ra đúng; vẫn cần kế hoạch, review và test ở các bài tiếp theo.

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

Đã đọc toàn bộ phụ đề tiếng Anh của [Claude Code setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276809), sources/bedrock-media/276809.json. Video mô tả Claude Code chạy terminal, tìm/đọc/sửa file, dùng lệnh và làm MCP client. Khác direct API: cần cấu hình provider Bedrock cùng AWS credentials/quyền model, không chỉ login Anthropic. Phụ đề nói ba biến môi trường nhưng không ghi tên hiện trên slide; không tự bịa tên hoặc coi lệnh npm cũ là cách cài duy nhất hiện nay. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Claude Code setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289232), sources/vertex-media/289232.json. Bài mô tả CLI, tool tìm/đọc/sửa file, web/terminal và MCP client, rồi cài và thiết lập ba biến môi trường trên slide. Phụ đề không đọc tên các biến: không tự chép tên suy đoán. Setup provider Vertex phải theo project/region/credentials tương ứng, không dùng cấu hình direct API hay Bedrock lẫn nhau. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
