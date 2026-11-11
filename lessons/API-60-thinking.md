# Extended thinking

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287773), sources/api-lessons/287773.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Chế độ suy luận thêm (thinking) dành thêm xử lý cho những nhiệm vụ khó. Đổi lại, yêu cầu có thể tốn thêm thời gian, chi phí và trả về cấu trúc phức tạp hơn. Hãy đánh giá trên các nhiệm vụ đại diện để biết lợi ích có đáng hay không, thay vì mặc định bật cho mọi câu hỏi.

Phản hồi có thể chứa khối thinking hoặc nội dung không đọc trực tiếp được. Ứng dụng cần giữ và gửi lại các khối theo quy định của mô hình và thư viện đang dùng, đặc biệt không tự sửa thông tin cần bảo toàn như `signature`.

Phần hiển thị cho người dùng không nhất thiết là toàn bộ quá trình suy nghĩ bên trong. Nó cũng không chứng minh kết luận đúng.

Ví dụ: Nếu câu hỏi cần dữ liệu đơn hàng hiện tại, thêm suy luận không tự lấy được dữ liệu ấy. Vẫn phải tra nguồn phù hợp và kiểm tra kết quả. Ngân sách xử lý, cách cấu hình và việc kết hợp với `temperature` hoặc prefill cần được xác minh theo từng mô hình.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Simple classification meets its SLA, while constrained planning often fails. How should the team assess enabling thinking?

A. Enable it globally because more reasoning always reduces costs and latency.

B. Disable it globally because simple tasks already work.

C. Measure benefits and costs by task category and enable it selectively.

D. Compare reasoning length alone.

**Question 2 — Choose two.** An adapter saves only displayed text, breaking later thinking-and-tool turns. Which TWO changes are appropriate?

A. Preserve required signatures and opaque content without editing them.

B. Retain response blocks required by the model and SDK contract.

C. Generate replacement signatures from displayed text hashes.

D. Discard unreadable blocks because users cannot interpret them.

**Question 3 — Choose one.** A bot lacks current order status. Why does increasing thinking budget fail to address the cause?

A. All order errors result from insufficient history-sized budgets.

B. Showing reasoning lets users infer actual status.

C. Thinking is useful only without tools.

D. More reasoning does not supply current data; authoritative lookup and verification are needed.

**Question 4 — Choose two.** Thinking examples move to a different model, retaining old temperature and prefill settings. Which TWO checks precede deployment?

A. Persuasive reasoning alone proves quality.

B. Evaluate representative tasks against preset quality and latency targets.

C. Verify target configuration compatibility and response contracts.

D. Keep all settings because the SDK accepts the object.

**Question 5 — Choose one.** Reasoning looks convincing, but the final sum contradicts the source table. What should determine acceptance?

A. The number of reasoning steps.

B. Independent checks against source values and business rules.

C. A valid signature proving every statement is true.

D. The model's final confidence.

## Đáp án và giải thích

1. **C.** A sai: xử lý bổ sung có thể tăng thời gian/chi phí và chưa chắc tăng độ đúng. B sai: kết quả nhóm đơn giản không đánh giá lợi ích cho nhóm khó đang thất bại. C đúng: thinking không mặc định đem lại cùng lợi ích cho mọi loại yêu cầu. D sai: độ dài không đo chất lượng đáp án hay mức đáp ứng SLA.

2. **A, B.** A đúng: thông tin được ký hoặc không đọc trực tiếp không nên bị biến đổi tùy ý. B đúng: lịch sử giao thức có thể cần dữ liệu ngoài văn bản hiển thị. C sai: ứng dụng không thể tự thay giao thức xác thực của provider bằng hash riêng. D sai: không hiển thị trực tiếp không đồng nghĩa không cần cho giao thức tiếp nối.

3. **D.** A sai: không có căn cứ suy lỗi thiếu nguồn thành lỗi ngân sách. B sai: giải thích quá trình không tạo dữ kiện nghiệp vụ chưa được truy cập. C sai: bài không đặt giới hạn tuyệt đối như vậy; vấn đề là thiếu dữ liệu cần lấy. D đúng: lỗ hổng là bằng chứng đầu vào, không chỉ khả năng xử lý nó.

4. **B, C.** A sai: lập luận hiển thị có thể đi tới kết luận sai và chưa đo yêu cầu vận hành. B đúng: cấu hình hợp lệ chưa chứng minh đáng dùng trong sản phẩm. C đúng: khả năng kết hợp tính năng có thể khác theo mô hình/phiên bản. D sai: đối tượng được tạo không chứng minh dịch vụ hỗ trợ tổ hợp tham số.

5. **B.** A sai: nhiều bước không chứng minh phép tính cuối đúng. B đúng: đầu ra phải đạt yêu cầu thật chứ không chỉ tạo cảm giác tin cậy. C sai: tính toàn vẹn giao thức không xác nhận sự thật nghiệp vụ. D sai: tự tin không thay thế kiểm tra với bằng chứng và tính toán.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse dùng nội dung suy luận, `signature` và `redactedContent` với cấu hình theo mô hình. Phần nhìn thấy không phải toàn bộ suy nghĩ bên trong hoặc bằng chứng đáp án đúng. Giữ các khối theo giao thức; kiểm tra ngân sách và khả năng kết hợp tính năng trước khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276788). Bản lưu: `sources/bedrock-lessons/276788.json`.

## Đối chiếu Vertex

Mẫu có `thinking`, `signature`, `redacted_thinking` và minh họa đánh đổi thời gian, token. Cần so sánh chất lượng trước khi bật. Phần hiển thị không chứng minh kết luận đúng. Cách đặt ngân sách và việc dùng cùng temperature hoặc prefill cần theo mô hình, thư viện thực tế. Bảo toàn khối nội dung và chữ ký theo giao thức. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289197). Bản lưu: `sources/vertex-lessons/289197.json`.
