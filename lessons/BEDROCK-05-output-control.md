# Prefill và dấu dừng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276723), sources/bedrock-lessons/276723.json. Ví dụ theo phiên bản của khóa; câu hỏi tự biên soạn.

## Nội dung bài học


Assistant prefill là phần mở đầu câu trả lời được ứng dụng cung cấp sẵn để mô hình viết tiếp. Phản hồi mới không nhất thiết lặp lại phần đã điền, nên ứng dụng cần ghép đúng nếu muốn hiển thị hoặc xử lý toàn bộ câu trả lời.

Stop sequence là chuỗi đánh dấu yêu cầu dừng sinh nội dung khi gặp. Gặp dấu dừng chỉ cho biết điều kiện dừng đã xảy ra, chưa chứng minh nội dung đáp ứng đủ yêu cầu. Một dấu dừng quá rộng có thể cắt giữa dữ liệu quan trọng, chẳng hạn giữa một đoạn JSON.

Phần mở đầu cũng có thể định hướng câu trả lời. Nếu bạn viết sẵn một quan điểm rồi mô hình tiếp tục bảo vệ nó, đó chưa phải đánh giá độc lập rằng quan điểm ấy đúng. Cần xem bằng chứng riêng.

Mẫu Converse dùng `inferenceConfig` và `stopSequences`. Khả năng hỗ trợ prefill và cách phối hợp tùy mô hình, nhà cung cấp, phiên bản. Với việc trích xuất dữ liệu có cấu trúc, xem thêm [schema và tool_choice](EXAM-05-structured-output.md) cùng kiểm tra dữ liệu, thay vì chỉ cắt bỏ định dạng Markdown.

## Câu hỏi

**1. Chọn một.** Prefill bắt đầu bằng một quan điểm, mô hình tiếp tục bảo vệ nó. Có thể kết luận gì?

A. Quan điểm chắc chắn đúng.

B. Mô hình được định hướng bởi đầu vào; cần đánh giá bằng chứng độc lập.

C. Mọi quan điểm khác sai.

D. Không cần xem nguồn.

**2. Chọn một.** Stop marker cắt giữa JSON. Bước phù hợp?

A. Coi là hoàn tất vì đã dừng.

B. Đổi tên mô hình mà không xem input.

C. Kiểm tra marker/cấu hình, trạng thái kết thúc và validation đầu ra.

D. Gán parse thành công cố định.

**3. Chọn một.** Khi dùng kỹ thuật này ở mô hình khác, cần làm gì?

A. Kiểm tra hỗ trợ và hợp đồng API/SDK hiện tại trước khi chạy.

B. Giả định mọi version giống nhau.

C. Bỏ mọi lỗi tương thích.

D. Chỉ sửa giọng điệu.

## Đáp án

1. **B.** A và C nhầm định hướng với bằng chứng; D bỏ kiểm chứng.
2. **C.** A nhầm dừng với đạt; B chưa chẩn đoán marker; D tạo kết quả giả.
3. **A.** B suy rộng phiên bản; C che lỗi; D không kiểm tra khả năng.

## Đối chiếu Vertex

Mẫu Vertex dùng phần mở đầu tin nhắn assistant và `stop_sequences` trong hàm gọi Messages, khác cấu trúc Converse. Phần đã điền không tự lặp trong văn bản mới. Chuỗi dừng có thể cắt khi dữ liệu chưa hoàn chỉnh; khả năng hỗ trợ phụ thuộc mô hình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Controlling model output](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289160). Bản lưu: `sources/vertex-lessons/289160.json`.
