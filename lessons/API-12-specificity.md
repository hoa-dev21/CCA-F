# Being specific — Nêu tiêu chí và bước xử lý

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287740), sources/api-lessons/287740.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài phân biệt hai loại hướng dẫn: **đặc tính đầu ra** và **các bước xử lý**. Đặc tính đầu ra gồm độ dài, cấu trúc, nội dung phải có và giọng điệu. Các bước xử lý định hướng cách khảo sát vấn đề trước khi đưa kết quả.

Ví dụ tự biên soạn: “Phân tích nguyên nhân doanh số giảm” có thể dẫn tới câu trả lời chỉ xem một yếu tố. Có thể yêu cầu xem dữ liệu thị trường, thay đổi nội bộ và phản hồi khách hàng, rồi tổng hợp các giả thuyết kèm căn cứ. Đồng thời xác định đầu ra cần có: giả thuyết, bằng chứng và thông tin còn thiếu.

Chọn mức chi tiết phù hợp. Tác vụ đơn giản có thể chỉ cần hợp đồng đầu ra rõ. Vấn đề nhiều yếu tố hưởng lợi từ các bước khảo sát. Mục đích là tăng bao phủ và tính nhất quán, không phải kéo dài prompt vô hạn.

Điểm cần phân biệt: “báo cáo chất lượng cao” là mong muốn chung; “mỗi kết luận gắn một bằng chứng và một hạn chế” là tiêu chí cụ thể có thể kiểm tra.

## Câu hỏi

**1. Chọn một.** Chỉ dẫn nào mô tả đặc tính đầu ra?

A. “Trình bày bảng gồm kết luận, bằng chứng và hạn chế.”

B. “Khảo sát nguyên nhân nội bộ trước.”

C. “So sánh hai giả thuyết trước khi chọn.”

D. “Kiểm tra nguồn dữ liệu rồi tổng hợp.”

**2. Chọn một.** Phân tích luôn bỏ sót thay đổi nội bộ. Sửa prompt nào trực tiếp nhất?

A. Chỉ yêu cầu thêm tính từ.

B. Yêu cầu bao quát các nhóm nguyên nhân, gồm thay đổi nội bộ.

C. Bỏ mọi tiêu chí.

D. Chỉ tăng số chữ.

**3. Chọn một.** “Viết thật hay” có hạn chế gì?

A. Không thể dùng tiếng Việt.

B. Luôn sai cú pháp.

C. Chưa xác định rõ tiêu chí đầu ra để kiểm tra.

D. Là một schema bắt buộc.

## Đáp án

1. **A.** B, C, D mô tả quá trình, không phải cấu trúc sản phẩm.
2. **B.** A và D thay hình thức; C làm yêu cầu mơ hồ hơn.
3. **C.** A và B không đúng; D nhầm lời hướng dẫn với schema.

## Đối chiếu Bedrock: Being specific

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276745) và đối chiếu khái niệm với bài chung. Cùng phân biệt quality guidelines và process steps; có thêm điểm minh họa theo từng cách, không phải kết quả áp dụng phổ quát. Nguồn: sources/bedrock-lessons/276745.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Being specific](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289165), sources/vertex-lessons/289165.json. Tách thuộc tính đầu ra với bước xử lý; ràng buộc lượng/định dạng/nội dung cần đo được. Bước cân nhắc không đồng nghĩa yêu cầu lộ toàn bộ suy nghĩ nội bộ. Điểm3.92/7.86 chỉ là ví dụ. Dùng chung câu hỏi khái niệm.
