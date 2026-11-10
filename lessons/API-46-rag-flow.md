# The full RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287764), sources/api-lessons/287764.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Một luồng RAG đầy đủ bắt đầu bằng việc chia tài liệu thành đoạn, tạo vectơ biểu diễn cho từng đoạn và lưu cùng nội dung hoặc thông tin để lấy lại nội dung gốc.

Khi có câu hỏi, hệ thống tạo vectơ tương thích cho câu hỏi, so với các vectơ đã lưu để tìm đoạn gần nghĩa. Sau đó, ứng dụng đưa văn bản tìm được cùng câu hỏi vào prompt để mô hình trả lời. Các dãy số giúp tìm kiếm; phần văn bản gốc mới cung cấp thông tin để trả lời.

Bài dùng độ tương đồng cosine (cosine similarity) và khoảng cách cosine (cosine distance) để minh họa. Với độ tương đồng, điểm cao hơn biểu thị gần hơn. Nếu khoảng cách được tính bằng 1 trừ độ tương đồng, khoảng cách thấp hơn biểu thị gần hơn.

Đây là điểm phục vụ tìm kiếm, không phải mức chắc chắn rằng câu trả lời đúng. Ví dụ: tài liệu nói về cách sửa lỗi phần mềm nhưng không nêu số lỗi đã sửa. Dù tài liệu gần nghĩa với câu hỏi, hệ thống vẫn cần nói rõ thiếu bằng chứng hoặc tìm thêm nguồn, không tự điền một con số.

## Câu hỏi

**1. Chọn một.** Sau khi tìm được vectơ liên quan, cần đưa gì vào prompt trả lời?

A. Chỉ một mảng số không có nguồn.

B. Chỉ tên mô hình.

C. Câu hỏi cùng nội dung nguồn cần thiết.

D. Một điểm độ tương đồng như đáp án.

**2. Chọn một.** Với cosine distance định nghĩa 1-similarity, giá trị thấp thường chỉ điều gì?

A. Độ gần cao hơn theo thước đo đó.

B. Luôn là câu trả lời đúng.

C. Không có tài liệu.

D. Quyền truy cập cao hơn.

**3. Chọn một.** Nguồn nói về kỹ thuật nhưng không có số lỗi chương trình đã sửa được hỏi. Nên làm gì?

A. Tự tạo một con số hợp lý.

B. Nêu thiếu bằng chứng hoặc truy xuất thêm nguồn phù hợp.

C. Coi tiêu đề là đáp án số.

D. Dùng distance làm số lỗi chương trình.

## Đáp án

1. **C.** C cung cấp bằng chứng có nghĩa; A thiếu văn bản, B không có dữ liệu, D nhầm score với nội dung.

2. **A.** A đúng quan hệ thước đo; B suy rộng độ đúng, C và D không liên quan.

3. **B.** B giữ đối chiếu dữ liệu nguồn; A bịa, C và D nhầm metadata/score với sự kiện.

## Đối chiếu RAG trên Bedrock

Bài Bedrock có cùng luồng RAG và ví dụ độ gần cosine. Các trục có nhãn trong hình chỉ giúp minh họa, không chứng minh mỗi chiều của vectơ thật đều có ý nghĩa đơn giản để gọi tên. Dùng chung câu hỏi.

Nguồn đối chiếu: [The full RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276774). Bản lưu: `sources/bedrock-lessons/276774.json`.

## Đối chiếu Vertex

Giai đoạn chuẩn bị gồm chia đoạn, tạo vectơ và lưu. Khi có câu hỏi, tạo vectơ cho câu hỏi, tìm kiếm rồi ghép tài liệu vào prompt. Hình hai chiều có trục y học và phần mềm chỉ là minh họa. Không mặc định mọi API tự chuẩn hóa vectơ. Nếu nguồn chỉ nói về nỗ lực sửa lỗi mà không có số lỗi, không suy ra một con số để trả lời. Dùng chung câu hỏi.

Nguồn đối chiếu: [The full RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289190). Bản lưu: `sources/vertex-lessons/289190.json`.
