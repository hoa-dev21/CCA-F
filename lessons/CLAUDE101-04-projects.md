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

**Câu 1 — Chọn một.** Nhóm đặt “luôn trả lời theo mẫu kiểm toán” trong description của Project nhưng kết quả không ổn định. Cách tổ chức nào phù hợp nhất?

A. Đặt quy tắc ở instructions, tài liệu nguồn ở knowledge.

B. Nhân bản description vào tên mọi tài liệu rồi giữ instructions trống.

C. Đưa mẫu vào một cuộc chat cũ và coi mọi chat khác sẽ tự dùng.

D. Đổi tiêu đề Project thành tên mẫu kiểm toán để tạo quy tắc bắt buộc.

**Câu 2 — Chọn hai.** Knowledge chứa hai bản chính sách có mức ưu đãi khác nhau. Hai việc nào giảm nguy cơ dùng nhầm phiên bản?

A. Gắn phiên bản, thời điểm hiệu lực và tên tài liệu rõ ràng.

B. Yêu cầu giọng văn dứt khoát để mô hình chọn một bản và không báo mâu thuẫn.

C. Giữ cả hai không chú thích vì nhiều tài liệu làm kết luận chắc hơn.

D. Cập nhật hoặc phân định tài liệu thay thế, kiểm tra nguồn được dùng trong câu trả lời.

**Câu 3 — Chọn một.** Cộng tác viên chỉ cần hỏi đáp trên bộ tài liệu đã duyệt. Phương án quyền nào khớp nhu cầu?

A. Chia sẻ thông tin đăng nhập của chủ dự án để có cùng trải nghiệm.

B. Cấp toàn bộ quyền dự án vì việc đọc và sửa dùng chung giao diện.

C. Cấp quyền xem/hỏi theo nhu cầu, tách khỏi quyền sửa.

D. Cấp quyền chỉnh sửa để giảm khả năng gặp lỗi khi tra cứu.

**Câu 4 — Chọn hai.** Project có hàng nghìn trang. Một câu trả lời bỏ sót ngoại lệ nằm trong tài liệu ít được truy xuất. Hai nhận định nào phù hợp?

A. Tăng độ dài description sẽ buộc đọc mọi trang trong mỗi lượt.

B. Cần kiểm tra phần nguồn được lấy và bổ sung tài liệu liên quan tới ngoại lệ.

C. Có tài liệu trong knowledge chưa chứng minh toàn bộ nội dung đã có trong lượt trả lời.

D. Có thể coi ngoại lệ không tồn tại nếu không xuất hiện trong câu trả lời đầu.

**Câu 5 — Chọn một.** Nhóm thương hiệu cần dùng chung tài liệu dài hạn nhưng mỗi chiến dịch có đối tượng khác nhau. Thiết kế nào tránh trộn dữ liệu ổn định với yêu cầu từng lần?

A. Giữ quy tắc/nguồn chung ở Project; nêu đối tượng ở yêu cầu mới.

B. Sửa toàn bộ knowledge mỗi khi thay đối tượng chiến dịch.

C. Ghi đối tượng đầu tiên vào tên Project và dùng cho mọi chiến dịch.

D. Chỉ giữ lịch sử một chat dài làm nơi duy nhất cho mọi tài liệu và quy tắc.

## Đáp án và giải thích

1. **A.** A tách hướng dẫn khỏi dữ liệu và mô tả. B và D không tạo nơi đặt quy tắc phù hợp; C mặc định chuyển ngữ cảnh giữa các chat.

2. **A, D.** A làm rõ thời điểm áp dụng; D kiểm soát nguồn thực dùng. C tăng nhập nhằng; B che mâu thuẫn thay vì giải quyết nó.

3. **C.** C gắn quyền với công việc. D không có nhu cầu sửa; A làm mất phân biệt danh tính và phạm vi; B suy quyền từ giao diện.

4. **B, C.** C phân biệt lưu trữ và ngữ cảnh sử dụng; B nhắm lỗi truy xuất. A không có cơ sở; D biến sự vắng mặt trong đầu ra thành bằng chứng phủ định.

5. **A.** A phân lớp bối cảnh ổn định và nhiệm vụ. B tạo cập nhật không cần thiết; C cố định thông tin thay đổi theo chiến dịch; D khó phân biệt phiên bản và trạng thái.
