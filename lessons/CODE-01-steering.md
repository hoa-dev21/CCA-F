# Điều hướng phiên dài

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486901), sources/code-lessons/486901.json. Câu hỏi tự biên soạn. Các tính năng mới trong khóa không mặc định đều nằm trong Exam Guide.

## Nội dung bài học


Với nhiệm vụ dài, nên khảo sát dự án và làm rõ hướng triển khai trước khi sửa mã. Chế độ lập kế hoạch (plan mode) phục vụ việc đọc, phân tích và đề xuất. Bạn có thể xem kế hoạch, bổ sung yêu cầu còn thiếu rồi mới cho thực hiện.

Khi cuộc trò chuyện dài, hệ thống có thể rút gọn lịch sử thành bản tóm tắt để dành chỗ cho thông tin mới. Quá trình này gọi là compaction và có thể làm mất chi tiết. Hãy nêu rõ những gì cần giữ: quyết định thiết kế, yêu cầu chưa hoàn thành và kết quả kiểm tra đã có.

Bài học còn giới thiệu rewind, tức quay lại một mốc đã lưu (checkpoint). Khi dùng, cần xác định muốn khôi phục mã, nội dung trò chuyện hay cả hai. Hai loại trạng thái này không nên bị nhầm với nhau.

Cần phân biệt mục tiêu (goal) với việc chạy lặp (loop). Mục tiêu có điều kiện hoàn tất kiểm chứng được, chẳng hạn các bài kiểm thử được chỉ định đã chạy thành công. Chạy lặp chỉ là thực hiện yêu cầu theo nhịp, chẳng hạn kiểm tra kết quả CI — hệ thống tự động xây dựng và kiểm thử mã. Chạy nhiều lần không chứng minh đã đạt mục tiêu.

Nếu nhiều phiên cùng sửa một kho mã nguồn, Git worktrees cho mỗi phiên một cây tệp riêng để giảm việc ghi đè. Sau khi hợp nhất, vẫn phải kiểm tra các thay đổi có tương thích hay không. Khi ôn thi, ưu tiên lập kế hoạch, quản lý ngữ cảnh và bằng chứng thực thi; đối chiếu đề cương riêng cho các tính năng bổ sung.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** After compaction, an agent forgets “do not change the public API” during refactoring. What reduces this risk before continuing?

A. Hand off constraints and required state, then recheck the diff.

B. Increase response length.

C. Resend only the original request without current progress.

D. Provide only the branch name.

**Question 2 — Choose two.** Two independent sessions must edit one module concurrently. Which TWO measures reduce overwrites?

A. Share one directory and say “do not overwrite.”

B. Use separate worktrees.

C. Treat worktrees as a substitute for integration tests.

D. Review and retest combined changes.

**Question 3 — Choose one.** An agent reports refactoring complete, with shorter code but no execution evidence. Which criterion is most verifiable?

A. No further suggestions appear.

B. Line count fell and the agent considers risk low.

C. Relevant tests and type checks pass, and the diff is reviewed.

D. The planned iteration count was used.

**Question 4 — Choose one.** The user changes scope to UI only, preserving storage, after a schema-change plan was made. What should the agent do?

A. Finish the old plan to preserve research effort.

B. Change the schema without mentioning it.

C. Summarize the new request but retain schema steps.

D. Update scope and plan, inspect existing changes, and continue only work aligned with the new request.

**Question 5 — Choose two.** Which TWO items belong in a long-session debugging handoff?

A. Constraints, modified files, test results, and unverified work.

B. Only “almost done” to avoid bias.

C. Sources or paths to reread and concrete next steps.

D. An entire transcript instead of explicit task state.

## Đáp án và giải thích

1. **A.** A bảo toàn thông tin điều khiển và kiểm tra việc tuân thủ. B tăng đầu ra không đưa lại dữ kiện đã mất. C mất tiến độ và quyết định mới. D tên nhánh không chứa hợp đồng thiết kế.

2. **B, D.** B cách ly file đang sửa; D phát hiện xung đột ngữ nghĩa sau hợp nhất. A chỉ là lời nhắc trong khi vẫn chung file. C nhầm cách ly thao tác với tính tương thích của kết quả.

3. **C.** C gắn hoàn tất với bằng chứng thực thi và phạm vi thay đổi. A là trạng thái hội thoại; B là chỉ số trình bày; D là lượng công việc đã tiêu, không phải tính đúng.

4. **D.** D đưa chỉ dẫn mới vào hành động và rà tác động đã có. A ưu tiên chi phí chìm. B thay đổi ngoài phạm vi. C đổi mô tả mà không đổi kế hoạch thực thi.

5. **A, C.** A và C cho phép tiếp tục có kiểm chứng, phân biệt đã làm và còn mở. B không cung cấp trạng thái. D có thể dùng làm nguồn phụ nhưng không thay thế bàn giao rõ ràng và dễ chứa thông tin cũ.
