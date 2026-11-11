# Phân tích độc lập rồi tổng hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287804), sources/api-lessons/287804.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Xử lý song song (parallelization) là chia một việc thành các phần độc lập, chạy đồng thời rồi tổng hợp. Mỗi phần có thể dùng yêu cầu hoặc tiêu chí riêng để tập trung vào một khía cạnh.

Ví dụ: Cùng một tài liệu được đánh giá riêng về khả năng bảo trì, mức dễ sử dụng và việc tuân thủ định dạng. Các nhánh đọc cùng tài liệu nhưng không cần kết quả của nhau, nên có thể chạy đồng thời.

Điều kiện quan trọng là đầu vào của mỗi nhánh đã sẵn sàng. Nếu B cần kết quả tính toán của A thì B phải chờ A; không nên đưa giá trị đoán vào B chỉ để chạy nhanh hơn.

Khi các nhánh hoàn tất, vẫn cần bước tổng hợp: đối chiếu phát hiện, giải quyết điểm khác nhau và đưa kết luận theo mục tiêu chung. Không mặc định chọn kết quả dài nhất hoặc bỏ những kết quả không đồng ý với nhau.

Chia nhánh giúp tập trung và cải thiện từng phần riêng, nhưng chất lượng cuối vẫn cần đánh giá. Không phải mọi nhiệm vụ đều tốt hơn khi chạy song song.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ba reviewer đánh giá cùng tài liệu về bảo trì, trải nghiệm và định dạng; không reviewer nào cần đầu ra của reviewer khác. Thiết kế nào giảm độ trễ mà giữ đủ góc nhìn?

A. Chạy ba nhánh độc lập rồi tổng hợp theo tiêu chí chung.

B. Chạy nối tiếp để mỗi reviewer bắt buộc thấy ý kiến trước.

C. Chỉ chạy reviewer trả lời nhanh nhất ở lần thử đầu.

D. Chạy ba nhánh rồi lấy bản dài nhất làm kết luận.

**Câu 2 — Chọn một.** Bước B cần mức thuế được tính ở A; nhóm muốn chạy song song bằng cách đoán thuế cho B. Cách điều phối phù hợp nhất?

A. Chạy B với mức phổ biến và sửa câu trả lời nếu A khác.

B. Đợi kết quả A trước khi chạy B.

C. Cho A/B chạy đồng thời và dùng confidence chọn kết quả.

D. Chạy B hai lần với hai mức thuế thường gặp rồi bỏ phiếu.

**Câu 3 — Chọn hai.** Hai nhánh review đưa kết luận trái nhau vì một bên ưu tiên latency, bên kia ưu tiên chất lượng. Hai việc nào cần ở bước tổng hợp?

A. Giữ tiêu chí và bằng chứng của mỗi nhánh để giải thích khác biệt.

B. Loại nhánh thiểu số để kết luận nhất quán.

C. Đối chiếu với ràng buộc/mục tiêu hệ thống trước khi chọn tradeoff.

D. Chọn nhánh dùng nhiều token hơn vì có vẻ phân tích sâu hơn.

**Câu 4 — Chọn một.** Hệ song song có ba nhánh; một nhánh timeout sau khi hai nhánh hoàn tất. Báo cáo cuối yêu cầu đủ cả ba tiêu chí. Cách xử lý phù hợp?

A. Xuất báo cáo hoàn tất bằng hai nhánh vì đa số đã xong.

B. Thay phần timeout bằng nhận xét suy đoán của tổng hợp.

C. Chạy lại toàn bộ ba nhánh để kết quả đồng thời.

D. Giữ phần đạt; phục hồi hoặc báo thiếu tiêu chí còn lại.

**Câu 5 — Chọn hai.** Nhóm cân nhắc chia một prompt thành nhiều nhánh. Hai yếu tố nào phải đánh giá trước khi coi đây là cải tiến?

A. Đầu vào cần thiết của từng nhánh đã sẵn và không phụ thuộc kết quả nhánh khác.

B. Mỗi nhánh có tên khác nhau nên chắc chắn độc lập.

C. Chất lượng cuối, độ trễ và chi phí tổng hợp trên tập tác vụ đại diện.

D. Số nhánh càng lớn càng tăng độ đúng dù chúng đọc cùng bằng chứng.

## Đáp án và giải thích

1. **A.** A dùng tính độc lập và có bước tích hợp. B tạo phụ thuộc không cần. C bỏ độ bao phủ. D độ dài không đại diện mức đúng hoặc sự cân bằng tiêu chí.

2. **B.** B giữ phụ thuộc dữ liệu. A có thể tạo đầu ra/tác động dựa trên giả định sai. C không thay được dữ liệu bắt buộc. D tăng công việc nhưng không bảo đảm đúng giá trị thực.

3. **A, C.** A giữ nguyên nhân khác biệt; C đưa quyết định về mục tiêu chung. B bỏ bằng chứng theo số phiếu. D lượng đầu ra không chứng minh quyết định phù hợp ràng buộc.

4. **D.** D giữ phần đã xong và biểu diễn thiếu hụt. A nhầm đa số với đủ tiêu chí. B tạo dữ liệu không có đánh giá. C lặp công việc không cần trừ khi đầu vào đã thay đổi.

5. **A, C.** A kiểm tra độc lập thực sự; C đo lợi ích toàn hệ. B tên gọi không xác định phụ thuộc. D nhiều nhánh có thể cùng sai hoặc tạo thêm chi phí/nhiễu.

## Đối chiếu Vertex

Ví dụ phân tích vật liệu chia thành các nhánh độc lập, cùng nhận ảnh nhưng có tiêu chí riêng, rồi tổng hợp. Chạy song song có thể giảm thời gian nhưng còn phụ thuộc số tác vụ chạy đồng thời, giới hạn tốc độ và thời gian tổng hợp. Chia chuyên môn không tự bảo đảm kết luận kỹ thuật đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Parallelization workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289236). Bản lưu: `sources/vertex-lessons/289236.json`.
