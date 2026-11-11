# Prompt caching in action

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287774), sources/api-lessons/287774.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Bài thực hành thêm thiết lập cache vào bản sao của định nghĩa công cụ hoặc các khối hướng dẫn hệ thống. Tạo bản sao giúp tránh sửa ngoài ý muốn một cấu trúc đang được nhiều yêu cầu dùng chung.

Sau khi gửi yêu cầu, hãy xem số liệu sử dụng do API trả về, gọi là usage. Cần phân biệt phần tạo cache mới, phần đọc từ cache và phần đầu vào vẫn được xử lý mới. Đây là bằng chứng phù hợp hơn việc chỉ cảm thấy câu trả lời nhanh hơn.

Khi một phần nội dung thay đổi, khả năng dùng lại cache ở phần sau có thể giảm. Nên quan sát số liệu để biết điều gì xảy ra, thay vì đoán toàn bộ cache đã mất. Tên các trường usage trong mẫu cần được đối chiếu với API và thư viện đang sử dụng.

Dùng lại cache thành công không chứng minh câu trả lời đạt chất lượng. Một prompt chạy nhanh hơn nhưng vẫn trả lời sai cần được sửa và đánh giá như bình thường.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Hàm thêm cache_control sửa trực tiếp object tools dùng chung; yêu cầu khác bất ngờ mang cấu hình đó. Thay đổi nào đúng?

A. Tạo bản sao phù hợp trước khi sửa cấu trúc cho request riêng.

B. Đổi tên biến local nhưng giữ cùng tham chiếu object.

C. Xóa cache_control sau khi gọi mà không xét request đồng thời.

D. Thêm lời nhắc yêu cầu mô hình bỏ qua cache của request khác.

**Câu 2 — Chọn một.** Usage cho thấy tạo cache ở lần đầu, đọc cache ở lần sau, nhưng đáp án vẫn sai. Kết luận nào đúng?

A. Giữ nguyên prompt vì sửa nó sẽ làm giảm hit.

B. Xóa kiểm tra ngữ nghĩa để tận dụng hiệu quả cache.

C. Cache có lợi hiệu năng; cần đo chất lượng riêng.

D. Cache hit xác nhận câu trả lời đúng nên bộ chấm đã sai.

**Câu 3 — Chọn hai.** Hai request có độ trễ khác nhau. Hai loại số liệu nào giúp biết cache được dùng ra sao?

A. Chỉ số lần UI cập nhật trong streaming.

B. Phần input tạo cache mới và phần đọc từ cache.

C. Phần input vẫn xử lý mới ngoài cache.

D. Chỉ tổng số ký tự đầu ra.

**Câu 4 — Chọn một.** Sửa một đoạn đầu prompt làm cache-read giảm, nhưng vẫn còn khác 0. Cách diễn giải phù hợp?

A. Có tái sử dụng một phần; cần đọc usage chi tiết.

B. Mọi cache đã mất vì có thay đổi đầu vào.

C. Toàn bộ prompt vẫn hit vì số đọc khác 0.

D. Usage không đáng dùng khi độ trễ thay đổi.

**Câu 5 — Chọn hai.** Nhóm chuyển mẫu cache sang SDK khác. Hai việc cần kiểm chứng là gì?

A. Dùng tốc độ phản hồi làm bằng chứng duy nhất thay usage.

B. Tên và ý nghĩa trường usage của SDK/API đích.

C. Giữ tên trường cũ rồi coi giá trị thiếu là cache hit.

D. Cách sao chép và gắn cấu hình không sửa object dùng chung ngoài ý muốn.

## Đáp án và giải thích

1. **A.** A đúng: Tránh tác dụng phụ lên cấu hình dùng chung. B sai: Tên mới không tạo bản sao. C sai: Vẫn có khoảng thời gian đối tượng chung bị thay đổi. D sai: Lỗi nằm ở trạng thái ứng dụng, không phải suy luận.

2. **C.** A sai: Không nên ưu tiên cache hơn yêu cầu đúng. B sai: Che lỗi không cải thiện chất lượng. C đúng: Hit không chứng minh dùng bằng chứng đúng. D sai: Hai tiêu chí độc lập.

3. **B, C.** A sai: Không là chỉ số hit cache. B đúng: Phân biệt chi phí khởi tạo với tái sử dụng. C đúng: Cho biết cache chỉ bao phủ bao nhiêu đầu vào. D sai: Không mô tả xử lý đầu vào.

4. **A.** A đúng: Quan sát cho phép hiểu tác động từng phần. B sai: Mâu thuẫn với số liệu đọc còn tồn tại. C sai: Có hit một phần không chứng minh toàn bộ. D sai: Độ trễ là chỉ số khác, không phủ nhận usage.

5. **B, D.** A sai: Không tách cache khỏi các nguyên nhân hiệu năng khác. B đúng: Không đọc nhầm số tạo với số đọc. C sai: Thiếu dữ liệu không là thành công. D đúng: Giữ cô lập cấu hình giữa các lượt.

## Đối chiếu Vertex

Sao chép danh sách và schema trước khi thêm `cache_control` để không sửa đối tượng dùng chung ngoài ý muốn. Theo dõi `cache_creation_input_tokens` và `cache_read_input_tokens` để biết có tạo hoặc đọc cache. Đổi system vẫn có thể dùng lại phần định nghĩa công cụ ổn định ở trước. Không mặc định một ký tự đổi làm mất mọi phần cache, hoặc mọi công việc đều rẻ hơn khi dùng cache. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289200). Bản lưu: `sources/vertex-lessons/289200.json`.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ nguồn ban đầu dùng ghi chú chính thức do trang khóa cung cấp cho trợ lý, khóa `bedrock`, tiêu đề “Prompt Caching in Action”. Đây là ghi chú tóm tắt, khác bản chép video. Nội dung nói về lưu đệm system, tools, theo dõi số liệu ghi và đọc, cùng phần ổn định trước điểm đánh dấu. Các tên `cache_point`, `cache_write_input_tokens`, thời hạn 5 phút và ngưỡng 1024 thuộc ghi chú, không tự là giao diện hiện hành của mọi cấu hình Converse. Cần đối chiếu thư viện và nhà cung cấp; dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/bedrock-276787.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ sau đó bổ sung việc đọc toàn bộ phụ đề. Mẫu thêm điểm cache loại `default` cho system hoặc tools, rồi xem số liệu ghi lần đầu và đọc ở lần sau. Đổi câu người dùng sau điểm đánh dấu có thể vẫn dùng phần system đã lưu; đổi system tạo lần ghi mới cho phần thay đổi. Thời hạn 5 phút, ngưỡng 1024 và tên trường trong lời giảng không phải quy định chung cho mọi nhà cung cấp, mô hình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787). Bản lưu: `sources/bedrock-media/276787.json`.
