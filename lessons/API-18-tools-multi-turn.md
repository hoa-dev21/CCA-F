# Công cụ qua nhiều lượt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287750), sources/api-lessons/287750.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một câu hỏi có thể cần nhiều lần trao đổi giữa Claude và công cụ. Ví dụ: để xác định một ngày trong tương lai, Claude có thể cần công cụ lấy ngày hiện tại, rồi dùng kết quả đó để tính ngày sau một khoảng thời gian. Vì vậy, không nên dừng chỉ vì đã gọi một công cụ.

Hàm gửi yêu cầu cần nhận danh sách công cụ và trả về đối tượng phản hồi đầy đủ. Phần lưu lịch sử phải giữ được các dạng nội dung mà chương trình sử dụng, như chuỗi văn bản, danh sách khối hoặc nội dung của tin nhắn. Có thể viết hàm riêng để lấy văn bản hiển thị, nhưng không dùng phần văn bản đó thay cho toàn bộ phản hồi trong luồng xử lý.

Vòng xử lý gồm: gửi yêu cầu, lưu phản hồi, thực hiện các công cụ được yêu cầu, thêm kết quả vào lịch sử rồi gọi Claude tiếp. Claude dùng kết quả mới để trả lời hoặc yêu cầu công cụ khác.

Phần liên hệ với đề cương thi nhấn mạnh trường `stop_reason`, tức lý do mô hình dừng phản hồi. Giá trị `tool_use` cho biết cần xử lý yêu cầu công cụ; `end_turn` cho biết mô hình kết thúc lượt. Có văn bản trong phản hồi chưa đủ để kết luận đã xong, vì cùng phản hồi đó vẫn có thể chứa khối `tool_use`.

## Tự kiểm tra

**Question 1 — Choose one.** A reminder request requires today's date and then a target date. The host stops after the first tool because text exists. What should change?

A. Treat any text as completion.

B. Return the tool result and continue according to the next response.

C. Calculate the target before obtaining today's date.

D. Execute every available tool to avoid another turn.

**Question 2 — Choose two.** Which TWO wrapper choices support both display and multi-turn tool use?

A. Return text only and reconstruct tool calls from prose.

B. Use a separate text-extraction function for the UI.

C. Discard intermediate blocks after every turn.

D. Return the full response object to orchestration.

**Question 3 — Choose one.** The response says “finished” but has `stop_reason=tool_use`. What should the host do?

A. Rewrite the reason as `end_turn` for consistency.

B. Stop when text blocks outnumber tool blocks.

C. Use the final sentence as the stopping condition.

D. Process valid tool requests and send their results back.

**Question 4 — Choose two.** The second turn repeats a tool because it cannot see the first result. Which TWO items should be checked in the second request?

A. The corresponding tool result and returned data in history.

B. The assistant message containing the earlier request.

C. The same displayed text length as before.

D. The UI rendering function's name.

**Question 5 — Choose one.** The host permits eight iterations, but iteration eight still requests a tool. What status is accurate?

A. Stop at the budget and report incomplete work.

B. Report success because the maximum iterations were used.

C. Continue without limit because tool calls override budgets.

D. Discard the final tool request and declare its text complete.

## Đáp án và giải thích

1. **B.** B cho model dùng kết quả để chọn bước sau. C thiếu đầu vào; D bỏ phụ thuộc và có thể chạy thao tác không cần; A text có thể đi cùng tool_use.

2. **B, D.** D giữ trạng thái giao thức, B tách nhu cầu UI. A mất id/name/input chính xác; C mất kết quả và yêu cầu cần cho bước tiếp.

3. **D.** D tôn trọng tín hiệu điều phối. C và B dùng chỉ dấu văn bản không có nghĩa giao thức; A sửa sai dữ liệu để che yêu cầu chưa xử lý.

4. **A, B.** B và A kiểm tra chuỗi trao đổi cần thiết. C và D là chi tiết hiển thị, không chứng minh model đã nhận lịch sử công cụ.

5. **A.** A phân biệt dừng vận hành với hoàn thành tác vụ. B và D tạo kết luận không có kết quả hỗ trợ; C bỏ ràng buộc tài nguyên của ứng dụng.

## Đối chiếu Bedrock: hội thoại nhiều lượt có công cụ

Đọc `stopReason` để chọn nhánh của vòng xử lý. Ví dụ dừng khi giá trị khác `tool_use` không có nghĩa mọi lý do còn lại đều là thành công; trường hợp `max_tokens` cần kiểm tra nội dung bị cắt. Nếu mô hình không yêu cầu công cụ, không thêm một tin nhắn kết quả công cụ rỗng. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276759). Bản lưu: `sources/bedrock-lessons/276759.json`.

## Đối chiếu Vertex

Ví dụ lấy ngày rồi cộng 103 ngày thể hiện hai bước phụ thuộc nhau, cần chạy theo thứ tự. Hàm hỗ trợ giữ tin nhắn và các khối đầy đủ, còn `text_from_message` chỉ dùng hiển thị. Không sao chép cách dùng danh sách mặc định có thể bị sửa đổi giữa các lần gọi vào mã vận hành. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Multi-turn conversations with tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289178). Bản lưu: `sources/vertex-lessons/289178.json`.
