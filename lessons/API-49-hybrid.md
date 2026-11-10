# A Multi-Index RAG pipeline

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287766), sources/api-lessons/287766.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học

Bộ tìm kiếm tài liệu chung gửi truy vấn tìm kiếm tới các chỉ mục tìm kiếm, gom và hợp nhất kết quả. Các chỉ mục tìm kiếm giữ giao diện nhất quán giúp thay hoặc thêm phương pháp mà không buộc viết lại toàn hệ thống.

Không cộng điểm số gốc tùy tiện khi các chỉ mục tìm kiếm có thang điểm khác nhau. Bài dùng Reciprocal Rank Việc hợp nhất kết quả theo thứ hạng, với đóng góp dạng 1/(k+rank), để hợp nhất. Cần xử lý định danh tài liệu nhất quán để cùng một đoạn văn bản ở hai danh sách được nhận diện đúng.

Việc hợp nhất kết quả cải thiện cách kết hợp tín hiệu, không bảo đảm mọi câu trả lời đúng. Đo truy xuất dữ liệu trên câu hỏi đại diện trước khi kết luận hệ thống kết hợp nhiều phương pháp tốt hơn cho trường hợp của mình.

## Câu hỏi

**1. Chọn một.** Vectơ score và BM25 score khác thang đo. Cách kết hợp nào phù hợp với bài học?

A. Cộng thẳng số bất kể ngữ nghĩa.

B. Chọn số có nhiều chữ số nhất.

C. Bỏ mọi kết quả.

D. Dùng phương pháp hợp nhất phù hợp như RRF theo thứ hạng.

**2. Chọn một.** Vì sao chỉ mục tìm kiếm dùng giao diện chung hữu ích?

A. Dễ phối hợp, kiểm thử và mở rộng phương pháp truy xuất dữ liệu.

B. Bảo đảm không có lỗi chương trình.

C. Không cần lưu nội dung.

D. Mọi chỉ mục tìm kiếm luôn trả cùng điểm.

**3. Chọn một.** Cùng đoạn văn bản xuất hiện trong hai danh sách nhưng bị coi thành hai tài liệu khác. Cần kiểm tra gì?

A. Chỉ định dạng báo cáo.

B. Định danh/ánh xạ đoạn văn bản khi hợp nhất và loại bỏ kết quả trùng lặp.

C. Chỉ mô hình trả lời.

D. Chỉ tên dự án.

## Đáp án

1. **D.** D tránh so điểm số gốc không tương thích; A sai thang, B tùy tiện, C mất dữ liệu.

2. **A.** A là lợi ích thiết kế; B bảo đảm quá mức, C bỏ đối chiếu dữ liệu nguồn, D không có cơ sở.

3. **B.** B nhắm việc hợp nhất kết quả dữ liệu; A, C, D không sửa ánh xạ nguồn.

## Đối chiếu RAG trên Bedrock

Đã đọc [A multi-search RAG pipeline](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276779), sources/bedrock-lessons/276779.json và đối chiếu với bản API. Cùng Bộ tìm kiếm tài liệu và RRF theo thứ hạng; không cộng điểm số gốc khác thang. Đoạn code rút gọn trong trang là skeleton, không xác nhận đã thực thi quy trình xử lý hoàn chỉnh. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [A Multi-index RAG pipeline](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289193), sources/vertex-lessons/289193.json. Bộ tìm kiếm tài liệu hợp nhất vector/BM25 bằng reciprocal rank việc hợp nhất kết quả, không cộng raw cosine/BM25 scores. k_rrf và top-k là tham số khác nhau. Mẫu list comprehension thực thi tuần tự; kiến trúc có thể song song khi host triển khai. Dùng chung câu hỏi khái niệm.
