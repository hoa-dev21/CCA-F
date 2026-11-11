# Enterprise search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383398), sources/claude101-lessons/383398.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Enterprise Search là tính năng tìm kiếm và tổng hợp thông tin nội bộ từ những nguồn tổ chức đã kết nối. Nó hữu ích khi tài liệu và trao đổi về một việc nằm rải rác ở nhiều nơi.

Ví dụ: Bạn muốn biết vì sao nhóm đổi lịch ra mắt sản phẩm. Thông tin có thể nằm trong tài liệu dự án và các cuộc trao đổi nội bộ. Tìm kiếm trên các nguồn được kết nối giúp tập hợp những bằng chứng liên quan.

Bài học mô tả hai phần thiết lập: quản trị viên cấu hình nguồn và tính năng cho tổ chức; người dùng đăng nhập hoặc xác thực với dịch vụ theo quyền của mình. Việc quản trị viên đã thêm nguồn không có nghĩa mọi người đều được xem mọi tài liệu trong nguồn đó.

Khi nhận câu trả lời, hãy mở các trích dẫn để kiểm tra nội dung gốc, bối cảnh, phiên bản và thời điểm. Có trích dẫn giúp bạn kiểm chứng dễ hơn, nhưng không bảo đảm mọi kết luận của AI đều đúng. Khả năng cung cấp tính năng, cách thiết lập và cách lưu trữ dữ liệu cần được kiểm tra lại khi triển khai.

## Tự kiểm tra

**Question 1 — Choose one.** An employee cannot read another team's documents despite an installed connector. What should happen first?

A. Avoid the owning team's name in the question.

B. Check the user's identity and source-system permissions.

C. Grant organization-wide administrator access.

D. Use the administrator's knowledge instead of user rights.

**Question 2 — Choose two.** Three launch-date citations all refer to old plans. Which TWO checks precede reporting?

A. Accept because multiple citations are sufficient.

B. Use the most repeated date.

C. Find or confirm newer decisions and revise the conclusion.

D. Open sources to inspect dates, versions, and context.

**Question 3 — Choose one.** Schedule-change reasons exist in connected internal documents and discussions. What approach fits?

A. Search only public websites.

B. Infer reasons from industry practice.

C. Infer motives from document titles.

D. Search authorized internal sources and link claims to evidence.

**Question 4 — Choose two.** A source says “considering a delay,” but the answer says “delay decided.” Which TWO checks are needed?

A. Look for additional evidence of a final decision.

B. Match certainty and decision status to source content.

C. Only compare answer date with source date.

D. Only check that links open.

**Question 5 — Choose one.** Two employees get different search results. What should be checked before blaming model instability?

A. Force identical style.

B. Compare identity, permissions, connections, and document versions.

C. Raise temperature so outputs might match.

D. Copy the higher-access user's token.

## Đáp án và giải thích

1. **B.** B kiểm tra đúng hai lớp thiết lập. C vượt nhu cầu; D giả định chia sẻ danh tính/quyền; A thay câu chữ không giải quyết kiểm soát truy cập.

2. **C, D.** D đánh giá nguồn thực; C xử lý thay đổi theo thời gian. B bỏ qua hiệu lực; A số lượng trích dẫn không xác nhận tính hiện hành.

3. **D.** D truy cập đúng nơi có bằng chứng. A có thể thiếu quyết định nội bộ; B và C thay dữ liệu cụ thể bằng suy đoán.

4. **A, B.** B phát hiện suy diễn quá mức; A tìm căn cứ cần thiết. D xác minh truy cập chứ không xác minh claim; C ngày tạo câu trả lời không làm nguồn thành quyết định mới.

5. **B.** B kiểm tra đầu vào và phạm vi dữ liệu. C không giải quyết quyền; D bỏ ranh giới truy cập; A đồng nhất hình thức mà không đồng nhất bằng chứng.
