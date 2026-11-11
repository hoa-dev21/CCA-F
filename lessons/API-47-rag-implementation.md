# Implementing the RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287761), sources/api-lessons/287761.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Kho vectơ (vector store) cần giữ đoạn văn bản gốc hoặc một tham chiếu để lấy lại đoạn đó. Chỉ có vectơ mà không biết nó thuộc nội dung nào thì ứng dụng không thể đưa đúng tài liệu vào câu hỏi cho mô hình.

Mẫu trong bài thực hiện các bước: chia tài liệu, tạo vectơ, lưu cặp vectơ và nội dung, rồi tìm những kết quả phù hợp nhất. Việc lấy k kết quả đầu thường được gọi là truy vấn top-k.

Chọn k là một quyết định cần thử trên dữ liệu thật. Lấy nhiều đoạn hơn có thể bổ sung bằng chứng, nhưng cũng có thể thêm nội dung gây nhiễu hoặc vượt lượng ngữ cảnh mô hình xử lý được. Không nên mặc định càng nhiều càng tốt.

Ví dụ: Kết quả tìm kiếm trỏ nhầm đoạn văn. Trước khi sửa prompt trả lời, hãy kiểm tra cách chia dữ liệu, tạo vectơ, tìm kiếm và ánh xạ kết quả về nguồn. Đầu vào sai có thể là nguyên nhân khiến câu trả lời sai.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A vector store returns correct IDs, but text lookup uses array positions after sorting. Citations point to wrong passages. What should be fixed first?

A. Use a larger generation model.

B. The mapping from result identifiers to source content.

C. Ask the model to inspect citations more carefully.

D. Increase k in case the correct passage appears too.

**Question 2 — Choose one.** Increasing k helps multi-passage questions but hurts simple ones. How should it be selected?

A. Set k to the corpus page count.

B. Always minimize k because fewer tokens are always more accurate.

C. Always maximize k because more information is better.

D. Evaluate quality, noise, and cost by question category.

**Question 3 — Choose two.** A store contains only vectors and similarity scores. Which TWO elements are still needed for verifiable answers?

A. A verified label inferred from high similarity.

B. A stable relationship between each vector and its source.

C. One reference answer for all nearby vectors.

D. Original text or a reference sufficient to retrieve it.

**Question 4 — Choose one.** An incorrect answer received off-topic passages. What is better than changing only generation prompts?

A. Trace chunks, embeddings, queries, and source mappings.

B. Insert the correct answer to bypass the corpus.

C. Increase output length for self-correction.

D. Score style to choose more trustworthy-sounding prompts.

**Question 5 — Choose two.** Average accuracy rises after changing k. Which TWO checks are needed before deployment?

A. Assume every question improved.

B. Stop evaluating retrieval because answers were scored.

C. Measure context volume, latency, and duplicated content.

D. Inspect degraded categories and missing important conditions.

## Đáp án và giải thích

1. **B.** A sai: Không sửa việc đưa sai văn bản vào ngữ cảnh. B đúng: Đây là lỗi liên kết dữ liệu, không phải suy luận. C sai: Không thể sửa nguồn đã bị tráo ở trước prompt. D sai: Có thể thêm nhiễu và vẫn giữ lỗi ánh xạ.

2. **D.** A sai: Kích thước kho không xác định số đoạn cần cho từng câu. B sai: Có thể thiếu bằng chứng cho câu nhiều điều kiện. C sai: Nội dung thêm có thể gây nhiễu hoặc vượt ngữ cảnh. D đúng: Không có k tối ưu chung chỉ từ một chỉ số.

3. **B, D.** A sai: Điểm tìm kiếm không xác minh sự thật. B đúng: Tránh đưa nhầm đoạn khi tra ngược. C sai: Gần nghĩa chưa chứng minh cùng đáp án. D đúng: Mô hình cần nội dung, không chỉ điểm.

4. **A.** A đúng: Đầu vào sai cần điều tra tầng tạo đầu vào. B sai: Che một ca mà không sửa cơ chế tìm kiếm. C sai: Đầu ra dài không thay dữ liệu liên quan. D sai: Không đo tính đúng bằng chứng.

5. **C, D.** A sai: Không suy ra phân bố lỗi từ trung bình. B sai: Mất khả năng xác định nguyên nhân và điểm yếu. C đúng: Chất lượng phải xét cùng chi phí và giới hạn. D đúng: Trung bình có thể che lỗi theo nhóm.

## Đối chiếu RAG trên Bedrock

Mẫu Bedrock tạo vectơ cho từng đoạn và lưu cùng nội dung. Điểm khoảng cách giúp xếp mức liên quan, không phải xác suất đúng hoặc độ tự tin đã hiệu chỉnh của câu trả lời. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276781). Bản lưu: `sources/bedrock-lessons/276781.json`.

## Đối chiếu Vertex

`VectorIndex` lưu vectơ kèm văn bản hoặc mã nguồn tham chiếu. `generate_embedding` có thể trả danh sách vectơ, nên kiểm tra cấu trúc kết quả cho truy vấn đơn và số phần tử trước khi ghép bằng `zip`, tránh âm thầm bỏ đoạn. Các khoảng cách 0.71 và 0.72 không phải điểm tự tin của đáp án. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing the RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289186). Bản lưu: `sources/vertex-lessons/289186.json`.
