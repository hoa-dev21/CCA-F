# How you’ll work with Claude on your desktop

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/440908), sources/claude101-lessons/440908.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài học phân biệt ba cách làm việc trên ứng dụng máy tính: trao đổi từng lượt trong Chat, giao nhiệm vụ nhiều bước trong Cowork và phát triển phần mềm với Code.

- Chat phù hợp khi bạn cần trao đổi liên tục. Ví dụ: cùng AI nghĩ ý tưởng, nhận xét từng phương án rồi đặt câu hỏi tiếp.
- Cowork phù hợp với việc có đầu ra rõ, cần nhiều bước hoặc nhiều nguồn thông tin. Bạn giao nhiệm vụ trong phạm vi cụ thể rồi xem xét kế hoạch và kết quả.
- Code phù hợp khi cần đọc và sửa mã trong dự án, sau đó chạy kiểm thử trong môi trường phát triển.

Hãy chọn theo thao tác cần thực hiện. Với mọi cách làm, bạn vẫn cần đặt phạm vi và kiểm tra kết quả phù hợp với mức tự chủ đã giao cho AI.

Cũng cần biết công việc chạy trên máy cá nhân hay trên hệ thống đám mây. Nếu nhiệm vụ phụ thuộc vào tệp chỉ có trên máy của bạn, đừng mặc định rằng nó vẫn chạy được khi máy tắt. Hãy kiểm tra nơi chạy và cách truy cập dữ liệu. Tính năng và giao diện có thể thay đổi; chi tiết thao tác điều khiển máy tính không phải trọng tâm đề cương Architect đã lưu.

## Tự kiểm tra

**Câu 1 — Chọn một.** Một nhiệm vụ cần thảo luận từng ý tưởng và người dùng muốn phản hồi sau mỗi phương án, chưa có đầu ra cố định. Cách làm nào phù hợp nhất theo bài?

A. Thiết lập lịch chạy tự động cho ý tưởng trước khi xác định tiêu chí.

B. Chat từng lượt để cùng làm rõ và phát triển phương án.

C. Giao tác vụ tự chủ dài rồi chỉ xem báo cáo cuối.

D. Mở môi trường Code và yêu cầu sửa repository dù chưa có nhiệm vụ mã.

**Câu 2 — Chọn hai.** Tác vụ nhiều bước cần tài liệu chỉ nằm trên laptop. Nhóm muốn tắt máy giữa lúc chạy. Hai điều cần xác minh?

A. Giả định mọi ứng dụng máy tính đã tự sao chép toàn bộ file lên cloud.

B. Chỉ kiểm tra giao diện có thông báo “đang chạy” trước khi tắt.

C. Môi trường chạy có tiếp tục truy cập được dữ liệu khi máy tắt hay không.

D. Tác vụ thực sự chạy ở máy local hay môi trường đám mây.

**Câu 3 — Chọn một.** Công việc là sửa lỗi trong dự án, chạy test và trình bày diff. Bạn chọn môi trường theo yếu tố nào?

A. Giao diện nào có phần chat lớn hơn để chứa lời giải thích.

B. Môi trường nào có tên chế độ nghe tự chủ nhất.

C. Chỉ số lượt trao đổi ít nhất, dù không có quyền chạy test.

D. Quyền đọc/sửa mã và chạy kiểm thử trong dự án.

**Câu 4 — Chọn hai.** Nhóm giao tác vụ tổng hợp nhiều nguồn với đầu ra rõ. Hai điều cần đặt dù công cụ hỗ trợ tự chủ nhiều bước?

A. Điểm kiểm tra kế hoạch/kết quả phù hợp với tác động của nhiệm vụ.

B. Phạm vi dữ liệu, hành động và kết quả cần bàn giao.

C. Tiêu chí hoàn thành chỉ là số bước công cụ đã chạy.

D. Quyền sửa mọi nguồn đọc được để tránh phải dừng giữa chừng.

**Câu 5 — Chọn một.** Người dùng chuyển từ Chat sang chế độ làm việc nhiều bước và nghĩ rằng không cần duyệt nữa. Kết luận nào đúng?

A. Đúng nếu cả hai chế độ dùng cùng mô hình nền.

B. Dù mức tự chủ khác, kết quả vẫn cần được kiểm chứng.

C. Đúng nếu công cụ tự tạo được kế hoạch có đánh số.

D. Đúng nếu nhiệm vụ được diễn đạt bằng một prompt thay vì nhiều lượt.

## Đáp án và giải thích

1. **B.** B phù hợp cộng tác tương tác. C giảm điểm phản hồi mà nhiệm vụ cần; D không có thao tác phát triển phần mềm; A tự động hóa khi mục tiêu còn chưa rõ.

2. **C, D.** D xác định nơi thực thi; C xác định phụ thuộc dữ liệu. B không chứng minh khả năng tiếp tục; A là giả định về sao chép và quyền chưa được kiểm tra.

3. **D.** D khớp thao tác cần làm. A tối ưu hiển thị; B dựa vào nhãn; C bỏ năng lực kiểm chứng quan trọng.

4. **A, B.** B giới hạn công việc; A giữ khả năng giám sát. D suy quyền viết từ quyền đọc; C hoạt động không đồng nghĩa đạt mục tiêu.

5. **B.** B giữ trách nhiệm theo nhiệm vụ. C kế hoạch không chứng minh thực hiện; D số prompt không quyết định giám sát; A mô hình chung không làm quyền và độ tin cậy giống nhau.
