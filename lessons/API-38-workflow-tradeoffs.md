# Đánh đổi giữa dự đoán và linh hoạt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287794), sources/api-lessons/287794.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Quy trình làm việc chia một quy trình biết trước thành các bước cụ thể, dễ kiểm thử và quan sát. Đổi lại, nó ít linh hoạt với yêu cầu ngoài phạm vi hoặc đường xử lý chưa dự kiến.

Tác nhân AI tự xây cách giải từ mục tiêu và các công cụ, thích hợp yêu cầu thay đổi hoặc cần hỏi thêm thông tin. Đánh đổi là hành vi khó dự đoán và không gian thực thi lớn hơn, nên đo chất lượng và theo dõi lỗi khó hơn.

Bài khuyến nghị ưu tiên cách giải đáng tin cậy cho bài toán; dùng quy trình làm việc khi phù hợp và thêm tự chủ khi thật sự cần. Không suy ra mọi quy trình làm việc luôn tốt hơn mọi tác nhân AI: cần xem yêu cầu, dữ liệu và kết quả đánh giá của hệ thống cụ thể.

Ví dụ để dễ hình dung: trích xuất dữ liệu theo bản mô tả cấu trúc dữ liệu cố định có thể dùng quy trình xử lý kiểm tra rõ; điều tra nguyên nhân lỗi chưa biết cần đường khảo sát thích ứng. Một hệ thống có thể phối hợp cả hai ở các phần khác nhau.

## Câu hỏi

**1. Chọn một.** Hệ thống chỉ xử lý một quy trình đầu vào/đầu ra đã biết, ưu tiên dễ kiểm thử. Lựa chọn ban đầu?

A. Tác nhân AI tự chủ tối đa dù không cần.

B. Quy trình làm việc có các bước và gate rõ.

C. Loại bỏ validation để tăng linh hoạt.

D. Chỉ chọn theo tên công nghệ mới nhất.

**2. Chọn một.** Tác vụ liên tục cần chọn hướng điều tra dựa trên phát hiện mới. Điều gì ủng hộ tác nhân AI?

A. Không cần quan sát công cụ.

B. Mọi bước đều bất biến.

C. Nhu cầu thích ứng đường giải quyết theo thông tin mới.

D. Không cần đánh giá kết quả.

**3. Chọn một.** Vì sao tác nhân AI thường khó đánh giá hơn một quy trình xử lý cố định?

A. Có nhiều chuỗi hành động khả dĩ, không biết trước mọi đường thực thi.

B. Không thể lưu bất kỳ log nào.

C. Công cụ không bao giờ trả kết quả.

D. Tác nhân AI luôn không có mục tiêu.

## Đáp án

1. **B.** A thêm tự do không phục vụ yêu cầu; C bỏ kiểm chứng; D không xét bài toán.
2. **C.** A và D bỏ yêu cầu vận hành; B nghiêng về quy trình làm việc cố định.
3. **A.** B và C không phải đặc tính bắt buộc; D trái định nghĩa tác nhân AI nhận mục tiêu.

## Đối chiếu Vertex

Đã đọc [Workflows vs agents](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289245), sources/vertex-lessons/289245.json. Quy trình làm việc dự đoán/đánh giá dễ hơn nhưng kém linh hoạt; tác nhân AI thích ứng nhưng chi phí/độ tin cậy khó kiểm soát. Chọn theo yêu cầu và phép đánh giá; lời so sánh lower completion rate trong video không là benchmark phổ quát, và không hệ thống nào được bảo đảm100% chỉ nhờ chọn quy trình làm việc. Dùng chung câu hỏi khái niệm.
