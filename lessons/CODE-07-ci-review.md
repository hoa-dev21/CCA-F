# kiểm tra quản lý và CI tùy biến

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486936), sources/code-lessons/486936.json. Câu hỏi tự biên soạn; thông tin dịch vụ preview cần kiểm tra trước triển khai.

## Nội dung bài học


Bài học so sánh dịch vụ rà soát mã được quản lý sẵn với quy trình tùy biến bằng GitHub Actions. Chọn theo việc bạn cần hệ thống thực hiện.

Theo phạm vi dịch vụ được mô tả trong bài, dịch vụ rà soát phân tích thay đổi trong bối cảnh dự án, đăng nhận xét lên yêu cầu hợp nhất mã (pull request, viết tắt là PR), xếp mức độ nghiêm trọng và giảm nhận xét trùng lặp. Dịch vụ này không tự sửa mã hay tự phê duyệt hoặc chặn PR; con người vẫn quyết định cách xử lý.

GitHub Actions phù hợp khi bạn cần xây một quy trình riêng, chẳng hạn sửa mã theo yêu cầu trong bình luận hoặc tạo báo cáo theo lịch. Quy trình phải nêu sự kiện kích hoạt, yêu cầu gửi AI và các tùy chọn dòng lệnh cần dùng.

Nếu quy trình chạy không có người theo dõi, hãy cấu hình quyền để nó không bị treo khi chờ phê duyệt. Chỉ cấp công cụ phục vụ nhiệm vụ; một báo cáo chỉ đọc dữ liệu không cần quyền sửa mã.

Giới hạn số lượt giúp kiểm soát tài nguyên. Khi chạm giới hạn, chỉ có thể kết luận tác vụ đã dừng vì hết lượt, chưa thể kết luận công việc hoàn tất. Tương tự, có nhận xét rà soát trên PR không có nghĩa mọi kiểm thử và điều kiện chấp nhận đã đạt.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A review service reports findings but does not edit. The team needs code fixes from PR comments. Which design meets the need?

A. Add an `auto-fix` label and assume editing exists.

B. Raise severity to enable writes.

C. Use a custom action with bounded permissions and verification.

D. Skip tests because comments authorize the fix.

**Question 2 — Choose one.** A scheduled reporting job has edit and deployment permissions. What is appropriate?

A. Restrict access to reading and report generation.

B. Keep broad permissions to avoid refusals.

C. Add “do not deploy” without restricting access.

D. Hide write-tool logs.

**Question 3 — Choose two.** An action reaches its turn limit after posting some PR comments. Which TWO checks precede declaring review complete?

A. Using the limit proves full coverage.

B. Execution status and actual reviewed scope.

C. Acceptance gates and missing evidence.

D. One comment proves all files were reviewed.

**Question 4 — Choose one.** Unattended CI occasionally waits for permission until timeout. What fixes automation within predefined limits?

A. Raise the timeout.

B. Approve everything because the repository is internal.

C. Retry until the model stops asking.

D. Run non-interactively with required permissions and deny outside scope.

**Question 5 — Choose two.** Which TWO evidence types support rolling out an updated review prompt?

A. Evaluate findings on representative PRs containing real defects and valid patterns.

B. Verify permissions, triggers, and output handling for the intended workflow.

C. Only verify comment posting.

D. Only check professional tone.

## Đáp án và giải thích

1. **C.** C tạo workflow có khả năng thực hiện hành động cần thiết. A/B không mở rộng chức năng ngoài phạm vi dịch vụ. D quyền sửa không thay thế việc chứng minh bản sửa đúng.

2. **A.** A giảm năng lực không phục vụ nhiệm vụ. B ưu tiên tiện lợi hơn phạm vi công việc. C là hướng dẫn chưa phải giới hạn thực thi. D giảm khả năng quan sát nhưng vẫn giữ quyền thừa.

3. **B, C.** B xác định phần đã làm, C xác định điều kiện hoàn tất. A nhầm giới hạn tài nguyên với kết quả. D comment không chứng minh độ bao phủ hay chất lượng toàn bộ PR.

4. **D.** D xử lý quyền như một phần thiết kế CI. A vẫn phụ thuộc người không trực. B bỏ ranh giới thao tác. C không sửa điều kiện gây treo và kết quả phụ thuộc may rủi.

5. **A, B.** A đo chất lượng quyết định, B đo vận hành và phạm vi. C chỉ chứng minh một khả năng kết nối. D không chứng minh finding đúng hoặc pipeline xử lý trạng thái lỗi đúng.
