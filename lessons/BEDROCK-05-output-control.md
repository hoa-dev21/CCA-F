# Prefill và dấu dừng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276723), sources/bedrock-lessons/276723.json. Ví dụ theo phiên bản của khóa; câu hỏi tự biên soạn.

## Nội dung bài học


Assistant prefill là phần mở đầu câu trả lời được ứng dụng cung cấp sẵn để mô hình viết tiếp. Phản hồi mới không nhất thiết lặp lại phần đã điền, nên ứng dụng cần ghép đúng nếu muốn hiển thị hoặc xử lý toàn bộ câu trả lời.

Stop sequence là chuỗi đánh dấu yêu cầu dừng sinh nội dung khi gặp. Gặp dấu dừng chỉ cho biết điều kiện dừng đã xảy ra, chưa chứng minh nội dung đáp ứng đủ yêu cầu. Một dấu dừng quá rộng có thể cắt giữa dữ liệu quan trọng, chẳng hạn giữa một đoạn JSON.

Phần mở đầu cũng có thể định hướng câu trả lời. Nếu bạn viết sẵn một quan điểm rồi mô hình tiếp tục bảo vệ nó, đó chưa phải đánh giá độc lập rằng quan điểm ấy đúng. Cần xem bằng chứng riêng.

Mẫu Converse dùng `inferenceConfig` và `stopSequences`. Khả năng hỗ trợ prefill và cách phối hợp tùy mô hình, nhà cung cấp, phiên bản. Với việc trích xuất dữ liệu có cấu trúc, xem thêm [schema và tool_choice](EXAM-05-structured-output.md) cùng kiểm tra dữ liệu, thay vì chỉ cắt bỏ định dạng Markdown.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ứng dụng prefill phần mở đầu JSON, provider trả phần tiếp nối; adapter chỉ parse phần mới nên lỗi. Cách sửa đúng trước khi đổi prompt?

A. Bỏ qua lỗi parse vì mô hình đã được định hướng JSON.

B. Ghép prefill/phần tiếp nối đúng hợp đồng rồi validate.

C. Yêu cầu người dùng tự thêm phần thiếu khi đọc.

D. Thêm stop marker ở đầu phần tiếp nối để tránh lỗi.

**Câu 2 — Chọn hai.** Stop sequence khớp chuỗi xuất hiện trong một giá trị JSON và cắt dữ liệu. Hai việc nào cần làm?

A. Kiểm tra marker và trạng thái dừng để xác định nguyên nhân cắt.

B. Coi gặp stop sequence là bằng chứng JSON đã hoàn chỉnh.

C. Validate đầu ra; điều chỉnh cơ chế kiểm soát/marker phù hợp trước khi chấp nhận.

D. Tự nối dấu đóng ngoặc rồi coi mọi giá trị đã đầy đủ.

**Câu 3 — Chọn một.** Prefill nói “Phương án X rõ ràng tốt nhất”; mô hình tiếp tục bảo vệ X. Kiến trúc sư nên đánh giá kết quả thế nào?

A. X đã được xác nhận độc lập bởi mô hình.

B. Confidence có thể được suy từ độ dài lập luận ủng hộ X.

C. Đầu vào đã định hướng; cần bằng chứng độc lập.

D. Chỉ cần chạy lại cùng prefill nhiều lần để loại bias.

**Câu 4 — Chọn một.** Mẫu trong khóa dùng prefill với một model, nhưng hệ production đổi model/provider. Bước nào cần trước khi tái sử dụng cấu hình?

A. Giữ nguyên vì mọi model Claude đều cùng hợp đồng prefill.

B. Đổi mỗi model ID rồi kiểm tra UI có text.

C. Bỏ kiểm tra trạng thái dừng để adapter linh hoạt.

D. Xác minh hỗ trợ/hợp đồng đích và kiểm thử adapter.

**Câu 5 — Chọn hai.** Downstream cần dữ liệu có trường/kiểu nghiêm ngặt. Hai điều nào đúng về dùng prefill và stop sequence?

A. Chúng có thể hướng/cắt đầu ra nhưng không tự chứng minh dữ liệu đạt hợp đồng nghiệp vụ.

B. Chỉ cần loại code fence là schema chắc chắn đúng.

C. Cần cơ chế schema phù hợp và validation cấu trúc/ngữ nghĩa theo yêu cầu.

D. Một marker tùy ý có thể thay mọi validator nếu phản hồi đủ ngắn.

## Đáp án và giải thích

1. **B.** B sửa cách tái dựng đầu ra. A không tạo dữ liệu dùng được. C đẩy lỗi adapter cho người dùng. D cắt thêm nội dung thay vì khôi phục phần mở đầu.

2. **A, C.** A chẩn đoán điều kiện dừng, C kiểm tra tính đầy đủ. B nhầm dừng sinh với hoàn thành yêu cầu. D có thể tạo JSON parse được nhưng thiếu hoặc sai dữ liệu.

3. **C.** C nhận diện điều kiện đầu vào ảnh hưởng đầu ra. A bỏ ảnh hưởng đó. B độ dài không chứng minh đúng. D lặp cùng thiên lệch không tạo phép đánh giá độc lập.

4. **D.** D kiểm tra tính tương thích cụ thể. A khái quát từ họ model. B smoke text không chứng minh các đặc tính điều khiển. C che trạng thái quan trọng thay vì xử lý khác biệt.

5. **A, C.** A phân biệt điều khiển sinh và tính đúng; C cung cấp kiểm tra cần thiết. B đúng định dạng trình bày không bảo đảm trường/kiểu. D độ dài và marker không xác nhận nội dung nghiệp vụ.

## Đối chiếu Vertex

Mẫu Vertex dùng phần mở đầu tin nhắn assistant và `stop_sequences` trong hàm gọi Messages, khác cấu trúc Converse. Phần đã điền không tự lặp trong văn bản mới. Chuỗi dừng có thể cắt khi dữ liệu chưa hoàn chỉnh; khả năng hỗ trợ phụ thuộc mô hình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Controlling model output](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289160). Bản lưu: `sources/vertex-lessons/289160.json`.
