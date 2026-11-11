# Giữ đầy đủ cấu trúc phản hồi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287757), sources/api-lessons/287757.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Phản hồi của Claude có thể gồm nhiều khối nội dung, gọi là block, thay vì chỉ một chuỗi văn bản. Trường `content` chứa danh sách các khối này. Trong bài, hai loại cần phân biệt là `text` để chứa lời trả lời và `tool_use` để yêu cầu gọi công cụ.

Khối `tool_use` có mã định danh lần gọi, tên công cụ và đầu vào cần truyền. Ứng dụng dùng các thông tin này để thực hiện thao tác. Một câu như “Tôi sẽ kiểm tra đơn hàng” chỉ là lời diễn đạt, chưa phải yêu cầu gọi công cụ có cấu trúc.

Khi gửi yêu cầu, ứng dụng khai báo các công cụ cho Claude qua danh sách `tools`. Khi nhận phản hồi, cần lưu toàn bộ `response.content` vào tin nhắn có vai trò `assistant`, rồi duyệt từng khối theo trường `type`.

Nếu chỉ lấy `content[0].text`, bạn có thể làm mất các khối yêu cầu công cụ. Cũng không nên mặc định công cụ luôn nằm ở vị trí thứ hai chỉ vì một ví dụ có thứ tự như vậy. Sau khi xử lý yêu cầu công cụ, ứng dụng gửi kết quả cùng lịch sử cần thiết để Claude tiếp tục.

## Tự kiểm tra

**Câu 1 — Chọn một.** Response có text, hai tool_use rồi thêm text. UI chỉ lấy content[0].text và lưu chuỗi đó vào lịch sử. Hậu quả kiến trúc quan trọng nhất là gì?

A. Chỉ mất định dạng UI, còn model tự nhớ hai yêu cầu qua kết nối.

B. Hai công cụ vẫn chạy vì tên chúng đã khai báo trong tools.

C. Không có vấn đề nếu text đầu tiên nói “tôi sẽ tra cứu”.

D. Mất yêu cầu công cụ và thông tin cần nối kết quả vào lượt sau.

**Câu 2 — Chọn hai.** Để xử lý phản hồi gồm nhiều loại block mà không phụ thuộc thứ tự ví dụ, hai bước nào cần có?

A. Lưu đầy đủ response.content trong tin nhắn assistant.

B. Chỉ đọc block thứ hai vì tool_use thường nằm sau lời giải thích.

C. Duyệt danh sách và phân nhánh theo type của từng block.

D. Chuyển mọi block thành một chuỗi rồi dò từ “tool”.

**Câu 3 — Chọn một.** Model viết “tôi sẽ kiểm tra đơn hàng” nhưng response không có tool_use. Router nên làm gì?

A. Tạo một tool_use_id giả và ghi rằng model đã yêu cầu công cụ.

B. Đánh dấu công cụ thành công vì model đã thông báo ý định.

C. Chỉ thực thi lời gọi có cấu trúc phù hợp, không theo câu văn.

D. Trích mã đơn bằng regex rồi tự chọn bất kỳ công cụ có tên gần nhất.

**Câu 4 — Chọn hai.** Một khối tool_use chứa id, name và input. Hai quan hệ nào ứng dụng phải bảo toàn khi điều phối?

A. id liên kết kết quả sau này với đúng lần gọi.

B. Vị trí block trong mảng thay thế được id khi hai công cụ chạy song song.

C. Nội dung text bên cạnh luôn được dùng thay input nếu dễ đọc hơn.

D. name và input xác định hàm cùng đối số cần thực thi.

**Câu 5 — Chọn một.** Nhóm muốn một hàm trả chuỗi cho UI và một vòng xử lý công cụ dùng cùng response. Thiết kế nào phù hợp?

A. Cho UI xóa tool_use sau khi render rồi dùng đối tượng đã sửa cho vòng lặp.

B. Dùng lời tóm tắt của UI để tái tạo id và input ở lần gọi sau.

C. Thay response.content bằng text ngay sau khi nhận để giảm bộ nhớ.

D. Giữ response đầy đủ cho điều phối, trích text riêng chỉ để hiển thị.

## Đáp án và giải thích

1. **D.** D mất dữ liệu điều phối, không chỉ hiển thị. A giả định trạng thái tự lưu; B khai báo không thực thi; C lời diễn đạt không thay khối có cấu trúc.

2. **A, C.** A bảo toàn lịch sử; C xử lý theo hợp đồng. B giả định vị trí cố định; D mất cấu trúc và dễ nhầm văn bản với yêu cầu thực thi.

3. **C.** C giữ ranh giới diễn đạt và điều khiển. D thêm hành động không được biểu diễn trong luồng; A bịa yêu cầu; B nhầm ý định với kết quả thực thi.

4. **A, D.** D giữ hợp đồng thực thi; A giữ tương quan yêu cầu–kết quả. B không bền khi thứ tự hoàn thành đổi; C bỏ dữ liệu có cấu trúc để suy diễn từ lời nói.

5. **D.** D tách biểu diễn khỏi dữ liệu giao thức. C và A phá dữ liệu cần xử lý; B suy diễn lại thông tin đã có chính xác và dễ làm sai ID.

## Đối chiếu Bedrock: Handling tool use responses

Converse dùng `toolUse` với các trường `toolUseId`, `name`, `input` và có `stopReason` trong phản hồi. Giữ mọi khối nội dung, không giả định khối đầu luôn là văn bản. Cách chọn `auto`, `any` hoặc công cụ theo tên qua `toolChoice` phải theo giao diện nhà cung cấp. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276764). Bản lưu: `sources/bedrock-lessons/276764.json`.

## Đối chiếu Vertex

Giữ toàn bộ nội dung phản hồi của trợ lý, gồm `text`, `tool_use` và các trường ID, tên, đầu vào. Không giả định chỉ có một khối văn bản hoặc `tool_use` luôn ở vị trí cố định. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Handling message blocks](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289179). Bản lưu: `sources/vertex-lessons/289179.json`.
