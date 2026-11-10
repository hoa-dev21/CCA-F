# Ứng dụng thực thi vòng công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276805), sources/bedrock-lessons/276805.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use dùng cùng nguyên tắc vòng gọi công cụ: gửi mục tiêu và định nghĩa công cụ cho mô hình, nhận yêu cầu thao tác, để ứng dụng thực hiện trong môi trường máy tính rồi gửi kết quả trở lại. Mô hình quan sát kết quả để quyết định bước tiếp theo.

Bản mô tả công cụ chỉ cho biết khả năng và đầu vào. Nó không tự tạo môi trường máy tính hoặc chạy chuột, bàn phím. Mẫu triển khai trong bài dùng Docker, Firefox và mã điều khiển các thao tác này.

AWS profile là cấu hình của mẫu dùng Bedrock, không phải yêu cầu chung cho mọi cách triển khai Computer Use. Trước khi thực hành, cần kiểm tra mô hình, công cụ và nhà cung cấp có tương thích với nhau không.

Giữ mã liên kết giữa lời gọi và kết quả, báo rõ lỗi thực thi và quan sát lại màn hình sau thao tác. Ví dụ: nếu bộ thực thi không tìm được màn hình, phải gửi lỗi để có thể xử lý tiếp, không giả vờ đã bấm thành công.

Đặt giới hạn số bước, thời gian, điều kiện thành công và cách thoát hoặc chuyển xử lý khi lỗi. Lặp lại thao tác bấm mà trang không đổi cần được chẩn đoán, không tiếp tục vô hạn.

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

Computer Use dùng định nghĩa, yêu cầu và kết quả công cụ theo cùng nguyên tắc tool use. Ứng dụng phải cung cấp môi trường thao tác chuột, bàn phím và trả phản hồi. Mẫu Docker là một cách triển khai; schema không tự tạo môi trường máy tính hoặc bảo đảm an toàn tuyệt đối. Dùng chung câu hỏi.

Nguồn đối chiếu: [How computer use works](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289234). Bản lưu: `sources/vertex-media/289234.json`.
