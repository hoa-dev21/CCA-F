# Quy trình kiểm chứng dùng lại

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486930), sources/code-lessons/486930.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Skill là bộ hướng dẫn đóng gói một quy trình để dùng lại. Ví dụ: sau mỗi lần tổ chức lại mã (refactor), một skill kiểm chứng có thể yêu cầu chạy kiểm thử, đọc phần thay đổi và báo kết quả kèm bằng chứng.

Phần mô tả của skill giúp hệ thống nhận biết khi nào nên dùng. Hướng dẫn chi tiết và tài liệu tham khảo được đọc khi cần; mã lệnh hỗ trợ có thể đặt cùng thư mục. Nên giữ hướng dẫn chính ngắn gọn và liên kết tới tài liệu giải thích sâu hơn.

Ba loại cấu hình có vai trò khác nhau: CLAUDE.md chứa quy ước thường xuyên áp dụng; skill hướng dẫn quy trình cho một loại nhiệm vụ; hook chạy mã tại một sự kiện để kiểm tra hoặc chặn thao tác. Nếu một bước tuyệt đối không được bỏ qua, chỉ viết nó trong skill chưa đủ để bắt buộc thực hiện.

Ví dụ: Một bài kiểm thử báo thành công sau khi AI xóa điều kiện kiểm tra quan trọng, gọi là assertion. Kết quả đó chưa chứng minh tính năng đúng. Cần xem diff — phần khác biệt giữa mã trước và sau khi sửa — để biết phép kiểm tra có bị làm yếu hay không, đồng thời xem kết quả chạy thực tế.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A team repeatedly inspects diffs, runs targeted tests and type checks, and records evidence. How should this be packaged for intentional reuse?

A. A skill describing when to use it, verification steps, and required evidence.

B. The previous refactor's full transcript in every new session.

C. A branch named `verify`.

D. Only a test-command alias as the entire standard process.

**Question 2 — Choose one.** Tests pass after a fix, but the diff removes an important assertion. What should precede acceptance?

A. Accept because all remaining tests pass.

B. Review test strength and obtain evidence against original requirements.

C. Ask for model confidence.

D. Add unrelated tests to replace the assertion count.

**Question 3 — Choose two.** A check is mandatory before release. Which TWO elements support reliable enforcement?

A. Document the step in a skill.

B. Rely on the skill alone as an unbypassable permission boundary.

C. Use a programmatic or permission gate that denies release until the check passes.

D. Release first and check afterward.

**Question 4 — Choose one.** A skill passed tests before further edits. What should happen before claiming completion now?

A. Accept if the final edit is under ten lines.

B. Attach old logs again.

C. Skip checks because the skill already ran once.

D. Recheck affected behavior on current code.

**Question 5 — Choose two.** Which TWO reporting details prevent false success from a multi-package verification skill?

A. The package or scope checked and actual commands run.

B. Results, unresolved errors, and checks that could not run.

C. Only “all checks passed.”

D. The skill's step count instead of gate outcomes.

## Đáp án và giải thích

1. **A.** A mô tả cả lúc dùng, hành động và kết quả cần bàn giao. B lẫn chi tiết lỗi thời. C nhãn không thay hướng dẫn. D chỉ bao phủ một bước, bỏ việc rà diff và đánh giá bằng chứng.

2. **B.** B kiểm tra test còn chứng minh hành vi cần giữ hay không. A coi tín hiệu xanh tách khỏi nội dung test. C không thay thế bằng chứng. D số test không bù việc mất kiểm tra quan trọng.

3. **A, C.** A làm rõ quy trình; C cưỡng chế bất biến. B nhầm hướng dẫn với rào chắn thực thi. D đặt kiểm soát sau tác động, trái điều kiện bắt buộc trước phát hành.

4. **D.** D xét bằng chứng theo revision và phạm vi ảnh hưởng. A kích thước diff không đo hết rủi ro. B log thật nhưng không chứng minh code mới. C đếm lần gọi quy trình thay cho kiểm chứng trạng thái cuối.

5. **A, B.** A và B giới hạn rõ điều bằng chứng hỗ trợ. C có thể đánh đồng kiểm tra một package với toàn repo. D đếm hướng dẫn chứ không xác nhận thực thi thành công.
