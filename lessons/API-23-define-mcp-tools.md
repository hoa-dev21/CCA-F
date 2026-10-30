# Defining tools with MCP — Mô tả hàm và tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287797), sources/api-lessons/287797.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài dùng Python SDK và decorator để khai báo tool đọc, sửa tài liệu. Type hints cùng mô tả tham số giúp SDK tạo schema, giảm phần mã khai báo lặp lại.

Tên và description nêu chức năng. Tham số `doc_id` xác định tài liệu; với thao tác thay chuỗi, cần mô tả rõ chuỗi cũ phải khớp chính xác, kể cả khoảng trắng. Hợp đồng chi tiết giúp mô hình tạo lời gọi phù hợp.

SDK hỗ trợ lớp protocol và validation tham số; logic nghiệp vụ vẫn thuộc hàm của ứng dụng. Nếu tài liệu không tồn tại, mẫu trả lỗi mô tả thay vì bịa nội dung. Kiểm tra kiểu tham số không thay thế kiểm tra tài liệu tồn tại.

Ví dụ dùng dictionary trong bộ nhớ để minh họa, không phải thiết kế lưu trữ production. Cần hiểu kiến trúc và hợp đồng, không học thuộc toàn bộ cú pháp SDK.

## Câu hỏi

**1. Chọn một.** SDK tạo schema từ type hints có thay thế logic sửa tài liệu không?

A. Có, mọi nghiệp vụ tự được sinh.

B. Có, chỉ cần đặt tên hàm.

C. Không, hàm vẫn phải triển khai hành động thực tế.

D. Không cần hàm nếu có description dài.

**2. Chọn một.** Tool yêu cầu chuỗi khớp cả khoảng trắng. Nên mô tả ở đâu?

A. Trong mô tả tham số liên quan.

B. Chỉ ở một cuộc họp không được ghi lại.

C. Không cần mô tả.

D. Thay trong tên người dùng.

**3. Chọn một.** `doc_id` là chuỗi hợp lệ nhưng không tồn tại. Hệ thống nên làm gì theo mẫu?

A. Tự tạo nội dung rồi coi là tài liệu gốc.

B. Trả lỗi có mô tả để nhận biết tình trạng.

C. Luôn trả thành công rỗng.

D. Đọc tài liệu bất kỳ khác.

## Đáp án

1. **C.** A, B, D nhầm khai báo giao diện với thực thi nghiệp vụ.
2. **A.** B không cung cấp thông tin cho mô hình; C bỏ điều kiện quan trọng; D không mô tả hợp đồng.
3. **B.** A bịa nội dung; C che lỗi; D trả sai đối tượng.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [Defining tools with MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296697) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296697.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276800), sources/bedrock-lessons/276800.json và đối chiếu với bài chung. Cùng decorator, type hints và Field tạo schema đọc/sửa tài liệu. Python replace trong ví dụ là thao tác đơn giản, không chứng minh uniqueness hay hợp đồng production. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Defining tools with MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289235), sources/vertex-lessons/289235.json. FastMCP decorator và typed arguments sinh schema; vẫn cần domain validation/authorization. edit_document dùng str.replace có thể thay mọi lần khớp, không báo khi old_str vắng; thêm guard nếu contract đòi một lần khớp duy nhất. Mẫu add_ints thiếu kiểu tham số không nên coi là schema đầy đủ đã kiểm thử. Dùng chung câu hỏi khái niệm.
