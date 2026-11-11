# Quyền thực thi và kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486932), sources/code-lessons/486932.json. Câu hỏi tự biên soạn; tên và hành vi mode cần kiểm tra lại khi triển khai phiên bản khác.

## Nội dung bài học


Chế độ quyền quyết định công cụ được làm gì và khi nào cần người duyệt. Hãy chọn theo nhiệm vụ và việc có người theo dõi hay không. Bài học mô tả các chế độ sau; tên và hành vi cụ thể cần đối chiếu với phiên bản đang dùng:

- Manual: yêu cầu phê duyệt cho các thao tác ngoài việc đọc theo phạm vi bài mô tả.
- Accept edits: hỗ trợ quá trình sửa tệp có người theo dõi.
- Plan: đọc và phân tích để lập kế hoạch trước khi thực hiện.
- Auto: dùng bộ phân loại để xem xét hành động.
- Don't ask: dùng các công cụ đã được phê duyệt trước, tự từ chối thao tác ngoài phạm vi thay vì chờ hỏi.
- Bypass: bỏ kiểm tra quyền trong môi trường cô lập như trường hợp bài giới thiệu.

Cần phân biệt “được phép làm” với “làm đúng”. AI có thể được phép sửa một tệp nhưng vẫn viết sai logic. Kiểm tra quyền không thay thế việc đọc thay đổi và chạy kiểm thử.

Với CI — quy trình tự động xây dựng và kiểm thử mã — thường không có người trực để trả lời hộp thoại phê duyệt. Cần cho phép trước các công cụ cần thiết và xác định rõ cách từ chối thao tác ngoài phạm vi. Không nên dùng bypass chỉ để giải quyết việc cấu hình quyền còn thiếu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An agent may edit and test, but tests fail. Does passing permission checks justify merging?

A. Permissions prove the agent chooses correct actions.

B. It means hidden permission failure requires more access.

C. Permissions limit actions; separate gates verify quality.

D. Changing modes makes unchanged code correct.

**Question 2 — Choose one.** Unattended CI waits for approval input. Which design avoids hanging while preserving limits?

A. Run non-interactively with an allowlist and deny out-of-scope actions.

B. Answer yes to every prompt.

C. Increase timeouts indefinitely.

D. Disable permissions for the first run.

**Question 3 — Choose two.** The team wants to compare architectures before allowing edits. Which TWO choices fit?

A. Use planning mode and define comparison deliverables.

B. Implement both in the same directory immediately.

C. Provide constraints, sources to read, and decision criteria.

D. Treat planning authorization as deployment approval.

**Question 4 — Choose one.** A test needs cache writes in a permitted directory but is denied. What is the minimal appropriate response?

A. Grant unrestricted filesystem access.

B. Verify the need and allow only the required write scope.

C. Replace tests with reasoning.

D. Rename the command to evade checks.

**Question 5 — Choose two.** A read-only diff-review job has broad write and network access. Which TWO changes reduce excess authority?

A. Restrict tools and permissions to read-only review.

B. Keep access and append “be careful.”

C. Define how to report needs outside scope rather than self-expanding authority.

D. Keep broad access because previous runs performed well.

## Đáp án và giải thích

1. **C.** C phân biệt quyền hành động và tính đúng của sản phẩm. A nhầm hai khái niệm. B không có căn cứ từ lỗi test. D thay mode không sửa hành vi lỗi của code.

2. **A.** A định trước quyền và đường thất bại trong môi trường headless. B/C không kiểm soát đúng giới hạn hoặc không phù hợp không người trực. D mở quyền trước khi hiểu tác động.

3. **A, C.** A đặt chế độ/mục tiêu nghiên cứu; C cung cấp cơ sở so sánh. B đã thực hiện thay đổi trước quyết định. D suy rộng quyền nghiên cứu thành quyền triển khai.

4. **B.** B xử lý nhu cầu cụ thể với phạm vi nhỏ nhất phù hợp. A mở quá rộng; C mất bằng chứng; D né cơ chế quyền mà không giải quyết giới hạn được đặt.

5. **A, C.** A giới hạn năng lực; C tạo đường xử lý nhu cầu mới. B chỉ hướng dẫn. D lịch sử chất lượng không chứng minh mọi thao tác tương lai đều phù hợp nhiệm vụ hiện tại.
