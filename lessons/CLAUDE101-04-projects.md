# Introduction to projects

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383393), sources/claude101-lessons/383393.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Tóm tắt

Projects tổ chức bối cảnh dài hạn: tài liệu tham chiếu, các chat liên quan và hướng dẫn dùng trong dự án. Phù hợp công việc tiếp diễn cần tái sử dụng cùng nguồn và quy ước. Project description giúp người quản lý hiểu mục đích, không nên giả định nó thay project instructions cho model.

Knowledge chứa thông tin; instructions nêu cách phản hồi và yêu cầu. Giữ tài liệu cập nhật, đặt tên có nghĩa và tham chiếu đúng nguồn giúp truy xuất. Khi dữ liệu lớn, hệ thống có thể truy xuất phần liên quan thay vì tải mọi tài liệu cùng lúc.

Với cộng tác, phân quyền theo nhu cầu xem hay chỉnh sửa. Không cấp quyền sửa chỉ vì người dùng cần hỏi về tài liệu. Chi tiết quyền/gói dịch vụ phải kiểm tra khi triển khai.

## Câu hỏi

**1. Chọn một.** Nhóm tải lại cùng brand guide ở nhiều chat. Cách tổ chức phù hợp?

A. Chỉ rút ngắn tên file.

B. Bỏ guide khỏi mọi chat.

C. Đưa tài liệu vào knowledge của project và dùng instructions phù hợp.

D. Chỉ viết mục đích ở tên tài khoản.

**2. Chọn một.** Muốn mọi chat trong project dùng một mẫu phản hồi. Nên đặt ở đâu?

A. Project instructions.

B. Chỉ description cho người xem.

C. Chỉ một file không bao giờ tham chiếu.

D. Chỉ tên người dùng.

**3. Chọn một.** Tài liệu cũ vẫn được dùng trả lời. Biện pháp trực tiếp?

A. Thêm mọi người quyền sửa bất kể cần.

B. Rà soát/cập nhật knowledge và phân biệt phiên bản.

C. Chỉ yêu cầu model tự tin hơn.

D. Không cần quản lý nguồn.

## Đáp án

1. **C.** C tái sử dụng nguồn và quy tắc; A không chia sẻ context, B bỏ nguồn, D sai nơi.

2. **A.** A là bề mặt hướng dẫn; B không thay instructions, C và D không xác định hành vi.

3. **B.** B sửa dữ liệu tham chiếu; A không tự cập nhật, C không sửa nguồn, D giữ lỗi.
