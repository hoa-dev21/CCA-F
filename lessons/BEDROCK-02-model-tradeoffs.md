# Chọn theo đánh đổi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/303332), sources/bedrock-lessons/303332.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Các mô hình có thể khác nhau về năng lực xử lý, tốc độ và chi phí. Chọn mô hình cần dựa trên yêu cầu công việc và kết quả đánh giá, không mặc định luôn dùng loại mạnh nhất hoặc rẻ nhất.

Ví dụ: Bước trả lời nhanh một câu đơn giản và bước phân tích một vấn đề khó có nhu cầu khác nhau. Bạn có thể thử mô hình phù hợp cho từng bước, đo chất lượng và thời gian phản hồi, rồi xem lợi ích có bù được công sức quản lý nhiều cấu hình hay không.

Nếu thêm bộ điều phối để chọn mô hình theo yêu cầu, hệ thống cũng phức tạp hơn. Chỉ nên thêm khi có lợi ích rõ từ kết quả đo.

Tên và mã mô hình, vùng hỗ trợ, giá và khả năng suy luận thêm trong khóa thuộc thời điểm giảng. Không nên sao chép mã mô hình rồi mặc định nó dùng được ở mọi vùng, hoặc cho rằng mọi mô hình trong cùng một họ đều có tính năng giống nhau. Chi tiết so sánh hiệu năng mô hình không phải trọng tâm đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A system combines fast simple classification with occasional difficult analysis. Which model-selection approach should be evaluated?

A. Use the largest model everywhere without measurement.

B. Measure each step and include model-orchestration costs.

C. Use the cheapest model everywhere because analysis is infrequent.

D. Split traffic equally between two models.

**Question 2 — Choose two.** A model router reduces API spending but increases classification and operational errors. Which TWO measurements are needed?

A. End-to-end cost including routing, retries, and main tasks.

B. Only the cheaper model's token price.

C. End-to-end quality and latency by task category.

D. Community model popularity.

**Question 3 — Choose one.** A video's model ID is unavailable in the production region. What should happen next?

A. Use the old region and assume account permissions match.

B. Select the closest family name without checking configuration.

C. Verify target model ID or profile, region, and permissions.

D. Retry until provisioning completes automatically.

**Question 4 — Choose one.** A pricier model leads general benchmarks but fails rare extraction fields locally. What should guide selection?

A. General benchmarks over internal data.

B. Real workload evaluation including rare-field failures.

C. Price as confidence in every result.

D. Remove review because the model is more capable.

**Question 5 — Choose two.** Which TWO checks precede replacing a model with another in the same family?

A. Support for the workload's required features and requests.

B. Target-region and account access permissions.

C. A shared name prefix guarantees identical limits.

D. A newer model preserves every old behavior automatically.

## Đáp án và giải thích

1. **B.** B đo theo yêu cầu và tổng chi phí hệ thống. A bỏ tradeoff. C chi phí thấp không chứng minh đạt chất lượng. D chia tải không xét mức khó hoặc SLA của tác vụ.

2. **A, C.** A đo tiết kiệm thực, C kiểm tra tác động lên kết quả. B bỏ chi phí bổ sung. D độ phổ biến không chứng minh phù hợp workload riêng.

3. **C.** C kiểm tra khả năng truy cập trong môi trường thật. A có thể sửa vùng nhưng bỏ qua tài khoản/quyền. B suy tương thích từ tên họ, chưa xác minh hỗ trợ. D retry chỉ hữu ích khi đã có căn cứ lỗi tạm thời.

4. **B.** B kiểm tra chất lượng phù hợp mục tiêu. A có thể bỏ khác biệt phân phối dữ liệu. C giá không là xác suất đúng. D năng lực chung không xóa lỗi đã quan sát.

5. **A, B.** A kiểm tra tương thích chức năng, B kiểm tra triển khai được. C/D là giả định về dòng sản phẩm, không thay thế xác minh hợp đồng và môi trường.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ ban đầu dùng ghi chú chính thức cho trợ lý khóa học, khóa `1p`, tiêu đề “Overview of Claude Models”, không phải bản chép video. Ghi chú giới thiệu Opus, Sonnet, Haiku theo năng lực, tốc độ, chi phí và gợi ý chọn mô hình theo từng bước. Nhận định về suy luận hoặc làm việc nhiều giờ thuộc thời điểm nguồn, không phải giới hạn hay cam kết hiện hành. Dùng đánh giá thực tế để lựa chọn; dùng chung câu hỏi.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287722); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/api-287722.json`.

## Bổ sung từ ghi chú khóa học chính thức

Nguồn là ghi chú chính thức cho trợ lý, khóa `vertex`, tiêu đề “Overview of Claude Models”, khác bản chép video. Ghi chú cũng chọn mô hình theo yêu cầu và gợi ý kết hợp nhiều mô hình. Không học thuộc câu “Haiku không có suy luận” như quy tắc hiện hành cho mọi phiên bản. Chọn theo số đo nhiệm vụ và khả năng hỗ trợ của dự án. Dùng chung câu hỏi.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/vertex-289146.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đọc toàn bộ phụ đề ghi nhận bản Vertex trùng nguyên văn nguồn API 287722. Dùng chung câu hỏi, đồng thời giữ lưu ý về xác thực, nhà cung cấp và tương thích mô hình.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146). Bản lưu: `sources/vertex-media/289146.json`.
