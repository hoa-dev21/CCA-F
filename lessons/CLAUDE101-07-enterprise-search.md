# Enterprise search

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383398), sources/claude101-lessons/383398.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Enterprise Search là tính năng tìm kiếm và tổng hợp thông tin nội bộ từ những nguồn tổ chức đã kết nối. Nó hữu ích khi tài liệu và trao đổi về một việc nằm rải rác ở nhiều nơi.

Ví dụ: Bạn muốn biết vì sao nhóm đổi lịch ra mắt sản phẩm. Thông tin có thể nằm trong tài liệu dự án và các cuộc trao đổi nội bộ. Tìm kiếm trên các nguồn được kết nối giúp tập hợp những bằng chứng liên quan.

Bài học mô tả hai phần thiết lập: quản trị viên cấu hình nguồn và tính năng cho tổ chức; người dùng đăng nhập hoặc xác thực với dịch vụ theo quyền của mình. Việc quản trị viên đã thêm nguồn không có nghĩa mọi người đều được xem mọi tài liệu trong nguồn đó.

Khi nhận câu trả lời, hãy mở các trích dẫn để kiểm tra nội dung gốc, bối cảnh, phiên bản và thời điểm. Có trích dẫn giúp bạn kiểm chứng dễ hơn, nhưng không bảo đảm mọi kết luận của AI đều đúng. Khả năng cung cấp tính năng, cách thiết lập và cách lưu trữ dữ liệu cần được kiểm tra lại khi triển khai.

## Tự kiểm tra

**Câu 1 — Chọn một.** Quản trị viên đã thêm nguồn nội bộ, nhưng một nhân viên không đọc được tài liệu của nhóm khác. Bước xử lý phù hợp nhất?

A. Đổi câu hỏi để tránh nhắc tên nhóm sở hữu tài liệu.

B. Kiểm tra danh tính và quyền người dùng tại dịch vụ nguồn.

C. Cấp quyền quản trị toàn tổ chức vì connector đã có dữ liệu.

D. Yêu cầu AI dùng kiến thức của quản trị viên thay cho quyền người hỏi.

**Câu 2 — Chọn hai.** Câu trả lời về ngày ra mắt có ba trích dẫn nhưng chúng đều là kế hoạch cũ. Hai bước nào cần trước khi gửi báo cáo?

A. Giữ kết luận vì có nhiều trích dẫn nên đã đủ đáng tin.

B. Chọn ngày xuất hiện nhiều nhất trong ba trích dẫn làm ngày cuối cùng.

C. Tìm hoặc xác nhận quyết định mới hơn và điều chỉnh kết luận theo bằng chứng.

D. Mở nguồn để kiểm tra thời điểm, phiên bản và bối cảnh từng trích dẫn.

**Câu 3 — Chọn một.** Thông tin đổi lịch nằm trong tài liệu dự án và luồng trao đổi đã kết nối. Nhiệm vụ là giải thích lý do nội bộ. Lựa chọn nào phù hợp nhất?

A. Chỉ tìm web công khai vì thông tin ở đó dễ trích dẫn hơn.

B. Dùng suy luận từ thông lệ ngành thay cho tìm cuộc trao đổi.

C. Chỉ đọc tiêu đề tài liệu rồi suy ra động cơ của nhóm dự án.

D. Tìm nguồn nội bộ được phép, gắn nhận định với bằng chứng.

**Câu 4 — Chọn hai.** Nguồn nói “đang cân nhắc hoãn”, AI kết luận “đã quyết định hoãn”. Hai điều cần kiểm tra trong bước duyệt?

A. Có bằng chứng bổ sung về quyết định cuối thay vì chỉ cuộc thảo luận không.

B. Mức chắc chắn và trạng thái quyết định có khớp nội dung nguồn không.

C. Chỉ kiểm tra ngày câu trả lời được tạo vì ngày đó mới hơn nguồn.

D. Chỉ kiểm tra liên kết có mở được, vì đó là tiêu chí đủ cho trích dẫn.

**Câu 5 — Chọn một.** Hai nhân viên nhận kết quả tìm kiếm khác nhau cho cùng câu hỏi. Thiết kế điều tra nào tránh kết luận vội rằng mô hình không ổn định?

A. Ép cùng văn phong để loại khác biệt trong nguồn dữ liệu.

B. Đối chiếu danh tính, quyền, kết nối và phiên bản tài liệu.

C. Chỉ tăng nhiệt độ sinh để hai đầu ra có cơ hội giống nhau.

D. Sao chép token của người thấy nhiều tài liệu cho người còn lại.

## Đáp án và giải thích

1. **B.** B kiểm tra đúng hai lớp thiết lập. C vượt nhu cầu; D giả định chia sẻ danh tính/quyền; A thay câu chữ không giải quyết kiểm soát truy cập.

2. **C, D.** D đánh giá nguồn thực; C xử lý thay đổi theo thời gian. B bỏ qua hiệu lực; A số lượng trích dẫn không xác nhận tính hiện hành.

3. **D.** D truy cập đúng nơi có bằng chứng. A có thể thiếu quyết định nội bộ; B và C thay dữ liệu cụ thể bằng suy đoán.

4. **A, B.** B phát hiện suy diễn quá mức; A tìm căn cứ cần thiết. D xác minh truy cập chứ không xác minh claim; C ngày tạo câu trả lời không làm nguồn thành quyết định mới.

5. **B.** B kiểm tra đầu vào và phạm vi dữ liệu. C không giải quyết quyền; D bỏ ranh giới truy cập; A đồng nhất hình thức mà không đồng nhất bằng chứng.
