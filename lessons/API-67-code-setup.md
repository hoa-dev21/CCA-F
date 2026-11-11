# Claude Code setup

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287788), sources/api-lessons/287788.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài giới thiệu Claude Code như công cụ hỗ trợ tìm, đọc, sửa tệp và chạy lệnh trong quá trình phát triển phần mềm. Kết nối MCP cho phép bổ sung công cụ hoặc dữ liệu chuyên biệt.

Trước khi dùng với dự án, cần cài công cụ dòng lệnh (CLI), đăng nhập theo cách phù hợp và kiểm tra nó chạy được trong đúng môi trường. Khi thực hành, hãy đối chiếu hướng dẫn chính thức, vì lệnh npm và danh sách hệ điều hành trong video thuộc thời điểm ghi hình, không phải cách cài duy nhất cho mọi phiên bản.

Sau khi thiết lập, xác định đúng thư mục dự án và phạm vi làm việc. Cài đặt thành công chỉ chứng minh công cụ đã sẵn sàng sử dụng, chưa chứng minh mã do nó tạo sẽ đúng.

Các bước đọc dự án, lập kế hoạch, sửa mã và kiểm thử được học tiếp ở các bài sau. Bản tóm tắt này mô tả việc chuẩn bị, không phải xác nhận đã cài hoặc đăng nhập trên máy của người học.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** CLI đã cài và đăng nhập thành công. Tác nhân sửa tính năng rồi đề nghị merge vì “môi trường đã sẵn sàng”. Bằng chứng nào vẫn cần?

A. Một lần gọi mô hình thành công từ đúng thư mục.

B. Diff đúng phạm vi và kiểm thử hành vi tính năng.

C. Ảnh chụp phiên bản CLI và tài khoản đang đăng nhập.

D. Số lượng file tác nhân đã đọc trước khi sửa.

**Câu 2 — Chọn hai.** Video cài CLI đã cũ; môi trường vận hành khác hệ điều hành trong demo. Hai bước nào phù hợp trước khi áp dụng?

A. Kiểm tra CLI chạy được và xác thực bằng cơ chế được cấu hình cho môi trường đích.

B. Cài thêm mọi phương thức tìm thấy để ít nhất một bản hoạt động.

C. Đối chiếu hướng dẫn chính thức phù hợp phiên bản và môi trường thực tế.

D. Dùng đúng lệnh cũ và bỏ qua cảnh báo vì bài học là nguồn chính thức.

**Câu 3 — Chọn một.** Đăng nhập API trực tiếp thành công trên laptop, nhưng job Bedrock không gọi được mô hình. Cách điều tra đúng lớp lỗi nhất?

A. Đổi model name nhưng giữ nguyên cơ chế xác thực trực tiếp.

B. Gửi system prompt yêu cầu “hãy dùng Bedrock”.

C. Kiểm tra provider, danh tính AWS và quyền môi trường đích.

D. Đổi tên repo để CLI nhận biết đây là dự án cloud.

**Câu 4 — Chọn một.** Tác nhân đã đăng nhập nhưng đang mở thư mục repo cũ có cấu trúc gần giống repo cần sửa. Kiểm soát nào nên thực hiện trước khi giao thay đổi?

A. Tăng quyền file để bảo đảm tác nhân sửa được mọi thư mục.

B. Dựa vào tên package trong prompt để tác nhân tự chọn thư mục.

C. Chờ test thất bại rồi mới kiểm tra repo.

D. Xác định lại thư mục dự án, revision và phạm vi file được phép thay đổi.

**Câu 5 — Chọn hai.** Nhóm thêm MCP server cho Claude Code để tra thông tin nội bộ. Hai điều nào cần phân biệt với việc CLI đã cài xong?

A. Khả năng kết nối, quyền và hợp đồng của công cụ/dữ liệu MCP mới.

B. Việc kết quả công cụ có đủ căn cứ cho nhiệm vụ và cần kiểm chứng ra sao.

C. Server có tên đúng thì không cần kiểm tra lời gọi và xử lý lỗi.

D. MCP tự mở mọi quyền file để bù cho phạm vi công cụ trước đó.

## Đáp án và giải thích

1. **B.** A sai: Kết nối hoạt động vẫn không kiểm thử tính năng được tạo. B đúng: Setup xác nhận khả năng dùng công cụ, không xác nhận chất lượng code tạo ra. C sai: Đó là bằng chứng thiết lập, không chứng minh sửa đúng hành vi. D sai: Đọc nhiều không đồng nghĩa hiểu đúng hoặc thực thi đúng.

2. **A, C.** A đúng: Cài package xong chưa chứng minh runtime và danh tính thực tế hoạt động. B sai: Nhiều bản có thể tạo xung đột đường dẫn và không xác định được runtime đang dùng. C đúng: Cách cài trong video không mặc định là lựa chọn duy nhất hoặc còn tương thích. D sai: Nguồn chính thức tại thời điểm ghi hình không loại khác biệt phiên bản hiện tại.

3. **C.** A sai: Tên mô hình không thay cho credential và định tuyến của nhà cung cấp. B sai: Prompt không cấu hình client hay hạ tầng xác thực. C đúng: Thành công ở provider khác không chứng minh cấu hình Bedrock đúng. D sai: Tên thư mục không chứng minh hay cấp quyền truy cập mô hình.

4. **D.** A sai: Quyền rộng hơn không giải quyết đang nhắm sai repo. B sai: Thông tin ngôn ngữ không thay việc xác minh cwd và đối tượng thực tế. C sai: Test của repo cũ có thể xanh; phát hiện sai mục tiêu sau sửa còn tốn công khôi phục. D đúng: Đúng danh tính chưa đủ; công cụ còn phải làm việc trên đúng đối tượng.

5. **A, B.** A đúng: Tích hợp bổ sung có điều kiện hoạt động riêng, không được suy từ CLI khởi động. B đúng: Khả năng gọi công cụ không bảo đảm dữ liệu hoặc quyết định cuối đúng. C sai: Khám phá tên khác với kiểm chứng hoạt động thực tế và đường lỗi. D sai: Mở rộng giao diện công cụ không mặc định cấp mọi quyền hệ thống.

## Đối chiếu phụ đề chính thức

Theo phụ đề, Claude Code làm việc trên dòng lệnh, tìm, đọc, sửa tệp, chạy lệnh và kết nối MCP. Dùng Bedrock cần cấu hình nhà cung cấp, thông tin xác thực AWS và quyền mô hình, không chỉ đăng nhập Anthropic. Phụ đề nhắc ba biến môi trường nhưng không đọc tên trên slide, nên không tự đoán tên. Lệnh npm cũ cũng không phải cách cài duy nhất hiện nay. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code setup](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276809). Bản lưu: `sources/bedrock-media/276809.json`.

## Đối chiếu phụ đề chính thức

Bài giới thiệu công cụ dòng lệnh, thao tác tệp, web, terminal và MCP, rồi cài đặt với ba biến môi trường trên slide. Phụ đề không nêu tên biến nên không sao chép tên suy đoán. Cấu hình Vertex phải đúng dự án, vùng và thông tin xác thực, không trộn với cấu hình API trực tiếp hoặc Bedrock. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code setup](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289232). Bản lưu: `sources/vertex-media/289232.json`.
