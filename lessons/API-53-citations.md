# Liên kết câu trả lời với tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287771), sources/api-lessons/287771.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Trích dẫn giúp người đọc biết một nhận định dựa vào phần nào của tài liệu. Bài minh họa các thông tin như mã hoặc số thứ tự tài liệu, tiêu đề, đoạn được dẫn và vị trí của đoạn đó. Tài liệu phân trang có thể dùng số trang; văn bản thuần có thể dùng vị trí ký tự.

Ứng dụng cần giữ mối liên hệ này khi xử lý và hiển thị câu trả lời. Ví dụ: nếu báo cáo có nhiều kết luận, người dùng cần biết mỗi kết luận dẫn tới nguồn và đoạn nào. Chỉ đặt 20 đường dẫn ở cuối mà không nối với từng nhận định làm việc kiểm chứng khó hơn.

Có trích dẫn không tự bảo đảm kết luận đúng. Hãy mở đoạn gốc để xem nó thực sự nói gì, còn điều kiện hoặc ngoại lệ nào không và thông tin có phù hợp về thời điểm không.

Một trích dẫn có thật vẫn có thể bị gắn với kết luận mà nó không hỗ trợ. Giá trị của trích dẫn là giúp truy lại bằng chứng; việc đánh giá bằng chứng đó vẫn cần được thực hiện.

## Câu hỏi

**1. Chọn một.** Một report có 20 URL cuối trang nhưng không nối claim với nguồn. Hạn chế chính?

A. Quá nhiều mô hình.

B. Không thể đọc văn bản.

C. Không có tên dự án.

D. Khó xác minh mỗi nhận định dựa vào đoạn nào.

**2. Chọn một.** Một trích dẫn nguồn tồn tại có chứng minh claim đúng không?

A. Chưa; cần xem đoạn gốc, bối cảnh và mức hỗ trợ thực tế.

B. Có, mọi liên kết đều đủ.

C. Có, nếu tiêu đề dài.

D. Có, không cần xét ngày.

**3. Chọn một.** Với nhiều tài liệu, thông tin mô tả nào hỗ trợ định vị nguồn?

A. Chỉ giọng điệu.

B. Document identifier/title và vị trí đoạn được dẫn.

C. Chỉ độ dài output.

D. Chỉ điểm tự tin.

## Đáp án

1. **D.** D là mất ánh xạ; A, B, C không mô tả vấn đề bằng chứng.

2. **A.** A kiểm tra entailment/bối cảnh; B và C suy từ hình thức, D bỏ thời gian nguồn.

3. **B.** B trỏ tới bằng chứng; A, C, D không định vị tài liệu.

## Đối chiếu tính năng trên Bedrock

Converse trả trích dẫn trong cấu trúc nội dung của nhà cung cấp. Ứng dụng cần giữ liên kết từng nhận định với nguồn. Trích dẫn không thể hiện toàn bộ suy nghĩ bên trong và cũng chưa chứng minh nhận định được nguồn hỗ trợ đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Citations](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308840). Bản lưu: `sources/bedrock-lessons/308840.json`.

## Đối chiếu Vertex

Thiết lập trích dẫn cho tài liệu, tiêu đề, vị trí trang PDF hoặc ký tự văn bản giúp truy lại nguồn của nhận định. Giữ đúng chỉ số và vị trí theo phiên bản tài liệu, kiểm tra trước khi hiển thị. Có trích dẫn chưa chứng minh nguồn đúng, đủ hoặc thực sự hỗ trợ kết luận. Dùng chung câu hỏi.

Nguồn đối chiếu: [Citations](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289202). Bản lưu: `sources/vertex-lessons/289202.json`.
