# Accessing the API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287726), sources/api-lessons/287726.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học

Luồng ứng dụng trong bài gồm client gửi yêu cầu tới server, server gọi API, nhận phản hồi rồi trả nội dung cho client. Hệ thống xử lý phía máy chủ giữ secret thay vì nhúng API key lâu dài vào mã giao diện người dùng công khai.

Phản hồi có nội dung, usage và stop reason. Cần đọc trạng thái kết thúc để phân biệt hoàn tất, giới hạn đầu ra và các bước xử lý tiếp; chỉ thấy text chưa chứng minh tác vụ thành công.

Mô tả token/embedding nội bộ trong video là giản lược để làm quen, không phải đặc tả đầy đủ kiến trúc mô hình. Danh sách SDK và mô hình minh họa thay đổi theo thời điểm. Authentication/account management nằm ngoài trọng tâm Exam Guide đã tải.

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

Nguồn [Accessing the API](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289151), sources/vertex-lessons/289151.json. Yêu cầu đi qua hệ thống xử lý phía máy chủ và Vertex rồi trả response/usage/stop reason. Cụm API Key trong bài lifecycle không nên được chép thành yêu cầu dùng Anthropic API key cho Vertex: bài setup307525 và request289155 sử dụng thông tin xác thực Google/ADC cùng project/region. Không để credential bí mật trong giao diện người dùng.
