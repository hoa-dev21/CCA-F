# Đánh đổi giữa dự đoán và linh hoạt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287794), sources/api-lessons/287794.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Workflow và agent có điểm mạnh, hạn chế khác nhau. Lựa chọn nên dựa trên nhiệm vụ và kết quả đánh giá, không chỉ dựa vào tên công nghệ.

Workflow quy định các bước từ trước. Bạn dễ kiểm thử từng bước và theo dõi dữ liệu, nhưng khó xử lý yêu cầu nằm ngoài những đường đã thiết kế.

Agent cho mô hình chọn hướng giải quyết từ mục tiêu và công cụ được cấp. Cách này hữu ích khi cần đổi hướng theo phát hiện mới hoặc hỏi thêm dữ liệu. Đổi lại, nhiều chuỗi hành động có thể xảy ra, khiến việc dự đoán, đánh giá và tìm lỗi khó hơn.

Ví dụ: Trích xuất dữ liệu theo cấu trúc cố định có thể dùng workflow với kiểm tra ở từng bước. Điều tra một sự cố chưa rõ nguyên nhân có thể cần agent khảo sát và chọn bước tiếp theo. Một ứng dụng có thể dùng cả hai cho những phần việc khác nhau.

Hãy bắt đầu bằng cách giải quyết đủ tin cậy cho bài toán và thêm quyền tự chủ khi có nhu cầu rõ. Không thể kết luận mọi workflow tốt hơn agent, hoặc ngược lại, nếu chưa xét yêu cầu và dữ liệu cụ thể.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Ninety percent of requests extract fixed forms; ten percent require investigating missing documents. The team wants predictable tests and autonomy only for exceptions. Which architecture fits?

A. A standard workflow with a bounded agent for investigation.

B. A fixed workflow that drops unknown fields in exceptions.

C. An agent controlling every step for both groups.

D. Two agents voting on every form.

**Question 2 — Choose one.** An incident investigation discovers an unplanned dependency. What supports choosing an agent over a fixed workflow here?

A. The investigation path must adapt to new evidence to meet the objective.

B. Longer agent explanations prove quality.

C. A large tool count alone requires model-controlled sequencing.

D. Autonomy permits skipping intermediate checks.

**Question 3 — Choose two.** Which TWO findings should precede replacing a successful workflow with an agent?

A. A demo solving a case the workflow already handles.

B. Marketing claims about a new model's planning ability.

C. Real failures requiring paths inadequately represented by the workflow.

D. Representative comparisons of quality, latency, and failure rates.

**Question 4 — Choose one.** Two designs have equal final success rates, but the agent takes variable tool paths. What additional evaluation supports diagnosis?

A. Use one successful path as the standard for all requests.

B. Compare output tokens only.

C. Score language quality alone.

D. Inspect execution paths and intermediate results.

**Question 5 — Choose two.** A workflow requires approval before publishing. An agent is added to investigate missing information. Which TWO principles preserve the intended architecture?

A. Replace all fixed steps with prompt instructions.

B. Let the agent bypass approval when sources seem sufficient.

C. Retain the publication approval gate despite autonomous research.

D. Limit autonomy to adaptive work and measure its outcomes.

## Đáp án và giải thích

1. **A.** A đúng: Tự chủ được đặt vào phần có nhu cầu thích ứng. B sai: Giảm phức tạp bằng cách bỏ yêu cầu điều tra chưa đáp ứng nhiệm vụ. C sai: Tăng số đường thực thi cho phần vốn cố định mà chưa có lợi ích rõ. D sai: Thêm chi phí và biến thiên cho toàn bộ luồng, chưa giải quyết phân loại nhiệm vụ.

2. **A.** A đúng: Nhu cầu thích ứng là lợi ích trực tiếp của agent. B sai: Độ dài giải thích không đo tính đúng. C sai: Số công cụ không quyết định cấu trúc điều phối. D sai: Tự chủ vẫn cần quan sát và kiểm chứng.

3. **C, D.** A sai: Không cho thấy lợi ích bổ sung trên phạm vi tác vụ. B sai: Khả năng chung không chứng minh phù hợp hệ thống này. C đúng: Cần nhu cầu chức năng cụ thể. D đúng: Lợi ích phải được đo cùng đánh đổi.

4. **D.** A sai: Agent có thể cần các đường khác hợp lệ. B sai: Token không phản ánh toàn bộ hành động và lỗi trung gian. C sai: Cách diễn đạt không đo độ tin cậy điều phối. D đúng: Nhiều đường có thể che giấu nguyên nhân khác nhau.

5. **C, D.** A sai: Chuyển điều khiển sang prompt làm tăng biến thiên chưa có nhu cầu. B sai: Đủ dữ liệu không thay quyền phê duyệt đã yêu cầu. C đúng: Mở quyền khám phá không đồng nghĩa bỏ ràng buộc rõ. D đúng: Giảm không gian hành động không cần thiết.

## Đối chiếu Vertex

Workflow thường dễ dự đoán và đánh giá hơn nhưng ít linh hoạt; agent thích ứng tốt hơn nhưng khó kiểm soát chi phí và độ tin cậy hơn. Chọn theo yêu cầu và kết quả đo. Nhận định trong video về tỷ lệ hoàn thành thấp hơn không phải số đo chung cho mọi hệ thống; chọn workflow cũng không tự bảo đảm thành công 100%. Dùng chung câu hỏi.

Nguồn đối chiếu: [Workflows vs agents](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289245). Bản lưu: `sources/vertex-lessons/289245.json`.
