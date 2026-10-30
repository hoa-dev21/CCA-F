# Introducing MCP — Chuẩn hóa lớp tích hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287780), sources/api-lessons/287780.json. Câu hỏi tự biên soạn.

## Tóm tắt

MCP đóng gói khả năng truy cập dịch vụ vào các server có giao diện chuẩn. Thay vì mỗi ứng dụng tự viết lại schema và hàm gọi cho từng tính năng GitHub, một MCP server có thể cung cấp các công cụ đó để client sử dụng.

Phân biệt ba vai trò: ứng dụng điều phối hội thoại với Claude; MCP client trao đổi với server; MCP server cung cấp giao diện tới dữ liệu hoặc hành động bên ngoài. Server có thể do nhà cung cấp dịch vụ hoặc bên khác xây dựng.

MCP và tool use bổ sung nhau. Tool use là luồng mô hình yêu cầu công cụ và nhận kết quả; MCP chuẩn hóa lớp tích hợp có thể cung cấp các công cụ ấy. Không phải mọi tool đều bắt buộc qua MCP, và có MCP server không đồng nghĩa toàn bộ vòng hội thoại tự vận hành.

Ví dụ tự biên soạn: hai ứng dụng cùng cần tra cứu ticket có thể dùng chung server tích hợp, thay vì sao chép từng hàm vào cả hai dự án. Cần phân biệt khả năng tái sử dụng này với chất lượng quyết định của mô hình.

## Câu hỏi

**1. Chọn một.** Nhiều ứng dụng đang sao chép schema và mã tích hợp cùng một dịch vụ. MCP giúp trực tiếp ở đâu?

A. Đóng gói lớp tích hợp thành server để client dùng lại.

B. Tự bảo đảm mọi câu trả lời đúng.

C. Xóa nhu cầu nhận kết quả công cụ.

D. Biến dữ liệu hiện tại thành kiến thức huấn luyện tức thì.

**2. Chọn một.** Quan hệ giữa MCP và tool use?

A. Hoàn toàn đồng nghĩa.

B. Tool use không bao giờ hoạt động với MCP.

C. Bổ sung nhau: MCP cung cấp lớp tích hợp cho khả năng công cụ.

D. Có MCP thì không cần mô hình quyết định.

**3. Chọn một.** Ai có thể xây dựng MCP server theo bài?

A. Chỉ tác giả ứng dụng cuối.

B. Nhà cung cấp dịch vụ hoặc người phát triển khác.

C. Chỉ người dùng cuối qua prompt.

D. Không ai cần viết mã tích hợp.

## Đáp án

1. **A.** B không được bảo đảm; C làm đứt luồng; D nhầm ngữ cảnh với huấn luyện.
2. **C.** A bỏ khác biệt vai trò; B sai về tích hợp; D bỏ bước quyết định trong ứng dụng.
3. **B.** A và C giới hạn sai chủ thể; D nhầm tái sử dụng tích hợp với không cần triển khai.

## Đối chiếu khóa MCP riêng

Đã đọc và đối chiếu [Introducing MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296689) trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/296689.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.

## Đối chiếu MCP trong khóa Bedrock

Đã đọc [Introducing MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276798), sources/bedrock-lessons/276798.json và đối chiếu với bài chung. Cùng lớp tích hợp client/server và tái sử dụng công cụ. MCP không đồng nghĩa toàn bộ tool loop tự vận hành. Dùng chung câu hỏi khái niệm tương đương, không đếm lặp.

## Đối chiếu Vertex

Đã đọc [Introducing MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289201), sources/vertex-lessons/289201.json. MCP chuẩn hóa kết nối và capability discovery, không đồng nghĩa tool use hoặc bảo đảm server đáng tin. Host có MCP client kết nối server bên ngoài, vẫn chịu trách nhiệm quyền, chọn tools và xử lý results. Dùng chung câu hỏi khái niệm.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Welcome to the course](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/303756), sources/mcp-media/303756.json. Giới thiệu mục tiêu MCP, client/server và ba primitives tools/resources/prompts, yêu cầu Python/local runtime và UV theo mẫu. Ba primitives được củng cố ở MCP01; việc có UV không chứng minh kết nối hoặc thực thi tool đã hoạt động. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
