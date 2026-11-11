# Response streaming

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287734), sources/api-lessons/287734.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Streaming là gửi từng phần phản hồi khi mô hình đang tạo, giúp giao diện hiển thị sớm thay vì đợi toàn bộ tin nhắn. Nhiều sự kiện nhận được có thể thuộc cùng một yêu cầu API, không phải mỗi đoạn chữ là một lượt hội thoại mới.

Ứng dụng nên tách hai việc: hiển thị các phần văn bản để người dùng theo dõi và lưu đối tượng phản hồi hoàn chỉnh để xử lý tiếp. Đối tượng cuối giữ các khối nội dung và thông tin cần thiết cho lịch sử hoặc vòng gọi công cụ.

Ví dụ: Giao diện đã hiện nửa câu rồi kết nối bị ngắt. Điều đó chưa chứng minh phản hồi hoàn tất. Cần kiểm tra trạng thái kết thúc hoặc lỗi và xử lý phần kết quả còn thiếu.

Tên sự kiện và các phương thức thư viện trong video tùy phiên bản. Với phạm vi ôn thi đã lưu, điều chính cần phân biệt là dữ liệu đang truyền với kết quả hoàn chỉnh; không cần học sâu mọi chi tiết triển khai streaming.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** UI đã hiển thị nửa câu rồi kết nối streaming bị ngắt. Backend hiện đánh dấu thành công khi nhận chunk đầu tiên. Cách sửa nào đúng?

A. Chờ thêm thời gian cố định rồi báo thành công nếu không có chunk mới.

B. Chỉ xác nhận hoàn tất khi nhận kết thúc hợp lệ, không chỉ delta.

C. Ghép dấu chấm vào cuối phần text để biến thành câu trả lời hoàn chỉnh.

D. Coi thành công nếu phần đã nhận tạo thành câu có nghĩa.

**Câu 2 — Chọn hai.** Ứng dụng cần vừa hiển thị sớm vừa dùng phản hồi cho vòng công cụ tiếp theo. Hai luồng xử lý nào nên được tách rõ?

A. Cập nhật UI từ các delta phù hợp để người dùng thấy tiến trình.

B. Chỉ lưu text đã render vì mọi metadata có thể suy ra từ câu chữ.

C. Biến mỗi delta thành một assistant message độc lập trong lịch sử.

D. Tích lũy phản hồi đầy đủ gồm các content block và metadata cần cho bước sau.

**Câu 3 — Chọn một.** Một phản hồi streaming gồm 80 sự kiện. Bộ đo chi phí nội bộ tính đó là 80 lượt gọi mô hình. Điều chỉnh nào phù hợp?

A. Chia số sự kiện cho độ dài câu trung bình để suy ra số lượt.

B. Đếm request và usage của nó, không đếm chunk stream.

C. Dùng số dòng UI hiển thị để đo số tin nhắn mô hình.

D. Đếm mỗi sự kiện có chữ là một lượt, bỏ các sự kiện metadata.

**Câu 4 — Chọn hai.** Mã mẫu streaming chạy được với SDK cũ; nhóm đổi SDK và giữ adapter bằng cách đoán tên event. Hai hành động nào giảm lỗi tích hợp?

A. Đối chiếu event/method với hợp đồng của SDK đang dùng.

B. Chỉ thử một câu trả lời thuần text ngắn rồi suy rộng sang tool loop.

C. Bỏ event không biết và vẫn báo hoàn tất khi socket đóng.

D. Kiểm thử hoàn tất, lỗi giữa chừng và phản hồi có nhiều loại content block.

**Câu 5 — Chọn một.** UI nối các delta text đúng, nhưng lượt công cụ sau thiếu ID cần liên kết. Lỗi thiết kế có khả năng nhất là gì?

A. Cần coi mọi delta là user message để mô hình khôi phục ID.

B. Streaming tự động tạo ID mới sau mỗi delta nên không thể giữ liên kết.

C. Ứng dụng dùng chuỗi đã render thay cho đối tượng phản hồi đầy đủ khi lưu lịch sử.

D. Phản hồi text dài làm ID công cụ hết hiệu lực.

## Đáp án và giải thích

1. **B.** A sai: im lặng có thể do mất kết nối, không phải tín hiệu kết thúc hợp lệ. B đúng: nhận dữ liệu một phần chưa chứng minh yêu cầu đã hoàn thành. C sai: sửa trình bày không khôi phục nội dung chưa nhận được. D sai: văn bản có nghĩa vẫn có thể chỉ là phần của phản hồi hoặc thiếu tool call.

2. **A, D.** A đúng: đây là mục tiêu trải nghiệm của streaming. B sai: stop reason và khối công cụ không thể được suy ra đáng tin từ text. C sai: nhiều delta thuộc một phản hồi, không phải nhiều lượt hội thoại. D đúng: giao thức tiếp nối cần dữ liệu hoàn chỉnh ngoài text hiển thị.

3. **B.** A sai: độ dài văn bản không xác định biên yêu cầu API. B đúng: nhiều sự kiện có thể là các phần của cùng một yêu cầu. C sai: xuống dòng hiển thị không mang nghĩa giao thức gọi API. D sai: delta văn bản vẫn là thành phần của cùng phản hồi.

4. **A, D.** A đúng: tên và cách ghép phản hồi có thể phụ thuộc phiên bản. B sai: đường đi đơn giản không kiểm tra các loại block hoặc lỗi tiếp nối. C sai: socket đóng không luôn là kết thúc thành công, event bị bỏ có thể cần thiết. D đúng: các nhánh này phát hiện việc nhầm delta, trạng thái và đối tượng cuối.

5. **C.** A sai: đổi role làm sai lịch sử và không tái tạo được dữ liệu đã bỏ. B sai: không thể suy ra hạn chế đó; lỗi nằm ở việc lưu dữ liệu cần thiết. C đúng: chuỗi hiển thị có thể mất content block và định danh công cụ. D sai: độ dài text không tự giải thích mất ID trong adapter.

## Đối chiếu Bedrock

Mẫu dùng `converse_stream` và lấy văn bản ở `contentBlockDelta.delta.text` trong luồng phản hồi. Bộ xử lý thực tế phải phân biệt sự kiện văn bản, công cụ, suy luận và lỗi, ghép dữ liệu theo từng khối rồi kiểm tra trạng thái kết thúc. Không giả định mọi phần dữ liệu mới đều có văn bản. Dùng chung câu hỏi.

Nguồn đối chiếu: [Streaming](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276721). Bản lưu: `sources/bedrock-lessons/276721.json`.

## Đối chiếu Vertex

Mẫu dùng `messages.create(stream=True)` hoặc các phương thức `messages.stream`, `text_stream` và `get_final_message`. Mỗi phần nhận được không nhất thiết là một từ. Luồng chữ phục vụ hiển thị; lịch sử và công cụ cần tin nhắn cuối đầy đủ cùng trạng thái kết thúc. `MessageDelta` có thể chỉ cập nhật thông tin hoặc lý do dừng, không tự là toàn bộ tin nhắn hoàn chỉnh.

Nguồn đối chiếu: [Response streaming](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289162). Bản lưu: `sources/vertex-lessons/289162.json`.
