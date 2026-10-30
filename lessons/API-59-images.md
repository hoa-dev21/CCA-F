# Image support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287778), sources/api-lessons/287778.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Ảnh được đưa vào message cùng text hướng dẫn để yêu cầu mô tả, so sánh hoặc phân tích. Bài khuyến khích tiêu chí rõ, ví dụ và chia nhiệm vụ thay vì một câu quá mơ hồ.

Việc đếm vật thể hay đọc chi tiết vẫn có thể sai; mô hình tự kiểm tra bằng cách khác không tự là bằng chứng độc lập. Tác vụ quan trọng cần phương pháp kiểm chứng phù hợp. Các con số giới hạn ảnh/dimensions/token trong video phụ thuộc phiên bản, không coi là thông số hiện tại đã kiểm tra.

Vision nằm ngoài phạm vi Exam Guide Architect đã tải. Không dùng ví dụ đánh giá hình ảnh trong khóa để suy ra có thể thay mọi thẩm định chuyên môn chỉ bằng một ảnh.

## Câu hỏi

**1. Chọn một.** Ảnh phức tạp và câu hỏi quá chung cho kết quả yếu. Cải thiện theo bài?

A. Chỉ yêu cầu model chắc chắn.

B. Bỏ ảnh.

C. Không nêu mục tiêu.

D. Nêu tiêu chí, phạm vi và ví dụ phù hợp rồi kiểm tra kết quả.

**2. Chọn một.** Model đếm lại hai cách và cho cùng số. Có chắc thay được mọi xác minh không?

A. Không; đó vẫn có thể là lỗi tương quan, cần kiểm chứng phù hợp mục tiêu.

B. Có, luôn chính xác tuyệt đối.

C. Có, không cần nhìn nguồn.

D. Có, miễn trả lời dài.

**3. Chọn một.** Khi ôn gấp theo Exam Guide này, nên dành ưu tiên gì cho chi tiết vision?

A. Bỏ toàn bộ tools/MCP để học ảnh.

B. Đọc bổ trợ; ưu tiên mục tiêu kỹ thuật nằm trong phạm vi thi.

C. Coi ảnh là toàn bộ bài thi.

D. Chỉ học giới hạn ảnh trong video.

## Đáp án

1. **D.** D làm rõ tác vụ; A không thêm thông tin, B mất nguồn, C tăng mơ hồ.

2. **A.** A giới hạn bằng chứng tự kiểm; B, C, D bảo đảm quá mức.

3. **B.** B theo blueprint; A, C, D chuyển sai trọng tâm.

## Đối chiếu tính năng trên Bedrock

Đã đọc [Image support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276789), sources/bedrock-lessons/276789.json. Mẫu dùng image.format/source.bytes, khác image base64 block của Messages API. Giới hạn ảnh trong hai khóa khác nhau và phụ thuộc provider/model/phiên bản; không dùng chúng làm thông số hiện hành mặc định. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Đối chiếu Vertex

Đã đọc [Image support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289203), sources/vertex-lessons/289203.json. Mẫu Messages image base64/media_type/data; ví dụ đếm bi và rubric ảnh vệ tinh minh họa giá trị của hướng dẫn cụ thể. Số ảnh/MB/pixel/token formula trong video không là giới hạn universal hiện hành; mô tả fire risk không đủ thay đánh giá chuyên môn. Tách quan sát được khỏi suy đoán, kiểm tra ca khó và uncertainty. Dùng chung câu hỏi khái niệm.
