# Permission Modes — Quyền thực thi và kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486932), sources/code-lessons/486932.json. Câu hỏi tự biên soạn; tên và hành vi mode cần kiểm tra lại khi triển khai phiên bản khác.

## Tóm tắt

Chọn mode theo công việc và khả năng có người duyệt. Manual yêu cầu phê duyệt ngoài thao tác đọc; accept edits hỗ trợ vòng sửa có người xem; plan phục vụ khảo sát và đề xuất. Bài giới thiệu auto với classifier xem xét hành động, don't ask chỉ cho công cụ phê duyệt trước và tự từ chối phần còn lại, cùng bypass bỏ kiểm tra trong môi trường cô lập.

Phân biệt **quyền/ý định hành động** với **tính đúng của kết quả**. Hành động sửa file có thể hợp phạm vi nhưng tạo mã sai. Classifier quyền không thay chạy test hoặc kiểm tra diff.

Với CI không có người trực, tránh cấu hình khiến job chờ một hộp thoại không ai trả lời. Phê duyệt trước tập công cụ cần thiết và có hành vi từ chối rõ cho thao tác ngoài phạm vi. Không chọn bypass chỉ để che cấu hình quyền thiếu.

## Câu hỏi

**1. Chọn một.** Job qua được kiểm tra quyền nhưng test thất bại. Cách hiểu đúng?

A. Kiểm tra quyền chứng minh tính đúng của mã.

B. Mã hợp phạm vi thao tác vẫn có thể sai; cần gate kiểm chứng riêng.

C. Không cần sửa mã vì hành động được phép.

D. Chỉ tăng quyền sẽ sửa test.

**2. Chọn một.** CI treo vì chờ phê duyệt. Thiết kế phù hợp bài?

A. Chờ vô hạn.

B. Bỏ mọi kiểm tra quyền ở production.

C. Dùng chế độ không hỏi với tools được phê duyệt trước và từ chối phần ngoài danh sách.

D. Đổi câu chào của agent.

**3. Chọn một.** Nhóm muốn nghiên cứu thay đổi kiến trúc trước khi sửa. Mode nào sát mục đích?

A. Plan.

B. Bypass chỉ vì nhanh.

C. Tự cấp mọi quyền không cần thiết.

D. Chạy tác vụ ghi trước rồi mới hỏi.

## Đáp án

1. **B.** A và C nhầm hai loại kiểm tra; D không sửa logic.
2. **C.** A không giải quyết unattended; B bỏ kiểm soát quá mức; D không ảnh hưởng quyền.
3. **A.** B, C không cần cho khảo sát; D đảo thứ tự kiểm soát.
