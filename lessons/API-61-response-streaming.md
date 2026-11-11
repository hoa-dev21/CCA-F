# Response streaming

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287734), sources/api-lessons/287734.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Streaming là gửi từng phần phản hồi khi mô hình đang tạo, giúp giao diện hiển thị sớm thay vì đợi toàn bộ tin nhắn. Nhiều sự kiện nhận được có thể thuộc cùng một yêu cầu API, không phải mỗi đoạn chữ là một lượt hội thoại mới.

Ứng dụng nên tách hai việc: hiển thị các phần văn bản để người dùng theo dõi và lưu đối tượng phản hồi hoàn chỉnh để xử lý tiếp. Đối tượng cuối giữ các khối nội dung và thông tin cần thiết cho lịch sử hoặc vòng gọi công cụ.

Ví dụ: Giao diện đã hiện nửa câu rồi kết nối bị ngắt. Điều đó chưa chứng minh phản hồi hoàn tất. Cần kiểm tra trạng thái kết thúc hoặc lỗi và xử lý phần kết quả còn thiếu.

Tên sự kiện và các phương thức thư viện trong video tùy phiên bản. Với phạm vi ôn thi đã lưu, điều chính cần phân biệt là dữ liệu đang truyền với kết quả hoàn chỉnh; không cần học sâu mọi chi tiết triển khai streaming.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A stream disconnects after half a sentence, but the backend marks success on the first chunk. What should change?

A. Wait a fixed interval and report success if no chunks arrive.

B. Confirm completion only after a valid terminal event.

C. Append a period to complete the answer.

D. Accept any meaningful partial sentence.

**Question 2 — Choose two.** Which TWO processing paths support early display and later tool-loop use?

A. Update the UI from suitable deltas.

B. Store only rendered text and infer metadata later.

C. Make every delta a separate assistant message.

D. Accumulate the complete response with required content blocks and metadata.

**Question 3 — Choose one.** One streamed response contains 80 events, counted internally as 80 model calls. What is correct?

A. Divide events by average sentence length.

B. Count the request and its usage, not individual stream chunks.

C. Count displayed UI lines as model messages.

D. Count text-bearing events only.

**Question 4 — Choose two.** Which TWO actions reduce integration errors when upgrading a streaming SDK?

A. Check event names and methods against the installed SDK contract.

B. Test one short text response and assume tool loops work.

C. Ignore unknown events and report completion on socket closure.

D. Test valid completion, midstream errors, and mixed content blocks.

**Question 5 — Choose one.** Displayed deltas are correct, but the next tool turn lacks required IDs. What is the likely design flaw?

A. All deltas need the user role to restore IDs.

B. Streaming necessarily changes IDs on every delta.

C. Rendered text was stored instead of the full response object.

D. Long text makes tool IDs expire.

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
