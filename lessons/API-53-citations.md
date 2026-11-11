# Liên kết câu trả lời với tài liệu

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287771), sources/api-lessons/287771.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Trích dẫn giúp người đọc biết một nhận định dựa vào phần nào của tài liệu. Bài minh họa các thông tin như mã hoặc số thứ tự tài liệu, tiêu đề, đoạn được dẫn và vị trí của đoạn đó. Tài liệu phân trang có thể dùng số trang; văn bản thuần có thể dùng vị trí ký tự.

Ứng dụng cần giữ mối liên hệ này khi xử lý và hiển thị câu trả lời. Ví dụ: nếu báo cáo có nhiều kết luận, người dùng cần biết mỗi kết luận dẫn tới nguồn và đoạn nào. Chỉ đặt 20 đường dẫn ở cuối mà không nối với từng nhận định làm việc kiểm chứng khó hơn.

Có trích dẫn không tự bảo đảm kết luận đúng. Hãy mở đoạn gốc để xem nó thực sự nói gì, còn điều kiện hoặc ngoại lệ nào không và thông tin có phù hợp về thời điểm không.

Một trích dẫn có thật vẫn có thể bị gắn với kết luận mà nó không hỗ trợ. Giá trị của trích dẫn là giúp truy lại bằng chứng; việc đánh giá bằng chứng đó vẫn cần được thực hiện.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A report has 20 end links but no mapping from figures to documents. What directly improves it?

A. Use one citation for the whole report.

B. Add more broadly related links.

C. Link each claim to its supporting source and location.

D. Sort links by domain name.

**Question 2 — Choose one.** A cited passage says “may,” but the answer says “always.” What is the assessment?

A. Valid because users can correct the interpretation themselves.

B. Only a URL-display error.

C. The source does not support the strength of the claim.

D. Valid if the title shares the topic.

**Question 3 — Choose two.** Which TWO details preserve citation locations for PDF and plain text?

A. Type-appropriate locations such as pages or character ranges.

B. Use citation order as page number.

C. Force all locations into page numbers.

D. The identifier of the corresponding source document.

**Question 4 — Choose one.** Offsets refer to the original document, but the UI opens a compressed version and navigates incorrectly. What is needed?

A. The corresponding source version or a mapping through the transformation.

B. Offsets replaced by answer-sentence indices.

C. Assume the same filename guarantees correctness.

D. Keep only the title because offsets are inconvenient.

**Question 5 — Choose two.** Two claims cite a credible document. Which TWO checks remain necessary?

A. Check the domain only.

B. Verify applicability, exceptions, and timing.

C. Verify specific passages support each claim.

D. Treat generated citations as an independent audit.

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
