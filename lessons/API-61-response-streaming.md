# Response streaming

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287734), sources/api-lessons/287734.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học

Streaming gửi các phần phản hồi khi đang sinh để UI hiển thị sớm, thay vì đợi toàn bộ message. Nhiều events có thể thuộc một yêu cầu, không phải mỗi đoạn văn bản là một lượt hội thoại riêng.

Tách đường hiển thị text khỏi đường lưu final message: text stream phục vụ trải nghiệm, đối tượng hoàn chỉnh giữ blocks/metadata cho xử lý tiếp. Cần xử lý tình trạng stream gián đoạn; text đã hiện một phần chưa chứng minh phản hồi hoàn tất.

Tên event và phương thức SDK trong khóa theo phiên bản lúc giảng. Chi tiết triển khai streaming không nằm trong phạm vi Exam Guide đã tải; nắm phân biệt dữ liệu tạm và kết quả hoàn chỉnh là đủ để đọc tiếp.

## Câu hỏi

**1. Chọn một.** UI nhận nhiều text các đoạn văn bản. Chúng có nhất thiết là nhiều yêu cầu API không?

A. Có, mỗi từ là yêu cầu.

B. Có, mỗi dòng là hội thoại mới.

C. Có, không có final message.

D. Không; nhiều events có thể là các phần của một yêu cầu.

**2. Chọn một.** Cần cả UI phản hồi sớm và lịch sử cho công cụ loop. Thiết kế nào?

A. Stream cho hiển thị, giữ final message đầy đủ cho logic/lưu trữ.

B. Chỉ lưu ký tự cuối.

C. Bỏ thông tin mô tả vì đã hiển thị.

D. Mỗi đoạn văn bản đổi role ngẫu nhiên.

**3. Chọn một.** Stream dừng bất ngờ sau nửa câu. Có nên báo tác vụ thành công?

A. Có, đã thấy text.

B. Chưa; kiểm tra kết thúc/lỗi và xử lý trạng thái chưa hoàn chỉnh.

C. Có, miễn có token.

D. Có, tên mô hình đủ chứng minh.

## Đáp án

1. **D.** D đúng khái niệm streaming; A, B, C nhầm event với request/state.

2. **A.** A tách trách nhiệm; B và C mất dữ liệu, D sai cấu trúc hội thoại.

3. **B.** B kiểm tra completion; A và C nhầm xuất hiện dữ liệu với hoàn tất, D không phải bằng chứng.

## Đối chiếu Bedrock

Đã đọc [Streaming](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276721), sources/bedrock-lessons/276721.json. Ví dụ dùng converse_stream, phản hồi.stream và contentBlockDelta.delta.text. Bộ xử lý thực tế phải phân biệt text/tool/reasoning/error events, tích lũy theo block và kiểm tra trạng thái kết thúc, không giả định mọi delta đều có text. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu Vertex

Nguồn [Response streaming](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289162), sources/vertex-lessons/289162.json. Mẫu dùng messages.create(stream=True) hoặc messages.stream/text_stream/get_final_message. Đoạn văn bản không bằng một từ; text_stream chỉ phục vụ hiển thị text, còn history/tool handling cần final nội dung và trạng thái kết thúc. MessageDelta cập nhật metadata/stop reason không nên tự được coi là toàn bộ message đã hoàn tất.
