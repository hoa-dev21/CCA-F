# Rules of prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287770), sources/api-lessons/287770.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Trong ví dụ lưu đệm thủ công, ứng dụng đánh dấu điểm kết thúc của phần muốn tái sử dụng, gọi là breakpoint. Dấu `cache_control` được đặt trên một khối nội dung. Phần từ đầu yêu cầu đến điểm đó, còn gọi là prefix, phải đáp ứng điều kiện khớp của dịch vụ để dùng lại cache.

Vì vậy, nên đặt nội dung ổn định trước và nội dung thường đổi sau. Ví dụ: tài liệu tham chiếu dùng chung nằm trước, câu hỏi riêng của từng lượt nằm sau. Nếu chèn dữ liệu thay đổi ngay ở đầu, khả năng tái sử dụng phần tiếp theo có thể bị ảnh hưởng.

Không nên lặp văn bản vô nghĩa chỉ để vượt ngưỡng đủ điều kiện lưu đệm. Việc đó làm tăng lượng đầu vào mà không giúp giải quyết nhiệm vụ.

Thời gian cache còn hiệu lực (TTL), ngưỡng token, số điểm đánh dấu và cách bật tự động hoặc thủ công có thể khác theo mô hình, phiên bản. Bài này giải thích logic của ví dụ; không phải bộ thông số có thể áp dụng nguyên trạng cho mọi hệ thống.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Prefix gồm timestamp mỗi lượt, rồi tài liệu dài ổn định; breakpoint ở cuối tài liệu. Cache hit thấp. Sửa bố trí nào hợp lý?

A. Chỉ tăng max_tokens đầu ra.

B. Đặt phần ổn định trước và dữ liệu từng lượt sau nó.

C. Đặt timestamp thêm lần nữa sau breakpoint để cân bằng.

D. Đổi timestamp thành văn bản cùng độ dài nhưng vẫn thay giá trị.

**Câu 2 — Chọn một.** Nhóm đặt cache_control trên câu hỏi mới mỗi lượt và kỳ vọng cache toàn bộ yêu cầu. Hiểu đúng breakpoint là gì?

A. Nó bảo đảm mọi token sau marker đều được tái sử dụng.

B. Marker chỉ định prefix; còn cần điều kiện khớp cache.

C. Nó yêu cầu dịch vụ bỏ qua mọi khác biệt trước marker.

D. Nó lưu câu trả lời cuối ở vị trí marker.

**Câu 3 — Chọn hai.** Muốn tối ưu prefix có tài liệu ổn định và câu hỏi động. Hai nguyên tắc nào phù hợp?

A. Đặt tài liệu dùng chung trước câu hỏi riêng từng lượt.

B. Đối chiếu ngưỡng, TTL và cách đánh dấu với phiên bản thực dùng.

C. Chèn dữ liệu ngẫu nhiên trước tài liệu để phân biệt người dùng trong cache test.

D. Lặp một đoạn vô nghĩa để vượt mọi ngưỡng token.

**Câu 4 — Chọn một.** Một thay đổi nhỏ trong system prompt xuất hiện trước breakpoint, tài liệu sau đó giữ nguyên. Nhóm mặc định vẫn full hit vì phần lớn token giống. Cần làm gì?

A. Coi mọi cache đều bị xóa trên toàn tài khoản.

B. Dùng phần trăm ký tự trùng làm tỷ lệ cache hit chính xác.

C. Quan sát usage và kiểm tra điều kiện khớp prefix của dịch vụ.

D. Bỏ phần system vừa sửa để lấy lại hit dù mất yêu cầu mới.

**Câu 5 — Chọn hai.** Review thiết kế cache thủ công, hai lỗi nào cần tránh?

A. Tối ưu hit bằng cách bỏ thông tin cần cho câu hỏi hiện tại.

B. Giữ phần tham chiếu ổn định trước dữ liệu biến đổi.

C. Đo số liệu thực sau mỗi thay đổi cấu trúc prompt.

D. Coi marker là bằng chứng cache chắc chắn đã được đọc.

## Đáp án và giải thích

1. **B.** A sai: Không sửa điều kiện khớp prefix đầu vào. B đúng: Biến động đầu prefix có thể phá khả năng khớp phía sau. C sai: Không loại biến động đã có ở đầu. D sai: Cùng độ dài không đồng nghĩa cùng nội dung.

2. **B.** A sai: Bài mô tả prefix đến điểm đánh dấu. B đúng: Đánh dấu không làm nội dung đổi trở thành giống nhau. C sai: Không phải cơ chế bỏ qua thay đổi. D sai: Nhầm đầu vào với đầu ra.

3. **A, B.** A đúng: Tạo phần đầu ổn định. B đúng: Điều kiện cụ thể phụ thuộc môi trường. C sai: Phá tính ổn định đang muốn đo. D sai: Tốn đầu vào và không tạo giá trị nhiệm vụ.

4. **C.** A sai: Một thay đổi request không chứng minh phạm vi ảnh hưởng đó. B sai: Không phải số liệu sử dụng thật. C đúng: Tỷ lệ giống cao không tự bảo đảm hit. D sai: Tối ưu cache không nên phá nhiệm vụ.

5. **A, D.** A đúng: Hiệu năng không được thay chất lượng nhiệm vụ. B sai: Đây là cách bố trí có cơ sở, không phải lỗi. C sai: Đây là cách xác minh phù hợp, không phải lỗi. D đúng: Còn phụ thuộc điều kiện và usage.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse chèn khối `cachePoint`, khác `cache_control` của Messages API. Giữ phần đầu ổn định và quan sát số liệu sử dụng; không thêm nội dung vô nghĩa chỉ để đạt ngưỡng. Việc ánh xạ bài học phải dựa trên nội dung đã đọc, không chỉ một trang chứa liên kết hoặc video chưa xem. Dùng chung câu hỏi.

Nguồn đối chiếu: [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276785). Bản lưu: `sources/bedrock-lessons/276785.json`.

## Đối chiếu Vertex

Mẫu dùng `cache_control` loại `ephemeral`, xét thứ tự tools, system, messages và phần đầu trùng khớp. Thời hạn, ngưỡng 1024 token và số điểm đánh dấu trong video thuộc cấu hình lúc giảng. Không chèn dữ liệu vô nghĩa để vượt ngưỡng. Đặt điểm đánh dấu ở công cụ không tự lưu đệm phần system nằm sau đó. Dùng chung câu hỏi.

Nguồn đối chiếu: [Rules of prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289194). Bản lưu: `sources/vertex-lessons/289194.json`.
