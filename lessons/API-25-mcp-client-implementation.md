# Quản lý session và giao diện gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287793), sources/api-lessons/287793.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học tách hai thành phần: client session là đối tượng của thư viện MCP quản lý kết nối tới server; lớp tiện ích do ứng dụng viết cung cấp cách gọi dễ dùng và quản lý việc mở, đóng kết nối.

Hai phương thức chính là `list_tools()` để lấy định nghĩa công cụ và `call_tool(name, input)` để gửi tên cùng đầu vào của công cụ được chọn. Ứng dụng đưa danh sách công cụ cho Claude, chuyển yêu cầu gọi tới client, rồi gửi kết quả trở lại mô hình.

Kiểm tra `list_tools()` trả đúng danh sách mới xác nhận bước khám phá công cụ, chưa kiểm tra toàn bộ luồng gọi và trả kết quả.

Mẫu Python dùng trình quản lý ngữ cảnh bất đồng bộ (async context manager) để quản lý vòng đời kết nối và dọn tài nguyên khi kết thúc. Cần hiểu ai chịu trách nhiệm đóng kết nối, tránh để phiên không còn dùng tiếp tục chiếm tài nguyên.

Khóa học xây cả client lẫn server để minh họa. Nếu đã có server phù hợp từ nhà cung cấp, bạn có thể viết client kết nối tới đó, không cần viết lại cả hai phía.

## Câu hỏi

**1. Chọn một.** Nhóm đã có server MCP từ nhà cung cấp nhưng nghĩ phải viết lại server để chatbot dùng được. Thiết kế nào phù hợp bài học hơn?

A. Viết lại mọi công cụ vì mỗi ứng dụng bắt buộc có server riêng.

B. Dùng client kết nối server có sẵn và nối list/call vào ứng dụng.

C. Chỉ sao chép tên công cụ vào prompt, không tích hợp thực thi.

D. Bỏ kết quả công cụ vì server đã có sẵn.

**2. Chọn một.** Ứng dụng mở session cho nhiều tác vụ nhưng không đóng. Cải thiện kiến trúc nào đúng trách nhiệm lớp client trong bài?

A. Chỉ giảm số token đầu ra.

B. Đưa mã đóng session vào prompt.

C. Quản lý vòng đời session và cleanup qua lớp tiện ích/context manager.

D. Tăng số lần gọi list_tools.

**3. Chọn một.** Unit test xác nhận `list_tools()` trả đúng hai định nghĩa. Phần nào vẫn cần kiểm tra để chứng minh luồng đầu-cuối?

A. Gọi công cụ được chọn, nhận kết quả và đưa lại cho Claude.

B. Chỉ đếm số ký tự tên công cụ.

C. Đổi tên lớp client cho ngắn hơn.

D. Chỉ in lại danh sách lần nữa.

## Đáp án

1. **B.** A bỏ lợi ích tái sử dụng; C thiếu thực thi; D đứt luồng kết quả.
2. **C.** A không quản lý kết nối; B giao trách nhiệm mã cho prompt; D tăng thao tác nhưng không cleanup.
3. **A.** Khám phá đúng chưa kiểm tra thực thi và hội thoại. B, C, D không chứng minh các bước còn thiếu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296696). Bản lưu: `sources/mcp-lessons/296696.json`.

## Đối chiếu MCP trong khóa Bedrock

Schema công cụ MCP không cùng định dạng với Converse. Mẫu dùng `to_bedrock_tools` trong `core/bedrock.py` để chuyển đổi. Cần kiểm tra phần chuyển đổi thay vì gửi nguyên schema MCP và cho rằng kết nối thành công là đủ. Phiên kết nối vẫn phải được đóng và dọn tài nguyên. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276802). Bản lưu: `sources/bedrock-lessons/276802.json`.

## Đối chiếu Vertex

Lớp hỗ trợ quản lý `ClientSession`, dọn tài nguyên và cung cấp `list_tools`, `call_tool`; ứng dụng nối kết quả với mô hình. Có thể xây cả client và server nếu cần; nhận định “thường xây một phía” chỉ là bối cảnh bài giảng. Chuyển schema và kết quả theo đúng giao diện, không trộn `inputSchema` với `input_schema`. Dùng chung câu hỏi.

Nguồn đối chiếu: [Implementing a client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289206). Bản lưu: `sources/vertex-lessons/289206.json`.
