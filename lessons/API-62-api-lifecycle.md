# Accessing the API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287726), sources/api-lessons/287726.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Trong ứng dụng web của bài, giao diện người dùng gửi yêu cầu tới máy chủ ứng dụng. Máy chủ gọi API của mô hình, nhận phản hồi rồi trả kết quả cho giao diện. Phân biệt các chặng này giúp tìm đúng nơi xảy ra lỗi.

Khóa API bí mật được giữ ở phía máy chủ. Nếu nhúng khóa lâu dài vào mã giao diện công khai, người dùng có thể lấy khóa và sử dụng ngoài dự định của bạn.

Phản hồi từ API có nội dung, số liệu sử dụng (usage) và lý do dừng (stop reason). Cần đọc lý do dừng để biết mô hình đã kết thúc lượt, bị giới hạn đầu ra hay cần xử lý tiếp. Nếu dừng vì `max_tokens`, phải xem nội dung có bị cắt và quyết định cách tiếp tục phù hợp. Chỉ thấy văn bản chưa đủ để kết luận thành công.

Phần giải thích token và embedding trong video được đơn giản hóa để làm quen, không phải mô tả đầy đủ cấu trúc bên trong mô hình. Danh sách thư viện, mô hình và cách xác thực cần được đối chiếu khi thực hành; quản lý tài khoản không phải trọng tâm đề cương đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** UI báo “không có kết quả” nhưng chưa rõ lỗi ở browser, backend hay API mô hình. Cách điều tra nào tiết kiệm suy đoán nhất?

A. Đổi prompt trước vì mọi lỗi AI thường bắt nguồn từ câu hỏi.

B. Tăng timeout UI mà không kiểm tra backend có nhận yêu cầu chưa.

C. Theo dấu request/response và schema qua từng ranh giới.

D. Gọi API trực tiếp từ browser bằng khóa dài hạn để bỏ backend.

**Câu 2 — Chọn hai.** API trả text có vẻ hợp lý nhưng stop_reason là max_tokens. Hai hành động nào cần trước khi báo hoàn tất?

A. Coi response HTTP thành công là chứng minh nhiệm vụ đã xong.

B. Tự nối phần kết dựa vào mẫu phổ biến mà không gọi hoặc xác minh thêm.

C. Quyết định tiếp tục hoặc báo chưa hoàn tất theo hợp đồng ứng dụng.

D. Kiểm tra nội dung có bị cắt và có đủ yêu cầu/định dạng cần thiết không.

**Câu 3 — Chọn một.** Nhóm nhúng khóa API dài hạn vào bundle JavaScript và chỉ ẩn nút gọi API khỏi người chưa đăng nhập. Đánh giá nào đúng?

A. Đổi tên biến khóa thành tên khó đoán là đủ.

B. Khóa an toàn vì người dùng không thấy ô nhập khóa.

C. Chỉ cần HTTPS vì đường truyền mã hóa ngăn chính browser đọc khóa.

D. Khóa vẫn có thể bị lấy từ bundle; giữ bí mật ở backend và kiểm soát truy cập phía máy chủ.

**Câu 4 — Chọn hai.** Backend lưu text trả lời nhưng bỏ usage và stop reason; nhóm cần đo vận hành và điều phối công cụ. Hai thay đổi nào hữu ích?

A. Ước lượng stop reason từ việc câu cuối có dấu chấm hay không.

B. Lưu usage thích hợp để theo dõi tài nguyên của yêu cầu.

C. Đếm ký tự UI thay cho tất cả metadata sử dụng và kết thúc.

D. Đọc stop reason và các block liên quan để quyết định hoàn tất, giới hạn hay tool loop.

**Câu 5 — Chọn một.** Một mẫu gọi API trực tiếp chạy được, nhưng khi đưa vào app, backend đọc sai trường response và UI trắng. Thay đổi nào giải quyết đúng nguyên nhân?

A. Sửa adapter theo response thực rồi thử đường tới UI.

B. Tăng max_tokens để chắc chắn trường bị thiếu được tạo ra.

C. Bỏ backend và lưu khóa ở browser để nhận raw response.

D. Nâng mô hình để nó sinh câu trả lời dễ render hơn.

## Đáp án và giải thích

1. **C.** A sai: lỗi truyền tải hoặc adapter không được giải quyết bằng prompt. B sai: thời gian chờ không xác định nơi mất kết quả. C đúng: các thành phần có trách nhiệm khác nhau nên cần xác định chặng hỏng. D sai: cách này làm lộ bí mật và không phải bước chẩn đoán có kiểm soát.

2. **C, D.** A sai: thành công giao thức khác với hoàn thành yêu cầu người dùng. B sai: bổ sung nội dung bằng suy đoán có thể tạo dữ liệu sai. C đúng: ứng dụng phải xử lý trạng thái dừng thay vì chỉ nhìn text. D đúng: giới hạn token có thể làm kết quả dang dở dù phần đầu đọc tốt.

3. **D.** A sai: obfuscation không tạo ranh giới bảo vệ bí mật trong client. B sai: việc không hiển thị trong UI không ngăn đọc tài nguyên client. C sai: HTTPS bảo vệ khi truyền, không ngăn người nhận xem dữ liệu của họ. D đúng: ẩn giao diện không giữ kín mã/credential được gửi tới browser.

4. **B, D.** A sai: câu hoàn chỉnh về ngữ pháp không xác nhận trạng thái yêu cầu. B đúng: text không phản ánh chính xác toàn bộ số liệu sử dụng. C sai: ký tự hiển thị không thay thế số liệu/giao thức provider trả về. D đúng: cần tín hiệu giao thức để điều phối đúng trạng thái.

5. **A.** A đúng: provider đã trả dữ liệu; điểm lỗi là chuyển đổi/hiển thị của ứng dụng. B sai: tham số độ dài không thay cấu trúc giao thức của response. C sai: làm rộng nơi giữ bí mật không phải cách sửa adapter đúng hợp đồng. D sai: mô hình không sửa được code đọc sai trường response.

## Đối chiếu Vertex

Yêu cầu đi qua máy chủ ứng dụng và Vertex rồi trả nội dung, số liệu sử dụng và lý do dừng. Cụm “API Key” trong bài tổng quan không có nghĩa phải dùng khóa Anthropic trực tiếp cho Vertex. Bài thiết lập 307525 và bài gọi API 289155 dùng thông tin xác thực Google/ADC cùng dự án, vùng. Không để thông tin xác thực bí mật trong mã giao diện.

Nguồn đối chiếu: [Accessing the API](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289151). Bản lưu: `sources/vertex-lessons/289151.json`.
