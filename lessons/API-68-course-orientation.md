# Welcome — Bản đồ nội dung và cách luyện thực hành

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287818), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287818.json. Bài và câu hỏi tự biên soạn.

## Tóm tắt

Khóa đi từ lựa chọn model và truy cập API sang đánh giá prompt, cải thiện prompt, tool use, RAG, MCP, Claude Code/Computer Use và cuối cùng là workflows/agents. Đánh giá prompt xuất hiện trước kỹ thuật cải tiến để có cách đo thay đổi, thay vì chỉ chọn câu trả lời nghe hay.

Yêu cầu thực hành trong phần giới thiệu là Python cơ bản, môi trường chạy notebook và quyền truy cập API phù hợp. Bản giới thiệu không thay hướng dẫn xác thực cụ thể; các khóa cloud dùng cấu hình provider riêng. Người học nên viết/chạy mã cùng bài, thử đổi notebook và áp dụng kỹ thuật vào một trường hợp mới. Có thể tăng tốc video để xem lại, nhưng chỉ xem người khác viết mã chưa chứng minh hiểu cách triển khai.

Đối với ôn Architect, dùng bản đồ này để nối các lớp: API nhận context; tool bổ sung khả năng và dữ liệu ngoài; MCP chuẩn hóa tích hợp; workflow/agent điều phối các bước. Chi tiết của từng lớp nằm ở bài tương ứng. Đây là bài định hướng, không phải một task statement độc lập trong Exam Guide.

## Câu hỏi

**1. Chọn một.** Vừa đổi prompt và thấy một câu trả lời hay hơn. Phần nào của khóa giúp kiểm tra cải thiện có nhất quán không?

A. Chỉ xem video nhanh hơn.

B. Prompt evaluation với dữ liệu và tiêu chí thích hợp.

C. Chỉ đổi tên notebook.

D. Chỉ dùng model đắt nhất.

**2. Chọn một.** Muốn kiểm tra mình hiểu một mẫu tool loop sau khi xem video. Cách học sát lời khuyên của bài nhất?

A. Chỉ ghi nhớ chữ cái đáp án.

B. Đánh dấu đã xem rồi bỏ qua kết quả thực thi.

C. Tự chạy mã, thay đổi tình huống và quan sát kết quả/lỗi.

D. Giả định notebook không cần môi trường Python.

**3. Chọn một.** Bài giới thiệu nhắc API, MCP và workflows. Có nên coi đây là ba tên gọi của cùng một lớp không?

A. Có, chỉ khác cách viết.

B. Có, một schema tự triển khai mọi workflow.

C. Có, cấu hình MCP thay toàn bộ việc quản lý context.

D. Không; chúng có vai trò riêng và cần hiểu cách phối hợp qua các bài sau.

## Đáp án

1. **B.** A không đo chất lượng; C không đổi phép đo; D không chứng minh prompt tốt hơn.

2. **C.** A/B chỉ ghi nhận việc xem; D bỏ yêu cầu môi trường thực hành.

3. **D.** A xóa ranh giới kiến trúc; B nhầm mô tả với điều phối thực thi; C bỏ trách nhiệm của host/API context.

## Đối chiếu qua phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Course Wrap Up](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287802), sources/api-media/287802.json. Bài kết thúc nhấn mạnh eval thay thử tay vài lượt; prompt rõ/direct; tool use, Claude Code/Computer Use và workflow/agent trade-offs. Các hướng đọc tiếp được nêu là orchestration, agent eval/monitoring, agentic RAG và RAG/tool evaluation. Tool eval kiểm tra cả mô tả có giúp chọn đúng tool không. Đây là recap/định hướng tiếp, không bổ sung contract API mới và không tự xác nhận người học đã đạt chuẩn thi.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Course wrap up](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276827), sources/bedrock-media/276827.json. Recap API parameters, prompting, tool/computer use, eval và các chủ đề nâng cao; nhấn mạnh không bỏ evaluation. Hướng tiếp theo là orchestration, RAG alternatives và agentic workflows. Những chủ đề được recap nhắc đến không tự chứng minh là mục tiêu thi hoặc đã có bài tương ứng trong curriculum hiện tại. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Welcome to the course](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289145), sources/vertex-media/289145.json. Lộ trình tương tự nhưng truy cập model qua Vertex, cần Google Cloud account có quyền Vertex/model Anthropic và môi trường Python/notebook. Khuyến khích tự chạy/thay đổi notebook, xem lại video và áp dụng tình huống mới. Không dùng Anthropic API key trực tiếp như điều kiện bắt buộc cho Vertex. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Course Wrap Up](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289240), sources/vertex-media/289240.json. Recap nhấn mạnh eval, prompting rõ, tools và workflow/agent trade-offs; gợi ý nghiên cứu orchestration, agent eval/monitoring, agentic RAG và RAG/tool eval. Đây là định hướng tiếp, không tự mở rộng nội dung đã học thành mọi chủ đề mới. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
