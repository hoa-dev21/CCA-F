# Chọn theo đánh đổi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/303332), sources/bedrock-lessons/303332.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Các mô hình có thể khác nhau về năng lực xử lý, tốc độ và chi phí. Chọn mô hình cần dựa trên yêu cầu công việc và kết quả đánh giá, không mặc định luôn dùng loại mạnh nhất hoặc rẻ nhất.

Ví dụ: Bước trả lời nhanh một câu đơn giản và bước phân tích một vấn đề khó có nhu cầu khác nhau. Bạn có thể thử mô hình phù hợp cho từng bước, đo chất lượng và thời gian phản hồi, rồi xem lợi ích có bù được công sức quản lý nhiều cấu hình hay không.

Nếu thêm bộ điều phối để chọn mô hình theo yêu cầu, hệ thống cũng phức tạp hơn. Chỉ nên thêm khi có lợi ích rõ từ kết quả đo.

Tên và mã mô hình, vùng hỗ trợ, giá và khả năng suy luận thêm trong khóa thuộc thời điểm giảng. Không nên sao chép mã mô hình rồi mặc định nó dùng được ở mọi vùng, hoặc cho rằng mọi mô hình trong cùng một họ đều có tính năng giống nhau. Chi tiết so sánh hiệu năng mô hình không phải trọng tâm đề cương thi đã lưu.

## Câu hỏi

Ngoài ghi chú chính thức được dẫn bên dưới, đã đọc toàn bộ phụ đề của bài API “Overview of Claude models”, sources/api-media/287722.json. Phụ đề xác nhận khung đánh đổi và việc có thể phân mô hình theo bước; những mô tả capability theo họ mô hình trong video vẫn là nội dung theo thời điểm, không phải danh mục hiện hành đã xác minh.

**1. Chọn một.** Hai bước có yêu cầu độ trễ và độ khó rất khác nhau. Cách lựa chọn phù hợp?

A. Luôn dùng một mô hình bất kể đo lường.

B. Chọn theo màu thương hiệu.

C. Không cần phép đánh giá.

D. Đánh giá từng bước, cân nhắc mô hình phù hợp và chi phí điều phối.

**2. Chọn một.** Mô hình ID trong khóa có nên mặc định dùng được ở mọi vùng hiện tại?

A. Không; kiểm tra hỗ trợ và cấu hình môi trường thực tế.

B. Có, mọi ID bất biến.

C. Có, tên mô hình thay quyền truy cập.

D. Có, không cần kiểm tra.

**3. Chọn một.** Chọn mô hình đắt nhất có tự chứng minh hệ thống đúng không?

A. Có, mọi nguồn đều không cần.

B. Không; vẫn cần dữ liệu, hợp đồng và kiểm chứng kết quả.

C. Có, không cần các công cụ.

D. Có, không cần test.

## Đáp án

1. **D.** D cân bằng yêu cầu; A cứng nhắc, B không liên quan, C bỏ bằng chứng.

2. **A.** A xác minh triển khai; B và D giả định không đổi, C nhầm định danh với quyền.

3. **B.** B giữ các yếu tố ứng dụng; A, C, D bỏ đối chiếu dữ liệu nguồn và xác minh.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ ban đầu dùng ghi chú chính thức cho trợ lý khóa học, khóa `1p`, tiêu đề “Overview of Claude Models”, không phải bản chép video. Ghi chú giới thiệu Opus, Sonnet, Haiku theo năng lực, tốc độ, chi phí và gợi ý chọn mô hình theo từng bước. Nhận định về suy luận hoặc làm việc nhiều giờ thuộc thời điểm nguồn, không phải giới hạn hay cam kết hiện hành. Dùng đánh giá thực tế để lựa chọn; dùng chung câu hỏi.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287722); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/api-287722.json`.

## Bổ sung từ ghi chú khóa học chính thức

Nguồn là ghi chú chính thức cho trợ lý, khóa `vertex`, tiêu đề “Overview of Claude Models”, khác bản chép video. Ghi chú cũng chọn mô hình theo yêu cầu và gợi ý kết hợp nhiều mô hình. Không học thuộc câu “Haiku không có suy luận” như quy tắc hiện hành cho mọi phiên bản. Chọn theo số đo nhiệm vụ và khả năng hỗ trợ của dự án. Dùng chung câu hỏi.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/vertex-289146.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đọc toàn bộ phụ đề ghi nhận bản Vertex trùng nguyên văn nguồn API 287722. Dùng chung câu hỏi, đồng thời giữ lưu ý về xác thực, nhà cung cấp và tương thích mô hình.

Nguồn đối chiếu: [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146). Bản lưu: `sources/vertex-media/289146.json`.
