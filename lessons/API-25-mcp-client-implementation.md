# Quản lý session và giao diện gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287793), sources/api-lessons/287793.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học tách hai thành phần: client session là đối tượng của thư viện MCP quản lý kết nối tới server; lớp tiện ích do ứng dụng viết cung cấp cách gọi dễ dùng và quản lý việc mở, đóng kết nối.

Hai phương thức chính là `list_tools()` để lấy định nghĩa công cụ và `call_tool(name, input)` để gửi tên cùng đầu vào của công cụ được chọn. Ứng dụng đưa danh sách công cụ cho Claude, chuyển yêu cầu gọi tới client, rồi gửi kết quả trở lại mô hình.

Kiểm tra `list_tools()` trả đúng danh sách mới xác nhận bước khám phá công cụ, chưa kiểm tra toàn bộ luồng gọi và trả kết quả.

Mẫu Python dùng trình quản lý ngữ cảnh bất đồng bộ (async context manager) để quản lý vòng đời kết nối và dọn tài nguyên khi kết thúc. Cần hiểu ai chịu trách nhiệm đóng kết nối, tránh để phiên không còn dùng tiếp tục chiếm tài nguyên.

Khóa học xây cả client lẫn server để minh họa. Nếu đã có server phù hợp từ nhà cung cấp, bạn có thể viết client kết nối tới đó, không cần viết lại cả hai phía.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Client khám phá đúng hai tool, nhưng chatbot chỉ trả tên tool mà không có dữ liệu nghiệp vụ. Log không thấy call_tool. Chỉnh sửa nào nhắm đúng đoạn còn thiếu?

A. Tăng độ chi tiết description của hai tool.

B. Nối tool_use tới call_tool rồi trả kết quả cho Claude.

C. Cho list_tools chạy sau mỗi token để cập nhật công cụ.

D. Đưa tên hai tool vào system prompt thay cho danh sách schema.

**Câu 2 — Chọn hai.** Một dịch vụ mở MCP session cho từng job; khi job lỗi, socket không được đóng. Hai thay đổi nào giải quyết đúng vòng đời?

A. Đặt quyền sở hữu mở/đóng session rõ trong lớp tiện ích.

B. Dùng context manager hoặc finally để cleanup cả khi xảy ra ngoại lệ.

C. Cho garbage collector tự quyết định thời điểm đóng mọi tài nguyên.

D. Retry job trong session cũ trước khi xử lý tài nguyên rò rỉ.

**Câu 3 — Chọn một.** Server MCP của nhà cung cấp đã có tool đúng chức năng. Nhóm muốn thêm vào chatbot nội bộ với ít mã trùng lặp. Phương án nào phù hợp?

A. Viết lại server để mọi tool được định nghĩa trong cùng repository.

B. Chuyển toàn bộ logic chatbot sang server của nhà cung cấp.

C. Tích hợp client với server qua vòng list–call–result.

D. Gắn URL server vào prompt để mô hình tự kết nối.

**Câu 4 — Chọn hai.** Unit test list_tools đã xanh. Hai kiểm thử nào bổ sung bằng chứng đầu-cuối quan trọng nhất?

A. Tên và input yêu cầu được chuyển đúng tới tool được chọn.

B. Chạy thêm snapshot test cho danh sách tên và schema tool được khám phá.

C. Kết quả hoặc lỗi tool được trả lại đúng lượt hội thoại của Claude.

D. Kiểm tra server trả HTTP thành công mà không quan sát nội dung kết quả chuyển cho mô hình.

**Câu 5 — Chọn một.** Hai yêu cầu đồng thời dùng hai session khác nhau. Adapter gom kết quả theo thứ tự hoàn tất rồi gán theo thứ tự gửi, gây lẫn dữ liệu. Thiết kế nào sửa trực tiếp?

A. Nhóm kết quả theo tên tool rồi gán từng kết quả cho yêu cầu chờ lâu nhất của tool đó.

B. Gắn session ID vào log để điều tra nhưng tiếp tục gán kết quả theo thứ tự hàng đợi chung.

C. Giữ một hàng đợi phản hồi chung, chờ tất cả xong rồi ghép theo thứ tự nhận phản hồi.

D. Giữ ánh xạ yêu cầu–session–kết quả và trả đúng ngữ cảnh gọi.

## Đáp án và giải thích

1. **B.** B hoàn thiện đường thực thi và trả dữ liệu. A có thể giúp chọn tool nhưng không chạy mã. C lặp bước khám phá. D mô tả tên không tạo được đường thực thi.

2. **A, B.** A tránh trách nhiệm cleanup bị bỏ trống; B bảo đảm đường lỗi cũng dọn tài nguyên. C không tạo thời điểm đóng xác định. D có thể tăng số tài nguyên bị giữ và không sửa vòng đời.

3. **C.** C tái sử dụng năng lực có sẵn và giữ trách nhiệm ứng dụng. A không cần thiết nếu server đáp ứng. B thay đổi ranh giới không được yêu cầu. D chuỗi URL không tạo transport/client.

4. **A, C.** A kiểm tra dispatch và tham số; C kiểm tra đường phản hồi. B vẫn chủ yếu kiểm tra khám phá đã được unit test, chưa chứng minh vòng thực thi. D chỉ xác nhận trao đổi kỹ thuật, không xác nhận dữ liệu/lỗi được nối đúng về mô hình.

5. **D.** D bảo toàn danh tính qua ranh giới bất đồng bộ. A vẫn nhầm khi nhiều yêu cầu cùng tool hoàn tất khác thứ tự. B có thêm thông tin quan sát nhưng chưa dùng nó để định tuyến. C đợi đủ kết quả không làm thứ tự nhận trở thành thứ tự gửi.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296696). Bản lưu: `sources/mcp-lessons/296696.json`.

## Đối chiếu MCP trong khóa Bedrock

Schema công cụ MCP không cùng định dạng với Converse. Mẫu dùng `to_bedrock_tools` trong `core/bedrock.py` để chuyển đổi. Cần kiểm tra phần chuyển đổi thay vì gửi nguyên schema MCP và cho rằng kết nối thành công là đủ. Phiên kết nối vẫn phải được đóng và dọn tài nguyên. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276802). Bản lưu: `sources/bedrock-lessons/276802.json`.

## Đối chiếu Vertex

Lớp hỗ trợ quản lý `ClientSession`, dọn tài nguyên và cung cấp `list_tools`, `call_tool`; ứng dụng nối kết quả với mô hình. Có thể xây cả client và server nếu cần; nhận định “thường xây một phía” chỉ là bối cảnh bài giảng. Chuyển schema và kết quả theo đúng giao diện, không trộn `inputSchema` với `input_schema`. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289206). Bản lưu: `sources/vertex-lessons/289206.json`.
