# Quy tắc theo đường dẫn và phạm vi skills/commands

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 3.1–3.4, trang PDF 12–14. Câu hỏi tự biên soạn.

## Tóm tắt

Quy ước chia sẻ phải nằm ở cấu hình project được quản lý phiên bản, không chỉ trong `~/.claude/CLAUDE.md` cá nhân. Theo đề cương, dùng `/memory` để kiểm tra file hướng dẫn đã nạp khi chẩn đoán khác biệt phiên. Imports tổ chức tài liệu; không mặc định làm giảm context nếu vẫn nạp hết.

Theo mục3.1, project có thể dùng `CLAUDE.md` ở root hoặc `.claude/CLAUDE.md`; file `CLAUDE.md` ở thư mục con bổ sung quy ước theo phạm vi thư mục. Cú pháp `@import` trong guide chỉ việc tham chiếu file bên ngoài; ví dụ dòng `@standards/testing.md` đưa tài liệu liên quan vào hướng dẫn. Chọn imports cho từng package theo domain của maintainer, không import toàn bộ standards một cách máy móc. Có thể chia `.claude/rules/testing.md`, `api-conventions.md`, `deployment.md` thay một file khổng lồ; vẫn cần scope đúng.

Quy tắc theo loại file nằm trong `.claude/rules/` với YAML `paths` chứa glob. Ví dụ quy ước test rải nhiều thư mục dùng `**/*.test.tsx` phù hợp hơn chỉ đặt một CLAUDE.md ở một thư mục con. Quy tắc có scope chỉ được áp khi khớp phạm vi được định nghĩa, giảm hướng dẫn không liên quan.

Ví dụ frontmatter theo đề cương: `paths: ["terraform/**/*"]` trong file rule giới hạn quy ước Terraform cho các đường dẫn khớp. Đặt trường này trong YAML frontmatter giữa hai dòng `---`, không chỉ nhắc glob trong phần mô tả. Không diễn giải glob rải nhiều thư mục thành quy tắc chỉ cho một package.

Commands dùng chung ở `.claude/commands/`, cá nhân ở `~/.claude/commands/`. Skills theo mục tiêu trong `.claude/skills/` có SKILL.md; bản cá nhân có tên riêng để không ảnh hưởng đồng đội. Đề cương phân biệt `context: fork` để tách ngữ cảnh, `allowed-tools` để giới hạn công cụ và `argument-hint` gợi ý đối số. Hint không phải validation bắt buộc bằng mã.

Skill cá nhân ở `~/.claude/skills/`; dùng tên khác bản chia sẻ để tránh vô tình thay hành vi nhóm. Quy ước áp dụng thường xuyên đặt trong CLAUDE.md, workflow theo tác vụ đặt trong skill được gọi khi cần. `allowed-tools` giới hạn công cụ của lần chạy, không thay validation đường dẫn hay quyền backend. Nếu chỉ cần tạo báo cáo file, không cấp Bash tùy ý rồi coi skill tự động an toàn.

Chọn plan mode khi thay đổi kiến trúc/nhiều file hoặc còn phương án cạnh tranh. Thay đổi nhỏ, rõ phạm vi có thể thực thi trực tiếp với kiểm tra phù hợp. Một giai đoạn Explore riêng giúp cô lập đầu ra khám phá dài.

Ví dụ migration thư viện ảnh hưởng45file cần khảo sát và so sánh phương án trước khi sửa; thêm một conditional kiểm tra ngày trong một hàm đã rõ lỗi thường có thể thực thi trực tiếp. Có thể dùng plan mode để điều tra/thiết kế, sau đó chuyển sang thực thi phương án đã chọn. Explore subagent trả summary hữu ích cho context chính thay vì đổ mọi kết quả tìm kiếm vào đó. Đây là lựa chọn thiết kế trong đề cương, không là yêu cầu mọi thay đổi nhỏ đều phải chờ một vòng duyệt kế hoạch.

## Câu hỏi tình huống

**1. Chọn một.** Quy ước test phải áp dụng ở nhiều package. Cách đặt phù hợp đề cương?

A. Chỉ ở home của tác giả.

B. Trong một thư mục không chứa các test khác.

C. Nhắc lại thủ công trong mọi chat.

D. Path-scoped rule dùng glob khớp test ở các thư mục liên quan.

**2. Chọn một.** Skill phân tích repo trả output khám phá dài gây loãng hội thoại chính. Frontmatter nào nhắm vấn đề này?

A. `context: fork`, đồng thời bàn giao kết quả cần thiết có cấu trúc.

B. Chỉ `argument-hint`.

C. Xóa mọi giới hạn tool.

D. Nạp toàn bộ log vào mọi lượt chính.

**3. Chọn hai.** Nhóm muốn skill dùng chung nhưng công cụ hạn chế và tham số dễ hiểu. Lựa chọn phù hợp?

A. Chỉ tạo bản cá nhân mà không chia sẻ cấu hình.

B. Đặt ở project `.claude/skills/` và cấu hình `allowed-tools` thích hợp.

C. Dùng `argument-hint` để gợi ý cách truyền tham số, thêm validation thật nếu cần cưỡng chế.

D. Coi hint là bảo đảm tuyệt đối tham số hợp lệ.

## Đáp án

1. **D.** A không chia sẻ; B không phủ test rải rác; C dễ bỏ sót và lặp.
2. **A.** B chỉ gợi ý đối số; C không cô lập context; D làm loãng thêm.
3. **B, C.** A thiếu phân phối; D nhầm gợi ý với kiểm soát bằng mã.
