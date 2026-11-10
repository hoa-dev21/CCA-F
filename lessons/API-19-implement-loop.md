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

## Câu hỏi

**1. Chọn một.** Công cụ ném exception. Hệ thống nên làm gì theo bài?

A. Bỏ qua lần gọi như chưa xảy ra.

B. Trả kết quả liên kết đúng ID, đánh dấu lỗi.

C. Gán kết quả thành công rỗng.

D. Xóa assistant message.

**2. Chọn một.** Một phản hồi chứa ba tool-use block. Cách xử lý phù hợp?

A. Chỉ chạy block đầu.

B. Chỉ chạy block có tên ngắn nhất.

C. Xử lý từng yêu cầu và trả kết quả tương ứng.

D. Đọc text giải thích rồi đoán kết quả.

**3. Chọn một.** Phản hồi bị cắt vì giới hạn đầu ra. Có nên đánh dấu hoàn tất chỉ vì stop reason không phải `tool_use`?

A. Có, mọi lý do khác đều chứng minh thành công.

B. Có, nếu có bất kỳ text nào.

C. Có, miễn đã gọi công cụ một lần.

D. Không; phải phân biệt kết thúc lượt và tình trạng phản hồi bị cắt.

## Đáp án

1. **B.** A và D làm thiếu lịch sử; C che lỗi thành thành công.
2. **C.** A và B bỏ yêu cầu; D thay dữ liệu thực bằng suy đoán.
3. **D.** A suy rộng sai điều kiện dừng trong ví dụ; B nhầm text với hoàn tất; C đặt số lần gọi làm tiêu chí thành công.

## Đối chiếu Bedrock: chạy hàm thực thi công cụ

Converse trả `toolResult`, `toolUseId`, các khối nội dung và `status` thành công hoặc lỗi. Đây là giao diện khác `is_error` của Messages API và `isError` của MCP. Mỗi lời gọi đều cần kết quả khớp mã, kể cả khi xảy ra lỗi. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276762). Bản lưu: `sources/bedrock-lessons/276762.json`.

## Đối chiếu Vertex

Duyệt mọi khối `tool_use`, chỉ chuyển tới công cụ được phép, chuyển kết quả sang dạng có thể gửi và đánh dấu `is_error` khi lỗi. Không coi mọi `stop_reason` khác `tool_use` là thành công: hết đầu ra, từ chối hoặc lỗi cần xử lý riêng. Vòng lặp mẫu cũng cần giới hạn số lần và thời gian khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing multiple turns](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289182). Bản lưu: `sources/vertex-lessons/289182.json`.
