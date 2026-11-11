# Độ biến thiên đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287728), sources/api-lessons/287728.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Khi tạo câu trả lời, mô hình chọn các token tiếp theo dựa trên phân bố xác suất. Tham số `temperature` điều chỉnh mức độ tập trung của lựa chọn này. Trong cách giải thích đơn giản của bài, giá trị thấp thường làm đầu ra ít biến đổi hơn; giá trị cao có thể tạo nhiều cách diễn đạt hoặc ý tưởng đa dạng hơn.

`temperature` không phải thước đo độ đúng. Hạ giá trị này không bổ sung dữ liệu còn thiếu và không sửa được một nguồn thông tin sai. Cũng không nên hứa rằng đặt bằng 0 sẽ luôn cho kết quả giống hệt ở mọi hệ thống và mọi lần chạy.

Ví dụ: Nếu muốn tìm nhiều ý tưởng, bạn có thể so sánh những cấu hình được mô hình hỗ trợ trên cùng yêu cầu. Nếu cần trạng thái đơn hàng mới nhất, điều cần bổ sung là dữ liệu từ hệ thống đơn hàng, không phải chỉ thay `temperature`.

Mô hình và API có thể khác nhau về việc hỗ trợ tham số, khoảng giá trị và cách dùng cùng chế độ suy luận (thinking). Khi triển khai, hãy đối chiếu phiên bản và đánh giá trên công việc thực tế.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An order bot gives stable but incorrect answers at low temperature; no order lookup occurs. What is the priority?

A. Lower temperature further.

B. Raise temperature to guess another status.

C. Provide current order evidence and verify lookup results.

D. Vote across repeated identical prompts.

**Question 2 — Choose one.** Two brainstorming temperatures are evaluated on different requests. The higher one scores better for diversity. What is justified?

A. Compare lengths to eliminate task differences.

B. Compare sampling settings on identical requests and criteria.

C. Deploy the higher setting for all tasks.

D. Low temperature is never suitable for brainstorming.

**Question 3 — Choose two.** Which TWO statements belong in auditable operational criteria?

A. Low temperature may reduce variation without guaranteeing identical outputs.

B. Correctness still requires evaluation and evidence checks.

C. Temperature zero replaces regression tests.

D. Repeated answers count as verified facts.

**Question 4 — Choose one.** Old sampling parameters are rejected after switching models and enabling reasoning. What should happen?

A. Check supported parameter combinations for the target model and API.

B. Try random values until a request succeeds.

C. Conclude the model is worse.

D. Ignore errors and return a cached answer.

**Question 5 — Choose two.** Sources conflict, and the team wants to measure temperature effects. Which TWO concerns should be separated?

A. Choose a setting that always ignores one source.

B. Evaluate faithful reporting of source conflicts separately.

C. Measure output variation across runs with identical inputs and settings.

D. Use self-reported confidence as the target temperature.

## Đáp án và giải thích

1. **C.** A sai: Ổn định hơn vẫn có thể ổn định ở kết luận sai. B sai: Đa dạng suy đoán không thay bằng chứng. C đúng: Sampling không tạo dữ liệu môi trường đang thiếu. D sai: Các lần đoán có thể cùng thiếu một nguồn quan trọng.

2. **B.** A sai: Độ dài không kiểm soát độ khó hay độ đa dạng nội dung. B đúng: Thiết kế so sánh hiện có biến gây nhiễu. C sai: Đa dạng không đại diện độ đúng cho mọi tác vụ. D sai: Một phép so chưa kiểm soát không chứng minh quy luật chung.

3. **A, B.** A đúng: Không suy từ xu hướng thành cam kết tuyệt đối. B đúng: Sampling không phải thước đo tính chính xác. C sai: Không có bảo đảm đó và môi trường còn có thể đổi. D sai: Nhất quán không chứng minh nguồn đúng.

4. **A.** A đúng: Lỗi tương thích cần giải quyết trước so sánh hành vi. B sai: Không xác lập cấu hình được hỗ trợ có chủ đích. C sai: Hỗ trợ cấu hình không đồng nhất năng lực nhiệm vụ. D sai: Không sửa khả năng tương thích của yêu cầu mới.

5. **B, C.** A sai: Nhất quán bằng cách giấu mâu thuẫn không giải quyết độ đúng. B đúng: Đây là chất lượng sử dụng bằng chứng. C đúng: Đây là cách quan sát ảnh hưởng sampling. D sai: Hai đại lượng khác vai trò, không thay thế nhau.

## Đối chiếu Bedrock

Mẫu Converse đặt tham số ở `inferenceConfig.temperature`. Giá trị thấp có thể giảm độ biến đổi, không bảo đảm thông tin đúng hoặc kết quả giống hệt mọi lần. Khoảng giá trị và mặc định trong video cần kiểm tra trước khi dùng với mô hình khác. Dùng chung câu hỏi.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276720). Bản lưu: `sources/bedrock-lessons/276720.json`.

## Đối chiếu Vertex

Mẫu `messages.create` đặt `temperature` trực tiếp, khác `inferenceConfig` của Bedrock Converse. Chọn theo xác suất không có nghĩa mỗi lần nhất thiết ra kết quả khác. Giá trị thấp cũng không bảo đảm câu trả lời đúng hoặc luôn lặp lại hoàn toàn giống nhau.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289154). Bản lưu: `sources/vertex-lessons/289154.json`.
