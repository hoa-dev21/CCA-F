# Accessing the API — Luồng qua Bedrock

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276716), sources/bedrock-lessons/276716.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Tóm tắt

Trong mẫu, trình duyệt gửi câu hỏi tới backend; backend dùng Bedrock client với định danh model; Bedrock trả assistant message; backend đưa kết quả về UI. Việc chọn cloud provider thay lớp tích hợp, không bỏ trách nhiệm quản lý dữ liệu và hội thoại của ứng dụng.

Để chẩn đoán lỗi, phân biệt client/backend, lớp SDK/provider và xử lý phản hồi. Không coi việc gửi request thành công là bằng chứng model đã tạo đầu ra đúng nhiệm vụ.

Bài ngắn giải thích luồng tổng thể, không mô tả đầy đủ IAM, cấu hình vùng hay bảo đảm dữ liệu. Các chi tiết cloud configuration nằm ngoài phạm vi Exam Guide đã tải; không suy chính sách bảo mật chỉ từ sơ đồ luồng.

## Câu hỏi

**1. Chọn một.** Trong mẫu web chat, thành phần nào gọi Bedrock client?

A. Chỉ CSS của trang.

B. Backend ứng dụng.

C. Tên model tự gọi.

D. Chỉ file ảnh.

**2. Chọn một.** UI không hiện kết quả. Cần phân biệt điều gì để debug?

A. Chỉ giọng điệu.

B. Chỉ tiêu đề.

C. Từng chặng UI/backend/provider và cấu trúc phản hồi.

D. Không cần kết quả API.

**3. Chọn một.** Sơ đồ request ngắn có đủ để khẳng định mọi chính sách lưu trữ dữ liệu không?

A. Chưa; cần tài liệu chính sách/cấu hình có thẩm quyền.

B. Đủ mọi trường hợp.

C. Đủ nếu dùng cloud lớn.

D. Đủ nếu API trả nhanh.

## Đáp án

1. **B.** B đúng luồng; A, C, D không thực hiện request SDK trong mẫu.

2. **C.** C cô lập tầng lỗi; A, B không quan sát luồng, D bỏ bằng chứng.

3. **A.** A giới hạn suy luận; B, C, D không chứng minh retention.
