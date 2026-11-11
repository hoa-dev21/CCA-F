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

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** UI phải hiện danh mục tài liệu ngay khi mở bộ chọn, trước khi người dùng hỏi mô hình. Primitive nào khớp cách chủ động lựa chọn này?

A. Tool để mô hình tự quyết định có cần danh mục ở lượt suy luận tiếp theo.

B. Resource để ứng dụng chủ động đọc và hiển thị danh mục.

C. Prompt để sinh một danh mục dự đoán từ tên dự án.

D. Tool chạy nền khi được liệt kê dù chưa có lời gọi.

**Câu 2 — Chọn một.** Người dùng bấm “định dạng tài liệu”, chọn mẫu có tham số doc_id. Sau khi lấy prompt thành công, ứng dụng nên làm gì để hoàn tất tác vụ?

A. Báo tài liệu đã định dạng vì server đã trả template.

B. Lưu URI template làm phiên bản tài liệu mới.

C. Chạy mô hình với prompt; xử lý tools và kiểm tra kết quả.

D. Chỉ liệt kê các prompts lần nữa để xác nhận thao tác.

**Câu 3 — Chọn hai.** Tool được gọi là model-controlled. Hai trách nhiệm nào vẫn thuộc ứng dụng/server?

A. Kiểm tra quyền và điều kiện thực thi lời gọi.

B. Thực thi thao tác được phép và trả kết quả đúng hợp đồng.

C. Tự chạy mọi tool ngay khi mô hình được cung cấp danh sách.

D. Coi lựa chọn của mô hình là đủ để cấp quyền trên tài nguyên.

**Câu 4 — Chọn một.** Một server có cả resource tài liệu và tool cập nhật tài liệu. Quyền người dùng chỉ cho đọc. Client thấy tool trong danh sách và mô hình yêu cầu cập nhật. Cách xử lý đúng?

A. Cho chạy vì tools/list đã chứng minh quyền ghi.

B. Cấp quyền ghi tạm cho lời gọi có giải thích hợp lý, rồi thu hồi sau thao tác.

C. Gửi yêu cầu tới server bằng tài khoản quyền cao hơn cho tiện.

D. Áp dụng quyền hiện hành; từ chối lời gọi ngoài quyền.

**Câu 5 — Chọn hai.** Thiết kế cần vừa cho người dùng chọn quy trình, vừa để UI nạp nội dung và mô hình quyết định thao tác khi chạy. Hai nhận định nào đúng?

A. Mỗi trải nghiệm chỉ được dùng một primitive nên phải chọn tool cho tất cả.

B. Prompts có thể cung cấp mẫu do người dùng chọn, resources cung cấp dữ liệu app nạp.

C. Lấy prompt thành công không chứng minh các tool trong quy trình đã chạy.

D. Có resource thì không cần trả kết quả tool về mô hình.

## Đáp án và giải thích

1. **B.** B đáp ứng hành vi app-controlled không chờ mô hình. A thêm phụ thuộc quyết định mô hình. C tạo nội dung thay vì lấy danh mục thật. D nhầm khám phá tool với thực thi.

2. **C.** C phân biệt lấy hướng dẫn và thực hiện công việc. A đánh dấu thành công quá sớm. B nhầm tham chiếu mẫu với nội dung kết quả. D lặp khám phá không thực thi tác vụ.

3. **A, B.** A/B giữ ranh giới thực thi. C nhầm liệt kê với yêu cầu gọi. D suy từ chủ động lựa chọn sang quyền truy cập; model-controlled không xóa kiểm soát của host/server.

4. **D.** D phân biệt khả năng nhìn thấy định nghĩa và quyền thực thi. A nhầm discovery với authorization. B tự nới quyền dựa trên lý do mô hình thay vì thẩm quyền của người dùng. C mở rộng quyền trái phạm vi người dùng.

5. **B, C.** B mô tả cách phối hợp các vai trò; C phân biệt chuẩn bị và thực thi. A áp giới hạn không có trong cách phân vai. D dữ liệu resource không thay thế phản hồi cho lời gọi tool cụ thể.

## Đối chiếu MCP trong khóa Bedrock

Cách phân vai giống bài chung: mô hình chọn công cụ, ứng dụng chọn nguồn nội dung, người dùng chọn mẫu hướng dẫn. Mô hình chủ động chọn lời gọi không có nghĩa vượt qua quyền ứng dụng hoặc máy chủ. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276794). Bản lưu: `sources/bedrock-lessons/276794.json`.

## Đối chiếu Vertex

Phân vai model-controlled, app-controlled, user-controlled là hướng thiết kế. Ứng dụng vẫn kiểm tra quyền và có thể chặn lời gọi; cách diễn đạt “Claude kiểm soát hoàn toàn” không xóa trách nhiệm đó. Giao diện minh họa cũng không chứng minh mỗi nút trò chuyện đều tương ứng một MCP server thật. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289205). Bản lưu: `sources/vertex-lessons/289205.json`.

## Đối chiếu qua phụ đề chính thức

Phụ đề tổng kết ba thành phần và chủ thể chủ động lựa chọn. Giao diện chỉ minh họa một cách có thể dùng MCP, không chứng minh mọi nút Claude.ai thực sự gọi MCP. Ứng dụng vẫn thực thi quyền và có thể chặn yêu cầu công cụ. Dùng chung câu hỏi phân biệt ba thành phần.

Nguồn đối chiếu: [MCP review](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287790). Bản lưu: `sources/api-media/287790.json`.
