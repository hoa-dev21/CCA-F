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

**Câu 1 — Chọn một.** Repo có nhiều package, quy ước chỉ áp dụng test .test.tsx. Nhóm muốn chia sẻ quy tắc mà không làm nhiễu công việc khác. Cách tổ chức phù hợp?

A. Đặt toàn bộ quy ước ở user config của trưởng nhóm.

B. Dùng project rule có paths khớp test ở các package.

C. Dán quy tắc vào mọi prompt tương tác của thành viên.

D. Dùng tên file rule có chữ “test” nhưng không đặt điều kiện phạm vi.

**Câu 2 — Chọn một.** Skill khám phá repo tạo log rất dài; cuộc hội thoại chính chỉ cần kết luận có nguồn. Thiết kế nào xử lý cả context lẫn bàn giao?

A. context: fork cùng đầu ra tóm tắt có đường dẫn, phát hiện và giới hạn.

B. context: fork rồi giả định parent tự đọc được toàn bộ phát hiện của child.

C. Chia hướng dẫn thành nhiều file và import tất cả vào context chính.

D. Giới hạn số dòng log nhưng loại luôn vị trí nguồn để tiết kiệm token.

**Câu 3 — Chọn hai.** Skill nhận tên môi trường triển khai. argument-hint hiển thị “staging | production”. Hai kiểm soát nào vẫn cần nếu muốn tránh đầu vào ngoài danh sách và thao tác vượt quyền?

A. Coi argument-hint là validation vì người dùng đã thấy cú pháp.

B. Kiểm tra tham số thực tế trước khi gọi thao tác.

C. Thiết lập công cụ/quyền phù hợp và kiểm tra tại nơi thực thi.

D. Liệt kê môi trường trong description và chỉ đưa ví dụ hợp lệ để mô hình suy ra giới hạn.

**Câu 4 — Chọn một.** Một nhóm đặt hướng dẫn bảo mật dài trong file chung và chia thành ba file được import toàn bộ. Kết luận nào đúng về ngữ cảnh?

A. Số file tăng nên mỗi lượt chỉ tải một phần ngẫu nhiên.

B. Import bảo đảm phần chưa liên quan không tiêu tốn context.

C. Tách file tự động tạo các phạm vi quyền riêng.

D. Dễ quản lý hơn, nhưng phần được nạp vẫn chiếm context.

**Câu 5 — Chọn hai.** Nhóm muốn skill review thống nhất nhưng không cho sửa mã. Hai lựa chọn phù hợp?

A. Đặt skill ở phạm vi dự án và quản lý phiên bản cùng repo.

B. Hạn chế công cụ/quyền theo tác vụ đọc và kiểm tra cấu hình thực tế.

C. Chỉ viết “không sửa” trong description rồi cấp mọi công cụ.

D. Đặt skill trong thư mục cá nhân của tác giả để tránh đồng đội sửa.

## Đáp án và giải thích

1. **B.** B khớp phạm vi đường dẫn và được chia sẻ. A không đi theo repo. C dễ thiếu/khác phiên bản. D tên gợi nghĩa không thay thế cấu hình phạm vi.

2. **A.** A tách khám phá và bàn giao đủ dùng. B bỏ giao diện bàn giao. C tổ chức file không có nghĩa giảm nội dung đã import. D giảm dung lượng bằng cách mất khả năng kiểm chứng.

3. **B, C.** B cưỡng chế giá trị; C cưỡng chế năng lực thao tác. A nhầm gợi ý giao diện với kiểm tra. D có thể hướng dẫn lựa chọn nhưng mô tả và ví dụ vẫn không thay thế kiểm tra tham số/quyền khi thực thi.

4. **D.** D phân biệt tổ chức tài liệu và lượng ngữ cảnh. A/B không được suy ra từ thao tác chia rồi import tất cả. C file hướng dẫn không tự tạo ranh giới quyền thực thi.

5. **A, B.** A chia sẻ được phiên bản; B giảm năng lực ngoài nhiệm vụ. C chỉ nhắc bằng ngôn ngữ dù vẫn cấp quyền rộng. D làm mất mục tiêu phân phối nhất quán cho nhóm.
