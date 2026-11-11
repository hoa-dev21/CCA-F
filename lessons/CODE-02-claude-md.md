# Đặt hướng dẫn đúng chỗ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486929), sources/code-lessons/486929.json. Câu hỏi tự biên soạn.

## Nội dung bài học


CLAUDE.md là tệp hướng dẫn để mô hình đọc, thường dùng cho quy ước của dự án như cách đặt tên hoặc nơi đặt tệp. Đây không phải cơ chế tự động chặn mọi thao tác sai. Nếu một hành động bắt buộc phải bị ngăn, cần có kiểm soát bằng chương trình, chẳng hạn hook chạy trước thao tác.

Bài học phân biệt các phạm vi hướng dẫn:

- Chính sách tổ chức (managed policy): áp dụng theo quản lý của tổ chức.
- Hướng dẫn người dùng (user): sở thích cá nhân dùng qua nhiều dự án.
- Hướng dẫn dự án: quy ước được lưu trong kho mã nguồn và chia sẻ với nhóm.
- Hướng dẫn cục bộ (local): ghi chú cá nhân chỉ dành cho dự án đó.

Chọn phạm vi theo người và công việc cần chịu ảnh hưởng. Ví dụ: một ghi chú thử nghiệm riêng trên nhánh của bạn thường không nên trở thành quy tắc chung cho cả nhóm.

Bạn có thể dùng imports để đưa nội dung từ tệp khác vào hướng dẫn. Cách này giúp tổ chức tài liệu, nhưng toàn bộ phần được đưa vào vẫn chiếm ngữ cảnh. Chia một tệp thành ba tệp rồi nạp cả ba không tự giảm lượng thông tin mô hình phải đọc.

Viết quy tắc cụ thể và nêu rõ cần làm gì. “Đặt mã xử lý API trong thư mục X, mỗi tệp một phần xử lý” dễ thực hiện hơn “làm theo cách tốt nhất”. Khi quy tắc gây hiểu nhầm, hãy sửa nó thay vì liên tục thêm chỉ dẫn trùng lặp hoặc mâu thuẫn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** CLAUDE.md forbids pushing to a protected branch, but shell access still permits it. Which control prevents the action before execution?

A. Emphasize the instruction with more refusal examples.

B. Enforce permissions or a blocking hook at execution.

C. Require a written explanation before pushes.

D. Inspect Git history and revert afterward.

**Question 2 — Choose one.** A long CLAUDE.md is split into three files, all imported in every session. What follows?

A. Context usage falls to one third.

B. Each import creates a separate agent context.

C. Maintenance improves, but loaded content still uses context.

D. Imports remain unread paths only.

**Question 3 — Choose two.** Which TWO storage choices suit a shared mandatory convention and a personal experiment limited to one repository?

A. Version the shared convention in project configuration.

B. Apply the personal experiment globally.

C. Use the supported repository-local scope for personal notes.

D. Keep shared rules only in the author's user configuration.

**Question 4 — Choose one.** Rules work on the author's machine but not fresh CI because they exist only in a personal directory. What is the direct fix?

A. Paste the author's chat into CI errors.

B. Increase reasoning budget to rediscover rules.

C. Keep configuration and inspect final results more often.

D. Put the rule in the project and verify CI actually loads it.

**Question 5 — Choose two.** Which TWO contents deserve priority in a useful, manageable CLAUDE.md?

A. Project-specific rules, check commands, and constraints difficult to infer from code.

B. Every API reference regardless of relevance.

C. Directions to detailed sources and clear applicability scope.

D. Every temporary personal note for all sessions.

## Đáp án và giải thích

1. **B.** B tạo rào chắn trước tác động. A/C hướng dẫn hành vi mà không cưỡng chế. D phát hiện sau khi đã push và revert không biến việc công bố trước đó thành chưa xảy ra.

2. **C.** C phân biệt tổ chức file và lượng nội dung nạp. A/B không được suy ra từ chia file. D mâu thuẫn với việc các phần được import và nạp để cung cấp hướng dẫn.

3. **A, C.** A phân phối cùng repo; C giới hạn ghi chú vào đúng dự án/người dùng. B làm lan quy tắc ngoài mục đích. D không đưa hướng dẫn đến đồng đội khi clone.

4. **D.** D sửa nguồn khác biệt môi trường. A không tạo cấu hình có phiên bản; B thiếu dữ liệu không phải thiếu suy luận; C phát hiện hậu quả nhưng giữ nguyên nguyên nhân.

5. **A, C.** A chứa thông tin điều khiển thực tế; C giúp tìm thêm ngữ cảnh đúng lúc. B tăng nội dung không cần thiết. D trộn phạm vi cá nhân và dùng chung, dễ gây nhiễu hoặc chỉ dẫn lỗi thời.
