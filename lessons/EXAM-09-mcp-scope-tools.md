# MCP scope và chọn công cụ khám phá codebase

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 2.4–2.5, trang PDF 11–12. Câu hỏi tự biên soạn theo đề cương, không phải bài video.

## Nội dung bài học


Theo cấu hình trong đề cương, MCP server dùng chung cho nhóm được đặt ở `.mcp.json` của dự án. Server cá nhân hoặc thử nghiệm dùng phạm vi người dùng (user scope), được mô tả là lưu tại `~/.claude.json`.

Dùng tham chiếu biến môi trường như `${GITHUB_TOKEN}` thay vì ghi khóa bí mật vào tệp chia sẻ. Mỗi thành viên cung cấp giá trị và quyền phù hợp trên máy mình. Có tên server trong cấu hình chưa chứng minh đã kết nối; cần kiểm tra danh sách công cụ thực sự được phát hiện và quyền sử dụng.

Nhiều server có thể cùng cung cấp công cụ. Mô tả rõ đầu vào, đầu ra và khi nào nên dùng giúp mô hình chọn đúng. Ví dụ: công cụ MCP tìm tài liệu theo ý nghĩa cần giải thích điểm khác với Grep chỉ tìm nội dung khớp trong tệp.

Resource dạng danh mục (catalog) giúp ứng dụng biết nguồn nào có sẵn trước khi chọn nội dung: danh sách yêu cầu hỗ trợ kèm tóm tắt, cây tài liệu hoặc cấu trúc cơ sở dữ liệu. Vẫn cần thao tác đọc resource và kiểm tra quyền.

Với nhu cầu phổ biến như tích hợp Jira, có thể cân nhắc server sẵn có đã được đánh giá phù hợp. Quy trình đặc thù mới có thể cần server riêng. Không chọn chỉ vì tìm thấy một server.

Khi đọc và sửa kho mã, phân biệt các công cụ:

- Glob tìm đường dẫn theo mẫu, chẳng hạn `**/*.test.tsx`.
- Grep tìm nội dung trong tệp.
- Read đọc nội dung.
- Edit thay một phần dựa trên đoạn dùng làm mốc nhận diện (anchor).
- Write ghi nội dung tệp.

Nếu mốc của Edit xuất hiện nhiều lần và không xác định được vị trí duy nhất, hãy đọc đầy đủ rồi chỉnh hoặc ghi có kiểm soát, kiểm tra diff sau đó. Khám phá mã từng bước từ điểm bắt đầu, theo phần nhập mô-đun và luồng gọi, thay vì nạp mọi tệp cùng lúc. Nếu hàm được xuất qua lớp trung gian, tìm các tên được xuất rồi tìm từng tên để không bỏ sót nơi gọi.

## Câu hỏi tình huống

**1. Chọn một.** Nhóm cần cùng server ticket nhưng máy thành viên mới không thấy vì cấu hình chỉ ở tài khoản người cũ. Cách sửa?

A. Chia sẻ file chứa token nguyên văn.

B. Đưa cấu hình dùng chung vào dự án scope, dùng biến môi trường và thiết lập quyền phù hợp từng người.

C. Chỉ đổi tên server trong prompt.

D. Mặc định cấu hình cá nhân được Git chia sẻ.

**2. Chọn một.** Cần tìm tất cả file theo mẫu `**/*.test.tsx`, sau đó tìm nội dung gọi một hàm. Thứ tự chọn công cụ?

A. Write rồi xóa file không đúng.

B. Chỉ Read mọi file trong repo.

C. Glob cho đường dẫn, Grep cho nội dung cần tìm.

D. Chỉ đo độ dài tên file.

**3. Chọn một.** Edit thất bại vì cùng chuỗi anchor xuất hiện nhiều lần. Cách phương án dự phòng theo đề cương?

A. Read đầy đủ và thực hiện thay đổi/Write có kiểm soát, kiểm tra diff.

B. Thay mọi chỗ khớp dù chưa biết mục đích.

C. Bỏ qua và báo đã sửa.

D. Tăng điểm tự tin trong phản hồi cuối.

## Đáp án

1. **B.** A làm lộ secret; C không tạo cấu hình; D nhầm scope cá nhân và dự án.
2. **C.** A phá dữ liệu; B tốn ngữ cảnh khi đã có mẫu tìm; D không tìm caller.
3. **A.** B có thể sửa sai vị trí; C tuyên bố sai; D không thay đổi file.
