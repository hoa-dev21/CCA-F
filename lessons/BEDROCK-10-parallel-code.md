# Cô lập công việc song song

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276810), sources/bedrock-lessons/276810.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Nhiều phiên Claude Code cùng sửa một thư mục có thể ghi đè hoặc đọc phải thay đổi chưa hoàn chỉnh của nhau. Bài dùng Git worktrees để mỗi nhánh có một thư mục làm việc riêng, rồi tích hợp kết quả sau khi hoàn thành. Các worktree vẫn dùng chung kho Git, không phải những bản sao hoàn toàn độc lập.

Trước khi chia việc, nêu rõ nhiệm vụ, phạm vi tệp và điều kiện chấp nhận kết quả. Thư mục riêng chưa cô lập mọi thứ: thư viện được nối bằng liên kết tượng trưng (symlink), cơ sở dữ liệu kiểm thử, cổng dịch vụ, khóa bí mật và dịch vụ bên ngoài vẫn có thể dùng chung.

Ví dụ: Hai phiên chạy kiểm thử trên cùng cơ sở dữ liệu có thể ảnh hưởng nhau dù ở hai worktree. Cần xử lý trạng thái dùng chung theo nhu cầu kiểm thử.

Khi hợp nhất, đọc các thay đổi, giải quyết xung đột theo ý nghĩa và kiểm tra hành vi kết hợp. Hai nhánh đều qua kiểm thử riêng và không xung đột văn bản chưa chứng minh chúng tương thích.

Video còn minh họa lệnh tùy chỉnh ở `.claude/commands` và `$ARGUMENTS`. Đây là cách tự động hóa quy trình theo phiên bản lúc giảng, không thay việc kiểm tra khi hợp nhất mã.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hai phiên sửa code trong hai worktree nhưng kiểm thử làm mất dữ liệu của nhau. Diff không giao nhau. Cần kiểm tra gì trước?

A. Tên nhánh vì hai nhánh khác nhau phải cô lập mọi tài nguyên.

B. Prompt của phiên thứ hai vì worktree đã bảo đảm cô lập môi trường.

C. Tài nguyên dùng chung ngoài worktree: database, cổng, dịch vụ.

D. Xung đột văn bản trong file nguồn của hai worktree.

**Câu 2 — Chọn hai.** Bạn chuẩn bị giao hai tác nhân sửa hai module phụ thuộc nhau. Hai bước nào giảm lỗi phối hợp ngay từ đầu?

A. Cho cả hai tự sửa interface dùng chung rồi chọn bản có diff ngắn hơn.

B. Bố trí thư mục riêng và xử lý các tài nguyên kiểm thử dùng chung.

C. Nêu phạm vi file, hợp đồng giữa module và tiêu chí chấp nhận.

D. Coi kiểm thử từng nhánh là đủ nên bỏ kiểm tra sau tích hợp.

**Câu 3 — Chọn một.** Nhánh A đổi đơn vị timeout sang mili giây, nhánh B bổ sung caller vẫn truyền giây. Git hợp nhất không xung đột, test riêng đều đạt. Quyết định phù hợp?

A. Đối chiếu đơn vị và test hành vi sau khi kết hợp thay đổi.

B. Chấp nhận vì Git không tìm thấy xung đột trên cùng dòng.

C. Chấp nhận nhánh có thời gian chạy test nhanh hơn.

D. Chạy lại test A nguyên trạng mà không nạp thay đổi B.

**Câu 4 — Chọn hai.** Thư mục dependency ở hai worktree trỏ symlink về cùng nơi. Một tác nhân cập nhật thư viện trong lúc tác nhân kia chạy test. Hai nhận định nào đúng?

A. Thư mục riêng chưa cô lập dependency qua symlink.

B. Lockfile giống nhau đủ chứng minh dependency đang chạy được cô lập, dù thư mục cài đặt vẫn dùng chung.

C. Các worktree có kho Git chung nên mọi file nguồn luôn giống nhau.

D. Kết quả test cần được đánh giá trong môi trường dependency xác định.

**Câu 5 — Chọn một.** Sau khi hai tác nhân hoàn tất, một lệnh tùy chỉnh tự cherry-pick và in “done”. Điều kiện nào đủ hơn để tuyên bố việc tích hợp hoàn tất?

A. Từng tác nhân đã nói nhiệm vụ của mình hoàn thành.

B. Hai nhánh có số lượng file sửa giống với kế hoạch ban đầu.

C. Đã review diff, xử lý xung đột và test phần kết hợp.

D. Lệnh tùy chỉnh trả exit code 0 và tạo được commit.

## Đáp án và giải thích

1. **C.** C tìm trạng thái dùng chung ngoài worktree. D có thể cần khi hợp nhất nhưng không giải thích dữ liệu kiểm thử; A và B suy quá mức từ cô lập thư mục sang cô lập toàn môi trường.

2. **B, C.** C làm rõ trách nhiệm và ranh giới; B giảm can thiệp ngoài ý muốn. A tạo hai hợp đồng cạnh tranh; D bỏ sót lỗi chỉ xuất hiện khi kết hợp.

3. **A.** A phát hiện xung đột ngữ nghĩa liên module. B chỉ chứng minh ghép văn bản được; C không đánh giá tính đúng; D không kiểm tra trạng thái đã hợp nhất.

4. **A, D.** A chỉ ra đường dùng chung; D yêu cầu môi trường có thể tái hiện. C nhầm kho Git chung với nội dung làm việc chung. B nhầm phiên bản được khai báo trong lockfile với trạng thái thư mục dependency thực tế; một phiên vẫn có thể thay đổi tài nguyên mà phiên kia đang dùng.

5. **C.** C đánh giá kết quả thực tế. D xác nhận quy trình lệnh, chưa xác nhận tương thích; A là tự báo cáo từng phần; B chỉ đo phạm vi, không đo hành vi.

## Đối chiếu phụ đề chính thức

Phụ đề mô tả worktree riêng, lệnh tùy chỉnh và `$ARGUMENTS` để tạo, hợp nhất nhánh, kiểm tra commit và xử lý xung đột. Worktree không cô lập dịch vụ hoặc thư viện dùng chung qua symlink. Hợp nhất không xung đột văn bản vẫn cần kiểm thử tích hợp. Không tăng số phiên vô hạn chỉ vì lời giới thiệu lợi ích năng suất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Parallelizing Claude Code](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289241). Bản lưu: `sources/vertex-media/289241.json`.
