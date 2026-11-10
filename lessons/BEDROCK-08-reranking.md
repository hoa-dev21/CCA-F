# Xếp lại các ứng viên

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276775), sources/bedrock-lessons/276775.json. Câu hỏi tự biên soạn; chi tiết truy xuất dữ liệu đọc bổ trợ cho Architect.

## Nội dung bài học


Reranking là xếp hạng lại các đoạn đã tìm được. Sau bước tìm kiếm và hợp nhất, bộ xếp hạng đọc câu hỏi cùng các đoạn ứng viên để chọn thứ tự phù hợp hơn.

Ví dụ: Nhiều đoạn chứa cùng mã sự cố, nhưng chỉ một đoạn giải thích nguyên nhân mà người dùng hỏi. Xếp hạng lại có thể đưa đoạn thực sự trả lời câu hỏi lên trên.

Bài gán mã định danh cho mỗi đoạn và yêu cầu trả danh sách mã theo thứ tự. Nhờ đó, mô hình không phải chép lại toàn bộ văn bản. Ứng dụng dùng mã để lấy đúng nội dung và thông tin nguồn gốc. Nếu nhận một mã không có trong tập ứng viên, cần xử lý như kết quả không hợp lệ, không tự tạo nội dung cho mã đó.

Xếp hạng lại thêm thời gian và chi phí. Nó cũng không thể chọn tài liệu đúng nếu tài liệu đó chưa được tìm thấy trong tập đầu vào. Vì vậy, cần kiểm tra cả khả năng tìm đủ tài liệu ở bước đầu và thứ tự sau khi xếp hạng lại.

## Câu hỏi

**1. Chọn một.** Đoạn đúng có trong ứng viên nhưng đứng thấp vì nhiều đoạn chỉ khớp ID. Bước nào có thể giúp?

A. Xóa truy vấn tìm kiếm.

B. Rerank ứng viên theo mức trả lời đúng câu hỏi.

C. Chỉ tăng độ tự tin đầu ra.

D. Coi mọi đoạn chứa ID là tương đương.

**2. Chọn một.** Tài liệu cần thiết hoàn toàn không được truy xuất. Reranker chỉ nhận tập hiện có có tự khắc phục không?

A. Có, sắp thứ tự tự tạo mọi nguồn.

B. Có, ID thay được văn bản.

C. Không; cần cải thiện hoặc mở rộng truy xuất dữ liệu ban đầu.

D. Có, miễn trả danh sách ngắn.

**3. Chọn một.** Reranker trả một ID không thuộc ứng viên. Ứng dụng nên làm gì?

A. Validate ID và xử lý lỗi/khôi phục, không tự tạo nội dung cho ID đó.

B. Bịa một đoạn văn bản cho khớp.

C. Coi ID mới là nguồn đã đọc.

D. Chỉ gắn trích dẫn nguồn tùy ý.

## Đáp án

1. **B.** A mất mục tiêu; C không sắp lại dữ liệu; D bỏ mức liên quan khác nhau.
2. **C.** A và B nhầm ranking với truy xuất; D không thêm nguồn.
3. **A.** B bịa dữ liệu; C tuyên bố sai bằng chứng; D mất liên kết nguồn.

## Đối chiếu Vertex

Sau tìm kiếm kết hợp, bộ xếp hạng lại đọc câu hỏi và các ứng viên, trả mã định danh để giảm đầu ra. Kiểm tra mã thuộc tập đầu vào, số lượng, việc trùng lặp và thứ tự trước khi lấy văn bản. Bộ này không tìm lại được tài liệu đã bị bỏ sót từ đầu. Đo lợi ích thực tế cùng chi phí và thời gian chờ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Reranking results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289192). Bản lưu: `sources/vertex-lessons/289192.json`.
