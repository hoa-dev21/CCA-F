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

**Question 1 — Choose one.** The host treats every stop reason except `tool_use` as success, including output truncation. What is the correct fix?

A. Handle `end_turn` separately from other stopping states.

B. Retry forever until `tool_use` appears.

C. Accept every response containing text.

D. Search for “complete” instead of inspecting the stop reason.

**Question 2 — Choose two.** Three tools are requested and one throws an exception. Which TWO properties should the loop preserve?

A. Convert successful results to errors for consistency.

B. Discard requests and send only an exception sentence.

C. Represent execution failures as errors rather than missing data.

D. Link each result or error to the correct invocation ID.

**Question 3 — Choose one.** The model requests an unregistered tool. What is preferable to invoking the closest name?

A. Return a correctly linked error and check advertised tools against the router.

B. Report success without data.

C. Convert the name directly into a shell command.

D. Execute the closest available name.

**Question 4 — Choose two.** The model selects the next tool from observations. Which TWO responsibilities remain with the application?

A. Enforce permissions and resource limits.

B. Treat every selection as authorization.

C. Replace errors with successful data to keep running.

D. Map names and arguments to registered implementations.

**Question 5 — Choose one.** The model requests an additional lookup, but the host always runs a fixed tool sequence. What creates the intended agent loop?

A. Discard intermediate results and restart decisions.

B. Run all tools in parallel without reading intermediate responses.

C. Keep the fixed sequence and ignore new requests.

D. Select the next step from the latest response within host limits.

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
