# Code execution and the Files API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287777), sources/api-lessons/287777.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Files API trong bài cho phép upload và tham chiếu file bằng ID thay vì nhúng lại toàn bộ bytes mỗi lần. Code execution là server tool; ứng dụng vẫn quản lý đầu vào, kết quả và file sinh ra.

Luồng mẫu: upload CSV, đưa tham chiếu phù hợp vào môi trường thực thi, yêu cầu phân tích, đọc code/results và lấy output file theo ID. Không nhầm file ID với việc nội dung chắc chắn đã được đưa vào đúng container hoặc đã phân tích thành công.

Giới hạn network, loại runtime và schema version trong video là thuộc tính phiên bản, phải kiểm tra trước triển khai. Với phân tích dữ liệu, kiểm tra phép tính và sản phẩm sinh ra chứ không chỉ chấp nhận lời tóm tắt.

## Câu hỏi

**1. Chọn một.** Có file ID sau upload có chứng minh phân tích xong không?

A. Có, ID là báo cáo.

B. Có, upload tự chạy mọi code.

C. Có, không cần tool.

D. Không; còn đưa file vào luồng phù hợp, chạy và kiểm tra kết quả.

**2. Chọn một.** Code execution thuộc loại tool nào theo bài?

A. Server tool, không cần ứng dụng tự triển khai runtime mẫu đó.

B. Luôn là hàm local do user viết.

C. Chỉ text không thực thi.

D. Chỉ tên file.

**3. Chọn một.** Model sinh biểu đồ để tải về. Cần xử lý gì?

A. Chỉ tin thông báo.

B. Lấy file output qua định danh, xem sản phẩm và đối chiếu dữ liệu.

C. Bỏ mọi kết quả.

D. Đổi tên dữ liệu cho đẹp.

## Đáp án

1. **D.** D phân biệt lưu trữ và xử lý; A, B, C bỏ bước phân tích.

2. **A.** A đúng nơi thực thi của ví dụ; B sai loại, C và D không mô tả khả năng.

3. **B.** B kiểm chứng đầu ra thật; A chỉ lời kể, C mất kết quả, D không xác minh.
