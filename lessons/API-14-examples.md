# Dạy bằng ví dụ đầu vào và đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287746), sources/api-lessons/287746.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bạn có thể đưa ví dụ vào prompt để Claude hiểu rõ kết quả mong muốn. Dùng một ví dụ gọi là one-shot; dùng nhiều ví dụ gọi là multi-shot. Mỗi ví dụ nên phân biệt rõ đầu vào mẫu và đầu ra đạt yêu cầu.

Ví dụ đặc biệt hữu ích khi định dạng phức tạp, giọng văn khó mô tả hoặc dữ liệu có nhiều cách hiểu. Có thể dùng các thẻ XML để tách đầu vào và đầu ra, kèm lời giải thích ngắn về điểm cần học từ mẫu.

Trong bài, hệ thống phân loại sai câu châm biếm: câu dùng từ tích cực nhưng thực chất thể hiện thái độ tiêu cực. Một ví dụ châm biếm có nhãn đúng giúp làm rõ trường hợp này hơn việc thêm nhiều câu khen đơn giản.

Hãy chọn ví dụ dựa trên lỗi thường gặp. Nếu ứng dụng hay tự đoán ngày khi tài liệu không có ngày, hãy đưa một mẫu thiếu ngày cùng đầu ra xử lý đúng theo quy định. Khi có nhiều kiểu lỗi, dùng các mẫu phù hợp với từng kiểu thay vì lặp lại một mẫu dễ.

## Tự kiểm tra

**Question 1 — Choose one.** A sentiment classifier labels “Great, lost my data again” positive. Current examples contain only sincere praise. What should be added?

A. Make all labels neutral.

B. Correctly labeled sarcastic examples explaining intent.

C. More sincere praise examples.

D. Only a longer definition of “great.”

**Question 2 — Choose two.** Which TWO properties make extraction few-shot examples useful for generalization?

A. An unexplained output contradicting the instructions.

B. Clearly separated example inputs and target outputs.

C. Coverage of confusing cases and realistic formats.

D. Many near-duplicates of one easy case.

**Question 3 — Choose one.** A JSON-only prompt includes examples with explanations outside JSON. The model copies that style. What is the direct fix?

A. Add more explanatory examples.

B. Make examples obey the JSON-only contract and reevaluate.

C. Accept any output containing a JSON fragment.

D. Add “very important” without fixing examples.

**Question 4 — Choose two.** Scores improve on examples added to the prompt. Which TWO checks measure practical benefit?

A. Evaluate new cases of the same type that are absent from the prompt.

B. Grade only the prompt examples.

C. Remove cases unlike the examples.

D. Check previous categories for regressions.

**Question 5 — Choose one.** Two confusing labels distinguish direct complaints from sarcasm. There is room for two examples. Which pair is best?

A. Similar wording with different intent, clear labels, and explanations.

B. Two short positive sentences.

C. Two already-correct cases repeated.

D. Two unrelated sentences outside the confusion area.

## Đáp án và giải thích

1. **B.** B minh họa đúng ranh giới đang thiếu. C tăng mẫu không liên quan lỗi; D không dạy cách hiểu ngữ cảnh châm biếm; A làm lệch nhãn thay vì phân biệt.

2. **B, C.** B làm rõ phép ánh xạ; C thể hiện ranh giới quyết định. D tăng số lượng nhưng ít thông tin mới; A tạo tín hiệu không nhất quán.

3. **B.** B sửa tín hiệu mẫu đang xung đột. D giữ nguồn mâu thuẫn; C đổi yêu cầu sản phẩm để hợp lỗi; A củng cố hành vi sai.

4. **A, D.** A kiểm tra khả năng áp dụng; D kiểm tra đánh đổi. B dễ đo ghi nhớ; C thu hẹp mục tiêu không có căn cứ.

5. **A.** A làm nổi bật ranh giới quyết định. B tiết kiệm nhưng không nhắm lỗi; D khó cho thấy yếu tố phân biệt; C lặp tín hiệu đã có.

## Đối chiếu Bedrock: Providing examples

Bài Bedrock cũng dùng ví dụ châm biếm và cách chọn một vài mẫu từ kết quả đánh giá. Ví dụ tốt trong prompt vẫn cần được kiểm tra trên trường hợp mới. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276747). Bản lưu: `sources/bedrock-lessons/276747.json`.

## Đối chiếu Vertex

Cặp đầu vào và đầu ra mẫu giúp làm rõ định dạng và trường hợp khó như châm biếm. Chọn mẫu đã kiểm tra để phát triển prompt và giữ tập kiểm thử riêng. Điểm 10 do mô hình chấm chưa chứng minh mẫu hoàn hảo. Không đưa chính câu kiểm thử vào prompt rồi coi điểm đạt được là bằng chứng làm tốt với dữ liệu mới. Dùng chung câu hỏi.

Nguồn đối chiếu: [Providing examples](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289177). Bản lưu: `sources/vertex-lessons/289177.json`.
