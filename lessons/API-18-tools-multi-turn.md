# Công cụ qua nhiều lượt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287750), sources/api-lessons/287750.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Một câu hỏi có thể cần nhiều lần trao đổi giữa Claude và công cụ. Ví dụ: để xác định một ngày trong tương lai, Claude có thể cần công cụ lấy ngày hiện tại, rồi dùng kết quả đó để tính ngày sau một khoảng thời gian. Vì vậy, không nên dừng chỉ vì đã gọi một công cụ.

Hàm gửi yêu cầu cần nhận danh sách công cụ và trả về đối tượng phản hồi đầy đủ. Phần lưu lịch sử phải giữ được các dạng nội dung mà chương trình sử dụng, như chuỗi văn bản, danh sách khối hoặc nội dung của tin nhắn. Có thể viết hàm riêng để lấy văn bản hiển thị, nhưng không dùng phần văn bản đó thay cho toàn bộ phản hồi trong luồng xử lý.

Vòng xử lý gồm: gửi yêu cầu, lưu phản hồi, thực hiện các công cụ được yêu cầu, thêm kết quả vào lịch sử rồi gọi Claude tiếp. Claude dùng kết quả mới để trả lời hoặc yêu cầu công cụ khác.

Phần liên hệ với đề cương thi nhấn mạnh trường `stop_reason`, tức lý do mô hình dừng phản hồi. Giá trị `tool_use` cho biết cần xử lý yêu cầu công cụ; `end_turn` cho biết mô hình kết thúc lượt. Có văn bản trong phản hồi chưa đủ để kết luận đã xong, vì cùng phản hồi đó vẫn có thể chứa khối `tool_use`.

## Tự kiểm tra

**Câu 1 — Chọn một.** Yêu cầu “nhắc tôi sau ba ngày” cần lấy ngày hiện tại rồi tính ngày đích. Host dừng ngay sau công cụ đầu tiên vì đã có text. Sửa nào đúng?

A. Coi text trong response là đủ để kết luận lượt đã hoàn tất.

B. Trả tool_result rồi tiếp tục theo phản hồi mới.

C. Tính ngày đích bằng lời giải thích đầu tiên trước khi có ngày hiện tại.

D. Gọi hết tools để tránh thêm vòng lặp.

**Câu 2 — Chọn hai.** Wrapper phục vụ cả hiển thị và vòng công cụ. Hai quyết định nào hỗ trợ hội thoại nhiều lượt đúng cấu trúc?

A. Chỉ trả chuỗi text rồi tái tạo tool_use từ câu văn.

B. Dùng hàm riêng trích văn bản cho giao diện.

C. Bỏ các block trung gian sau mỗi lượt để model tự tính lại.

D. Trả đối tượng phản hồi đầy đủ cho phần điều phối.

**Câu 3 — Chọn một.** Response chứa text “đã xử lý xong” nhưng stop_reason là tool_use. Host cần dựa vào gì để chọn bước tiếp theo?

A. Đổi stop_reason thành end_turn trước khi lưu để lịch sử nhất quán.

B. Dừng khi số block text nhiều hơn số block tool_use.

C. Dùng câu text cuối làm điều kiện dừng vì người dùng sẽ đọc nó.

D. Xử lý yêu cầu công cụ hợp lệ trong phản hồi rồi gửi kết quả tiếp.

**Câu 4 — Chọn hai.** Một lượt thứ hai lại gọi công cụ đã chạy ở lượt đầu vì không thấy kết quả. Hai thông tin nào cần kiểm tra trên request thứ hai?

A. Có tool_result tương ứng và dữ liệu trả về trong lịch sử không.

B. Có lịch sử assistant chứa yêu cầu công cụ trước đó không.

C. Có cùng độ dài text hiển thị với lượt đầu không.

D. Có giữ tên hàm UI đã dùng để render câu trả lời không.

**Câu 5 — Chọn một.** Host giới hạn 8 vòng để kiểm soát chi phí. Vòng thứ 8 vẫn yêu cầu công cụ. Trạng thái nào phản ánh đúng tình hình?

A. Dừng theo ngân sách và báo nhiệm vụ chưa hoàn tất.

B. Đánh dấu thành công vì mọi quy trình được phép tối đa 8 vòng.

C. Tăng vô hạn số vòng vì tool_use luôn phải được ưu tiên hơn giới hạn.

D. Bỏ tool_use cuối, lấy text làm kết quả xong.

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
