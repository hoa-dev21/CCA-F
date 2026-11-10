# Introducing Retrieval Augmented Generation

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287763), sources/api-lessons/287763.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


RAG là cách tìm những phần tài liệu liên quan rồi đưa vào yêu cầu cho AI để hỗ trợ trả lời. Thay vì gửi toàn bộ kho tài liệu trong mỗi lần hỏi, ứng dụng chọn các đoạn có khả năng chứa thông tin cần thiết.

Có hai giai đoạn: chuẩn bị tài liệu và chia thành các phần có thể tìm kiếm; sau đó, khi có câu hỏi, tìm các phần liên quan và đưa nội dung đó cho mô hình.

Ví dụ: Kho hướng dẫn công ty quá lớn để gửi tất cả. Khi người dùng hỏi về hoàn tiền, hệ thống tìm phần chính sách liên quan rồi gửi cùng câu hỏi. Cần lấy đủ điều kiện và ngoại lệ, vì một đoạn chỉ nói chung về hoàn tiền có thể chưa đủ để trả lời.

RAG giúp giảm nội dung không liên quan và làm việc với kho lớn, nhưng cần thêm công đoạn chuẩn bị và cơ chế tìm kiếm. Hãy đánh giá riêng việc tìm đúng, đủ tài liệu và việc AI trả lời từ tài liệu đó. Nhờ vậy, bạn biết cần sửa khâu tìm kiếm hay khâu tạo câu trả lời.

## Câu hỏi

**1. Chọn một.** Kho quá lớn để nạp toàn bộ. Ý tưởng chính của RAG?

A. Truy xuất phần liên quan làm ngữ cảnh.

B. Mô hình tự đọc mọi dữ liệu không tích hợp.

C. Xóa câu hỏi.

D. Chỉ tăng giọng tự tin.

**2. Chọn một.** RAG trả đoạn liên quan nhưng thiếu điều kiện ngoại lệ. Điều gì cần kiểm tra?

A. Chỉ màu văn bản.

B. Độ đầy đủ bối cảnh của phần được truy xuất.

C. Chỉ tên mô hình.

D. Không cần xem nguồn.

**3. Chọn một.** Chi phí thiết kế thêm của RAG nằm ở đâu?

A. Không cần xử lý dữ liệu.

B. Chỉ đặt tên file.

C. Chuẩn bị/chunk và cơ chế tìm phần liên quan.

D. Không có đánh đổi.

## Đáp án

1. **A.** A cung cấp ngữ cảnh có chọn lọc; B giả định truy cập tự động, C mất mục tiêu, D không lấy dữ liệu.

2. **B.** B nhắm thiếu bằng chứng; A và C không chẩn đoán truy xuất dữ liệu, D bỏ kiểm chứng.

3. **C.** C là các thành phần thêm; A và D phủ nhận, B không tạo quy trình xử lý.

## Đối chiếu RAG trên Bedrock

Bài Bedrock cùng so sánh việc tìm phần liên quan với gửi toàn bộ tài liệu cho mô hình. Các kiến thức tương đương dùng chung phần tóm tắt và câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276780). Bản lưu: `sources/bedrock-lessons/276780.json`.

## Đối chiếu Vertex

Ví dụ thay việc gửi tài liệu 800 trang bằng các đoạn tìm được giúp giảm đầu vào, nhưng có thể bỏ sót bối cảnh quan trọng. Không có cách luôn tốt nhất; cần thử trên câu hỏi và tài liệu đại diện. Dùng chung câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289191). Bản lưu: `sources/vertex-lessons/289191.json`.
