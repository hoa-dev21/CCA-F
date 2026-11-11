# Xếp lại các ứng viên

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276775), sources/bedrock-lessons/276775.json. Câu hỏi tự biên soạn; chi tiết truy xuất dữ liệu đọc bổ trợ cho Architect.

## Nội dung bài học


Reranking là xếp hạng lại các đoạn đã tìm được. Sau bước tìm kiếm và hợp nhất, bộ xếp hạng đọc câu hỏi cùng các đoạn ứng viên để chọn thứ tự phù hợp hơn.

Ví dụ: Nhiều đoạn chứa cùng mã sự cố, nhưng chỉ một đoạn giải thích nguyên nhân mà người dùng hỏi. Xếp hạng lại có thể đưa đoạn thực sự trả lời câu hỏi lên trên.

Bài gán mã định danh cho mỗi đoạn và yêu cầu trả danh sách mã theo thứ tự. Nhờ đó, mô hình không phải chép lại toàn bộ văn bản. Ứng dụng dùng mã để lấy đúng nội dung và thông tin nguồn gốc. Nếu nhận một mã không có trong tập ứng viên, cần xử lý như kết quả không hợp lệ, không tự tạo nội dung cho mã đó.

Xếp hạng lại thêm thời gian và chi phí. Nó cũng không thể chọn tài liệu đúng nếu tài liệu đó chưa được tìm thấy trong tập đầu vào. Vì vậy, cần kiểm tra cả khả năng tìm đủ tài liệu ở bước đầu và thứ tự sau khi xếp hạng lại.

## Tự kiểm tra

**Question 1 — Choose one.** The causal passage is usually ranked 22nd among 30 candidates, but only five reach generation. What addresses the bottleneck?

A. Rerank the 30 candidates against the question before selecting five.

B. Increase answer length without changing context.

C. Reindex everything before checking ranks.

D. Infer the cause from the incident name.

**Question 2 — Choose two.** A reranker returns IDs 17, 4, and 99 from candidates 1–30. Which TWO safeguards preserve correctness?

A. Check returned IDs belong to the candidate set.

B. Have the model invent passage 99.

C. Fetch document 99 from the entire corpus.

D. Keep mappings to original passages and sources when assembling context.

**Question 3 — Choose one.** For 80 of 100 failures, relevant passages never enter the candidate set. Which first improvement directly targets these failures?

A. Longer reranker explanations.

B. Increase final context within the same irrelevant candidates.

C. Improve initial retrieval and measure candidate recall.

D. Use a stronger reranker on the unchanged set.

**Question 4 — Choose two.** Reranking improves quality but violates latency targets. Which TWO measurements guide deployment?

A. Only reranker duration.

B. Separate missing-candidate failures from ranking failures.

C. Compare end-to-end answer quality and latency with and without reranking.

D. Inspect ranks only on prompt-tuning examples.

**Question 5 — Choose one.** Two passages mention ERR-7; one lists codes, the other explains conditions after configuration changes. What should top-k selection prioritize?

A. Evidence answering the specific configuration-change question.

B. The most ERR-7 repetitions.

C. The shortest passage.

D. The document listing the most error codes.

## Đáp án và giải thích

1. **A.** A xử lý lỗi thứ tự khi bằng chứng đã được tìm thấy. B không đưa thêm bằng chứng vào; C ưu tiên sai tầng chưa có dấu hiệu lỗi; D suy diễn thay cho đoạn nguồn.

2. **A, D.** A phát hiện vi phạm hợp đồng; D bảo toàn bằng chứng. C biến ID ngoài tập thành một kết quả chưa được xếp hạng trong lượt đó; B tạo bằng chứng không tồn tại.

3. **C.** C đưa bằng chứng bị thiếu vào tập. D và A chỉ xử lý ứng viên đã có; B có thể giúp lỗi cắt top-k nhưng không sửa việc đoạn đúng hoàn toàn vắng mặt.

4. **B, C.** C đo đánh đổi người dùng thực sự nhận; B tránh quy lỗi sai tầng. A bỏ qua độ trễ toàn luồng; D vừa thiếu đại diện vừa có nguy cơ đánh giá trên dữ liệu đã tối ưu.

5. **A.** A xét ý định và bằng chứng cần thiết. B có thể chọn danh sách mã; C tối ưu kích thước thay vì liên quan; D ưu tiên độ rộng trong khi câu hỏi cần nguyên nhân cụ thể.

## Đối chiếu Vertex

Sau tìm kiếm kết hợp, bộ xếp hạng lại đọc câu hỏi và các ứng viên, trả mã định danh để giảm đầu ra. Kiểm tra mã thuộc tập đầu vào, số lượng, việc trùng lặp và thứ tự trước khi lấy văn bản. Bộ này không tìm lại được tài liệu đã bị bỏ sót từ đầu. Đo lợi ích thực tế cùng chi phí và thời gian chờ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Reranking results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289192). Bản lưu: `sources/vertex-lessons/289192.json`.
