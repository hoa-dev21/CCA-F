# Mở rộng tập công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287749), sources/api-lessons/287749.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Khi đã có vòng lặp và bộ xử lý kết quả công cụ, thêm một công cụ gồm bốn phần: viết hàm, định nghĩa bản mô tả cấu trúc dữ liệu, đưa bản mô tả cấu trúc dữ liệu vào danh sách `tools`, thêm ánh xạ trong router.

Hai nửa tích hợp đều cần thiết. Bản mô tả cấu trúc dữ liệu giúp Claude biết khả năng; router giúp ứng dụng thực thi. Có bản mô tả cấu trúc dữ liệu nhưng không có route thì yêu cầu không chạy được. Có hàm nhưng không quảng bá bản mô tả cấu trúc dữ liệu thì Claude không được thông báo về công cụ đó trong yêu cầu.

Bài minh họa hệ thống nhắc việc gồm lấy thời gian, cộng khoảng thời gian và đặt nhắc việc. Một công cụ có thể phụ thuộc kết quả của công cụ trước; vì vậy không mặc định chạy mọi công cụ đồng thời. Ví dụ để dễ hình dung: phải xác định đúng ngày trước khi tạo nhắc việc ở ngày đó.

Giữ lịch sử đầy đủ để Claude dùng kết quả trung gian. Việc thêm công cụ không đòi hỏi viết một nhánh hội thoại riêng cho mọi chuỗi thao tác nếu vòng lặp chung đã xử lý đúng blocks và kết quả.

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

## Đối chiếu Bedrock: Adding multiple các công cụ

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276761) và đối chiếu khái niệm với bài chung. Converse thêm schemas và router theo cùng nguyên tắc. Bài nói rõ set_reminder mẫu chỉ in output; nó chưa chứng minh có lời nhắc việc thật tồn tại trong lịch/backend. Muốn triển khai phải có tích hợp và kiểm chứng trạng thái thực. Nguồn: sources/bedrock-lessons/276761.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Using multiple tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289185), sources/vertex-lessons/289185.json. Thêm công cụ bằng bản mô tả cấu trúc dữ liệu+dispatcher+implementation. set_reminder được bài xác nhận là placeholder print, không đặt lời nhắc việc hệ thống. Chuỗi công cụ phụ thuộc kết quả trước không thể chạy song song mù quáng. Dùng chung câu hỏi khái niệm.
