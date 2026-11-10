# Mở rộng tập công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287749), sources/api-lessons/287749.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi đã có vòng xử lý công cụ dùng chung, thêm một công cụ mới cần bốn việc:

1. Viết hàm thực hiện thao tác.
2. Viết bản mô tả công cụ và cấu trúc đầu vào (schema).
3. Đưa bản mô tả vào danh sách `tools` gửi cho Claude.
4. Thêm ánh xạ từ tên công cụ đến hàm trong bộ điều phối (router).

Hai phía đều phải được kết nối. Nếu có mô tả nhưng router không nhận ra tên, ứng dụng không chạy được yêu cầu của Claude. Nếu chỉ có hàm trong mã mà không gửi định nghĩa trong `tools`, Claude chưa được thông báo rằng công cụ đó có thể sử dụng.

Ví dụ của bài là hệ thống nhắc việc có công cụ lấy thời gian, tính thời điểm và tạo lời nhắc. Muốn nhắc vào một ngày được tính từ hôm nay, phải lấy kết quả tính ngày trước rồi mới tạo lời nhắc. Không thể mặc định mọi công cụ đều chạy đồng thời.

Giữ đầy đủ lịch sử và kết quả trung gian để Claude biết đã làm đến đâu. Nếu vòng xử lý chung đã quản lý đúng các khối nội dung và kết quả, bạn không cần viết riêng một nhánh hội thoại cho mọi chuỗi công cụ có thể xuất hiện.

## Câu hỏi

**1. Chọn một.** Claude yêu cầu công cụ mới nhưng router báo không nhận diện. Thiếu phần nào?

A. Ánh xạ tên công cụ sang hàm thực thi.

B. Thêm lời chào.

C. Độ dài phản hồi.

D. Tên người dùng.

**2. Chọn một.** Hàm và router đã có, nhưng công cụ không được truyền trong yêu cầu. Hạn chế trực tiếp?

A. Mọi công cụ khác đều ngừng hoạt động.

B. Claude chưa được cung cấp định nghĩa công cụ mới để sử dụng.

C. Lịch sử tự mất.

D. Hàm tự được quảng bá qua tên file.

**3. Chọn một.** Công cụ tạo nhắc việc cần ngày được tính từ công cụ khác. Thực thi nào phù hợp?

A. Chạy cả hai với ngày đoán trước.

B. Tạo nhắc việc rồi tính ngày sau.

C. Lấy kết quả tính ngày trước, rồi dùng nó để tạo nhắc việc.

D. Bỏ kết quả trung gian.

## Đáp án

1. **A.** B, C, D không triển khai route còn thiếu.
2. **B.** A và C không suy ra từ dữ kiện; D giả định cơ chế tự quảng bá không có.
3. **C.** A đoán tham số; B đảo phụ thuộc; D mất dữ liệu đầu vào cần thiết.

## Đối chiếu Bedrock: thêm nhiều công cụ

Converse thêm schema và ánh xạ tên công cụ tới hàm theo cùng nguyên tắc. Trong bài, `set_reminder` chỉ in nội dung, chưa tạo lời nhắc thật trong lịch hoặc hệ thống phía sau. Muốn dùng thực tế phải tích hợp và kiểm tra trạng thái sau thao tác. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276761). Bản lưu: `sources/bedrock-lessons/276761.json`.

## Đối chiếu Vertex

Thêm công cụ cần bản mô tả, bộ điều phối và mã thực thi. Bài xác nhận `set_reminder` chỉ là hàm tạm để in kết quả, không tạo lời nhắc hệ thống. Các công cụ phụ thuộc kết quả trước phải chạy đúng thứ tự, không tự động chạy song song cả nhóm. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Using multiple tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289185). Bản lưu: `sources/vertex-lessons/289185.json`.
