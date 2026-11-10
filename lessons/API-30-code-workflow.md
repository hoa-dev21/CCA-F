# Ngữ cảnh, kế hoạch, thực thi

Nguồn: [bài chính thức trong khóa API](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287805), sources/api-lessons/287805.json. Chưa thay thế khóa Claude Code in Action riêng. Câu hỏi tự biên soạn.

## Nội dung bài học


Claude Code có thể hỗ trợ từ việc tìm hiểu dự án đến lập kế hoạch, sửa mã và kiểm tra. Trước khi triển khai, hãy cho Claude đọc các tệp và quy ước liên quan. Khi hiểu cấu trúc đang có, Claude có cơ sở dùng lại mã thay vì tạo thêm chức năng trùng lặp.

Tệp `CLAUDE.md` có thể lưu thông tin ổn định như lệnh xây dựng ứng dụng, quy ước viết mã và kiến trúc. Quy tắc dùng chung cho nhóm nên đặt ở cấu hình dự án; ghi chú cá nhân cần phạm vi riêng. Không nên biến mọi chi tiết của một cuộc trò chuyện thành quy tắc lâu dài.

Bài còn giới thiệu cách phát triển dựa trên kiểm thử: xác định các trường hợp cần xử lý, viết kiểm thử có ý nghĩa, rồi triển khai và kiểm tra. Cách này tạo bằng chứng cụ thể thay vì chỉ tin lời báo “đã xong”.

Ví dụ: Khi thêm công cụ chuyển đổi tài liệu, trước hết đọc phần xử lý tài liệu và cách đăng ký công cụ MCP. Sau đó lập kế hoạch dùng lại mã, xác định cách xử lý tệp không tồn tại, rồi triển khai và kiểm thử. Các lệnh và phím tắt trong video thuộc phiên bản lúc giảng; điều chính cần nắm là quy trình.

## Câu hỏi

**1. Chọn một.** Claude tạo một module mới trùng chức năng có sẵn. Bước phòng ngừa sát bài học nhất?

A. Đọc các file và mẫu liên quan trước khi lập kế hoạch.

B. Chỉ yêu cầu sinh mã nhanh hơn.

C. Bỏ cấu trúc dự án khỏi ngữ cảnh.

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

Bài Bedrock cùng trình bày đọc mã, lập kế hoạch rồi triển khai. Cách làm dựa trên kiểm thử chọn trường hợp kiểm tra trước khi viết mã. `/init` và CLAUDE.md phục vụ ngữ cảnh dự án; phím `#` và cú pháp cũ cần được kiểm tra trước khi dùng. Có ví dụ trong video không tự cho phép đưa thay đổi vào vùng chờ Git hoặc tạo commit. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276811). Bản lưu: `sources/bedrock-lessons/276811.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đọc đầy đủ phụ đề, ví dụ chuyển tài liệu sang Markdown bắt đầu từ README, thiết lập môi trường và các phạm vi hướng dẫn dự án, cục bộ, cá nhân. Người học đọc công cụ mẫu và hàm chuyển đổi trước khi lập kế hoạch, triển khai. Một luồng khác chọn kiểm thử trước; `/clear` trong minh họa tách ngữ cảnh khỏi lời giải cũ. Lệnh, phím tắt tùy phiên bản; ví dụ không tự cấp quyền commit, cất thay đổi bằng stash hoặc triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Claude Code in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289246). Bản lưu: `sources/vertex-media/289246.json`.
