# Project overview — Thiết kế hệ thống nhắc việc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287751), sources/api-lessons/287751.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Tóm tắt

Bài dùng tác vụ nhắc việc để chỉ ra khoảng cách giữa câu trả lời và hành động thật. Cần ba khả năng: lấy thời gian hiện tại, tính mốc thời gian và ghi nhắc việc vào hệ thống.

Model có thể diễn đạt một lời hứa, nhưng lời hứa không tạo bản ghi. Nếu ngày tính toán cần dữ liệu thời gian hiện tại, kết quả bước trước phải được dùng cho bước sau. Tách các khả năng có hợp đồng rõ giúp phối hợp và kiểm tra từng phần.

Ví dụ tự biên soạn: khách muốn nhắc sau một số ngày; hệ thống cần mốc chính xác và xác nhận thao tác tạo reminder. Quy ước timezone/ngày mơ hồ là điều cần làm rõ theo hợp đồng ứng dụng, không mặc định model tự có mọi trạng thái môi trường.

## Câu hỏi

**1. Chọn một.** Claude trả “tôi sẽ nhắc bạn” nhưng chưa gọi backend. Đã hoàn tất chưa?

A. Rồi, vì lời hứa rõ.

B. Chưa; cần thực thi và xác nhận nhắc việc trong hệ thống.

C. Rồi, nếu văn phong tự tin.

D. Rồi, nếu đã chọn ngày bằng suy đoán.

**2. Chọn một.** Tại sao dùng công cụ tính thời gian trong ví dụ?

A. Để không bao giờ cần dữ liệu ngày gốc.

B. Để thay mọi quyền thực thi.

C. Cung cấp phép tính chuyên biệt đáng tin hơn việc chỉ dựa câu trả lời tự do.

D. Để tự động xóa lịch sử.

**3. Chọn một.** Bước tạo reminder phụ thuộc mốc tính trước. Luồng nào đúng?

A. Nhận kết quả tính rồi dùng mốc đó để tạo nhắc việc.

B. Tạo trước với ngày bất kỳ.

C. Bỏ kết quả tính.

D. Chỉ thêm lời giải thích.

## Đáp án

1. **B.** B phân biệt lời nói với hành động; A và C không có trạng thái thật, D thiếu căn cứ.

2. **C.** C khắc phục giới hạn cụ thể; A bỏ đầu vào cần thiết, B sai vai trò, D không phải mục tiêu.

3. **A.** A giữ phụ thuộc; B đoán, C mất dữ liệu, D không thực thi.

## Đối chiếu Vertex

Đã đọc [Project overview](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289175), sources/vertex-lessons/289175.json. Dự án chia lấy thời gian, cộng thời lượng và tạo reminder. Phải xét timezone/độ mơ hồ; lời giới thiệu nói scheduled notification nhưng implementation ở289185 chỉ là placeholder print. Không khẳng định đã hẹn nhắc thật. Dùng chung câu hỏi khái niệm.
