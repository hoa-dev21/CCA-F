# Đo chất lượng thay vì chỉ thử vài lần

Nguồn: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287731), nội dung đã đọc từ sources/api-lessons/287731.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Prompt là yêu cầu hoặc hướng dẫn gửi cho AI. Kỹ thuật viết prompt giúp bạn diễn đạt rõ hơn, chẳng hạn thêm ví dụ hoặc dùng thẻ XML để tách các phần thông tin. Đánh giá prompt (prompt evaluation) là đo xem yêu cầu đó có thực sự tạo ra kết quả tốt hay không.

Một câu trả lời hay chưa chứng minh prompt đáng tin cậy. Thử vài lần có thể bỏ sót những tình huống mà người dùng thật sẽ gặp. Vì vậy, cần chạy prompt trên một bộ đầu vào, chấm theo tiêu chí rõ và dùng kết quả để quyết định cách sửa.

Ví dụ: Hai prompt đều lấy đúng thông tin từ một hóa đơn mẫu. Chưa thể kết luận bản nào tốt hơn. Hãy thử cả hai trên cùng bộ hóa đơn, so với kết quả mong đợi và ghi lại các lỗi. Bộ kiểm thử nên có cả những trường hợp ít gặp hoặc dễ gây lỗi, còn gọi là trường hợp biên (edge cases).

Quy trình đánh giá tốn công chuẩn bị nhưng giúp phát hiện điểm yếu trước khi đưa ứng dụng vào sử dụng và so sánh các phiên bản trên cùng thước đo. Kết quả chỉ phản ánh những dữ liệu và tiêu chí đã kiểm tra, không bảo đảm mọi đầu vào mới đều được xử lý đúng.

Điều cần tìm là bằng chứng từ kết quả thực tế. Một prompt nghe rõ ràng hơn chưa chắc cho đầu ra tốt hơn. Các bài tiếp theo sẽ hướng dẫn tạo dữ liệu kiểm thử, chạy đánh giá và chấm kết quả.

## Câu hỏi

**1. Chọn một.** Nhóm sửa prompt và nhận được một đầu ra hoàn hảo. Trước khi thay bản production, bước nào cung cấp bằng chứng phù hợp nhất?

A. Chọn bản mới vì văn phong hay hơn.

B. Thử lại đúng một đầu vào ấy đến khi đủ mười lần.

C. Chỉ kiểm tra xem prompt có thẻ XML không.

D. So sánh hai phiên bản trên bộ kiểm thử với tiêu chí chung.

**2. Chọn một.** Hoạt động nào là prompt evaluation?

A. Chấm đầu ra theo đáp án mong đợi và tổng hợp lỗi.

B. Thêm ví dụ vào prompt nhưng không chạy thử.

C. Đổi tên biến trong mã gửi yêu cầu.

D. Viết lại câu chỉ dẫn cho ngắn hơn mà không đo kết quả.

**3. Chọn hai.** Theo bài học, quy trình đánh giá có thể giúp việc gì?

A. Loại bỏ nhu cầu xem xét mọi lỗi trong tương lai.

B. Phát hiện điểm yếu trước khi phát hành.

C. So sánh các phiên bản prompt dựa trên kết quả đo.

D. Bảo đảm mọi đầu vào chưa từng thấy đều được xử lý đúng.

## Đáp án

1. **D.** Cho phép so sánh trên nhiều trường hợp với cùng thước đo. A và C đánh giá hình thức; B chỉ lặp một trường hợp, không mở rộng bao phủ.
2. **A.** Đây là đo hiệu quả. B và D là chỉnh prompt chưa được đánh giá; C không đo chất lượng đầu ra.
3. **B, C.** Đánh giá cung cấp bằng chứng và phát hiện lỗi; không bảo đảm tuyệt đối như A hoặc D.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276731). Bản lưu: `sources/bedrock-lessons/276731.json`.

## Đối chiếu Vertex

Bài Vertex phân biệt sửa cách viết prompt với đo hiệu quả của prompt. Thử vài ví dụ chưa đủ để dự đoán chất lượng khi dùng thực tế. Đánh giá chỉ cung cấp bằng chứng theo bộ dữ liệu và tiêu chí đã chọn, không tự trở thành thước đo tuyệt đối hay bảo đảm mọi đầu vào. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289159). Bản lưu: `sources/vertex-lessons/289159.json`.
