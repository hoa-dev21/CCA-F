# The text edit tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287760), sources/api-lessons/287760.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu công cụ chỉnh sửa văn bản có cấu trúc do Anthropic định nghĩa. Có bản mô tả công cụ không có nghĩa máy chủ Anthropic tự đọc hoặc sửa tệp trên máy bạn. Với loại công cụ do ứng dụng thực thi trong mẫu, ứng dụng vẫn phải viết mã xử lý và trả kết quả.

Các thao tác minh họa gồm xem tệp hoặc thư mục, đọc một phạm vi dòng, thay nội dung và tạo nội dung. Danh sách lệnh cùng phiên bản định nghĩa công cụ tùy mô hình; không nên lấy tính năng hoàn tác hoặc tên phiên bản cũ làm cam kết cho mọi mô hình hiện tại.

Trước khi sửa tệp có sẵn, đọc nội dung liên quan để biết trạng thái thật. Sau khi chạy thao tác hợp lệ, xem kết quả và phần khác biệt trước, sau khi sửa (diff).

Một khối `tool_use` mới thể hiện yêu cầu sửa, chưa chứng minh tệp đã thay đổi. Ứng dụng chịu trách nhiệm giới hạn tệp được truy cập, kiểm tra quyền, thực thi và xác minh kết quả.

## Câu hỏi

**1. Chọn một.** Đã gửi bản mô tả công cụ chỉnh sửa văn bản nhưng chưa có mã đọc, ghi tệp. Còn thiếu gì?

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

Nhà cung cấp định nghĩa cấu trúc công cụ chỉnh sửa, nhưng ứng dụng vẫn phải thực hiện đọc, ghi và giới hạn đường dẫn. Mã phiên bản và khả năng hoàn tác trong video không áp dụng cho mọi phiên bản editor. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text editor tool](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276767). Bản lưu: `sources/bedrock-lessons/276767.json`.

## Đối chiếu Vertex

Dù có sẵn định nghĩa editor, ứng dụng vẫn cần bộ thực thi và phạm vi tệp được phép. Tiền tố mã mô hình, phiên bản và lệnh hoàn tác trong ví dụ phụ thuộc mô hình; cần kiểm tra thay vì giả định cùng tập lệnh ở mọi nơi. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text edit tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289180). Bản lưu: `sources/vertex-lessons/289180.json`.
