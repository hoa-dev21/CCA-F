# Thiết kế hệ thống nhắc việc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287751), sources/api-lessons/287751.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Ví dụ nhắc việc giúp phân biệt một câu trả lời với một hành động đã thực hiện. Để tạo lời nhắc, hệ thống cần lấy thời gian hiện tại, tính thời điểm cần nhắc và ghi lời nhắc vào nơi quản lý.

Claude nói “Tôi sẽ nhắc bạn” chưa tạo ra bản ghi nào. Ứng dụng phải thực hiện thao tác và kiểm tra kết quả trước khi xác nhận với người dùng.

Ví dụ: Người dùng muốn được nhắc sau ba ngày. Nếu cách tính cần mốc hiện tại, hệ thống phải lấy mốc đó trước, chuyển nó cho bước tính toán, rồi dùng thời điểm đã tính để tạo lời nhắc. Công cụ tính thời gian giúp thực hiện phép tính chuyên biệt thay vì chỉ dựa vào câu trả lời tự do của mô hình.

Các công cụ cần có đầu vào và kết quả rõ để phối hợp và kiểm tra từng bước. Những điểm như múi giờ hoặc cách hiểu một ngày mơ hồ cần được quy định hoặc hỏi lại theo yêu cầu ứng dụng; không nên mặc định mô hình tự biết mọi trạng thái môi trường.

## Câu hỏi

**1. Chọn một.** Claude trả “tôi sẽ nhắc bạn” nhưng chưa gọi hệ thống xử lý phía máy chủ. Đã hoàn tất chưa?

A. Rồi, vì lời hứa rõ.

B. Chưa; cần thực thi và xác nhận nhắc việc trong hệ thống.

C. Rồi, nếu văn phong tự tin.

D. Rồi, nếu đã chọn ngày bằng suy đoán.

**2. Chọn một.** Tại sao dùng công cụ tính thời gian trong ví dụ?

A. Để không bao giờ cần dữ liệu ngày gốc.

B. Để thay mọi quyền thực thi.

C. Cung cấp phép tính chuyên biệt đáng tin hơn việc chỉ dựa câu trả lời tự do.

D. Để tự động xóa lịch sử.

**3. Chọn một.** Bước tạo lời nhắc việc phụ thuộc mốc tính trước. Luồng nào đúng?

A. Nhận kết quả tính rồi dùng mốc đó để tạo nhắc việc.

B. Tạo trước với ngày bất kỳ.

C. Bỏ kết quả tính.

D. Chỉ thêm lời giải thích.

## Đáp án

1. **B.** B phân biệt lời nói với hành động; A và C không có trạng thái thật, D thiếu căn cứ.

2. **C.** C khắc phục giới hạn cụ thể; A bỏ đầu vào cần thiết, B sai vai trò, D không phải mục tiêu.

3. **A.** A giữ phụ thuộc; B đoán, C mất dữ liệu, D không thực thi.

## Đối chiếu Vertex

Dự án chia thành lấy thời gian, cộng khoảng thời gian và tạo lời nhắc; cần làm rõ múi giờ và các cách hiểu mơ hồ. Phần giới thiệu nói tới thông báo theo lịch, nhưng mã ở bài 289185 chỉ in kết quả để minh họa. Vì vậy chưa thể khẳng định lời nhắc thật đã được tạo. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project overview](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289175). Bản lưu: `sources/vertex-lessons/289175.json`.
