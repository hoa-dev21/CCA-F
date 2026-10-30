# Prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287772), sources/api-lessons/287772.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Caching tái sử dụng phần xử lý của nội dung đầu vào lặp lại, nhằm giảm độ trễ/chi phí ở trường hợp phù hợp. Nó không phải lưu câu trả lời cuối để trả nguyên bản và không thay trách nhiệm gửi context của ứng dụng.

Khóa minh họa lợi ích khi hỏi nhiều câu về cùng tài liệu hoặc dùng tool/system prompt ổn định. Cần nội dung thực sự có thể tái sử dụng và phép đo usage. Không suy ra “nội dung gần giống” luôn cache hit.

Thời hạn một giờ và các mô tả nội bộ trong video là giản lược theo thời điểm; không xem như bảo đảm mọi model/cấu hình. Exam Guide chỉ yêu cầu biết caching tồn tại, không trọng tâm chi tiết triển khai.

## Câu hỏi

**1. Chọn một.** Caching chủ yếu tái sử dụng gì trong bài?

A. Mọi câu trả lời cuối bất kể câu hỏi.

B. Phần xử lý đầu vào có thể tái sử dụng.

C. Quyền đăng nhập.

D. Mọi lỗi backend.

**2. Chọn một.** Cache có thay việc truyền context cần thiết không?

A. Có, không cần messages.

B. Có, mọi lần đều nhớ.

C. Không; ứng dụng vẫn gửi yêu cầu/context theo hợp đồng.

D. Có, chỉ cần cùng API key.

**3. Chọn một.** Tác vụ nào là ứng viên đáng đo lợi ích cache?

A. Nhiều request dùng cùng tài liệu dài ổn định.

B. Mỗi request hoàn toàn khác nguồn.

C. Chỉ một request nhỏ rồi không lặp.

D. Không gửi dữ liệu.

## Đáp án

1. **B.** B đúng mục tiêu; A nhầm output cache, C và D không phải dữ liệu xử lý prompt.

2. **C.** C phân biệt cache với memory; A, B, D giả định tự giữ hội thoại.

3. **A.** A có phần lặp; B, C ít cơ hội tái dùng, D không có nội dung để xử lý.

## Đối chiếu tính năng trên Bedrock

Đã đọc [Prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276786), sources/bedrock-lessons/276786.json. Bài Bedrock nói TTL5 phút, bản API nói1 giờ; đó là ví dụ/cấu hình khác nhau, không chọn một giá trị làm bảo đảm phổ quát. Dùng cùng kiến thức về tái sử dụng xử lý input, cần xác minh TTL/ngưỡng hiện hành trước triển khai. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Đối chiếu Vertex

Đã đọc [Prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289196), sources/vertex-lessons/289196.json. Nguồn Vertex nói TTL5phút, API nói1giờ. Đây là giá trị của ví dụ khác nhau, cần kiểm tra provider/model/config khi triển khai. Cache tái sử dụng tính toán input ổn định, không là lưu sẵn câu trả lời hay semantic match. Dùng chung câu hỏi khái niệm.
