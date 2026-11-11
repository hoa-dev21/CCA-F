# Liên kết câu trả lời với tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287771), sources/api-lessons/287771.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Trích dẫn giúp người đọc biết một nhận định dựa vào phần nào của tài liệu. Bài minh họa các thông tin như mã hoặc số thứ tự tài liệu, tiêu đề, đoạn được dẫn và vị trí của đoạn đó. Tài liệu phân trang có thể dùng số trang; văn bản thuần có thể dùng vị trí ký tự.

Ứng dụng cần giữ mối liên hệ này khi xử lý và hiển thị câu trả lời. Ví dụ: nếu báo cáo có nhiều kết luận, người dùng cần biết mỗi kết luận dẫn tới nguồn và đoạn nào. Chỉ đặt 20 đường dẫn ở cuối mà không nối với từng nhận định làm việc kiểm chứng khó hơn.

Có trích dẫn không tự bảo đảm kết luận đúng. Hãy mở đoạn gốc để xem nó thực sự nói gì, còn điều kiện hoặc ngoại lệ nào không và thông tin có phù hợp về thời điểm không.

Một trích dẫn có thật vẫn có thể bị gắn với kết luận mà nó không hỗ trợ. Giá trị của trích dẫn là giúp truy lại bằng chứng; việc đánh giá bằng chứng đó vẫn cần được thực hiện.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Báo cáo có 20 liên kết cuối trang nhưng không biết số liệu nào dựa vào tài liệu nào. Cải thiện trực tiếp nhất?

A. Dùng một trích dẫn chung cho toàn bộ báo cáo.

B. Tăng số liên kết để mỗi chủ đề đều có nguồn gần giống.

C. Nối từng nhận định với nguồn và vị trí chứng minh.

D. Sắp liên kết theo tên miền để trông có hệ thống hơn.

**Câu 2 — Chọn một.** Trích dẫn đúng trang nhưng đoạn chỉ nói “có thể”, câu trả lời nói “luôn luôn”. Đánh giá nào đúng?

A. Hợp lệ vì người dùng có thể tự đọc và sửa hiểu nhầm.

B. Chỉ lỗi hiển thị URL, không phải lỗi ngữ nghĩa.

C. Trích dẫn chưa hỗ trợ mức khẳng định đang dùng.

D. Hợp lệ nếu tiêu đề tài liệu cùng chủ đề.

**Câu 3 — Chọn hai.** Ứng dụng nhận citation cho cả PDF và văn bản thuần. Hai thông tin nào cần giữ để dẫn đúng vị trí?

A. Vị trí theo loại tài liệu như trang hoặc khoảng ký tự.

B. Dùng thứ tự citation trong câu trả lời làm số trang.

C. Ép mọi vị trí thành số trang kể cả văn bản không phân trang.

D. Định danh tài liệu tương ứng với nguồn đã dùng.

**Câu 4 — Chọn một.** Sau nén tài liệu, một đoạn trích vẫn giữ offsets của bản gốc nhưng UI mở bản đã biến đổi. Người dùng đến sai chỗ. Cần sửa gì?

A. Giữ bản nguồn tương ứng hoặc ánh xạ vị trí qua phép biến đổi.

B. Đổi offsets thành chỉ số câu trong câu trả lời.

C. Coi trích dẫn vẫn đúng vì cùng tên tài liệu.

D. Chỉ giữ tiêu đề vì offsets không còn tiện dùng.

**Câu 5 — Chọn hai.** Hai claim cùng trích một tài liệu đáng tin. Hai kiểm tra nào vẫn cần?

A. Chỉ kiểm tra domain và bỏ qua nội dung đã có citation.

B. Điều kiện, ngoại lệ và thời điểm nguồn có phù hợp không.

C. Mỗi claim có được đoạn cụ thể hỗ trợ không.

D. Coi citation do mô hình sinh là bằng chứng đã được kiểm toán độc lập.

## Đáp án và giải thích

1. **C.** A sai: Có thể gán bằng chứng sai cho các kết luận khác nhau. B sai: Số lượng không bảo đảm liên quan hỗ trợ. C đúng: Khôi phục khả năng truy bằng chứng theo claim. D sai: Không tạo ánh xạ tới nhận định.

2. **C.** A sai: Khả năng truy nguồn không miễn trách nhiệm diễn đạt đúng. B sai: Sai nằm ở quan hệ claim–evidence. C đúng: Cần giữ điều kiện và mức chắc chắn của bằng chứng. D sai: Chủ đề không xác nhận nội dung khẳng định.

3. **A, D.** A đúng: Cần hiểu đúng hệ tọa độ nguồn. B sai: Thứ tự hiển thị không là vị trí tài liệu. C sai: Có thể tạo vị trí không tồn tại. D đúng: Tránh trỏ nhầm giữa nhiều tài liệu.

4. **A.** A đúng: Citation cần hệ vị trí nhất quán với nội dung được mở. B sai: Không chỉ tới bằng chứng nguồn. C sai: Tên giống không bảo đảm vị trí/nội dung tương ứng. D sai: Giảm khả năng xác minh thay vì sửa ánh xạ.

5. **B, C.** A sai: Uy tín không đủ. B đúng: Độ đúng phụ thuộc phạm vi áp dụng. C đúng: Một tài liệu có thể hỗ trợ claim này nhưng không claim kia. D sai: Sinh trích dẫn chưa là kiểm tra độc lập.

## Đối chiếu tính năng trên Bedrock

Converse trả trích dẫn trong cấu trúc nội dung của nhà cung cấp. Ứng dụng cần giữ liên kết từng nhận định với nguồn. Trích dẫn không thể hiện toàn bộ suy nghĩ bên trong và cũng chưa chứng minh nhận định được nguồn hỗ trợ đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Citations](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308840). Bản lưu: `sources/bedrock-lessons/308840.json`.

## Đối chiếu Vertex

Thiết lập trích dẫn cho tài liệu, tiêu đề, vị trí trang PDF hoặc ký tự văn bản giúp truy lại nguồn của nhận định. Giữ đúng chỉ số và vị trí theo phiên bản tài liệu, kiểm tra trước khi hiển thị. Có trích dẫn chưa chứng minh nguồn đúng, đủ hoặc thực sự hỗ trợ kết luận. Dùng chung câu hỏi.

Nguồn đối chiếu: [Citations](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289202). Bản lưu: `sources/vertex-lessons/289202.json`.
