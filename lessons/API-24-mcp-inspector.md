# Kiểm tra MCP server độc lập

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287781), sources/api-lessons/287781.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP Inspector giúp thử MCP server trực tiếp, trước khi tích hợp toàn bộ ứng dụng với Claude. Bạn có thể xem danh sách công cụ, chọn công cụ, nhập đầu vào và xem kết quả.

Ví dụ: Chatbot không đọc được tài liệu. Hãy thử gọi công cụ đọc với một mã tài liệu đã biết trong Inspector. Nếu công cụ vẫn lỗi, cần xem server hoặc dữ liệu. Nếu công cụ chạy đúng nhưng chatbot không gọi nó, cần kiểm tra cách ứng dụng cung cấp định nghĩa công cụ và xử lý yêu cầu của Claude.

Với thao tác sửa tài liệu, thông báo “success” chưa đủ để biết nội dung đã đúng. Hãy dùng công cụ đọc lại tài liệu và đối chiếu với thay đổi mong muốn. Quy trình phát triển gồm sửa mã, thử thao tác, xem trạng thái thực tế và tìm nguyên nhân lỗi.

Giao diện và lệnh khởi chạy Inspector có thể thay đổi theo phiên bản. Điều chính cần học là thử riêng từng phần của hệ thống và kiểm tra kết quả sau thao tác.

## Câu hỏi

**1. Chọn một.** Chatbot báo không đọc được tài liệu. Bạn muốn xác định công cụ server có hoạt động không. Bước nào cô lập tầng lỗi tốt nhất?

A. Đổi prompt chatbot và chạy lại mọi thứ.

B. Nâng mô hình trước khi kiểm tra server.

C. Gọi trực tiếp công cụ với tham số đã biết qua inspector.

D. Chỉ đọc câu trả lời tự đánh giá của chatbot.

**2. Chọn một.** Công cụ sửa trả “success”. Cách xác minh sát ví dụ trong bài?

A. Đọc lại tài liệu qua công cụ và đối chiếu nội dung.

B. Chỉ kiểm tra thời gian chạy.

C. Giả định success chứng minh mọi yêu cầu nội dung.

D. Chạy lại công cụ sửa mà không xem trạng thái.

**3. Chọn một.** Công cụ chạy đúng trong inspector nhưng chatbot không gọi nó. Nên điều tra tiếp ở đâu?

A. Chỉ viết lại mã lưu trữ dù đã kiểm tra đúng.

B. Bỏ server và trả dữ liệu hard-code.

C. Coi inspector là kiểm thử toàn bộ ứng dụng đã đạt.

D. Kiểm tra công bố bản mô tả cấu trúc dữ liệu, mô tả và luồng điều phối phía ứng dụng.

## Đáp án

1. **C.** A và B thay tầng khác trước khi cô lập; D không quan sát trực tiếp công cụ.
2. **A.** B không kiểm tra nội dung; C suy rộng từ thông báo; D lặp thao tác thay vì xác minh.
3. **D.** Công cụ đúng riêng lẻ chưa chứng minh tích hợp. A sửa tầng chưa có bằng chứng lỗi; B che vấn đề; C nhầm kiểm thử thành phần với đầu-cuối.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296693). Bản lưu: `sources/mcp-lessons/296693.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cũng thử riêng công cụ rồi đọc lại tài liệu để xác minh thay đổi. Cổng và giao diện Inspector có thể đổi theo phiên bản; điều cần học là phương pháp kiểm tra. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276796). Bản lưu: `sources/bedrock-lessons/276796.json`.

## Đối chiếu Vertex

Inspector giúp kiểm tra danh sách công cụ, tham số, thực thi và đọc lại kết quả sửa. Thử trực tiếp thành công chưa chứng minh mô hình sẽ chọn đúng công cụ. Cần kiểm tra cả luồng từ đầu đến cuối, gồm lỗi và đầu vào không hợp lệ; giao diện và cổng tùy phiên bản. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289207). Bản lưu: `sources/vertex-lessons/289207.json`.
