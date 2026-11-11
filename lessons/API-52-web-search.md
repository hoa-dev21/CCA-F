# The web search tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287755), sources/api-lessons/287755.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Công cụ tìm kiếm web trong bài được chạy phía dịch vụ Anthropic, còn gọi là server tool. Điểm này khác với công cụ chỉnh sửa tệp do ứng dụng phải tự viết mã thực thi.

Phản hồi có thể gồm các khối yêu cầu tìm kiếm, kết quả và trích dẫn nguồn. Ứng dụng cần giữ các thông tin đó và trình bày nguồn phù hợp để người dùng kiểm tra câu trả lời.

Có thể đặt giới hạn số lần tìm kiếm hoặc phạm vi nguồn theo những tùy chọn công cụ hỗ trợ. Giới hạn số lần dùng chỉ kiểm soát mức sử dụng, không chứng minh đã tìm đủ bằng chứng. Tương tự, giới hạn vào một trang uy tín giúp chọn nguồn nhưng không bảo đảm mọi nhận định đều được nguồn đó chứng minh.

Ví dụ: Sau khi tìm kiếm, cần xem đoạn được trích có thực sự hỗ trợ kết luận hay không. Chỉ còn câu trả lời bằng văn bản mà mất liên kết nguồn sẽ khiến người dùng khó kiểm tra.

Tên phiên bản, điều kiện bật công cụ và các trường hỗ trợ trong video cần đối chiếu khi triển khai. Ý chính của bài là phân biệt nơi thực thi và giữ được bằng chứng từ nguồn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ứng dụng đang dùng web search phía dịch vụ nhưng dispatcher local báo “unknown tool”. Nguyên nhân kiến trúc nào cần kiểm tra?

A. Có đổi tool_result thành câu trả lời người dùng hay không.

B. Có đặt max_tokens đủ lớn để tải web hay không.

C. Kiểm tra dispatcher có nhầm server tool thành client tool.

D. Có thiếu hàm local đọc mọi website theo tên công cụ hay không.

**Câu 2 — Chọn một.** Web search bị giới hạn số lần dùng; mô hình hết lượt nhưng vẫn thiếu bằng chứng cho một kết luận. Ứng dụng nên diễn giải giới hạn thế nào?

A. Hết quota chưa đủ bằng chứng; báo thiếu hoặc xử lý tiếp.

B. Hết lượt đồng nghĩa đã tìm đủ vì dịch vụ tự chọn lượng tối ưu.

C. Dùng nguồn đầu tiên để điền mọi kết luận còn thiếu.

D. Bỏ nguồn khi hết lượt để câu trả lời ít bị chất vấn.

**Câu 3 — Chọn hai.** Wrapper muốn chỉ giữ text cuối của phản hồi web search. Hai dữ liệu nào nên giữ thêm khi cần kiểm chứng?

A. Chỉ danh sách domain được phép thay cho các đoạn trích.

B. Các block và metadata cần cho xử lý đúng phản hồi công cụ.

C. Chỉ số lượt đã dùng thay cho nguồn.

D. Thông tin kết quả và nguồn gắn với nhận định.

**Câu 4 — Chọn một.** Chỉ tìm trong một domain uy tín, nhưng đoạn trích nói năm trước còn câu trả lời khẳng định tình hình hiện tại. Cần sửa gì?

A. Coi domain được cho phép là đủ để bỏ kiểm tra nội dung.

B. Dùng ngày truy xuất hôm nay làm mốc thời gian cho số liệu nguồn.

C. Tăng số lần nhắc tên domain trong câu trả lời.

D. Đối chiếu thời điểm và mức hỗ trợ của đoạn nguồn cho kết luận.

**Câu 5 — Chọn hai.** Sau nâng SDK, web search vẫn trả text nhưng UI mất nguồn. Hai việc nào cần kiểm tra?

A. Thay toàn bộ bằng client tool vì server tool không cần metadata.

B. Kết luận rằng tìm kiếm không chạy chỉ vì UI không hiện nguồn.

C. Cách SDK biểu diễn các block kết quả và trích dẫn ở phiên bản mới.

D. Đường truyền metadata từ backend tới phần hiển thị nguồn.

## Đáp án và giải thích

1. **C.** A sai: Không sửa nhầm lẫn trách nhiệm thực thi. B sai: Ngân sách đầu ra không xác định nơi chạy công cụ. C đúng: Hai loại khác nhau ở nơi thực thi. D sai: Không phải yêu cầu mặc định của server tool trong bài.

2. **A.** A đúng: Ngân sách không chứng minh tìm kiếm đầy đủ. B sai: Giới hạn do cấu hình không là chứng nhận độ đủ. C sai: Nguồn có thể không hỗ trợ những kết luận đó. D sai: Mất kiểm chứng không giải quyết thiếu bằng chứng.

3. **B, D.** A sai: Uy tín domain không xác nhận nội dung cụ thể. B đúng: Không làm mất cấu trúc có ý nghĩa. C sai: Mức sử dụng không chứa bằng chứng. D đúng: Người dùng cần truy lại bằng chứng.

4. **D.** A sai: Phạm vi nguồn không bảo đảm mọi nhận định. B sai: Ngày lấy trang không thay đổi kỳ đo của số liệu; truy xuất hôm nay vẫn có thể nhận bằng chứng về năm trước. C sai: Lặp nguồn không làm dữ liệu mới hơn. D đúng: Uy tín không thay điều kiện thời gian.

5. **C, D.** A sai: Server tool vẫn cần giữ bằng chứng phản hồi. B sai: Có thể là lỗi hiển thị hoặc ánh xạ. C đúng: Adapter có thể bỏ sót cấu trúc mới. D đúng: Nguồn có thể bị mất sau khi nhận đúng.

## Đối chiếu Vertex

Ví dụ tìm kiếm phía dịch vụ dùng `max_uses`, `allowed_domains` và các khối kết quả, trích dẫn. Khác editor do ứng dụng chạy, công cụ tìm kiếm do dịch vụ thực thi khi nhà cung cấp và mô hình hỗ trợ. Video chưa chứng minh tính năng đang có trên mọi cấu hình Vertex. Giới hạn tên miền không bảo đảm mọi nhận định đúng; giữ trích dẫn và kiểm tra nội dung nguồn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The web search tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289183). Bản lưu: `sources/vertex-lessons/289183.json`.
