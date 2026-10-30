# Making a request — Adapter Converse

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276719), sources/bedrock-lessons/276719.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Tóm tắt

Bài dùng boto3 Bedrock Runtime và Converse. Message có role, content là danh sách blocks; phản hồi mẫu nằm trong output.message. Không sao chép tên trường của Anthropic Messages API sang Converse mà không có adapter.

Model availability và định danh phụ thuộc môi trường/vùng. Inference profile trong bài hỗ trợ định tuyến theo cấu hình được phép, không có nghĩa bỏ qua mọi ràng buộc vùng, quyền hay residency. Cần kiểm tra model/profile đúng vùng và tài khoản thay vì chỉ sửa prompt khi lỗi dịch vụ báo không tìm thấy model.

Ví dụ cơ bản lấy text block đầu để hiển thị. Khi dùng tools hoặc nhiều loại nội dung, giữ message đầy đủ cho logic và lịch sử. Định danh, region và SDK trong video phải xác minh trước khi chạy hiện tại.

## Câu hỏi

**1. Chọn một.** Đã chuyển sang Converse nhưng vẫn đọc response.content như API khác và lỗi. Sửa gì?

A. Chỉ tăng temperature.

B. Chỉ đổi prompt.

C. Bỏ xử lý phản hồi.

D. Adapter theo cấu trúc request/response đúng provider.

**2. Chọn một.** Service báo model không tồn tại trong môi trường đã chọn. Kiểm tra trực tiếp?

A. Model/profile ID, vùng hỗ trợ và quyền/cấu hình tài khoản.

B. Chỉ độ dài câu hỏi.

C. Chỉ tone hệ thống.

D. Chỉ font UI.

**3. Chọn một.** Inference profile có tự loại mọi ràng buộc dữ liệu theo vùng không?

A. Có, không cần kiểm tra.

B. Không; phải đối chiếu routing và ràng buộc thực tế của môi trường.

C. Có, tên profile đủ bảo đảm.

D. Có, bất kể chính sách tổ chức.

## Đáp án

1. **D.** D sửa hợp đồng; A và B không đổi cấu trúc, C mất kết quả.

2. **A.** A nhắm lỗi tích hợp; B, C, D không làm model có sẵn.

3. **B.** B giữ kiểm tra cấu hình; A, C, D suy rộng cơ chế định tuyến.
