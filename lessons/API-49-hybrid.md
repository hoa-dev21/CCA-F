# A Multi-Index RAG pipeline

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287766), sources/api-lessons/287766.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Retriever chung gửi query tới các index, gom và hợp nhất kết quả. Các index giữ giao diện nhất quán giúp thay hoặc thêm phương pháp mà không buộc viết lại toàn hệ thống.

Không cộng raw scores tùy tiện khi các index có thang điểm khác nhau. Bài dùng Reciprocal Rank Fusion theo thứ hạng, với đóng góp dạng 1/(k+rank), để hợp nhất. Cần xử lý định danh tài liệu nhất quán để cùng một chunk ở hai danh sách được nhận diện đúng.

Fusion cải thiện cách kết hợp tín hiệu, không tự bảo đảm mọi câu trả lời đúng. Đo retrieval trên câu hỏi đại diện trước khi kết luận hệ thống hybrid tốt hơn cho trường hợp của mình.

## Câu hỏi

**1. Chọn một.** Vector score và BM25 score khác thang đo. Cách ghép sát bài?

A. Cộng thẳng số bất kể ngữ nghĩa.

B. Chọn số có nhiều chữ số nhất.

C. Bỏ mọi kết quả.

D. Dùng phương pháp hợp nhất phù hợp như RRF theo thứ hạng.

**2. Chọn một.** Vì sao index dùng giao diện chung hữu ích?

A. Dễ phối hợp, kiểm thử và mở rộng phương pháp retrieval.

B. Bảo đảm không có bug.

C. Không cần lưu content.

D. Mọi index luôn trả cùng điểm.

**3. Chọn một.** Cùng chunk xuất hiện trong hai danh sách nhưng bị coi thành hai tài liệu khác. Cần kiểm tra gì?

A. Chỉ format báo cáo.

B. Định danh/ánh xạ chunk khi hợp nhất và khử trùng.

C. Chỉ model trả lời.

D. Chỉ tên project.

## Đáp án

1. **D.** D tránh so raw score không tương thích; A sai thang, B tùy tiện, C mất dữ liệu.

2. **A.** A là lợi ích thiết kế; B bảo đảm quá mức, C bỏ grounding, D không có cơ sở.

3. **B.** B nhắm fusion dữ liệu; A, C, D không sửa ánh xạ nguồn.

## Đối chiếu RAG trên Bedrock

Đã đọc [A multi-search RAG pipeline](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276779), sources/bedrock-lessons/276779.json và đối chiếu với bản API. Cùng Retriever và RRF theo thứ hạng; không cộng raw scores khác thang. Đoạn code rút gọn trong trang là skeleton, không xác nhận đã thực thi pipeline hoàn chỉnh. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [A Multi-index RAG pipeline](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289193), sources/vertex-lessons/289193.json. Retriever hợp nhất vector/BM25 bằng reciprocal rank fusion, không cộng raw cosine/BM25 scores. k_rrf và top-k là tham số khác nhau. Mẫu list comprehension thực thi tuần tự; kiến trúc có thể song song khi host triển khai. Dùng chung câu hỏi khái niệm.
