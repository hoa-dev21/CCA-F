# Giữ bối cảnh của đoạn văn bản

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276778), sources/bedrock-lessons/276778.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi tài liệu được chia nhỏ, một đoạn có thể mất thông tin ở phần trước. Ví dụ: đoạn chỉ viết “dự án này”, nhưng tên dự án nằm ngoài phần được lấy. Contextual retrieval bổ sung một lời giới thiệu ngắn dựa trên tài liệu gốc để làm rõ đoạn thuộc bối cảnh nào.

Phần bổ sung được tạo trong giai đoạn chuẩn bị dữ liệu, rồi đưa cùng đoạn văn vào chỉ mục tìm kiếm. Nó có thể làm rõ tên dự án, thời kỳ hoặc phần tài liệu mà đoạn đang nói đến.

Nếu tài liệu quá lớn, mẫu chỉ dùng phần đầu và các đoạn gần trước đó làm bối cảnh. Khi dữ liệu được cung cấp chưa có một sự kiện, mô hình không được tự đoán để viết đủ lời giới thiệu.

Cần giữ riêng văn bản gốc và phần do mô hình bổ sung, tránh trình bày mọi câu như trích nguyên văn. Sau khi thêm bối cảnh, đo lại chất lượng tìm kiếm, tính cả chi phí chuẩn bị và việc cập nhật khi nguồn thay đổi.

Cách này khác reranking: contextual retrieval bổ sung bối cảnh trước khi lập chỉ mục; reranking sắp lại các ứng viên theo câu hỏi sau khi tìm kiếm.

## Tự kiểm tra

**Câu 1 — Chọn một.** Đoạn “dự án này giảm 18% chi phí” bị tìm nhầm giữa nhiều dự án. Tên dự án nằm ở đầu tài liệu. Muốn cải thiện tìm kiếm trước khi có truy vấn, nên làm gì?

A. Đợi có truy vấn rồi chỉ xếp hạng lại các đoạn không có tên dự án.

B. Đổi tên trường chứa đoạn thành tên dự án nhưng giữ chỉ mục cũ.

C. Dùng mô hình trả lời suy đoán dự án từ con số 18%.

D. Tạo phần ngữ cảnh ngắn có căn cứ và lập chỉ mục cùng đoạn.

**Câu 2 — Chọn hai.** Pipeline thêm lời giới thiệu do mô hình viết vào từng chunk. Báo cáo sau đó trích cả lời giới thiệu như nguyên văn tài liệu. Hai sửa đổi nào cần thiết?

A. Giữ liên kết nguồn và dùng phần gốc để đối chiếu trích dẫn.

B. Lưu tách phần gốc và phần ngữ cảnh được tạo thêm.

C. Bỏ liên kết nguồn vì ngữ cảnh mới đã diễn đạt đầy đủ hơn.

D. Gộp lời giới thiệu vào nguồn và gắn ngày tài liệu gốc cho toàn bộ.

**Câu 3 — Chọn một.** Tài liệu quá dài nên bộ tạo ngữ cảnh chỉ thấy phần mở đầu và hai đoạn trước chunk. Không phần nào xác định năm của số liệu. Hành vi nào đúng?

A. Chọn năm hiện tại rồi gắn nhãn là ngữ cảnh suy luận.

B. Giữ năm là chưa biết; tìm nguồn để xác định nếu cần.

C. Dùng năm xuất bản của tài liệu làm năm đo số liệu.

D. Lấy năm phổ biến trong các tài liệu cùng dự án.

**Câu 4 — Chọn hai.** Nguồn sửa tên sản phẩm và phạm vi triển khai, nhưng văn bản chunk gần như không đổi. Hai việc nào phù hợp khi duy trì contextual retrieval?

A. Chỉ sửa prompt trả lời để mô hình tự sửa mọi ngữ cảnh lỗi.

B. Giữ ngữ cảnh cũ vì hash của riêng chunk chưa thay đổi.

C. Đo lại chất lượng tìm kiếm cùng chi phí chuẩn bị/cập nhật.

D. Đánh giá lại phần ngữ cảnh sinh thêm và cập nhật chỉ mục liên quan.

**Câu 5 — Chọn một.** Nhóm muốn vừa tìm đúng chunk có đại từ mơ hồ, vừa chọn tốt nhất trong 40 ứng viên theo câu hỏi. Kiến trúc nào phân vai đúng?

A. Xếp hạng mọi chunk một lần khi nhập kho; dùng thứ tự đó cho mọi câu hỏi.

B. Chỉ bổ sung ngữ cảnh sau khi đã cắt top-3 rồi coi đó là cải thiện recall.

C. Dùng lời giới thiệu sinh thêm thay toàn bộ chunk và bỏ văn bản gốc.

D. Bổ sung bối cảnh lúc chuẩn bị chỉ mục; xếp hạng ứng viên sau truy xuất.

## Đáp án và giải thích

1. **D.** D đưa ngữ cảnh bị mất vào biểu diễn tìm kiếm. A có thể cải thiện thứ tự nhưng không sửa bước lập chỉ mục đã thiếu bối cảnh; B không bảo đảm biểu diễn được cập nhật; C không có bằng chứng nhận diện.

2. **A, B.** B phân biệt xuất xứ; A cho phép kiểm chứng. D đánh đồng nội dung sinh thêm với nguyên văn; C làm mất khả năng đối chiếu dù lời giới thiệu có vẻ đầy đủ.

3. **B.** B giữ giới hạn bằng chứng. C nhầm năm xuất bản với thời kỳ đo; D suy từ tài liệu khác; A dù gắn nhãn vẫn đưa giả định chưa có căn cứ vào chỉ mục.

4. **C, D.** D xét phụ thuộc vào tài liệu ngoài chunk; C kiểm tra lợi ích thực tế. B bỏ qua bối cảnh nguồn đã đổi; A xử lý quá muộn khi truy xuất có thể đã chọn sai tài liệu.

5. **D.** D kết hợp hai tầng phục vụ mục tiêu khác nhau. A thiếu câu hỏi để đánh giá liên quan; B không cứu chunk đã bị loại; C mất chi tiết và bằng chứng gốc.

## Đối chiếu Vertex

Bổ sung đoạn bối cảnh trước khi lập chỉ mục và giữ riêng phần được sinh với nguồn gốc. Chỉ dùng phần đầu và các đoạn lân cận là cách giảm dữ liệu, không bảo đảm đủ bối cảnh. Mã minh họa thiếu f-string và cách dùng `result.text` phải khớp hàm hỗ trợ; không coi đoạn đó là mã đã được chạy kiểm chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Contextual retrieval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289187). Bản lưu: `sources/vertex-lessons/289187.json`.
