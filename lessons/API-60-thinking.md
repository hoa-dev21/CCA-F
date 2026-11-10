# Extended thinking

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287773), sources/api-lessons/287773.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Chế độ suy luận thêm (thinking) dành thêm xử lý cho những nhiệm vụ khó. Đổi lại, yêu cầu có thể tốn thêm thời gian, chi phí và trả về cấu trúc phức tạp hơn. Hãy đánh giá trên các nhiệm vụ đại diện để biết lợi ích có đáng hay không, thay vì mặc định bật cho mọi câu hỏi.

Phản hồi có thể chứa khối thinking hoặc nội dung không đọc trực tiếp được. Ứng dụng cần giữ và gửi lại các khối theo quy định của mô hình và thư viện đang dùng, đặc biệt không tự sửa thông tin cần bảo toàn như `signature`.

Phần hiển thị cho người dùng không nhất thiết là toàn bộ quá trình suy nghĩ bên trong. Nó cũng không chứng minh kết luận đúng.

Ví dụ: Nếu câu hỏi cần dữ liệu đơn hàng hiện tại, thêm suy luận không tự lấy được dữ liệu ấy. Vẫn phải tra nguồn phù hợp và kiểm tra kết quả. Ngân sách xử lý, cách cấu hình và việc kết hợp với `temperature` hoặc prefill cần được xác minh theo từng mô hình.

## Câu hỏi

**1. Chọn một.** Muốn quyết định có dùng thêm suy luận cho tác vụ khó không. Bằng chứng phù hợp?

A. Chỉ tên tính năng.

B. Phép đánh giá chất lượng cùng chi phí/độ trễ trên tác vụ đại diện.

C. Chỉ câu trả lời dài.

D. Chỉ bật mọi thứ.

**2. Chọn một.** Mô hình thiếu dữ liệu hệ thống xử lý phía máy chủ hiện tại. Thinking nhiều hơn có tự lấy dữ liệu đó không?

A. Có, mọi nguồn nằm trong suy luận.

B. Có, không cần tích hợp.

C. Không; vẫn cần truy xuất dữ liệu phù hợp.

D. Có, nếu budget lớn.

**3. Chọn một.** Một phản hồi có block không đọc được và thông tin mô tả cần bảo toàn. Ứng dụng nên làm gì?

A. Xử lý/giữ theo hợp đồng hỗ trợ thay vì tự sửa hoặc bỏ tùy tiện.

B. Tự tạo signature mới bằng đoán.

C. Coi block đó là lỗi nghiệp vụ chắc chắn.

D. Thay mọi nội dung bằng text trống.

## Đáp án

1. **B.** B đo đánh đổi; A và C là tín hiệu không đủ, D bỏ nhu cầu.

2. **C.** C giữ đối chiếu dữ liệu nguồn; A, B, D nhầm compute với truy cập nguồn.

3. **A.** A bảo toàn luồng; B giả mạo thông tin mô tả, C kết luận không căn cứ, D mất trạng thái.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse dùng nội dung suy luận, `signature` và `redactedContent` với cấu hình theo mô hình. Phần nhìn thấy không phải toàn bộ suy nghĩ bên trong hoặc bằng chứng đáp án đúng. Giữ các khối theo giao thức; kiểm tra ngân sách và khả năng kết hợp tính năng trước khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276788). Bản lưu: `sources/bedrock-lessons/276788.json`.

## Đối chiếu Vertex

Mẫu có `thinking`, `signature`, `redacted_thinking` và minh họa đánh đổi thời gian, token. Cần so sánh chất lượng trước khi bật. Phần hiển thị không chứng minh kết luận đúng. Cách đặt ngân sách và việc dùng cùng temperature hoặc prefill cần theo mô hình, thư viện thực tế. Bảo toàn khối nội dung và chữ ký theo giao thức. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289197). Bản lưu: `sources/vertex-lessons/289197.json`.
