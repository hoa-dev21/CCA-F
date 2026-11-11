# Chuẩn hóa lớp tích hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287780), sources/api-lessons/287780.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP (Model Context Protocol) là giao thức giúp ứng dụng AI kết nối với công cụ và dữ liệu theo một cách thống nhất. Phần tích hợp với dịch vụ được đóng gói trong MCP server để nhiều ứng dụng có thể sử dụng lại.

Có ba vai trò cần phân biệt: ứng dụng của bạn quản lý hội thoại với Claude; MCP client là thành phần giao tiếp với server; MCP server cung cấp công cụ hoặc dữ liệu và kết nối với dịch vụ phía sau. Server có thể do nhà cung cấp dịch vụ hoặc nhóm phát triển khác xây dựng.

Ví dụ: Hai ứng dụng đều cần tra cứu yêu cầu hỗ trợ khách hàng. Thay vì sao chép mã tích hợp vào từng ứng dụng, cả hai có thể dùng client kết nối tới server có khả năng này.

MCP và cơ chế dùng công cụ (tool use) bổ sung cho nhau. Tool use là quá trình Claude yêu cầu thao tác và nhận kết quả; MCP chuẩn hóa cách ứng dụng tìm và gọi công cụ đó. Không phải công cụ nào cũng cần MCP. Ngược lại, chỉ có MCP server chưa đủ để tự điều hành hội thoại hay bảo đảm Claude ra quyết định đúng.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hai ứng dụng đều tích hợp cùng hệ thống ticket nhưng đang sao chép mã kết nối. Nhóm muốn tái sử dụng mà vẫn giữ hội thoại riêng. Kiến trúc nào phù hợp?

A. Nhúng hai bản mã tích hợp vào system prompt để tái sử dụng.

B. MCP server dùng chung; mỗi app có client và context riêng.

C. Bỏ client rồi đưa địa chỉ server vào prompt để model tự kết nối.

D. Đưa cả hai lịch sử vào server ticket chung.

**Câu 2 — Chọn hai.** Nhóm mô tả MCP như phần thay thế toàn bộ tool use. Hai nhận định nào sửa đúng sự nhầm lẫn?

A. Mọi công cụ local đều bắt buộc phải chuyển sang MCP mới chạy được.

B. MCP server tự quyết định đầy đủ cuộc hội thoại ngay khi được cài.

C. MCP chuẩn hóa giao tiếp khám phá và gọi khả năng phía server.

D. Tool use biểu diễn quá trình model đề nghị thao tác rồi nhận kết quả.

**Câu 3 — Chọn một.** Nhà cung cấp đã có MCP server đọc ticket. Ứng dụng mới cần dùng dữ liệu đó để trả lời. Thành phần nào vẫn phải được xây hoặc nối?

A. Client gọi server; host trả kết quả về model.

B. Một bản sao database ticket nằm trong trọng số model.

C. Liệt kê server trong system thay client.

D. Cơ chế để server tự đọc mọi lịch sử hội thoại đang mở.

**Câu 4 — Chọn hai.** Khi phân tích lỗi “server đọc ticket thành công nhưng chatbot không trả lời được”, hai ranh giới nào cần kiểm tra?

A. Server có mô tả đủ chi tiết để model suy ra nội dung ticket mà không nhận kết quả không.

B. Ứng dụng có đưa kết quả vào ngữ cảnh của model không.

C. Model có được tăng ngân sách suy luận để tự phục hồi phần dữ liệu chưa truyền không.

D. Client có nhận và trả dữ liệu đúng cho ứng dụng không.

**Câu 5 — Chọn một.** Một tiện ích chỉ cần gọi một hàm local đã có, không chia sẻ tích hợp cho ứng dụng khác. Kết luận thiết kế nào phù hợp với bài?

A. Không thể có tool use nếu không có resource URI.

B. Phải thêm MCP server dù không có nhu cầu tích hợp để model được gọi hàm.

C. Cần chuyển hàm thành một prompt template để model tự thực thi mã.

D. Dùng client tool trực tiếp; chỉ thêm MCP khi cần lợi ích đó.

## Đáp án và giải thích

1. **B.** B tái sử dụng tầng tích hợp và giữ trách nhiệm host. D trộn trạng thái không cần thiết; C thiếu thành phần giao tiếp; A mã trong prompt không thay kết nối thực thi.

2. **C, D.** D và C mô tả hai vai trò bổ sung. B gán nhiệm vụ điều phối host cho server; A suy rộng giao thức thành yêu cầu bắt buộc cho mọi công cụ.

3. **A.** A nối dữ liệu vào hội thoại. B không phải mô hình hoạt động của MCP; C tên không tạo kết nối; D không cần và làm sai phân tách trách nhiệm.

4. **B, D.** D kiểm tra đường dữ liệu server–host; B kiểm tra host–model. A mô tả khả năng không thay dữ liệu của ticket cụ thể; C tăng ngân sách suy luận không đưa kết quả chưa truyền vào context.

5. **D.** D chọn cơ chế theo nhu cầu. B áp đặt không có trong bài; A nhầm resource với điều kiện tool use; C template hướng dẫn không chạy hàm.

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
