# Nêu tiêu chí và bước xử lý

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287740), sources/api-lessons/287740.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một yêu cầu cụ thể có thể làm rõ hai điều khác nhau:

- Kết quả cần có: độ dài, cấu trúc, nội dung bắt buộc và giọng văn.
- Cách thực hiện: những bước cần xem xét để đi đến kết quả.

Ví dụ: Nếu chỉ yêu cầu “Phân tích vì sao doanh số giảm”, AI có thể chỉ xét một nguyên nhân. Bạn có thể yêu cầu xem lần lượt tình hình thị trường, thay đổi nội bộ và phản hồi khách hàng. Đây là hướng dẫn về cách thực hiện.

Sau đó, yêu cầu “Trình bày bảng gồm giả thuyết, bằng chứng và thông tin còn thiếu”. Đây là mô tả kết quả cần có. Hai loại hướng dẫn bổ sung cho nhau: một loại giúp tránh bỏ sót khi phân tích, loại còn lại giúp bạn kiểm tra báo cáo cuối.

Không phải nhiệm vụ nào cũng cần hướng dẫn dài. Với việc đơn giản, chỉ cần nêu rõ kết quả. Với vấn đề nhiều yếu tố, các bước khảo sát có thể hữu ích. “Viết báo cáo chất lượng cao” là mong muốn chung; “mỗi kết luận phải có bằng chứng và nêu hạn chế” là tiêu chí cụ thể hơn.

## Tự kiểm tra

**Question 1 — Choose one.** Sales analysis considers market changes but ignores internal changes, despite a detailed table format. Which revision addresses the gap?

A. Use a more critical tone without specifying causal scope.

B. Examine market factors, internal changes, and customer feedback separately.

C. Add impact and priority columns without changing analytical scope.

D. Require more rows.

**Question 2 — Choose two.** Which TWO instructions specify deliverable characteristics rather than processing steps?

A. Limit the executive conclusion to three bullet points.

B. Compare monthly figures before identifying trends.

C. Examine internal changes before excluding operational causes.

D. Return a table of hypotheses, evidence, and limitations.

**Question 3 — Choose one.** “Write a great and complete answer” leads reviewers to disagree. What provides consistent scoring criteria?

A. Replace reviewers with model self-scores.

B. Use the longest answer as the quality standard.

C. Specify required content, structure, and evidence limits.

D. Add adjectives such as excellent and professional.

**Question 4 — Choose two.** Which TWO checks detect analysis that follows the table format but omits required reasoning?

A. Check only the column count.

B. Verify that evidence supports each hypothesis.

C. Check only formal tone.

D. Verify that every required cause category was considered.

**Question 5 — Choose one.** A fixed workflow requires choosing the main cause, but evidence conflicts. What is a better specification?

A. Add a stronger conclusion after the table.

B. Force one final cause.

C. Allow hypotheses and explicit missing-data statements.

D. Discard conflicting evidence for consistency.

## Đáp án và giải thích

1. **B.** B bổ sung cách xem xét vấn đề. C bổ sung cột nhưng chưa mở rộng phạm vi nguyên nhân; D tăng lượng không bảo đảm nhóm nguyên nhân; A vẫn thiếu phạm vi cụ thể.

2. **A, D.** D và A mô tả cấu trúc, độ dài và người đọc. B và C mô tả cách tiến hành phân tích, không phải đặc tính trực tiếp của đầu ra.

3. **C.** C chuyển mong muốn chủ quan thành tiêu chí. D vẫn mơ hồ; A không giải quyết thiếu rubric; B nhầm độ dài với đủ và đúng.

4. **B, D.** D đo độ bao phủ phân tích, B đo quan hệ kết luận–bằng chứng. A và C chỉ đo hình thức nên có thể cho qua phân tích rỗng.

5. **C.** C làm quy trình phù hợp điều kiện dữ liệu. B ép quyết định quá mức; D loại bằng chứng bất lợi; A tăng mức khẳng định nhưng không giải quyết mâu thuẫn.

## Đối chiếu Bedrock: Being specific

Bài Bedrock cũng tách tiêu chí của kết quả khỏi các bước thực hiện. Điểm số minh họa cho từng cách không phải kết quả có thể áp dụng chung. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276745). Bản lưu: `sources/bedrock-lessons/276745.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt yêu cầu về đầu ra với hướng dẫn cách xử lý. Điều kiện về lượng, định dạng và nội dung cần kiểm tra được. Yêu cầu cân nhắc trước khi trả lời không đồng nghĩa yêu cầu hiển thị toàn bộ suy nghĩ bên trong. Các điểm 3.92 và 7.86 chỉ là minh họa; dùng chung câu hỏi.

Nguồn đối chiếu: [Being specific](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289165). Bản lưu: `sources/vertex-lessons/289165.json`.
