# Text embeddings

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287759), sources/api-lessons/287759.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

Embedding biểu diễn văn bản bằng vector số để tìm nội dung gần về ngữ nghĩa. Query và tài liệu cần biểu diễn tương thích để so sánh. Không mặc định mỗi chiều vector có một nhãn con người hiểu rõ như chủ đề hay cảm xúc.

Embedding gần không tự chứng minh câu trả lời đúng; hệ thống vẫn phải lấy văn bản nguồn và kiểm chứng. Các ví dụ khoảng giá trị, nhà cung cấp và model trong khóa là minh họa theo thời điểm, không phải thuộc tính phổ quát của mọi embedding. Chi tiết triển khai embeddings/vector database nằm ngoài phạm vi Exam Guide đã tải.

## Câu hỏi

**1. Chọn một.** Embedding dùng trực tiếp để hỗ trợ việc gì trong bài?

A. Cấp quyền backend.

B. So độ gần ngữ nghĩa để tìm chunk.

C. Bảo đảm phép tính đúng.

D. Thực thi reminder.

**2. Chọn một.** Có thể gán chắc mỗi chiều vector một nhãn ý nghĩa đơn giản không?

A. Luôn được.

B. Chỉ cần đoán.

C. Không; minh họa chiều có nhãn không chứng minh diễn giải thực tế.

D. Mọi chiều đều là tên file.

**3. Chọn một.** Vector gần query có đủ bằng chứng kết luận đúng không?

A. Chưa; cần nội dung nguồn và kiểm tra điều kiện trả lời.

B. Đủ mọi trường hợp.

C. Đủ nếu số chiều lớn.

D. Đủ nếu bỏ citation.

## Đáp án

1. **B.** B là truy xuất; A, C, D không phải chức năng vector ngữ nghĩa.

2. **C.** C phân biệt minh họa với biểu diễn học được; A, B suy diễn, D sai loại dữ liệu.

3. **A.** A giữ bước grounding; B và C suy rộng similarity, D làm giảm kiểm chứng.

## Đối chiếu RAG trên Bedrock

Đã đọc [Text embeddings](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276777), sources/bedrock-lessons/276777.json và đối chiếu với bản API. Mẫu dùng Bedrock invoke_model với Titan, khác SDK/provider embeddings trong khóa API. Dimension/range/normalization trong video không phải thuộc tính mọi embedding; query và chunks phải dùng biểu diễn tương thích. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Text embeddings](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289188), sources/vertex-lessons/289188.json. Mẫu Vertex dùng google-genai embed_content với text-embedding-005, khác Titan trong Bedrock. Model/location trong video không được trình bày như danh mục hiện hành; khoảng[-1,1] không là đặc tính phổ quát của mọi embedding. Dùng đúng model/space và contract query/document, kiểm tra shape/dimension. Dùng chung câu hỏi khái niệm.
