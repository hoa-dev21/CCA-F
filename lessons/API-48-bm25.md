# BM25 lexical search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287767), sources/api-lessons/287767.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Tìm kiếm theo ý nghĩa (semantic search) có thể tìm đoạn liên quan dù cách dùng từ khác câu hỏi. Tuy nhiên, nó có thể bỏ sót một mã sự cố hoặc thuật ngữ cần khớp chính xác.

Tìm kiếm theo từ khóa (lexical search), chẳng hạn BM25, bổ sung khả năng tìm theo những từ hoặc mã cụ thể. Bài giới thiệu cách tính đến việc một từ xuất hiện phổ biến hay hiếm trong kho để hỗ trợ xếp hạng kết quả; đây chỉ là giải thích khái niệm, không phải toàn bộ công thức BM25.

Ví dụ: Bạn hỏi nguyên nhân của sự cố có mã INC-204. Tìm kiếm theo ý nghĩa có thể trả các bài cùng chủ đề nhưng không nói về đúng sự cố. Tìm theo mã INC-204 giúp bổ sung kết quả cần khớp chính xác.

Hai cách tìm kiếm có thể kết hợp. Tuy vậy, một đoạn chứa đúng mã vẫn chưa chắc nói rõ nguyên nhân sự cố. Cần đọc nội dung và bối cảnh để xác định có đủ bằng chứng trả lời không. Chi tiết thuật toán là phần bổ trợ cho mục tiêu thi hiện tại.

## Câu hỏi

**1. Chọn một.** Semantic truy xuất dữ liệu trả đoạn cùng chủ đề nhưng không có incident ID cần tìm. Bổ sung nào sát bài?

A. Chỉ đổi tone.

B. Lexical search cho term/ID chính xác rồi kết hợp kết quả.

C. Bỏ incident ID khỏi truy vấn tìm kiếm.

D. Tự đoán nội dung incident.

**2. Chọn một.** Hai cách truy xuất dữ liệu bổ sung nhau thế nào?

A. Cả hai không có khác biệt.

B. Lexical luôn hiểu mọi ngữ nghĩa.

C. Semantic hỗ trợ gần nghĩa, lexical hỗ trợ term cụ thể.

D. Semantic tự cấp quyền nguồn.

**3. Chọn một.** Đoạn chứa đúng ID có chắc đủ trả lời về nguyên nhân sự cố không?

A. Chưa; cần đọc thông tin và bối cảnh liên quan.

B. Chắc chắn, chỉ cần ID.

C. Chắc chắn, không cần source.

D. Chắc chắn, BM25 thay mọi validation.

## Đáp án

1. **B.** B thêm tín hiệu từ khóa; A không tìm dữ liệu, C mất tiêu chí, D bịa.

2. **C.** C phân biệt tín hiệu; A bỏ khác biệt, B suy rộng, D sai vai trò.

3. **A.** A giữ kiểm tra nội dung; B, C, D nhầm match với bằng chứng đầy đủ.

## Đối chiếu RAG trên Bedrock

Bài Bedrock dùng mã sự cố để minh họa việc tìm theo từ khóa bổ sung cho tìm theo ý nghĩa. Giải thích về tần suất và độ hiếm của từ trong khóa chưa phải toàn bộ công thức BM25. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276776). Bản lưu: `sources/bedrock-lessons/276776.json`.

## Đối chiếu Vertex

Mã sự cố hiếm cần khả năng khớp từ cụ thể bên cạnh tìm gần nghĩa. BM25 xét tần suất, độ hiếm và chuẩn hóa độ dài, không chỉ đếm từ. Kiểm tra cách tách từ với mã có dấu hoặc ký hiệu. Khớp đúng mã chưa chứng minh đoạn đó trả lời câu hỏi hay được xếp hạng đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289195). Bản lưu: `sources/vertex-lessons/289195.json`.
