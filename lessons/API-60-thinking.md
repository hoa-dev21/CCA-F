# Extended thinking

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287773), sources/api-lessons/287773.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Chế độ suy luận thêm (thinking) dành thêm xử lý cho những nhiệm vụ khó. Đổi lại, yêu cầu có thể tốn thêm thời gian, chi phí và trả về cấu trúc phức tạp hơn. Hãy đánh giá trên các nhiệm vụ đại diện để biết lợi ích có đáng hay không, thay vì mặc định bật cho mọi câu hỏi.

Phản hồi có thể chứa khối thinking hoặc nội dung không đọc trực tiếp được. Ứng dụng cần giữ và gửi lại các khối theo quy định của mô hình và thư viện đang dùng, đặc biệt không tự sửa thông tin cần bảo toàn như `signature`.

Phần hiển thị cho người dùng không nhất thiết là toàn bộ quá trình suy nghĩ bên trong. Nó cũng không chứng minh kết luận đúng.

Ví dụ: Nếu câu hỏi cần dữ liệu đơn hàng hiện tại, thêm suy luận không tự lấy được dữ liệu ấy. Vẫn phải tra nguồn phù hợp và kiểm tra kết quả. Ngân sách xử lý, cách cấu hình và việc kết hợp với `temperature` hoặc prefill cần được xác minh theo từng mô hình.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Tác vụ phân loại đơn giản đáp ứng SLA, còn bài toán lập kế hoạch nhiều ràng buộc thường sai. Nhóm cân nhắc bật thinking cho toàn hệ. Quyết định nào có cơ sở nhất?

A. Bật cho tất cả vì nhiều suy luận luôn giảm cả chi phí lẫn độ trễ.

B. Giữ tắt cho mọi tác vụ vì nhóm đơn giản đã đạt yêu cầu.

C. Đo lợi ích/chi phí theo nhóm rồi chọn nơi bật suy luận.

D. Chỉ so sánh độ dài phần suy luận để chọn cấu hình.

**Câu 2 — Chọn hai.** Adapter ghi lịch sử chỉ giữ text hiển thị; lượt tiếp theo có thinking/tool interaction bị lỗi. Hai thay đổi nào phù hợp với bài?

A. Bảo toàn signature và nội dung opaque cần giữ, thay vì tự sửa để “làm sạch”.

B. Giữ các khối phản hồi cần truyền lại theo hợp đồng mô hình/SDK.

C. Tạo signature mới từ hash của text đã hiển thị để khớp giao diện.

D. Bỏ mọi khối không đọc được vì chúng không mang ý nghĩa đối với người dùng.

**Câu 3 — Chọn một.** Bot thiếu trạng thái đơn hàng hiện tại nhưng nhóm tăng thinking budget để giảm trả lời sai. Vì sao cách này chưa xử lý nguyên nhân?

A. Mọi sai sót đơn hàng đều do budget thấp hơn kích thước lịch sử.

B. Chỉ cần hiển thị phần thinking để người dùng tự suy ra trạng thái thật.

C. Thinking chỉ hữu ích khi không dùng bất kỳ công cụ nào.

D. Suy luận thêm không cung cấp dữ liệu hiện tại; cần tra nguồn có thẩm quyền và kiểm chứng.

**Câu 4 — Chọn hai.** Đội chuyển mẫu thinking sang mô hình khác và muốn giữ temperature cùng prefill của mẫu cũ. Hai việc nào cần trước khi triển khai?

A. Coi phần reasoning có vẻ thuyết phục là bằng chứng đủ về chất lượng.

B. Đánh giá tác vụ đại diện với giới hạn độ trễ và chất lượng đặt trước.

C. Kiểm tra tương thích cấu hình và hợp đồng phản hồi của mô hình đích.

D. Giữ nguyên mọi tham số vì SDK chấp nhận đối tượng cấu hình.

**Câu 5 — Chọn một.** Câu trả lời có phần thinking dài, hợp lý nhưng số tổng cuối sai so với bảng nguồn. Hệ thống nên dựa vào tiêu chí nào để chấp nhận?

A. Số lượng bước suy luận vì kết quả ngắn có thể chỉ là lỗi trình bày.

B. Kết quả khớp nguồn và quy tắc nghiệp vụ khi kiểm tra độc lập.

C. Signature hợp lệ vì nó chứng nhận mọi mệnh đề trong thinking là đúng.

D. Mức tự tin ở đoạn kết vì mô hình đã cân nhắc nhiều khả năng.

## Đáp án và giải thích

1. **C.** A sai: xử lý bổ sung có thể tăng thời gian/chi phí và chưa chắc tăng độ đúng. B sai: kết quả nhóm đơn giản không đánh giá lợi ích cho nhóm khó đang thất bại. C đúng: thinking không mặc định đem lại cùng lợi ích cho mọi loại yêu cầu. D sai: độ dài không đo chất lượng đáp án hay mức đáp ứng SLA.

2. **A, B.** A đúng: thông tin được ký hoặc không đọc trực tiếp không nên bị biến đổi tùy ý. B đúng: lịch sử giao thức có thể cần dữ liệu ngoài văn bản hiển thị. C sai: ứng dụng không thể tự thay giao thức xác thực của provider bằng hash riêng. D sai: không hiển thị trực tiếp không đồng nghĩa không cần cho giao thức tiếp nối.

3. **D.** A sai: không có căn cứ suy lỗi thiếu nguồn thành lỗi ngân sách. B sai: giải thích quá trình không tạo dữ kiện nghiệp vụ chưa được truy cập. C sai: bài không đặt giới hạn tuyệt đối như vậy; vấn đề là thiếu dữ liệu cần lấy. D đúng: lỗ hổng là bằng chứng đầu vào, không chỉ khả năng xử lý nó.

4. **B, C.** A sai: lập luận hiển thị có thể đi tới kết luận sai và chưa đo yêu cầu vận hành. B đúng: cấu hình hợp lệ chưa chứng minh đáng dùng trong sản phẩm. C đúng: khả năng kết hợp tính năng có thể khác theo mô hình/phiên bản. D sai: đối tượng được tạo không chứng minh dịch vụ hỗ trợ tổ hợp tham số.

5. **B.** A sai: nhiều bước không chứng minh phép tính cuối đúng. B đúng: đầu ra phải đạt yêu cầu thật chứ không chỉ tạo cảm giác tin cậy. C sai: tính toàn vẹn giao thức không xác nhận sự thật nghiệp vụ. D sai: tự tin không thay thế kiểm tra với bằng chứng và tính toán.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse dùng nội dung suy luận, `signature` và `redactedContent` với cấu hình theo mô hình. Phần nhìn thấy không phải toàn bộ suy nghĩ bên trong hoặc bằng chứng đáp án đúng. Giữ các khối theo giao thức; kiểm tra ngân sách và khả năng kết hợp tính năng trước khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276788). Bản lưu: `sources/bedrock-lessons/276788.json`.

## Đối chiếu Vertex

Mẫu có `thinking`, `signature`, `redacted_thinking` và minh họa đánh đổi thời gian, token. Cần so sánh chất lượng trước khi bật. Phần hiển thị không chứng minh kết luận đúng. Cách đặt ngân sách và việc dùng cùng temperature hoặc prefill cần theo mô hình, thư viện thực tế. Bảo toàn khối nội dung và chữ ký theo giao thức. Dùng chung câu hỏi.

Nguồn đối chiếu: [Extended thinking](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289197). Bản lưu: `sources/vertex-lessons/289197.json`.
