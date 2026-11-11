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

**Question 1 — Choose one.** `create_reminder` is advertised and selected correctly, but the host reports an unknown tool. What should be checked first?

A. Add more examples to its description.

B. Ask the model to use another unregistered name.

C. The router mapping from `create_reminder` to its implementation.

D. Increase the iteration limit.

**Question 2 — Choose two.** A date calculation function has unit tests. Which TWO integration steps let the model use it?

A. Build a fixed conversation for every time-related request.

B. Include its definition and schema in the model's tools.

C. Register its name and implementation in the router.

D. Mention it only in internal documentation.

**Question 3 — Choose one.** A reminder needs `get_time`, then `add_days`, then `create_reminder`. Can all three run simultaneously to reduce latency?

A. No; each dependent step needs the preceding result.

B. Separate schemas prove independence.

C. Use guessed timestamps and ignore small differences.

D. Create first and explain the selected time afterward.

**Question 4 — Choose two.** Which TWO loop features support adding tools without coding every tool combination separately?

A. Retain history and intermediate results for later decisions.

B. Process `tool_use` blocks by type rather than one hard-coded name.

C. Delete results after each call to make tools independent.

D. Support only one tool block in the second response position.

**Question 5 — Choose one.** A new function works in router tests but is never selected. Request logs contain no definition for it. Where is the fix?

A. UI output storage, where the model discovers tools.

B. The function's algorithm.

C. The request's model-facing tools list.

D. Have the router execute it on every request.

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
