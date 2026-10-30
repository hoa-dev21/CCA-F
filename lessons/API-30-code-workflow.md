# Claude Code in action — Ngữ cảnh, kế hoạch, thực thi

Nguồn: [bài chính thức trong khóa API](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287805), sources/api-lessons/287805.json. Chưa thay thế khóa Claude Code in Action riêng. Câu hỏi tự biên soạn.

## Tóm tắt

Claude Code hỗ trợ nhiều giai đoạn phát triển, không chỉ sinh đoạn mã. Bài đề xuất đưa các file liên quan vào ngữ cảnh, yêu cầu lập kế hoạch trước khi sửa, rồi triển khai khi cách làm đã rõ.

`CLAUDE.md` lưu thông tin dự án như lệnh build, quy ước và kiến trúc. Cần phân biệt cấu hình dùng chung với ghi chú cá nhân và hướng dẫn dùng qua nhiều dự án. Không lưu mọi chi tiết của một cuộc trao đổi như thể đều là quy tắc lâu dài.

Một luồng khác là xác định test case, viết các kiểm thử có ý nghĩa rồi triển khai để đáp ứng chúng. Tiêu chí kiểm tra rõ giúp xác minh hành vi thay vì chỉ tin lời mô tả “đã xong”.

Ví dụ tự biên soạn: thêm công cụ chuyển đổi tài liệu vào dự án có sẵn. Trước hết đọc module xử lý tài liệu và cách đăng ký MCP tools, sau đó lập kế hoạch tái sử dụng mã, xác định trường hợp file thiếu, rồi triển khai và kiểm tra.

Bài có nhắc các lệnh giao diện của phiên bản lúc giảng. Bản ôn này tập trung quy trình; không coi toàn bộ shortcut cũ trong video là cú pháp hiện hành.

## Câu hỏi

**1. Chọn một.** Claude tạo một module mới trùng chức năng có sẵn. Bước phòng ngừa sát bài học nhất?

A. Đọc các file và mẫu liên quan trước khi lập kế hoạch.

B. Chỉ yêu cầu sinh mã nhanh hơn.

C. Bỏ cấu trúc dự án khỏi context.

D. Tăng độ dài phản hồi cuối.

**2. Chọn một.** Quy ước build cần chia sẻ cho mọi kỹ sư trong cùng repo. Phạm vi phù hợp?

A. Chỉ ghi trong ghi chú riêng không chia sẻ.

B. Cấu hình dự án dùng chung.

C. Đưa vào mọi câu hỏi thủ công, không lưu.

D. Chỉ thêm vào kết quả test tạm.

**3. Chọn một.** Nhóm muốn kiểm chứng tính năng mới theo luồng test-driven trong bài. Thứ tự phù hợp?

A. Viết lời kết luận rồi bỏ kiểm thử.

B. Triển khai ngẫu nhiên, không nêu tiêu chí.

C. Xác định test case, viết test phù hợp, rồi triển khai và kiểm tra.

D. Chỉ đổi tên hàm để coi là hoàn thành.

## Đáp án

1. **A.** B và D không cung cấp kiến trúc hiện có; C làm giảm khả năng tái sử dụng.
2. **B.** A không chia sẻ; C dễ bỏ sót và lặp; D không phải nơi lưu quy tắc lâu dài.
3. **C.** A, B thiếu bằng chứng hành vi; D không thực hiện yêu cầu tính năng.

## Đối chiếu Bedrock

Đã đọc [Claude Code in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276811), sources/bedrock-lessons/276811.json. Nguồn Bedrock cũng trình bày đọc code, lập kế hoạch rồi triển khai; TDD chọn test phù hợp trước khi viết code. /init và CLAUDE.md phục vụ ngữ cảnh dự án; phím # và cú pháp giao diện cũ trong video cần kiểm tra trước khi dùng. Không tự stage/commit chỉ vì bài có ví dụ. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Claude Code in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289246), sources/vertex-media/289246.json. Đã đọc đầy đủ thực hành document-path-to-Markdown: đọc README/setup, /init và project/local/user memory; đọc tool mẫu cùng hàm conversion trước lập kế hoạch rồi triển khai. Workflow khác chọn test cases phù hợp trước implementation; /clear ở demo tách context để không dùng lại lời giải trước. Phím #/cú pháp video theo phiên bản; không tự commit/stash/deploy chỉ vì video có ví dụ. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
