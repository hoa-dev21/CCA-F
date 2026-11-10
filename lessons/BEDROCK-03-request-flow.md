# Luồng qua Bedrock

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276716), sources/bedrock-lessons/276716.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Trong ví dụ trò chuyện trên web, yêu cầu đi qua bốn chặng: người dùng nhập câu hỏi trên trình duyệt; máy chủ ứng dụng dùng Bedrock client để gọi mô hình; Bedrock trả tin nhắn của trợ lý; máy chủ chuyển kết quả về giao diện.

Dùng nhà cung cấp đám mây thay đổi cách kết nối tới mô hình. Ứng dụng vẫn chịu trách nhiệm gửi dữ liệu phù hợp, quản lý lịch sử hội thoại và xử lý phản hồi.

Ví dụ: Giao diện không hiện câu trả lời. Cần xác định câu hỏi đã tới máy chủ chưa, lời gọi Bedrock có thành công không và mã xử lý có đọc đúng phản hồi không. Chỉ thay prompt có thể không giải quyết lỗi nằm ở một chặng khác.

Gửi yêu cầu thành công cũng chưa chứng minh câu trả lời đúng nhiệm vụ. Sơ đồ này chỉ mô tả luồng tổng thể, không đủ để kết luận về quyền truy cập, vùng triển khai hoặc chính sách lưu dữ liệu. Các chi tiết đó cần tài liệu và cấu hình của môi trường thực tế.

## Câu hỏi

**1. Chọn một.** Trong mẫu web chat, thành phần nào gọi Bedrock client?

A. Chỉ CSS của trang.

B. Hệ thống xử lý phía máy chủ ứng dụng.

C. Tên mô hình tự gọi.

D. Chỉ file ảnh.

**2. Chọn một.** UI không hiện kết quả. Cần phân biệt điều gì để debug?

A. Chỉ giọng điệu.

B. Chỉ tiêu đề.

C. Từng chặng UI/backend/provider và cấu trúc phản hồi.

D. Không cần kết quả API.

**3. Chọn một.** Sơ đồ yêu cầu ngắn có đủ để khẳng định mọi chính sách lưu trữ dữ liệu không?

A. Chưa; cần tài liệu chính sách/cấu hình có thẩm quyền.

B. Đủ mọi trường hợp.

C. Đủ nếu dùng cloud lớn.

D. Đủ nếu API trả nhanh.

## Đáp án

1. **B.** B đúng luồng; A, C, D không thực hiện yêu cầu SDK trong mẫu.

2. **C.** C cô lập tầng lỗi; A, B không quan sát luồng, D bỏ bằng chứng.

3. **A.** A giới hạn suy luận; B, C, D không chứng minh retention.
