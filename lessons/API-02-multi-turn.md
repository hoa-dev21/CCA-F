# Multi-Turn conversations — Duy trì hội thoại nhiều lượt

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287735). Bản nội dung đã đọc: sources/api-lessons/287735.json. Câu hỏi tự biên soạn phục vụ ôn Architect.

## Tóm tắt

Trong cách dùng Messages API của bài học, mỗi request độc lập. API không tự nhớ cuộc trao đổi trước để trả lời request sau. Ứng dụng chịu trách nhiệm quản lý **conversation state** — trạng thái hội thoại.

Luồng cơ bản:

1. Thêm câu hỏi vào danh sách `messages` với role `user`.
2. Gửi danh sách cho Claude.
3. Thêm câu trả lời của Claude với role `assistant`.
4. Thêm câu hỏi tiếp theo với role `user`, rồi gửi lại lịch sử cần thiết.

Ví dụ: khách nêu đơn hàng A, trợ lý hỏi khách muốn đổi hay trả, khách đáp “trả”. Nếu request cuối chỉ chứa chữ “trả”, mô hình không có căn cứ biết đó là đơn hàng nào hay câu hỏi nào đang được trả lời.

Trong ví dụ văn bản đơn giản, bài học dùng hàm thêm user message, thêm assistant message và hàm `chat(messages)`. Tách ba trách nhiệm này giúp tránh quên lưu câu trả lời trước khi gửi lượt mới.

Điểm dễ nhầm: giữ nguyên API client không đồng nghĩa giữ lịch sử hội thoại. Lưu thông tin trong biến ở server cũng chưa đủ nếu thông tin đó không được đưa vào request.

## Bài thực hành: Chat exercise

Đã đọc toàn bộ phụ đề tiếng Anh của [Chat exercise](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287727) từ trình phát chính thức, lưu ở sources/api-media/287727.json. Bài xây chatbot notebook: khởi tạo `messages` ngoài vòng lặp, lấy `input()`, thêm user message, gọi `chat(messages)`, lưu câu trả lời thành assistant message rồi in ra và chờ lượt tiếp theo. Ví dụ “1+1”, sau đó “thêm2” kiểm tra context của lượt trước có được gửi lại.

Nếu khởi tạo danh sách trong mỗi vòng hoặc chỉ in mà không lưu assistant response, chatbot có thể trả lời lượt đơn đúng nhưng mất mạch ở lượt sau. Vòng `while True` và nút interrupt là cách demo notebook, không phải tiêu chí dừng nghiệp vụ của một agent tool loop. Trong ứng dụng thật, cần lệnh thoát, xử lý lỗi và chính sách context phù hợp. Dùng các câu hỏi dưới đây để kiểm tra trách nhiệm lưu/gửi history của bài thực hành.

Liên hệ ôn thi: đây là nền tảng cho context management. Việc rút gọn lịch sử dài và lưu tool blocks thuộc các bài tiếp theo; không mặc định helper chỉ lấy `content[0].text` phù hợp mọi loại phản hồi.

## Câu hỏi — làm trước khi đọc đáp án

**1. Chọn một.** Trợ lý nhận câu “hãy rút gọn nó” nhưng chuyển sang chủ đề khác. Log cho thấy request chỉ chứa câu mới nhất. Cách sửa trực tiếp?

A. Tăng `max_tokens`.

B. Tạo client mới cho mỗi câu hỏi.

C. Gửi lịch sử có đoạn cần rút gọn và yêu cầu mới.

D. Gửi lại câu mới nhất hai lần.

**2. Chọn hai.** Để giữ đầy đủ cuộc trao đổi văn bản theo mẫu của bài, ứng dụng cần làm gì?

A. Lưu phản hồi trước với role `assistant`.

B. Trông chờ client SDK tự khôi phục lịch sử.

C. Chuyển mọi phản hồi cũ thành role `user`.

D. Đưa lịch sử và câu hỏi mới vào request tiếp theo.

**3. Chọn một.** Server đã lưu toàn bộ lịch sử vào cơ sở dữ liệu nhưng chỉ truyền câu mới nhất tới API. Hệ quả nào đúng?

A. Claude vẫn thiếu lịch sử vì nó chưa nằm trong request.

B. Claude tự tìm được lịch sử qua tên API key.

C. Claude truy vấn cơ sở dữ liệu mà không cần tích hợp.

D. Lịch sử tự được gắn qua đối tượng client.

## Đáp án

1. **C.** Bổ sung ngữ cảnh đang thiếu. A chỉ tăng trần đầu ra; B không bổ sung dữ liệu; D lặp lại sự mơ hồ.
2. **A, D.** Cần lưu đúng vai trò và thực sự truyền lịch sử. B giả định cơ chế tự nhớ; C làm sai vai trò người nói.
3. **A.** Lưu trữ phía ứng dụng và ngữ cảnh mô hình nhận được là hai việc khác nhau. B, C, D đều giả định kết nối tự động không có trong mẫu này.

## Đối chiếu Bedrock

Đã đọc [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276722) và dùng chung kiến thức/câu hỏi về vai trò hoặc quản lý context. Trong ví dụ Converse, content là danh sách blocks. “Không nhớ request trước” chỉ nói context hội thoại không tự được nối cho lần gọi này; không phải cam kết provider không có logs/retention. Không dùng quy tắc luân phiên role trong ví dụ làm đặc tả phổ quát của mọi API. Nguồn: sources/bedrock-lessons/276722.json.

## Đối chiếu Vertex

Nguồn [Multi-turn conversations](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289156), sources/vertex-lessons/289156.json. Mẫu giữ danh sách user/assistant rồi gửi lịch sử trong messages. Stateless của request nói về context suy luận, không phải cam kết dữ liệu không bao giờ được lưu ở provider. Với tool/multimodal cần giữ content blocks phù hợp, không chỉ lấy phần text đầu tiên.

## Đối chiếu qua phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Chat bot exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276725), sources/bedrock-media/276725.json. Bài chatbot Bedrock lấy user input, thêm vào messages, gọi chat, lưu assistant response rồi in. Ví dụ product description -> make it shorter -> add a color kiểm tra context. Khác cách hiển thị input giữa VSCode/browser notebook không làm thay đổi trách nhiệm lưu/gửi lịch sử; không bắt buộc chỉ dùng một IDE.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Chat exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289150), sources/vertex-media/289150.json. Đối chiếu toàn bộ phụ đề với nguồn API287727 đã đọc: chỉ khác built-in/built in hoặc an/and do cách chép phụ đề, không đổi nội dung bài. Không suy từ tên/duration. Giữ các lưu ý về xác thực/provider và tính tương thích model của bài chung. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
