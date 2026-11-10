# Chia bước theo phụ thuộc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287800), sources/api-lessons/287800.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Chaining là chia nhiệm vụ thành các bước nối tiếp, trong đó kết quả bước trước trở thành đầu vào cho bước sau. Giữa các lần gọi mô hình, ứng dụng có thể thêm xử lý hoặc kiểm tra bằng mã.

Ví dụ: Bước đầu tạo bản nháp bài viết. Bước sau nhận chính bản nháp đó để rà soát độ dài, cấu trúc và yêu cầu còn thiếu, rồi sửa lại. Mỗi bước tập trung vào một việc thay vì một prompt phải xử lý tất cả cùng lúc.

Các bước này phụ thuộc nhau nên không thể chạy độc lập như các nhánh song song. Bước sửa phải chờ có bản nháp và phải thực sự nhận được nội dung bản nháp.

Nếu kết quả trung gian bắt buộc đúng cấu trúc mới được chuyển tiếp, hãy kiểm tra bằng chương trình trước khi chạy bước sau. Cách chia chuỗi đáng thử khi prompt dài hay bỏ sót yêu cầu, nhưng cần đo lợi ích về chất lượng so với thời gian chờ tăng thêm.

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

Chuỗi bước dùng kết quả trước làm đầu vào sau, có thể xen kiểm tra hoặc xử lý bằng mã không dùng mô hình. Ví dụ tạo rồi sửa bài theo điều kiện không tự cho phép đăng lên mạng xã hội; việc xuất bản cần thuộc phạm vi nhiệm vụ. Đánh giá chất lượng để biết lợi ích có đáng thời gian chờ thêm hay không. Dùng chung câu hỏi.

Nguồn đối chiếu: [Chaining workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289239). Bản lưu: `sources/vertex-lessons/289239.json`.
