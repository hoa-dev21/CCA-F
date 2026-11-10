# Rules of prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287770), sources/api-lessons/287770.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Trong ví dụ lưu đệm thủ công, ứng dụng đánh dấu điểm kết thúc của phần muốn tái sử dụng, gọi là breakpoint. Dấu `cache_control` được đặt trên một khối nội dung. Phần từ đầu yêu cầu đến điểm đó, còn gọi là prefix, phải đáp ứng điều kiện khớp của dịch vụ để dùng lại cache.

Vì vậy, nên đặt nội dung ổn định trước và nội dung thường đổi sau. Ví dụ: tài liệu tham chiếu dùng chung nằm trước, câu hỏi riêng của từng lượt nằm sau. Nếu chèn dữ liệu thay đổi ngay ở đầu, khả năng tái sử dụng phần tiếp theo có thể bị ảnh hưởng.

Không nên lặp văn bản vô nghĩa chỉ để vượt ngưỡng đủ điều kiện lưu đệm. Việc đó làm tăng lượng đầu vào mà không giúp giải quyết nhiệm vụ.

Thời gian cache còn hiệu lực (TTL), ngưỡng token, số điểm đánh dấu và cách bật tự động hoặc thủ công có thể khác theo mô hình, phiên bản. Bài này giải thích logic của ví dụ; không phải bộ thông số có thể áp dụng nguyên trạng cho mọi hệ thống.

## Câu hỏi

**1. Chọn một.** Phần tài liệu ổn định bị chèn dữ liệu thay đổi ở đầu mỗi yêu cầu. Nên xem xét gì?

A. Đổi font.

B. Bỏ mọi câu hỏi.

C. Tăng tên file.

D. Tách prefix ổn định và phần biến đổi theo hợp đồng cache.

**2. Chọn một.** Tại sao không nên lặp vô nghĩa văn bản để đạt ngưỡng cache?

A. Không phục vụ tác vụ và có thể tăng chi phí/context.

B. Vì mọi cache đều cấm văn bản.

C. Vì output luôn bằng input.

D. Vì đó là cách xác minh đúng duy nhất.

**3. Chọn một.** Có thể áp ngưỡng/TTL trong video cho mọi mô hình hiện tại không?

A. Có, luôn bất biến.

B. Không; cần xác minh theo tài liệu/cấu hình đang triển khai.

C. Có, nếu prompt dài.

D. Có, không cần usage.

## Đáp án

1. **D.** D nhắm điều kiện tái dùng; A, B, C không tổ chức nội dung phù hợp.

2. **A.** A nêu đánh đổi thực; B sai tuyệt đối, C sai quan hệ, D nhầm tối ưu với xác minh.

3. **B.** B kiểm tra tương thích; A, C, D suy rộng chi tiết phiên bản.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse chèn khối `cachePoint`, khác `cache_control` của Messages API. Giữ phần đầu ổn định và quan sát số liệu sử dụng; không thêm nội dung vô nghĩa chỉ để đạt ngưỡng. Việc ánh xạ bài học phải dựa trên nội dung đã đọc, không chỉ một trang chứa liên kết hoặc video chưa xem. Dùng chung câu hỏi.

Nguồn đối chiếu: [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276785). Bản lưu: `sources/bedrock-lessons/276785.json`.

## Đối chiếu Vertex

Mẫu dùng `cache_control` loại `ephemeral`, xét thứ tự tools, system, messages và phần đầu trùng khớp. Thời hạn, ngưỡng 1024 token và số điểm đánh dấu trong video thuộc cấu hình lúc giảng. Không chèn dữ liệu vô nghĩa để vượt ngưỡng. Đặt điểm đánh dấu ở công cụ không tự lưu đệm phần system nằm sau đó. Dùng chung câu hỏi.

Nguồn đối chiếu: [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289194). Bản lưu: `sources/vertex-lessons/289194.json`.
