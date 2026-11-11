# Khám phá và lấy mẫu có tham số

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287786), sources/api-lessons/287786.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Client dùng `list_prompts()` để lấy danh sách mẫu hướng dẫn trên MCP server, và `get_prompt(name, args)` để lấy các tin nhắn của một mẫu sau khi điền tham số.

Trong giao diện dòng lệnh của bài, người dùng chọn mẫu bằng lệnh bắt đầu với dấu gạch chéo, còn gọi là slash command, rồi cung cấp thông tin như mã tài liệu. Client lấy mẫu, ứng dụng gửi các tin nhắn cho Claude, sau đó xử lý những yêu cầu công cụ cần thiết.

Tên và giá trị tham số phải đúng với định nghĩa phía server. Ví dụ: mẫu yêu cầu `doc_id` nhưng client gửi một tên trường khác thì có thể không lấy được mẫu. Nếu gửi nhầm mã tài liệu, hướng dẫn có thể nhắm sai đối tượng.

Cần phân biệt ba mốc: biết có những mẫu nào, lấy được hướng dẫn đã điền tham số và thực hiện xong nhiệm vụ. Việc lấy mẫu thành công chưa chứng minh tài liệu đã được chỉnh sửa.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Slash command /format hiển thị trong UI, nhưng khi chạy báo thiếu doc_id vì client gửi document. Sửa nào trực tiếp nhất?

A. Đổi label hiển thị của slash command.

B. Đổi prompt để không cần tài liệu cụ thể.

C. Ánh xạ arguments theo hợp đồng get_prompt.

D. Thêm cùng giá trị vào system prompt và giữ args sai.

**Câu 2 — Chọn hai.** Ứng dụng cần hiển thị menu prompt rồi chạy mẫu người dùng chọn. Hai thao tác nào thuộc đúng các mốc trước khi gọi mô hình?

A. list_prompts để khám phá mô tả và tham số có sẵn.

B. call_tool với tên prompt để vừa lấy mẫu vừa thực thi.

C. get_prompt với tên và args để lấy messages đã điền.

D. Đánh dấu hoàn thành nghiệp vụ ngay khi menu hiện.

**Câu 3 — Chọn một.** get_prompt trả messages đúng nhưng tài liệu không thay đổi. Log kết thúc ngay sau lời gọi đó. Bước còn thiếu là gì?

A. Tăng timeout get_prompt để server có thời gian chỉnh tài liệu.

B. Chạy messages qua model/tool và xác minh kết quả.

C. Đổi tên doc_id thành đường dẫn đầy đủ dù server chấp nhận ID.

D. Dùng list_prompts xác nhận nhiệm vụ đã xong.

**Câu 4 — Chọn hai.** Người dùng chọn tài liệu A nhưng client giữ args từ lần trước cho tài liệu B. Hai kiểm soát nào giúp tránh sửa sai đối tượng?

A. Ràng buộc args với lựa chọn hiện tại trước khi gọi get_prompt.

B. Dựa vào tên slash command để suy ra tài liệu muốn sửa.

C. Kiểm tra định danh trong messages và đối tượng tác động khi thực thi.

D. Chỉ kiểm tra HTTP thành công của get_prompt.

**Câu 5 — Chọn một.** Server thêm một tham số bắt buộc cho prompt; client vẫn dùng menu cache cũ. Cách xử lý phù hợp nhất khi gặp lỗi thiếu tham số?

A. Tự điền chuỗi rỗng cho mọi tham số mới.

B. Giữ retry nguyên request vì discovery từng thành công.

C. Bỏ tham số bắt buộc trong messages sau khi lấy được mẫu.

D. Cập nhật định nghĩa và lấy đủ tham số theo hợp đồng mới.

## Đáp án và giải thích

1. **C.** C sửa hợp đồng lời gọi. A chỉ thay UI. B né yêu cầu cần thiết. D dữ liệu trong prompt khác không sửa tham số thiếu của get_prompt.

2. **A, C.** A khám phá, C lấy mẫu cụ thể. B nhầm primitive prompt với tool. D menu chỉ chứng minh bước khám phá, chưa có tác động nghiệp vụ.

3. **B.** B thực thi hướng dẫn đã lấy. A giả định get_prompt thực hiện tác vụ. C không giải quyết thiếu vòng thực thi. D danh mục không có vai trò xác nhận kết quả sửa tài liệu.

4. **A, C.** A tránh dữ liệu stale, C kiểm tra xuyên các tầng. B tên hành động không chỉ ra đối tượng. D phản hồi thành công vẫn có thể nhắm sai ID hợp lệ.

5. **D.** D xử lý thay đổi hợp đồng. A có thể tạo giá trị không hợp lệ. B giữ nguyên nguyên nhân. C chưa lấy được mẫu và bỏ trường không giải quyết nhu cầu nghiệp vụ.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296692). Bản lưu: `sources/mcp-lessons/296692.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock cùng sử dụng `list_prompts`, `get_prompt` và tham số `doc_id`. Phân biệt danh sách mẫu, tin nhắn đã điền tham số và kết quả thực thi. Các bước này không thay nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276795). Bản lưu: `sources/bedrock-lessons/276795.json`.

## Đối chiếu Vertex

`list_prompts` lấy danh sách; `get_prompt` gửi tham số để server tạo tin nhắn. Client có thể hiển thị lệnh bắt đầu bằng dấu gạch chéo nếu hỗ trợ, nhưng không phải mọi client đều có giao diện này. Khám phá mẫu khác với chạy nhiệm vụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompts in the client](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289209). Bản lưu: `sources/vertex-lessons/289209.json`.
