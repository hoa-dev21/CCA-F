# Accessing the API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287726), sources/api-lessons/287726.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Trong ứng dụng web của bài, giao diện người dùng gửi yêu cầu tới máy chủ ứng dụng. Máy chủ gọi API của mô hình, nhận phản hồi rồi trả kết quả cho giao diện. Phân biệt các chặng này giúp tìm đúng nơi xảy ra lỗi.

Khóa API bí mật được giữ ở phía máy chủ. Nếu nhúng khóa lâu dài vào mã giao diện công khai, người dùng có thể lấy khóa và sử dụng ngoài dự định của bạn.

Phản hồi từ API có nội dung, số liệu sử dụng (usage) và lý do dừng (stop reason). Cần đọc lý do dừng để biết mô hình đã kết thúc lượt, bị giới hạn đầu ra hay cần xử lý tiếp. Nếu dừng vì `max_tokens`, phải xem nội dung có bị cắt và quyết định cách tiếp tục phù hợp. Chỉ thấy văn bản chưa đủ để kết luận thành công.

Phần giải thích token và embedding trong video được đơn giản hóa để làm quen, không phải mô tả đầy đủ cấu trúc bên trong mô hình. Danh sách thư viện, mô hình và cách xác thực cần được đối chiếu khi thực hành; quản lý tài khoản không phải trọng tâm đề cương đã lưu.

## Câu hỏi

**1. Chọn một.** Ứng dụng web nhúng secret API key vào bundle giao diện người dùng. Vấn đề chính?

A. Người dùng có thể trích secret và dùng ngoài ý muốn.

B. Câu trả lời luôn dài hơn.

C. Mô hình không thể đọc text.

D. Không thể dùng JSON.

**2. Chọn một.** Tác vụ dừng vì max_tokens. Điều gì cần xử lý?

A. Luôn coi là hoàn tất đúng yêu cầu.

B. Kiểm tra đầu ra có bị cắt và quyết định phục hồi phù hợp.

C. Chỉ bỏ stop reason.

D. Chỉ in lời chào.

**3. Chọn một.** Muốn chẩn đoán lỗi giữa UI và mô hình nên làm gì?

A. Chỉ đổi tone prompt.

B. Chỉ tăng độ tự tin.

C. Phân biệt từng chặng client/server/API và quan sát phản hồi.

D. Bỏ log lỗi hoàn toàn.

## Đáp án

1. **A.** A là rủi ro secret; B, C, D không mô tả kiến trúc truy cập.

2. **B.** B dùng tín hiệu dừng; A suy rộng thành công, C mất trạng thái, D không phục hồi.

3. **C.** C xác định tầng lỗi; A và B không quan sát luồng, D mất bằng chứng.

## Đối chiếu Vertex

Yêu cầu đi qua máy chủ ứng dụng và Vertex rồi trả nội dung, số liệu sử dụng và lý do dừng. Cụm “API Key” trong bài tổng quan không có nghĩa phải dùng khóa Anthropic trực tiếp cho Vertex. Bài thiết lập 307525 và bài gọi API 289155 dùng thông tin xác thực Google/ADC cùng dự án, vùng. Không để thông tin xác thực bí mật trong mã giao diện.

Nguồn đối chiếu: [Accessing the API](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289151). Bản lưu: `sources/vertex-lessons/289151.json`.
