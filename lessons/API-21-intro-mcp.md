# Chuẩn hóa lớp tích hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287780), sources/api-lessons/287780.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP (Model Context Protocol) là giao thức giúp ứng dụng AI kết nối với công cụ và dữ liệu theo một cách thống nhất. Phần tích hợp với dịch vụ được đóng gói trong MCP server để nhiều ứng dụng có thể sử dụng lại.

Có ba vai trò cần phân biệt: ứng dụng của bạn quản lý hội thoại với Claude; MCP client là thành phần giao tiếp với server; MCP server cung cấp công cụ hoặc dữ liệu và kết nối với dịch vụ phía sau. Server có thể do nhà cung cấp dịch vụ hoặc nhóm phát triển khác xây dựng.

Ví dụ: Hai ứng dụng đều cần tra cứu yêu cầu hỗ trợ khách hàng. Thay vì sao chép mã tích hợp vào từng ứng dụng, cả hai có thể dùng client kết nối tới server có khả năng này.

MCP và cơ chế dùng công cụ (tool use) bổ sung cho nhau. Tool use là quá trình Claude yêu cầu thao tác và nhận kết quả; MCP chuẩn hóa cách ứng dụng tìm và gọi công cụ đó. Không phải công cụ nào cũng cần MCP. Ngược lại, chỉ có MCP server chưa đủ để tự điều hành hội thoại hay bảo đảm Claude ra quyết định đúng.

## Câu hỏi

**1. Chọn một.** Nhiều ứng dụng đang sao chép bản mô tả cấu trúc dữ liệu và mã tích hợp cùng một dịch vụ. MCP giúp trực tiếp ở đâu?

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

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296689). Bản lưu: `sources/mcp-lessons/296689.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock có cùng cách phân vai client và server để dùng lại tích hợp công cụ. MCP không tự vận hành toàn bộ vòng gọi công cụ và hội thoại. Dùng chung câu hỏi cho các kiến thức tương đương.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276798). Bản lưu: `sources/bedrock-lessons/276798.json`.

## Đối chiếu Vertex

MCP chuẩn hóa việc kết nối và tìm hiểu các khả năng server cung cấp. Nó không đồng nghĩa với toàn bộ cơ chế dùng công cụ, cũng không bảo đảm server đáng tin. Ứng dụng chứa MCP client vẫn chịu trách nhiệm về quyền, công cụ cung cấp cho mô hình và xử lý kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [Introducing MCP](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289201). Bản lưu: `sources/vertex-lessons/289201.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đọc phụ đề, bài mở đầu giới thiệu MCP, client, server và ba thành phần tools, resources, prompts. Mẫu thực hành cần Python, môi trường chạy cục bộ và UV. Có UV chưa chứng minh kết nối hoặc công cụ đã chạy được. Ba thành phần được củng cố ở MCP-01; dùng chung câu hỏi liên quan.

Nguồn đối chiếu: [Welcome to the course](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/303756). Bản lưu: `sources/mcp-media/303756.json`.
