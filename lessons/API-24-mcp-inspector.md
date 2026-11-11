# Kiểm tra MCP server độc lập

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287781), sources/api-lessons/287781.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP Inspector giúp thử MCP server trực tiếp, trước khi tích hợp toàn bộ ứng dụng với Claude. Bạn có thể xem danh sách công cụ, chọn công cụ, nhập đầu vào và xem kết quả.

Ví dụ: Chatbot không đọc được tài liệu. Hãy thử gọi công cụ đọc với một mã tài liệu đã biết trong Inspector. Nếu công cụ vẫn lỗi, cần xem server hoặc dữ liệu. Nếu công cụ chạy đúng nhưng chatbot không gọi nó, cần kiểm tra cách ứng dụng cung cấp định nghĩa công cụ và xử lý yêu cầu của Claude.

Với thao tác sửa tài liệu, thông báo “success” chưa đủ để biết nội dung đã đúng. Hãy dùng công cụ đọc lại tài liệu và đối chiếu với thay đổi mong muốn. Quy trình phát triển gồm sửa mã, thử thao tác, xem trạng thái thực tế và tìm nguyên nhân lỗi.

Giao diện và lệnh khởi chạy Inspector có thể thay đổi theo phiên bản. Điều chính cần học là thử riêng từng phần của hệ thống và kiểm tra kết quả sau thao tác.

## Tự kiểm tra

**Câu 1 — Chọn một.** Chatbot không đọc được tài liệu. Nhóm chưa biết lỗi server hay host. Thử nghiệm nào cô lập server hiệu quả nhất?

A. Gọi trực tiếp tool đọc trong Inspector với ID hợp lệ.

B. Tăng số công cụ đưa cho model để tạo thêm đường đọc.

C. Thay system prompt của chatbot rồi gọi lại toàn bộ luồng.

D. Thay model trước khi kiểm tra giao diện công cụ.

**Câu 2 — Chọn hai.** Inspector gọi sửa tài liệu và nhận success. Hai kiểm tra nào cung cấp bằng chứng tốt hơn về tính đúng của thao tác?

A. Chỉ kiểm tra dòng success có đúng chính tả.

B. Kiểm tra phần không nằm trong yêu cầu vẫn được giữ nguyên.

C. Coi việc công cụ xuất hiện trong danh sách là đủ cho mọi đầu vào.

D. Đọc lại tài liệu và đối chiếu phần phải thay đổi.

**Câu 3 — Chọn một.** Cùng ID tài liệu, Inspector đọc đúng nhưng chatbot không hề phát tool_use. Ưu tiên điều tra nào hợp lý nhất?

A. Đổi ID trong kho cho tới khi model gọi công cụ.

B. Tools host gửi model và cách host xử lý phản hồi.

C. Viết lại ngay backend đọc tài liệu vì đó là thành phần cuối cùng.

D. Thêm retry ở hàm server dù chưa có lời gọi đến server.

**Câu 4 — Chọn hai.** Khi kiểm thử server độc lập trước tích hợp, hai ca nào cần có để hiểu hợp đồng sửa tài liệu?

A. Một ID hợp lệ và chuỗi khớp để xác nhận đường thành công.

B. Chỉ kiểm tra tên server được hiển thị đúng trong Inspector.

C. Chỉ gọi list_tools nhiều lần để đo độ ổn định danh sách.

D. Một ID hoặc chuỗi không khớp để kiểm tra phản hồi lỗi.

**Câu 5 — Chọn một.** Inspector trả lỗi với ID hợp lệ mà ứng dụng trước đây đọc được. Nhóm muốn sửa prompt ngay. Hướng điều tra nào có căn cứ hơn?

A. Chuyển lỗi thành tài liệu rỗng và đánh dấu tích hợp thành công.

B. Gọi trực tiếp để khoanh dữ liệu, quyền hoặc logic server.

C. Tăng số ví dụ trong prompt vì mọi lỗi công cụ đều bắt nguồn từ model.

D. Ép model nói “đã đọc” để không lộ lỗi backend.

## Đáp án và giải thích

1. **A.** A bỏ các tầng hội thoại để thử server. C và D thay nhiều thành phần nhưng chưa cô lập; B thêm khả năng không xác định nguyên nhân.

2. **B, D.** D kiểm tra tác động yêu cầu; B kiểm tra tác động ngoài ý muốn. A chỉ đo thông báo; C nhầm khám phá với độ đúng thực thi.

3. **B.** B nhắm tầng lựa chọn/điều phối chưa hoạt động. C trái bằng chứng server đọc được; A thay dữ liệu không sửa công bố công cụ; D retry không chạy khi chưa có lời gọi.

4. **A, D.** A kiểm tra thực thi, D kiểm tra lỗi có thể xử lý. C và B chỉ đo kết nối/khám phá, không đo hành vi đọc sửa.

5. **B.** B bám bằng chứng lỗi xuất hiện cả khi bỏ model. C không phù hợp tầng đã cô lập; D và A che sự cố thay vì khắc phục.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296693). Bản lưu: `sources/mcp-lessons/296693.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cũng thử riêng công cụ rồi đọc lại tài liệu để xác minh thay đổi. Cổng và giao diện Inspector có thể đổi theo phiên bản; điều cần học là phương pháp kiểm tra. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276796). Bản lưu: `sources/bedrock-lessons/276796.json`.

## Đối chiếu Vertex

Inspector giúp kiểm tra danh sách công cụ, tham số, thực thi và đọc lại kết quả sửa. Thử trực tiếp thành công chưa chứng minh mô hình sẽ chọn đúng công cụ. Cần kiểm tra cả luồng từ đầu đến cuối, gồm lỗi và đầu vào không hợp lệ; giao diện và cổng tùy phiên bản. Dùng chung câu hỏi.

Nguồn đối chiếu: [The server inspector](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289207). Bản lưu: `sources/vertex-lessons/289207.json`.
