# kiểm tra quản lý và CI tùy biến

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486936), sources/code-lessons/486936.json. Câu hỏi tự biên soạn; thông tin dịch vụ preview cần kiểm tra trước triển khai.

## Nội dung bài học

Bài phân biệt dịch vụ kiểm tra được quản lý với GitHub Action tùy biến. Dịch vụ phân tích thay đổi trong ngữ cảnh codebase, đăng phát hiện trên PR, xếp mức độ và giảm trùng lặp. Theo phạm vi dịch vụ được bài mô tả, nó không tự phê duyệt/chặn PR và không tự sửa mã; quyết định vẫn thuộc con người.

Action phù hợp khi cần tác vụ ngoài kiểm tra như thực thi thay đổi theo yêu cầu hoặc tạo báo cáo theo lịch. Quy trình làm việc quy định sự kiện kích hoạt, prompt và tùy chọn CLI.

Trong job unattended, chọn quyền không làm quy trình xử lý chờ người phê duyệt; chỉ cấp công cụ cần cho tác vụ. Báo cáo chỉ đọc không cần quyền sửa mã. Giới hạn lượt là rào chắn tài nguyên, không phải bằng chứng công việc hoàn thành.

Điểm kiến trúc: chọn nơi chạy và hành vi đúng yêu cầu trước, rồi mới cấu hình tích hợp. Có comment kiểm tra không đồng nghĩa PR đã đạt mọi gate.

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
