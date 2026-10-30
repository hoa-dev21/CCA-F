# BM25 lexical search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287767), sources/api-lessons/287767.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Semantic search tốt với cách diễn đạt gần nghĩa nhưng có thể bỏ sót mã sự cố hoặc thuật ngữ chính xác. Lexical search như BM25 bổ sung tín hiệu từ từ khóa, phù hợp trường hợp cần khớp tên/ID.

Bài giới thiệu trọng số từ xuất hiện phổ biến/hiếm và kết hợp hai cách truy xuất. Đây là giải thích khái niệm, không phải công thức BM25 đầy đủ. Không coi “có từ khóa” là chứng minh đoạn đủ trả lời; vẫn cần ngữ cảnh và kiểm chứng nguồn. Chi tiết thuật toán tìm kiếm là phần bổ trợ đọc nhanh cho mục tiêu thi hiện tại.

## Câu hỏi

**1. Chọn một.** Semantic retrieval trả đoạn cùng chủ đề nhưng không có incident ID cần tìm. Bổ sung nào sát bài?

A. Chỉ đổi tone.

B. Lexical search cho term/ID chính xác rồi kết hợp kết quả.

C. Bỏ incident ID khỏi query.

D. Tự đoán nội dung incident.

**2. Chọn một.** Hai cách retrieval bổ sung nhau thế nào?

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

Đã đọc [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276776), sources/bedrock-lessons/276776.json và đối chiếu với bản API. Cùng ví dụ incident ID và bổ sung lexical với semantic search. Giải thích term-frequency/rarity trong khóa chưa phải toàn bộ công thức BM25. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [BM25 lexical search](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289195), sources/vertex-lessons/289195.json. ID incident hiếm cần lexical match bổ sung semantic. BM25 dùng term frequency/rarity cùng chuẩn hóa độ dài, không chỉ đếm từ. Kiểm tra tokenizer cho identifier có dấu; không bảo đảm mọi exact match được xếp đúng nếu nội dung không trả lời query. Dùng chung câu hỏi khái niệm.
