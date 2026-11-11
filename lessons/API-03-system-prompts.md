# Định hướng vai trò và cách trả lời

Nguồn: [bài học chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Nội dung lưu tại sources/api-lessons/287733.json. Câu luyện tập tự biên soạn.

## Nội dung bài học


System prompt là phần hướng dẫn chung về vai trò, giọng điệu và cách trả lời của AI. Ví dụ: với một gia sư, bạn có thể yêu cầu gợi ý từng bước và để người học tự làm trước khi đưa lời giải. Chỉ gửi một bài toán chưa nói rõ cách dạy mong muốn này.

Trong mẫu Messages API của bài, hướng dẫn chung được truyền qua tham số `system`. Các tin nhắn trao đổi nằm trong `messages`. Hàm gửi yêu cầu có thể nhận `system` làm đầu vào, nhờ đó cùng một hàm có thể dùng cho gia sư hoặc trợ lý biên tập bằng cách thay hướng dẫn.

Ví dụ: Gia sư hỏi người học muốn thực hiện phép biến đổi nào trước, rồi phản hồi theo câu trả lời của họ. Khi đánh giá chatbot, cần kiểm tra cả cách hướng dẫn này. Đáp số đúng chưa đủ nếu chatbot luôn đưa ngay lời giải, trái phương pháp đã yêu cầu.

Trong mã minh họa, khi không có hướng dẫn hệ thống, hàm bỏ tham số `system` thay vì truyền `None`. Đây là cách xử lý của mẫu mã, không phải phần cần học thuộc để hiểu khái niệm.

Theo phần liên hệ với đề cương thi, prompt giúp định hướng hành vi nhưng không bảo đảm AI luôn tuân thủ. Các điều kiện bắt buộc vẫn cần kiểm tra hoặc chặn bằng chương trình.

## Tự kiểm tra

**Câu 1 — Chọn một.** Gia sư giải đúng nhưng liên tục đưa đáp án trước khi học viên thử. Hệ thống dùng chung hàm gọi API với trợ lý biên tập. Sửa ở đâu để đặt hành vi ổn định theo từng ứng dụng?

A. Truyền vai trò và cách dạy qua tham số system dùng chung.

B. Chèn một đáp án mẫu vào cuối mỗi câu hỏi toán của học viên.

C. Đổi mọi tin nhắn user thành system để tăng tính nhất quán.

D. Hard-code cùng hướng dẫn gia sư cho cả hai app.

**Câu 2 — Chọn hai.** Nhóm kiểm thử system prompt gia sư trước phát hành. Hai tiêu chí nào cùng cần thiết để kết luận hệ thống đạt mục tiêu?

A. Có gợi ý theo bước và chừa cơ hội cho học viên thử không.

B. Câu trả lời có cùng độ dài với ví dụ duy nhất trong prompt không.

C. Có lặp nguyên văn nhãn “gia sư” trong mọi câu trả lời không.

D. Đáp số và lập luận toán học có đúng không.

**Câu 3 — Chọn một.** Hàm dùng chung đọc một biến system toàn cục. Hai request đồng thời cho gia sư và biên tập đôi lúc đổi giọng cho nhau. Thiết kế nào phù hợp nhất?

A. Thêm tên ứng dụng vào câu trả lời sau khi model đã sinh xong.

B. Nhận system như đầu vào riêng của từng lần gọi.

C. Nối hai system để model tự chọn vai trò.

D. Tăng số ví dụ trong biến toàn cục để model tự nhận diện vai trò.

**Câu 4 — Chọn hai.** Một prompt chỉ ghi “bạn là chuyên gia” nhưng sản phẩm cần gia sư không tiết lộ lời giải ngay. Hai chỉnh sửa nào giúp yêu cầu có thể kiểm chứng?

A. Thêm nhiều chức danh chuyên môn mà không đổi quy trình phản hồi.

B. Nêu rõ phải gợi ý trước khi cung cấp lời giải đầy đủ.

C. Yêu cầu ngôn ngữ trang trọng để thay cho tiêu chí sư phạm.

D. Mô tả cách phản hồi khi học viên đã thử nhưng mắc lỗi.

**Câu 5 — Chọn một.** Bản system mới đạt điểm toán ngang bản cũ nhưng giảm mạnh tỷ lệ tiết lộ đáp án sớm. Quyết định nào có cơ sở nhất?

A. Loại bản mới vì điểm toán không tăng nên system không có tác dụng.

B. Chỉ đo độ ngắn của câu trả lời để suy ra mức độ gợi ý.

C. Phát hành sau một hội thoại gợi ý tốt.

D. Đo độ đúng và cách dạy trên tập đại diện.

## Đáp án và giải thích

1. **A.** A đặt hành vi đúng phạm vi mà vẫn tái sử dụng hàm. B không xác định quy trình dạy; C trộn vai trò dữ liệu; D làm trợ lý biên tập chịu quy tắc không phù hợp.

2. **A, D.** D đo độ đúng, A đo phương pháp dạy. C chỉ kiểm tra từ khóa; B kiểm tra hình thức không đại diện cho hành vi mong muốn.

3. **B.** B gắn cấu hình với request. A sửa nhãn chứ không sửa hành vi; C tạo hướng dẫn cạnh tranh; D vẫn giữ nguyên trạng thái dùng chung gây lẫn vai trò.

4. **B, D.** B và D mô tả hành vi quan sát được. A tăng vai trò chung nhưng chưa định nghĩa cách dạy; C đo giọng văn thay vì trình tự hỗ trợ.

5. **D.** D đánh giá đúng hai mục tiêu. A bỏ qua mục tiêu hành vi; C thiếu độ bao phủ; B độ ngắn không chứng minh đã hướng dẫn phù hợp.

## Đối chiếu Bedrock

Mẫu Converse truyền hướng dẫn hệ thống dưới dạng danh sách khối văn bản, khác chuỗi trong mẫu Messages API. Vai trò giúp định hướng hành vi, không bảo đảm tuân thủ tuyệt đối. Nhận định trong video về việc thay hướng dẫn hệ thống giữa cuộc trò chuyện cần được kiểm tra theo API đang dùng. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài tương ứng](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276726). Bản lưu: `sources/bedrock-lessons/276726.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu, phần văn bản chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Đây là kết quả đối chiếu toàn văn, không phải suy ra từ tiêu đề.

Nguồn đối chiếu: [System prompts](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289153); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287733). Bản lưu: `sources/vertex-lessons/289153.json`.
