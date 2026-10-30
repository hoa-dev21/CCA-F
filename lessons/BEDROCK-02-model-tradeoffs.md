# Overview of Claude Models — Chọn theo đánh đổi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/303332), sources/bedrock-lessons/303332.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Tóm tắt

Bài giới thiệu các phân khúc model theo năng lực, tốc độ và chi phí, và khả năng dùng model khác nhau cho các phần của ứng dụng. Quyết định nên dựa trên yêu cầu và đánh giá chứ không mặc định luôn dùng lựa chọn mạnh nhất hoặc rẻ nhất.

Tên model, ID, vùng triển khai, giá và khả năng thinking được trang khóa mô tả là thông tin thay đổi theo phiên bản. Bản ôn này không xác nhận danh mục model hiện hành, không khuyến nghị sao chép ID từ video và không suy rằng mọi model của một họ có cùng khả năng.

Có thể dùng một cấu hình đáp ứng tương tác nhanh và một cấu hình cho phần phân tích khó nếu phép đo cho thấy lợi ích. Đưa thêm router chỉ khi lợi ích đủ bù độ phức tạp. Benchmark/model comparison chi tiết không thuộc trọng tâm Exam Guide đã tải.

## Câu hỏi

Ngoài ghi chú chính thức được dẫn bên dưới, đã đọc toàn bộ phụ đề của bài API “Overview of Claude models”, sources/api-media/287722.json. Phụ đề xác nhận khung đánh đổi và việc có thể phân model theo bước; những mô tả capability theo họ model trong video vẫn là nội dung theo thời điểm, không phải danh mục hiện hành đã xác minh.

**1. Chọn một.** Hai bước có yêu cầu độ trễ và độ khó rất khác nhau. Cách lựa chọn phù hợp?

A. Luôn dùng một model bất kể đo lường.

B. Chọn theo màu thương hiệu.

C. Không cần eval.

D. Đánh giá từng bước, cân nhắc model phù hợp và chi phí điều phối.

**2. Chọn một.** Model ID trong khóa có nên mặc định dùng được ở mọi vùng hiện tại?

A. Không; kiểm tra hỗ trợ và cấu hình môi trường thực tế.

B. Có, mọi ID bất biến.

C. Có, tên model thay quyền truy cập.

D. Có, không cần kiểm tra.

**3. Chọn một.** Chọn model đắt nhất có tự chứng minh hệ thống đúng không?

A. Có, mọi nguồn đều không cần.

B. Không; vẫn cần dữ liệu, hợp đồng và kiểm chứng kết quả.

C. Có, không cần tools.

D. Có, không cần test.

## Đáp án

1. **D.** D cân bằng yêu cầu; A cứng nhắc, B không liên quan, C bỏ bằng chứng.

2. **A.** A xác minh triển khai; B và D giả định không đổi, C nhầm định danh với quyền.

3. **B.** B giữ các yếu tố ứng dụng; A, C, D bỏ grounding và xác minh.

## Bổ sung từ ghi chú khóa học chính thức

Mục [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287722) được đối chiếu qua ghi chú do trang khóa cung cấp cho trợ lý của khóa, key 1p, tiêu đề “Overview of Claude Models”; nguồn [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: sources/official-note-lessons/api-287722.json. Đây là ghi chú tóm tắt chính thức, không phải bản chép video đã xem. Ghi chú giới thiệu Opus/Sonnet/Haiku theo đánh đổi intelligence/speed/cost và phân model theo bước. Các câu về thinking hoặc làm việc nhiều giờ là mô tả theo thời điểm, không là giới hạn/bảo đảm hiện hành; giữ nguyên tắc chọn qua eval. Dùng chung câu hỏi khái niệm.

## Bổ sung từ ghi chú khóa học chính thức

Mục [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146) được đối chiếu qua ghi chú do trang khóa cung cấp cho trợ lý của khóa, key vertex, tiêu đề “Overview of Claude Models”; nguồn [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: sources/official-note-lessons/vertex-289146.json. Đây là ghi chú tóm tắt chính thức, không phải bản chép video đã xem. Ghi chú Vertex cũng phân model theo yêu cầu và gợi ý dùng nhiều model. Không học thuộc tuyên bố Haiku không có reasoning như quy tắc hiện hành cho mọi phiên bản. Chọn theo số đo của tác vụ và hỗ trợ của project. Dùng chung câu hỏi khái niệm.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Overview of Claude models](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289146), sources/vertex-media/289146.json. Đối chiếu toàn bộ phụ đề với nguồn API287722 đã đọc: trùng nguyên văn. Giữ các lưu ý về xác thực/provider và tính tương thích model của bài chung. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
