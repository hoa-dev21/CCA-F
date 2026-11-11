# Đo chất lượng thay vì chỉ thử vài lần

Nguồn: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287731), nội dung đã đọc từ sources/api-lessons/287731.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Prompt là yêu cầu hoặc hướng dẫn gửi cho AI. Kỹ thuật viết prompt giúp bạn diễn đạt rõ hơn, chẳng hạn thêm ví dụ hoặc dùng thẻ XML để tách các phần thông tin. Đánh giá prompt (prompt evaluation) là đo xem yêu cầu đó có thực sự tạo ra kết quả tốt hay không.

Một câu trả lời hay chưa chứng minh prompt đáng tin cậy. Thử vài lần có thể bỏ sót những tình huống mà người dùng thật sẽ gặp. Vì vậy, cần chạy prompt trên một bộ đầu vào, chấm theo tiêu chí rõ và dùng kết quả để quyết định cách sửa.

Ví dụ: Hai prompt đều lấy đúng thông tin từ một hóa đơn mẫu. Chưa thể kết luận bản nào tốt hơn. Hãy thử cả hai trên cùng bộ hóa đơn, so với kết quả mong đợi và ghi lại các lỗi. Bộ kiểm thử nên có cả những trường hợp ít gặp hoặc dễ gây lỗi, còn gọi là trường hợp biên (edge cases).

Quy trình đánh giá tốn công chuẩn bị nhưng giúp phát hiện điểm yếu trước khi đưa ứng dụng vào sử dụng và so sánh các phiên bản trên cùng thước đo. Kết quả chỉ phản ánh những dữ liệu và tiêu chí đã kiểm tra, không bảo đảm mọi đầu vào mới đều được xử lý đúng.

Điều cần tìm là bằng chứng từ kết quả thực tế. Một prompt nghe rõ ràng hơn chưa chắc cho đầu ra tốt hơn. Các bài tiếp theo sẽ hướng dẫn tạo dữ liệu kiểm thử, chạy đánh giá và chấm kết quả.

## Tự kiểm tra

**Câu 1 — Chọn một.** Prompt mới trả lời xuất sắc cho ca demo, nhưng production có nhiều dạng yêu cầu chưa thử. Bằng chứng nào phù hợp nhất trước khi thay bản đang chạy?

A. Chạy prompt mới nhiều lần trên chính ca demo rồi lấy kết quả tốt nhất.

B. So sánh hai prompt trên cùng tập đại diện với cùng tiêu chí chấm.

C. Cho tác giả prompt mới chọn thêm vài ví dụ chắc chắn chạy tốt.

D. So độ dài câu trả lời trung bình của bản mới với bản cũ.

**Câu 2 — Chọn hai.** Dashboard đánh giá chỉ hiển thị một điểm trung bình. Hai dữ liệu bổ sung nào giúp biết nên sửa prompt ở đâu?

A. Tên người viết prompt để dùng như chỉ báo chất lượng.

B. Điểm theo nhóm tác vụ mà người dùng thật gặp.

C. Phân loại lỗi và lưu đầu ra của các trường hợp thất bại.

D. Số chữ trong prompt thay cho kết quả từng trường hợp.

**Câu 3 — Chọn một.** Đội A tăng điểm từ 7 lên 9 sau khi vừa sửa prompt vừa nới tiêu chí “đủ ý”. Kết luận nào hợp lý?

A. Chỉ cần tăng số ca của bản mới để loại ảnh hưởng của tiêu chí.

B. Prompt mới tốt hơn vì điểm tuyệt đối đã tăng hai đơn vị.

C. Chưa tách được tác động của prompt; cần chấm hai bản theo cùng tiêu chí.

D. Dùng tiêu chí cũ cho bản cũ và mới cho bản mới vì mỗi prompt có mục tiêu riêng.

**Câu 4 — Chọn hai.** Một hệ thống tạo cấu hình vừa cần JSON hợp lệ vừa cần cấu hình đáp ứng yêu cầu. Hai hoạt động nào thực sự thuộc đánh giá chất lượng?

A. Đối chiếu nội dung cấu hình với nhiệm vụ gốc và các ràng buộc.

B. Kiểm tra đầu ra có parse được theo định dạng yêu cầu.

C. Đổi tên biến trong prompt để bản mới dễ phân biệt trong Git.

D. Thêm thẻ XML vào prompt rồi mặc định điểm sẽ tăng.

**Câu 5 — Chọn một.** Bản mới tăng điểm chung nhưng làm nhóm yêu cầu quan trọng giảm rõ rệt. Cách chọn bản phát hành tốt nhất là gì?

A. Chỉ dùng điểm chung làm điều kiện phát hành.

B. Đối chiếu mức giảm với tiêu chí của nhóm quan trọng.

C. Chỉ chọn câu trả lời đẹp nhất của mỗi bản để trình nhóm duyệt.

D. Bỏ nhóm bị giảm khỏi tập đánh giá vì không đại diện cho xu hướng tăng.

## Đáp án và giải thích

1. **B.** B kiểm soát đầu vào và cách đo. C tạo thiên lệch chọn mẫu; A chưa đo các dạng tác vụ khác; D không đo khả năng hoàn thành yêu cầu.

2. **B, C.** C cho bằng chứng chẩn đoán; B chỉ ra nhóm bị điểm trung bình che khuất. A không đo đầu ra; D đo kích thước đầu vào thay vì hiệu quả.

3. **C.** C khôi phục phép so sánh chung. B nhầm thay thước đo với cải thiện; A thêm mẫu không sửa sai lệch đo; D giữ hai thước đo khác nhau.

4. **A, B.** B đo định dạng và A đo hoàn thành nhiệm vụ. D là kỹ thuật sửa prompt cần được đo lại; C là quản lý phiên bản, không phải bằng chứng chất lượng.

5. **B.** B gắn quyết định với rủi ro tác vụ. A có thể che hồi quy; D loại bằng chứng bất lợi; C thiên lệch chọn đầu ra đẹp.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276731). Bản lưu: `sources/bedrock-lessons/276731.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt sửa cách viết prompt với đo hiệu quả của prompt. Thử vài ví dụ chưa đủ để dự đoán chất lượng khi dùng thực tế. Đánh giá chỉ cung cấp bằng chứng theo bộ dữ liệu và tiêu chí đã chọn, không tự trở thành thước đo tuyệt đối hay bảo đảm mọi đầu vào. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289159). Bản lưu: `sources/vertex-lessons/289159.json`.
