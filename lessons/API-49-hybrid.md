# A Multi-Index RAG pipeline

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287766), sources/api-lessons/287766.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Tìm kiếm kết hợp (hybrid search) gửi cùng câu hỏi đến nhiều cách tìm kiếm, chẳng hạn tìm theo vectơ và tìm theo từ khóa, rồi hợp nhất kết quả. Một bộ điều phối chung giúp gọi các bộ tìm kiếm qua giao diện nhất quán, thuận tiện khi thay hoặc bổ sung phương pháp.

Không nên cộng trực tiếp các điểm gốc nếu chúng dùng thang đo khác nhau. Ví dụ: điểm BM25 và điểm độ gần vectơ không có cùng ý nghĩa, nên tổng của chúng có thể không phản ánh kết quả tốt hơn.

Bài dùng Reciprocal Rank Fusion (RRF), tức hợp nhất theo thứ hạng. Mỗi kết quả đóng góp một giá trị dạng `1/(k + rank)`, trong đó `rank` là vị trí của kết quả trong danh sách và `k` là hằng số của công thức. Cách này dùng thứ hạng thay vì cộng các điểm gốc khác thang đo.

Cần giữ mã định danh nhất quán để nhận ra cùng một đoạn xuất hiện ở nhiều danh sách, cộng tín hiệu đúng và tránh lặp kết quả. Sau khi hợp nhất, vẫn phải đo chất lượng trên các câu hỏi đại diện; kết hợp nhiều cách tìm không tự bảo đảm câu trả lời đúng.

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

Bài Bedrock kết hợp các cách tìm kiếm bằng RRF theo thứ hạng, không cộng điểm gốc khác thang đo. Mã rút gọn trên trang mới là khung minh họa, không phải bằng chứng toàn bộ quy trình đã chạy hoàn chỉnh. Dùng chung câu hỏi.

Nguồn đối chiếu: [A multi-search RAG pipeline](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276779). Bản lưu: `sources/bedrock-lessons/276779.json`.

## Đối chiếu Vertex

Bộ tìm kiếm hợp nhất kết quả vectơ và BM25 bằng Reciprocal Rank Fusion. `k_rrf` trong công thức khác với số kết quả lấy ra ở top-k. Cách tạo danh sách bằng list comprehension trong mẫu chạy tuần tự; muốn chạy song song, ứng dụng phải triển khai cơ chế tương ứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [A Multi-index RAG pipeline](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289193). Bản lưu: `sources/vertex-lessons/289193.json`.
