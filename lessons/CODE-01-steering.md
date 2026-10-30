# Steering Long Sessions — Điều hướng phiên dài

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486901), sources/code-lessons/486901.json. Câu hỏi tự biên soạn. Các tính năng mới trong khóa không mặc định đều nằm trong Exam Guide.

## Tóm tắt

Trước tác vụ dài, dùng plan mode để khảo sát chỉ đọc và làm rõ cách triển khai. Đọc kế hoạch, sửa phần thiếu trước khi cho thực thi sẽ ít tốn công hơn sửa một thay đổi lớn đi sai hướng.

Compaction tóm tắt hội thoại để giải phóng context; có nguy cơ bỏ mất thông tin quan trọng. Chỉ định điều cần giữ, như quyết định kiến trúc, yêu cầu còn lại và kết quả kiểm tra. Rewind giúp quay về checkpoint; chọn rõ cần khôi phục mã, hội thoại hay cả hai.

Khóa hiện tại phân biệt goal — điều kiện hoàn tất có bằng chứng quan sát được — với loop — chạy prompt lặp theo nhịp để quan sát thay đổi như CI. Không dùng “đã chạy nhiều lần” làm bằng chứng đạt mục tiêu.

Khi nhiều phiên sửa cùng repo, worktrees tạo cây file riêng, giảm nguy cơ ghi đè trực tiếp. Điều này không tự bảo đảm các thay đổi sau khi hợp nhất tương thích nhau.

Liên hệ ôn thi: plan mode, quản lý context và giữ bằng chứng thực thi là các ý chính. Goal/loop và worktree trong bài là kiến thức vận hành bổ sung, cần đối chiếu phạm vi thi riêng.

## Câu hỏi

**1. Chọn một.** Sau compact, agent quên ràng buộc thiết kế. Cải thiện phù hợp nhất?

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

1. **B.** A không cải thiện thông tin giữ lại; C làm mất bằng chứng; D không thay context.
2. **C.** A giữ nguyên xung đột; B bỏ công cụ quản lý thay đổi; D không cô lập file.
3. **D.** A và B mơ hồ; C đo thời gian thay vì kết quả.
