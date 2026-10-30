# The server inspector — Kiểm tra MCP server độc lập

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287781), sources/api-lessons/287781.json. Câu hỏi tự biên soạn.

## Tóm tắt

Inspector giúp thử khả năng của MCP server mà chưa phải nối toàn bộ ứng dụng với Claude. Có thể liệt kê tools, chọn tool, nhập tham số rồi xem kết quả. Nhờ đó tách lỗi ở server khỏi lỗi điều phối hoặc lựa chọn tool của mô hình.

Với tool sửa tài liệu, chỉ nhìn thông báo thực thi chưa đủ để kiểm chứng nội dung. Bài gợi ý gọi công cụ đọc sau sửa để xem thay đổi thực tế. Quy trình phát triển là sửa mã, thử từng công cụ, kiểm tra kết quả và gỡ lỗi độc lập.

Giao diện inspector và lệnh khởi chạy trong bài có thể thay đổi theo phiên bản. Phần quan trọng cho kiến trúc là **cô lập tầng lỗi** và **xác minh trạng thái sau thao tác**, không phải học thuộc cổng dịch vụ phát triển.

## Câu hỏi

**1. Chọn một.** Chatbot báo không đọc được tài liệu. Bạn muốn xác định tool server có hoạt động không. Bước nào cô lập tầng lỗi tốt nhất?

A. Đổi prompt chatbot và chạy lại mọi thứ.

B. Nâng model trước khi kiểm tra server.

C. Gọi trực tiếp tool với tham số đã biết qua inspector.

D. Chỉ đọc câu trả lời tự đánh giá của chatbot.

**2. Chọn một.** Tool sửa trả “success”. Cách xác minh sát ví dụ trong bài?

A. Đọc lại tài liệu qua tool và đối chiếu nội dung.

B. Chỉ kiểm tra thời gian chạy.

C. Giả định success chứng minh mọi yêu cầu nội dung.

D. Chạy lại tool sửa mà không xem trạng thái.

**3. Chọn một.** Tool chạy đúng trong inspector nhưng chatbot không gọi nó. Nên điều tra tiếp ở đâu?

A. Chỉ viết lại mã lưu trữ dù đã kiểm tra đúng.

B. Bỏ server và trả dữ liệu hard-code.

C. Coi inspector là kiểm thử toàn bộ ứng dụng đã đạt.

D. Kiểm tra công bố schema, mô tả và luồng điều phối phía ứng dụng.

## Đáp án

1. **C.** A và B thay tầng khác trước khi cô lập; D không quan sát trực tiếp tool.
2. **A.** B không kiểm tra nội dung; C suy rộng từ thông báo; D lặp thao tác thay vì xác minh.
3. **D.** Tool đúng riêng lẻ chưa chứng minh tích hợp. A sửa tầng chưa có bằng chứng lỗi; B che vấn đề; C nhầm kiểm thử thành phần với đầu-cuối.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [The server inspector](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296693) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296693.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [The server inspector](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276796), sources/bedrock-lessons/276796.json và đối chiếu với bài chung. Cùng thử tool độc lập rồi đọc lại để xác minh sửa. Cổng/UI inspector có thể khác theo phiên bản; không học thuộc cổng thay phương pháp kiểm tra. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [The server inspector](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289207), sources/vertex-lessons/289207.json. Inspector kiểm tra discovery, arguments, execution và đọc lại sau edit. Giao diện/port thay đổi; test trực tiếp không chứng minh model chọn đúng tool, cần end-to-end cả lỗi/đầu vào không hợp lệ. Dùng chung câu hỏi khái niệm.
