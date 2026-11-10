# Hàm thực thi và lỗi hữu ích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287756), sources/api-lessons/287756.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Hàm thực thi công cụ là đoạn mã ứng dụng chạy khi nhận yêu cầu gọi công cụ. Trong bài, các hàm xử lý thời gian có tham số được đặt tên rõ, kiểm tra giá trị và trả lỗi có ý nghĩa khi đầu vào không hợp lệ.

Cần làm đủ ba việc: viết hàm thực hiện nhiệm vụ, mô tả công cụ và đầu vào bằng schema, rồi nối tên công cụ với hàm trong bộ điều phối của vòng hội thoại. Chỉ có hàm thì Claude chưa biết cách dùng; chỉ có schema thì thao tác chưa thể chạy.

Ví dụ: Một tham số bắt buộc bị rỗng. Thông báo rõ tham số nào thiếu và điều kiện cần đáp ứng sẽ giúp Claude sửa yêu cầu tốt hơn câu “Có lỗi”.

Không phải lỗi nào cũng xử lý bằng cách gọi lại. Thiếu quyền hoặc vi phạm quy tắc nghiệp vụ cần cách xử lý phù hợp với loại lỗi đó. Khi Claude sửa đầu vào sau khi đọc lỗi, nó đang sử dụng thông tin mới trong cuộc trò chuyện; điều đó không có nghĩa mô hình được huấn luyện lại sau mỗi lần gọi.

## Câu hỏi

**1. Chọn một.** Công cụ nhận tham số rỗng. Phản hồi nào hỗ trợ sửa tốt hơn?

A. Luôn trả thành công rỗng.

B. Chỉ “hỏng”.

C. Ẩn mọi lỗi.

D. Lỗi rõ tham số nào không hợp lệ và điều kiện cần đáp ứng.

**2. Chọn một.** Đã viết hàm nhưng mô hình chưa biết nó tồn tại. Cần bổ sung gì?

A. Bản mô tả cấu trúc dữ liệu mô tả và tích hợp định tuyến/thực thi vào vòng gọi.

B. Chỉ đổi màu log.

C. Chỉ yêu cầu “hãy dùng hàm”.

D. Không cần gì.

**3. Chọn một.** Mô hình sửa đối số sau khi đọc lỗi. Điều đó chứng minh gì?

A. Trọng số đã được huấn luyện lại vĩnh viễn.

B. Mô hình dùng phản hồi lỗi trong ngữ cảnh để chọn bước tiếp.

C. Mọi lỗi đều thử lại được.

D. Không cần validation nữa.

## Đáp án

1. **D.** D cung cấp tín hiệu sửa; A che lỗi, B thiếu nguyên nhân, C bỏ thông tin.

2. **A.** A hoàn thiện giao diện và luồng; B không công bố khả năng, C thiếu hợp đồng, D sai trạng thái.

3. **B.** B mô tả hành vi trong hội thoại; A nhầm training, C suy rộng loại lỗi, D bỏ kiểm tra.

## Đối chiếu Bedrock: Công cụ functions

Bài Bedrock dùng cùng ví dụ công cụ thời gian và nhắc việc với quy định đầu vào rõ. Việc mô hình có thể thử lại không có nghĩa mọi lỗi đều cần hoặc được phép thử lại. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276757). Bản lưu: `sources/bedrock-lessons/276757.json`.

## Đối chiếu Vertex

Đặt tên và tham số rõ, kiểm tra đầu vào, trả lỗi giúp người gọi sửa được. `datetime.now()` trong mẫu dùng giờ của môi trường và chưa gắn múi giờ. Ứng dụng chịu trách nhiệm thực thi, không phải mô hình tự chạy hàm. Không trả nguyên thông tin lỗi chứa dữ liệu nhạy cảm hoặc khóa bí mật. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tool functions](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289176). Bản lưu: `sources/vertex-lessons/289176.json`.
