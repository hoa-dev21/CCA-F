# Tình huống cấu hình Claude Code và lặp sửa theo bằng chứng

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục3.1–3.6, trang PDF12–15. Câu hỏi tự biên soạn.

## Nội dung bài học


Chọn nơi đặt hướng dẫn theo người cần dùng và thời điểm áp dụng. CLAUDE.md chứa quy ước chung; quy tắc theo đường dẫn (path-scoped rules) áp dụng cho tệp khớp mẫu; skill đóng gói quy trình gọi khi cần. Chia tài liệu bằng imports giúp tổ chức, nhưng phần được nạp vẫn chiếm ngữ cảnh.

Ví dụ: Quy ước kiểm thử của cả nhóm không nên chỉ nằm trong `~/.claude/CLAUDE.md` cá nhân. Có thể đặt quy tắc trong `.claude/rules/` của dự án, khai báo YAML `paths` khớp `**/*.test.tsx`, quản lý phiên bản và kiểm tra quy tắc đã được nạp.

Nhiệm vụ nhiều phương án hoặc phụ thuộc cần khảo sát, lập kế hoạch rồi mới thực hiện. Thay đổi nhỏ đã rõ có thể sửa trực tiếp và kiểm chứng. Nếu còn giả định thiết kế chưa biết, hỏi để làm rõ trước khi chọn phương án.

Khi mô tả bị hiểu khác nhau, đưa đầu vào và đầu ra cụ thể. Ví dụ: “xử lý giá trị trống” cần các mẫu phân biệt `null` với chuỗi rỗng, kèm kết quả kiểm thử mong đợi và thực tế. Hai hoặc ba cặp mẫu đã kiểm tra có ích hơn yêu cầu chung “sửa cho đúng”.

Trong CI, dùng chế độ không tương tác, cấu trúc đầu ra rõ và đủ ngữ cảnh dự án. Phản hồi JSON hợp lệ chưa chứng minh nhận xét đúng hoặc kiểm thử có giá trị; cần kiểm tra nội dung, vị trí và bằng chứng trước khi chuyển sang bước sau. Phiên rà soát độc lập nên nhận yêu cầu, diff, tiêu chí và các phát hiện cũ nếu đang kiểm tra lại.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A test rule exists only in the author's personal CLAUDE.md. Teammates need it, but only `.test.tsx` files across packages should be affected. Which design meets both requirements?

A. Version a project rule with suitable `paths` and verify loading in a fresh environment.

B. Copy the author's entire user configuration to every machine.

C. Put the rule in a README whose name includes “test” and rely on inferred scope.

D. Put it in one session's system prompt and share the session ID.

**Question 2 — Choose one.** An agent interprets “empty values” inconsistently as `null` or an empty string. Which feedback supports a precise fix with fewer iterations?

A. “Be more rigorous and handle edge cases.”

B. Add random tests without defining expected behavior.

C. Provide `null`, empty-string, and whitespace examples with expected and actual failing-test results.

D. Send all build logs and ask the agent to infer the intended meaning.

**Question 3 — Choose two.** A CI review waits for interactive input, and its reviewer reuses the coding agent's entire context. Which TWO changes address these causes?

A. Automatically approve every prompt in CI.

B. Run non-interactively with predefined permissions and explicit denial handling.

C. Use an independent reviewer with requirements, the diff, and review criteria.

D. Increase the timeout and ask the coding agent to criticize itself.

**Question 4 — Choose one.** A CLI returns a JSON envelope containing structured results. An adapter passes all stdout directly to the findings-schema parser and fails. What is the correct fix?

A. Take only the last stdout line because it is usually the answer.

B. Accept any object and treat successful parsing as validation.

C. Ask the model to avoid Markdown without changing the adapter.

D. Parse the envelope, then validate the structured result and execution status.

**Question 5 — Choose two.** After updating a rule, the team wants evidence that it applies to tests without affecting unrelated files. Which TWO checks are valuable?

A. Verify rule loading for representative test paths across packages.

B. Confirm that the configuration file was committed successfully.

C. Try paths outside the intended scope to verify non-application.

D. Infer the glob behavior from the rule's name alone.

## Đáp án và giải thích

1. **A.** A đưa hướng dẫn tới đúng scope và kiểm chứng tải. B lan cả thiết lập cá nhân không liên quan; C tên tài liệu không bảo đảm cơ chế nạp/scoping; D không tạo cấu hình dự án bền vững.

2. **C.** C biến yêu cầu mơ hồ thành hành vi kiểm chứng được. A không định nghĩa semantics; B có thể kiểm tra sai kỳ vọng; D thêm dữ liệu nhưng vẫn thiếu hợp đồng cần thực hiện.

3. **B, C.** B bỏ tương tác không phù hợp CI mà vẫn giữ phạm vi quyền; C giảm ảnh hưởng lập luận của tác giả. A cấp quyền không phân biệt; D không loại cả nguyên nhân chờ lẫn thiên lệch context.

4. **D.** D phân biệt giao thức CLI và schema nghiệp vụ. A phụ thuộc trình bày; B mất kiểm tra; C thay văn phong mô hình không sửa việc adapter đọc nhầm tầng dữ liệu.

5. **A, C.** A kiểm tra positive case, C kiểm tra boundary/negative case. B chỉ chứng minh lưu vào Git. D tên có ý nghĩa không xác nhận cú pháp và hành vi glob.
