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

## Câu hỏi tình huống

**1. Chọn một.** Quy ước test phải áp dụng ở nhiều package. Cách đặt phù hợp đề cương?

A. Chỉ ở home của tác giả.

B. Trong một thư mục không chứa các test khác.

C. Nhắc lại thủ công trong mọi chat.

D. Path-scoped rule dùng glob khớp test ở các thư mục liên quan.

**2. Chọn một.** Skill phân tích repo trả output khám phá dài gây loãng hội thoại chính. Frontmatter nào nhắm vấn đề này?

A. `context: fork`, đồng thời bàn giao kết quả cần thiết có cấu trúc.

B. Chỉ `argument-hint`.

C. Xóa mọi giới hạn công cụ.

D. Nạp toàn bộ log vào mọi lượt chính.

**3. Chọn hai.** Nhóm muốn skill dùng chung nhưng công cụ hạn chế và tham số dễ hiểu. Lựa chọn phù hợp?

A. Chỉ tạo bản cá nhân mà không chia sẻ cấu hình.

B. Đặt ở dự án `.claude/skills/` và cấu hình `allowed-tools` thích hợp.

C. Dùng `argument-hint` để gợi ý cách truyền tham số, thêm validation thật nếu cần cưỡng chế.

D. Coi hint là bảo đảm tuyệt đối tham số hợp lệ.

## Đáp án

1. **D.** A không chia sẻ; B không phủ test rải rác; C dễ bỏ sót và lặp.
2. **A.** B chỉ gợi ý đối số; C không cô lập ngữ cảnh; D làm loãng thêm.
3. **B, C.** A thiếu phân phối; D nhầm gợi ý với kiểm soát bằng mã.
