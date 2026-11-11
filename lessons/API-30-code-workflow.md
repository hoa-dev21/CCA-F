# Ngữ cảnh, kế hoạch, thực thi

Nguồn: [bài chính thức trong khóa API](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287805), sources/api-lessons/287805.json. Chưa thay thế khóa Claude Code in Action riêng. Câu hỏi tự biên soạn.

## Nội dung bài học


Claude Code có thể hỗ trợ từ việc tìm hiểu dự án đến lập kế hoạch, sửa mã và kiểm tra. Trước khi triển khai, hãy cho Claude đọc các tệp và quy ước liên quan. Khi hiểu cấu trúc đang có, Claude có cơ sở dùng lại mã thay vì tạo thêm chức năng trùng lặp.

Tệp `CLAUDE.md` có thể lưu thông tin ổn định như lệnh xây dựng ứng dụng, quy ước viết mã và kiến trúc. Quy tắc dùng chung cho nhóm nên đặt ở cấu hình dự án; ghi chú cá nhân cần phạm vi riêng. Không nên biến mọi chi tiết của một cuộc trò chuyện thành quy tắc lâu dài.

Bài còn giới thiệu cách phát triển dựa trên kiểm thử: xác định các trường hợp cần xử lý, viết kiểm thử có ý nghĩa, rồi triển khai và kiểm tra. Cách này tạo bằng chứng cụ thể thay vì chỉ tin lời báo “đã xong”.

Ví dụ: Khi thêm công cụ chuyển đổi tài liệu, trước hết đọc phần xử lý tài liệu và cách đăng ký công cụ MCP. Sau đó lập kế hoạch dùng lại mã, xác định cách xử lý tệp không tồn tại, rồi triển khai và kiểm thử. Các lệnh và phím tắt trong video thuộc phiên bản lúc giảng; điều chính cần nắm là quy trình.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Claude tạo module chuyển đổi mới trùng với tiện ích có sẵn trong repo. Nhóm muốn tránh lặp lại lỗi ở tính năng tiếp theo. Thay đổi quy trình nào phù hợp?

A. Khảo sát cấu trúc, mã tương tự và quy ước trước khi lập kế hoạch.

B. Cấm tạo file mới cho mọi nhiệm vụ.

C. Viết prompt dài hơn nhưng không đưa đường dẫn mã hiện có.

D. Chỉ phát hiện trùng lặp sau khi mọi test đã xanh.

**Câu 2 — Chọn hai.** Nhóm có lệnh build chung, một sở thích editor cá nhân và một workaround tạm của task. Hai quyết định nào đúng khi quản lý hướng dẫn?

A. Đặt lệnh build ổn định ở cấu hình dự án được chia sẻ.

B. Đưa cả ba vào quy tắc chung vĩnh viễn để không quên.

C. Giữ thiết lập cá nhân đúng scope và trạng thái tạm trong ngữ cảnh/task phù hợp.

D. Ghi build command chỉ trong user config của tác giả.

**Câu 3 — Chọn một.** Tính năng chuyển tài liệu phải báo lỗi rõ khi file không tồn tại. Tác nhân đã viết code và báo “xong” nhưng không có kết quả kiểm thử. Bằng chứng nào giá trị nhất?

A. Số dòng code và nhận xét tự tin của tác nhân.

B. Một demo với file tồn tại duy nhất.

C. Test ca đạt/lỗi theo yêu cầu, kiểm tra kết quả và diff.

D. Một lời xác nhận thứ hai từ cùng tác nhân mà không chạy gì.

**Câu 4 — Chọn hai.** Theo quy trình dựa trên kiểm thử, hai đặc tính nào giúp test tránh chỉ phản chiếu implementation?

A. Xác định expected behavior từ yêu cầu trước khi cài đặt.

B. Lấy mọi giá trị hiện implementation trả làm expected.

C. Bao gồm trường hợp lỗi/ranh giới có ý nghĩa với người dùng.

D. Xóa assertion thất bại nếu code mới đã chạy hết exception.

**Câu 5 — Chọn một.** Sau khi đọc repo, tác nhân thấy cách đăng ký MCP tool khác mẫu video. Phương án nào phù hợp nhất cho tính năng mới?

A. Sao chép nguyên mã video để bám khóa học.

B. Đổi toàn bộ cơ chế đăng ký của repo cho giống video.

C. Bỏ đăng ký và chỉ mô tả tên tool trong CLAUDE.md.

D. Theo hợp đồng repo; kiểm thử đăng ký và gọi tool.

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
