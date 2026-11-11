# Implementing the RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287761), sources/api-lessons/287761.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Kho vectơ (vector store) cần giữ đoạn văn bản gốc hoặc một tham chiếu để lấy lại đoạn đó. Chỉ có vectơ mà không biết nó thuộc nội dung nào thì ứng dụng không thể đưa đúng tài liệu vào câu hỏi cho mô hình.

Mẫu trong bài thực hiện các bước: chia tài liệu, tạo vectơ, lưu cặp vectơ và nội dung, rồi tìm những kết quả phù hợp nhất. Việc lấy k kết quả đầu thường được gọi là truy vấn top-k.

Chọn k là một quyết định cần thử trên dữ liệu thật. Lấy nhiều đoạn hơn có thể bổ sung bằng chứng, nhưng cũng có thể thêm nội dung gây nhiễu hoặc vượt lượng ngữ cảnh mô hình xử lý được. Không nên mặc định càng nhiều càng tốt.

Ví dụ: Kết quả tìm kiếm trỏ nhầm đoạn văn. Trước khi sửa prompt trả lời, hãy kiểm tra cách chia dữ liệu, tạo vectơ, tìm kiếm và ánh xạ kết quả về nguồn. Đầu vào sai có thể là nguyên nhân khiến câu trả lời sai.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Vector store trả ID đúng nhưng lookup văn bản dùng chỉ số mảng sau khi sắp xếp lại. Câu trả lời dẫn nhầm đoạn. Sửa ở đâu trước?

A. Đổi mô hình sinh sang loại lớn hơn.

B. Ánh xạ định danh kết quả về đúng nội dung nguồn.

C. Thêm chỉ dẫn mô hình kiểm tra kỹ trích dẫn.

D. Tăng k để hy vọng đoạn đúng cũng xuất hiện.

**Câu 2 — Chọn một.** Tăng k từ nhỏ lên lớn cải thiện câu hỏi cần nhiều đoạn nhưng làm sai các câu đơn giản. Cách chọn k phù hợp nhất?

A. Chọn k bằng số trang của toàn bộ kho.

B. Giữ k nhỏ nhất vì ít token luôn chính xác hơn.

C. Giữ k lớn nhất vì chứa nhiều thông tin nhất.

D. Chọn k theo chất lượng, nhiễu và chi phí từng nhóm hỏi.

**Câu 3 — Chọn hai.** Một vector store chỉ lưu vectơ và điểm tương đồng. Hai thành phần nào còn cần để trả lời có thể kiểm tra?

A. Một nhãn “đã xác minh” dựa trên điểm tương đồng cao.

B. Mối liên hệ ổn định giữa từng vectơ và nguồn của nó.

C. Câu trả lời mẫu duy nhất dùng cho mọi vectơ gần nhau.

D. Văn bản gốc hoặc tham chiếu đủ để lấy lại văn bản.

**Câu 4 — Chọn một.** Câu trả lời sai và đoạn đầu vào cũng sai chủ đề. Nhóm định chỉ sửa prompt sinh. Bước hợp lý hơn là gì?

A. Truy vết chunk, embedding, truy vấn và ánh xạ nguồn.

B. Đưa câu trả lời đúng vào prompt để bỏ qua kho dữ liệu.

C. Tăng giới hạn đầu ra để mô hình có thêm cơ hội tự sửa.

D. Chấm riêng văn phong để chọn prompt nghe đáng tin hơn.

**Câu 5 — Chọn hai.** Sau đổi k, nhóm báo độ chính xác trung bình tăng. Hai kiểm tra nào cần trước triển khai?

A. Coi cải thiện trung bình là bằng chứng mọi câu hỏi đều tốt hơn.

B. Bỏ đánh giá truy xuất vì đã đo câu trả lời cuối.

C. Đo ngữ cảnh, độ trễ và lượng nội dung trùng được đưa vào.

D. Kiểm tra nhóm câu hỏi bị giảm chất lượng hoặc thiếu điều kiện quan trọng.

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
