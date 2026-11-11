# Đánh đổi giữa dự đoán và linh hoạt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287794), sources/api-lessons/287794.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Workflow và agent có điểm mạnh, hạn chế khác nhau. Lựa chọn nên dựa trên nhiệm vụ và kết quả đánh giá, không chỉ dựa vào tên công nghệ.

Workflow quy định các bước từ trước. Bạn dễ kiểm thử từng bước và theo dõi dữ liệu, nhưng khó xử lý yêu cầu nằm ngoài những đường đã thiết kế.

Agent cho mô hình chọn hướng giải quyết từ mục tiêu và công cụ được cấp. Cách này hữu ích khi cần đổi hướng theo phát hiện mới hoặc hỏi thêm dữ liệu. Đổi lại, nhiều chuỗi hành động có thể xảy ra, khiến việc dự đoán, đánh giá và tìm lỗi khó hơn.

Ví dụ: Trích xuất dữ liệu theo cấu trúc cố định có thể dùng workflow với kiểm tra ở từng bước. Điều tra một sự cố chưa rõ nguyên nhân có thể cần agent khảo sát và chọn bước tiếp theo. Một ứng dụng có thể dùng cả hai cho những phần việc khác nhau.

Hãy bắt đầu bằng cách giải quyết đủ tin cậy cho bài toán và thêm quyền tự chủ khi có nhu cầu rõ. Không thể kết luận mọi workflow tốt hơn agent, hoặc ngược lại, nếu chưa xét yêu cầu và dữ liệu cụ thể.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** 90% yêu cầu là trích xuất biểu mẫu cố định; 10% cần điều tra tài liệu thiếu. Nhóm ưu tiên dễ kiểm thử và chỉ cần tự chủ ở ngoại lệ. Kiến trúc nào phù hợp nhất?

A. Workflow cho luồng chuẩn; agent giới hạn cho phần điều tra.

B. Workflow cố định cho cả ngoại lệ bằng cách bỏ các trường chưa biết.

C. Agent tự chọn toàn bộ bước cho cả hai nhóm để thống nhất kiến trúc.

D. Hai agent độc lập xử lý mọi biểu mẫu rồi bỏ phiếu kết quả.

**Câu 2 — Chọn một.** Agent điều tra sự cố phát hiện một phụ thuộc không có trong kế hoạch ban đầu. Điều gì biện minh việc chọn agent thay workflow cố định trong tình huống này?

A. Đường điều tra phải thay đổi theo bằng chứng mới để đạt mục tiêu.

B. Agent thường tạo lời giải thích dài nên dễ chứng minh chất lượng hơn.

C. Số công cụ lớn tự nó đòi hỏi mọi bước do mô hình quyết định.

D. Tự chủ cho phép bỏ kiểm tra ở các bước trung gian đã chọn.

**Câu 3 — Chọn hai.** Một workflow ổn định đạt tiêu chí nhưng nhóm muốn chuyển sang agent. Hai bằng chứng nào nên có trước khi mở rộng quyền tự chủ?

A. Một demo agent giải đúng ca mà workflow đã giải đúng.

B. Tên mô hình mới được quảng bá có khả năng lập kế hoạch tốt.

C. Các ca thất bại thực tế đòi hỏi chọn đường xử lý chưa thể mô tả đủ trong workflow.

D. Đánh giá đại diện so sánh chất lượng, độ trễ và lỗi của phương án mới.

**Câu 4 — Chọn một.** Hai thiết kế có cùng tỷ lệ thành công cuối, nhưng agent đôi lúc gọi nhiều chuỗi công cụ khác nhau. Để chẩn đoán lỗi, cần mở rộng đánh giá nào?

A. Giữ một đường chạy thành công làm chuẩn cho mọi yêu cầu.

B. Chỉ so số token đầu ra vì kết quả cuối đã tương đương.

C. Chỉ chấm chất lượng ngôn ngữ để phân biệt hai thiết kế.

D. Đánh giá thêm đường chạy và các kết quả trung gian.

**Câu 5 — Chọn hai.** Workflow yêu cầu duyệt trước bước xuất bản; agent được thêm để tìm thông tin còn thiếu. Hai nguyên tắc nào giữ đúng đánh đổi kiến trúc?

A. Đưa mọi bước cố định vào prompt để thay workflow ngay.

B. Cho agent tự quyết bỏ gate khi tìm thấy đủ nguồn đáng tin.

C. Giữ gate duyệt ở luồng xuất bản dù phần tìm kiếm có tự chủ.

D. Giới hạn phần agent vào việc cần thích ứng và đo kết quả của nó.

## Đáp án và giải thích

1. **A.** A đúng: Tự chủ được đặt vào phần có nhu cầu thích ứng. B sai: Giảm phức tạp bằng cách bỏ yêu cầu điều tra chưa đáp ứng nhiệm vụ. C sai: Tăng số đường thực thi cho phần vốn cố định mà chưa có lợi ích rõ. D sai: Thêm chi phí và biến thiên cho toàn bộ luồng, chưa giải quyết phân loại nhiệm vụ.

2. **A.** A đúng: Nhu cầu thích ứng là lợi ích trực tiếp của agent. B sai: Độ dài giải thích không đo tính đúng. C sai: Số công cụ không quyết định cấu trúc điều phối. D sai: Tự chủ vẫn cần quan sát và kiểm chứng.

3. **C, D.** A sai: Không cho thấy lợi ích bổ sung trên phạm vi tác vụ. B sai: Khả năng chung không chứng minh phù hợp hệ thống này. C đúng: Cần nhu cầu chức năng cụ thể. D đúng: Lợi ích phải được đo cùng đánh đổi.

4. **D.** A sai: Agent có thể cần các đường khác hợp lệ. B sai: Token không phản ánh toàn bộ hành động và lỗi trung gian. C sai: Cách diễn đạt không đo độ tin cậy điều phối. D đúng: Nhiều đường có thể che giấu nguyên nhân khác nhau.

5. **C, D.** A sai: Chuyển điều khiển sang prompt làm tăng biến thiên chưa có nhu cầu. B sai: Đủ dữ liệu không thay quyền phê duyệt đã yêu cầu. C đúng: Mở quyền khám phá không đồng nghĩa bỏ ràng buộc rõ. D đúng: Giảm không gian hành động không cần thiết.

## Đối chiếu Vertex

Workflow thường dễ dự đoán và đánh giá hơn nhưng ít linh hoạt; agent thích ứng tốt hơn nhưng khó kiểm soát chi phí và độ tin cậy hơn. Chọn theo yêu cầu và kết quả đo. Nhận định trong video về tỷ lệ hoàn thành thấp hơn không phải số đo chung cho mọi hệ thống; chọn workflow cũng không tự bảo đảm thành công 100%. Dùng chung câu hỏi.

Nguồn đối chiếu: [Workflows vs agents](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289245). Bản lưu: `sources/vertex-lessons/289245.json`.
