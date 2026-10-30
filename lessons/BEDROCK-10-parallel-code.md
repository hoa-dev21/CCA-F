# Parallelizing Claude Code — Cô lập công việc song song

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276810), sources/bedrock-lessons/276810.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Nhiều phiên Claude Code cùng sửa một thư mục dễ ghi đè hoặc đọc trạng thái chưa hoàn chỉnh của nhau. Bài dùng Git worktrees: mỗi nhánh có thư mục làm việc riêng, giao nhiệm vụ có ranh giới rồi tích hợp thay đổi sau khi hoàn thành. Worktree chia sẻ kho Git, không phải bản sao độc lập hoàn toàn.

Trước khi chạy, xác định phạm vi file và tiêu chí nghiệm thu. Dependencies được symlink vẫn có thể là trạng thái dùng chung; database, cổng dịch vụ, secrets và dịch vụ bên ngoài cũng không tự cô lập nhờ worktree. Khi tích hợp, kiểm tra diff, giải quyết xung đột theo ý nghĩa và chạy kiểm thử tương tác giữa các thay đổi.

Video minh họa custom slash command trong .claude/commands và $ARGUMENTS. Đây là mẫu tự động hóa quy trình, không phải lý do bỏ bước kiểm tra khi merge. Cú pháp và cơ chế commands/skills cần theo phiên bản đang dùng. Liên hệ thi: chia nhỏ nhiệm vụ, giới hạn phạm vi, xác minh kết quả trước tích hợp.

## Câu hỏi

**1. Chọn một.** Hai phiên cùng sửa cấu hình dùng chung, liên tục ghi đè nhau. Thiết kế phù hợp nhất?

A. Tăng số phiên trong cùng thư mục.

B. Giao phạm vi rõ, dùng worktree/nhánh riêng và kiểm tra tích hợp.

C. Chỉ yêu cầu model cẩn thận hơn.

D. Tắt kiểm tra diff.

**2. Chọn một.** Hai worktree dùng chung một database kiểm thử. Vì sao test vẫn ảnh hưởng nhau?

A. Worktree không tự cô lập trạng thái dịch vụ ngoài thư mục Git.

B. Git không cho nhiều nhánh.

C. Model không thể chạy test.

D. Mọi worktree đều ghi cùng file theo định nghĩa.

**3. Chọn một.** Hai nhánh đều pass test riêng; merge không xung đột văn bản. Bước tiếp theo?

A. Triển khai ngay vì không có conflict.

B. Xóa test để tiết kiệm thời gian.

C. Chỉ đọc commit message.

D. Review thay đổi kết hợp và kiểm thử hành vi liên quan.

## Đáp án

1. **B.** Giao phạm vi rõ, dùng worktree/nhánh riêng và kiểm tra tích hợp. A tăng tranh chấp; C không cô lập ghi; D làm mất khả năng phát hiện thay đổi sai.

2. **A.** Worktree không tự cô lập trạng thái dịch vụ ngoài thư mục Git. B và C sai; D nhầm thư mục làm việc riêng với dịch vụ được chia sẻ. Cần dữ liệu test hoặc database riêng.

3. **D.** Review thay đổi kết hợp và kiểm thử hành vi liên quan. A bỏ qua xung đột ngữ nghĩa; B bỏ bằng chứng; C không kiểm tra hành vi thực tế.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Parallelizing Claude Code](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289241), sources/vertex-media/289241.json. Phụ đề mô tả worktree riêng, custom commands/$ARGUMENTS tạo và merge nhánh, review commit và xử lý conflict. Worktree không cô lập dịch vụ hay dependencies symlink dùng chung; merge không xung đột text vẫn cần kiểm thử tích hợp. Không nhân số instance vô hạn theo lời quảng bá productivity. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
