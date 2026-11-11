# What is Claude?

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383389), sources/claude101-lessons/383389.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Claude có thể hỗ trợ viết, phân tích, lập trình, học tập và giải quyết vấn đề. Để nhận kết quả hữu ích, bạn cần cung cấp thông tin liên quan, nói rõ yêu cầu và dùng kiến thức của mình để kiểm tra câu trả lời.

Bài học giới thiệu nhiều cách sử dụng Claude. Ứng dụng trò chuyện phù hợp để hỏi đáp và cùng chỉnh sửa ý tưởng. Claude Code phục vụ công việc phát triển phần mềm, như đọc và sửa tệp hoặc chạy lệnh khi có môi trường và quyền phù hợp.

Ví dụ: Nếu chỉ cần giải thích một đoạn mã, bạn có thể trao đổi trong chat. Nếu cần sửa mã trong một dự án và chạy kiểm thử, bạn cần công cụ có khả năng truy cập dự án và thực hiện các thao tác đó. Cùng mang tên Claude không có nghĩa mọi giao diện đều có quyền và khả năng như nhau.

Đây là bài định hướng. Tên mô hình, gói dịch vụ và giới hạn sản phẩm có thể thay đổi, nên cần kiểm tra khi sử dụng. Khi ôn Architect theo đề cương đã lưu, hãy ưu tiên thiết kế ứng dụng; các chi tiết về cách huấn luyện mô hình và Constitutional AI không phải trọng tâm của đề cương đó.

## Tự kiểm tra

**Câu 1 — Chọn một.** Nhóm cần sửa lỗi trong repository và chứng minh test đạt. Chat đã đề xuất patch hợp lý nhưng không truy cập được repository. Cách bàn giao nào đáp ứng yêu cầu?

A. Đưa lời giải thích patch vào báo cáo và ghi nhận rằng lỗi đã được sửa.

B. Yêu cầu cùng phiên chat tự đánh giá test dựa trên đoạn mã được dán.

C. Đổi sang giao diện khác mang tên Claude rồi mặc định quyền truy cập đã có.

D. Dùng công cụ có quyền sửa dự án, chạy test và kiểm tra kết quả.

**Câu 2 — Chọn hai.** Một trợ lý phân tích báo cáo riêng của doanh nghiệp. Hai điều nào cần được thiết kế thay vì mặc định từ năng lực ngôn ngữ của mô hình?

A. Tiêu chí đối chiếu kết luận với tài liệu và mục tiêu sử dụng.

B. Cách cung cấp dữ liệu liên quan và quyền truy cập phù hợp.

C. Coi việc diễn đạt chuyên nghiệp là bằng chứng đã hiểu đúng số liệu.

D. Coi kiến thức huấn luyện là bản sao cập nhật của mọi tài liệu nội bộ.

**Câu 3 — Chọn một.** Bạn chỉ cần giải thích một đoạn mã đã được cung cấp, không cần chỉnh sửa hoặc thực thi. Phương án nào đáp ứng nhu cầu với phạm vi truy cập nhỏ nhất?

A. Cấp quyền triển khai để kiểm tra lời giải thích trên hệ thống thật.

B. Trao đổi trên mã đã có và nêu phần chưa kiểm chứng.

C. Cấp toàn bộ repository và quyền chạy lệnh trước khi đặt câu hỏi.

D. Thiết lập tác nhân tự sửa mã rồi dùng diff để giải thích.

**Câu 4 — Chọn hai.** Một đề xuất triển khai dựa trên video cũ về gói dịch vụ. Hai bước nào giúp chọn giải pháp có căn cứ?

A. Dùng giới hạn của một gói cũ làm cam kết năng lực cho khách hàng.

B. Chọn giao diện giống ảnh video vì tên tính năng không đổi.

C. Đối chiếu các thao tác cần thực hiện với quyền và dữ liệu thực tế.

D. Xác minh khả năng và giới hạn của môi trường dự định dùng.

**Câu 5 — Chọn một.** Sau bản thử thành công, quản lý muốn coi trợ lý là nguồn quyết định cuối cho mọi báo cáo. Thiết kế nào phù hợp với vai trò người dùng trong bài?

A. Mở rộng tự động vì cùng một mô hình đã làm đúng lần thử.

B. Bỏ phần nguồn để báo cáo dễ đọc và giao toàn quyền kết luận cho AI.

C. Chỉ yêu cầu AI trả lời thận trọng hơn rồi bỏ khâu kiểm tra.

D. Xác định phạm vi và kiểm chứng trước khi dùng kết luận.

## Đáp án và giải thích

1. **D.** D cung cấp khả năng thực hiện và kiểm chứng còn thiếu. A nhầm đề xuất với hành động; B mô phỏng nhận xét thay vì chạy test; C suy khả năng từ tên sản phẩm.

2. **A, B.** B bảo đảm có dữ liệu; A kiểm chứng chất lượng. D không đúng với dữ liệu riêng và mới; C nhầm phong cách với tính đúng.

3. **B.** B đủ cho mục tiêu giải thích. C mở rộng quyền chưa cần thiết; D thay nhiệm vụ phân tích thành sửa đổi; A tạo tác động không cần cho yêu cầu.

4. **C, D.** D kiểm tra điều kiện hiện tại; C gắn công cụ với nhu cầu. B dựa vào hình thức; A biến thông tin lịch sử thành bảo đảm chưa được xác minh.

5. **D.** D giữ vai trò đánh giá của con người. A suy khái quát từ một mẫu; B mất căn cứ; C thay đổi giọng văn không tạo bằng chứng về tính đúng.
