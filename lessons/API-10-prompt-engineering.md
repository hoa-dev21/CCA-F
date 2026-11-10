# Cải tiến có kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287745), sources/api-lessons/287745.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Cải thiện prompt là một quá trình thử, đo và sửa. Trước hết, xác định kết quả ứng dụng cần tạo ra. Sau đó viết yêu cầu ban đầu, đánh giá kết quả, áp dụng một cách sửa rồi đánh giá lại. Chỉ nên giữ thay đổi khi kết quả kiểm tra cho thấy nó có ích.

Tiêu chí đánh giá phải bám vào nhiệm vụ thật. Ví dụ: với ứng dụng lập thực đơn, văn phong dễ đọc chưa đủ. Bạn còn phải kiểm tra khẩu phần và các yêu cầu về ăn uống. Nếu bỏ những tiêu chí này, điểm cao vẫn có thể đi kèm một thực đơn không dùng được.

Bài học khuyến nghị thay một yếu tố mỗi lần để dễ biết điều gì làm kết quả thay đổi. Nếu vừa thêm ví dụ, vừa đổi cách diễn đạt, vừa đổi cách chấm, bạn khó xác định nguyên nhân điểm tăng hoặc giảm.

Có thể dùng bộ kiểm thử nhỏ để thử ý tưởng nhanh, rồi mở rộng khi đánh giá trước khi đưa vào sử dụng. Hãy đọc từng trường hợp sai: điểm trung bình cho thấy xu hướng chung, còn lỗi cụ thể cho biết phần hướng dẫn nào cần sửa. Một vài ví dụ thành công chưa chứng minh ứng dụng xử lý tốt mọi tình huống thực tế.

## Câu hỏi

**1. Chọn một.** Nhóm đổi cách diễn đạt, thêm ví dụ và thay bộ chấm điểm cùng lúc. Vì sao khó kết luận?

A. Không xác định được yếu tố nào tạo ra thay đổi điểm.

B. Prompt không được chứa ví dụ.

C. Bộ chấm điểm không được đọc đầu ra.

D. Mọi điểm số đều vô nghĩa.

**2. Chọn một.** Điểm thấp vì thiếu trường bắt buộc. Bước phù hợp nhất?

A. Chỉ tăng số lần chạy.

B. Xem lỗi, sửa chỉ dẫn liên quan và đo lại.

C. Đổi tên bộ dữ liệu.

D. Gán điểm cao hơn.

**3. Chọn một.** Tập nhỏ dùng để lặp nhanh có vai trò gì?

A. Thay thế hoàn toàn xác thực cuối.

B. Bảo đảm mọi đầu vào đều đúng.

C. Giảm thời gian thử thay đổi ban đầu, cần mở rộng khi xác thực.

D. Loại bỏ nhu cầu chấm điểm.

## Đáp án

1. **A.** B và C cấm sai kỹ thuật; D phủ nhận quá mức giá trị đánh giá.
2. **B.** A không sửa nguyên nhân; C không đổi hành vi; D làm sai số đo.
3. **C.** A và B suy rộng quá bao phủ; D bỏ phép đo cần thiết.

## Đối chiếu Bedrock: Kỹ thuật viết yêu cầu cho AI

Bài Bedrock dùng cùng chu trình: đặt mục tiêu, đo kết quả ban đầu, thử cách sửa và đánh giá lại. Mức tăng điểm trong ví dụ không được bảo đảm cho nhiệm vụ khác. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276749). Bản lưu: `sources/bedrock-lessons/276749.json`.

## Đối chiếu Vertex

Bài Vertex cũng yêu cầu đo trước và sau khi thay prompt, rồi đọc lỗi theo nhóm. Ví dụ lập thực đơn và cấu hình chạy đồng thời từ 1–3 chỉ để minh họa, không phải số đo hiệu năng chuẩn hay giới hạn chung. Thay đổi có thể tốt hơn hoặc kém hơn; quyết định giữ hay bỏ cần dựa trên bằng chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt engineering](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289169). Bản lưu: `sources/vertex-lessons/289169.json`.
