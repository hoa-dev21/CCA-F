# Introducing Retrieval Augmented Generation

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287763), sources/api-lessons/287763.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Tóm tắt

RAG truy xuất những phần tài liệu liên quan rồi đưa vào prompt, thay vì luôn nạp toàn bộ kho. Hai giai đoạn chính là chuẩn bị/chia dữ liệu trước và truy xuất theo câu hỏi khi chạy.

Lợi ích là giảm nội dung không liên quan và hỗ trợ kho lớn. Đánh đổi gồm công đoạn chuẩn bị, chất lượng tìm kiếm và nguy cơ thiếu bối cảnh. Một chunk liên quan chưa chắc chứa đủ bằng chứng trả lời. Đánh giá retrieval và câu trả lời riêng giúp tìm đúng nguồn lỗi.

## Câu hỏi

**1. Chọn một.** Kho quá lớn để nạp toàn bộ. Ý tưởng chính của RAG?

A. Truy xuất phần liên quan làm context.

B. Model tự đọc mọi dữ liệu không tích hợp.

C. Xóa câu hỏi.

D. Chỉ tăng giọng tự tin.

**2. Chọn một.** RAG trả đoạn liên quan nhưng thiếu điều kiện ngoại lệ. Điều gì cần kiểm tra?

A. Chỉ màu văn bản.

B. Độ đầy đủ bối cảnh của phần được truy xuất.

C. Chỉ tên model.

D. Không cần xem nguồn.

**3. Chọn một.** Chi phí thiết kế thêm của RAG nằm ở đâu?

A. Không cần xử lý dữ liệu.

B. Chỉ đặt tên file.

C. Chuẩn bị/chunk và cơ chế tìm phần liên quan.

D. Không có đánh đổi.

## Đáp án

1. **A.** A cung cấp context có chọn lọc; B giả định truy cập tự động, C mất mục tiêu, D không lấy dữ liệu.

2. **B.** B nhắm thiếu bằng chứng; A và C không chẩn đoán retrieval, D bỏ kiểm chứng.

3. **C.** C là các thành phần thêm; A và D phủ nhận, B không tạo pipeline.

## Đối chiếu RAG trên Bedrock

Đã đọc [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276780), sources/bedrock-lessons/276780.json và đối chiếu với bản API. Cùng đánh đổi truy xuất phần liên quan với việc đưa toàn bộ tài liệu vào prompt. Dùng chung tóm tắt/câu hỏi khái niệm tương đương, không tăng số câu trùng.

## Đối chiếu Vertex

Đã đọc [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289191), sources/vertex-lessons/289191.json. RAG thay prompt tài liệu800trang bằng các chunk được truy hồi; tiết kiệm input nhưng có nguy cơ bỏ bối cảnh liên quan. Không có chiến lược luôn tốt nhất; đánh giá trên query/tài liệu đại diện. Dùng chung câu hỏi khái niệm.
