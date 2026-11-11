# BM25 lexical search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287767), sources/api-lessons/287767.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Tìm kiếm theo ý nghĩa (semantic search) có thể tìm đoạn liên quan dù cách dùng từ khác câu hỏi. Tuy nhiên, nó có thể bỏ sót một mã sự cố hoặc thuật ngữ cần khớp chính xác.

Tìm kiếm theo từ khóa (lexical search), chẳng hạn BM25, bổ sung khả năng tìm theo những từ hoặc mã cụ thể. Bài giới thiệu cách tính đến việc một từ xuất hiện phổ biến hay hiếm trong kho để hỗ trợ xếp hạng kết quả; đây chỉ là giải thích khái niệm, không phải toàn bộ công thức BM25.

Ví dụ: Bạn hỏi nguyên nhân của sự cố có mã INC-204. Tìm kiếm theo ý nghĩa có thể trả các bài cùng chủ đề nhưng không nói về đúng sự cố. Tìm theo mã INC-204 giúp bổ sung kết quả cần khớp chính xác.

Hai cách tìm kiếm có thể kết hợp. Tuy vậy, một đoạn chứa đúng mã vẫn chưa chắc nói rõ nguyên nhân sự cố. Cần đọc nội dung và bối cảnh để xác định có đủ bằng chứng trả lời không. Chi tiết thuật toán là phần bổ trợ cho mục tiêu thi hiện tại.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Semantic search for INC-204 returns similar incidents with different IDs. What addresses the gap?

A. Substitute the most similar incident.

B. Remove INC-204 to improve semantic similarity.

C. Search for the exact identifier and inspect candidate content.

D. Raise generation temperature.

**Question 2 — Choose one.** BM25 finds a page listing INC-204 but not its cause. What is justified?

A. Matching the ID proves the proposed cause.

B. The highest score replaces missing content.

C. The match identifies a candidate, but causal evidence is still missing.

D. Cite the page to support a guessed cause.

**Question 3 — Choose two.** Queries include both precise technical terms and everyday paraphrases. Which TWO designs are justified?

A. Use lexical search for exact terms and identifiers.

B. Treat frequently occurring terms as inherently stronger evidence.

C. Use semantic search for related phrasing.

D. Keep only the rarest query word and discard context.

**Question 4 — Choose one.** Pages repeating a common word rank highly. Why is counting occurrences insufficient?

A. Frequent words must always be removed, even target identifiers.

B. Corpus-wide term frequency also matters.

C. Answer length can repair retrieval ranking.

D. Every rare term is a correct business answer.

**Question 5 — Choose two.** Which TWO test categories belong in a BM25-enhanced RAG evaluation?

A. Only exact document titles.

B. Only questions sharing any word with results.

C. Paraphrased questions requiring context.

D. Questions requiring exact identifiers or proper names.

## Đáp án và giải thích

1. **C.** A sai: Tương tự không chứng minh cùng sự cố. B sai: Loại điều kiện định danh quan trọng. C đúng: Lexical search bổ sung khả năng khớp mã. D sai: Sampling đầu ra không sửa chọn sai tài liệu.

2. **C.** A sai: Không có quan hệ hỗ trợ đó. B sai: Điểm xếp hạng không tạo bằng chứng. C đúng: Đúng từ khóa chưa đủ trả lời nội dung yêu cầu. D sai: Có liên kết không làm suy đoán thành có căn cứ.

3. **A, C.** A đúng: Khớp chính xác có giá trị riêng. B sai: Không phản ánh logic phân biệt của truy xuất từ khóa. C đúng: Có thể hỗ trợ khi không trùng từ. D sai: Mất quan hệ và điều kiện của câu hỏi.

4. **B.** A sai: Loại máy móc có thể bỏ định danh quan trọng. B đúng: Tần suất thô không đo sức phân biệt của từ. C sai: Tầng sinh không đổi thứ hạng đã dùng. D sai: Hiếm chỉ là tín hiệu tìm kiếm.

5. **C, D.** A sai: Mẫu quá thuận lợi không đại diện cách hỏi thực tế. B sai: Điều kiện đó yếu hơn yêu cầu đủ bằng chứng. C đúng: Kiểm tra không đánh đổi mất semantic coverage. D đúng: Đo lợi ích lexical cụ thể.

## Đối chiếu RAG trên Bedrock

Bài Bedrock dùng mã sự cố để minh họa việc tìm theo từ khóa bổ sung cho tìm theo ý nghĩa. Giải thích về tần suất và độ hiếm của từ trong khóa chưa phải toàn bộ công thức BM25. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276776). Bản lưu: `sources/bedrock-lessons/276776.json`.

## Đối chiếu Vertex

Mã sự cố hiếm cần khả năng khớp từ cụ thể bên cạnh tìm gần nghĩa. BM25 xét tần suất, độ hiếm và chuẩn hóa độ dài, không chỉ đếm từ. Kiểm tra cách tách từ với mã có dấu hoặc ký hiệu. Khớp đúng mã chưa chứng minh đoạn đó trả lời câu hỏi hay được xếp hạng đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289195). Bản lưu: `sources/vertex-lessons/289195.json`.
