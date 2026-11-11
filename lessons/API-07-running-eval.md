# Tổ chức quy trình xử lý đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743), bản nội dung sources/api-lessons/287743.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học chia chương trình đánh giá thành ba hàm, mỗi hàm có một nhiệm vụ:

- `run_prompt`: ghép một trường hợp kiểm thử với mẫu yêu cầu rồi gọi Claude để lấy câu trả lời.
- `run_test_case`: chạy một trường hợp và chấm câu trả lời nhận được.
- `run_eval`: lần lượt xử lý toàn bộ bộ dữ liệu và tập hợp kết quả.

Mỗi bản ghi kết quả giữ ba phần: `test_case` là đầu vào đã thử, `output` là câu trả lời thực tế và `score` là điểm đánh giá. Lưu đủ ba phần giúp bạn tìm nguyên nhân khi điểm thấp, thay vì chỉ thấy một con số tổng hợp.

Trong giai đoạn đầu của ví dụ, mọi kết quả đều được gán điểm `10`. Đây chỉ là giá trị tạm (placeholder) để kiểm tra chương trình có chạy và lưu kết quả đúng hay không. Sau đó phải thay bằng cách chấm thực sự.

Ví dụ: Chương trình tạo đủ 100 bản ghi nhưng bản nào cũng được gán 10 điểm cố định. Bạn mới biết luồng gửi yêu cầu và thu câu trả lời hoạt động. Chưa có bằng chứng rằng 100 câu trả lời đó đạt chất lượng.

## Tự kiểm tra

**Question 1 — Choose one.** A pipeline runs 200 cases, stores outputs, and assigns every case `score=10`. Can its report support release?

A. Zero score variance proves model stability.

B. It verifies pipeline execution but does not measure output quality.

C. More cases will make the fixed score reliable.

D. Every case has an output and score, so quality is maximal.

**Question 2 — Choose two.** A low-scoring case has no diagnostic details. Which TWO fields should accompany `score`?

A. `output` replaced with the author's ideal answer.

B. `output` containing the actual response.

C. `test_case` containing the actual input.

D. `test_case` replaced with an index in a changing dataset.

**Question 3 — Choose one.** The team wants to replace grading while retaining prompt construction and dataset iteration. Where should grading integrate?

A. Have the grader iterate the set and discard test-case records.

B. Have `run_prompt` rewrite the dataset for the new grader.

C. Have `run_eval` rewrite every output before grading.

D. Have `run_test_case` grade the output returned by `run_prompt`.

**Question 4 — Choose two.** After refactoring, `run_eval` reports good scores but 12 API failures have no outputs. Which TWO reporting choices avoid misleading readers?

A. Record failed cases and their causes explicitly.

B. Assign maximum scores to failures to avoid penalizing the prompt.

C. Distinguish graded cases from the total planned cases.

D. Omit failures while claiming the whole set ran successfully.

**Question 5 — Choose one.** Two `run_prompt` versions differ, but logs retain only scores. What helps distinguish prompt-construction errors from grading errors?

A. Store only each version's average.

B. Store only high-scoring outputs.

C. Store each test case, actual output, and score together.

D. Store separate lists and join by asynchronous completion order.

## Đáp án và giải thích

1. **B.** B phân biệt kiểm tra plumbing với đánh giá. D và A diễn giải điểm giả như kết quả đo; C tăng số lần chấm giả không tạo bằng chứng.

2. **B, C.** C cho yêu cầu; B cho hành vi quan sát. A mất bằng chứng thất bại; D có thể không truy lại được đầu vào sau khi tập đổi.

3. **D.** D giữ phân tách chạy một ca, chấm và tổng hợp. B trộn sinh output với quản lý dữ liệu; C làm sai bằng chứng; A mất cấu trúc truy nguyên từng ca.

4. **A, C.** A giữ khả năng điều tra; C làm rõ mẫu số phép đo. B bịa kết quả chấm; D che mất độ bao phủ và lỗi vận hành.

5. **C.** C giữ liên kết đầu vào–đầu ra–điểm. D có nguy cơ ghép nhầm ca khi thứ tự hoàn thành đổi; A và B bỏ dữ liệu cần chẩn đoán lỗi.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276736). Bản lưu: `sources/bedrock-lessons/276736.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu toàn văn, phần nội dung chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Việc dùng chung nội dung dựa trên bản văn, không chỉ tiêu đề.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289166); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743). Bản lưu: `sources/vertex-lessons/289166.json`.
