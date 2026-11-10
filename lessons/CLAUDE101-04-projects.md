# Introduction to projects

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383393), sources/claude101-lessons/383393.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Projects là nơi tổ chức các cuộc trò chuyện, tài liệu tham chiếu và hướng dẫn liên quan đến cùng một công việc. Cách này phù hợp khi bạn làm việc lâu dài với một nhóm tài liệu và không muốn cung cấp lại chúng trong mỗi cuộc trò chuyện.

Cần phân biệt ba phần:

- Mô tả dự án (description): giúp người xem hiểu dự án dùng để làm gì. Không nên mặc định phần này thay cho hướng dẫn gửi tới mô hình.
- Tài liệu kiến thức (knowledge): chứa thông tin để Claude tham khảo, chẳng hạn quy trình công ty hoặc hướng dẫn thương hiệu.
- Hướng dẫn dự án (instructions): quy định cách Claude trả lời, chẳng hạn dùng tiếng Việt và trình bày theo một mẫu nhất định.

Ví dụ: Nhóm truyền thông có thể lưu tài liệu thương hiệu vào knowledge, rồi đặt yêu cầu về giọng văn trong instructions. Khi tài liệu thay đổi, cần cập nhật và phân biệt phiên bản để tránh dùng thông tin cũ. Đặt tên tài liệu rõ ràng cũng giúp tìm đúng nguồn. Khi có nhiều dữ liệu, hệ thống có thể tìm phần liên quan thay vì đưa tất cả tài liệu vào cùng lúc.

Khi chia sẻ dự án, cấp quyền theo công việc người nhận cần làm. Người chỉ cần xem hoặc hỏi về tài liệu không nhất thiết cần quyền sửa. Chi tiết quyền và gói dịch vụ cần được kiểm tra khi triển khai.

## Câu hỏi

**1. Chọn một.** Nhóm tải lại cùng brand guide ở nhiều chat. Cách tổ chức phù hợp?

A. Chỉ rút ngắn tên file.

B. Bỏ guide khỏi mọi chat.

C. Đưa tài liệu vào knowledge của dự án và dùng instructions phù hợp.

D. Chỉ viết mục đích ở tên tài khoản.

**2. Chọn một.** Muốn mọi chat trong dự án dùng một mẫu phản hồi. Nên đặt ở đâu?

A. Dự án instructions.

B. Chỉ description cho người xem.

C. Chỉ một file không bao giờ tham chiếu.

D. Chỉ tên người dùng.

**3. Chọn một.** Tài liệu cũ vẫn được dùng trả lời. Biện pháp trực tiếp?

A. Thêm mọi người quyền sửa bất kể cần.

B. Rà soát/cập nhật knowledge và phân biệt phiên bản.

C. Chỉ yêu cầu mô hình tự tin hơn.

D. Không cần quản lý nguồn.

## Đáp án

1. **C.** C tái sử dụng nguồn và quy tắc; A không chia sẻ ngữ cảnh, B bỏ nguồn, D sai nơi.

2. **A.** A là bề mặt hướng dẫn; B không thay instructions, C và D không xác định hành vi.

3. **B.** B sửa dữ liệu tham chiếu; A không tự cập nhật, C không sửa nguồn, D giữ lỗi.
