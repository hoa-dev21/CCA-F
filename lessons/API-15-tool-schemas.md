# Hợp đồng gọi công cụ

Nguồn: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287753), sources/api-lessons/287753.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Sau khi viết hàm thực thi, cần mô tả nó cho Claude. Công cụ specification có `name`, `description` và `input_schema`. Bản mô tả cấu trúc dữ liệu mô tả đối số; không thay thế mã thực thi.

Tên cần rõ chức năng. Description nên nêu công cụ làm gì, khi nào dùng và trả dữ liệu gì. Với từng đối số, giải thích kiểu và ý nghĩa, chẳng hạn chuỗi ngày dùng quy ước định dạng nào. Trường `required` phân biệt đối số bắt buộc và tùy chọn.

Bài cho phép nhờ Claude hỗ trợ sinh bản mô tả cấu trúc dữ liệu từ mã hàm và tài liệu. Vẫn cần đối chiếu bản mô tả cấu trúc dữ liệu với hàm thật: mô tả một tham số không có trong hàm sẽ tạo hợp đồng sai. Type annotation hỗ trợ kiểm tra khi phát triển, không tự tạo tích hợp hệ thống xử lý phía máy chủ.

Ví dụ: hai công cụ tra cứu gần giống nhau cần mô tả ranh giới rõ, thay vì cùng ghi “lấy dữ liệu”. Tên và description giúp mô hình chọn; input bản mô tả cấu trúc dữ liệu giúp tạo đối số phù hợp.

## Câu hỏi

**1. Chọn một.** Claude liên tục chọn nhầm giữa hai công cụ có mô tả giống nhau. Cải thiện trực tiếp?

A. Tăng độ dài đầu ra.

B. Làm rõ mục đích, phạm vi và lúc dùng từng công cụ.

C. Xóa mọi mô tả.

D. Chỉ thay màu giao diện.

**2. Chọn một.** Thành phần nào mô tả cấu trúc đối số?

A. `input_schema`.

B. Tiêu đề giao diện.

C. Phản hồi cuối cùng.

D. Tên tài khoản.

**3. Chọn một.** Có bản mô tả cấu trúc dữ liệu nhưng chưa có hàm gọi hệ thống xử lý phía máy chủ. Điều gì còn thiếu?

A. Không thiếu gì, bản mô tả cấu trúc dữ liệu tự gọi hệ thống xử lý phía máy chủ.

B. Chỉ cần đổi tên công cụ.

C. Mã thực thi thao tác khi nhận yêu cầu công cụ.

D. Chỉ cần tăng `max_tokens`.

## Đáp án

1. **B.** A và D không sửa chọn công cụ; C bỏ thông tin cần thiết.
2. **A.** B, C, D không định nghĩa hợp đồng đối số.
3. **C.** A nhầm mô tả với thực thi; B và D không tạo kết nối hệ thống xử lý phía máy chủ.

## Đối chiếu Bedrock: JSON Bản mô tả cấu trúc dữ liệu for các công cụ

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276758) và đối chiếu khái niệm với bài chung. Converse minh họa lớp toolSpec và inputSchema; không sao chép input_schema của Messages API thành field Converse. Sinh bản mô tả cấu trúc dữ liệu từ mẫu dữ liệu chỉ là khởi đầu, phải đối chiếu hợp đồng hàm và dữ liệu thật; không đưa secret/dữ liệu riêng vào converter bên ngoài. Nguồn: sources/bedrock-lessons/276758.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289174), sources/vertex-lessons/289174.json. Mẫu Messages dùng name/description/input_schema, khác Converse toolSpec/inputSchema. ToolParam hỗ trợ kiểm tra kiểu khi phát triển, không thay validation runtime. Bản mô tả cấu trúc dữ liệu sinh bằng mô hình cần kiểm tra; độ dài3–4 câu chỉ là gợi ý, trọng tâm là ranh giới và khi nào dùng. Dùng chung câu hỏi khái niệm.
