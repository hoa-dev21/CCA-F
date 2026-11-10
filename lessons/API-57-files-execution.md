# Code execution and the Files API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287777), sources/api-lessons/287777.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Files API trong bài cho phép tải tệp lên và nhận mã định danh tệp. Các bước sau có thể tham chiếu bằng mã đó thay vì gửi lại toàn bộ dữ liệu của tệp mỗi lần.

Công cụ chạy mã (code execution) được thực hiện phía dịch vụ. Ứng dụng không phải tự xây môi trường chạy của công cụ trong mẫu, nhưng vẫn phải quản lý tệp đầu vào, phản hồi và các tệp kết quả.

Ví dụ: Tải tệp CSV lên, đưa tham chiếu tệp vào môi trường thực thi theo cách được hỗ trợ, yêu cầu phân tích, xem mã và kết quả, rồi tải tệp đầu ra bằng mã định danh. Nhận được mã tệp sau khi tải lên chưa chứng minh tệp đã được đưa đúng vào môi trường chạy hoặc đã phân tích xong.

Nếu kết quả là biểu đồ, hãy mở biểu đồ và đối chiếu với dữ liệu, không chỉ đọc lời tóm tắt. Các giới hạn mạng, môi trường chạy và phiên bản công cụ trong video cần được kiểm tra lại trước khi triển khai.

## Câu hỏi

**1. Chọn một.** Có file ID sau upload có chứng minh phân tích xong không?

A. Có, ID là báo cáo.

B. Có, upload tự chạy mọi code.

C. Có, không cần công cụ.

D. Không; còn đưa file vào luồng phù hợp, chạy và kiểm tra kết quả.

**2. Chọn một.** Code execution thuộc loại công cụ nào theo bài?

A. Server công cụ, không cần ứng dụng tự triển khai runtime mẫu đó.

B. Luôn là hàm local do user viết.

C. Chỉ text không thực thi.

D. Chỉ tên file.

**3. Chọn một.** Mô hình sinh biểu đồ để tải về. Cần xử lý gì?

A. Chỉ tin thông báo.

B. Lấy file output qua định danh, xem sản phẩm và đối chiếu dữ liệu.

C. Bỏ mọi kết quả.

D. Đổi tên dữ liệu cho đẹp.

## Đáp án

1. **D.** D phân biệt lưu trữ và xử lý; A, B, C bỏ bước phân tích.

2. **A.** A đúng nơi thực thi của ví dụ; B sai loại, C và D không mô tả khả năng.

3. **B.** B kiểm chứng đầu ra thật; A chỉ lời kể, C mất kết quả, D không xác minh.
