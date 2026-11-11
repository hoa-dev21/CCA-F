# Rules of prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287770), sources/api-lessons/287770.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Trong ví dụ lưu đệm thủ công, ứng dụng đánh dấu điểm kết thúc của phần muốn tái sử dụng, gọi là breakpoint. Dấu `cache_control` được đặt trên một khối nội dung. Phần từ đầu yêu cầu đến điểm đó, còn gọi là prefix, phải đáp ứng điều kiện khớp của dịch vụ để dùng lại cache.

Vì vậy, nên đặt nội dung ổn định trước và nội dung thường đổi sau. Ví dụ: tài liệu tham chiếu dùng chung nằm trước, câu hỏi riêng của từng lượt nằm sau. Nếu chèn dữ liệu thay đổi ngay ở đầu, khả năng tái sử dụng phần tiếp theo có thể bị ảnh hưởng.

Không nên lặp văn bản vô nghĩa chỉ để vượt ngưỡng đủ điều kiện lưu đệm. Việc đó làm tăng lượng đầu vào mà không giúp giải quyết nhiệm vụ.

Thời gian cache còn hiệu lực (TTL), ngưỡng token, số điểm đánh dấu và cách bật tự động hoặc thủ công có thể khác theo mô hình, phiên bản. Bài này giải thích logic của ví dụ; không phải bộ thông số có thể áp dụng nguyên trạng cho mọi hệ thống.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A changing timestamp precedes a stable document, with a cache breakpoint after the document. Hits are low. What arrangement helps?

A. Increase output tokens.

B. Put stable content first and per-turn data afterward.

C. Repeat the timestamp after the breakpoint.

D. Keep changing timestamps at equal character lengths.

**Question 2 — Choose one.** What does placing `cache_control` on a changing question actually mean?

A. Every token after it is guaranteed reusable.

B. It marks a prefix boundary; cache-matching conditions still apply.

C. The service ignores all earlier differences.

D. It stores the final answer at that location.

**Question 3 — Choose two.** Which TWO principles support a stable-document prefix with changing questions?

A. Place shared documents before per-turn questions.

B. Verify thresholds, TTL, and markers against the actual version.

C. Insert random data before documents in cache tests.

D. Repeat meaningless text to bypass all thresholds.

**Question 4 — Choose one.** A small system-prompt change precedes the breakpoint. The team assumes a full hit because most tokens match. What should it do?

A. Assume every account cache was deleted.

B. Use character-overlap percentage as the exact hit rate.

C. Inspect usage and provider prefix-matching rules.

D. Discard the new requirement to restore hits.

**Question 5 — Choose two.** Which TWO mistakes should a manual cache review avoid?

A. Omitting currently required information to maximize hits.

B. Placing stable reference content before changing inputs.

C. Measuring real usage after structural changes.

D. Treating a marker as proof that a cache was read.

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
