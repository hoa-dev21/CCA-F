# Đo chất lượng thay vì chỉ thử vài lần

Nguồn: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287731), nội dung đã đọc từ sources/api-lessons/287731.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Prompt là yêu cầu hoặc hướng dẫn gửi cho AI. Kỹ thuật viết prompt giúp bạn diễn đạt rõ hơn, chẳng hạn thêm ví dụ hoặc dùng thẻ XML để tách các phần thông tin. Đánh giá prompt (prompt evaluation) là đo xem yêu cầu đó có thực sự tạo ra kết quả tốt hay không.

Một câu trả lời hay chưa chứng minh prompt đáng tin cậy. Thử vài lần có thể bỏ sót những tình huống mà người dùng thật sẽ gặp. Vì vậy, cần chạy prompt trên một bộ đầu vào, chấm theo tiêu chí rõ và dùng kết quả để quyết định cách sửa.

Ví dụ: Hai prompt đều lấy đúng thông tin từ một hóa đơn mẫu. Chưa thể kết luận bản nào tốt hơn. Hãy thử cả hai trên cùng bộ hóa đơn, so với kết quả mong đợi và ghi lại các lỗi. Bộ kiểm thử nên có cả những trường hợp ít gặp hoặc dễ gây lỗi, còn gọi là trường hợp biên (edge cases).

Quy trình đánh giá tốn công chuẩn bị nhưng giúp phát hiện điểm yếu trước khi đưa ứng dụng vào sử dụng và so sánh các phiên bản trên cùng thước đo. Kết quả chỉ phản ánh những dữ liệu và tiêu chí đã kiểm tra, không bảo đảm mọi đầu vào mới đều được xử lý đúng.

Điều cần tìm là bằng chứng từ kết quả thực tế. Một prompt nghe rõ ràng hơn chưa chắc cho đầu ra tốt hơn. Các bài tiếp theo sẽ hướng dẫn tạo dữ liệu kiểm thử, chạy đánh giá và chấm kết quả.

## Tự kiểm tra

**Question 1 — Choose one.** A new prompt excels on a demo, but many production request types remain untested. What evidence is needed before replacement?

A. Repeat the demo and select the best answer.

B. Compare both prompts on the same representative set with identical criteria.

C. Let the author select additional cases guaranteed to succeed.

D. Compare average response lengths.

**Question 2 — Choose two.** An evaluation dashboard shows only an average score. Which TWO additions help locate prompt weaknesses?

A. The author's name as a quality indicator.

B. Scores by real-world task category.

C. Error categories and stored failing outputs.

D. Prompt word count instead of case-level results.

**Question 3 — Choose one.** Scores rise from seven to nine after changing the prompt and relaxing completeness criteria. What can be concluded?

A. More new-prompt cases will eliminate the criteria difference.

B. The prompt improved because the score rose by two.

C. The effects are confounded; score both versions using identical criteria.

D. Each version should retain different criteria.

**Question 4 — Choose two.** A configuration generator needs valid JSON and task-correct configurations. Which TWO activities evaluate quality?

A. Compare configuration content with the task and constraints.

B. Check that the output parses in the required format.

C. Rename prompt variables to distinguish versions in Git.

D. Add XML tags and assume scores improve.

**Question 5 — Choose one.** Overall scores improve, but a critical request category deteriorates. What should determine release?

A. The overall average alone.

B. The regression against acceptance criteria for that critical category.

C. The best-looking answer from each version.

D. Remove the declining category from evaluation.

## Đáp án và giải thích

1. **B.** B kiểm soát đầu vào và cách đo. C tạo thiên lệch chọn mẫu; A chưa đo các dạng tác vụ khác; D không đo khả năng hoàn thành yêu cầu.

2. **B, C.** C cho bằng chứng chẩn đoán; B chỉ ra nhóm bị điểm trung bình che khuất. A không đo đầu ra; D đo kích thước đầu vào thay vì hiệu quả.

3. **C.** C khôi phục phép so sánh chung. B nhầm thay thước đo với cải thiện; A thêm mẫu không sửa sai lệch đo; D giữ hai thước đo khác nhau.

4. **A, B.** B đo định dạng và A đo hoàn thành nhiệm vụ. D là kỹ thuật sửa prompt cần được đo lại; C là quản lý phiên bản, không phải bằng chứng chất lượng.

5. **B.** B gắn quyết định với rủi ro tác vụ. A có thể che hồi quy; D loại bằng chứng bất lợi; C thiên lệch chọn đầu ra đẹp.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276731). Bản lưu: `sources/bedrock-lessons/276731.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt sửa cách viết prompt với đo hiệu quả của prompt. Thử vài ví dụ chưa đủ để dự đoán chất lượng khi dùng thực tế. Đánh giá chỉ cung cấp bằng chứng theo bộ dữ liệu và tiêu chí đã chọn, không tự trở thành thước đo tuyệt đối hay bảo đảm mọi đầu vào. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289159). Bản lưu: `sources/vertex-lessons/289159.json`.
