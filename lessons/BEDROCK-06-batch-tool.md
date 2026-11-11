# Gom lời gọi khác với chạy đồng thời

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276766), sources/bedrock-lessons/276766.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài tạo công cụ `batch_tool` nhận một danh sách các lời gọi, mỗi lời gọi có tên công cụ và đầu vào. Claude có thể gửi cả nhóm trong một lần yêu cầu, giúp giảm số lượt trao đổi với mô hình.

Gom lời gọi không đồng nghĩa chạy đồng thời. Trong mã mẫu, `run_batch` dùng vòng `for` và gọi `run_tool` lần lượt. Muốn chạy song song thật sự, ứng dụng phải có cách thực thi tương ứng, quản lý lỗi và ghép kết quả đúng với từng lời gọi.

Chỉ chạy đồng thời các thao tác độc lập. Nếu B cần kết quả của A, phải thực hiện A trước hoặc dùng bộ điều phối hiểu rõ quan hệ phụ thuộc đó. Việc hai lời gọi nằm trong cùng danh sách không làm mất phụ thuộc dữ liệu.

`batch_tool` tự viết trong bài khác Message Batches API xử lý các yêu cầu theo lô bất đồng bộ. Hai cơ chế có mục đích và vòng đời riêng. Với mỗi thao tác trong nhóm, vẫn cần kiểm tra công cụ được phép dùng, đầu vào, quyền và kết quả.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** batch_tool nhận bốn invocation; run_batch dùng for và chờ run_tool từng mục. Log cho thấy chỉ một tool chạy mỗi thời điểm. Kết luận đúng?

A. Đã song song vì mô hình gửi một mảng.

B. Gom request, nhưng executor vẫn chạy tuần tự.

C. Batch API của provider đang tự hạn chế concurrency.

D. Phải đổi prompt vì executor không liên quan tốc độ.

**Câu 2 — Chọn một.** Hai tra cứu độc lập và một cập nhật cần kết quả cả hai được đặt trong cùng danh sách. Điều phối nào phù hợp?

A. Chạy cả ba cùng lúc vì cùng một batch.

B. Chạy cập nhật trước để tận dụng thời gian tra cứu.

C. Song song tra cứu; đợi/kiểm tra dữ liệu rồi cập nhật.

D. Đưa giá trị dự đoán vào cập nhật, dùng tra cứu kiểm tra sau.

**Câu 3 — Chọn hai.** Muốn executor chạy song song các invocation độc lập, hai cơ chế nào cần bên cạnh việc khởi chạy đồng thời?

A. Liên kết kết quả/lỗi với từng invocation một cách ổn định.

B. Coi thứ tự hoàn tất luôn trùng thứ tự đầu vào.

C. Kiểm tra quyền/đầu vào và xử lý lỗi riêng theo mỗi thao tác.

D. Nếu một mục lỗi, đánh dấu mọi mục còn lại thành công để batch có kết quả.

**Câu 4 — Chọn một.** Nhóm nghe “batch_tool” và muốn áp luôn vòng đời polling của Message Batches API vào hàm cục bộ. Cách đánh giá đúng?

A. Hai cơ chế có cùng từ batch nên dùng chung vòng đời.

B. Mọi batch_tool đều là wrapper chính thức của Message Batches API.

C. Chỉ khác tên SDK, quy tắc thực thi giống nhau.

D. Tool gom invocation khác API batch yêu cầu bất đồng bộ.

**Câu 5 — Chọn hai.** Một batch chứa hai tra cứu thành công và một ghi dữ liệu timeout chưa rõ đã thực thi chưa. Hai hành động nào hợp lý?

A. Giữ kết quả hai tra cứu và trạng thái chưa xác định của thao tác ghi.

B. Chạy lại toàn bộ batch vô điều kiện cho nhất quán.

C. Xác minh trạng thái hoặc dùng quy tắc chống lặp trước khi retry ghi.

D. Báo cả batch thất bại hoàn toàn và xóa mọi kết quả đã có.

## Đáp án và giải thích

1. **B.** B phân biệt gom lời gọi và chạy đồng thời. A lấy cấu trúc dữ liệu làm bằng chứng concurrency. C nhầm batch_tool tự viết với dịch vụ batch. D cách thực thi host quyết định lịch chạy.

2. **C.** C tôn trọng đồ thị phụ thuộc. A/B không có đầu vào cập nhật. D có thể gây tác động từ dữ liệu sai trước khi biết kết quả thực.

3. **A, C.** A tránh ghép nhầm khi thứ tự thay đổi; C giữ hợp đồng và trạng thái từng tác động. B không đúng với concurrency. D báo thành công không có bằng chứng.

4. **D.** D xét cơ chế và vòng đời thực. A/B/C suy tương đương từ tên gọi; bài dùng một công cụ tự viết, không chứng minh nó có job lifecycle của dịch vụ batch.

5. **A, C.** A bảo toàn dữ liệu hữu ích và không báo sai; C giảm nguy cơ tác động lặp. B có thể ghi hai lần. D làm mất phần thành công mà không giải quyết trạng thái ghi chưa rõ.

## Đối chiếu Vertex

Mẫu Vertex cũng chạy vòng `for` tuần tự, chưa thực thi đồng thời và không phải Message Batches API. Schema khai báo `arguments` là đối tượng nhưng mã `json.loads(invocation.arguments)` cần chuỗi: phải thống nhất trước khi chạy. Giới hạn kích thước nhóm, kiểm tra từng lời gọi, quyền và lỗi một phần; không cho các batch tự lồng vô hạn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The batch tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289189). Bản lưu: `sources/vertex-lessons/289189.json`.
