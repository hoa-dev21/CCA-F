# Duy trì hội thoại nhiều lượt

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287735). Bản nội dung đã đọc: sources/api-lessons/287735.json. Câu hỏi tự biên soạn phục vụ ôn Architect.

## Nội dung bài học


Trong cách dùng Messages API của bài học, mỗi yêu cầu được gửi riêng. Claude chỉ có thể dựa vào lịch sử trò chuyện nếu ứng dụng đưa lịch sử đó vào yêu cầu. Việc lưu và gửi lại những tin nhắn cần thiết gọi là quản lý trạng thái hội thoại (conversation state).

Luồng cơ bản gồm bốn bước:

1. Thêm câu hỏi vào danh sách `messages` với vai trò `user`, tức tin nhắn của người dùng.
2. Gửi danh sách đó cho Claude.
3. Lưu câu trả lời của Claude vào danh sách với vai trò `assistant`, tức tin nhắn của trợ lý.
4. Thêm câu hỏi tiếp theo của người dùng và gửi lại phần lịch sử cần thiết.

Ví dụ: Khách nêu đơn hàng A, trợ lý hỏi muốn đổi hay trả, rồi khách đáp “trả”. Nếu yêu cầu cuối chỉ có chữ “trả”, Claude thiếu thông tin để biết khách đang nói đến đơn nào. Ứng dụng phải gửi cả những lượt liên quan trước đó.

Giữ nguyên đối tượng kết nối API (client) không tự giữ lịch sử cho mô hình. Ngay cả khi lịch sử đã được lưu trong cơ sở dữ liệu của ứng dụng, Claude vẫn không nhận được nếu ứng dụng chưa đưa nó vào yêu cầu.

## Bài thực hành: Chat exercise

Trong bài thực hành, chương trình tạo danh sách `messages` bên ngoài vòng lặp. Mỗi vòng, chương trình nhận câu nhập từ người dùng, lưu câu đó, gọi `chat(messages)`, lưu câu trả lời rồi hiển thị kết quả. Các hàm thêm tin nhắn người dùng, thêm tin nhắn trợ lý và gọi API được tách riêng để dễ kiểm soát từng bước.

Bạn có thể thử hỏi “1 + 1 bằng bao nhiêu?”, sau đó nói “thêm 2”. Nếu lịch sử được gửi đúng, Claude có đủ ngữ cảnh để hiểu lượt tiếp theo. Nếu tạo lại danh sách rỗng trong mỗi vòng, hoặc chỉ in câu trả lời mà không lưu, chương trình có thể mất mạch hội thoại.

Vòng `while True` và thao tác ngắt trong notebook chỉ phục vụ minh họa. Ứng dụng thực tế cần cách thoát, xử lý lỗi và lựa chọn lịch sử phù hợp. Với phản hồi có công cụ hoặc nhiều loại nội dung, không nên mặc định lấy `content[0].text` là đã lưu đủ câu trả lời.

Nguồn bài thực hành: đã đọc phụ đề tiếng Anh của [Chat exercise](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287727), lưu tại sources/api-media/287727.json.

## Tự kiểm tra

**Question 1 — Choose one.** The server stores the full conversation, but a new request contains only “shorten the second paragraph.” Changing models does not help. What addresses the cause?

A. Put only the history record ID in the prompt.

B. Ask the model to infer context from writing style.

C. Load the relevant history into the new request's `messages`.

D. Keep HTTP connections open longer to preserve memory.

**Question 2 — Choose two.** Which TWO requirements let “revise the paragraph you just wrote” refer to the correct content in a multi-turn conversation?

A. Send history only to monitoring logs to save tokens.

B. Store the previous answer with the `assistant` role.

C. Relabel the previous answer as `user` for higher priority.

D. Send relevant history and the new user message in the correct order.

**Question 3 — Choose one.** Two conversations concern different customers, but a wrapper uses one global `messages` array. What most directly prevents context mixing?

A. Append each customer's name to the shared array.

B. Separate history by conversation before building requests.

C. Keep only both conversations' user messages.

D. Use a model with a larger context window.

**Question 4 — Choose two.** The system retains only user messages. “Keep your table and revise its last column” fails. Which TWO changes are needed?

