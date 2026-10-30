# The text edit tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287760), sources/api-lessons/287760.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Tóm tắt

Schema công cụ editor do Anthropic định nghĩa không có nghĩa máy chủ tự đọc/sửa file của bạn. Trong mẫu client tool, ứng dụng vẫn triển khai các thao tác và trả kết quả.

Bài minh họa xem file/thư mục, phạm vi dòng, thay hoặc tạo nội dung. Tập lệnh và schema version tùy model, không lấy danh sách undo hoặc tên version cũ làm bảo đảm mọi model hiện tại đều có.

Đọc trạng thái trước khi sửa, thực thi đúng thao tác hợp lệ và xem kết quả/diff sau sửa. Một tool-use block chỉ là yêu cầu, không chứng minh filesystem đã thay đổi. Phạm vi file và quyền vẫn thuộc thiết kế ứng dụng.

## Câu hỏi

**1. Chọn một.** Đã gửi editor schema nhưng chưa có mã thao tác file. Còn thiếu gì?

A. Không thiếu gì.

B. Chỉ logo editor.

C. Chỉ prompt dài.

D. Triển khai và định tuyến thao tác ở client, rồi trả kết quả.

**2. Chọn một.** Trước khi sửa file hiện hữu nên làm gì?

A. Đọc nội dung liên quan để sửa theo trạng thái thật.

B. Luôn ghi đè từ trí nhớ.

C. Bỏ mọi quyền file.

D. Chỉ dựa tên file.

**3. Chọn một.** Schema version cũ trong video nên dùng thế nào?

A. Mặc định đúng cho mọi model mới.

B. Xác minh tương thích theo model/API trước khi thực hành.

C. Không bao giờ cần kiểm tra.

D. Tên version thay kết quả chạy.

## Đáp án

1. **D.** D thực hiện yêu cầu; A nhầm schema với mã, B và C không thao tác filesystem.

2. **A.** A cung cấp ngữ cảnh; B và D đoán, C mở quyền không cần.

3. **B.** B kiểm tra hợp đồng thực; A và C giả định bất biến, D nhầm metadata với thực thi.

## Đối chiếu Bedrock

Đã đọc [The text editor tool](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276767), sources/bedrock-lessons/276767.json. Schema text editor do nhà cung cấp định nghĩa; ứng dụng vẫn phải triển khai đọc/ghi file và giới hạn đường dẫn. IDs và undo trong video phụ thuộc phiên bản, không phải mọi phiên bản editor đều hỗ trợ cùng lệnh. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu Vertex

Đã đọc [The text edit tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289180), sources/vertex-lessons/289180.json. Schema editor có sẵn nhưng ứng dụng triển khai executor và giới hạn đường dẫn. Mã model-prefix/version/undo trong video phụ thuộc model; không khẳng định mọi phiên bản hỗ trợ cùng tập lệnh. Dùng chung câu hỏi khái niệm.
