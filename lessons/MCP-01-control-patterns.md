# MCP review — Ai kiểm soát từng primitive?

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296691), sources/mcp-lessons/296691.json. Câu hỏi tự biên soạn.

## Tóm tắt

Khóa tổng kết ba primitive qua chủ thể kiểm soát trong mô hình ứng dụng:

| Primitive | Chủ thể lựa chọn trong pattern | Ví dụ |
|---|---|---|
| Tools | Model chọn khả năng cần dùng | Tra cứu khi cần dữ liệu để trả lời |
| Resources | Ứng dụng quyết định đọc và đưa vào context/UI | Danh mục autocomplete, tài liệu được chọn |
| Prompts | Người dùng chọn mẫu công việc | Slash command định dạng tài liệu |

Đây là cách phân vai thiết kế, không có nghĩa mô hình được vượt qua quyền của ứng dụng. Tool call vẫn phải được client/server thực thi theo kiểm soát đã thiết kế.

Chọn primitive theo trải nghiệm mong muốn. Nếu UI cần danh sách tài liệu trước khi hỏi model, resource phù hợp hơn bắt model thực hiện một tool call chỉ để render danh sách. Nếu người dùng chọn một quy trình có mẫu hướng dẫn, prompt cung cấp messages; nó chưa phải kết quả thực thi. Nếu muốn Claude tự quyết định khi cần chức năng, cung cấp tool rõ hợp đồng.

## Câu hỏi tình huống

**1. Chọn một.** Giao diện cần hiển thị danh mục tài liệu ngay khi người dùng mở bộ chọn, không chờ model. Primitive phù hợp?

A. Tool chỉ được gọi khi Claude đoán người dùng muốn mở danh mục.

B. Resource do ứng dụng đọc cho UI.

C. Prompt trả lời câu hỏi chưa được nhập.

D. Không cung cấp danh mục thật.

**2. Chọn một.** Người dùng muốn bấm “định dạng tài liệu” để nhận quy trình hướng dẫn nhất quán. Chọn gì?

A. Chỉ một URI danh mục.

B. Chỉ lời giải thích về MCP.

C. Prompt có tham số cho tài liệu, sau đó chạy model và tools cần thiết.

D. Coi việc liệt kê template là đã sửa xong.

**3. Chọn một.** Tools là model-controlled có nghĩa gì trong pattern này?

A. Model chọn yêu cầu công cụ, ứng dụng vẫn kiểm soát và thực thi theo hợp đồng/quyền.

B. Mô hình bỏ qua mọi xác thực backend.

C. Tool tự chạy ngay khi được liệt kê.

D. Không cần trả kết quả tool cho model.

## Đáp án

1. **B.** A tạo phụ thuộc không cần thiết; C sai nhu cầu UI; D thiếu dữ liệu thực.
2. **C.** A không mang quy trình; B không thực hiện tác vụ; D nhầm chuẩn bị với hoàn tất.
3. **A.** B suy rộng sai quyền; C nhầm khám phá với thực thi; D làm đứt vòng công cụ.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [MCP review](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276794), sources/bedrock-lessons/276794.json và đối chiếu với bài chung. Cùng tools/model, resources/application, prompts/user. Model-controlled là chọn lời gọi trong pattern, không phải vượt qua quyền ứng dụng hoặc backend. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [MCP review](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289205), sources/vertex-lessons/289205.json. Tools model-controlled, resources app-controlled, prompts user-controlled là hướng thiết kế. Host vẫn thực thi quyền và có thể chặn tool call; entirely controlled by Claude trong lời kể không bỏ host authorization. UI ví dụ không chứng minh mọi nút chat tương ứng một MCP server thực. Dùng chung câu hỏi khái niệm.

## Đối chiếu qua phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [MCP review](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287790), sources/api-media/287790.json. Phụ đề tổng kết tools model-controlled, resources app-controlled và prompts user-controlled; ví dụ UI chỉ minh họa một cách triển khai có thể dùng MCP, không chứng minh mọi nút Claude.ai thực sự gọi MCP. Host vẫn thực thi quyền và có thể chặn tool request. Dùng chung câu hỏi phân biệt ba primitives.
