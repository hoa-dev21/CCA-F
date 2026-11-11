# Giao nhiệm vụ rõ ràng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287744), sources/api-lessons/287744.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Hãy mở đầu yêu cầu bằng việc bạn muốn Claude thực hiện. Nêu hành động, kết quả cần nhận và phạm vi công việc bằng ngôn ngữ đơn giản.

Ví dụ: “Tóm tắt báo cáo thành ba gạch đầu dòng và nêu rủi ro chính” cho biết rõ cần làm gì. Câu “Báo cáo này khá thú vị, tôi muốn hiểu thêm” chỉ nêu sự quan tâm và để Claude tự đoán bạn muốn tóm tắt, giải thích hay phân tích.

Trong ví dụ của bài, một câu hỏi chung về ăn uống được đổi thành yêu cầu tạo thực đơn một ngày, có đối tượng sử dụng và các điều kiện cần đáp ứng. Kết quả đánh giá tăng trong ví dụ đó, nhưng mức tăng này không phải lời bảo đảm cho mọi ứng dụng.

Bạn vẫn có thể viết yêu cầu dưới dạng câu hỏi. Điều cần kiểm tra là người đọc có hiểu chính xác nhiệm vụ và đầu ra mong muốn hay không. Sau khi sửa cách diễn đạt, hãy thử với dữ liệu của mình để biết kết quả có tốt hơn.

## Tự kiểm tra

**Câu 1 — Chọn một.** Stakeholder viết “báo cáo này khá thú vị, giúp tôi hiểu hơn”. Sản phẩm cần bản tóm tắt ba ý cho lãnh đạo. Chỉnh sửa nào giảm đúng sự mơ hồ?

A. Nêu tác vụ ba ý, rủi ro cần tìm và người đọc ngay đầu.

B. Chỉ đổi câu kết thành “hãy trả lời thật hữu ích”.

C. Đưa báo cáo vào prompt hai lần để nhấn mạnh tầm quan trọng.

D. Thêm lời khen model là chuyên gia nhưng giữ nguyên yêu cầu.

**Câu 2 — Chọn hai.** Prompt mới cần sinh báo cáo ra quyết định, không phải trò chuyện khám phá. Hai thông tin nào nên nêu rõ ngay trong yêu cầu?

A. Phạm vi vấn đề và đối tượng sử dụng báo cáo.

B. Sản phẩm phải bàn giao và cấu trúc mong muốn.

C. Toàn bộ lịch sử cá nhân của người đặt yêu cầu dù không liên quan.

D. Một lời hứa rằng model phải luôn cho đáp án tự tin.

**Câu 3 — Chọn một.** Sau khi viết prompt trực tiếp hơn, điểm một ca tăng mạnh. Nhóm muốn áp dụng cùng công thức cho mọi nhiệm vụ. Kết luận nào thận trọng nhưng hữu ích?

A. Chỉ cần duyệt độ rõ của prompt bằng mắt.

B. Cần đo lại theo tác vụ và rubric của từng ứng dụng.

C. Mức tăng ở một ca chứng minh mọi prompt dài hơn đều tốt hơn.

D. Kỹ thuật chỉ áp dụng cho đúng câu chữ demo nên không cần thử nơi khác.

**Câu 4 — Chọn hai.** Đội đang sửa “phân tích dữ liệu này” thành yêu cầu có thể kiểm thử. Hai bổ sung nào trực tiếp giúp người chấm xác định đã hoàn thành?

A. Lặp từ “chính xác” ở mỗi đoạn thay cho tiêu chí cụ thể.

B. Nêu phải trả bảng kết quả và các hạn chế dữ liệu.

C. Nêu cần so sánh chỉ số nào trong khoảng thời gian nào.

D. Nêu model phải dùng từ ngữ “chuyên sâu” trong tiêu đề.

**Câu 5 — Chọn một.** Một prompt rõ ràng yêu cầu “ba rủi ro chính” nhưng nguồn chỉ đủ chứng minh hai. Thiết kế chỉ dẫn nào tránh biến độ rõ thành ép bịa?

A. Lấy một rủi ro và viết lại thành hai mục để đủ định dạng.

B. Đổi “ba” thành “nhiều” để khỏi kiểm tra số lượng.

C. Chỉ nêu rủi ro có căn cứ và báo thiếu bằng chứng.

D. Cho phép suy đoán để điền đủ ba rủi ro.

## Đáp án và giải thích

1. **A.** A nêu hành động, sản phẩm và phạm vi. D xác định vai trò nhưng chưa xác định việc; C lặp dữ liệu; B vẫn là tiêu chí chung khó kiểm tra.

2. **A, B.** B làm rõ đầu ra, A định hướng phạm vi. C thêm nhiễu; D thúc đẩy cách diễn đạt mà không làm rõ tác vụ hay bằng chứng.

3. **B.** B giữ giá trị gợi ý nhưng không suy rộng thiếu dữ liệu. C đánh tráo rõ ràng với độ dài; A bỏ kiểm chứng; D phủ nhận khả năng khái quát mà chưa thử.

4. **B, C.** C xác định công việc, B xác định sản phẩm. D và A là dấu hiệu hình thức không cho biết phân tích đã giải quyết yêu cầu chưa.

5. **C.** C làm rõ cách xử lý thiếu dữ liệu. D và A đạt hình thức bằng nội dung không được hỗ trợ; B bớt ràng buộc nhưng chưa quy định xử lý thiếu nguồn.

## Đối chiếu Bedrock: Being clear and direct

Bài Bedrock cùng nhấn mạnh nêu rõ hành động và đầu ra. Việc khuyên viết trực tiếp không có nghĩa mọi yêu cầu dạng câu hỏi đều kém. Dùng chung câu hỏi cho các kiến thức tương đương.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276743). Bản lưu: `sources/bedrock-lessons/276743.json`.

## Đối chiếu Vertex

Nêu rõ hành động, đối tượng và điều kiện ngay đầu prompt. Các điểm 2.32 và 3.92 là kết quả của ví dụ, không bảo đảm mức cải thiện cho mọi nhiệm vụ. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Being clear and direct](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289170). Bản lưu: `sources/vertex-lessons/289170.json`.
