# Response streaming

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287734), sources/api-lessons/287734.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Streaming là gửi từng phần phản hồi khi mô hình đang tạo, giúp giao diện hiển thị sớm thay vì đợi toàn bộ tin nhắn. Nhiều sự kiện nhận được có thể thuộc cùng một yêu cầu API, không phải mỗi đoạn chữ là một lượt hội thoại mới.

Ứng dụng nên tách hai việc: hiển thị các phần văn bản để người dùng theo dõi và lưu đối tượng phản hồi hoàn chỉnh để xử lý tiếp. Đối tượng cuối giữ các khối nội dung và thông tin cần thiết cho lịch sử hoặc vòng gọi công cụ.

Ví dụ: Giao diện đã hiện nửa câu rồi kết nối bị ngắt. Điều đó chưa chứng minh phản hồi hoàn tất. Cần kiểm tra trạng thái kết thúc hoặc lỗi và xử lý phần kết quả còn thiếu.

Tên sự kiện và các phương thức thư viện trong video tùy phiên bản. Với phạm vi ôn thi đã lưu, điều chính cần phân biệt là dữ liệu đang truyền với kết quả hoàn chỉnh; không cần học sâu mọi chi tiết triển khai streaming.

## Câu hỏi

**1. Chọn một.** Giao diện nhận từng phần văn bản khi phản hồi đang được tạo. Chúng có nhất thiết đến từ nhiều yêu cầu API không?

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

Mẫu dùng `converse_stream` và lấy văn bản ở `contentBlockDelta.delta.text` trong luồng phản hồi. Bộ xử lý thực tế phải phân biệt sự kiện văn bản, công cụ, suy luận và lỗi, ghép dữ liệu theo từng khối rồi kiểm tra trạng thái kết thúc. Không giả định mọi phần dữ liệu mới đều có văn bản. Dùng chung câu hỏi.

Nguồn đối chiếu: [Streaming](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276721). Bản lưu: `sources/bedrock-lessons/276721.json`.

## Đối chiếu Vertex

Mẫu dùng `messages.create(stream=True)` hoặc các phương thức `messages.stream`, `text_stream` và `get_final_message`. Mỗi phần nhận được không nhất thiết là một từ. Luồng chữ phục vụ hiển thị; lịch sử và công cụ cần tin nhắn cuối đầy đủ cùng trạng thái kết thúc. `MessageDelta` có thể chỉ cập nhật thông tin hoặc lý do dừng, không tự là toàn bộ tin nhắn hoàn chỉnh.

Nguồn đối chiếu: [Response streaming](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289162). Bản lưu: `sources/vertex-lessons/289162.json`.
