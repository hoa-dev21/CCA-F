# Making a request

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287725), sources/api-lessons/287725.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Trong mẫu Python của khóa, ứng dụng gọi `client.messages.create` và truyền tên mô hình, `max_tokens` cùng danh sách `messages`. Mỗi tin nhắn ghi vai trò người nói (role) và nội dung.

`max_tokens` là giới hạn trên cho lượng đầu ra mô hình được sinh, không phải độ dài bắt buộc. Ví dụ: đặt 1000 không có nghĩa câu trả lời luôn phải dùng đủ 1000 token. Token là đơn vị mà mô hình dùng để xử lý văn bản, không nhất thiết tương ứng với một từ.

Phản hồi là một đối tượng chứa nội dung và các thông tin khác. Ví dụ cơ bản chỉ lấy `content[0].text` vì giả định câu trả lời là văn bản đơn giản. Khi bổ sung công cụ, cần giữ các khối nội dung và `stop_reason` để xử lý đúng luồng, thay vì chỉ lấy phần chữ đầu tiên.

Bài cũng đề cập đặt khóa API trong cấu hình môi trường và không đưa tệp `.env` chứa thông tin bí mật vào kho mã nguồn. Tên mô hình trong notebook là ví dụ tại thời điểm giảng, cần kiểm tra khả năng hỗ trợ khi triển khai. Xác thực và quản lý tài khoản không phải trọng tâm đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A wrapper returns only `content[0].text`. After adding client tools, the UI says “looking up” without data. What addresses the cause?

A. Increase output tokens.

B. Flatten blocks and find tool names with regex.

C. Replace nonempty text with a completion message.

D. Pass content blocks and `stop_reason` to orchestration.

**Question 2 — Choose one.** With `max_tokens=1000`, a satisfactory response ends normally after 180 tokens. What does this mean?

A. Add explanation to use the full allowance.

B. Only 18% of the request was processed.

C. The API ignored the parameter.

D. The limit is a ceiling, not a required output length.

**Question 3 — Choose two.** Which TWO elements must survive when converting a notebook into a service supporting tool use?

A. Roles and structured message content in history.

B. Control metadata and response blocks required by the loop.

C. Only displayed text, because users cannot see other blocks.

D. The notebook's model name as a permanent support guarantee.

**Question 4 — Choose one.** A team equates words with tokens and flags a 400-word answer exceeding 400 tokens. What is correct?

A. Ignore stop reasons while word count is below the target.

B. Count every space as one token across languages.

C. Use appropriate token measurement rather than equating tokens with words.

D. Force word counts to equal `max_tokens`.

**Question 5 — Choose two.** Which TWO notebook configuration checks are needed for a new backend deployment?

A. Copy the model name unchanged to guarantee reproducibility.

B. Store keys as secrets and exclude real `.env` files from version control.

C. Commit secrets on a private branch.

D. Check model IDs and supported capabilities in the target environment.

## Đáp án và giải thích

1. **D.** A sai: Thêm ngân sách không chạy công cụ. B sai: Làm mất cấu trúc loại block, ID và đối số cần điều phối. C sai: Có chữ không chứng minh đã nhận kết quả công cụ. D đúng: Text đầu tiên có thể chỉ là lời dẫn của một lượt cần thực thi tiếp.

2. **D.** A sai: Thêm chữ không cần thiết không cải thiện nhiệm vụ. B sai: Token đầu ra không đo tỷ lệ công việc hoàn tất. C sai: Trần không buộc dùng hết ngân sách. D đúng: Độ đầy đủ cần xét theo nhiệm vụ và lý do dừng.

3. **A, B.** A đúng: Ngữ cảnh cần giữ đúng nguồn và dạng nội dung. B đúng: Ứng dụng cần biết khi nào phải thực thi tiếp. C sai: UI là một phép chiếu, không đủ cho giao thức. D sai: Ví dụ tại thời điểm giảng không bảo đảm môi trường mới.

4. **C.** A sai: Nội dung có thể bị cắt dù phép đếm từ trông hợp lệ. B sai: Quy tắc tự đặt không phản ánh tokenizer. C đúng: Token là đơn vị xử lý có thể tách khác từ. D sai: Độ dài từ không ràng buộc trực tiếp số token.

5. **B, D.** A sai: Cùng tên không bảo đảm mọi điều kiện và phiên bản như cũ. B đúng: Khóa không nên được phát tán cùng mã mẫu. C sai: Phân phối bí mật qua lịch sử repo mở rộng phạm vi lộ khóa. D đúng: Ví dụ cũ không đủ chứng minh tương thích.

## Đối chiếu Vertex

Mẫu dùng `AnthropicVertex(region, project_id)`, `client.messages.create` và mã mô hình theo Vertex. Phần cài thư viện bổ sung `[vertex]`, vùng `global` và mã mô hình trong khóa không bảo đảm dùng được với mọi dự án. `max_tokens` là giới hạn trên, không phải độ dài mục tiêu. Lấy `content[0].text` chỉ phù hợp với ví dụ văn bản đơn giản.

Nguồn đối chiếu: [Making a request](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289155). Bản lưu: `sources/vertex-lessons/289155.json`.
