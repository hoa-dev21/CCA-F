# Citations — Liên kết câu trả lời với tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287771), sources/api-lessons/287771.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Tóm tắt

Citations liên kết nhận định với phần văn bản hỗ trợ trong nguồn được cung cấp. Bài minh họa metadata như document index/title, cited text và vị trí; tài liệu trang có thể dùng số trang, văn bản thuần có thể dùng vị trí ký tự.

Giữ cấu trúc này qua các bước biến đổi và trình bày để người dùng mở đúng ngữ cảnh. Chỉ gom mọi link ở cuối mà không biết claim nào dựa vào nguồn nào làm mất giá trị kiểm chứng.

Citation hỗ trợ truy vết, không bảo đảm suy luận chính xác hoặc nguồn đủ cập nhật. Kiểm tra đoạn gốc thực sự hỗ trợ claim, thời điểm và giới hạn nguồn. Không đưa một citation có thật vào kết luận không được đoạn đó chứng minh.

## Câu hỏi

**1. Chọn một.** Một report có 20 URL cuối trang nhưng không nối claim với nguồn. Hạn chế chính?

A. Quá nhiều model.

B. Không thể đọc văn bản.

C. Không có tên project.

D. Khó xác minh mỗi nhận định dựa vào đoạn nào.

**2. Chọn một.** Một citation tồn tại có chứng minh claim đúng không?

A. Chưa; cần xem đoạn gốc, bối cảnh và mức hỗ trợ thực tế.

B. Có, mọi liên kết đều đủ.

C. Có, nếu tiêu đề dài.

D. Có, không cần xét ngày.

**3. Chọn một.** Với nhiều tài liệu, metadata nào hỗ trợ định vị nguồn?

A. Chỉ giọng điệu.

B. Document identifier/title và vị trí đoạn được dẫn.

C. Chỉ độ dài output.

D. Chỉ điểm tự tin.

## Đáp án

1. **D.** D là mất ánh xạ; A, B, C không mô tả vấn đề bằng chứng.

2. **A.** A kiểm tra entailment/bối cảnh; B và C suy từ hình thức, D bỏ thời gian nguồn.

3. **B.** B trỏ tới bằng chứng; A, C, D không định vị tài liệu.

## Đối chiếu tính năng trên Bedrock

Đã đọc [Citations](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308840), sources/bedrock-lessons/308840.json. Converse có citations content parts; giữ ánh xạ claim–source theo cấu trúc provider. Citation không làm lộ toàn bộ suy nghĩ nội bộ và không tự chứng minh claim được nguồn hỗ trợ đúng. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Đối chiếu Vertex

Đã đọc [Citations](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289202), sources/vertex-lessons/289202.json. Document citations.enabled, title, PDF page locations hoặc text character locations giúp nối claim về nguồn. Citation không chứng minh nguồn đúng, đầy đủ hay claim được hỗ trợ; giữ index/location đúng bản tài liệu, xác minh trước hiển thị. Dùng chung câu hỏi khái niệm.
