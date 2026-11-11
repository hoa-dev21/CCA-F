# Chọn nhánh chuyên biệt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287801), sources/api-lessons/287801.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Routing là phân loại yêu cầu rồi chuyển tới cách xử lý phù hợp. Mỗi nhóm có thể dùng prompt, công cụ hoặc quy trình khác nhau. Trong mẫu của bài, một yêu cầu đi vào nhánh được chọn, thay vì chạy tất cả các nhánh.

Ví dụ: Câu hỏi về lỗi phần mềm cần quy trình hỗ trợ kỹ thuật; yêu cầu sửa hóa đơn cần quy trình thanh toán. Bước phân loại quyết định chuyển câu hỏi tới đâu.

Cách này có ích khi các nhóm yêu cầu đủ rõ để phân loại đáng tin cậy, và mỗi nhóm được lợi từ cách xử lý chuyên biệt. Nếu mọi yêu cầu cần cùng cách làm, thêm bộ chuyển nhánh có thể không mang lại lợi ích tương xứng.

Khi kết quả sai, cần phân biệt lỗi chọn nhánh với lỗi bên trong nhánh. Quy trình kỹ thuật có thể hoạt động tốt nhưng vẫn trả lời không phù hợp nếu được giao nhầm yêu cầu về hóa đơn. Khi đó, cần xem bước phân loại trước khi sửa quy trình kỹ thuật.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An invoice correction is routed to a software-support branch that handles software issues correctly. What should be fixed first?

A. Make the software branch handle invoices too.

B. The router and classification boundary between categories.

C. Give every branch every tool.

D. Repeat the same route and vote.

**Question 2 — Choose one.** Every request currently uses identical tools, workflow, and rubric. Should a four-label router be added?

A. Yes; classification always improves accuracy.

B. Use four labels with the same handler to demonstrate scalability.

C. Add routing only when specialization offers measurable benefit.

D. Run all labels in parallel and select by confidence.

**Question 3 — Choose two.** A ticket contains both a software defect and a billing dispute, but routing supports only single labels. Which TWO improvements help?

A. Define priority, escalation, or a multi-intent handling path.

B. Choose whichever intent appears first.

C. Add boundary examples and evaluate routing errors separately.

D. Choose a random label to avoid bias.

**Question 4 — Choose one.** Routing is correct, but the specialist retrieves incorrect data. Which evaluation distinguishes the causes?

A. Measure labels only because specialists were tested before.

B. Measure only latency and HTTP success by branch.

C. Use routing confidence to decide whether the answer needs review.

D. Measure router accuracy, branch quality, and end-to-end outcomes separately.

**Question 5 — Choose two.** Which TWO properties should a routing system preserve when each clear request needs one branch?

A. Invoke only the selected branch when others are unnecessary.

B. Invoke every branch to prove routing is active.

C. Give each handler the context and permissions appropriate to its task.

D. Use the same generic prompt regardless of branch needs.

## Đáp án và giải thích

1. **B.** B nhắm lỗi chọn nhánh. A/C làm nhánh chuyên biệt phình ra mà giữ lỗi định tuyến. D lặp xử lý sai loại đầu vào.

2. **C.** C xét lợi ích thực của chuyên biệt hóa. A khẳng định quá mức. B thêm độ phức tạp mà chưa thay hành vi. D tăng công việc không cần cho một quy trình chung.

3. **A, C.** A quy định cách xử lý trường hợp không đơn; C kiểm tra khả năng phân loại. B phụ thuộc cách viết thay vì nhu cầu. D làm hành vi không gắn tiêu chí nghiệp vụ.

4. **D.** D đo từng tầng và toàn hệ để xác định lỗi thực. A không kiểm tra chất lượng nhánh trên dữ liệu hiện tại. B đo vận hành, không đo lấy đúng dữ liệu. C confidence chọn nhánh không chứng minh kết quả bên trong nhánh.

5. **A, C.** A giữ mục tiêu tránh xử lý thừa; C tạo giá trị chuyên biệt. B biến routing thành chạy mọi nhánh. D làm mất khác biệt mà router nhằm khai thác.

## Đối chiếu Vertex

Bộ điều phối phân loại rồi chọn một quy trình chuyên biệt, không chạy mọi nhánh. Gợi ý 3–10 nhóm trong bài là minh họa; cần xử lý đầu vào mơ hồ hoặc không thuộc nhóm nào và đo lỗi phân loại. Cùng chủ đề như lập trình hoặc lướt sóng vẫn có thể chứa nhiều ý định khác nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Routing workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289242). Bản lưu: `sources/vertex-lessons/289242.json`.
