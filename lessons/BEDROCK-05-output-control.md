# Controlling model output — Prefill và dấu dừng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276723), sources/bedrock-lessons/276723.json. Ví dụ theo phiên bản của khóa; câu hỏi tự biên soạn.

## Tóm tắt

Assistant prefill trong ví dụ cung cấp phần mở đầu để model tiếp tục. Kết quả trả về không nhất thiết lặp phần đã điền; ứng dụng cần ghép đúng khi hiển thị hoặc xử lý. Stop sequence kết thúc khi gặp marker được chỉ định; marker không phải bằng chứng nội dung đã hoàn thành đúng yêu cầu.

Prefill có thể làm lệch hướng lập luận theo phần mở đầu được chọn. Đừng coi việc model tiếp tục một kết luận có sẵn là xác nhận khách quan kết luận đó. Dấu dừng quá rộng có thể cắt nhầm dữ liệu quan trọng.

Converse trong mẫu dùng inferenceConfig/stopSequences. Khả năng prefill và cấu hình phối hợp tùy model/provider; không coi ví dụ cũ là hỗ trợ hiện hành đã xác minh. Với structured extraction, xem [schema/tool_choice](EXAM-05-structured-output.md) và validation thay vì chỉ cắt Markdown.

## Câu hỏi

**1. Chọn một.** Prefill bắt đầu bằng một quan điểm, model tiếp tục bảo vệ nó. Có thể kết luận gì?

A. Quan điểm chắc chắn đúng.

B. Model được định hướng bởi đầu vào; cần đánh giá bằng chứng độc lập.

C. Mọi quan điểm khác sai.

D. Không cần xem nguồn.

**2. Chọn một.** Stop marker cắt giữa JSON. Bước phù hợp?

A. Coi là hoàn tất vì đã dừng.

B. Đổi tên model mà không xem input.

C. Kiểm tra marker/cấu hình, trạng thái kết thúc và validation đầu ra.

D. Gán parse thành công cố định.

**3. Chọn một.** Khi dùng kỹ thuật này ở model khác, cần làm gì?

A. Kiểm tra hỗ trợ và hợp đồng API/SDK hiện tại trước khi chạy.

B. Giả định mọi version giống nhau.

C. Bỏ mọi lỗi tương thích.

D. Chỉ sửa giọng điệu.

## Đáp án

1. **B.** A và C nhầm định hướng với bằng chứng; D bỏ kiểm chứng.
2. **C.** A nhầm dừng với đạt; B chưa chẩn đoán marker; D tạo kết quả giả.
3. **A.** B suy rộng phiên bản; C che lỗi; D không kiểm tra khả năng.

## Đối chiếu Vertex

Đã đọc [Controlling model output](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289160), sources/vertex-lessons/289160.json. Ví dụ Vertex dùng assistant message prefill và stop_sequences ở wrapper Messages, khác cấu trúc Converse. Prefix không tự lặp vào phần text mới; stop marker chặn sinh tiếp nhưng có thể làm dữ liệu chưa hoàn chỉnh. Khả năng hỗ trợ phụ thuộc model. Dùng chung câu hỏi khái niệm.
