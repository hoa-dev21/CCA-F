# Hàm thực thi và lỗi hữu ích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287756), sources/api-lessons/287756.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Hàm thực thi công cụ là đoạn mã ứng dụng chạy khi nhận yêu cầu gọi công cụ. Trong bài, các hàm xử lý thời gian có tham số được đặt tên rõ, kiểm tra giá trị và trả lỗi có ý nghĩa khi đầu vào không hợp lệ.

Cần làm đủ ba việc: viết hàm thực hiện nhiệm vụ, mô tả công cụ và đầu vào bằng schema, rồi nối tên công cụ với hàm trong bộ điều phối của vòng hội thoại. Chỉ có hàm thì Claude chưa biết cách dùng; chỉ có schema thì thao tác chưa thể chạy.

Ví dụ: Một tham số bắt buộc bị rỗng. Thông báo rõ tham số nào thiếu và điều kiện cần đáp ứng sẽ giúp Claude sửa yêu cầu tốt hơn câu “Có lỗi”.

Không phải lỗi nào cũng xử lý bằng cách gọi lại. Thiếu quyền hoặc vi phạm quy tắc nghiệp vụ cần cách xử lý phù hợp với loại lỗi đó. Khi Claude sửa đầu vào sau khi đọc lỗi, nó đang sử dụng thông tin mới trong cuộc trò chuyện; điều đó không có nghĩa mô hình được huấn luyện lại sau mỗi lần gọi.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** `calculate_time` has a valid schema but no dispatcher mapping. What fixes the failing layer?

A. Change arguments to strings.

B. Register dispatch to the implementation and verify its result.

C. Return model predictions as tool results.

D. Add calculation examples to the description.

**Question 2 — Choose one.** An empty `start_time` yields only “Operation failed,” and the model repeats it. What improves recovery?

A. Explain that `start_time` is required and specify its accepted format.

B. Increase retries.

C. Say “think harder and retry.”

D. Always substitute server time.

**Question 3 — Choose two.** One call lacks a parameter; another lacks write permission. Which TWO responses are appropriate?

A. Change descriptions to encourage repeated write attempts.

B. Correct invalid arguments when the needed information is available.

C. Use an authorized path or escalate permission failures.

D. Treat all failures as transient.

**Question 4 — Choose one.** After a format-error result, the model repairs its arguments successfully. What does this demonstrate?

A. The tool retrained the model.

B. Error feedback in context helped repair the current call.

C. Every future session will remember the rule.

D. The backend automatically updated the schema.

**Question 5 — Choose two.** Besides a date-addition function, which TWO integration elements are needed?

A. An orchestrator that validates, executes, and returns correctly linked results or errors.

B. A clear tool description and argument schema.

C. The full implementation displayed to the user.

D. Only an understandable function name for automatic API discovery.

## Đáp án và giải thích

1. **B.** A sai: Lỗi nằm ở định tuyến, không phải kiểu tham số. B đúng: Schema mô tả giao diện; dispatcher mới nối vào mã. C sai: Thay tính toán thật bằng suy đoán không sửa tích hợp. D sai: Không tạo ánh xạ thực thi đang thiếu.

2. **A.** A đúng: Phản hồi có thể hành động giúp sửa đúng đầu vào. B sai: Không có thông tin mới nên dễ lặp lỗi hoặc bịa mốc. C sai: Không bổ sung điều kiện thất bại cụ thể. D sai: Âm thầm đổi nghĩa thay vì giải quyết thiếu dữ liệu.

3. **B, C.** A sai: Mô tả không thay kiểm soát quyền thực tế. B đúng: Lỗi đầu vào có thể phục hồi bằng yêu cầu đúng. C đúng: Retry cùng quyền không giải quyết sự từ chối. D sai: Các loại lỗi có điều kiện phục hồi khác nhau.

4. **B.** A sai: Một phản hồi hội thoại không chứng minh huấn luyện. B đúng: Không cần giả định thay đổi trọng số. C sai: Không có bằng chứng trạng thái được lưu xuyên phiên. D sai: Sửa lời gọi không chứng minh sửa khai báo giao diện.

5. **A, B.** A đúng: Cần đường thực thi và phản hồi thực tế. B đúng: Mô hình cần biết giao diện được cung cấp. C sai: Hiển thị mã không đăng ký công cụ. D sai: Tên không tự tạo kết nối vào tiến trình ứng dụng.

## Đối chiếu Bedrock: Công cụ functions

Bài Bedrock dùng cùng ví dụ công cụ thời gian và nhắc việc với quy định đầu vào rõ. Việc mô hình có thể thử lại không có nghĩa mọi lỗi đều cần hoặc được phép thử lại. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276757). Bản lưu: `sources/bedrock-lessons/276757.json`.

## Đối chiếu Vertex

Đặt tên và tham số rõ, kiểm tra đầu vào, trả lỗi giúp người gọi sửa được. `datetime.now()` trong mẫu dùng giờ của môi trường và chưa gắn múi giờ. Ứng dụng chịu trách nhiệm thực thi, không phải mô hình tự chạy hàm. Không trả nguyên thông tin lỗi chứa dữ liệu nhạy cảm hoặc khóa bí mật. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tool functions](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289176). Bản lưu: `sources/vertex-lessons/289176.json`.
