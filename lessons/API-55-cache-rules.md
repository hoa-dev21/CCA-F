# Rules of prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287770), sources/api-lessons/287770.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Bài mô tả breakpoint để chọn phần prefix có thể tái sử dụng. Ở mẫu thủ công, marker cache_control nằm trên block; nội dung trước và tại breakpoint phải đáp ứng điều kiện khớp của dịch vụ. Nội dung thay đổi sau đó vẫn cần xử lý riêng.

Sắp xếp phần ổn định trước phần thay đổi giúp tối ưu khả năng dùng lại. Không thêm văn bản vô nghĩa chỉ để vượt một ngưỡng cache: vừa tăng token vừa không phục vụ tác vụ.

TTL, ngưỡng token, số breakpoint và cơ chế bật tự động/thủ công có thể khác theo model/phiên bản. Đây là tóm tắt logic ví dụ, không phải cấu hình hiện hành đã xác minh.

## Câu hỏi

**1. Chọn một.** Phần tài liệu ổn định bị chèn dữ liệu thay đổi ở đầu mỗi request. Nên xem xét gì?

A. Đổi font.

B. Bỏ mọi câu hỏi.

C. Tăng tên file.

D. Tách prefix ổn định và phần biến đổi theo hợp đồng cache.

**2. Chọn một.** Tại sao không nên lặp vô nghĩa văn bản để đạt ngưỡng cache?

A. Không phục vụ tác vụ và có thể tăng chi phí/context.

B. Vì mọi cache đều cấm văn bản.

C. Vì output luôn bằng input.

D. Vì đó là cách xác minh đúng duy nhất.

**3. Chọn một.** Có thể áp ngưỡng/TTL trong video cho mọi model hiện tại không?

A. Có, luôn bất biến.

B. Không; cần xác minh theo tài liệu/cấu hình đang triển khai.

C. Có, nếu prompt dài.

D. Có, không cần usage.

## Đáp án

1. **D.** D nhắm điều kiện tái dùng; A, B, C không tổ chức nội dung phù hợp.

2. **A.** A nêu đánh đổi thực; B sai tuyệt đối, C sai quan hệ, D nhầm tối ưu với xác minh.

3. **B.** B kiểm tra tương thích; A, C, D suy rộng chi tiết phiên bản.

## Đối chiếu tính năng trên Bedrock

Đã đọc [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276785), sources/bedrock-lessons/276785.json. Mẫu Converse chèn cachePoint block, khác cache_control của Messages API. Giữ prefix ổn định và quan sát usage, không thêm văn bản vô nghĩa chỉ để vượt ngưỡng trong ví dụ. Không map bài caching-in-action chỉ có links/video chưa đọc. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Đối chiếu Vertex

Đã đọc [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289194), sources/vertex-lessons/289194.json. Mẫu cache_control ephemeral, thứ tự tools/system/messages và prefix giống hệt. TTL/ngưỡng1024/sốbreakpoints trong video là cấu hình theo thời điểm; không thêm nội dung vô nghĩa để vượt ngưỡng. Breakpoint ở tool không tự cache system phía sau. Dùng chung câu hỏi khái niệm.
