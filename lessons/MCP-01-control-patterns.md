# Ai chủ động chọn công cụ, nguồn nội dung và mẫu hướng dẫn?

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296691), sources/mcp-lessons/296691.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP có ba loại thành phần cơ bản, thường gọi là primitives: công cụ (tools), nguồn nội dung (resources) và mẫu hướng dẫn (prompts). Bài phân biệt chúng theo bên chủ động lựa chọn trong cách thiết kế ứng dụng.

| Thành phần | Ai chủ động chọn? | Ví dụ |
| --- | --- | --- |
| Tools | Mô hình chọn công cụ cần dùng để xử lý yêu cầu. | Claude yêu cầu tra cứu đơn hàng khi cần trạng thái mới. |
| Resources | Ứng dụng chọn đọc dữ liệu để hiển thị hoặc đưa vào ngữ cảnh. | Giao diện đọc danh mục tài liệu để gợi ý tên. |
| Prompts | Người dùng chọn mẫu nhiệm vụ muốn thực hiện. | Chọn mẫu “định dạng tài liệu” rồi cung cấp mã tài liệu. |

Đây là cách phân vai, không phải trao quyền không giới hạn cho mô hình. Claude chọn yêu cầu gọi công cụ; ứng dụng và server vẫn kiểm tra quyền, thực hiện thao tác và trả kết quả theo quy định.

Hãy chọn thành phần theo trải nghiệm cần tạo. Nếu giao diện cần danh sách tài liệu ngay khi mở bộ chọn, ứng dụng có thể đọc resource mà không chờ mô hình quyết định gọi công cụ. Nếu người dùng muốn một quy trình có sẵn, prompt trả các tin nhắn hướng dẫn để ứng dụng sử dụng. Nếu cần Claude tự chọn thời điểm thực hiện một chức năng, hãy cung cấp tool có mô tả và đầu vào rõ.

Lấy được mẫu hướng dẫn chưa có nghĩa nhiệm vụ đã hoàn thành. Sau bước lấy mẫu, ứng dụng còn phải gọi mô hình và xử lý các công cụ cần thiết.

## Câu hỏi tình huống

**1. Chọn một.** Giao diện cần hiển thị danh mục tài liệu ngay khi người dùng mở bộ chọn, không chờ mô hình. Primitive phù hợp?

A. Công cụ chỉ được gọi khi Claude đoán người dùng muốn mở danh mục.

B. Resource do ứng dụng đọc cho UI.

C. Prompt trả lời câu hỏi chưa được nhập.

D. Không cung cấp danh mục thật.

**2. Chọn một.** Người dùng muốn bấm “định dạng tài liệu” để nhận quy trình hướng dẫn nhất quán. Chọn gì?

A. Chỉ một URI danh mục.

B. Chỉ lời giải thích về MCP.

C. Prompt có tham số cho tài liệu, sau đó chạy mô hình và các công cụ cần thiết.

D. Coi việc liệt kê template là đã sửa xong.

**3. Chọn một.** Các công cụ là model-controlled có nghĩa gì trong pattern này?

A. Mô hình chọn yêu cầu công cụ, ứng dụng vẫn kiểm soát và thực thi theo hợp đồng/quyền.

B. Mô hình bỏ qua mọi xác thực hệ thống xử lý phía máy chủ.

C. Công cụ tự chạy ngay khi được liệt kê.

D. Không cần trả kết quả công cụ cho mô hình.

## Đáp án

1. **B.** A tạo phụ thuộc không cần thiết; C sai nhu cầu UI; D thiếu dữ liệu thực.
2. **C.** A không mang quy trình; B không thực hiện tác vụ; D nhầm chuẩn bị với hoàn tất.
3. **A.** B suy rộng sai quyền; C nhầm khám phá với thực thi; D làm đứt vòng công cụ.

## Đối chiếu MCP trong khóa Bedrock

Cách phân vai giống bài chung: mô hình chọn công cụ, ứng dụng chọn nguồn nội dung, người dùng chọn mẫu hướng dẫn. Mô hình chủ động chọn lời gọi không có nghĩa vượt qua quyền ứng dụng hoặc máy chủ. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276794). Bản lưu: `sources/bedrock-lessons/276794.json`.

## Đối chiếu Vertex

Phân vai model-controlled, app-controlled, user-controlled là hướng thiết kế. Ứng dụng vẫn kiểm tra quyền và có thể chặn lời gọi; cách diễn đạt “Claude kiểm soát hoàn toàn” không xóa trách nhiệm đó. Giao diện minh họa cũng không chứng minh mỗi nút trò chuyện đều tương ứng một MCP server thật. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289205). Bản lưu: `sources/vertex-lessons/289205.json`.

## Đối chiếu qua phụ đề chính thức

Phụ đề tổng kết ba thành phần và chủ thể chủ động lựa chọn. Giao diện chỉ minh họa một cách có thể dùng MCP, không chứng minh mọi nút Claude.ai thực sự gọi MCP. Ứng dụng vẫn thực thi quyền và có thể chặn yêu cầu công cụ. Dùng chung câu hỏi phân biệt ba thành phần.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287790). Bản lưu: `sources/api-media/287790.json`.
