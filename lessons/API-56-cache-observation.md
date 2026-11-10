# Prompt caching in action

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287774), sources/api-lessons/287774.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Bài thực hành thêm thiết lập cache vào bản sao của định nghĩa công cụ hoặc các khối hướng dẫn hệ thống. Tạo bản sao giúp tránh sửa ngoài ý muốn một cấu trúc đang được nhiều yêu cầu dùng chung.

Sau khi gửi yêu cầu, hãy xem số liệu sử dụng do API trả về, gọi là usage. Cần phân biệt phần tạo cache mới, phần đọc từ cache và phần đầu vào vẫn được xử lý mới. Đây là bằng chứng phù hợp hơn việc chỉ cảm thấy câu trả lời nhanh hơn.

Khi một phần nội dung thay đổi, khả năng dùng lại cache ở phần sau có thể giảm. Nên quan sát số liệu để biết điều gì xảy ra, thay vì đoán toàn bộ cache đã mất. Tên các trường usage trong mẫu cần được đối chiếu với API và thư viện đang sử dụng.

Dùng lại cache thành công không chứng minh câu trả lời đạt chất lượng. Một prompt chạy nhanh hơn nhưng vẫn trả lời sai cần được sửa và đánh giá như bình thường.

## Câu hỏi

**1. Chọn một.** Muốn chứng minh yêu cầu dùng cache, dữ liệu nào phù hợp nhất?

A. Chỉ cảm giác chờ ngắn.

B. Usage đọc/tạo cache theo API được hỗ trợ.

C. Chỉ tên mô hình.

D. Chỉ câu trả lời dài.

**2. Chọn một.** Vì sao mẫu sao chép bản mô tả cấu trúc dữ liệu trước khi thêm cache control?

A. Để bỏ validation.

B. Để tạo mọi quyền mới.

C. Tránh mutation ngoài ý muốn của cấu trúc dùng lại.

D. Để thay kết quả công cụ.

**3. Chọn một.** Cache hit cao có đủ kết luận prompt đạt chất lượng không?

A. Chưa; vẫn đánh giá độ đúng và đáp ứng yêu cầu.

B. Đủ mọi trường hợp.

C. Đủ nếu chi phí giảm.

D. Đủ nếu không có log lỗi.

## Đáp án

1. **B.** B là tín hiệu trực tiếp; A có nhiễu, C và D không xác nhận hit.

2. **C.** C kiểm soát thay đổi; A, B, D không liên quan thao tác sao chép.

3. **A.** A tách hiệu năng và chất lượng; B, C, D suy rộng từ tín hiệu khác.

## Đối chiếu Vertex

Sao chép danh sách và schema trước khi thêm `cache_control` để không sửa đối tượng dùng chung ngoài ý muốn. Theo dõi `cache_creation_input_tokens` và `cache_read_input_tokens` để biết có tạo hoặc đọc cache. Đổi system vẫn có thể dùng lại phần định nghĩa công cụ ổn định ở trước. Không mặc định một ký tự đổi làm mất mọi phần cache, hoặc mọi công việc đều rẻ hơn khi dùng cache. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289200). Bản lưu: `sources/vertex-lessons/289200.json`.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ nguồn ban đầu dùng ghi chú chính thức do trang khóa cung cấp cho trợ lý, khóa `bedrock`, tiêu đề “Prompt Caching in Action”. Đây là ghi chú tóm tắt, khác bản chép video. Nội dung nói về lưu đệm system, tools, theo dõi số liệu ghi và đọc, cùng phần ổn định trước điểm đánh dấu. Các tên `cache_point`, `cache_write_input_tokens`, thời hạn 5 phút và ngưỡng 1024 thuộc ghi chú, không tự là giao diện hiện hành của mọi cấu hình Converse. Cần đối chiếu thư viện và nhà cung cấp; dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/bedrock-276787.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ sau đó bổ sung việc đọc toàn bộ phụ đề. Mẫu thêm điểm cache loại `default` cho system hoặc tools, rồi xem số liệu ghi lần đầu và đọc ở lần sau. Đổi câu người dùng sau điểm đánh dấu có thể vẫn dùng phần system đã lưu; đổi system tạo lần ghi mới cho phần thay đổi. Thời hạn 5 phút, ngưỡng 1024 và tên trường trong lời giảng không phải quy định chung cho mọi nhà cung cấp, mô hình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787). Bản lưu: `sources/bedrock-media/276787.json`.
