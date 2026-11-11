# Deploy trên Vercel

Repository dùng `vercel.json` để chạy Node.js Function tại `api/index.js`.
Root Directory phải là thư mục chứa `package.json`; không cần build frontend.
Các file bài học, giao diện và font được đóng gói cùng Function. Thư mục
`.vercel-public` trống để tránh công khai toàn bộ nội dung repository dưới dạng static.

Trên Vercel, có thể đọc bài, làm câu hỏi và lưu tiến độ trong trình duyệt.
Gia sư dùng Codex CLI chỉ chạy local. Đồng bộ Turso cá nhân cũng chỉ chạy local:
ứng dụng chưa có đăng nhập để bảo vệ hồ sơ đồng bộ khi mở ra Internet.
Không đưa dữ liệu đăng nhập Codex hay `.env` lên repository.

Chạy `npm run study` để dùng đầy đủ tính năng local.
