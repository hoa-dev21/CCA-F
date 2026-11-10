# Hàm thực thi và lỗi hữu ích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287756), sources/api-lessons/287756.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học

Công cụ function là mã ứng dụng thực thi khi nhận yêu cầu công cụ. Khóa dùng hàm thời gian để minh họa: tham số có tên rõ, được kiểm tra và trả lỗi có ý nghĩa nếu không hợp lệ.

Phân biệt ba việc: viết hàm nghiệp vụ, mô tả bằng bản mô tả cấu trúc dữ liệu và nối vào router/vòng hội thoại. Chỉ có hàm chưa giúp mô hình biết khi dùng; chỉ có bản mô tả cấu trúc dữ liệu chưa chạy thao tác thật.

Thông báo lỗi như tham số bị rỗng giúp mô hình sửa lời gọi. Nhưng không mặc định lỗi nào cũng thử lại được: quy tắc nghiệp vụ hoặc thiếu quyền cần xử lý khác. Việc mô hình sử dụng phản hồi lỗi trong ngữ cảnh không có nghĩa trọng số mô hình được huấn luyện lại sau mỗi lỗi.

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

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276757) và đối chiếu khái niệm với bài chung. Cùng mẫu công cụ thời gian/reminder và hợp đồng đầu vào. Không coi việc mô hình có thể thử lại là bảo đảm mọi lỗi phải thử lại. Nguồn: sources/bedrock-lessons/276757.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Tool functions](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289176), sources/vertex-lessons/289176.json. Tên/arguments rõ, validate đầu vào, lỗi có thể sửa. datetime.now() trong mẫu dùng giờ môi trường và chưa gắn timezone; tự động thực thi là trách nhiệm host, không của mô hình. Không lộ lỗi/secrets nhạy cảm nguyên văn. Dùng chung câu hỏi khái niệm.
