# Chọn theo đánh đổi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/303332), sources/bedrock-lessons/303332.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Các mô hình có thể khác nhau về năng lực xử lý, tốc độ và chi phí. Chọn mô hình cần dựa trên yêu cầu công việc và kết quả đánh giá, không mặc định luôn dùng loại mạnh nhất hoặc rẻ nhất.

Ví dụ: Bước trả lời nhanh một câu đơn giản và bước phân tích một vấn đề khó có nhu cầu khác nhau. Bạn có thể thử mô hình phù hợp cho từng bước, đo chất lượng và thời gian phản hồi, rồi xem lợi ích có bù được công sức quản lý nhiều cấu hình hay không.

Nếu thêm bộ điều phối để chọn mô hình theo yêu cầu, hệ thống cũng phức tạp hơn. Chỉ nên thêm khi có lợi ích rõ từ kết quả đo.

Tên và mã mô hình, vùng hỗ trợ, giá và khả năng suy luận thêm trong khóa thuộc thời điểm giảng. Không nên sao chép mã mô hình rồi mặc định nó dùng được ở mọi vùng, hoặc cho rằng mọi mô hình trong cùng một họ đều có tính năng giống nhau. Chi tiết so sánh hiệu năng mô hình không phải trọng tâm đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một hệ có bước phân loại đơn giản cần phản hồi nhanh và bước phân tích khó chạy ít lần. Nhóm muốn chọn mô hình với chi phí hợp lý. Thiết kế nào nên đánh giá?

A. Dùng mô hình lớn nhất cho cả hai để bỏ mọi phép đo.

B. Đo từng bước và tính cả chi phí điều phối model.

C. Dùng mô hình rẻ nhất cho cả hai vì phân tích chạy ít.

D. Chia đều tải cho hai model khác nhau.

**Câu 2 — Chọn hai.** Router chọn mô hình giúp tiết kiệm tiền gọi API nhưng tăng lỗi phân loại và vận hành. Hai loại số liệu nào cần trước khi giữ router?

A. Chi phí toàn luồng gồm router, retry và tác vụ chính.

B. Chỉ giá mỗi token của mô hình rẻ hơn.

C. Chất lượng end-to-end và độ trễ theo các nhóm tác vụ.

D. Tên model được dùng phổ biến trong cộng đồng.

**Câu 3 — Chọn một.** Mã model trong video báo không khả dụng tại vùng production. Bước tiếp theo nên là gì?

A. Giữ ID từ video, đổi sang vùng cũ rồi mặc định quyền tài khoản cũng giống nhau.

B. Chọn model cùng họ có tên gần nhất, giữ nguyên mọi cấu hình và quyền.

C. Kiểm tra ID/profile, vùng và quyền môi trường đích.

D. Retry cùng ID đến khi provisioning tự hoàn tất.

**Câu 4 — Chọn một.** Mô hình đắt hơn đạt benchmark chung cao nhưng trên mẫu trích xuất của nhóm vẫn sai trường hiếm. Quyết định nào có cơ sở?

A. Ưu tiên benchmark chung hơn tập nội bộ.

B. Đánh giá workload thật, gồm lỗi trường hiếm.

C. Coi mức giá cao như tín hiệu confidence cho mọi đầu ra.

D. Giữ prompt hiện tại và bỏ review vì mô hình có năng lực cao hơn.

**Câu 5 — Chọn hai.** Hai model cùng một họ được cân nhắc thay thế cho nhau. Hai điều nào cần kiểm tra thay vì suy từ tên họ?

A. Các tính năng/request mà workload cần có được hỗ trợ trên model đích.

B. Cấu hình vùng/tài khoản có quyền truy cập model đích.

C. Có cùng tiền tố tên nghĩa là mọi giới hạn giống nhau.

D. Model ra sau tự động giữ nguyên mọi hành vi của model cũ.

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
