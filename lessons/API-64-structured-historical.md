# Ví dụ prefill và stop sequence

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287732), sources/api-lessons/287732.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học xử lý tình huống cần JSON nhưng mô hình trả thêm lời giải thích hoặc khung định dạng Markdown. Ví dụ ở thời điểm khóa học dùng assistant prefill, tức viết sẵn phần mở đầu câu trả lời, để mở khung mã; sau đó dùng stop sequence, tức chuỗi đánh dấu dừng, ở dấu đóng khung.

Mục đích là hướng câu trả lời về dạng dễ đọc bằng chương trình. Đây không phải cơ chế bảo đảm dữ liệu đúng mọi yêu cầu. JSON đọc được vẫn có thể thiếu trường, chứa giá trị sai hoặc đưa thông tin không có trong nguồn.

Ví dụ dùng kỹ thuật phụ thuộc mô hình và phiên bản. Trước khi chạy lại trên môi trường khác, phải kiểm tra khả năng hỗ trợ prefill và sự tương thích với các tính năng khác. Chuỗi dừng đặt không phù hợp cũng có thể cắt câu trả lời sớm.

Khi ôn Architect, đọc thêm EXAM-05 về cấu trúc đầu ra và `tool_choice`, cùng EXAM-06 về kiểm tra dữ liệu. Cần phân biệt việc làm sạch định dạng với việc kiểm tra cấu trúc và ý nghĩa của kết quả.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Prefill and stop markers remove Markdown, but valid JSON omits a required order ID. What addresses the remaining error?

A. Make prefill longer so JSON looks complete.

B. Add another stop marker after the closing brace.

C. Strip whitespace and accept.

D. Validate required fields and types, handling missing IDs under the contract.

**Question 2 — Choose two.** A prefill notebook moves to another model and reasoning mode. Which TWO checks establish equivalent behavior?

A. Only compare indentation in the first response.

B. Verify feature support and combinations on the target model and API.

C. Keep settings because the SDK uses the same request method.

D. Test valid, missing-field, and early-stop cases, including terminal states.

**Question 3 — Choose one.** JSON stops when a string contains the stop sequence; raising `max_tokens` does not help. What is the correct diagnosis?

A. Convert all strings to numbers.

B. Raise network timeouts.

C. Add closing braces and assume earlier fields are complete.

D. Inspect the stop reason and marker, revise them, and retest the truncated case.

**Question 4 — Choose one.** Schema-valid JSON states an invoice total of 1,000, but items sum to 950. What is better than changing prefill alone?

A. Accept because `amount` is numeric.

B. Add semantic validation, preserve both values, and handle the conflict under the contract.

C. Trust the last field because it was generated later.

D. Prefill 950 so the model always repeats it.

**Question 5 — Choose two.** Which TWO controls are not guaranteed by removing code fences with prefill and stop sequences before record updates?

A. Checking values against evidence and business rules.

B. Treating code-fence removal as write authorization.

C. Checking permissions and update preconditions.

D. Using database field names instead of validation.

## Đáp án và giải thích

1. **D.** A sai: Hướng định dạng không chứng minh giá trị đúng hay được nguồn hỗ trợ. B sai: Điểm dừng không xác nhận các trường cần thiết đã tồn tại. C sai: Whitespace không tạo mã đơn còn thiếu. D đúng: Parse chỉ kiểm tra cú pháp; thiếu trường thuộc kiểm tra cấu trúc hoặc nghiệp vụ.

2. **B, D.** A sai: Một ví dụ trình bày không bao phủ tương thích và đường lỗi. B đúng: Kỹ thuật từ ví dụ không bảo đảm tương thích ở mọi môi trường. C sai: Tên hàm giống nhau không chứng minh hợp đồng tính năng giống nhau. D đúng: Cần xác minh hành vi thực tế, không chỉ API có nhận request.

3. **D.** A sai: Thay kiểu dữ liệu nguồn làm đổi hợp đồng thay vì sửa nguyên nhân điều khiển dừng. B sai: Dừng do marker không phải phần phản hồi đang chờ thêm qua mạng. C sai: Sửa cú pháp không khôi phục dữ liệu bị cắt hoặc chứng minh đủ trường. D đúng: Hiện tượng phù hợp marker kết thúc sinh trước khi cấu trúc hoàn tất.

4. **B.** A sai: Kiểu số không xác nhận số đúng hoặc khớp dữ kiện. B đúng: Định dạng đã đạt; vấn đề là tính nhất quán nghiệp vụ và nguồn bằng chứng. C sai: Thứ tự sinh không chứng minh phép tính hoặc nguồn đáng tin hơn. D sai: Ghi sẵn đáp án che xung đột và không giải quyết cho tài liệu khác.

5. **A, C.** A đúng: JSON sạch không chứng minh dữ kiện có căn cứ hoặc đúng ngữ nghĩa. B sai: Dấu Markdown không liên quan quyền thực thi. C đúng: Định dạng văn bản không cấp quyền cho hành động. D sai: Tên trùng chỉ hỗ trợ ánh xạ, không chứng minh các giá trị được chấp nhận.

## Đối chiếu bài Bedrock

Ví dụ dùng phần mở đầu câu trả lời để mở khối mã và chuỗi dừng để bỏ phần bao Markdown. Đây là kỹ thuật trong phiên bản của khóa; cần kiểm tra tương thích và dữ liệu đầu ra. Đọc được JSON chưa chứng minh đúng nghiệp vụ. Dùng chung phần giải thích và câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276724). Bản lưu: `sources/bedrock-lessons/276724.json`.

## Đối chiếu Vertex

Mẫu điền trước dấu mở khối mã JSON, đặt chuỗi dừng ở dấu đóng rồi đọc dữ liệu bằng `json.loads`. Cách này không bảo đảm đúng schema hoặc giá trị, cũng không mặc định dùng được với mọi mô hình hay chế độ suy luận. Chọn cơ chế đầu ra được hỗ trợ và kiểm tra kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289158). Bản lưu: `sources/vertex-lessons/289158.json`.
