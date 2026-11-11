# Triển khai vòng lặp công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287758), sources/api-lessons/287758.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một vòng xử lý công cụ cần thực hiện đầy đủ các bước: gửi yêu cầu kèm định nghĩa công cụ, lưu phản hồi của Claude, đọc lý do dừng và xử lý các yêu cầu công cụ trước khi gửi kết quả trở lại.

Duyệt các khối có `type == "tool_use"`. Không giả định chỉ có một công cụ hoặc công cụ nằm ở vị trí cố định. Với mỗi khối, lấy tên và đầu vào, chạy hàm tương ứng rồi tạo kết quả có `tool_use_id` khớp mã ban đầu. Có thể dùng một bộ điều phối (router) để ánh xạ tên công cụ sang hàm thực thi.

Nếu hàm phát sinh lỗi, vẫn trả kết quả cho đúng lần gọi và đặt `is_error=true`. Ví dụ: hai công cụ tra cứu, một thành công và một lỗi kết nối. Không gán lỗi cho lần gọi thành công và không đổi lỗi kết nối thành “không tìm thấy dữ liệu”.

Mẫu đơn giản trong khóa dừng khi `stop_reason` khác `tool_use`. Khi triển khai và ôn thi, cần phân biệt kỹ hơn:

- `tool_use`: tiếp tục xử lý công cụ.
- `end_turn`: mô hình đã kết thúc lượt trả lời.
- Lý do khác, chẳng hạn chạm giới hạn đầu ra: xử lý theo trạng thái đó, không tự coi là hoàn tất nhiệm vụ.

Không dò câu “tôi đã xong” để quyết định trạng thái. Giới hạn số vòng hoặc thời gian giúp kiểm soát tài nguyên; chạm giới hạn chỉ có nghĩa phải dừng hoặc chuyển xử lý, chưa chứng minh thành công.

Trong vòng lặp của tác nhân AI, mô hình chọn công cụ tiếp theo dựa trên thông tin vừa nhận. Ứng dụng chịu trách nhiệm chạy công cụ và áp dụng quyền. Cách này khác quy trình có toàn bộ thứ tự công cụ được lập trình sẵn từ đầu.

## Tự kiểm tra

**Câu 1 — Chọn một.** Host hiện dừng thành công với mọi stop_reason khác tool_use. Một response bị cắt do giới hạn đầu ra nhưng vẫn được báo hoàn tất. Sửa nào đúng nhất?

A. Xử lý end_turn và các trạng thái dừng khác riêng biệt.

B. Chạy lại mọi response vô hạn cho tới khi xuất hiện tool_use.

C. Coi mọi response có text là thành công, kể cả bị cắt.

D. Tìm câu “hoàn thành” trong phần text để thay việc đọc stop_reason.

**Câu 2 — Chọn hai.** Một response yêu cầu ba công cụ; một lần gọi ném exception. Hai tính chất nào cần giữ trong vòng xử lý?

A. Mọi kết quả thành công bị đổi thành lỗi để đồng nhất response.

B. Bỏ lịch sử yêu cầu gốc và chỉ gửi một câu mô tả exception.

C. Lỗi thực thi được biểu diễn là lỗi, không đổi thành “không có dữ liệu”.

D. Kết quả hoặc lỗi của từng lần gọi được nối đúng ID.

**Câu 3 — Chọn một.** Model yêu cầu tên công cụ chưa được router đăng ký. Nhóm đề xuất gọi hàm có tên gần giống nhất. Cách xử lý phù hợp hơn?

A. Trả lỗi đúng ID; kiểm tra tools có khớp router không.

B. Cho model biết lời gọi thành công nhưng không trả dữ liệu.

C. Chuyển tên công cụ trực tiếp thành lệnh shell để mở rộng khả năng.

D. Chọn hàm gần tên nhất để thực thi.

**Câu 4 — Chọn hai.** Trong vòng agent, model chọn công cụ tiếp theo theo dữ liệu vừa nhận. Hai trách nhiệm nào vẫn thuộc ứng dụng?

A. Áp dụng quyền cùng giới hạn tài nguyên khi xử lý lời gọi.

B. Coi mọi lựa chọn của model là quyền thực thi đã được cấp.

C. Thay dữ liệu lỗi bằng kết quả thành công để vòng lặp tiếp tục.

D. Ánh xạ tên và đầu vào tới hàm thực thi đã đăng ký.

**Câu 5 — Chọn một.** Một công cụ trả dữ liệu, model sau đó yêu cầu tra cứu bổ sung. Host đang chạy toàn bộ chuỗi công cụ cố định bất kể response mới. Điều chỉnh nào tạo đúng vòng agent của bài?

A. Bỏ kết quả giữa, quyết định lại từ đầu.

B. Chạy mọi công cụ song song để không cần đọc phản hồi trung gian.

C. Giữ chuỗi cố định, thêm mọi kết quả vào lịch sử nhưng không xét lời gọi mới.

D. Chọn bước tiếp từ phản hồi mới trong giới hạn host.

## Đáp án và giải thích

1. **A.** A phân biệt kết thúc lượt và dừng bất thường. D và C dùng văn bản không đủ xác định trạng thái; B tool_use không phải dấu hiệu thành công và retry vô hạn không có kiểm soát.

2. **C, D.** D giữ tương quan, C giữ ý nghĩa vận hành. A làm sai các lần gọi thành công; B bỏ cấu trúc và kết quả từng công cụ mà model cần.

3. **A.** A giữ hợp đồng và khả năng chẩn đoán. D có thể thực hiện sai thao tác; B bịa thành công; C vượt ánh xạ công cụ và quyền dự kiến.

4. **A, D.** D là thực thi, A là kiểm soát host. B nhầm đề nghị với ủy quyền; C làm mất tín hiệu lỗi để quyết định tiếp theo.

5. **D.** D cho phép quyết định dựa trên thông tin mới. C giữ lịch sử nhưng vẫn bỏ quyết định tiếp theo của mô hình; B bỏ phụ thuộc và ý định lời gọi; A mất dữ liệu cần để điều chỉnh kế hoạch.

## Đối chiếu Bedrock: chạy hàm thực thi công cụ

Converse trả `toolResult`, `toolUseId`, các khối nội dung và `status` thành công hoặc lỗi. Đây là giao diện khác `is_error` của Messages API và `isError` của MCP. Mỗi lời gọi đều cần kết quả khớp mã, kể cả khi xảy ra lỗi. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276762). Bản lưu: `sources/bedrock-lessons/276762.json`.

## Đối chiếu Vertex

Duyệt mọi khối `tool_use`, chỉ chuyển tới công cụ được phép, chuyển kết quả sang dạng có thể gửi và đánh dấu `is_error` khi lỗi. Không coi mọi `stop_reason` khác `tool_use` là thành công: hết đầu ra, từ chối hoặc lỗi cần xử lý riêng. Vòng lặp mẫu cũng cần giới hạn số lần và thời gian khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing multiple turns](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289182). Bản lưu: `sources/vertex-lessons/289182.json`.
