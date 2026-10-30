# How Computer Use works — Ứng dụng thực thi vòng tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276805), sources/bedrock-lessons/276805.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Computer Use dựa trên cùng vòng tool use: gửi yêu cầu và khai báo tool, nhận tool request, ứng dụng thực thi thao tác trong môi trường desktop, trả kết quả rồi model quyết định tiếp. Schema có sẵn mô tả khả năng; nó không tự cung cấp desktop hay thực thi lệnh.

Reference implementation trong bài dùng Docker, Firefox và mã mô phỏng chuột/bàn phím. AWS profile là phần cấu hình của mẫu Bedrock, không phải một yêu cầu phổ quát của mọi triển khai Computer Use. Trước triển khai phải xác minh phiên bản tool/model/provider tương thích.

Giữ liên kết giữa yêu cầu và kết quả tool, báo lỗi thực thi rõ ràng và quan sát lại màn hình sau hành động. Đặt giới hạn bước/thời gian, điều kiện thành công, đường thoát khi lỗi và phạm vi quyền. Không lặp click vô hạn khi trang không thay đổi; cần chẩn đoán hoặc chuyển xử lý phù hợp.

## Câu hỏi

**1. Chọn một.** Đã khai báo schema Computer Use nhưng không có executor. Điều gì còn thiếu?

A. Một system prompt dài hơn là đủ.

B. Hạ tầng nhận yêu cầu và thực thi thao tác, trả kết quả về model.

C. Bỏ vòng tool result.

D. Thêm nhiều tên tool trùng.

**2. Chọn một.** Model yêu cầu click nhưng executor báo không tìm được màn hình. Host nên làm gì?

A. Giả báo thành công.

B. Để model tưởng đã click.

C. Trả lỗi có cấu trúc/ngữ cảnh và cho phép khôi phục trong giới hạn.

D. Lặp request vô hạn.

**3. Chọn một.** Mẫu khóa học cần AWS profile. Có thể suy điều gì?

A. Đó là cấu hình của mẫu Bedrock, cần phân biệt với triển khai dùng provider khác.

B. Mọi Computer Use bắt buộc AWS.

C. Mọi executor bắt buộc Firefox.

D. Schema tự cài Docker.

## Đáp án

1. **B.** Hạ tầng nhận yêu cầu và thực thi thao tác, trả kết quả về model. A không tạo executor; C làm model thiếu phản hồi; D không cung cấp khả năng thực thi.

2. **C.** Trả lỗi có cấu trúc/ngữ cảnh và cho phép khôi phục trong giới hạn. A/B làm sai trạng thái; D không có điều kiện dừng.

3. **A.** Đó là cấu hình của mẫu Bedrock, cần phân biệt với triển khai dùng provider khác. B/C khái quát quá mức một reference implementation; D nhầm mô tả tool với hạ tầng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [How computer use works](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289234), sources/vertex-media/289234.json. Computer Use dùng tool schema/request/result như tool use; host phải cung cấp môi trường mô phỏng chuột/bàn phím và phản hồi. Reference Docker là implementation mẫu, không phải schema tự tạo desktop hay đảm bảo an toàn tuyệt đối. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
