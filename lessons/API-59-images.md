# Image support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287778), sources/api-lessons/287778.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Có thể đưa ảnh vào tin nhắn cùng hướng dẫn bằng văn bản để yêu cầu AI mô tả, so sánh hoặc phân tích. Câu hỏi nên nêu rõ cần xem phần nào và đánh giá theo tiêu chí gì.

Ví dụ: Với một ảnh phức tạp, yêu cầu “phân tích ảnh này” có thể quá rộng. Hãy chỉ rõ đối tượng cần quan sát, thông tin cần lấy và định dạng kết quả. Có thể thêm ví dụ hoặc chia nhiệm vụ thành các bước nếu cần.

AI vẫn có thể đếm sai vật thể hoặc đọc nhầm chi tiết. Việc nó tự kiểm tra bằng hai cách rồi ra cùng đáp án chưa tạo ra hai bằng chứng độc lập: cả hai cách có thể mắc cùng lỗi. Tác vụ quan trọng cần cách kiểm chứng phù hợp.

Các giới hạn về số ảnh, kích thước và token trong video phụ thuộc phiên bản. Khả năng thị giác (vision) là phần bổ trợ, nằm ngoài phạm vi đề cương Architect đã lưu; một ảnh cũng không đủ để thay mọi đánh giá chuyên môn.

## Câu hỏi

**1. Chọn một.** Ảnh phức tạp và câu hỏi quá chung cho kết quả yếu. Cải thiện theo bài?

A. Chỉ yêu cầu mô hình chắc chắn.

B. Bỏ ảnh.

C. Không nêu mục tiêu.

D. Nêu tiêu chí, phạm vi và ví dụ phù hợp rồi kiểm tra kết quả.

**2. Chọn một.** Mô hình đếm lại hai cách và cho cùng số. Có chắc thay được mọi xác minh không?

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

Mẫu Bedrock dùng `image.format` và `source.bytes`, khác khối ảnh base64 của Messages API. Các giới hạn ảnh trong hai khóa khác nhau và phụ thuộc nhà cung cấp, mô hình, phiên bản; không lấy làm thông số hiện hành mặc định. Dùng chung câu hỏi.

Nguồn đối chiếu: [Image support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276789). Bản lưu: `sources/bedrock-lessons/276789.json`.

## Đối chiếu Vertex

Mẫu Messages dùng base64, `media_type` và `data` cho ảnh. Ví dụ đếm viên bi và chấm ảnh vệ tinh minh họa ích lợi của yêu cầu cụ thể. Số ảnh, dung lượng, kích thước và công thức tính token trong video không là giới hạn chung hiện hành. Mô tả nguy cơ cháy không thay đánh giá chuyên môn; tách điều quan sát được khỏi suy đoán và kiểm tra trường hợp khó, chưa chắc chắn. Dùng chung câu hỏi.

Nguồn đối chiếu: [Image support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289203). Bản lưu: `sources/vertex-lessons/289203.json`.
