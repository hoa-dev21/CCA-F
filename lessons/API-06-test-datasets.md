# Tạo tập đầu vào kiểm thử

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287739), bản nội dung sources/api-lessons/287739.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Trước khi tạo dữ liệu kiểm thử, cần biết ứng dụng phải tạo ra kết quả gì. Trong bài, ứng dụng tạo mã Python, dữ liệu JSON hoặc biểu thức tìm mẫu văn bản (regex) cho các nhiệm vụ liên quan đến AWS. Đầu ra chỉ được chứa nội dung cần dùng, không kèm lời giải thích.

Bộ dữ liệu kiểm thử là danh sách các bản ghi JSON. Trong mỗi bản ghi, trường `task` mô tả nhiệm vụ sẽ đưa vào prompt. Bạn có thể tự viết các bản ghi hoặc nhờ Claude tạo theo yêu cầu rõ về loại đầu ra, độ khó, số trường hợp và cấu trúc cần có.

Ví dụ: Nếu ứng dụng hỗ trợ cả JSON và regex nhưng bộ kiểm thử chỉ có yêu cầu tạo JSON, bạn chưa biết ứng dụng làm tốt với regex hay không. Cần chọn các trường hợp bao quát những nhóm công việc quan trọng.

Lưu bộ dữ liệu thành tệp giúp dùng lại cùng đầu vào khi so sánh các phiên bản prompt. Ba bản ghi trong bài chỉ để minh họa cách làm, chưa đủ để chứng minh chất lượng của một ứng dụng đưa vào sử dụng thực tế.

Mã ví dụ dùng mô hình nhanh để hỗ trợ tạo dữ liệu, cùng kỹ thuật viết sẵn phần mở đầu câu trả lời (prefilling) và chuỗi dừng (stop sequence). Khả năng hỗ trợ các kỹ thuật này tùy mô hình; cần kiểm tra trước khi chạy. Điều chính cần nắm ở đây là cách thiết kế và lưu bộ đầu vào phù hợp.

## Tự kiểm tra

**Question 1 — Choose one.** An application generates Python, JSON, and regex. Its test set is 90% Python with only a few easy cases for the others. How should a high overall score be handled?

A. Release all three formats because most requests passed.

B. Only increase weights for the small categories.

C. Add representative cases and measure the underrepresented formats separately.

D. Treat every output as text and apply the Python score to all formats.

**Question 2 — Choose two.** An AI will generate AWS coding tests in three formats. Which TWO instructions make the dataset usable and aligned with the target application?

A. Allow vague explanations in the task field.

B. Specify output types and the complexity range to cover.

C. Require the same example for every task.

D. Define a record structure with a task describing the behavior to test.

**Question 3 — Choose one.** The team generates a new dataset for each prompt evaluation and compares scores. What makes the comparison reliable?

A. Match average task lengths only.

B. Keep case counts equal while freely changing topics.

C. Run both prompts on the same reviewed, saved dataset.

D. Randomly compare half the scores from each run.

**Question 4 — Choose two.** Production outputs must contain code or data without explanation. Which TWO case types test this contract?

A. Regex or Python tasks with format-specific output criteria.

B. Tasks that always allow Markdown so parsers can ignore extras.

C. JSON tasks checking for text outside the JSON.

D. Explanation-only tasks because usefulness is easy to score.

**Question 5 — Choose one.** AI-generated tests include vague AWS tasks and tasks beyond the application's intended complexity. What should happen before evaluation?

A. Review scope and difficulty, then save the approved dataset.

B. Keep everything because AI data is automatically unbiased.

C. Adapt reference answers to accept whatever the model generates.

D. Remove difficult cases merely to measure normal performance.

## Đáp án và giải thích

1. **C.** C nhận ra thiếu bao phủ. A suy rộng từ nhóm đa số; D làm mất tiêu chí định dạng; B tăng trọng số không tạo thêm bằng chứng về loại ca chưa có.

2. **B, D.** D làm dữ liệu có hợp đồng; B định hướng độ bao phủ. C làm nghèo tình huống; A lẫn đáp án hoặc lời bình với đầu vào nhiệm vụ.

3. **C.** C cố định đầu vào. B số lượng bằng nhau không bảo đảm độ khó bằng nhau; A độ dài không đại diện độ khó; D trộn điểm không kiểm soát khác biệt dữ liệu.

4. **A, C.** C và A kiểm tra các định dạng thực tế. B nới hợp đồng so với production; D đổi tác vụ nên không kiểm chứng yêu cầu đầu ra chỉ có nội dung dùng được.

5. **A.** A kiểm soát chất lượng dữ liệu kiểm thử. B nhầm nguồn sinh với tính đại diện; D làm mất ca khó nhưng hợp lệ; C làm thước đo chạy theo kết quả thay vì yêu cầu.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276733). Bản lưu: `sources/bedrock-lessons/276733.json`.

## Đối chiếu Vertex

Ví dụ tạo dữ liệu kiểm thử cho nhiệm vụ AWS có đầu ra Python, JSON hoặc regex. Có thể soạn bằng tay hoặc nhờ mô hình rồi lưu lại. Ba ví dụ chưa đại diện cho ứng dụng thực tế; dữ liệu sinh cần được kiểm tra, bổ sung trường hợp biên và có tập kiểm thử riêng. Prefill và chuỗi dừng không thay việc kiểm tra JSON hoặc schema. Dùng chung câu hỏi.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289163). Bản lưu: `sources/vertex-lessons/289163.json`.