A. Declare that “table” always means user-provided content.

B. Retain the assistant response containing the referenced table.

C. Repeat the latest request twice.

D. Include the selected history in the model request, rather than merely storing it server-side.

**Question 5 — Choose one.** A long answer is removed to save tokens, but the next question compares two items from it. Which reduction is appropriate?

A. Keep greetings, model name, and turn count for reconstruction.

B. Keep “already answered” and ask the model to infer the items.

C. Keep the two items and the conversation needed to identify comparison criteria.

D. Keep every user question but remove all assistant content.

## Đáp án và giải thích

1. **C.** C đưa ngữ cảnh vào nơi mô hình thực sự đọc. A chỉ có định danh, chưa có nội dung; B yêu cầu đoán; D nhầm vòng đời kết nối với trạng thái hội thoại.

2. **B, D.** B bảo toàn người nói và D bảo toàn ngữ cảnh cho lượt mới. C làm sai nguồn phát biểu; A lưu cho hệ thống quan sát nhưng không cung cấp cho mô hình.

3. **B.** B giữ ranh giới phiên. A vẫn gửi dữ liệu lẫn nhau; D tăng dung lượng nhưng giữ lỗi trộn phiên; C vừa mất câu trả lời tham chiếu vừa không tách khách hàng.

4. **B, D.** B giữ đối tượng cần sửa, D làm đối tượng đó khả dụng cho mô hình. A đổi sai ý nghĩa hội thoại; C không tái tạo dữ liệu bị thiếu.

5. **C.** C giảm dữ liệu nhưng giữ thông tin cần cho nhiệm vụ. A và B chỉ giữ siêu dữ liệu; D có thể giữ yêu cầu ban đầu nhưng vẫn mất đối tượng do assistant tạo.

## Đối chiếu Bedrock

Ví dụ Converse biểu diễn nội dung bằng danh sách khối. Ứng dụng vẫn phải gửi lịch sử cần thiết; việc API không tự nối các lượt không phải cam kết rằng nhà cung cấp không lưu nhật ký hoặc dữ liệu. Quy tắc luân phiên vai trò trong ví dụ không nên được áp thành quy định chung cho mọi API. Các kiến thức về vai trò và ngữ cảnh dùng chung câu hỏi.

Nguồn đối chiếu: [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276722). Bản lưu: `sources/bedrock-lessons/276722.json`.

## Đối chiếu Vertex

Mẫu Vertex lưu các tin nhắn `user` và `assistant` rồi gửi lại trong `messages`. “Stateless” ở đây nói rằng mỗi yêu cầu phải có ngữ cảnh cần dùng, không có nghĩa nhà cung cấp tuyệt đối không lưu dữ liệu. Với công cụ hoặc nhiều loại nội dung, cần giữ các khối phù hợp, không chỉ lấy phần văn bản đầu tiên.

Nguồn đối chiếu: [Multi-turn conversations](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289156). Bản lưu: `sources/vertex-lessons/289156.json`.

## Đối chiếu qua phụ đề chính thức

Theo hồ sơ đọc phụ đề, bài chatbot Bedrock nhận câu nhập, thêm vào lịch sử, gọi mô hình, lưu câu trả lời rồi hiển thị. Ví dụ tạo mô tả sản phẩm, yêu cầu rút ngắn, rồi thêm màu sắc kiểm tra việc giữ ngữ cảnh. Giao diện nhập khác nhau giữa VS Code và notebook trên trình duyệt không làm thay đổi trách nhiệm lưu và gửi lịch sử; không bắt buộc dùng một trình soạn thảo duy nhất.

Nguồn đối chiếu: [Chat bot exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276725). Bản lưu: `sources/bedrock-media/276725.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đối chiếu toàn bộ phụ đề với bài API 287727 ghi nhận chỉ có khác biệt nhỏ như “built-in/built in” hoặc “an/and”, không đổi nội dung học. Kết luận dựa trên nội dung, không chỉ tên bài hay thời lượng. Dùng chung câu hỏi và giữ các lưu ý về xác thực, nhà cung cấp, tính tương thích của mô hình.

Nguồn đối chiếu: [Chat exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289150). Bản lưu: `sources/vertex-media/289150.json`.
