# bản mô tả cấu trúc dữ liệu và lựa chọn công cụ

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.3, trang PDF 17–18. Câu hỏi tự biên soạn; không phải bài video Skilljar.

## Nội dung bài học

Trong cách tiếp cận được đề cương kiểm tra, định nghĩa công cụ trích xuất với JSON bản mô tả cấu trúc dữ liệu, rồi lấy dữ liệu từ tool-use block. Phân biệt `tool_choice`: auto cho mô hình chọn trả text hoặc gọi công cụ; any buộc gọi một công cụ trong tập; lựa chọn theo tên buộc một công cụ cụ thể.

Nếu cần bước thông tin mô tả chạy trước enrichment, ép đúng công cụ thay vì chỉ nhắc trong prompt. Nếu có nhiều bản mô tả cấu trúc dữ liệu trích xuất và chưa biết loại tài liệu, any cho phép mô hình chọn trong tập mà vẫn yêu cầu gọi công cụ.

Bản mô tả cấu trúc dữ liệu chặt giúp kiểm soát hình thức, không chứng minh dữ liệu đúng nghĩa. Tổng dòng hàng có thể sai hoặc dữ liệu bị đặt nhầm trường dù cú pháp hợp lệ. Không coi một bản mô tả cấu trúc dữ liệu khai báo thông thường là tự bảo đảm strict enforcement ở mọi model/API; khi triển khai phải cấu hình khả năng hỗ trợ tương ứng.

Thiết kế cho dữ liệu thiếu và mơ hồ: nullable/optional theo hợp đồng, enum có unclear hoặc other kèm trường mô tả. Optional nghĩa trường có thể vắng; nullable nghĩa giá trị có thể là null — hai khái niệm không đồng nhất. Đừng ép một giá trị cụ thể khi nguồn không có.

Kết hợp bản mô tả cấu trúc dữ liệu với quy tắc chuẩn hóa định dạng, chẳng hạn quy ước ngày tháng, và validation nghiệp vụ sau trích xuất.

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

Đã đọc [Structured data with tools](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276765), sources/bedrock-lessons/276765.json. Mẫu Converse dùng toolSpec/inputSchema.json và toolChoice để lấy dữ liệu từ công cụ arguments. Nếu mục tiêu chỉ nhận extraction, có thể dừng ở dữ liệu đã kiểm tra thay vì thực thi một tác động ngoài hệ thống; nếu tiếp tục hội thoại công cụ loop thì phải trả kết quả theo hợp đồng. Không suy công cụ bản mô tả cấu trúc dữ liệu thông thường là strict guarantee cho mọi API/model. Dùng chung bản giải thích/câu hỏi tương đương, không tăng số câu.

## Đối chiếu Vertex

Đã đọc [Tools for structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289181), sources/vertex-lessons/289181.json. Công cụ extraction lấy dữ liệu từ tool_use.input và dùng tool_choice chọn đúng công cụ khi mode hỗ trợ. Chỉ properties không làm field bắt buộc; cần required/enum/nullability theo quy định về dữ liệu và hành vi và validation. Câu guaranteed reliability trong bài không chứng minh dữ liệu đúng nguồn. Không cần thực thi hành động giả nếu chỉ dùng công cụ làm quy định về đầu ra; nếu tiếp tục conversation phải giữ đúng giao thức kết quả công cụ. Dùng chung câu hỏi khái niệm.
