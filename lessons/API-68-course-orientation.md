# Bản đồ nội dung và cách luyện thực hành

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287818), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287818.json. Bài và câu hỏi tự biên soạn.

## Nội dung bài học


Khóa học bắt đầu từ chọn mô hình và truy cập API, rồi đến đánh giá và cải thiện prompt. Sau đó là dùng công cụ, tìm tài liệu để hỗ trợ trả lời (RAG), kết nối qua MCP, Claude Code và computer use, cuối cùng là workflow và agent.

Phần đánh giá xuất hiện trước kỹ thuật sửa prompt để bạn có cách đo xem thay đổi có hiệu quả không. Một câu trả lời nghe hay hơn chưa đủ để kết luận phiên bản mới tốt hơn trên nhiều tình huống.

Để thực hành theo khóa, cần Python cơ bản, môi trường chạy notebook và quyền truy cập API phù hợp. Các khóa dùng nền tảng đám mây có cách cấu hình nhà cung cấp riêng. Hãy tự chạy mã, thử đổi đầu vào và quan sát lỗi; chỉ xem video chưa chứng minh bạn hiểu cách triển khai.

Có thể dùng bản đồ sau để nối kiến thức: API nhận yêu cầu và ngữ cảnh; công cụ bổ sung khả năng và dữ liệu ngoài; MCP chuẩn hóa việc kết nối; workflow hoặc agent tổ chức các bước thực hiện. Đây là phần định hướng khóa học, không phải một mục kỹ thuật độc lập trong đề cương thi.

## Câu hỏi

**1. Chọn một.** Vừa đổi prompt và thấy một câu trả lời hay hơn. Phần nào của khóa giúp kiểm tra cải thiện có nhất quán không?

A. Chỉ xem video nhanh hơn.

B. Prompt evaluation với dữ liệu và tiêu chí thích hợp.

C. Chỉ đổi tên notebook.

D. Chỉ dùng mô hình đắt nhất.

**2. Chọn một.** Muốn kiểm tra mình hiểu một mẫu công cụ loop sau khi xem video. Cách học sát lời khuyên của bài nhất?

A. Chỉ ghi nhớ chữ cái đáp án.

B. Đánh dấu đã xem rồi bỏ qua kết quả thực thi.

C. Tự chạy mã, thay đổi tình huống và quan sát kết quả/lỗi.

D. Giả định notebook không cần môi trường Python.

**3. Chọn một.** Bài giới thiệu nhắc API, MCP và các quy trình làm việc. Có nên coi đây là ba tên gọi của cùng một lớp không?

A. Có, chỉ khác cách viết.

B. Có, một bản mô tả cấu trúc dữ liệu tự triển khai mọi quy trình làm việc.

C. Có, cấu hình MCP thay toàn bộ việc quản lý ngữ cảnh.

D. Không; chúng có vai trò riêng và cần hiểu cách phối hợp qua các bài sau.

## Đáp án

1. **B.** A không đo chất lượng; C không đổi phép đo; D không chứng minh prompt tốt hơn.

2. **C.** A/B chỉ ghi nhận việc xem; D bỏ yêu cầu môi trường thực hành.

3. **D.** A xóa ranh giới kiến trúc; B nhầm mô tả với điều phối thực thi; C bỏ trách nhiệm của host/API ngữ cảnh.

## Đối chiếu qua phụ đề chính thức

Bài kết khóa nhấn mạnh đánh giá có hệ thống thay vì chỉ thử tay vài lượt, viết yêu cầu rõ, dùng công cụ và chọn workflow hoặc agent phù hợp. Các hướng học tiếp gồm điều phối tác nhân, đánh giá và giám sát, RAG có tác nhân và đánh giá chất lượng RAG, công cụ. Đánh giá công cụ còn xem mô tả có giúp chọn đúng hay không. Đây là tổng kết và hướng học tiếp, không bổ sung quy định API mới hay xác nhận người học đạt chuẩn thi.

Nguồn đối chiếu: [Course Wrap Up](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287802). Bản lưu: `sources/api-media/287802.json`.

## Đối chiếu phụ đề chính thức

Phần tổng kết Bedrock nhắc tham số API, viết prompt, dùng công cụ và máy tính, đánh giá cùng các chủ đề nâng cao. Hướng tiếp theo gồm điều phối, cách thay thế RAG và quy trình có tác nhân. Chỉ được nhắc trong tổng kết chưa chứng minh một chủ đề thuộc phạm vi thi hoặc đã có bài chi tiết trong chương trình hiện tại. Dùng chung câu hỏi.

Nguồn đối chiếu: [Course wrap up](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276827). Bản lưu: `sources/bedrock-media/276827.json`.

## Đối chiếu phụ đề chính thức

Bài mở đầu Vertex có lộ trình tương tự nhưng truy cập mô hình qua Vertex, cần tài khoản Google Cloud có quyền phù hợp và môi trường Python, notebook. Khuyến khích tự chạy, sửa notebook, xem lại video và thử tình huống mới. Không coi khóa Anthropic trực tiếp là điều kiện bắt buộc của Vertex. Dùng chung câu hỏi.

Nguồn đối chiếu: [Welcome to the course](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289145). Bản lưu: `sources/vertex-media/289145.json`.

## Đối chiếu phụ đề chính thức

Bài kết khóa Vertex nhấn mạnh đánh giá, yêu cầu rõ, công cụ và cách chọn workflow hoặc agent. Gợi ý đọc tiếp về điều phối, đánh giá và giám sát tác nhân, RAG có tác nhân và đánh giá RAG, công cụ. Đây là hướng học tiếp, không biến những chủ đề được nhắc tới thành nội dung đã học đầy đủ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Course Wrap Up](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289240). Bản lưu: `sources/vertex-media/289240.json`.
