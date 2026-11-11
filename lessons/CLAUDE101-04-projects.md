# Introduction to projects

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383393), sources/claude101-lessons/383393.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Projects là nơi tổ chức các cuộc trò chuyện, tài liệu tham chiếu và hướng dẫn liên quan đến cùng một công việc. Cách này phù hợp khi bạn làm việc lâu dài với một nhóm tài liệu và không muốn cung cấp lại chúng trong mỗi cuộc trò chuyện.

Cần phân biệt ba phần:

- Mô tả dự án (description): giúp người xem hiểu dự án dùng để làm gì. Không nên mặc định phần này thay cho hướng dẫn gửi tới mô hình.
- Tài liệu kiến thức (knowledge): chứa thông tin để Claude tham khảo, chẳng hạn quy trình công ty hoặc hướng dẫn thương hiệu.
- Hướng dẫn dự án (instructions): quy định cách Claude trả lời, chẳng hạn dùng tiếng Việt và trình bày theo một mẫu nhất định.

Ví dụ: Nhóm truyền thông có thể lưu tài liệu thương hiệu vào knowledge, rồi đặt yêu cầu về giọng văn trong instructions. Khi tài liệu thay đổi, cần cập nhật và phân biệt phiên bản để tránh dùng thông tin cũ. Đặt tên tài liệu rõ ràng cũng giúp tìm đúng nguồn. Khi có nhiều dữ liệu, hệ thống có thể tìm phần liên quan thay vì đưa tất cả tài liệu vào cùng lúc.

Khi chia sẻ dự án, cấp quyền theo công việc người nhận cần làm. Người chỉ cần xem hoặc hỏi về tài liệu không nhất thiết cần quyền sửa. Chi tiết quyền và gói dịch vụ cần được kiểm tra khi triển khai.

## Tự kiểm tra

**Question 1 — Choose one.** A Project description says “always use the audit template,” but compliance varies. How should content be organized?

A. Put rules in instructions and source documents in knowledge.

B. Repeat the description in filenames and leave instructions empty.

C. Put the template in an old chat and assume all chats inherit it.

D. Rename the Project after the template as enforcement.

**Question 2 — Choose two.** Knowledge includes two policy versions with different discounts. Which TWO actions reduce version mistakes?

A. Clearly label versions and effective dates.

B. Demand decisive wording that hides conflicts.

C. Keep both unannotated because more documents mean certainty.

D. Update or distinguish superseded documents and inspect answer sources.

**Question 3 — Choose one.** A collaborator only needs Q&A over approved documents. What permission level fits?

A. Share the owner's login.

B. Grant every project permission.

C. Provide viewing and querying access separately from editing.

D. Grant edits to avoid lookup failures.

**Question 4 — Choose two.** A large Project answer misses an exception in a rarely retrieved document. Which TWO statements are appropriate?

A. A longer description forces every page into each turn.

B. Inspect retrieved evidence and supply relevant exception material.

C. Presence in knowledge does not prove all content reached the answer turn.

D. An omitted exception does not exist.

**Question 5 — Choose one.** Brand resources are long-lived, but campaign audiences vary. Which design separates these concerns?

A. Keep shared rules and sources in the Project; specify audiences per request.

B. Rewrite all knowledge for every audience.

C. Put the first audience in the Project name for every campaign.

D. Use one long chat as the only store for all rules and sources.

## Đáp án và giải thích

1. **A.** A tách hướng dẫn khỏi dữ liệu và mô tả. B và D không tạo nơi đặt quy tắc phù hợp; C mặc định chuyển ngữ cảnh giữa các chat.

2. **A, D.** A làm rõ thời điểm áp dụng; D kiểm soát nguồn thực dùng. C tăng nhập nhằng; B che mâu thuẫn thay vì giải quyết nó.

3. **C.** C gắn quyền với công việc. D không có nhu cầu sửa; A làm mất phân biệt danh tính và phạm vi; B suy quyền từ giao diện.

4. **B, C.** C phân biệt lưu trữ và ngữ cảnh sử dụng; B nhắm lỗi truy xuất. A không có cơ sở; D biến sự vắng mặt trong đầu ra thành bằng chứng phủ định.

5. **A.** A phân lớp bối cảnh ổn định và nhiệm vụ. B tạo cập nhật không cần thiết; C cố định thông tin thay đổi theo chiến dịch; D khó phân biệt phiên bản và trạng thái.
