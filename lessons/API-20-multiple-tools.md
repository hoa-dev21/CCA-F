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

## Tự kiểm tra

**Câu 1 — Chọn một.** Nhóm thêm schema create_reminder vào tools; model gọi đúng tên nhưng host báo không biết công cụ. Điểm tích hợp nào cần kiểm tra đầu tiên?

A. Tăng số ví dụ lời nhắc trong description.

B. Đổi system prompt để model dùng một tên khác chưa đăng ký.

C. Ánh xạ create_reminder tới hàm thực thi trong router.

D. Tăng giới hạn số vòng vì lời gọi đã đúng cấu trúc.

**Câu 2 — Chọn hai.** Hàm tính thời điểm mới đã có unit test. Hai bước nào còn cần để model dùng được nó trong vòng chung?

A. Tạo riêng một hội thoại cố định cho mọi câu hỏi chứa thời gian.

B. Đưa định nghĩa và schema vào tools gửi model.

C. Đăng ký tên công cụ với hàm thực thi trong router.

D. Chỉ thêm tên hàm vào tài liệu nội bộ mà không gửi định nghĩa.

**Câu 3 — Chọn một.** Yêu cầu nhắc việc vào ba ngày sau hôm nay cần get_time, add_days rồi create_reminder. Hệ thống muốn giảm độ trễ bằng chạy cả ba cùng lúc. Nhận định nào đúng?

A. Giữ thứ tự vì bước sau cần kết quả bước trước.

B. Coi schema riêng là chứng cứ độc lập.

C. Có thể dùng thời điểm đoán cho bước tạo và bỏ qua sai số nếu nhỏ.

D. Chạy tạo trước rồi dùng bước tính để giải thích thời điểm đã chọn.

**Câu 4 — Chọn hai.** Thêm công cụ mới nhưng không muốn nhân số nhánh hội thoại theo mọi tổ hợp công cụ. Hai đặc điểm nào của vòng chung hỗ trợ mục tiêu này?

A. Giữ lịch sử cùng kết quả trung gian cho quyết định tiếp theo.

B. Duyệt các block tool_use theo type thay vì theo một tên cố định.

C. Xóa kết quả sau mỗi lần gọi để các công cụ được “độc lập”.

D. Chỉ hỗ trợ đúng một tool_use ở vị trí thứ hai của response.

**Câu 5 — Chọn một.** Model không bao giờ chọn một hàm mới dù router chạy hàm ấy tốt trong test. Logs request không có định nghĩa hàm. Sửa ở đâu?

A. Mã lưu output UI vì đó là nơi model khám phá công cụ.

B. Thuật toán của hàm thực thi vì model chưa gọi được.

C. Danh sách tools được gửi cho model trong request.

D. Đổi router để tự chạy hàm mới trong mọi request.

## Đáp án và giải thích

1. **C.** C sửa phía thực thi đang thiếu. B đổi tên không thêm ánh xạ; A chỉ tác động lựa chọn model; D thêm vòng không làm router nhận biết công cụ.

2. **B, C.** B công bố khả năng, C nối khả năng tới mã chạy. A không cần khi vòng chung đã hỗ trợ; D model không được cung cấp hợp đồng công cụ.

3. **A.** A phân biệt khai báo độc lập với phụ thuộc thực thi. B không xét giá trị đầu vào; C và D thực hiện tác động trước khi có dữ liệu quyết định.

4. **A, B.** B cho phép nhiều loại lời gọi; A cho phép kết hợp theo dữ liệu. D gắn vòng vào ví dụ hẹp; C phá phụ thuộc và khả năng nối các bước.

5. **C.** C bổ sung công bố khả năng còn thiếu. B sửa thành phần chưa được chọn; A UI không phải đường công bố tools; D thêm hành động bất kể nhu cầu.

## Đối chiếu Bedrock: thêm nhiều công cụ

Converse thêm schema và ánh xạ tên công cụ tới hàm theo cùng nguyên tắc. Trong bài, `set_reminder` chỉ in nội dung, chưa tạo lời nhắc thật trong lịch hoặc hệ thống phía sau. Muốn dùng thực tế phải tích hợp và kiểm tra trạng thái sau thao tác. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276761). Bản lưu: `sources/bedrock-lessons/276761.json`.

## Đối chiếu Vertex

Thêm công cụ cần bản mô tả, bộ điều phối và mã thực thi. Bài xác nhận `set_reminder` chỉ là hàm tạm để in kết quả, không tạo lời nhắc hệ thống. Các công cụ phụ thuộc kết quả trước phải chạy đúng thứ tự, không tự động chạy song song cả nhóm. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Using multiple tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289185). Bản lưu: `sources/vertex-lessons/289185.json`.
