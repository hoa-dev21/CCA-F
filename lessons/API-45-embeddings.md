# Embedding: tìm văn bản theo ý nghĩa

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287759), sources/api-lessons/287759.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học

Embedding là cách chuyển văn bản thành một dãy số, gọi là vectơ. Máy tính dùng các vectơ này để tìm những đoạn văn có ý nghĩa gần với câu hỏi của bạn.

Ví dụ, bạn hỏi “Làm sao lấy lại mật khẩu?”. Hệ thống có thể tìm thấy tài liệu “Hướng dẫn đặt lại mật khẩu” dù tài liệu không dùng đúng từng từ trong câu hỏi.

Để so sánh được, câu hỏi và tài liệu phải được chuyển thành các vectơ tương thích. Không nên tự gán ý nghĩa cho từng con số, chẳng hạn cho rằng số đầu tiên luôn thể hiện chủ đề, còn số thứ hai luôn thể hiện cảm xúc.

Hai vectơ gần nhau chỉ cho thấy nội dung có thể liên quan. Điều đó chưa chứng minh tài liệu chứa đáp án đúng. Hệ thống vẫn phải đọc văn bản gốc và kiểm tra xem có đủ thông tin để trả lời hay không.

Các con số, nhà cung cấp và mô hình trong khóa học là ví dụ tại thời điểm ghi hình. Không áp dụng chúng như quy tắc chung cho mọi mô hình embedding. Phần triển khai cơ sở dữ liệu vectơ nằm ngoài phạm vi đề cương thi đã lưu trong dự án.

## Câu hỏi

**1. Chọn một.** Vectơ biểu diễn dùng trực tiếp để hỗ trợ việc gì trong bài?

A. Cấp quyền hệ thống xử lý phía máy chủ.

B. So độ gần ngữ nghĩa để tìm đoạn văn bản.

C. Bảo đảm phép tính đúng.

D. Thực thi lời nhắc việc.

**2. Chọn một.** Có thể gán chắc mỗi chiều vectơ một nhãn ý nghĩa đơn giản không?

A. Luôn được.

B. Chỉ cần đoán.

C. Không; minh họa chiều có nhãn không chứng minh diễn giải thực tế.

D. Mọi chiều đều là tên file.

**3. Chọn một.** Vectơ gần truy vấn tìm kiếm có đủ bằng chứng kết luận đúng không?

A. Chưa; cần nội dung nguồn và kiểm tra điều kiện trả lời.

B. Đủ mọi trường hợp.

C. Đủ nếu số chiều lớn.

D. Đủ nếu bỏ trích dẫn nguồn.

## Đáp án

1. **B.** B là truy xuất; A, C, D không phải chức năng vectơ ngữ nghĩa.

2. **C.** C phân biệt minh họa với biểu diễn học được; A, B suy diễn, D sai loại dữ liệu.

3. **A.** A giữ bước đối chiếu dữ liệu nguồn; B và C suy rộng độ tương đồng, D làm giảm kiểm chứng.

## Đối chiếu RAG trên Bedrock

Đã đọc [Text embeddings](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276777), sources/bedrock-lessons/276777.json và đối chiếu với bản API. Mẫu dùng Bedrock invoke_model với Titan, khác SDK/provider các vectơ biểu diễn trong khóa API. Dimension/range/normalization trong video không phải thuộc tính mọi vectơ biểu diễn; truy vấn tìm kiếm và các đoạn văn bản phải dùng biểu diễn tương thích. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Text embeddings](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289188), sources/vertex-lessons/289188.json. Mẫu Vertex dùng google-genai embed_content với text-embedding-005, khác Titan trong Bedrock. Model/location trong video không được trình bày như danh mục hiện hành; khoảng[-1,1] không là đặc tính phổ quát của mọi vectơ biểu diễn. Dùng đúng model/space và quy định về dữ liệu và hành vi query/document, kiểm tra shape/dimension. Dùng chung câu hỏi khái niệm.
