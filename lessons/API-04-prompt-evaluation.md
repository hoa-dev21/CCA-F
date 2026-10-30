# Prompt evaluation — Đo chất lượng thay vì chỉ thử vài lần

Nguồn: [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287731), nội dung đã đọc từ sources/api-lessons/287731.json. Câu hỏi tự biên soạn.

## Tóm tắt

**Prompt engineering** là cách viết và tổ chức yêu cầu: ví dụ minh họa, XML và các kỹ thuật diễn đạt. **Prompt evaluation** là cách đo xem yêu cầu đó hoạt động tốt đến đâu.

Một đầu ra đẹp không chứng minh prompt đáng tin cậy. Thử vài lần rồi sửa một hai trường hợp cũng có thể bỏ sót dữ liệu bất ngờ từ người dùng thật. Bài học khuyến nghị đưa prompt vào quy trình đánh giá, chấm điểm và cải tiến dựa trên kết quả đo.

Một quy trình đánh giá có thể so đầu ra với đáp án mong đợi, phát hiện lỗi và so sánh các phiên bản prompt. Nó cần thêm công sức và chi phí ban đầu, nhưng giúp phát hiện điểm yếu trước khi phát hành.

Ví dụ tự biên soạn: hai prompt trích xuất dữ liệu đều làm đúng một hóa đơn mẫu. Nhóm chưa đủ bằng chứng chọn bản tốt hơn. Hãy chạy cả hai trên bộ trường hợp chung, ghi lỗi và đối chiếu tiêu chí chất lượng đã chọn. Các bài tiếp theo trong khóa sẽ đi sâu vào tập dữ liệu kiểm thử và phương pháp chấm.

Điểm cần nhớ khi làm câu hỏi tình huống: tìm **bằng chứng đo được** cho quyết định thay prompt. Không đánh đồng “prompt nghe rõ ràng hơn” với “kết quả đã tốt hơn trên các trường hợp cần xử lý”.

Từ khóa: **evaluation pipeline** — quy trình đánh giá; **expected answer** — đáp án kỳ vọng; **edge case** — trường hợp biên; **objective metric** — chỉ số khách quan.

## Câu hỏi

**1. Chọn một.** Nhóm sửa prompt và nhận được một đầu ra hoàn hảo. Trước khi thay bản production, bước nào cung cấp bằng chứng phù hợp nhất?

A. Chọn bản mới vì văn phong hay hơn.

B. Thử lại đúng một đầu vào ấy đến khi đủ mười lần.

C. Chỉ kiểm tra xem prompt có thẻ XML không.

D. So sánh hai phiên bản trên bộ kiểm thử với tiêu chí chung.

**2. Chọn một.** Hoạt động nào là prompt evaluation?

A. Chấm đầu ra theo đáp án mong đợi và tổng hợp lỗi.

B. Thêm ví dụ vào prompt nhưng không chạy thử.

C. Đổi tên biến trong mã gửi request.

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

Đã đọc và đối chiếu [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276731), sources/bedrock-lessons/276731.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Đã đọc [Prompt evaluation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289159), sources/vertex-lessons/289159.json. Bài phân biệt kỹ thuật prompt với đo hiệu quả; test một vài ví dụ không đủ dự đoán dữ liệu production. Eval cung cấp bằng chứng theo dataset/rubric, không tự trở thành khách quan tuyệt đối hay bảo đảm mọi đầu vào. Dùng chung câu hỏi khái niệm.
