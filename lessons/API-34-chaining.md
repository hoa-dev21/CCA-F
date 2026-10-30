# Chaining workflows — Chia bước theo phụ thuộc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287800), sources/api-lessons/287800.json. Câu hỏi tự biên soạn.

## Tóm tắt

Chaining chia tác vụ thành các bước tuần tự; kết quả bước trước được dùng cho bước sau. Có thể chèn xử lý bằng mã hoặc validation giữa các lần gọi model.

Bài minh họa tách tạo nội dung và sửa theo các ràng buộc cụ thể. Thay vì bắt một prompt vừa sáng tác vừa kiểm tra hàng loạt yêu cầu, lượt sau tập trung rà soát và sửa đầu ra đã có.

Khác parallelization, các bước không độc lập. Không chạy bước sửa trước khi có bản nháp, cũng không bỏ qua việc truyền bản nháp cho bước sửa. Chaining là lựa chọn đáng thử khi prompt dài thường bỏ sót ràng buộc, nhưng cần đo lợi ích so với độ trễ bổ sung.

## Câu hỏi

**1. Chọn một.** Bước hai cần sửa văn bản được tạo ở bước một. Pattern phù hợp?

A. Chạy hai bước độc lập với dữ liệu đoán.

B. Chaining và truyền bản nháp sang bước sửa.

C. Router chọn ngẫu nhiên một bước.

D. Không truyền đầu ra trước.

**2. Chọn một.** Muốn chặn đầu ra không hợp lệ trước khi bước sau chạy. Có thể làm gì?

A. Chèn validation bằng mã giữa hai bước.

B. Chỉ đổi giọng điệu câu trả lời cuối.

C. Không kiểm tra kết quả trung gian.

D. Gán mọi kết quả là hợp lệ.

**3. Chọn một.** Prompt tạo bài thường bỏ sót quy tắc định dạng. Cách nào sát bài học?

A. Xóa mọi quy tắc.

B. Lặp lại toàn prompt vô hạn.

C. Chỉ tăng số từ của đầu ra.

D. Tạo bản nháp rồi dùng lượt sửa tập trung vào quy tắc bị bỏ sót.

## Đáp án

1. **B.** A vi phạm phụ thuộc; C bỏ một phần tác vụ; D làm bước sửa thiếu đối tượng.
2. **A.** B không kiểm tra trạng thái trung gian; C và D không tạo gate thật.
3. **D.** A bỏ yêu cầu; B không chẩn đoán; C không nhắm lỗi định dạng.

## Đối chiếu Vertex

Đã đọc [Chaining workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289239), sources/vertex-lessons/289239.json. Chuỗi bước phụ thuộc kết quả trước, có thể xen validation/non-LLM processing. Ví dụ tạo rồi sửa bài theo ràng buộc không cho phép tự đăng social media; quyền xuất bản và tác động ngoài cần theo nhiệm vụ được giao. Đánh giá thay đổi để biết lợi ích có đáng latency bổ sung. Dùng chung câu hỏi khái niệm.
