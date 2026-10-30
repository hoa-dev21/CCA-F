# Claude Architecture — Ôn tập và gia sư local

Hai lựa chọn trên web: **Học từ đầu** và **Ôn nhanh**. Xem [lộ trình học](LO_TRINH_HOC.md). Dùng lộ trình trên web để học tuần tự; danh mục file dùng để tra cứu.

Web học tiếng Việt với 142 bài, 426 câu luyện tập, theo dõi tiến độ và gia sư theo ngữ cảnh bài học.

## Chạy trên máy

Cài Node.js, mở terminal tại thư mục dự án rồi chạy:

```powershell
npm install
npm run study
```

Trên Windows có thể nhấp đúp `Mo-Trang-On-Tap.cmd`. Trang học mở tại http://127.0.0.1:43130. Giữ terminal chạy khi học.

## Hỏi gia sư

- Chat trong web qua Codex CLI đăng nhập bằng ChatGPT: mở `Dang-Nhap-Gia-Su.cmd`, đăng nhập rồi bấm ↻ trong khung gia sư. Không cần API key riêng; vẫn cần Internet và chịu giới hạn tài khoản.
- Hỏi trợ lý trong cuộc trò chuyện đang dùng: bấm nút sao chép ngữ cảnh trong web rồi dán vào cuộc trò chuyện đó.

Chat trong web là một phiên riêng, không tự kế thừa lịch sử của cuộc trò chuyện đã tạo tài liệu. Bài học và chấm câu hỏi chạy local; câu hỏi gia sư và ngữ cảnh bài được gửi tới OpenAI khi dùng chat.

Xem [hướng dẫn web](WEB_LOCAL.md), [lộ trình học](ON_TAP_NHANH.md), [danh mục bài](lessons/README.md) và [đối chiếu nội dung](BLUEPRINT_AUDIT.md).

## Kiểm tra

```powershell
npm run study:test
```

Các script `build-*`, `map-*`, `write-*` và `audit-*` phục vụ biên soạn, đối chiếu và kiểm tra tài liệu. Thư mục `sources` lưu dữ liệu nguồn và các bảng ánh xạ; tham số ký truy cập media được làm sạch trước khi đưa lên GitHub. Hồ sơ trình duyệt, dữ liệu đăng nhập, cache và tiến trình học cá nhân không nằm trong repository.

Đây là bộ tài liệu luyện tập, không phải đề thi thật hoặc sản phẩm chính thức của Anthropic.
