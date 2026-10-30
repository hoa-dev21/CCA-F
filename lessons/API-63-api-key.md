# Getting an API key

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/296766), sources/api-lessons/296766.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Tóm tắt

Bài hướng dẫn người học tạo khóa trong console, chọn workspace/tên và giữ secret để dùng ở bài request tiếp theo. Đây là bước chuẩn bị thực hành, không phải kiến thức cần ưu tiên cho Exam Guide Architect.

Bản tóm tắt không thực hiện tạo, xóa hay sao chép khóa thay người học. Giao diện console và lựa chọn xác thực có thể thay đổi; dùng hướng dẫn chính thức của môi trường thực tế khi cần.

Tên khóa giúp quản lý mục đích, không thay cho kiểm soát quyền và giữ bí mật. Không đặt giá trị secret trong repo, câu hỏi luyện tập hoặc tài liệu chia sẻ. Việc học khái niệm không yêu cầu bạn cung cấp secret cho trợ giảng.

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
