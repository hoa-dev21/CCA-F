# Ví dụ tác nhân AI thực tế

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287787), sources/api-lessons/287787.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học dùng Claude Code và khả năng điều khiển giao diện máy tính (computer use) để giới thiệu ứng dụng AI thực hiện nhiều bước. Điểm chung là kết hợp mô hình với công cụ, thực hiện thao tác và quan sát kết quả để chọn bước tiếp theo.

Claude Code làm việc với tệp, lệnh và quy trình phát triển phần mềm. Computer use thao tác qua giao diện. Hai cách khác nhau ở nơi hành động, nhưng đều cần biết thao tác vừa làm có đạt kết quả mong muốn hay không.

Ví dụ: Sau khi yêu cầu sửa tệp, cần xem tệp đã thay đổi đúng chưa. Sau thao tác trên giao diện, cần xem trạng thái mới thay vì chỉ giả định việc bấm nút đã thành công.

Đây là bài định hướng trước phần tác nhân AI. Theo đề cương đã lưu, chi tiết computer use nằm ngoài phạm vi thi; nguyên tắc kết hợp công cụ và kiểm chứng kết quả vẫn hữu ích. Bài học mô tả cách hoạt động, không thực hiện thao tác máy tính hay cài ứng dụng thay người học.

## Câu hỏi

**1. Chọn một.** Điểm kiến trúc chung được bài dùng hai ứng dụng minh họa là gì?

A. Chỉ đổi tên sản phẩm.

B. Ghép các công cụ, nhiều bước và tương tác/quan sát môi trường.

C. Không cần thực thi.

D. Không cần mục tiêu.

**2. Chọn một.** Computer use và Code khác nhau chủ yếu ở lớp thao tác nào trong ví dụ?

A. Không khác gì.

B. Chỉ màu UI.

C. Giao diện desktop so với file/lệnh trong phát triển.

D. Không có công cụ.

**3. Chọn một.** Khi ôn theo Exam Guide đã tải, chi tiết computer use có ưu tiên cao không?

A. Không; đọc định hướng, ưu tiên mục tiêu trong phạm vi thi.

B. Có, thay toàn bộ MCP.

C. Có, là mọi câu hỏi.

D. Có, không cần blueprint.

## Đáp án

1. **B.** B là nguyên tắc tác nhân AI; A chỉ nhãn, C và D bỏ cấu phần nhiệm vụ.

2. **C.** C phân biệt môi trường; A và B không mô tả vai trò, D trái bài.

3. **A.** A theo phạm vi; B, C, D bỏ trọng tâm đã xác định.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, phần tác nhân AI bắt đầu từ Claude Code và Computer Use, xem cách thiết kế và thực hành rồi rút ra nguyên tắc. Tên sản phẩm không thay việc xác định vòng công cụ, cách quan sát và đánh giá của hệ thống. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents overview](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276804). Bản lưu: `sources/bedrock-media/276804.json`.

## Đối chiếu phụ đề chính thức

Bài giới thiệu Claude Code trên dòng lệnh và Computer Use làm hai ví dụ để phân tích, thực hành và rút kinh nghiệm thiết kế tác nhân. Đây là phần định hướng, không phải bằng chứng đã chạy các ứng dụng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Anthropic apps](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289230). Bản lưu: `sources/vertex-media/289230.json`.
