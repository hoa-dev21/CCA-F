# Luồng qua Bedrock

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276716), sources/bedrock-lessons/276716.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Trong ví dụ trò chuyện trên web, yêu cầu đi qua bốn chặng: người dùng nhập câu hỏi trên trình duyệt; máy chủ ứng dụng dùng Bedrock client để gọi mô hình; Bedrock trả tin nhắn của trợ lý; máy chủ chuyển kết quả về giao diện.

Dùng nhà cung cấp đám mây thay đổi cách kết nối tới mô hình. Ứng dụng vẫn chịu trách nhiệm gửi dữ liệu phù hợp, quản lý lịch sử hội thoại và xử lý phản hồi.

Ví dụ: Giao diện không hiện câu trả lời. Cần xác định câu hỏi đã tới máy chủ chưa, lời gọi Bedrock có thành công không và mã xử lý có đọc đúng phản hồi không. Chỉ thay prompt có thể không giải quyết lỗi nằm ở một chặng khác.

Gửi yêu cầu thành công cũng chưa chứng minh câu trả lời đúng nhiệm vụ. Sơ đồ này chỉ mô tả luồng tổng thể, không đủ để kết luận về quyền truy cập, vùng triển khai hoặc chính sách lưu dữ liệu. Các chi tiết đó cần tài liệu và cấu hình của môi trường thực tế.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** UI không hiện trả lời; log backend cho thấy provider đã trả HTTP thành công nhưng chưa biết adapter đọc gì. Bước điều tra trực tiếp nhất?

A. Viết lại system prompt để mô hình trả lời ngắn hơn.

B. Kiểm tra payload qua adapter backend đến UI.

C. Đổi model mặc định để tránh lỗi hiển thị.

D. Tăng retry ở trình duyệt bất kể backend đã có kết quả.

**Câu 2 — Chọn hai.** Ứng dụng chuyển từ API trực tiếp sang Bedrock. Hai trách nhiệm nào vẫn thuộc ứng dụng?

A. Quản lý lịch sử hội thoại và gửi ngữ cảnh cần thiết.

B. Mặc định provider giữ đầy đủ mọi hội thoại theo ID người dùng.

C. Xử lý đúng phản hồi và chuyển dữ liệu phù hợp về giao diện.

D. Để trình duyệt suy từ tên model ra cấu trúc phản hồi.

**Câu 3 — Chọn một.** Backend ghi “request succeeded”; người dùng nói câu trả lời thiếu một điều kiện quan trọng. Cách hiểu đúng?

A. Truyền tải thành công chưa chứng minh chất lượng tác vụ.

B. Provider trả thành công nên yêu cầu người dùng chắc chắn đã được đáp ứng.

C. Đây luôn là lỗi trình duyệt vì backend đã hoàn tất.

D. Cần tăng quyền tài khoản cloud để mô hình hiểu thêm điều kiện.

**Câu 4 — Chọn một.** Một sơ đồ có browser → backend → Bedrock → backend → browser. Nhóm dùng sơ đồ để cam kết dữ liệu không bao giờ được lưu ở provider. Kết luận nào đúng?

A. Dùng sơ đồ đã được nhóm backend duyệt làm bằng chứng cho toàn bộ vòng đời dữ liệu.

B. Coi backend trung gian là nơi duy nhất lưu dữ liệu vì browser chỉ gọi backend.

C. Dùng bằng chứng mã hóa đường truyền để xác nhận dữ liệu không được lưu ở provider.

D. Đối chiếu chính sách và cấu hình lưu trữ thực tế.

**Câu 5 — Chọn hai.** Để phân biệt lỗi browser, backend và provider, hai thông tin quan sát nào hữu ích nhất?

A. Trạng thái và định danh liên kết yêu cầu qua từng chặng.

B. Chỉ thời lượng tổng cùng câu “thất bại”.

C. Dạng dữ liệu vào/ra được kiểm tra tại ranh giới adapter mà không lộ bí mật.

D. Chỉ confidence do mô hình tự chấm.

## Đáp án và giải thích

1. **B.** B theo chặng còn chưa xác minh trong luồng. A/C chưa có bằng chứng lỗi ở sinh nội dung. D có thể tạo yêu cầu lặp mà không sửa adapter/hiển thị.

2. **A, C.** A và C là trách nhiệm điều phối dữ liệu của ứng dụng. B không được suy ra từ đổi provider. D cấu trúc phải theo hợp đồng, không đoán từ tên model.

3. **A.** A phân biệt vận hành và chất lượng ngữ nghĩa. B suy quá tín hiệu HTTP. C khoanh lỗi chưa có bằng chứng. D quyền không trực tiếp sửa thiếu ngữ cảnh hoặc suy luận.

4. **D.** D cần chính sách và cấu hình có thẩm quyền về lưu trữ. A sơ đồ luồng giản lược không mô tả đầy đủ retention. B nơi browser gọi không xác định nơi provider lưu. C mã hóa khi truyền khác việc giữ dữ liệu sau xử lý.

5. **A, C.** A nối các chặng, C xác định chỗ sai hợp đồng dữ liệu. B không khoanh được tầng lỗi. D không đo hoạt động truyền tải hay parse dữ liệu.
