# Ví dụ prefill và stop sequence

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287732), sources/api-lessons/287732.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học xử lý tình huống cần JSON nhưng mô hình trả thêm lời giải thích hoặc khung định dạng Markdown. Ví dụ ở thời điểm khóa học dùng assistant prefill, tức viết sẵn phần mở đầu câu trả lời, để mở khung mã; sau đó dùng stop sequence, tức chuỗi đánh dấu dừng, ở dấu đóng khung.

Mục đích là hướng câu trả lời về dạng dễ đọc bằng chương trình. Đây không phải cơ chế bảo đảm dữ liệu đúng mọi yêu cầu. JSON đọc được vẫn có thể thiếu trường, chứa giá trị sai hoặc đưa thông tin không có trong nguồn.

Ví dụ dùng kỹ thuật phụ thuộc mô hình và phiên bản. Trước khi chạy lại trên môi trường khác, phải kiểm tra khả năng hỗ trợ prefill và sự tương thích với các tính năng khác. Chuỗi dừng đặt không phù hợp cũng có thể cắt câu trả lời sớm.

Khi ôn Architect, đọc thêm EXAM-05 về cấu trúc đầu ra và `tool_choice`, cùng EXAM-06 về kiểm tra dữ liệu. Cần phân biệt việc làm sạch định dạng với việc kiểm tra cấu trúc và ý nghĩa của kết quả.

## Câu hỏi

**1. Chọn một.** Ví dụ cắt Markdown để thu JSON có tự bảo đảm đúng bản mô tả cấu trúc dữ liệu nghiệp vụ không?

A. Có, mọi JSON hợp lệ đều đúng.

B. Không; cần schema/validation và kiểm tra ngữ nghĩa phù hợp.

C. Có, chỉ cần strip whitespace.

D. Có, không cần dữ liệu nguồn.

**2. Chọn một.** Muốn chạy prefill từ notebook trên mô hình khác. Cần làm gì trước?

A. Giả định mọi mô hình giống nhau.

B. Chỉ đổi tên biến.

C. Kiểm tra hỗ trợ/tương thích theo model/API thực tế.

D. Bỏ mọi lỗi API.

**3. Chọn một.** Ôn lựa chọn bắt buộc công cụ extraction theo Exam Guide nên đọc bài nào trong bộ?

A. EXAM-05 structured output/tool_choice.

B. Chỉ bảng giới hạn ảnh.

C. Chỉ cài Node.

D. Chỉ đổi màu UI.

## Đáp án

1. **B.** B phân biệt cú pháp và yêu cầu; A, C, D coi hình thức thay nội dung.

2. **C.** C kiểm tra hợp đồng; A suy rộng, B không sửa tương thích, D che lỗi.

3. **A.** A đi đúng mục tiêu4.3; B, C, D không giải quyết hợp đồng extraction.

## Đối chiếu bài Bedrock

Ví dụ dùng phần mở đầu câu trả lời để mở khối mã và chuỗi dừng để bỏ phần bao Markdown. Đây là kỹ thuật trong phiên bản của khóa; cần kiểm tra tương thích và dữ liệu đầu ra. Đọc được JSON chưa chứng minh đúng nghiệp vụ. Dùng chung phần giải thích và câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276724). Bản lưu: `sources/bedrock-lessons/276724.json`.

## Đối chiếu Vertex

Mẫu điền trước dấu mở khối mã JSON, đặt chuỗi dừng ở dấu đóng rồi đọc dữ liệu bằng `json.loads`. Cách này không bảo đảm đúng schema hoặc giá trị, cũng không mặc định dùng được với mọi mô hình hay chế độ suy luận. Chọn cơ chế đầu ra được hỗ trợ và kiểm tra kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289158). Bản lưu: `sources/vertex-lessons/289158.json`.
