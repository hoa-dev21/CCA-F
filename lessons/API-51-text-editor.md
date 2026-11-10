# The text edit tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287760), sources/api-lessons/287760.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học

Bản mô tả cấu trúc dữ liệu công cụ editor do Anthropic định nghĩa không có nghĩa máy chủ tự đọc/sửa file của bạn. Trong mẫu công cụ do ứng dụng thực thi, ứng dụng vẫn triển khai các thao tác và trả kết quả.

Bài minh họa xem file/thư mục, phạm vi dòng, thay hoặc tạo nội dung. Tập lệnh và bản mô tả cấu trúc dữ liệu version tùy mô hình, không lấy danh sách undo hoặc tên version cũ làm bảo đảm mọi mô hình hiện tại đều có.

Đọc trạng thái trước khi sửa, thực thi đúng thao tác hợp lệ và xem kết quả/diff sau sửa. Một tool-use block chỉ là yêu cầu, không chứng minh filesystem đã thay đổi. Phạm vi file và quyền vẫn thuộc thiết kế ứng dụng.

## Câu hỏi

**1. Chọn một.** Đã gửi editor bản mô tả cấu trúc dữ liệu nhưng chưa có mã thao tác file. Còn thiếu gì?

A. Không thiếu gì.

B. Chỉ logo editor.

C. Chỉ prompt dài.

D. Triển khai và định tuyến thao tác ở client, rồi trả kết quả.

**2. Chọn một.** Trước khi sửa file hiện hữu nên làm gì?

A. Đọc nội dung liên quan để sửa theo trạng thái thật.

B. Luôn ghi đè từ trí nhớ.

C. Bỏ mọi quyền file.

D. Chỉ dựa tên file.

**3. Chọn một.** Bản mô tả cấu trúc dữ liệu version cũ trong video nên dùng thế nào?

A. Mặc định đúng cho mọi mô hình mới.

B. Xác minh tương thích theo model/API trước khi thực hành.

C. Không bao giờ cần kiểm tra.

D. Tên version thay kết quả chạy.

## Đáp án

1. **D.** D thực hiện yêu cầu; A nhầm bản mô tả cấu trúc dữ liệu với mã, B và C không thao tác filesystem.

2. **A.** A cung cấp ngữ cảnh; B và D đoán, C mở quyền không cần.

3. **B.** B kiểm tra hợp đồng thực; A và C giả định bất biến, D nhầm thông tin mô tả với thực thi.

## Đối chiếu Bedrock

Đã đọc [The text editor tool](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276767), sources/bedrock-lessons/276767.json. Bản mô tả cấu trúc dữ liệu text editor do nhà cung cấp định nghĩa; ứng dụng vẫn phải triển khai đọc/ghi file và giới hạn đường dẫn. IDs và undo trong video phụ thuộc phiên bản, không phải mọi phiên bản editor đều hỗ trợ cùng lệnh. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu Vertex

Đã đọc [The text edit tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289180), sources/vertex-lessons/289180.json. Bản mô tả cấu trúc dữ liệu editor có sẵn nhưng ứng dụng triển khai bộ thực thi và giới hạn đường dẫn. Mã model-prefix/version/undo trong video phụ thuộc mô hình; không khẳng định mọi phiên bản hỗ trợ cùng tập lệnh. Dùng chung câu hỏi khái niệm.
