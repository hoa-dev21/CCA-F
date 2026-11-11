# The web search tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287755), sources/api-lessons/287755.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Công cụ tìm kiếm web trong bài được chạy phía dịch vụ Anthropic, còn gọi là server tool. Điểm này khác với công cụ chỉnh sửa tệp do ứng dụng phải tự viết mã thực thi.

Phản hồi có thể gồm các khối yêu cầu tìm kiếm, kết quả và trích dẫn nguồn. Ứng dụng cần giữ các thông tin đó và trình bày nguồn phù hợp để người dùng kiểm tra câu trả lời.

Có thể đặt giới hạn số lần tìm kiếm hoặc phạm vi nguồn theo những tùy chọn công cụ hỗ trợ. Giới hạn số lần dùng chỉ kiểm soát mức sử dụng, không chứng minh đã tìm đủ bằng chứng. Tương tự, giới hạn vào một trang uy tín giúp chọn nguồn nhưng không bảo đảm mọi nhận định đều được nguồn đó chứng minh.

Ví dụ: Sau khi tìm kiếm, cần xem đoạn được trích có thực sự hỗ trợ kết luận hay không. Chỉ còn câu trả lời bằng văn bản mà mất liên kết nguồn sẽ khiến người dùng khó kiểm tra.

Tên phiên bản, điều kiện bật công cụ và các trường hỗ trợ trong video cần đối chiếu khi triển khai. Ý chính của bài là phân biệt nơi thực thi và giữ được bằng chứng từ nguồn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Provider-hosted web search triggers “unknown tool” in a local dispatcher. What should be investigated?

A. Whether results were converted into user text.

B. Whether output tokens are enough to download websites.

C. Whether the dispatcher mistakes a server tool for a client tool.

D. Whether a local function must read every website by tool name.

**Question 2 — Choose one.** Search reaches its usage limit without sufficient evidence. How should that be interpreted?

A. The limit does not prove sufficient research; disclose gaps or arrange further handling.

B. The quota guarantees optimal research completeness.

C. Use the first source to fill remaining conclusions.

D. Remove citations to avoid questions.

**Question 3 — Choose two.** A wrapper retains only final search text. Which TWO additional elements matter for verification?

A. Only the allowed-domain list instead of passages.

B. Blocks and metadata required for correct tool-response processing.

C. Only the number of searches used.

D. Search results and sources linked to claims.

**Question 4 — Choose one.** A trusted-domain passage concerns last year, but the answer claims current conditions. What should change?

A. Allowed domains eliminate content checking.

B. Use today's retrieval date as the data date.

C. Repeat the trusted domain name more often.

D. Check source timing and whether it supports the claim's strength.

**Question 5 — Choose two.** After an SDK upgrade, text remains but source links disappear. Which TWO areas should be checked?

A. Replace everything with client tools because server tools need no metadata.

B. Assume search never ran because the UI lacks links.

C. New SDK representations of result and citation blocks.

D. Metadata transmission from backend to source display.

## Đáp án và giải thích

1. **C.** A sai: Không sửa nhầm lẫn trách nhiệm thực thi. B sai: Ngân sách đầu ra không xác định nơi chạy công cụ. C đúng: Hai loại khác nhau ở nơi thực thi. D sai: Không phải yêu cầu mặc định của server tool trong bài.

2. **A.** A đúng: Ngân sách không chứng minh tìm kiếm đầy đủ. B sai: Giới hạn do cấu hình không là chứng nhận độ đủ. C sai: Nguồn có thể không hỗ trợ những kết luận đó. D sai: Mất kiểm chứng không giải quyết thiếu bằng chứng.

3. **B, D.** A sai: Uy tín domain không xác nhận nội dung cụ thể. B đúng: Không làm mất cấu trúc có ý nghĩa. C sai: Mức sử dụng không chứa bằng chứng. D đúng: Người dùng cần truy lại bằng chứng.

4. **D.** A sai: Phạm vi nguồn không bảo đảm mọi nhận định. B sai: Ngày lấy trang không thay đổi kỳ đo của số liệu; truy xuất hôm nay vẫn có thể nhận bằng chứng về năm trước. C sai: Lặp nguồn không làm dữ liệu mới hơn. D đúng: Uy tín không thay điều kiện thời gian.

5. **C, D.** A sai: Server tool vẫn cần giữ bằng chứng phản hồi. B sai: Có thể là lỗi hiển thị hoặc ánh xạ. C đúng: Adapter có thể bỏ sót cấu trúc mới. D đúng: Nguồn có thể bị mất sau khi nhận đúng.

## Đối chiếu Vertex

Ví dụ tìm kiếm phía dịch vụ dùng `max_uses`, `allowed_domains` và các khối kết quả, trích dẫn. Khác editor do ứng dụng chạy, công cụ tìm kiếm do dịch vụ thực thi khi nhà cung cấp và mô hình hỗ trợ. Video chưa chứng minh tính năng đang có trên mọi cấu hình Vertex. Giới hạn tên miền không bảo đảm mọi nhận định đúng; giữ trích dẫn và kiểm tra nội dung nguồn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The web search tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289183). Bản lưu: `sources/vertex-lessons/289183.json`.
