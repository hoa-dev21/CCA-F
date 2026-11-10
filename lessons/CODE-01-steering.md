# Điều hướng phiên dài

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486901), sources/code-lessons/486901.json. Câu hỏi tự biên soạn. Các tính năng mới trong khóa không mặc định đều nằm trong Exam Guide.

## Nội dung bài học


Với nhiệm vụ dài, nên khảo sát dự án và làm rõ hướng triển khai trước khi sửa mã. Chế độ lập kế hoạch (plan mode) phục vụ việc đọc, phân tích và đề xuất. Bạn có thể xem kế hoạch, bổ sung yêu cầu còn thiếu rồi mới cho thực hiện.

Khi cuộc trò chuyện dài, hệ thống có thể rút gọn lịch sử thành bản tóm tắt để dành chỗ cho thông tin mới. Quá trình này gọi là compaction và có thể làm mất chi tiết. Hãy nêu rõ những gì cần giữ: quyết định thiết kế, yêu cầu chưa hoàn thành và kết quả kiểm tra đã có.

Bài học còn giới thiệu rewind, tức quay lại một mốc đã lưu (checkpoint). Khi dùng, cần xác định muốn khôi phục mã, nội dung trò chuyện hay cả hai. Hai loại trạng thái này không nên bị nhầm với nhau.

Cần phân biệt mục tiêu (goal) với việc chạy lặp (loop). Mục tiêu có điều kiện hoàn tất kiểm chứng được, chẳng hạn các bài kiểm thử được chỉ định đã chạy thành công. Chạy lặp chỉ là thực hiện yêu cầu theo nhịp, chẳng hạn kiểm tra kết quả CI — hệ thống tự động xây dựng và kiểm thử mã. Chạy nhiều lần không chứng minh đã đạt mục tiêu.

Nếu nhiều phiên cùng sửa một kho mã nguồn, Git worktrees cho mỗi phiên một cây tệp riêng để giảm việc ghi đè. Sau khi hợp nhất, vẫn phải kiểm tra các thay đổi có tương thích hay không. Khi ôn thi, ưu tiên lập kế hoạch, quản lý ngữ cảnh và bằng chứng thực thi; đối chiếu đề cương riêng cho các tính năng bổ sung.

## Câu hỏi

**1. Chọn một.** Sau compact, tác nhân AI quên ràng buộc thiết kế. Cải thiện phù hợp nhất?

A. Chỉ tăng số lần compact.

B. Chỉ định rõ ràng buộc và trạng thái cần giữ trong bản tóm tắt.

C. Xóa mọi kết quả kiểm tra.

D. Chỉ đổi tên phiên.

**2. Chọn một.** Hai phiên đang sửa cùng file và ghi đè nhau. Biện pháp trong bài?

A. Cho cả hai dùng cùng cây file và chạy nhanh hơn.

B. Bỏ Git.

C. Tách công việc bằng worktrees, sau đó kiểm tra khi hợp nhất.

D. Chỉ tăng output tokens.

**3. Chọn một.** Điều kiện hoàn tất nào dễ kiểm chứng từ transcript nhất?

A. “Mọi thứ trông chuyên nghiệp.”

B. “Chắc là không còn lỗi.”

C. “Đã dành nhiều thời gian.”

D. “Các test đã chỉ định và type checker chạy thành công, có kết quả được ghi lại.”

## Đáp án

1. **B.** A không cải thiện thông tin giữ lại; C làm mất bằng chứng; D không thay ngữ cảnh.
2. **C.** A giữ nguyên xung đột; B bỏ công cụ quản lý thay đổi; D không cô lập file.
3. **D.** A và B mơ hồ; C đo thời gian thay vì kết quả.
