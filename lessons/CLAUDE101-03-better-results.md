# Getting better results

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383392), sources/claude101-lessons/383392.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Khi câu trả lời chưa đạt, hãy xác định cụ thể vấn đề trước khi sửa yêu cầu:

- Quá chung chung: bổ sung tình huống, người đọc và mục tiêu.
- Quá dài: nêu độ dài hoặc số ý cần có.
- Sai định dạng: đưa cấu trúc mong muốn và một ví dụ.
- Có thông tin đáng ngờ: đối chiếu với nguồn phù hợp trước khi sử dụng.

Ví dụ: Claude viết lời tư vấn chưa sát khách hàng. Bạn cần bổ sung khách hàng đang gặp vấn đề gì và muốn đạt kết quả nào. Chỉ yêu cầu “hãy viết tốt hơn” không cho Claude biết thông tin còn thiếu.

Với công việc lặp lại, hãy chọn một số ví dụ thật, đặt tiêu chí đánh giá, thử yêu cầu rồi sửa theo lỗi quan sát được. Một vài lần thử thành công giúp bạn làm quen và cải tiến, nhưng chưa đủ để kết luận hệ thống sẽ làm tốt trong mọi tình huống thực tế.

Nếu số liệu đã đúng nhưng kết luận thiếu ý, hãy chỉ ra ý cần phân tích thêm. Viết dài hơn hoặc trả lời tự tin hơn không tự làm kết quả chính xác hơn.

## Tự kiểm tra

**Question 1 — Choose one.** A professional email recommends products above the customer's budget. What should the prompt add first?

A. More salesperson confidence.

B. Customer needs, budget, and selection criteria.

C. Branded greetings and signatures.

D. A shorter word limit.

**Question 2 — Choose two.** Which TWO practices support reliable improvement of weekly report generation?

A. Compare confident wording instead of data.

B. Use only previously fixed examples.

C. Record observed errors, revise instructions, and retest with the same criteria.

D. Define clear criteria and test varied real examples.

**Question 3 — Choose one.** JSON uses wrong field names and consumers reject it. Which prompt change is most direct?

A. Add subject background.

B. Request shorter responses.

C. Say “think carefully” without specifying the contract.

D. Specify field structure and a valid example.

**Question 4 — Choose two.** Correct figures lead to a conclusion ignoring operating costs. Which TWO feedback choices help?

A. Provide cost sources and require explicit missing-data statements.

B. Identify the omitted factor and request analysis of its impact.

C. Keep the conclusion and sound more certain.

D. Add three arbitrary paragraphs.

**Question 5 — Choose one.** A new prompt passes five author-selected demos. Can output checking stop?

A. Repeat one easy example instead of testing other inputs.

B. This is promising, but representative and difficult cases remain necessary.

C. Five successes prove every same-topic input works.

D. Use model self-confidence as the only release criterion.

## Đáp án và giải thích

1. **B.** B xử lý thông tin quyết định còn thiếu. C và D chỉ đổi hình thức; A có thể làm đề xuất sai nghe thuyết phục hơn.

2. **C, D.** D tạo tập đánh giá liên quan; C nối thay đổi với kết quả. B thiên lệch về dữ liệu đã tối ưu; A đo phong cách thay vì chất lượng.

3. **D.** D làm rõ yêu cầu cấu trúc. A sửa sai tầng; B không xác định tên trường; C không thay thế hợp đồng định dạng.

4. **A, B.** B sửa thiếu sót lập luận; A bổ sung căn cứ. D tăng dung lượng không bảo đảm đúng trọng tâm; C khóa kết luận trước khi xem bằng chứng bổ sung.

5. **B.** B giới hạn kết luận theo bằng chứng. C khái quát quá mức; D chưa có hiệu chỉnh; A kiểm tra lặp lại một dạng không đo độ bao phủ.
