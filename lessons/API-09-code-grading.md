# Chấm bằng mã chương trình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287737), bản nội dung sources/api-lessons/287737.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Chấm bằng mã chương trình phù hợp với những điều kiện có thể kiểm tra rõ ràng. Ví dụ của bài sử dụng ba cách kiểm tra trong Python:

- `json.loads`: đọc dữ liệu để kiểm tra cú pháp JSON.
- `ast.parse`: phân tích cú pháp mã Python mà không cần thực thi đoạn mã đó.
- `re.compile`: biên dịch biểu thức tìm mẫu (regex) để kiểm tra nó có hợp lệ về cú pháp hay không.

Bộ dữ liệu có trường `format` để chọn bộ kiểm tra tương ứng, còn gọi là validator. Nếu yêu cầu đầu ra là JSON thì phải kiểm tra như JSON; hợp lệ ở một định dạng khác không đáp ứng yêu cầu.

Đúng cú pháp chưa có nghĩa làm đúng nhiệm vụ. Mã Python có thể không mắc lỗi cú pháp nhưng tính sai. Regex có thể biên dịch được nhưng nhận cả những chuỗi lẽ ra phải bị từ chối. Vì vậy, bài kết hợp kiểm tra bằng mã với chấm bằng mô hình để xem cả định dạng và nội dung.

Ví dụ: Một regex được yêu cầu nhận đúng mã đơn hàng. Ngoài kiểm tra biên dịch, cần thử các mã hợp lệ và không hợp lệ để biết nó phân biệt đúng hay chưa.

Mẫu lấy trung bình hai điểm chỉ là một cách minh họa. Có thể chọn trọng số theo yêu cầu ứng dụng. Nếu đúng cú pháp là điều kiện bắt buộc, điểm trung bình cao không đủ để bỏ qua lỗi cú pháp.

## Tự kiểm tra

**Question 1 — Choose one.** A regex compiles but matches both valid and invalid strings. What additional check is needed?

A. Measure expression brevity.

B. Test positive and negative examples for the intended behavior.

C. Compile again with the same library.

D. Check only that Markdown is absent.

**Question 2 — Choose two.** Python is graded with `ast.parse`, and JSON with `json.loads`. Which TWO conclusions are supported?

A. Python syntax can be checked without executing generated code.

B. Parsable JSON proves that required business fields exist.

C. Parsable JSON does not prove its values satisfy the task.

D. Parsable Python proves correct behavior for every input.

**Question 3 — Choose one.** A test requires JSON, but valid Python passes because the validator is selected by guessing from the output. What is the fix?

A. Run every validator and accept any success.

B. Change the test format to match the generated output.

C. Select validation from the test case's required `format`.

D. Remove format checking and let the model choose.

**Question 4 — Choose two.** Which TWO checks separate syntax errors from task errors in generated code?

A. Execute all unchecked code directly in production.

B. Parse using the validator for the required format.

C. Use parsing scores as the entire task-correctness score.

D. Check behavior or requirements after syntax validation.

**Question 5 — Choose one.** Correct JSON is wrapped in an explanation, but the contract requires JSON only. How should it be graded?

A. Report a format failure because the complete output cannot be parsed as JSON.

B. Pass if the model says the embedded content is JSON.

C. Change the required format to text.

D. Extract JSON and silently pass the repaired result.

## Đáp án và giải thích

1. **B.** B kiểm tra ngữ nghĩa đối sánh. C chỉ lặp kiểm tra cú pháp; A không chứng minh hành vi; D kiểm tra bao gói nhưng bỏ lỗi nhận diện.

2. **A, C.** A là phạm vi của AST parse; C phân biệt cú pháp với nội dung. D chưa có kiểm thử hành vi; B chưa kiểm tra schema hay quy tắc nghiệp vụ.

3. **C.** C kiểm tra đúng hợp đồng đầu vào. A chấp nhận sai loại; B thay yêu cầu để hợp kết quả; D bỏ ràng buộc của sản phẩm.

4. **B, D.** B phát hiện sai cấu trúc, D phát hiện sai chức năng. C đồng nhất hai tiêu chí; A không cần thiết để parse và tạo rủi ro thực thi ngoài phạm vi đánh giá.

5. **A.** A đo đầu ra thực tế theo hợp đồng. D che lỗi bằng hậu xử lý không được quy định; C thay nhiệm vụ; B dùng tự nhận định thay kiểm tra.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276735). Bản lưu: `sources/bedrock-lessons/276735.json`.

## Đối chiếu Vertex

Hồ sơ đối chiếu toàn văn với bài API 287737 chỉ ghi nhận khác cách diễn đạt như “upfront/ahead of time” và “average/take the average”. Kiến thức chấm bằng mã không đổi, nên dùng chung câu hỏi thay vì đếm thành bộ mới.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289167). Bản lưu: `sources/vertex-lessons/289167.json`.
