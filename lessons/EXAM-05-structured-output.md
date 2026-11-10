# bản mô tả cấu trúc dữ liệu và lựa chọn công cụ

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.3, trang PDF 17–18. Câu hỏi tự biên soạn; không phải bài video Skilljar.

## Nội dung bài học


Trong cách làm được đề cương kiểm tra, ứng dụng khai báo một công cụ trích xuất với JSON Schema — bản mô tả các trường, kiểu dữ liệu và điều kiện của đầu vào — rồi lấy dữ liệu từ khối `tool_use` mà mô hình trả về.

Cách chọn công cụ qua `tool_choice` cần phù hợp với quy trình:

- `auto`: mô hình có thể trả văn bản hoặc gọi công cụ.
- `any`: yêu cầu gọi một công cụ trong tập được cung cấp.
- Chọn theo tên: yêu cầu gọi một công cụ cụ thể.

Ví dụ: Quy trình phải trích thông tin mô tả tài liệu trước khi bổ sung dữ liệu khác thì nên chọn đúng công cụ cần chạy trước, thay vì chỉ nhắc bằng prompt. Nếu có nhiều công cụ trích xuất theo loại tài liệu và chưa biết loại nào phù hợp, `any` cho phép chọn trong tập mà vẫn yêu cầu gọi công cụ.

Schema giúp quy định cấu trúc, chưa chứng minh dữ liệu đúng nghĩa. Hóa đơn có thể đủ trường và đúng kiểu nhưng tổng tiền sai hoặc một giá trị bị đặt nhầm trường. Việc khai báo schema thông thường cũng không tự bảo đảm kiểm tra nghiêm ngặt ở mọi mô hình/API; cần cấu hình tính năng được môi trường hỗ trợ.

Thiết kế sẵn cách biểu diễn thông tin thiếu hoặc mơ hồ. Optional nghĩa trường có thể không xuất hiện; nullable nghĩa trường có thể nhận giá trị `null`. Đây là hai điều khác nhau. Với danh sách giá trị cho phép (enum), có thể cần `unclear` hoặc `other` kèm phần giải thích theo yêu cầu ứng dụng. Không ép mô hình chọn giá trị cụ thể khi nguồn không có căn cứ.

Kết hợp schema với quy ước chuẩn hóa, chẳng hạn định dạng ngày, và kiểm tra nghiệp vụ sau trích xuất.

## Câu hỏi tình huống

**1. Chọn một.** Quy trình xử lý cần luôn trích thông tin mô tả bằng một công cụ xác định trước khi làm bước sau. Chọn cấu hình nào sát đề cương?

A. Auto và hy vọng mô hình luôn chọn đúng.

B. Forced selection với tên công cụ thông tin mô tả.

C. Any khi tập có cả công cụ enrichment thay thế.

D. Chỉ tăng output tokens.

**2. Chọn một.** JSON đúng bản mô tả cấu trúc dữ liệu nhưng tổng các dòng khác tổng hóa đơn. Kết luận nào đúng?

A. Đã đúng toàn bộ vì parse thành công.

B. Cần bỏ mọi bản mô tả cấu trúc dữ liệu.

C. Đây là lỗi ngữ nghĩa cần validation, bản mô tả cấu trúc dữ liệu đúng chưa loại trừ nó.

D. Chỉ cần đổi thụt dòng JSON.

**3. Chọn hai.** Nguồn có thể không ghi mã số thuế hoặc loại tài liệu có thể mơ hồ. Thiết kế nào phù hợp?

A. Cho phép biểu diễn thiếu dữ liệu theo nullable/optional đã định nghĩa.

B. Bắt luôn điền một mã hợp lệ trông có vẻ thật.

C. Chọn ngẫu nhiên một enum khi không rõ.

D. Có giá trị unclear/other và trường chi tiết khi hợp đồng cần.

## Đáp án

1. **B.** A không buộc gọi; C không buộc đúng tên; D không điều khiển lựa chọn.
2. **C.** A nhầm hình thức với nội dung; B bỏ kiểm tra hữu ích; D không sửa số liệu.
3. **A, D.** B khuyến khích bịa; C che sự mơ hồ.

## Đối chiếu bài Bedrock

Mẫu Converse dùng `toolSpec`, `inputSchema.json` và `toolChoice` để lấy dữ liệu từ đầu vào công cụ. Nếu chỉ cần trích xuất, có thể kết thúc ở dữ liệu đã kiểm tra mà không thực hiện hành động bên ngoài giả tạo. Nếu tiếp tục hội thoại công cụ, phải trả kết quả đúng giao thức. Schema thông thường không bảo đảm kiểm tra nghiêm ngặt ở mọi mô hình, API. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structured data with tools](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276765). Bản lưu: `sources/bedrock-lessons/276765.json`.

## Đối chiếu Vertex

Lấy dữ liệu từ `tool_use.input` và chọn đúng công cụ bằng `tool_choice` khi chế độ đó được hỗ trợ. Khai báo `properties` chưa khiến trường bắt buộc; cần `required`, giá trị cho phép, cách biểu diễn null và kiểm tra theo yêu cầu. Lời hứa “đáng tin cậy được bảo đảm” trong bài chưa chứng minh đúng nguồn. Nếu chỉ dùng công cụ để quy định đầu ra, không cần tạo hành động giả; nếu tiếp tục hội thoại, giữ đúng giao thức kết quả công cụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tools for structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289181). Bản lưu: `sources/vertex-lessons/289181.json`.
