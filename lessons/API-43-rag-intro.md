# Introducing Retrieval Augmented Generation

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287763), sources/api-lessons/287763.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


RAG là cách tìm những phần tài liệu liên quan rồi đưa vào yêu cầu cho AI để hỗ trợ trả lời. Thay vì gửi toàn bộ kho tài liệu trong mỗi lần hỏi, ứng dụng chọn các đoạn có khả năng chứa thông tin cần thiết.

Có hai giai đoạn: chuẩn bị tài liệu và chia thành các phần có thể tìm kiếm; sau đó, khi có câu hỏi, tìm các phần liên quan và đưa nội dung đó cho mô hình.

Ví dụ: Kho hướng dẫn công ty quá lớn để gửi tất cả. Khi người dùng hỏi về hoàn tiền, hệ thống tìm phần chính sách liên quan rồi gửi cùng câu hỏi. Cần lấy đủ điều kiện và ngoại lệ, vì một đoạn chỉ nói chung về hoàn tiền có thể chưa đủ để trả lời.

RAG giúp giảm nội dung không liên quan và làm việc với kho lớn, nhưng cần thêm công đoạn chuẩn bị và cơ chế tìm kiếm. Hãy đánh giá riêng việc tìm đúng, đủ tài liệu và việc AI trả lời từ tài liệu đó. Nhờ vậy, bạn biết cần sửa khâu tìm kiếm hay khâu tạo câu trả lời.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** RAG retrieves a refund rule but misses its adjacent exception. The model follows the supplied passage and answers incorrectly. What should be fixed first?

A. Insist more strongly on using current context only.

B. Add answer examples without changing retrieval.

C. Check retrieval coverage of applicable rules and exceptions.

D. Lower temperature.

**Question 2 — Choose one.** A small, rarely updated corpus fits in context. How should the team assess RAG versus supplying all documents?

A. Always send everything because RAG helps only public data.

B. Prefer RAG whenever answers are shorter, even if exceptions disappear.

C. Compare only final-prompt tokens.

D. Compare end-to-end quality and costs on representative questions.

**Question 3 — Choose two.** Which TWO checks distinguish retrieval failure from answer-generation failure?

A. Grade answers using a complete, verified evidence set.

B. Collapse all errors into one average.

C. Score only fluency.

D. Compare retrieved passages with the evidence required by each question.

**Question 4 — Choose one.** Documents are indexed, but only the question is sent to the model. What is missing?

A. A prompt saying an internal corpus exists.

B. A model name matching the documents' topic.

C. Rechunking before every question.

D. Query-time retrieval and inclusion of retrieved text in the request.

**Question 5 — Choose two.** Which TWO criteria matter beyond a top result sharing the topic?

A. The final answer is checked against retrieved evidence.

B. Similarity score replaces answer-correctness labels.

C. Every answer includes many passages regardless of relevance.

D. Retrieved text contains relevant applicability conditions and exceptions.

## Đáp án và giải thích

1. **C.** A sai: Nó đã bám sát nguồn nhưng nguồn chưa đầy đủ. B sai: Có thể che ca cụ thể nhưng không sửa khả năng lấy đủ tài liệu. C đúng: Lỗi bắt đầu từ ngữ cảnh thiếu điều kiện. D sai: Không bổ sung ngoại lệ bị bỏ sót.

2. **D.** A sai: Quyền truy cập không quyết định duy nhất phương án truy xuất. B sai: Ngắn hơn không thay tiêu chí đầy đủ. C sai: Bỏ qua lập chỉ mục, tìm kiếm và khả năng mất ngữ cảnh. D đúng: RAG có lợi ích và chi phí phụ thuộc bài toán.

3. **A, D.** A đúng: Cô lập khả năng dùng bằng chứng ở khâu tạo đáp án. B sai: Mất khả năng xác định tầng cần sửa. C sai: Không đo đủ bằng chứng hoặc tính đúng. D đúng: Đo đúng và đủ ở khâu truy xuất.

4. **D.** A sai: Nói có kho không cấp nội dung kho. B sai: Tên cấu hình không huấn luyện hay truyền tài liệu. C sai: Lặp chuẩn bị không thay bước tìm và truyền dữ liệu. D đúng: Chuẩn bị kho không tự đưa thông tin vào ngữ cảnh.

5. **A, D.** A đúng: Tìm đúng vẫn có thể sinh sai. B sai: Điểm tìm kiếm không đo suy luận cuối. C sai: Số đoạn không bảo đảm đủ thông tin cần thiết. D đúng: Liên quan chung chưa đủ trả lời quyết định cụ thể.

## Đối chiếu RAG trên Bedrock

Bài Bedrock cùng so sánh việc tìm phần liên quan với gửi toàn bộ tài liệu cho mô hình. Các kiến thức tương đương dùng chung phần tóm tắt và câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276780). Bản lưu: `sources/bedrock-lessons/276780.json`.

## Đối chiếu Vertex

Ví dụ thay việc gửi tài liệu 800 trang bằng các đoạn tìm được giúp giảm đầu vào, nhưng có thể bỏ sót bối cảnh quan trọng. Không có cách luôn tốt nhất; cần thử trên câu hỏi và tài liệu đại diện. Dùng chung câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289191). Bản lưu: `sources/vertex-lessons/289191.json`.
