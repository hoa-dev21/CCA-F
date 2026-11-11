# Text chunking strategies

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287776), sources/api-lessons/287776.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Chunking là chia tài liệu thành các đoạn nhỏ để lưu và tìm kiếm. Cách chia ảnh hưởng trực tiếp đến việc hệ thống có lấy được đủ ngữ cảnh hay không.

Có vài hướng thường gặp trong bài:

- Chia theo kích thước: dễ áp dụng nhưng có thể cắt giữa câu hoặc tách tiêu đề khỏi nội dung.
- Cho các đoạn chồng lên nhau một phần (overlap): giữ thông tin lân cận ở ranh giới, đổi lại có thêm dữ liệu trùng và lượng lưu trữ.
- Chia theo cấu trúc như phần hoặc tiêu đề: phù hợp khi tài liệu có định dạng nhất quán.
- Chia theo câu hoặc ý nghĩa: có thể giữ nội dung liền mạch hơn; cách dựa trên ý nghĩa cần thêm xử lý.

Ví dụ: Quy tắc nằm ở cuối đoạn, còn ngoại lệ nằm ở đầu đoạn tiếp theo. Nếu chỉ tìm được đoạn đầu, AI có thể trả lời thiếu điều kiện. Cần xem lại ranh giới chia hoặc phần chồng lặp rồi thử với câu hỏi thực tế.

Không có kích thước hay phương pháp tốt nhất cho mọi kho. Hãy kiểm tra đoạn được lấy có giữ đủ ý nghĩa và truy được về nguồn không; cách phức tạp nhất chưa chắc đáng với công sức thêm vào.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Fixed-size chunks separate a rule from its exception, causing failures. Which experiment addresses this?

A. Add JSON-format examples.

B. Minimize every chunk's size.

C. Test new boundaries or overlap on questions needing both rule and exception.

D. Remove exceptions from scoring criteria.

**Question 2 — Choose one.** Markdown headings are consistent, but sections vary greatly in length. What is a reasonable starting approach?

A. Index headings without their content.

B. Use fixed lengths and discard headings.

C. Make the entire corpus one chunk.

D. Split by section, subdivide long sections, and measure context sufficiency.

**Question 3 — Choose two.** Overlap improves some answers but raises cost. Which TWO measures should be considered together?

A. Only initial embedding speed.

B. Duplicated content stored and supplied to the model.

C. Evidence coverage on questions spanning boundaries.

D. Chunk count as a direct quality score.

**Question 4 — Choose one.** Complex semantic chunking gives unchanged quality and slower processing. What is appropriate?

A. Keep it because “semantic” guarantees deeper understanding.

B. Prefer the simpler approach if it meets criteria at lower cost.

C. Add more complexity before investigating failures.

D. Evaluate only improved cases.

**Question 5 — Choose two.** After source updates, a useful chunk cannot be traced back. Which TWO requirements help?

A. Preserve source references and suitable locations or versions.

B. Use retrieval rank as a permanent source location.

C. Check both semantic integrity and traceability after splitting.

D. Retain embeddings alone as complete text representations.

## Đáp án và giải thích

1. **C.** A sai: Định dạng không sửa bằng chứng thiếu. B sai: Có thể làm ngữ cảnh phân mảnh hơn. C đúng: Cần bảo toàn ngữ cảnh qua ranh giới. D sai: Thay tiêu chí che lỗi thay vì sửa nó.

2. **D.** A sai: Tiêu đề không cung cấp toàn bộ bằng chứng. B sai: Có thể tách bối cảnh đang có sẵn. C sai: Mất tính chọn lọc và có thể vượt ngữ cảnh. D đúng: Tận dụng cấu trúc nhưng vẫn đo hạn chế.

3. **B, C.** A sai: Không phản ánh toàn bộ tác động vận hành. B đúng: Đo chi phí và nhiễu do chồng lặp. C đúng: Đo lợi ích của overlap. D sai: Số lượng không đo đủ ý nghĩa.

4. **B.** A sai: Tên phương pháp không thay bằng chứng đánh giá. B đúng: Độ phức tạp cần được biện minh bằng lợi ích đo được. C sai: Có thể tối ưu sai tầng lỗi. D sai: Chọn mẫu thiên lệch không phản ánh hiệu quả toàn bộ.

5. **A, C.** A đúng: Cần truy được về bằng chứng gốc. B sai: Thứ hạng truy vấn không phải định danh vị trí tài liệu. C đúng: Chunk tốt phải hữu ích và kiểm chứng được. D sai: Vectơ không thay đường lấy văn bản nguồn.

## Đối chiếu RAG trên Bedrock

Bài Bedrock so sánh chia theo kích thước, cấu trúc, ý nghĩa và việc cho các đoạn chồng nhau một phần. Cần đánh giá trên tài liệu thật, không mặc định một cách luôn tốt nhất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276782). Bản lưu: `sources/bedrock-lessons/276782.json`.

## Đối chiếu Vertex

Mẫu chia đoạn cần bảo đảm `0 <= overlap < size` để vòng lặp tiếp tục tiến lên. Nhận định chia theo ký tự luôn đáng tin nhất cho mã không phải quy tắc chung. Hãy giữ tiêu đề và thông tin nguồn, rồi đo chất lượng tìm kiếm khi so sánh các cách chia. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289208). Bản lưu: `sources/vertex-lessons/289208.json`.
