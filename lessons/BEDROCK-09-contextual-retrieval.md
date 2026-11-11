# Giữ bối cảnh của đoạn văn bản

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276778), sources/bedrock-lessons/276778.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi tài liệu được chia nhỏ, một đoạn có thể mất thông tin ở phần trước. Ví dụ: đoạn chỉ viết “dự án này”, nhưng tên dự án nằm ngoài phần được lấy. Contextual retrieval bổ sung một lời giới thiệu ngắn dựa trên tài liệu gốc để làm rõ đoạn thuộc bối cảnh nào.

Phần bổ sung được tạo trong giai đoạn chuẩn bị dữ liệu, rồi đưa cùng đoạn văn vào chỉ mục tìm kiếm. Nó có thể làm rõ tên dự án, thời kỳ hoặc phần tài liệu mà đoạn đang nói đến.

Nếu tài liệu quá lớn, mẫu chỉ dùng phần đầu và các đoạn gần trước đó làm bối cảnh. Khi dữ liệu được cung cấp chưa có một sự kiện, mô hình không được tự đoán để viết đủ lời giới thiệu.

Cần giữ riêng văn bản gốc và phần do mô hình bổ sung, tránh trình bày mọi câu như trích nguyên văn. Sau khi thêm bối cảnh, đo lại chất lượng tìm kiếm, tính cả chi phí chuẩn bị và việc cập nhật khi nguồn thay đổi.

Cách này khác reranking: contextual retrieval bổ sung bối cảnh trước khi lập chỉ mục; reranking sắp lại các ứng viên theo câu hỏi sau khi tìm kiếm.

## Tự kiểm tra

**Question 1 — Choose one.** “This project reduced costs by 18%” is retrieved for the wrong project; its name appears at the document's start. What preprocessing helps?

A. Only rerank ambiguous passages at query time.

B. Rename the storage field without updating the index.

C. Infer the project from 18%.

D. Generate grounded contextual text and index it with the passage.

**Question 2 — Choose two.** Generated chunk introductions are quoted as original source text. Which TWO corrections are needed?

A. Keep source links and verify quotations against original text.

B. Store original text separately from generated context.

C. Remove sources because the new text is clearer.

D. Merge generated context into the source under its original date.

**Question 3 — Choose one.** The context generator cannot see evidence identifying a figure's year. What should it do?

A. Use the current year as inferred context.

B. Leave the year unknown and obtain evidence if needed.

C. Use publication year as measurement year.

D. Use the most common year for the project.

**Question 4 — Choose two.** A source changes product names and deployment scope while chunk text barely changes. Which TWO maintenance actions are appropriate?

A. Change generation prompts only.

B. Keep context because the chunk hash is unchanged.

C. Reevaluate retrieval quality and preparation or update costs.

D. Review generated context and update relevant indexes.

**Question 5 — Choose one.** The system needs better retrieval of ambiguous pronouns and query-specific selection among 40 candidates. Which division is correct?

A. Rank every chunk once during ingestion for all future questions.

B. Add context only after selecting three and claim higher recall.

C. Replace originals with generated introductions.

D. Add context during indexing, then rerank candidates after retrieval.

## Đáp án và giải thích

1. **D.** D đưa ngữ cảnh bị mất vào biểu diễn tìm kiếm. A có thể cải thiện thứ tự nhưng không sửa bước lập chỉ mục đã thiếu bối cảnh; B không bảo đảm biểu diễn được cập nhật; C không có bằng chứng nhận diện.

2. **A, B.** B phân biệt xuất xứ; A cho phép kiểm chứng. D đánh đồng nội dung sinh thêm với nguyên văn; C làm mất khả năng đối chiếu dù lời giới thiệu có vẻ đầy đủ.

3. **B.** B giữ giới hạn bằng chứng. C nhầm năm xuất bản với thời kỳ đo; D suy từ tài liệu khác; A dù gắn nhãn vẫn đưa giả định chưa có căn cứ vào chỉ mục.

4. **C, D.** D xét phụ thuộc vào tài liệu ngoài chunk; C kiểm tra lợi ích thực tế. B bỏ qua bối cảnh nguồn đã đổi; A xử lý quá muộn khi truy xuất có thể đã chọn sai tài liệu.

5. **D.** D kết hợp hai tầng phục vụ mục tiêu khác nhau. A thiếu câu hỏi để đánh giá liên quan; B không cứu chunk đã bị loại; C mất chi tiết và bằng chứng gốc.

## Đối chiếu Vertex

Bổ sung đoạn bối cảnh trước khi lập chỉ mục và giữ riêng phần được sinh với nguồn gốc. Chỉ dùng phần đầu và các đoạn lân cận là cách giảm dữ liệu, không bảo đảm đủ bối cảnh. Mã minh họa thiếu f-string và cách dùng `result.text` phải khớp hàm hỗ trợ; không coi đoạn đó là mã đã được chạy kiểm chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Contextual retrieval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289187). Bản lưu: `sources/vertex-lessons/289187.json`.
