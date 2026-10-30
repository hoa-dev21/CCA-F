# Defining prompts — Đóng gói mẫu hướng dẫn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287784), sources/api-lessons/287784.json. Câu hỏi tự biên soạn.

## Tóm tắt

MCP prompts là các mẫu hướng dẫn có thể tái sử dụng, trả về danh sách messages để client dùng với mô hình. Tác giả server có thể đóng gói hướng dẫn chuyên môn đã kiểm thử thay cho yêu cầu ngắn, mơ hồ của từng người dùng.

Ví dụ của khóa là mẫu định dạng tài liệu sang Markdown: nhận `doc_id`, chèn vào chỉ dẫn, nêu yêu cầu cấu trúc và sử dụng công cụ chỉnh sửa. Prompt trả hướng dẫn, không tự chứng minh tài liệu đã được chỉnh sửa.

Kiểm tra bằng inspector giúp nhìn thấy messages được tạo sau khi thay tham số. Cần kiểm tra đúng ID, nội dung hướng dẫn và cấu trúc message. Chất lượng prompt còn cần đánh giá khi chạy trên dữ liệu thực tế; việc template tạo được chuỗi chưa đủ.

Chọn tác vụ liên quan trực tiếp tới server, đặt mô tả rõ và thiết kế phù hợp tools/resources có sẵn.

## Câu hỏi

**1. Chọn một.** Client lấy prompt “format” thành công. Điều gì đã xảy ra chắc chắn theo bài?

A. Mọi tài liệu đã được sửa xong.

B. Backend đã tự chạy mọi tool.

C. Server đã trả messages của mẫu hướng dẫn.

D. Không cần gửi gì cho Claude.

**2. Chọn một.** Muốn kiểm tra `doc_id` được chèn đúng trước tích hợp, làm gì?

A. Dùng inspector lấy prompt với tham số và xem messages.

B. Chỉ đọc tên decorator.

C. Bỏ tham số để đoán giá trị.

D. Đếm số ký tự description.

**3. Chọn một.** Mẫu hướng dẫn có giá trị nhất khi nào?

A. Càng mơ hồ càng tốt.

B. Không liên quan chức năng server.

C. Luôn bỏ mọi công cụ hiện có.

D. Thể hiện hướng dẫn chuyên môn cụ thể, liên quan và đã kiểm thử.

## Đáp án

1. **C.** A và B nhầm tạo hướng dẫn với thực thi; D bỏ bước chạy với mô hình.
2. **A.** B và D không kiểm tra nội dung được tạo; C không xác minh thay tham số.
3. **D.** A tăng mơ hồ; B thiếu giá trị tác vụ; C bỏ khả năng hỗ trợ thực thi.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [Defining prompts](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296698) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296698.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Defining prompts](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276801), sources/bedrock-lessons/276801.json và đối chiếu với bài chung. Cùng prompt trả messages và interpolation; import path SDK trong bài cần kiểm tra theo bản đang dùng. Template tạo đúng không chứng minh thao tác sửa tài liệu đã chạy. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Defining prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289249), sources/vertex-lessons/289249.json. Decorator prompt trả danh sách messages với tham số doc_id. Template tái sử dụng không tự thực hiện edit; model/host phải chạy vòng tools đúng quyền. Tuyên bố reliable every time chỉ là lợi ích mong muốn, không bảo đảm chất lượng mọi input. Dùng chung câu hỏi khái niệm.
