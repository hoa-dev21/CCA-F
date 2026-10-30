# MCP scope và chọn công cụ khám phá codebase

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 2.4–2.5, trang PDF 11–12. Câu hỏi tự biên soạn theo đề cương, không phải bài video.

## Tóm tắt

Trong cấu hình được đề cương mô tả, MCP dùng chung nhóm đặt ở project `.mcp.json`; server cá nhân/thử nghiệm đặt ở user scope. Dùng tham chiếu biến môi trường cho token thay vì commit giá trị bí mật. Cần kiểm tra quyền và cấu hình thực tế khi triển khai; có tên server trong tài liệu không chứng minh đã kết nối.

Theo mục2.4, user scope lưu ở `~/.claude.json`; project scope ở `.mcp.json`. Tham chiếu như `${GITHUB_TOKEN}` được mở rộng từ môi trường theo cấu hình được hỗ trợ, còn mỗi thành viên tự cung cấp giá trị bí mật. Ở mô hình đề cương, tool từ các server cấu hình được discovery khi kết nối và có thể sẵn có cùng lúc; kiểm tra discovery và quyền thực thay vì cho rằng server này tự loại trừ server kia.

Các server được cấu hình có thể cung cấp công cụ cùng lúc. Viết description rõ khả năng và đầu ra để model biết khi nên dùng MCP tool thay vì công cụ tìm kiếm file hạn chế hơn. Resource dạng catalog giúp khám phá danh mục nội dung mà không phải thử từng truy vấn hành động. Với tích hợp chuẩn, cân nhắc server có sẵn đã được đánh giá phù hợp trước khi tự xây toàn bộ.

Ví dụ catalog: danh sách issue kèm tóm tắt, cây tài liệu hoặc database schema. Nó cho host thấy nguồn nào tồn tại trước khi chèn context; vẫn cần thao tác resource read và kiểm tra quyền. Tích hợp Jira chuẩn có thể dùng server cộng đồng đã đánh giá, còn workflow đặc thù của nhóm mới cần server tùy chỉnh; không chọn server chỉ vì nó tồn tại. Một tool MCP tìm theo ngữ nghĩa nên mô tả đầu vào/đầu ra và khi nào phù hợp hơn Grep chỉ khớp nội dung file.

Grep tìm nội dung, Glob tìm đường dẫn theo mẫu, Read đọc file, Edit thay đổi có mục tiêu theo anchor, Write ghi file. Khi Edit không có anchor duy nhất, đọc file đầy đủ và chỉnh/ghi có kiểm soát thay vì thay tất cả tùy tiện. Khám phá tăng dần: tìm entry point, đọc liên kết/import rồi theo luồng; đừng nạp mọi file ngay đầu. Với hàm qua wrapper, xác định các tên export rồi tìm từng tên để tránh bỏ caller.

## Câu hỏi tình huống

**1. Chọn một.** Nhóm cần cùng server ticket nhưng máy thành viên mới không thấy vì cấu hình chỉ ở tài khoản người cũ. Cách sửa?

A. Chia sẻ file chứa token nguyên văn.

B. Đưa cấu hình dùng chung vào project scope, dùng biến môi trường và thiết lập quyền phù hợp từng người.

C. Chỉ đổi tên server trong prompt.

D. Mặc định cấu hình cá nhân được Git chia sẻ.

**2. Chọn một.** Cần tìm tất cả file theo mẫu `**/*.test.tsx`, sau đó tìm nội dung gọi một hàm. Thứ tự chọn tool?

A. Write rồi xóa file không đúng.

B. Chỉ Read mọi file trong repo.

C. Glob cho đường dẫn, Grep cho nội dung cần tìm.

D. Chỉ đo độ dài tên file.

**3. Chọn một.** Edit thất bại vì cùng chuỗi anchor xuất hiện nhiều lần. Cách fallback theo đề cương?

A. Read đầy đủ và thực hiện thay đổi/Write có kiểm soát, kiểm tra diff.

B. Thay mọi chỗ khớp dù chưa biết mục đích.

C. Bỏ qua và báo đã sửa.

D. Tăng confidence trong phản hồi cuối.

## Đáp án

1. **B.** A làm lộ secret; C không tạo cấu hình; D nhầm scope cá nhân và project.
2. **C.** A phá dữ liệu; B tốn context khi đã có mẫu tìm; D không tìm caller.
3. **A.** B có thể sửa sai vị trí; C tuyên bố sai; D không thay đổi file.
