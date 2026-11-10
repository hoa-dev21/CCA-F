# Ứng dụng thực thi vòng công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276805), sources/bedrock-lessons/276805.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học

Computer Use dựa trên cùng vòng tool use: gửi yêu cầu và khai báo công cụ, nhận yêu cầu gọi công cụ, ứng dụng thực thi thao tác trong môi trường desktop, trả kết quả rồi mô hình quyết định tiếp. Bản mô tả cấu trúc dữ liệu có sẵn mô tả khả năng; nó không tự cung cấp desktop hay thực thi lệnh.

Reference implementation trong bài dùng Docker, Firefox và mã mô phỏng chuột/bàn phím. AWS profile là phần cấu hình của mẫu Bedrock, không phải một yêu cầu phổ quát của mọi triển khai Computer Use. Trước triển khai phải xác minh phiên bản tool/model/provider tương thích.

Giữ liên kết giữa yêu cầu và kết quả công cụ, báo lỗi thực thi rõ ràng và quan sát lại màn hình sau hành động. Đặt giới hạn bước/thời gian, điều kiện thành công, đường thoát khi lỗi và phạm vi quyền. Không lặp click vô hạn khi trang không thay đổi; cần chẩn đoán hoặc chuyển xử lý phù hợp.

## Câu hỏi

**1. Chọn một.** Đã khai báo bản mô tả cấu trúc dữ liệu Computer Use nhưng không có bộ thực thi. Điều gì còn thiếu?

A. Một system prompt dài hơn là đủ.

B. Hạ tầng nhận yêu cầu và thực thi thao tác, trả kết quả về mô hình.

C. Bỏ vòng kết quả công cụ.

D. Thêm nhiều tên công cụ trùng.

**2. Chọn một.** Mô hình yêu cầu click nhưng bộ thực thi báo không tìm được màn hình. Host nên làm gì?

A. Giả báo thành công.

B. Để mô hình tưởng đã click.

C. Trả lỗi có cấu trúc/ngữ cảnh và cho phép khôi phục trong giới hạn.

D. Lặp yêu cầu vô hạn.

**3. Chọn một.** Mẫu khóa học cần AWS profile. Có thể suy điều gì?

A. Đó là cấu hình của mẫu Bedrock, cần phân biệt với triển khai dùng nhà cung cấp khác.

B. Mọi Computer Use bắt buộc AWS.

C. Mọi bộ thực thi bắt buộc Firefox.

D. Bản mô tả cấu trúc dữ liệu tự cài Docker.

## Đáp án

1. **B.** Hạ tầng nhận yêu cầu và thực thi thao tác, trả kết quả về mô hình. A không tạo bộ thực thi; C làm mô hình thiếu phản hồi; D không cung cấp khả năng thực thi.

2. **C.** Trả lỗi có cấu trúc/ngữ cảnh và cho phép khôi phục trong giới hạn. A/B làm sai trạng thái; D không có điều kiện dừng.

3. **A.** Đó là cấu hình của mẫu Bedrock, cần phân biệt với triển khai dùng nhà cung cấp khác. B/C khái quát quá mức một reference implementation; D nhầm mô tả công cụ với hạ tầng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [How computer use works](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289234), sources/vertex-media/289234.json. Computer Use dùng công cụ schema/request/result như tool use; host phải cung cấp môi trường mô phỏng chuột/bàn phím và phản hồi. Reference Docker là implementation mẫu, không phải bản mô tả cấu trúc dữ liệu tự tạo desktop hay đảm bảo an toàn tuyệt đối. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
