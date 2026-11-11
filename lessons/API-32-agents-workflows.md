# Chọn cách điều phối

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287796), sources/api-lessons/287796.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có hai cách tổ chức ứng dụng AI cần phân biệt: quy trình định sẵn (workflow) và tác nhân AI (agent).

Với workflow, chương trình quy định trước các bước và đường đi chính, phù hợp khi nhiệm vụ có trình tự rõ. Với agent, mô hình chọn bước và công cụ tiếp theo dựa trên mục tiêu cùng thông tin vừa nhận, phù hợp khi chưa biết trước toàn bộ cách giải.

Số lần gọi mô hình không quyết định hệ thống thuộc loại nào. Năm lần gọi theo thứ tự cố định vẫn có thể là workflow. Một agent có thể giải yêu cầu đơn giản bằng ít bước. Câu hỏi quan trọng là ai quyết định bước tiếp theo.

Bài còn giới thiệu cách tạo rồi đánh giá và sửa kết quả (evaluator–optimizer). Một thành phần tạo bản đầu, thành phần khác đánh giá theo tiêu chí, rồi phản hồi được dùng để sửa. Vẫn phải có mã điều phối và điều kiện chấp nhận kết quả.

Ví dụ: Chuẩn hóa báo cáo theo các bước đã biết có thể dùng workflow. Điều tra lỗi chưa rõ nguyên nhân có thể cần agent chọn hướng khảo sát theo phát hiện mới. Hãy chọn theo nhiệm vụ, không mặc định agent luôn tốt hơn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** One system makes five model calls in a fixed sequence; another lets the model choose tools from observations. What distinguishes them?

A. The number of coordinated steps.

B. Who determines the next step.

C. Whether a programmed revision loop exists.

D. Whether multiple tools can be called, regardless of control.

**Question 2 — Choose one.** A report-normalization task has stable mandatory steps and an auditable order. What is the best starting design?

A. An agent choosing every step for maximum flexibility.

B. One long prompt without recorded state.

C. A workflow with explicit transitions and checks.

D. Run every step in parallel and choose the most complete-looking output.

**Question 3 — Choose two.** An investigation may branch from logs to configuration or data checks. Which TWO properties support a bounded agent?

A. The next investigation step depends on new findings.

B. Every request follows the same fixed sequence.

C. Scoped tools, stopping conditions, and controlled costs are available.

D. No success criteria exist, so it should run until resources are exhausted.

**Question 4 — Choose one.** An evaluator-optimizer keeps alternating tone without improving business quality. What addresses this?

A. Increase iterations until both models agree.

B. Use identical generator and evaluator prompts.

C. Discard evaluation after one failure and accept the draft.

D. Use a clear rubric, acceptance threshold, and iteration limit.

**Question 5 — Choose two.** Which TWO findings justify replacing a well-performing workflow with an agent?

A. Task variability makes fixed paths miss requirements or waste work.

B. Agents can write longer answers.

C. Measured quality and adaptability gains outweigh added cost and complexity.

D. One successful demo used several tools.

## Đáp án và giải thích

1. **B.** B xét chủ thể quyết định bước tiếp. A độ phức tạp không xác định cơ chế điều khiển. C vòng evaluator–optimizer vẫn có thể là workflow định sẵn. D nhiều tools cũng có thể được gọi theo chuỗi cố định.

2. **C.** C tận dụng cấu trúc nhiệm vụ và khả năng audit. A thêm tự do chưa cần. B khó quan sát/cưỡng chế bước. D bỏ phụ thuộc và thứ tự bắt buộc.

3. **A, C.** A tạo nhu cầu quyết định thích ứng; C cung cấp năng lực và giới hạn vận hành. B phù hợp workflow hơn. D thiếu mục tiêu/điểm dừng làm chất lượng khó đánh giá.

4. **D.** D tạo mục tiêu ổn định và điều khiển vòng lặp. A tăng chi phí trong chu kỳ không rõ mục tiêu. B không giải quyết tiêu chí. C thay việc đánh giá bằng giả định thành công.

5. **A, C.** A xác định nhu cầu; C đo lợi ích ròng. B độ dài không đo hiệu quả. D một demo không đại diện cho chất lượng và chi phí vận hành.

## Đối chiếu Vertex

Ví dụ Image-to-CAD đi từ mô tả sang mã CadQuery, dựng hình rồi chấm và sửa. Đây là quy trình tạo–đánh giá–cải thiện có các bước định trước, không tự trở thành agent chỉ vì gọi mô hình nhiều lần. Ứng dụng phải điều phối, đặt điều kiện chấp nhận và giới hạn lỗi hoặc số vòng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289244). Bản lưu: `sources/vertex-lessons/289244.json`.
