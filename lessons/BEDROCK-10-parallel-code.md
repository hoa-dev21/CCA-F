# Cô lập công việc song song

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276810), sources/bedrock-lessons/276810.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Nhiều phiên Claude Code cùng sửa một thư mục có thể ghi đè hoặc đọc phải thay đổi chưa hoàn chỉnh của nhau. Bài dùng Git worktrees để mỗi nhánh có một thư mục làm việc riêng, rồi tích hợp kết quả sau khi hoàn thành. Các worktree vẫn dùng chung kho Git, không phải những bản sao hoàn toàn độc lập.

Trước khi chia việc, nêu rõ nhiệm vụ, phạm vi tệp và điều kiện chấp nhận kết quả. Thư mục riêng chưa cô lập mọi thứ: thư viện được nối bằng liên kết tượng trưng (symlink), cơ sở dữ liệu kiểm thử, cổng dịch vụ, khóa bí mật và dịch vụ bên ngoài vẫn có thể dùng chung.

Ví dụ: Hai phiên chạy kiểm thử trên cùng cơ sở dữ liệu có thể ảnh hưởng nhau dù ở hai worktree. Cần xử lý trạng thái dùng chung theo nhu cầu kiểm thử.

Khi hợp nhất, đọc các thay đổi, giải quyết xung đột theo ý nghĩa và kiểm tra hành vi kết hợp. Hai nhánh đều qua kiểm thử riêng và không xung đột văn bản chưa chứng minh chúng tương thích.

Video còn minh họa lệnh tùy chỉnh ở `.claude/commands` và `$ARGUMENTS`. Đây là cách tự động hóa quy trình theo phiên bản lúc giảng, không thay việc kiểm tra khi hợp nhất mã.

## Câu hỏi

**1. Chọn một.** Hai phiên cùng sửa cấu hình dùng chung, liên tục ghi đè nhau. Thiết kế phù hợp nhất?

A. Tăng số phiên trong cùng thư mục.

B. Giao phạm vi rõ, dùng worktree/nhánh riêng và kiểm tra tích hợp.

C. Chỉ yêu cầu mô hình cẩn thận hơn.

D. Tắt kiểm tra diff.

**2. Chọn một.** Hai worktree dùng chung một database kiểm thử. Vì sao test vẫn ảnh hưởng nhau?

A. Worktree không tự cô lập trạng thái dịch vụ ngoài thư mục Git.

B. Git không cho nhiều nhánh.

C. Mô hình không thể chạy test.

D. Mọi worktree đều ghi cùng file theo định nghĩa.

**3. Chọn một.** Hai nhánh đều pass test riêng; merge không xung đột văn bản. Bước tiếp theo?

A. Triển khai ngay vì không có conflict.

B. Xóa test để tiết kiệm thời gian.

C. Chỉ đọc commit message.

D. Kiểm tra thay đổi kết hợp và kiểm thử hành vi liên quan.

## Đáp án

1. **B.** Giao phạm vi rõ, dùng worktree/nhánh riêng và kiểm tra tích hợp. A tăng tranh chấp; C không cô lập ghi; D làm mất khả năng phát hiện thay đổi sai.

2. **A.** Worktree không tự cô lập trạng thái dịch vụ ngoài thư mục Git. B và C sai; D nhầm thư mục làm việc riêng với dịch vụ được chia sẻ. Cần dữ liệu test hoặc database riêng.

3. **D.** Kiểm tra thay đổi kết hợp và kiểm thử hành vi liên quan. A bỏ qua xung đột ngữ nghĩa; B bỏ bằng chứng; C không kiểm tra hành vi thực tế.

## Đối chiếu phụ đề chính thức

Phụ đề mô tả worktree riêng, lệnh tùy chỉnh và `$ARGUMENTS` để tạo, hợp nhất nhánh, kiểm tra commit và xử lý xung đột. Worktree không cô lập dịch vụ hoặc thư viện dùng chung qua symlink. Hợp nhất không xung đột văn bản vẫn cần kiểm thử tích hợp. Không tăng số phiên vô hạn chỉ vì lời giới thiệu lợi ích năng suất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Parallelizing Claude Code](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289241). Bản lưu: `sources/vertex-media/289241.json`.
