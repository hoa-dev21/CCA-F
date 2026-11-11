# Cô lập công việc song song

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276810), sources/bedrock-lessons/276810.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Nhiều phiên Claude Code cùng sửa một thư mục có thể ghi đè hoặc đọc phải thay đổi chưa hoàn chỉnh của nhau. Bài dùng Git worktrees để mỗi nhánh có một thư mục làm việc riêng, rồi tích hợp kết quả sau khi hoàn thành. Các worktree vẫn dùng chung kho Git, không phải những bản sao hoàn toàn độc lập.

Trước khi chia việc, nêu rõ nhiệm vụ, phạm vi tệp và điều kiện chấp nhận kết quả. Thư mục riêng chưa cô lập mọi thứ: thư viện được nối bằng liên kết tượng trưng (symlink), cơ sở dữ liệu kiểm thử, cổng dịch vụ, khóa bí mật và dịch vụ bên ngoài vẫn có thể dùng chung.

Ví dụ: Hai phiên chạy kiểm thử trên cùng cơ sở dữ liệu có thể ảnh hưởng nhau dù ở hai worktree. Cần xử lý trạng thái dùng chung theo nhu cầu kiểm thử.

Khi hợp nhất, đọc các thay đổi, giải quyết xung đột theo ý nghĩa và kiểm tra hành vi kết hợp. Hai nhánh đều qua kiểm thử riêng và không xung đột văn bản chưa chứng minh chúng tương thích.

Video còn minh họa lệnh tùy chỉnh ở `.claude/commands` và `$ARGUMENTS`. Đây là cách tự động hóa quy trình theo phiên bản lúc giảng, không thay việc kiểm tra khi hợp nhất mã.

## Tự kiểm tra

**Question 1 — Choose one.** Tests in separate worktrees overwrite each other's data despite non-overlapping diffs. What should be checked first?

A. Branch names, which must isolate all resources.

B. The second prompt because worktrees guarantee environment isolation.

C. Shared databases, ports, and services outside the worktrees.

D. Text conflicts in source files.

**Question 2 — Choose two.** Which TWO preparations reduce coordination errors between agents editing dependent modules?

A. Let both change interfaces and pick the shorter diff.

B. Use separate directories and manage shared test resources.

C. Define file scope, module contracts, and acceptance criteria.

D. Skip integration checks if branch tests pass.

**Question 3 — Choose one.** One branch changes timeout units to milliseconds; another adds a caller using seconds. Git merges cleanly and isolated tests pass. What is appropriate?

A. Check unit contracts and test the combined behavior.

B. Accept because no lines conflict.

C. Choose the branch with faster tests.

D. Rerun only unchanged branch-A tests.

**Question 4 — Choose two.** Two worktrees symlink dependencies to one location while an agent updates them. Which TWO statements are correct?

A. Separate directories do not isolate shared symlinked dependencies.

B. Identical lockfiles prove runtime isolation.

C. A shared Git store makes all source files identical.

D. Test results need assessment in a defined dependency environment.

**Question 5 — Choose one.** A custom command cherry-picks both agents' work and prints “done.” What better establishes integration completion?

A. Both agents said they finished.

B. Changed file counts match the plan.

C. The combined diff is reviewed, conflicts resolved, and integrated behavior tested.

D. The command exits zero and creates a commit.

## Đáp án và giải thích

1. **C.** C tìm trạng thái dùng chung ngoài worktree. D có thể cần khi hợp nhất nhưng không giải thích dữ liệu kiểm thử; A và B suy quá mức từ cô lập thư mục sang cô lập toàn môi trường.

2. **B, C.** C làm rõ trách nhiệm và ranh giới; B giảm can thiệp ngoài ý muốn. A tạo hai hợp đồng cạnh tranh; D bỏ sót lỗi chỉ xuất hiện khi kết hợp.

3. **A.** A phát hiện xung đột ngữ nghĩa liên module. B chỉ chứng minh ghép văn bản được; C không đánh giá tính đúng; D không kiểm tra trạng thái đã hợp nhất.

4. **A, D.** A chỉ ra đường dùng chung; D yêu cầu môi trường có thể tái hiện. C nhầm kho Git chung với nội dung làm việc chung. B nhầm phiên bản được khai báo trong lockfile với trạng thái thư mục dependency thực tế; một phiên vẫn có thể thay đổi tài nguyên mà phiên kia đang dùng.

5. **C.** C đánh giá kết quả thực tế. D xác nhận quy trình lệnh, chưa xác nhận tương thích; A là tự báo cáo từng phần; B chỉ đo phạm vi, không đo hành vi.

## Đối chiếu phụ đề chính thức

Phụ đề mô tả worktree riêng, lệnh tùy chỉnh và `$ARGUMENTS` để tạo, hợp nhất nhánh, kiểm tra commit và xử lý xung đột. Worktree không cô lập dịch vụ hoặc thư viện dùng chung qua symlink. Hợp nhất không xung đột văn bản vẫn cần kiểm thử tích hợp. Không tăng số phiên vô hạn chỉ vì lời giới thiệu lợi ích năng suất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Parallelizing Claude Code](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289241). Bản lưu: `sources/vertex-media/289241.json`.
