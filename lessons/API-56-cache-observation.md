# Prompt caching in action

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287774), sources/api-lessons/287774.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Bài thực hành gắn cache control vào bản sao tool schema hoặc system blocks để tránh sửa ngoài ý muốn cấu trúc dùng lại. Sau đó quan sát usage phân biệt tạo cache, đọc cache và phần đầu vào vẫn xử lý mới.

Đo hiệu quả bằng tín hiệu API thích hợp thay vì chỉ cảm giác request nhanh. Một phần nội dung đổi có thể làm giảm hit ở phần sau; giữ khả năng quan sát thay vì đoán toàn bộ cache đã bị mất. Các tên trường usage trong mẫu cần đối chiếu SDK hiện hành.

Caching không thay kiểm thử chất lượng: prompt nhanh hơn nhưng sai yêu cầu vẫn là kết quả sai.

## Câu hỏi

**1. Chọn một.** Muốn chứng minh request dùng cache, dữ liệu nào phù hợp nhất?

A. Chỉ cảm giác chờ ngắn.

B. Usage đọc/tạo cache theo API được hỗ trợ.

C. Chỉ tên model.

D. Chỉ câu trả lời dài.

**2. Chọn một.** Vì sao mẫu sao chép schema trước khi thêm cache control?

A. Để bỏ validation.

B. Để tạo mọi quyền mới.

C. Tránh mutation ngoài ý muốn của cấu trúc dùng lại.

D. Để thay tool result.

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

Đã đọc [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289200), sources/vertex-lessons/289200.json. Copy list/schema trước thêm cache_control tránh mutate đối tượng dùng chung. Quan sát cache_creation_input_tokens/cache_read_input_tokens để xác minh hit; thay system có thể vẫn đọc prefix tools ổn định. Không suy mọi ký tự đổi đều xóa mọi prefix hay caching luôn rẻ hơn với mọi workload. Dùng chung câu hỏi khái niệm.

## Bổ sung từ ghi chú khóa học chính thức

Mục [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787) được đối chiếu qua ghi chú do trang khóa cung cấp cho trợ lý của khóa, key bedrock, tiêu đề “Prompt Caching in Action”; nguồn [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: sources/official-note-lessons/bedrock-276787.json. Đây là ghi chú tóm tắt chính thức, không phải bản chép video đã xem. Nguồn ghi chú nêu cache system/tools, theo dõi cache write/read usage và nội dung ổn định trước breakpoint. Các tên cache_point, cache_write_input_tokens trong ghi chú không tự là field Converse hiện hành; đối chiếu contract SDK/provider trước triển khai. TTL5phút/ngưỡng1024 là số của nguồn, không bảo đảm phổ quát. Dùng chung câu hỏi khái niệm.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Prompt caching in action](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276787), sources/bedrock-media/276787.json. Đã đọc cả phụ đề thay vì chỉ dựa notes: mẫu thêm cache point type default cho system/tools, trả usage và quan sát write lần đầu/read lượt sau. Đổi user text sau breakpoint vẫn có thể dùng prefix system đã cache; đổi system gây write mới cho phần thay đổi. TTL5phút/ngưỡng1024 và tên trường trong lời nói không được coi là contract live của mọi provider/model. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
