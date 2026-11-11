# A Multi-Index RAG pipeline

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287766), sources/api-lessons/287766.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Tìm kiếm kết hợp (hybrid search) gửi cùng câu hỏi đến nhiều cách tìm kiếm, chẳng hạn tìm theo vectơ và tìm theo từ khóa, rồi hợp nhất kết quả. Một bộ điều phối chung giúp gọi các bộ tìm kiếm qua giao diện nhất quán, thuận tiện khi thay hoặc bổ sung phương pháp.

Không nên cộng trực tiếp các điểm gốc nếu chúng dùng thang đo khác nhau. Ví dụ: điểm BM25 và điểm độ gần vectơ không có cùng ý nghĩa, nên tổng của chúng có thể không phản ánh kết quả tốt hơn.

Bài dùng Reciprocal Rank Fusion (RRF), tức hợp nhất theo thứ hạng. Mỗi kết quả đóng góp một giá trị dạng `1/(k + rank)`, trong đó `rank` là vị trí của kết quả trong danh sách và `k` là hằng số của công thức. Cách này dùng thứ hạng thay vì cộng các điểm gốc khác thang đo.

Cần giữ mã định danh nhất quán để nhận ra cùng một đoạn xuất hiện ở nhiều danh sách, cộng tín hiệu đúng và tránh lặp kết quả. Sau khi hợp nhất, vẫn phải đo chất lượng trên các câu hỏi đại diện; kết hợp nhiều cách tìm không tự bảo đảm câu trả lời đúng.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Adding BM25 scores in the tens directly to cosine scores below one makes BM25 dominate. What is appropriate?

A. Add more decimal places to cosine.

B. Discard semantic search because smaller scores mean weaker quality.

C. Test rank-based reciprocal rank fusion on representative queries.

D. Choose whichever retriever has the largest raw score.

**Question 2 — Choose one.** The same chunk has different IDs in two retrievers, so RRF returns duplicates. What should change?

A. Normalize chunk identities before fusion.

B. Increase the RRF constant to merge duplicates automatically.

C. Delete every result present in both lists.

D. Use rank as a common ID.

**Question 3 — Choose two.** For RRF contributions of `1/(k+rank)`, which TWO statements are correct?

A. The constant k always equals the prompt chunk count.

B. Shared chunks must be recognized to combine contributions.

C. Better ranks contribute more when k is fixed.

D. RRF scores are answer-correctness probabilities.

**Question 4 — Choose one.** A new retriever returns no source IDs. What architectural change is the priority?

A. Use its name as every chunk's ID.

B. Keep it separate and add raw scores afterward.

C. Standardize IDs, content, and rank in the result contract.

D. Have the generation model guess duplicates.

**Question 5 — Choose two.** Hybrid search improves recall but harms some answers. Which TWO checks guide the decision?

A. Evaluate answers by representative query category.

B. Report only average fused-score gains.

C. Accept because two methods always beat one.

D. Check evidence sufficiency, noise, and duplicates after fusion.

## Đáp án và giải thích

1. **C.** A sai: Độ chính xác số không đổi thang đo. B sai: Thang điểm không chứng minh chất lượng thấp. C đúng: Không coi điểm khác thang đo là tương đương. D sai: Độ lớn khác đơn vị không so như xác suất.

2. **A.** A đúng: Nhận ra cùng mục là điều kiện để cộng tín hiệu đúng. B sai: Công thức thứ hạng không xác định danh tính. C sai: Làm mất ứng viên được nhiều nguồn ủng hộ. D sai: Hai mục cùng hạng có thể là hai nội dung khác nhau.

3. **B, C.** A sai: Hằng số làm trơn và số kết quả truy xuất là khái niệm khác. B đúng: Đó là lý do giữ ID nhất quán. C đúng: Mẫu số nhỏ hơn cho đóng góp lớn hơn. D sai: Đây là điểm hợp nhất xếp hạng, không phải độ đúng đã hiệu chỉnh.

4. **C.** A sai: Không phân biệt được các đoạn trong một nguồn. B sai: Vẫn gặp khác thang đo và trùng lặp. C đúng: Cần giao diện nhất quán để hợp nhất có nghĩa. D sai: Đẩy lỗi định danh sang suy đoán không đáng tin.

5. **A, D.** A đúng: Cần đo kết quả nhiệm vụ chứ không chỉ số tìm kiếm. B sai: Điểm nội bộ không trực tiếp đo độ đúng câu trả lời. C sai: Số phương pháp không là bảo đảm chất lượng. D đúng: Recall tăng chưa bảo đảm ngữ cảnh hữu ích.

## Đối chiếu RAG trên Bedrock

Bài Bedrock kết hợp các cách tìm kiếm bằng RRF theo thứ hạng, không cộng điểm gốc khác thang đo. Mã rút gọn trên trang mới là khung minh họa, không phải bằng chứng toàn bộ quy trình đã chạy hoàn chỉnh. Dùng chung câu hỏi.

Nguồn đối chiếu: [A multi-search RAG pipeline](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276779). Bản lưu: `sources/bedrock-lessons/276779.json`.

## Đối chiếu Vertex

Bộ tìm kiếm hợp nhất kết quả vectơ và BM25 bằng Reciprocal Rank Fusion. `k_rrf` trong công thức khác với số kết quả lấy ra ở top-k. Cách tạo danh sách bằng list comprehension trong mẫu chạy tuần tự; muốn chạy song song, ứng dụng phải triển khai cơ chế tương ứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [A Multi-index RAG pipeline](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289193). Bản lưu: `sources/vertex-lessons/289193.json`.
