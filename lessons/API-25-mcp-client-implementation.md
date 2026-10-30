# Implementing a client — Quản lý session và giao diện gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287793), sources/api-lessons/287793.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài tách lớp tiện ích MCP client khỏi **client session**, đối tượng SDK quản lý kết nối tới server. Lớp tiện ích cung cấp các phương thức dễ dùng và giúp dọn tài nguyên khi kết thúc.

Hai phương thức cốt lõi là `list_tools()` lấy định nghĩa tools và `call_tool(name, input)` gửi lời gọi. Lớp ứng dụng dùng danh sách để gửi Claude; khi Claude chọn công cụ, lớp ứng dụng chuyển tên cùng đối số tới client, rồi đưa kết quả về mô hình.

Ví dụ sử dụng context manager bất đồng bộ để quản lý vòng đời. Hiểu trách nhiệm dọn kết nối quan trọng hơn học thuộc chi tiết mã Python. Bài xây cả client và server để minh họa; ứng dụng thực tế có thể chỉ cần triển khai một phía và dùng phía còn lại có sẵn.

## Câu hỏi

**1. Chọn một.** Nhóm đã có server MCP từ nhà cung cấp nhưng nghĩ phải viết lại server để chatbot dùng được. Thiết kế nào phù hợp bài học hơn?

A. Viết lại mọi công cụ vì mỗi ứng dụng bắt buộc có server riêng.

B. Dùng client kết nối server có sẵn và nối list/call vào ứng dụng.

C. Chỉ sao chép tên công cụ vào prompt, không tích hợp thực thi.

D. Bỏ tool results vì server đã có sẵn.

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

Đã đọc và đối chiếu [Implementing a client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296696) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296696.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Implementing a client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276802), sources/bedrock-lessons/276802.json và đối chiếu với bài chung. Bản Bedrock nêu rõ MCP tool schema không trùng định dạng Converse. Helper to_bedrock_tools trong core/bedrock.py chuyển schema; cần kiểm tra adapter thay vì gửi schema MCP nguyên dạng rồi coi kết nối là đã đủ. Session vẫn cần cleanup. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Implementing a client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289206), sources/vertex-lessons/289206.json. Wrapper quản lý ClientSession/cleanup, list_tools và call_tool; host nối model với MCP. Có thể làm cả client/server khi kiến trúc cần, bài nói thường làm một bên chỉ là bối cảnh giảng dạy. Cần chuyển schema/results đúng contract model thay vì trộn inputSchema/input_schema. Dùng chung câu hỏi khái niệm.
