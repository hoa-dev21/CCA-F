# Deploy trên Vercel

Repository dùng `vercel.json` để chạy Node.js Function tại `api/index.js`.
Root Directory phải là thư mục chứa `package.json`; không cần build frontend.
`marked` được ghim ở bản 15.0.12 có CommonJS; bộ kiểm thử tắt `require(ESM)` để phát hiện lỗi tương thích runtime.
Các file bài học, giao diện và font được đóng gói cùng Function. Thư mục
`.vercel-public` trống để tránh công khai toàn bộ nội dung repository dưới dạng static.

Trên Vercel, có thể đọc bài, làm câu hỏi và lưu tiến độ trong trình duyệt.
Gia sư dùng Codex CLI chỉ chạy local. Để bật đồng bộ Turso, thêm các biến trong
Vercel → Settings → Environment Variables rồi redeploy:

- `TURSO_DATABASE_URL`: URL database libSQL.
- `TURSO_AUTH_TOKEN`: token database có quyền ghi.
- `STUDY_SYNC_PROFILE`: cùng giá trị với máy local (mặc định `personal`).

Mọi người truy cập deployment dùng chung profile này; profile không phải tài khoản đăng nhập.
Không đưa dữ liệu đăng nhập Codex hay `.env` lên repository.

Chạy `npm run study` để dùng đầy đủ tính năng local.
