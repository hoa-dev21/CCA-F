# kiểm tra quản lý và CI tùy biến

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486936), sources/code-lessons/486936.json. Câu hỏi tự biên soạn; thông tin dịch vụ preview cần kiểm tra trước triển khai.

## Nội dung bài học


Bài học so sánh dịch vụ rà soát mã được quản lý sẵn với quy trình tùy biến bằng GitHub Actions. Chọn theo việc bạn cần hệ thống thực hiện.

Theo phạm vi dịch vụ được mô tả trong bài, dịch vụ rà soát phân tích thay đổi trong bối cảnh dự án, đăng nhận xét lên yêu cầu hợp nhất mã (pull request, viết tắt là PR), xếp mức độ nghiêm trọng và giảm nhận xét trùng lặp. Dịch vụ này không tự sửa mã hay tự phê duyệt hoặc chặn PR; con người vẫn quyết định cách xử lý.

GitHub Actions phù hợp khi bạn cần xây một quy trình riêng, chẳng hạn sửa mã theo yêu cầu trong bình luận hoặc tạo báo cáo theo lịch. Quy trình phải nêu sự kiện kích hoạt, yêu cầu gửi AI và các tùy chọn dòng lệnh cần dùng.

Nếu quy trình chạy không có người theo dõi, hãy cấu hình quyền để nó không bị treo khi chờ phê duyệt. Chỉ cấp công cụ phục vụ nhiệm vụ; một báo cáo chỉ đọc dữ liệu không cần quyền sửa mã.

Giới hạn số lượt giúp kiểm soát tài nguyên. Khi chạm giới hạn, chỉ có thể kết luận tác vụ đã dừng vì hết lượt, chưa thể kết luận công việc hoàn tất. Tương tự, có nhận xét rà soát trên PR không có nghĩa mọi kiểm thử và điều kiện chấp nhận đã đạt.

## Câu hỏi

**1. Chọn một.** Cần bot thực hiện sửa mã theo comment PR, vượt phạm vi chỉ đưa findings. Lựa chọn phù hợp bài?

A. Mặc định dịch vụ kiểm tra tự sửa dù không hỗ trợ.

B. Action tùy biến với prompt và quyền phù hợp.

C. Chỉ đổi nhãn severity.

D. Bỏ quy trình xử lý kiểm thử.

**2. Chọn một.** Job chỉ tổng hợp báo cáo nhưng được cấp quyền ghi rộng. Thiết kế tốt hơn?

A. Giữ quyền rộng vì càng nhiều luôn càng tốt.

B. Thêm quyền deploy.

C. Thu hẹp công cụ/quyền theo tác vụ chỉ đọc.

D. Xóa mọi log kết quả.

**3. Chọn một.** Tác nhân AI dừng vì đạt giới hạn lượt. Có thể kết luận gì?

A. Mục tiêu đã hoàn thành chắc chắn.

B. Mọi test đều pass.

C. PR đã được con người duyệt.

D. Chỉ biết rào chắn lượt đã tác động; cần kiểm tra trạng thái và bằng chứng hoàn thành.

## Đáp án

1. **B.** A gán chức năng ngoài phạm vi; C không thực thi; D bỏ xác minh cần thiết.
2. **C.** A và B mở rộng không phục vụ mục tiêu; D giảm khả năng kiểm tra.
3. **D.** A, B, C không được chứng minh bởi điều kiện dừng tài nguyên.
