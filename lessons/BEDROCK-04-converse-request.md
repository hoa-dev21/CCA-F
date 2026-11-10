# Adapter Converse

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276719), sources/bedrock-lessons/276719.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Mẫu Python dùng thư viện boto3 để gọi Bedrock Runtime qua Converse. Tin nhắn có vai trò người nói (role), còn nội dung là danh sách các khối (blocks). Trong phản hồi mẫu, tin nhắn kết quả nằm ở `output.message`.

Cấu trúc này khác Anthropic Messages API. Khi chuyển nhà cung cấp, cần sửa phần chuyển đổi yêu cầu và phản hồi, còn gọi là adapter; không sao chép tên trường của API khác rồi kỳ vọng đọc được dữ liệu.

Mã mô hình và khả năng truy cập phụ thuộc môi trường, vùng và tài khoản. Nếu dịch vụ báo không tìm thấy mô hình, hãy kiểm tra mã mô hình hoặc inference profile, vùng hỗ trợ và quyền truy cập trước khi sửa prompt. Inference profile trong bài hỗ trợ định tuyến theo cấu hình được phép, không tự bỏ các ràng buộc về vùng hoặc nơi dữ liệu được xử lý.

Ví dụ đơn giản lấy khối văn bản đầu tiên để hiển thị. Khi dùng công cụ hoặc nhiều loại nội dung, cần giữ tin nhắn đầy đủ cho lịch sử và xử lý tiếp. Các mã định danh, vùng và phiên bản thư viện trong video cần được kiểm tra khi thực hành.

## Câu hỏi

**1. Chọn một.** Đã chuyển sang Converse nhưng mã vẫn đọc phản hồi theo cấu trúc của API cũ nên bị lỗi. Cần sửa gì?

A. Chỉ tăng temperature.

B. Chỉ đổi prompt.

C. Bỏ xử lý phản hồi.

D. Adapter theo cấu trúc request/response đúng nhà cung cấp.

**2. Chọn một.** Service báo mô hình không tồn tại trong môi trường đã chọn. Kiểm tra trực tiếp?

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

2. **A.** A nhắm lỗi tích hợp; B, C, D không làm mô hình có sẵn.

3. **B.** B giữ kiểm tra cấu hình; A, C, D suy rộng cơ chế định tuyến.
