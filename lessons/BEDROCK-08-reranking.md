# Xếp lại các ứng viên

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276775), sources/bedrock-lessons/276775.json. Câu hỏi tự biên soạn; chi tiết truy xuất dữ liệu đọc bổ trợ cho Architect.

## Nội dung bài học

Sau truy xuất và hợp nhất, reranker xem truy vấn tìm kiếm cùng các ứng viên để sắp lại mức liên quan. Nó có thể phân biệt đoạn thật sự trả lời câu hỏi với đoạn chỉ chứa cùng mã sự cố.

Gán ID cho mỗi đoạn văn bản rồi yêu cầu trả danh sách ID theo thứ tự giúp tránh mô hình phải sao chép lại toàn bộ văn bản. Ứng dụng đối chiếu ID với tập ứng viên, giữ nội dung và provenance gốc. ID mô hình trả không tồn tại phải được xử lý như kết quả không hợp lệ.

Reranking thêm chi phí và độ trễ; cần đo lợi ích trên truy vấn tìm kiếm đại diện. Nếu tài liệu đúng không có trong tập ứng viên, bước chỉ sắp lại không tự tìm được tài liệu đó. Kiểm tra cả recall ban đầu lẫn thứ tự sau xếp hạng, không coi reranker chữa mọi lỗi truy xuất dữ liệu.

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

Đã đọc [Reranking results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289192), sources/vertex-lessons/289192.json. Rerank ứng viên sau kết hợp nhiều phương pháp theo truy vấn tìm kiếm, trả IDs giảm output. Validate ID thuộc tập ứng viên, số lượng/không trùng và thứ tự trước lấy nội dung. Reranker không lấy lại được tài liệu đã bị truy xuất dữ liệu bỏ; đo chi phí/latency và cải thiện thực tế. Dùng chung câu hỏi khái niệm.
