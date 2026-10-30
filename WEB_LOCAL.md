# Học trên web local

Nhấp đúp **Mo-Trang-On-Tap.cmd**. Hoặc mở PowerShell tại thư mục dự án và chạy:

```powershell
node study-server.cjs --open
```

Trang mở ở **http://127.0.0.1:43130**. Giữ terminal chạy khi học; nhấn Ctrl+C để tắt server. Sau khi khởi động lại máy, mở lại bằng cùng cách.

Nếu chuyển sang máy khác, cần Node.js và chạy `npm.cmd install` trong thư mục dự án trước.

## Bắt đầu học

Trang mở bài EXAM14 trước. Đọc **Bài giảng**, chọn **Đã hiểu, làm bài tập**, chọn đáp án rồi bấm **Kiểm tra đáp án**. Với câu chọn hai, chọn đủ hai đáp án trước khi kiểm tra.

Tiến độ đọc, kết quả và hội thoại được lưu trong trình duyệt trên máy bạn. **Ôn câu sai** giúp xem lại điểm còn vướng; **Luyện10câu** chọn ngẫu nhiên từ18bài trọng tâm. Đây là luyện tập theo tài liệu, không phải đề thi thật.

## Hỏi AI bằng tài khoản đang dùng

Web có hai cách hỏi:

1. **Chat trong web qua Codex CLI.** Dùng tài khoản ChatGPT, không yêu cầu API key riêng. Nhấp đúp **Dang-Nhap-Gia-Su.cmd** hoặc mở PowerShell và chạy `codex login`, đăng nhập bằng ChatGPT, sau đó bấm nút kết nối lại ở khung gia sư. Web tự tìm Codex trong PATH hoặc bản CLI đi kèm ứng dụng trên Windows. Nếu đã đăng nhập đúng tài khoản, web có thể dùng phiên đó. Web không dùng chế độ API key.
2. **Hỏi trong cuộc trò chuyện hiện tại.** Gõ câu hỏi vào khung gia sư rồi bấm **Sao chép để hỏi trong cuộc trò chuyện này**. Dán vào cuộc trò chuyện đang mở với trợ lý. Bản sao kèm bài đang học và câu hỏi, không kèm đáp án tham chiếu.

Chat trên web là một phiên Codex riêng, không tự điều khiển hoặc đồng bộ lịch sử cuộc trò chuyện đã tạo bộ tài liệu. Câu hỏi được gửi kèm ngữ cảnh bài. Chat vẫn cần Internet, gửi nội dung câu hỏi/bài học tới OpenAI và chịu giới hạn của tài khoản; phần đọc bài/chấm câu hỏi chạy local.

Tài liệu chính thức: [Đăng nhập Codex](https://learn.chatgpt.com/docs/auth), [Codex App Server](https://learn.chatgpt.com/docs/app-server).

## Khi chat chưa kết nối

- Chạy server trong PowerShell trên máy bạn, không chỉ trong môi trường kiểm tra của trợ lý.
- Chạy `codex --version` để kiểm tra CLI, rồi `codex login` nếu chưa dùng đăng nhập ChatGPT.
- Bấm nút ↻ ở dòng kết nối để kiểm tra lại. Không cần nhập mật khẩu hoặc token vào trang học.
- Dùng nút sao chép để hỏi ngay trong cuộc trò chuyện hiện tại nếu chưa muốn cấu hình CLI.

## Dữ liệu học

Các bài được đọc từ thư mục `lessons`; không cần nhập lại nội dung. Server chỉ lắng nghe trên loopback, không công khai lên Internet. Khung chat dùng tiến trình Codex riêng với sandbox read-only; không trao quyền sửa bộ bài cho gia sư.

Đổi cổng nếu cần bằng biến `STUDY_PORT`. Có thể chỉ rõ đường dẫn Codex bằng `STUDY_CODEX_BIN` khi CLI không nằm trong PATH. Không sửa các biến HOME hoặc CODEX_HOME.
