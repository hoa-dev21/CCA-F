# Prompt caching in action

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287774), sources/api-lessons/287774.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Bài thực hành thêm thiết lập cache vào bản sao của định nghĩa công cụ hoặc các khối hướng dẫn hệ thống. Tạo bản sao giúp tránh sửa ngoài ý muốn một cấu trúc đang được nhiều yêu cầu dùng chung.

Sau khi gửi yêu cầu, hãy xem số liệu sử dụng do API trả về, gọi là usage. Cần phân biệt phần tạo cache mới, phần đọc từ cache và phần đầu vào vẫn được xử lý mới. Đây là bằng chứng phù hợp hơn việc chỉ cảm thấy câu trả lời nhanh hơn.

Khi một phần nội dung thay đổi, khả năng dùng lại cache ở phần sau có thể giảm. Nên quan sát số liệu để biết điều gì xảy ra, thay vì đoán toàn bộ cache đã mất. Tên các trường usage trong mẫu cần được đối chiếu với API và thư viện đang sử dụng.

Dùng lại cache thành công không chứng minh câu trả lời đạt chất lượng. Một prompt chạy nhanh hơn nhưng vẫn trả lời sai cần được sửa và đánh giá như bình thường.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A function adds `cache_control` by mutating shared tools, affecting unrelated requests. What is correct?

A. Make an appropriate copy before request-specific modifications.

B. Rename the variable while keeping the same reference.

C. Remove the field afterward without considering concurrency.

D. Ask the model to ignore other requests' caching.

**Question 2 — Choose one.** Usage shows cache creation then cache reading, but answers remain incorrect. What follows?

A. Keep the prompt unchanged to protect hits.

B. Remove semantic checks to benefit from caching.

C. Caching can improve performance; quality must be measured separately.

D. Hits prove correctness, so the grader is wrong.

**Question 3 — Choose two.** Which TWO usage measures explain caching beyond latency differences?

A. Only streaming UI update count.

B. Input written to and read from the cache.

C. Input still processed outside the cache.

D. Only output character count.

**Question 4 — Choose one.** Editing an early prompt section reduces cache reads but not to zero. What is appropriate?

A. Some reuse remains; inspect detailed usage.

B. All cache reuse is lost because input changed.

C. The entire prompt hits because reads are nonzero.

D. Ignore usage whenever latency changes.

**Question 5 — Choose two.** Which TWO checks matter when moving caching code to another SDK?

A. Use speed as the only evidence.

B. Verify target usage-field names and meanings.

C. Keep old field names and interpret missing values as hits.

D. Verify copying and cache configuration avoid unintended shared-object mutation.

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
