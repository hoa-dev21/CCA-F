# Điều kiện dừng và chia nhiệm vụ thích ứng

Nguồn bổ trợ: Exam Guide CCAR-F v1.0 July2026, mục1.1,1.5,1.6, trang PDF5,7–8. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Agent loop dùng `stop_reason` để phân nhánh: `tool_use` yêu cầu thực thi tool và gửi kết quả lại; `end_turn` kết thúc lượt. Text “đã xong” hay số vòng đã chạy không thay điều kiện giao thức. Giới hạn tài nguyên giúp chặn vòng lặp mất kiểm soát nhưng không chứng minh mục tiêu đã đạt.

Chaining phù hợp quy trình có các bước dự đoán trước. Với review lớn, dùng lượt cục bộ từng file rồi lượt tích hợp liên file để giữ độ sâu và bắt lỗi hợp đồng. Điều tra mở cần kế hoạch thích ứng: lập bản đồ hệ thống, tìm vùng có tác động cao, giao các nhiệm vụ ưu tiên rồi điều chỉnh khi phát hiện phụ thuộc mới. Không bắt đầu bằng hàng trăm tác vụ “viết test cho mỗi file” trước khi hiểu hành vi quan trọng.

Hook bảo đảm quy tắc ở ranh giới thực thi phù hợp: trước tool để chặn hành động vi phạm; sau tool để chuẩn hóa kết quả. Ví dụ timestamp Unix/ISO và numeric status phải được hiểu theo hợp đồng nguồn, không chỉ đổi tên field cho giống nhau. Chuẩn hóa không được xóa khác biệt quan trọng hay làm lỗi thành kết quả thành công.

## Câu hỏi

**1. Chọn một.** Assistant nói “tôi đã hoàn thành” trong text nhưng `stop_reason="tool_use"` và có yêu cầu đọc cấu hình. Host nên làm gì?

A. Dừng và đánh dấu thành công theo text.

B. Thực thi yêu cầu tool hợp lệ, trả kết quả đúng ID và tiếp tục vòng lặp.

C. Xóa tool request rồi chỉ lưu text.

D. Dừng thành công vì đã đủ năm vòng.

**2. Chọn một.** Yêu cầu “bổ sung test toàn diện cho codebase cũ” chưa có sơ đồ kiến trúc. Cách chia việc phù hợp nhất?

A. Giao viết test cho mọi file ngay, không cần tìm hiểu hệ thống.

B. Chỉ kiểm tra file đầu tiên rồi kết luận toàn repo.

C. Lập bản đồ, chọn hành vi/rủi ro quan trọng, ưu tiên test và điều chỉnh kế hoạch theo phụ thuộc mới.

D. Giữ cố định kế hoạch đầu dù phát hiện luồng dữ liệu khác.

**3. Chọn hai.** ToolA trả timestamp Unix, toolB trả ISO8601; chính sách chặn hoàn tiền vượt500USD. Chọn thiết kế đúng ranh giới thực thi.

A. Chuẩn hóa thời gian sau tool theo contract và giữ nguồn/giá trị gốc.

B. Chỉ nhắc model không hoàn tiền vượt ngưỡng, vẫn cho executor thực hiện mọi yêu cầu.

C. Sau khi chuyển tiền xong, dùng PostToolUse để coi như đã chặn.

D. Chặn yêu cầu vi phạm trước khi thực thi và trả đường chuyển cấp phù hợp.

## Đáp án

1. **B.** A nhầm text với điều kiện giao thức; C làm thiếu lịch sử; D dùng số vòng thay bằng chứng hoàn tất.

2. **C.** A phân việc trước khi hiểu tác động; B không đủ bao phủ; D làm mất khả năng thích ứng mà điều tra mở cần.

3. **A, D.** B chỉ có compliance xác suất; C xảy ra sau tác động nên không tạo gate ngăn giao dịch.
