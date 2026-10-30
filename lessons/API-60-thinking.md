# Extended thinking

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287773), sources/api-lessons/287773.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Bài giới thiệu dành thêm xử lý suy luận cho tác vụ khó, đổi lại chi phí, độ trễ và cấu trúc phản hồi phức tạp hơn. Dùng eval để biết lợi ích thực tế thay vì mặc định bật cho mọi request.

Phản hồi có thể có các blocks thinking hoặc dạng không đọc được; ứng dụng phải giữ và truyền lại theo hợp đồng model/SDK, không tự sửa dữ liệu bảo toàn như signature. Không coi phần được hiển thị là toàn bộ chuỗi suy nghĩ nội bộ hay là chứng minh kết luận đúng.

Budget, kiểu cấu hình và tương thích temperature/prefill khác theo model. Mã minh họa trong khóa không phải hướng dẫn hiện hành cho mọi model. More thinking không thay tool results, dữ liệu thiếu hoặc review độc lập.

## Câu hỏi

**1. Chọn một.** Muốn quyết định có dùng thêm suy luận cho tác vụ khó không. Bằng chứng phù hợp?

A. Chỉ tên tính năng.

B. Eval chất lượng cùng chi phí/độ trễ trên tác vụ đại diện.

C. Chỉ câu trả lời dài.

D. Chỉ bật mọi thứ.

**2. Chọn một.** Model thiếu dữ liệu backend hiện tại. Thinking nhiều hơn có tự lấy dữ liệu đó không?

A. Có, mọi nguồn nằm trong suy luận.

B. Có, không cần tích hợp.

C. Không; vẫn cần truy xuất dữ liệu phù hợp.

D. Có, nếu budget lớn.

**3. Chọn một.** Một response có block không đọc được và metadata cần bảo toàn. Ứng dụng nên làm gì?

A. Xử lý/giữ theo hợp đồng hỗ trợ thay vì tự sửa hoặc bỏ tùy tiện.

B. Tự tạo signature mới bằng đoán.

C. Coi block đó là lỗi nghiệp vụ chắc chắn.

D. Thay mọi nội dung bằng text trống.

## Đáp án

1. **B.** B đo đánh đổi; A và C là tín hiệu không đủ, D bỏ nhu cầu.

2. **C.** C giữ grounding; A, B, D nhầm compute với truy cập nguồn.

3. **A.** A bảo toàn luồng; B giả mạo metadata, C kết luận không căn cứ, D mất trạng thái.

## Đối chiếu tính năng trên Bedrock

Đã đọc [Extended thinking](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276788), sources/bedrock-lessons/276788.json. Mẫu Converse dùng reasoning content/signature/redactedContent và cấu hình model-specific. Không coi phần hiển thị là toàn bộ suy nghĩ nội bộ hay bằng chứng correctness; giữ blocks theo hợp đồng. Budget/tính tương thích phải kiểm tra khi triển khai. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Đối chiếu Vertex

Đã đọc [Extended thinking](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289197), sources/vertex-lessons/289197.json. Bài minh họa thinking/signature/redacted_thinking và trade-off latency/token; so sánh eval trước khi bật. Phần hiển thị không là toàn bộ suy nghĩ nội bộ hay bằng chứng correctness. Budget/cú pháp budget trong video và tương thích temperature/prefill cần kiểm tra theo SDK/model, không sao chép như contract hiện hành. Giữ blocks/signatures theo giao thức. Dùng chung câu hỏi khái niệm.
