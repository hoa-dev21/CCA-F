# Quy tắc theo đường dẫn và phạm vi skills/commands

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 3.1–3.4, trang PDF 12–14. Câu hỏi tự biên soạn.

## Nội dung bài học


Đặt hướng dẫn theo người cần dùng và phạm vi áp dụng. Quy ước chung của nhóm phải nằm trong cấu hình dự án được quản lý phiên bản; nếu chỉ lưu ở `~/.claude/CLAUDE.md` của một người, đồng đội sẽ không nhận được. Theo đề cương, có thể dùng `/memory` để xem những tệp hướng dẫn đã được nạp khi hai phiên hoạt động khác nhau.

Hướng dẫn dự án có thể ở `CLAUDE.md` tại thư mục gốc hoặc `.claude/CLAUDE.md`. Tệp `CLAUDE.md` trong thư mục con bổ sung quy ước cho phạm vi đó. Có thể chia tài liệu và tham chiếu bằng dòng như `@standards/testing.md`. Cách nhập nội dung này giúp tổ chức tài liệu, nhưng nếu nạp hết thì vẫn dùng ngữ cảnh cho toàn bộ phần đã nạp.

Quy tắc theo loại tệp được đặt trong `.claude/rules/`, chẳng hạn `testing.md`, `api-conventions.md` hoặc `deployment.md`. Phần YAML ở đầu tệp, nằm giữa hai dòng `---`, dùng `paths` để quy định mẫu đường dẫn (glob). Ví dụ: `paths: ["terraform/**/*"]` giới hạn quy tắc vào các đường dẫn khớp mẫu Terraform.

Nếu kiểm thử nằm ở nhiều thư mục, mẫu `**/*.test.tsx` phù hợp hơn việc chỉ đặt hướng dẫn trong một thư mục con. Chọn quy tắc và tài liệu nhập theo nhu cầu của từng phần dự án, không tự động nạp mọi tiêu chuẩn vào mọi nơi.

Theo đề cương, lệnh dùng chung nằm ở `.claude/commands/`; lệnh cá nhân ở `~/.claude/commands/`. Skill dùng chung nằm ở `.claude/skills/` với tệp `SKILL.md`; skill cá nhân ở `~/.claude/skills/`. Đặt tên bản cá nhân khác bản dùng chung để tránh thay đổi hành vi ngoài ý muốn.

CLAUDE.md chứa quy ước thường xuyên áp dụng; skill đóng gói quy trình cho nhiệm vụ cụ thể. Các tùy chọn trong phần đầu skill có vai trò khác nhau:

- `context: fork` tách quá trình chạy sang ngữ cảnh riêng, hữu ích khi khám phá tạo nhiều kết quả.
- `allowed-tools` giới hạn công cụ được dùng.
- `argument-hint` gợi ý cách nhập tham số, không phải kiểm tra bắt buộc bằng mã.

Giới hạn công cụ không thay kiểm tra đường dẫn hoặc quyền phía hệ thống. Nếu nhiệm vụ chỉ cần tạo báo cáo, không vì tiện mà cấp toàn bộ khả năng chạy Bash.

Chọn chế độ lập kế hoạch khi thay đổi kiến trúc, nhiều tệp hoặc còn nhiều phương án. Ví dụ: chuyển thư viện ảnh hưởng 45 tệp cần khảo sát trước; sửa một điều kiện ngày đã rõ lỗi có thể thực hiện trực tiếp rồi kiểm tra. Tác nhân Explore có thể giữ kết quả tìm kiếm dài và trả phần tóm tắt hữu ích cho phiên chính, thay vì đưa mọi chi tiết vào đó.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A repository has multiple packages, and a convention applies only to `.test.tsx` files. How should the team share it without affecting unrelated work?

A. Store all conventions in the team lead's user configuration.

B. Use a project rule with `paths` matching the relevant tests across packages.

C. Paste the rule into every member's interactive prompts.

D. Put “test” in the rule filename without configuring path scope.

**Question 2 — Choose one.** A repository exploration skill produces long logs, but the main conversation needs only sourced conclusions. Which design manages both context and handoff?

A. Use `context: fork` and return findings, paths, and limitations in a summary.

B. Use `context: fork` and assume the parent automatically sees all child findings.

C. Split the instructions into files and import all of them into the main context.

D. Limit log lines and remove source locations to save tokens.

**Question 3 — Choose two.** A skill accepts a deployment environment and displays `staging | production` through `argument-hint`. Which TWO controls are still needed to prevent invalid inputs and unauthorized actions?

A. Treat `argument-hint` as validation because users see the syntax.

B. Validate the actual argument before invoking the action.

C. Configure suitable tools and permissions, checking them at execution time.

D. List environments in the description and rely on valid examples alone.

**Question 4 — Choose one.** A team splits a long security instruction file into three files and imports all three. What follows about context usage?

A. Only one file will load randomly because there are more files.

B. Imports guarantee that irrelevant sections consume no context.

C. Separate files automatically create separate permission scopes.

D. The files may be easier to maintain, but all loaded content still consumes context.

**Question 5 — Choose two.** A team wants a shared review skill that cannot modify code. Which TWO choices support this goal?

A. Store and version the skill at project scope.

B. Restrict tools and permissions to reading, and verify the effective configuration.

C. Say “do not edit” in the description while granting every tool.

D. Store the skill only in its author's personal directory.

## Đáp án và giải thích

1. **B.** B khớp phạm vi đường dẫn và được chia sẻ. A không đi theo repo. C dễ thiếu/khác phiên bản. D tên gợi nghĩa không thay thế cấu hình phạm vi.

2. **A.** A tách khám phá và bàn giao đủ dùng. B bỏ giao diện bàn giao. C tổ chức file không có nghĩa giảm nội dung đã import. D giảm dung lượng bằng cách mất khả năng kiểm chứng.

3. **B, C.** B cưỡng chế giá trị; C cưỡng chế năng lực thao tác. A nhầm gợi ý giao diện với kiểm tra. D có thể hướng dẫn lựa chọn nhưng mô tả và ví dụ vẫn không thay thế kiểm tra tham số/quyền khi thực thi.

4. **D.** D phân biệt tổ chức tài liệu và lượng ngữ cảnh. A/B không được suy ra từ thao tác chia rồi import tất cả. C file hướng dẫn không tự tạo ranh giới quyền thực thi.

5. **A, B.** A chia sẻ được phiên bản; B giảm năng lực ngoài nhiệm vụ. C chỉ nhắc bằng ngôn ngữ dù vẫn cấp quyền rộng. D làm mất mục tiêu phân phối nhất quán cho nhóm.
