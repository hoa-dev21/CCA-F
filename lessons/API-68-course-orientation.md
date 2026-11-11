# Bản đồ nội dung và cách luyện thực hành

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287818), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287818.json. Bài và câu hỏi tự biên soạn.

## Nội dung bài học


Khóa học bắt đầu từ chọn mô hình và truy cập API, rồi đến đánh giá và cải thiện prompt. Sau đó là dùng công cụ, tìm tài liệu để hỗ trợ trả lời (RAG), kết nối qua MCP, Claude Code và computer use, cuối cùng là workflow và agent.

Phần đánh giá xuất hiện trước kỹ thuật sửa prompt để bạn có cách đo xem thay đổi có hiệu quả không. Một câu trả lời nghe hay hơn chưa đủ để kết luận phiên bản mới tốt hơn trên nhiều tình huống.

Để thực hành theo khóa, cần Python cơ bản, môi trường chạy notebook và quyền truy cập API phù hợp. Các khóa dùng nền tảng đám mây có cách cấu hình nhà cung cấp riêng. Hãy tự chạy mã, thử đổi đầu vào và quan sát lỗi; chỉ xem video chưa chứng minh bạn hiểu cách triển khai.

Có thể dùng bản đồ sau để nối kiến thức: API nhận yêu cầu và ngữ cảnh; công cụ bổ sung khả năng và dữ liệu ngoài; MCP chuẩn hóa việc kết nối; workflow hoặc agent tổ chức các bước thực hiện. Đây là phần định hướng khóa học, không phải một mục kỹ thuật độc lập trong đề cương thi.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Nhóm học đến prompt engineering và muốn đổi prompt production ngay vì một câu trả lời mới hay hơn. Vì sao cần quay lại phần đánh giá trước khi quyết định?

A. Cần chờ học hết mọi kỹ thuật rồi mới được chạy bất kỳ đánh giá nào.

B. Cần tăng độ dài câu trả lời để thay đổi được nhìn thấy rõ hơn.

C. Cần so cải thiện/hồi quy trên tập ca và tiêu chí ổn định.

D. Cần dùng mô hình đắt hơn làm chuẩn rồi chép nguyên câu trả lời đó.

**Câu 2 — Chọn hai.** Một người đã xem video tool loop và chép notebook nhưng chưa tự chạy. Hai hoạt động nào tạo bằng chứng hiểu cách triển khai tốt hơn?

A. Ghi nhớ chữ cái đáp án của ví dụ rồi coi đó là kiểm thử triển khai.

B. Chạy luồng và thay đầu vào để quan sát yêu cầu tool, kết quả và lượt trả lời tiếp.

C. Thử lỗi có kiểm soát và giải thích hệ thống phản hồi/phục hồi ra sao.

D. Đánh dấu notebook đã hoàn thành khi mọi ô mã đã được sao chép.

**Câu 3 — Chọn một.** Một bản thiết kế viết “dùng MCP nên không cần orchestration hoặc quản lý context nữa”. Phân tích nào phù hợp với bản đồ khóa học?

A. Đúng nếu tất cả tool của workflow được khai báo trong cùng server.

B. Sai vì MCP và API chỉ là hai tên cho cùng lớp orchestration.

C. Đúng nếu schema của tool đã định nghĩa đủ kiểu đầu vào.

D. MCP kết nối; host vẫn điều phối bước và quản lý context.

**Câu 4 — Chọn một.** Notebook API trực tiếp chạy được nhưng bản cloud của đồng đội lỗi xác thực trước khi sinh câu trả lời. Người học đề xuất đổi prompt. Bước chẩn đoán nào ưu tiên?

A. Tăng max_tokens vì cloud có thể cần câu trả lời dài hơn để xác thực.

B. Kiểm tra client/provider, credential và quyền môi trường trước khi tối ưu nội dung yêu cầu.

C. Chỉ chép khóa của notebook đang chạy sang vì cùng model Claude.

D. Thêm vai trò kỹ sư cloud vào system prompt để model tự chọn credential.

**Câu 5 — Chọn hai.** Một nhóm muốn nối các phần khóa học thành prototype có thể đánh giá. Hai phân công trách nhiệm nào đúng?

A. API request mang nhiệm vụ/ngữ cảnh; công cụ cung cấp hành động hoặc dữ liệu bên ngoài.

B. Workflow/agent tổ chức các bước, còn đánh giá đo kết quả theo yêu cầu.

C. Một schema công cụ đủ để sinh mã, chạy công cụ và lưu bền toàn bộ trạng thái.

D. RAG tự tạo quyền truy cập cho mọi tài liệu mà truy vấn tìm thấy.

## Đáp án và giải thích

1. **C.** A sai: Đánh giá nên hỗ trợ cải tiến từ đầu, không phải chỉ xuất hiện sau mọi thay đổi. B sai: Độ dài chỉ đo hình thức, không xác nhận đáp ứng yêu cầu. C đúng: Một đầu ra hấp dẫn không ước lượng chất lượng trên phân bố tác vụ. D sai: Giá mô hình không tạo nhãn chuẩn đáng tin cho mọi tình huống.

2. **B, C.** A sai: Nhớ đáp án không chứng minh hiểu runtime và các trạng thái mới. B đúng: Tự quan sát chuỗi trạng thái giúp kiểm chứng mô hình hiểu về vòng công cụ. C đúng: Đường lỗi kiểm tra hiểu biết ngoài happy path của video. D sai: Sao chép nội dung không xác nhận đã thực thi hay hiểu kết quả.

3. **D.** A sai: Có chung server không tự quy định thứ tự, điều kiện và trạng thái workflow. B sai: Đó cũng là nhầm lẫn lớp; MCP không đồng nghĩa mọi API hay bộ điều phối. C sai: Kiểu dữ liệu không thay quản lý lịch sử, phụ thuộc hoặc điều kiện dừng. D đúng: Các lớp kết nối, ngữ cảnh và điều phối giải quyết các trách nhiệm khác nhau.

4. **B.** A sai: Ngân sách sinh không thực hiện xác thực nhà cung cấp. B đúng: Lỗi xảy ra trước suy luận nên cần sửa điều kiện truy cập, không phải cách diễn đạt. C sai: Cùng họ mô hình không đồng nghĩa cùng cơ chế xác thực/provider. D sai: Mô hình chưa được gọi và prompt không cấu hình danh tính của client.

5. **A, B.** A đúng: Phân biệt này giúp biết thông tin nào model nhận và năng lực nào cần executor. B đúng: Điều phối quyết định cách làm; phép đo xác nhận cách làm có đạt mục tiêu. C sai: Khai báo hợp đồng không tự cài đặt các trách nhiệm thực thi và lưu trữ. D sai: Truy xuất không thay lớp phân quyền dữ liệu của hệ thống.

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
