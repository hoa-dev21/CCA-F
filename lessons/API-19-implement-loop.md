# Implementing multiple turns — Triển khai vòng lặp công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287758), sources/api-lessons/287758.json. Câu hỏi tự biên soạn.

## Tóm tắt

Vòng lặp gửi request cùng tools, lưu assistant message, kiểm tra `stop_reason`, thực thi các tool-use block và thêm kết quả vào user message kế tiếp.

Lọc block bằng `type == "tool_use"`, không giả định chỉ có một tool hoặc một vị trí cố định. Mỗi yêu cầu cần kết quả với `tool_use_id` khớp ID gốc. Dùng hàm router ánh xạ tên tool sang hàm thực thi giúp thêm công cụ mà không viết lại vòng lặp.

Nếu hàm bị lỗi, vẫn trả tool-result block cho lần gọi đó và đặt `is_error=true`. Bỏ qua kết quả lỗi khiến lịch sử thiếu thông tin mà Claude cần để quyết định bước tiếp theo.

Ví dụ của khóa kết thúc khi stop reason khác `tool_use`. Đối với ôn thi và triển khai, cần phân biệt kỹ hơn: `end_turn` là kết thúc lượt; một lý do như hết giới hạn đầu ra chưa chứng minh nhiệm vụ thành công. Exam Guide mục 1.1 nhấn mạnh việc phân biệt `tool_use` và `end_turn`.

Điều kiện dừng nghiệp vụ phải theo giao thức: tiếp tục khi `tool_use`, kết thúc lượt khi `end_turn`, xử lý riêng các lý do khác. Không parse câu “tôi đã xong”, không dùng việc có text hoặc đạt một số vòng cố định để báo thành công. Giới hạn vòng/thời gian chỉ là hàng rào vận hành; chạm giới hạn nghĩa cần dừng có trạng thái chưa hoàn tất hoặc chuyển xử lý, không tự biến thành thành công. Trong agent loop, model chọn tool kế tiếp theo context mới; host thực thi và áp quyền, khác một decision tree có thứ tự tool được mã hóa sẵn.

Ví dụ tự biên soạn: hai công cụ tra cứu chạy, một thành công, một lỗi. Không gắn lỗi vào lần tra cứu thành công và không tự biến lỗi thành “không tìm thấy”. Trả kết quả đúng từng ID.

## Câu hỏi

**1. Chọn một.** Tool ném exception. Hệ thống nên làm gì theo bài?

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

C. Có, miễn đã gọi tool một lần.

D. Không; phải phân biệt kết thúc lượt và tình trạng phản hồi bị cắt.

## Đáp án

1. **B.** A và D làm thiếu lịch sử; C che lỗi thành thành công.
2. **C.** A và B bỏ yêu cầu; D thay dữ liệu thực bằng suy đoán.
3. **D.** A suy rộng sai điều kiện dừng trong ví dụ; B nhầm text với hoàn tất; C đặt số lần gọi làm tiêu chí thành công.

## Đối chiếu Bedrock: Running tool functions

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276762) và đối chiếu khái niệm với bài chung. Converse trả toolResult, toolUseId, content blocks và status success/error. Không nhầm status của provider với is_error trong API hoặc isError của MCP. Mỗi tool request cần kết quả liên kết đúng ID kể cả lỗi. Nguồn: sources/bedrock-lessons/276762.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Implementing multiple turns](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289182), sources/vertex-lessons/289182.json. Duyệt mọi tool_use, route tool theo danh sách được phép, serialize result và báo is_error khi lỗi. stop_reason khác tool_use chưa đủ kết luận thành công: max_tokens/refusal/error cần xử lý riêng. Vòng while mẫu cần iteration/time limits. Dùng chung câu hỏi khái niệm.
