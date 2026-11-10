# Getting an API key

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/296766), sources/api-lessons/296766.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Khóa API là thông tin bí mật dùng khi ứng dụng truy cập dịch vụ theo cơ chế trong bài. Bài hướng dẫn tạo khóa trên trang quản lý, chọn không gian làm việc (workspace), đặt tên và giữ giá trị khóa để dùng cho bài thực hành tiếp theo.

Tên khóa giúp bạn nhớ nó phục vụ mục đích gì. Đặt tên “course” không tự giới hạn quyền hoặc bảo vệ khóa; vẫn cần cấu hình quyền và nơi lưu phù hợp.

Không đưa giá trị khóa vào kho mã nguồn, câu hỏi luyện tập hoặc tài liệu chia sẻ. Bạn không cần cung cấp khóa thật cho trợ giảng để học khái niệm hay làm câu hỏi của bài.

Giao diện quản lý và các lựa chọn xác thực có thể thay đổi. Khi thực hành, dựa vào hướng dẫn chính thức của môi trường đang dùng. Đây là bước chuẩn bị thực hành, không phải nội dung ưu tiên của đề cương Architect; việc đọc bản tóm tắt cũng chưa tạo khóa thay bạn.

## Câu hỏi

**1. Chọn một.** Có cần gửi API key thật cho trợ giảng để học bài không?

A. Có, luôn cần.

B. Có, phải chép vào bài test.

C. Có, phải đăng công khai.

D. Không; bài giảng và câu hỏi không cần secret thực.

**2. Chọn một.** Tên khóa “course” có tự bảo đảm quyền và an toàn không?

A. Không; vẫn cần scope/lưu trữ phù hợp.

B. Có, tên đủ ngăn mọi lộ lọt.

C. Có, không cần bảo mật.

D. Có, thay token bằng tên là được.

**3. Chọn một.** Khi UI console khác video, nên dựa vào gì để thực hành?

A. Đoán vị trí cũ rồi xóa tùy tiện.

B. Tài liệu hiện hành và quyền của môi trường đang dùng.

C. Chỉ tiêu đề video.

D. Không cần xác minh gì.

## Đáp án

1. **D.** D giữ dữ liệu đúng nhu cầu; A, B, C truyền secret không cần thiết.

2. **A.** A phân biệt nhãn và kiểm soát; B, C, D suy rộng chức năng tên.

3. **B.** B kiểm tra quy trình thực; A có thể tác động sai, C thiếu hướng dẫn, D bỏ xác minh.
