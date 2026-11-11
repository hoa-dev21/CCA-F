# Ngữ cảnh, kế hoạch, thực thi

Nguồn: [bài chính thức trong khóa API](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287805), sources/api-lessons/287805.json. Chưa thay thế khóa Claude Code in Action riêng. Câu hỏi tự biên soạn.

## Nội dung bài học


Claude Code có thể hỗ trợ từ việc tìm hiểu dự án đến lập kế hoạch, sửa mã và kiểm tra. Trước khi triển khai, hãy cho Claude đọc các tệp và quy ước liên quan. Khi hiểu cấu trúc đang có, Claude có cơ sở dùng lại mã thay vì tạo thêm chức năng trùng lặp.

Tệp `CLAUDE.md` có thể lưu thông tin ổn định như lệnh xây dựng ứng dụng, quy ước viết mã và kiến trúc. Quy tắc dùng chung cho nhóm nên đặt ở cấu hình dự án; ghi chú cá nhân cần phạm vi riêng. Không nên biến mọi chi tiết của một cuộc trò chuyện thành quy tắc lâu dài.

Bài còn giới thiệu cách phát triển dựa trên kiểm thử: xác định các trường hợp cần xử lý, viết kiểm thử có ý nghĩa, rồi triển khai và kiểm tra. Cách này tạo bằng chứng cụ thể thay vì chỉ tin lời báo “đã xong”.

Ví dụ: Khi thêm công cụ chuyển đổi tài liệu, trước hết đọc phần xử lý tài liệu và cách đăng ký công cụ MCP. Sau đó lập kế hoạch dùng lại mã, xác định cách xử lý tệp không tồn tại, rồi triển khai và kiểm thử. Các lệnh và phím tắt trong video thuộc phiên bản lúc giảng; điều chính cần nắm là quy trình.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Claude creates a conversion module duplicating an existing utility. Which workflow change prevents recurrence?

A. Explore structure, similar code, and conventions before planning.

B. Ban new files for every task.

C. Write longer prompts without locating existing code.

D. Check duplication only after all tests pass.

**Question 2 — Choose two.** A team has a stable build command, a personal editor preference, and a temporary task workaround. Which TWO instruction-management choices are appropriate?

A. Keep the stable build command in shared project configuration.

B. Make all three permanent shared rules.

C. Keep personal settings scoped appropriately and temporary state in task context.

D. Store the build command only in its author's user configuration.

**Question 3 — Choose one.** A conversion feature must report missing files clearly. The agent says “done” without test evidence. What evidence is most valuable?

A. Line count and the agent's confidence.

B. One demo using an existing file.

C. Passing and failing requirement-based tests, inspected results, and the diff.

D. A second unsupported completion statement.

**Question 4 — Choose two.** Which TWO test properties avoid merely mirroring implementation?

A. Derive expected behavior from requirements before coding.

B. Use every current return value as the expected result.

C. Include meaningful error and boundary cases.

D. Delete failing assertions once exceptions stop occurring.

**Question 5 — Choose one.** The repository registers MCP tools differently from an old course video. What should guide a new feature?

A. Copy the video's code exactly.

B. Replace the repository's registration system.

C. Mention the tool in CLAUDE.md without registering it.

D. Follow the repository contract and test registration and invocation.

## Đáp án và giải thích

1. **A.** A cung cấp cơ sở tái sử dụng trước khi đầu tư triển khai. B hạn chế máy móc có thể ngăn tính năng cần file mới. C không đưa bằng chứng kiến trúc. D phát hiện muộn làm tăng công sửa lại.

2. **A, C.** A chia sẻ thông tin ổn định; C tránh biến tạm thời/cá nhân thành quy tắc toàn nhóm. B gây tích lũy hướng dẫn sai phạm vi. D khiến máy mới thiếu quy ước chung.

3. **C.** C kiểm chứng yêu cầu và kiểm tra thay đổi. A/D là tín hiệu không thay thực thi. B bỏ đúng nhánh lỗi mà yêu cầu đặt ra.

4. **A, C.** A tạo chuẩn độc lập; C kiểm tra rủi ro hành vi. B hợp thức hóa cả lỗi hiện có. D làm yếu bằng chứng thay vì xử lý nguyên nhân thất bại.

5. **D.** D áp dụng quy trình với môi trường thực. A có thể sai phiên bản/kiến trúc; B mở rộng phạm vi không cần; C hướng dẫn không thay đăng ký thực thi.

## Đối chiếu Bedrock

Bài Bedrock cùng trình bày đọc mã, lập kế hoạch rồi triển khai. Cách làm dựa trên kiểm thử chọn trường hợp kiểm tra trước khi viết mã. `/init` và CLAUDE.md phục vụ ngữ cảnh dự án; phím `#` và cú pháp cũ cần được kiểm tra trước khi dùng. Có ví dụ trong video không tự cho phép đưa thay đổi vào vùng chờ Git hoặc tạo commit. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276811). Bản lưu: `sources/bedrock-lessons/276811.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đọc đầy đủ phụ đề, ví dụ chuyển tài liệu sang Markdown bắt đầu từ README, thiết lập môi trường và các phạm vi hướng dẫn dự án, cục bộ, cá nhân. Người học đọc công cụ mẫu và hàm chuyển đổi trước khi lập kế hoạch, triển khai. Một luồng khác chọn kiểm thử trước; `/clear` trong minh họa tách ngữ cảnh khỏi lời giải cũ. Lệnh, phím tắt tùy phiên bản; ví dụ không tự cấp quyền commit, cất thay đổi bằng stash hoặc triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289246). Bản lưu: `sources/vertex-media/289246.json`.
