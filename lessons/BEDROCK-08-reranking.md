# Xếp lại các ứng viên

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276775), sources/bedrock-lessons/276775.json. Câu hỏi tự biên soạn; chi tiết truy xuất dữ liệu đọc bổ trợ cho Architect.

## Nội dung bài học


Reranking là xếp hạng lại các đoạn đã tìm được. Sau bước tìm kiếm và hợp nhất, bộ xếp hạng đọc câu hỏi cùng các đoạn ứng viên để chọn thứ tự phù hợp hơn.

Ví dụ: Nhiều đoạn chứa cùng mã sự cố, nhưng chỉ một đoạn giải thích nguyên nhân mà người dùng hỏi. Xếp hạng lại có thể đưa đoạn thực sự trả lời câu hỏi lên trên.

Bài gán mã định danh cho mỗi đoạn và yêu cầu trả danh sách mã theo thứ tự. Nhờ đó, mô hình không phải chép lại toàn bộ văn bản. Ứng dụng dùng mã để lấy đúng nội dung và thông tin nguồn gốc. Nếu nhận một mã không có trong tập ứng viên, cần xử lý như kết quả không hợp lệ, không tự tạo nội dung cho mã đó.

Xếp hạng lại thêm thời gian và chi phí. Nó cũng không thể chọn tài liệu đúng nếu tài liệu đó chưa được tìm thấy trong tập đầu vào. Vì vậy, cần kiểm tra cả khả năng tìm đủ tài liệu ở bước đầu và thứ tự sau khi xếp hạng lại.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hệ thống trả đúng mã sự cố nhưng sai nguyên nhân. Đo kiểm cho thấy đoạn nêu nguyên nhân đã có trong 30 ứng viên, thường ở vị trí 22; chỉ 5 đoạn đầu được gửi để trả lời. Thay đổi nào nhắm đúng nút thắt?

A. Xếp hạng lại 30 ứng viên theo câu hỏi trước khi chọn 5 đoạn.

B. Tăng độ dài câu trả lời nhưng giữ nguyên 5 đoạn đầu.

C. Lập chỉ mục lại toàn bộ kho trước khi kiểm tra thứ tự ứng viên.

D. Yêu cầu mô hình trả lời bổ sung nguyên nhân từ tên sự cố.

**Câu 2 — Chọn hai.** Reranker trả các ID [17, 4, 99], nhưng tập đầu vào chỉ có ID 1–30. Hai xử lý nào bảo toàn tính đúng đắn của pipeline?

A. Kiểm tra các ID trả về có thuộc tập ứng viên trước khi lấy nội dung.

B. Nhờ mô hình viết lại nội dung của ID 99 dựa trên câu hỏi.

C. Tìm tài liệu số 99 trong toàn kho rồi ghép vào để hoàn thành danh sách.

D. Giữ ánh xạ ID với đoạn gốc và nguồn khi dựng ngữ cảnh.

**Câu 3 — Chọn một.** Trên 100 câu hỏi thất bại, 80 câu không có đoạn đúng trong tập ứng viên. Ngân sách chỉ đủ sửa một tầng trước. Lựa chọn nào có khả năng cải thiện trực tiếp nhóm 80 câu?

A. Yêu cầu reranker đưa ra lý giải dài cho từng ID.

B. Giữ truy xuất và tăng số đoạn cuối từ 5 lên 10 trong cùng tập sai.

C. Cải thiện truy xuất ban đầu và đo recall của tập ứng viên.

D. Dùng reranker mạnh hơn trên cùng tập ứng viên hiện tại.

**Câu 4 — Chọn hai.** Reranking tăng chất lượng nhưng làm thời gian phản hồi vượt mục tiêu. Nhóm định bật cho mọi truy vấn. Hai phép đo nào cần để quyết định thiết kế?

A. Chỉ đo thời gian reranker vì các tầng trước đã có kiểm thử riêng.

B. Tách lỗi thiếu ứng viên khỏi lỗi thứ tự để biết lợi ích thực của tầng mới.

C. So sánh chất lượng trả lời và độ trễ cuối cùng có/không có reranking.

D. Chỉ chấm thứ tự ID bằng mắt trên các câu từng được dùng chỉnh prompt.

**Câu 5 — Chọn một.** Hai đoạn cùng chứa mã ERR-7: đoạn X liệt kê mã, đoạn Y giải thích điều kiện gây lỗi. Người dùng hỏi “vì sao lỗi chỉ xuất hiện sau đổi cấu hình?”. Tiêu chí chọn top-k nào phù hợp nhất?

A. Ưu tiên đoạn trả lời đúng nhu cầu thay đổi cấu hình.

B. Ưu tiên đoạn có số lần xuất hiện ERR-7 nhiều nhất.

C. Ưu tiên đoạn ngắn nhất để giảm chi phí truyền ngữ cảnh.

D. Ưu tiên tài liệu có nhiều mã lỗi nhất để tăng phạm vi bao phủ.

## Đáp án và giải thích

1. **A.** A xử lý lỗi thứ tự khi bằng chứng đã được tìm thấy. B không đưa thêm bằng chứng vào; C ưu tiên sai tầng chưa có dấu hiệu lỗi; D suy diễn thay cho đoạn nguồn.

2. **A, D.** A phát hiện vi phạm hợp đồng; D bảo toàn bằng chứng. C biến ID ngoài tập thành một kết quả chưa được xếp hạng trong lượt đó; B tạo bằng chứng không tồn tại.

3. **C.** C đưa bằng chứng bị thiếu vào tập. D và A chỉ xử lý ứng viên đã có; B có thể giúp lỗi cắt top-k nhưng không sửa việc đoạn đúng hoàn toàn vắng mặt.

4. **B, C.** C đo đánh đổi người dùng thực sự nhận; B tránh quy lỗi sai tầng. A bỏ qua độ trễ toàn luồng; D vừa thiếu đại diện vừa có nguy cơ đánh giá trên dữ liệu đã tối ưu.

5. **A.** A xét ý định và bằng chứng cần thiết. B có thể chọn danh sách mã; C tối ưu kích thước thay vì liên quan; D ưu tiên độ rộng trong khi câu hỏi cần nguyên nhân cụ thể.

## Đối chiếu Vertex

Sau tìm kiếm kết hợp, bộ xếp hạng lại đọc câu hỏi và các ứng viên, trả mã định danh để giảm đầu ra. Kiểm tra mã thuộc tập đầu vào, số lượng, việc trùng lặp và thứ tự trước khi lấy văn bản. Bộ này không tìm lại được tài liệu đã bị bỏ sót từ đầu. Đo lợi ích thực tế cùng chi phí và thời gian chờ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Reranking results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289192). Bản lưu: `sources/vertex-lessons/289192.json`.
