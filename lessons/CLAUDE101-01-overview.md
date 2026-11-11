# What is Claude?

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383389), sources/claude101-lessons/383389.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Claude có thể hỗ trợ viết, phân tích, lập trình, học tập và giải quyết vấn đề. Để nhận kết quả hữu ích, bạn cần cung cấp thông tin liên quan, nói rõ yêu cầu và dùng kiến thức của mình để kiểm tra câu trả lời.

Bài học giới thiệu nhiều cách sử dụng Claude. Ứng dụng trò chuyện phù hợp để hỏi đáp và cùng chỉnh sửa ý tưởng. Claude Code phục vụ công việc phát triển phần mềm, như đọc và sửa tệp hoặc chạy lệnh khi có môi trường và quyền phù hợp.

Ví dụ: Nếu chỉ cần giải thích một đoạn mã, bạn có thể trao đổi trong chat. Nếu cần sửa mã trong một dự án và chạy kiểm thử, bạn cần công cụ có khả năng truy cập dự án và thực hiện các thao tác đó. Cùng mang tên Claude không có nghĩa mọi giao diện đều có quyền và khả năng như nhau.

Đây là bài định hướng. Tên mô hình, gói dịch vụ và giới hạn sản phẩm có thể thay đổi, nên cần kiểm tra khi sử dụng. Khi ôn Architect theo đề cương đã lưu, hãy ưu tiên thiết kế ứng dụng; các chi tiết về cách huấn luyện mô hình và Constitutional AI không phải trọng tâm của đề cương đó.

## Tự kiểm tra

**Question 1 — Choose one.** A chat proposes a plausible patch but cannot access the repository. The task requires fixing a bug and proving tests pass. What meets the requirement?

A. Describe the patch and mark the bug fixed.

B. Ask the same chat to infer test results from pasted code.

C. Switch to any interface named Claude and assume access.

D. Use authorized project tools to apply changes, run tests, and inspect results.

**Question 2 — Choose two.** Which TWO elements must be designed for an assistant analyzing private company reports?

A. Criteria checking conclusions against documents and intended use.

B. Relevant data provisioning and appropriate access.

C. Professional writing as proof of accurate interpretation.

D. Training knowledge as a current copy of all internal documents.

**Question 3 — Choose one.** You only need an explanation of supplied code, without edits or execution. What requires the least access?

A. Grant deployment access to test explanations live.

B. Discuss the supplied code and identify unverified claims.

C. Grant the full repository and shell access first.

D. Launch an editing agent and explain its diff.

**Question 4 — Choose two.** A deployment proposal relies on an old service-plan video. Which TWO checks support a sound choice?

A. Promise customers the old plan's limits.

B. Choose the interface matching the screenshot.

C. Match required operations with actual data and permissions.

D. Verify capabilities and limits in the intended environment.

**Question 5 — Choose one.** After one successful trial, management wants AI to make final decisions on all reports. What is appropriate?

A. Expand automatically because one trial succeeded.

B. Remove sources and delegate every conclusion.

C. Ask for cautious wording and remove review.

D. Define scope and verify conclusions before use.

## Đáp án và giải thích

1. **D.** D cung cấp khả năng thực hiện và kiểm chứng còn thiếu. A nhầm đề xuất với hành động; B mô phỏng nhận xét thay vì chạy test; C suy khả năng từ tên sản phẩm.

2. **A, B.** B bảo đảm có dữ liệu; A kiểm chứng chất lượng. D không đúng với dữ liệu riêng và mới; C nhầm phong cách với tính đúng.

3. **B.** B đủ cho mục tiêu giải thích. C mở rộng quyền chưa cần thiết; D thay nhiệm vụ phân tích thành sửa đổi; A tạo tác động không cần cho yêu cầu.

4. **C, D.** D kiểm tra điều kiện hiện tại; C gắn công cụ với nhu cầu. B dựa vào hình thức; A biến thông tin lịch sử thành bảo đảm chưa được xác minh.

5. **D.** D giữ vai trò đánh giá của con người. A suy khái quát từ một mẫu; B mất căn cứ; C thay đổi giọng văn không tạo bằng chứng về tính đúng.
