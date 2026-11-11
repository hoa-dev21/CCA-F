# Prefill và dấu dừng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276723), sources/bedrock-lessons/276723.json. Ví dụ theo phiên bản của khóa; câu hỏi tự biên soạn.

## Nội dung bài học


Assistant prefill là phần mở đầu câu trả lời được ứng dụng cung cấp sẵn để mô hình viết tiếp. Phản hồi mới không nhất thiết lặp lại phần đã điền, nên ứng dụng cần ghép đúng nếu muốn hiển thị hoặc xử lý toàn bộ câu trả lời.

Stop sequence là chuỗi đánh dấu yêu cầu dừng sinh nội dung khi gặp. Gặp dấu dừng chỉ cho biết điều kiện dừng đã xảy ra, chưa chứng minh nội dung đáp ứng đủ yêu cầu. Một dấu dừng quá rộng có thể cắt giữa dữ liệu quan trọng, chẳng hạn giữa một đoạn JSON.

Phần mở đầu cũng có thể định hướng câu trả lời. Nếu bạn viết sẵn một quan điểm rồi mô hình tiếp tục bảo vệ nó, đó chưa phải đánh giá độc lập rằng quan điểm ấy đúng. Cần xem bằng chứng riêng.

Mẫu Converse dùng `inferenceConfig` và `stopSequences`. Khả năng hỗ trợ prefill và cách phối hợp tùy mô hình, nhà cung cấp, phiên bản. Với việc trích xuất dữ liệu có cấu trúc, xem thêm [schema và tool_choice](EXAM-05-structured-output.md) cùng kiểm tra dữ liệu, thay vì chỉ cắt bỏ định dạng Markdown.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An adapter parses only the provider's continuation of a prefilled JSON prefix and fails. What should be fixed first?

A. Ignore errors because JSON was requested.

B. Combine prefix and continuation under the contract, then validate.

C. Ask users to add missing content.

D. Stop at the start of the continuation.

**Question 2 — Choose two.** A stop sequence occurs inside a JSON string and truncates output. Which TWO actions are needed?

A. Inspect the marker and stopping state.

B. Treat encountering the marker as proof of complete JSON.

C. Validate and adjust output controls before acceptance.

D. Add closing braces and assume all values are complete.

**Question 3 — Choose one.** A prefill asserts option X is best, and the model defends X. How should this be evaluated?

A. X has independent confirmation.

B. Longer arguments imply greater confidence.

C. The input biased the response; independent evidence is needed.

D. Repeated use of the same prefill removes bias.

**Question 4 — Choose one.** Production changes the sample's model or provider. What should precede reusing prefill configuration?

A. Assume all Claude models share its contract.

B. Change only the model ID and check for text.

C. Remove stop-state handling.

D. Verify target support and contracts and test the adapter.

**Question 5 — Choose two.** Which TWO statements apply when downstream consumers require strict fields and types?

A. Prefill and stops guide output but do not prove business-contract compliance.

B. Removing code fences guarantees schema validity.

C. Use appropriate schema mechanisms plus structural and semantic validation.

D. Any marker replaces validators for short answers.

## Đáp án và giải thích

1. **B.** B sửa cách tái dựng đầu ra. A không tạo dữ liệu dùng được. C đẩy lỗi adapter cho người dùng. D cắt thêm nội dung thay vì khôi phục phần mở đầu.

2. **A, C.** A chẩn đoán điều kiện dừng, C kiểm tra tính đầy đủ. B nhầm dừng sinh với hoàn thành yêu cầu. D có thể tạo JSON parse được nhưng thiếu hoặc sai dữ liệu.

3. **C.** C nhận diện điều kiện đầu vào ảnh hưởng đầu ra. A bỏ ảnh hưởng đó. B độ dài không chứng minh đúng. D lặp cùng thiên lệch không tạo phép đánh giá độc lập.

4. **D.** D kiểm tra tính tương thích cụ thể. A khái quát từ họ model. B smoke text không chứng minh các đặc tính điều khiển. C che trạng thái quan trọng thay vì xử lý khác biệt.

5. **A, C.** A phân biệt điều khiển sinh và tính đúng; C cung cấp kiểm tra cần thiết. B đúng định dạng trình bày không bảo đảm trường/kiểu. D độ dài và marker không xác nhận nội dung nghiệp vụ.

## Đối chiếu Vertex

Mẫu Vertex dùng phần mở đầu tin nhắn assistant và `stop_sequences` trong hàm gọi Messages, khác cấu trúc Converse. Phần đã điền không tự lặp trong văn bản mới. Chuỗi dừng có thể cắt khi dữ liệu chưa hoàn chỉnh; khả năng hỗ trợ phụ thuộc mô hình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Controlling model output](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289160). Bản lưu: `sources/vertex-lessons/289160.json`.
