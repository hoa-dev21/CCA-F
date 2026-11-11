# Working with skills

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383396), sources/claude101-lessons/383396.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Skill là một bộ hướng dẫn và tài nguyên giúp AI thực hiện một loại công việc cụ thể. Bộ này có thể chứa các bước xử lý, ví dụ, tiêu chí đầu ra và mã lệnh hỗ trợ. Trong cách dùng được bài giới thiệu, hướng dẫn được nạp khi phù hợp với nhiệm vụ, giúp bạn bớt phải nhắc lại từng bước.

Ví dụ: Nếu tháng nào bạn cũng làm báo cáo, một skill có thể hướng dẫn cách đọc dữ liệu, tính các chỉ số và trình bày kết quả theo mẫu. Để tạo skill hữu ích, cần mô tả quy trình rõ ràng, đưa ví dụ và cải tiến sau khi thử với công việc thật.

Projects và Skills có vai trò khác nhau nhưng có thể phối hợp. Project cung cấp tài liệu và bối cảnh của công việc; skill hướng dẫn cách thực hiện. Một skill viết báo cáo có thể sử dụng tài liệu đang lưu trong project.

Trước khi dùng skill từ bên ngoài, hãy xem nguồn và nội dung, nhất là mã lệnh đi kèm. Khi Claude tạo tệp từ tài liệu bạn tải lên, đừng mặc định rằng tệp gốc trên máy đã được sửa. Hãy kiểm tra tệp đầu ra và lưu đúng phiên bản. Cách bật và phạm vi hỗ trợ skill có thể thay đổi theo sản phẩm.

## Tự kiểm tra

**Câu 1 — Chọn một.** Mỗi tháng nhóm tạo báo cáo theo cùng quy trình nhưng dữ liệu và khách hàng khác nhau. Thành phần nào nên nằm trong skill?

A. Bản báo cáo tháng đầu cố định, thay thế mọi bước bằng việc chép lại văn bản đó.

B. Quyền truy cập mọi nguồn khách hàng để skill tự tìm mà không cần cấu hình.

C. Một lời nhắc “viết tốt” và toàn bộ lịch sử các cuộc trò chuyện trước.

D. Đóng gói quy trình, tiêu chí và ví dụ; cung cấp dữ liệu khi chạy.

**Câu 2 — Chọn hai.** Một skill bên ngoài có script gửi dữ liệu tới dịch vụ lạ. Hai bước nào phù hợp trước khi dùng cho tài liệu công ty?

A. Đánh giá dữ liệu và quyền cần cấp theo phạm vi công việc thực tế.

B. Kiểm tra nguồn, nội dung hướng dẫn và hành vi của mã hỗ trợ.

C. Chạy ngay trên dữ liệu thật để xem có báo lỗi hay không.

D. Chấp thuận nếu báo cáo mẫu đạt yêu cầu, dùng chất lượng đầu ra thay cho việc kiểm tra luồng gửi dữ liệu.

**Câu 3 — Chọn một.** Skill tạo file báo cáo từ bảng tính được tải lên. Người dùng mở file gốc trên máy và không thấy thay đổi. Cách giải thích và xử lý đúng?

A. Tải lại file nguồn với cùng tên và coi đó là thao tác ghi đè nội dung mới vào bản local.

B. Kiểm tra artifact và bước lưu: tạo bản mới chưa phải sửa bản gốc.

C. Lưu file đầu ra vào một thư mục khác rồi đánh dấu bản local đã cập nhật vì nội dung đã được tạo.

D. Dùng tên file giống nhau làm khóa để coi artifact mới và file local là hai bản đã đồng bộ.

**Câu 4 — Chọn hai.** Nhóm dùng Project cho tài liệu khách hàng và skill cho báo cáo. Hai vai trò nào được phân chia đúng?

A. Project description thay thế mọi bước tính toán trong skill.

B. Skill tự trở thành nguồn dữ liệu mới nhất của mọi khách hàng.

C. Skill hướng dẫn quy trình xử lý và tiêu chí trình bày dùng lại.

D. Project cung cấp tài liệu và bối cảnh liên quan của công việc.

**Câu 5 — Chọn một.** Skill chạy đúng trên một ví dụ đẹp nhưng sai khi thiếu một cột đầu vào. Bước cải tiến phù hợp nhất?

A. Bổ sung ví dụ đầu vào đầy đủ hơn nhưng giữ nguyên cách xử lý khi thiếu cột.

B. Cho tự tạo cột bị thiếu bằng giá trị phổ biến để đầu ra luôn khớp mẫu đẹp.

C. Thêm retry với nguyên đầu vào để mô hình có cơ hội xử lý tốt hơn ở lần sau.

D. Quy định xử lý dữ liệu thiếu và kiểm thử trên ca biên thực tế.

## Đáp án và giải thích

1. **D.** D đóng gói cách làm có thể dùng lại. A nhầm ví dụ với dữ liệu mới; B suy quyền từ hướng dẫn; C thiếu quy trình và tiêu chí cụ thể.

2. **A, B.** B xem hành vi mã và nguồn của skill; A kiểm soát phạm vi dữ liệu/quyền. D đánh giá chất lượng báo cáo nhưng không xác định dữ liệu được gửi đi đâu và việc gửi đó có phù hợp không. C biến dữ liệu thật thành phép thử trước kiểm tra.

3. **B.** B phân biệt tạo artifact với ghi vào đường dẫn gốc và kiểm tra đúng bước lưu. A gửi lại dữ liệu nguồn không đưa kết quả về bản local. C lưu bản mới ở nơi khác chưa cập nhật file gốc. D trùng tên không chứng minh có cơ chế đồng bộ hay thao tác ghi đè.

4. **C, D.** D và C bổ sung cho nhau. B nhầm hướng dẫn với dữ liệu cập nhật; A nhầm mô tả tổ chức với quy trình thực hiện.

5. **D.** D làm rõ hợp đồng thiếu dữ liệu và kiểm chứng trường hợp biên. A chỉ củng cố happy path đã hoạt động. B tự tạo dữ liệu không có căn cứ để vượt yêu cầu hình thức. C thử lại không sửa việc hướng dẫn chưa định nghĩa trường hợp thiếu cột.
