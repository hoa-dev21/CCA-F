# Đồng bộ tiến độ qua Turso

Ứng dụng đồng bộ bài đã đọc, đáp án (kể cả làm lại), lộ trình và vị trí bài học giữa các bản ứng dụng local. Nội dung Markdown vẫn nằm trong repository; lịch sử gia sư và đăng nhập Codex chỉ nằm trên thiết bị. Ứng dụng hiện chưa có ghi chú cá nhân.

## Cấu hình trên mỗi máy

1. Trong Turso, tạo/chọn database **libSQL** và lấy database URL cùng database auth token có quyền ghi.
2. Sao chép `.env.example` thành `.env` ở thư mục gốc và điền URL/token thật. Dùng cùng `STUDY_SYNC_PROFILE` trên các máy của cùng người học. Profile khác tách dữ liệu, nhưng không phải tài khoản hay cơ chế phân quyền.
3. Chạy `npm install`, sau đó `npm run study`. Khởi động lại máy chủ sau khi sửa `.env`.
4. Mở trang học. Bảng dữ liệu `study_sync_v1` tự tạo trong lần đồng bộ đầu. Góc dưới thanh bên hiển thị trạng thái và nút **Đồng bộ tiến độ**.

Yêu cầu Node.js 22.16+ hoặc 24+ để đọc `.env`. Token chỉ được đọc ở máy chủ Node.js; không đưa vào JavaScript của trình duyệt hay commit vào Git. `.env` đã được bỏ qua bởi Git.

Mỗi máy cần có mã ứng dụng và bài học (cùng phiên bản repository), cùng kết nối Internet tới Turso. Cấu hình này không tạo một website công khai để mở trực tiếp trên điện thoại. Muốn học trên điện thoại không cài Node.js cần triển khai web cùng cơ chế đăng nhập riêng; máy chủ gia sư hiện chỉ lắng nghe localhost.

## Cách đồng bộ

- Đồng bộ khi mở trang, sau thay đổi khoảng 1,5 giây, khi trở lại trang/kết nối mạng và mỗi 2 phút khi trang đang mở. Chỉ các mục chưa được xác nhận mới được gửi lên; mỗi lần nhận toàn bộ tiến độ của profile.
- Mất mạng hoặc token hết hạn: vẫn học và lưu trên trình duyệt, thử lại tự động hoặc bấm nút đồng bộ. Chờ trạng thái **Đã đồng bộ** trước khi đóng trang/chuyển thiết bị.
- Thay đổi ở hai bài/câu khác nhau được hợp nhất. Nếu cùng sửa một mục, thay đổi có mốc thời gian mới hơn thắng; khi bằng thời gian dùng mã thay đổi để chọn nhất quán. Đặt đồng hồ thiết bị đúng giờ.
- Dữ liệu cũ chưa từng đồng bộ được nhập với độ ưu tiên thấp để không ghi đè thay đổi mới trên đám mây. Thao tác làm lại câu hỏi được lưu bằng dấu xóa để thiết bị cũ không khôi phục đáp án đã xóa.
- Tiến độ cập nhật ngay khi đồng bộ; bài đang mở được giữ ổn định. Vị trí/lộ trình từ thiết bị khác được khôi phục ở lần mở trang kế tiếp (URL có `#lesson=` được ưu tiên).

Ứng dụng tránh gửi lịch sử chat và chỉ gửi mục đã thay đổi để giảm dung lượng ghi. Kiểm tra mức sử dụng thực tế trên dashboard Turso; ứng dụng không tự nâng gói hay mua tài nguyên.

## Kiểm tra

Chạy `npm run study:test`. Các kiểm thử dùng SQLite trong bộ nhớ qua chính thư viện libSQL, kiểm tra hợp nhất hai thiết bị, xóa ngoại tuyến, gửi lại dữ liệu cũ và tách profile. Việc xác nhận kết nối tới database Turso thật cần `.env` hợp lệ.
