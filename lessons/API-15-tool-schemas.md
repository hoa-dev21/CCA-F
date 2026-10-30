# Tool schemas — Hợp đồng gọi công cụ

Nguồn: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287753), sources/api-lessons/287753.json. Câu hỏi tự biên soạn.

## Tóm tắt

Sau khi viết hàm thực thi, cần mô tả nó cho Claude. Tool specification có `name`, `description` và `input_schema`. Schema mô tả đối số; không thay thế mã thực thi.

Tên cần rõ chức năng. Description nên nêu công cụ làm gì, khi nào dùng và trả dữ liệu gì. Với từng đối số, giải thích kiểu và ý nghĩa, chẳng hạn chuỗi ngày dùng quy ước định dạng nào. Trường `required` phân biệt đối số bắt buộc và tùy chọn.

Bài cho phép nhờ Claude hỗ trợ sinh schema từ mã hàm và tài liệu. Vẫn cần đối chiếu schema với hàm thật: mô tả một tham số không có trong hàm sẽ tạo hợp đồng sai. Type annotation hỗ trợ kiểm tra khi phát triển, không tự tạo tích hợp backend.

Ví dụ: hai công cụ tra cứu gần giống nhau cần mô tả ranh giới rõ, thay vì cùng ghi “lấy dữ liệu”. Tên và description giúp mô hình chọn; input schema giúp tạo đối số phù hợp.

## Câu hỏi

**1. Chọn một.** Claude liên tục chọn nhầm giữa hai tool có mô tả giống nhau. Cải thiện trực tiếp?

A. Tăng độ dài đầu ra.

B. Làm rõ mục đích, phạm vi và lúc dùng từng tool.

C. Xóa mọi mô tả.

D. Chỉ thay màu giao diện.

**2. Chọn một.** Thành phần nào mô tả cấu trúc đối số?

A. `input_schema`.

B. Tiêu đề giao diện.

C. Phản hồi cuối cùng.

D. Tên tài khoản.

**3. Chọn một.** Có schema nhưng chưa có hàm gọi backend. Điều gì còn thiếu?

A. Không thiếu gì, schema tự gọi backend.

B. Chỉ cần đổi tên tool.

C. Mã thực thi thao tác khi nhận yêu cầu công cụ.

D. Chỉ cần tăng `max_tokens`.

## Đáp án

1. **B.** A và D không sửa chọn tool; C bỏ thông tin cần thiết.
2. **A.** B, C, D không định nghĩa hợp đồng đối số.
3. **C.** A nhầm mô tả với thực thi; B và D không tạo kết nối backend.

## Đối chiếu Bedrock: JSON Schema for tools

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276758) và đối chiếu khái niệm với bài chung. Converse minh họa lớp toolSpec và inputSchema; không sao chép input_schema của Messages API thành field Converse. Sinh schema từ mẫu dữ liệu chỉ là khởi đầu, phải đối chiếu hợp đồng hàm và dữ liệu thật; không đưa secret/dữ liệu riêng vào converter bên ngoài. Nguồn: sources/bedrock-lessons/276758.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289174), sources/vertex-lessons/289174.json. Mẫu Messages dùng name/description/input_schema, khác Converse toolSpec/inputSchema. ToolParam hỗ trợ kiểm tra kiểu khi phát triển, không thay validation runtime. Schema sinh bằng model cần review; độ dài3–4 câu chỉ là gợi ý, trọng tâm là ranh giới và khi nào dùng. Dùng chung câu hỏi khái niệm.
