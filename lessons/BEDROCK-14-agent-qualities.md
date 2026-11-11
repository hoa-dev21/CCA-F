# Quan sát, hành động, đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276808), sources/bedrock-lessons/276808.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Từ Claude Code và Computer Use, bài rút ra các yếu tố của một tác nhân AI hoạt động tốt: công cụ có mục đích rõ, vòng xử lý có giới hạn, khả năng quan sát môi trường và kiểm tra kết quả liên tục.

Trước khi sửa mã, cần đọc mã đang có. Trước khi thao tác giao diện, cần quan sát trạng thái hiện tại. Kiến thức huấn luyện không tự cho mô hình biết nội dung riêng của dự án hoặc màn hình của bạn.

Phản hồi công cụ giúp chọn bước tiếp và kiểm chứng kết quả. Chạy kiểm thử vừa thực hiện một hành động vừa tạo bằng chứng về hành vi. Trước khi cho tác nhân chạy, cần định nghĩa thế nào là thành công, lỗi và hết số lượt; đánh giá cả tình huống thất bại và cách khôi phục.

Mức tự chủ còn phụ thuộc tác động của nhiệm vụ. Thử giao diện trên môi trường kiểm thử khác với bấm thanh toán bằng tài khoản thật; sửa mã để con người duyệt khác với tự triển khai lên hệ thống vận hành.

Vì vậy, không chọn quyền chỉ dựa trên tên công cụ. Hãy xét khả năng kiểm chứng, đảo ngược thao tác và chuyển cho người có thẩm quyền khi cần.

## Tự kiểm tra

**Question 1 — Choose one.** One browser agent tests a copy; another pays using a real account. What should determine autonomy?

A. Fewer steps justify broader permissions.

B. Self-reported confidence alone.

C. Impact, recoverability, and verification requirements of each task.

D. Identical permissions because tool names match.

**Question 2 — Choose two.** An agent edits based on framework knowledge without reading current files. Which TWO steps are needed?

A. A longer framework explanation instead of project inspection.

B. Tests or behavior observations verifying the fix.

C. Reading current code and relevant dependencies before selecting changes.

D. Declaring completion when a file write succeeds.

**Question 3 — Choose one.** An agent succeeds on easy tasks but loops indefinitely on service errors. What evaluation is missing?

A. Failure cases, loop limits, and recovery or escalation paths.

B. Only successful-task prompt length.

C. Only concurrent-call capacity.

D. Only final-answer formatting.

**Question 4 — Choose two.** Which TWO elements distinguish autonomous success from exhausted iterations?

A. Observable outcome criteria tied to the user's objective.

B. The model's “finished” statement as final evidence.

C. Every stop without an exception counts as success.

D. Separate terminal states for errors, budget limits, and escalation.

**Question 5 — Choose one.** An agent prepares a correct patch and passing tests for human review. What should it do next?

A. Expand into related modules before reporting.

B. Delete test records because the diff is sufficient.

C. Hand off the diff, verification results, and remaining limitations.

D. Deploy because passing tests establish authority.

## Đáp án và giải thích

1. **C.** C đánh giá theo hệ quả thực. D bỏ qua môi trường; A số bước không đo mức rủi ro; B tự tin không chứng minh tác động có thể kiểm soát.

2. **B, C.** C cung cấp trạng thái riêng của dự án; B đánh giá kết quả. A không cập nhật thông tin tại chỗ; D chỉ chứng minh thao tác ghi, không chứng minh sửa đúng.

3. **A.** A đánh giá khả năng vận hành khi điều kiện xấu. B không trực tiếp kiểm tra vòng lặp lỗi; C đo năng lực song song; D định dạng không chứng minh dừng và phục hồi đúng.

4. **A, D.** A định nghĩa thành công; D tránh trộn các lý do dừng. C đồng nhất kết thúc kỹ thuật với đạt mục tiêu; B dựa vào tự báo cáo thay vì bằng chứng.

5. **C.** C hoàn thành trong phạm vi được giao. D suy quyền từ kết quả test; A tự mở rộng mục tiêu; B loại bỏ bằng chứng hành vi không có trong diff.
