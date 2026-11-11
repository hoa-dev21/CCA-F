# Ví dụ tác nhân AI thực tế

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287787), sources/api-lessons/287787.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học dùng Claude Code và khả năng điều khiển giao diện máy tính (computer use) để giới thiệu ứng dụng AI thực hiện nhiều bước. Điểm chung là kết hợp mô hình với công cụ, thực hiện thao tác và quan sát kết quả để chọn bước tiếp theo.

Claude Code làm việc với tệp, lệnh và quy trình phát triển phần mềm. Computer use thao tác qua giao diện. Hai cách khác nhau ở nơi hành động, nhưng đều cần biết thao tác vừa làm có đạt kết quả mong muốn hay không.

Ví dụ: Sau khi yêu cầu sửa tệp, cần xem tệp đã thay đổi đúng chưa. Sau thao tác trên giao diện, cần xem trạng thái mới thay vì chỉ giả định việc bấm nút đã thành công.

Đây là bài định hướng trước phần tác nhân AI. Theo đề cương đã lưu, chi tiết computer use nằm ngoài phạm vi thi; nguyên tắc kết hợp công cụ và kiểm chứng kết quả vẫn hữu ích. Bài học mô tả cách hoạt động, không thực hiện thao tác máy tính hay cài ứng dụng thay người học.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Tác nhân bấm nút lưu trên desktop rồi báo hoàn tất, nhưng hộp thoại xác nhận vẫn mở. Bước thiết kế nào thiếu trong vòng tác nhân?

A. Đổi công cụ sang CLI dù ứng dụng không có giao diện lệnh cho tác vụ.

B. Một prompt dài hơn mô tả rằng nút lưu thường hoạt động.

C. Một lần bấm thứ hai tại cùng tọa độ dù giao diện đã thay đổi.

D. Quan sát kết quả rồi kiểm tra đã đạt trạng thái đích chưa.

**Câu 2 — Chọn hai.** Một agent sửa tệp qua công cụ, agent khác thao tác qua UI. Hai nguyên tắc kiến trúc nào áp dụng cho cả hai?

A. Chọn bước tiếp theo theo kết quả thực tế và xử lý lỗi trong phạm vi quyền.

B. Xem tên công cụ được gọi là bằng chứng hành động đã đạt mục tiêu.

C. Dùng cùng tọa độ cho UI và đường dẫn file để thống nhất executor.

D. Định nghĩa trạng thái đích và kiểm tra bằng chứng sau hành động.

**Câu 3 — Chọn một.** Sau khi xem demo Code và computer use, nhóm muốn dùng số lần gọi tool làm tỷ lệ hoàn thành nhiệm vụ. Chỉ số bổ sung nào cần nhất?

A. Số loại công cụ agent đã dùng trong phiên.

B. Tỷ lệ tool trả về không có lỗi cú pháp.

C. Độ dài phần giải thích của agent sau mỗi lần gọi.

D. Tiêu chí thành công theo mục tiêu, gắn với trạng thái cuối được kiểm chứng.

**Câu 4 — Chọn một.** Cần sửa nhiều file và chạy test trong repo có công cụ file/shell đầy đủ. Nhóm đề xuất chuyển sang UI automation chỉ vì demo computer use ấn tượng. Quyết định nào phù hợp nhất?

A. Dùng luồng file/lệnh đã đáp ứng tác vụ và kiểm chứng được.

B. Chọn UI vì quan sát ảnh tự chứng minh mọi thay đổi code đúng.

C. Chọn theo sản phẩm được nhắc sau cùng trong bài giới thiệu.

D. Dùng cả hai song song sửa cùng file để tăng độ tin cậy.

**Câu 5 — Chọn hai.** Theo đề cương đã lưu của bộ học, computer use là phần định hướng ngoài chi tiết trọng tâm thi. Hai cách sử dụng bài này vẫn có giá trị khi ôn Architect?

A. Rút ra nguyên tắc điều phối tool, quan sát và kiểm chứng kết quả.

B. Dành phần lớn thời gian thuộc tọa độ nút của demo vì đó là bằng chứng thực hành.

C. Dùng đề cương để phân bổ thời gian, không coi mọi tính năng trong demo có cùng trọng số.

D. Xem hai demo thành công là chứng cứ đã hoàn thành bài thực hành của bản thân.

## Đáp án và giải thích

1. **D.** A sai: Không thể suy rằng đường CLI khả dụng; vấn đề trực tiếp là kiểm chứng kết quả. B sai: Mô tả kỳ vọng không thay quan sát trạng thái hiện tại. C sai: Lặp mù có thể tác động sai phần tử và không giải quyết thiếu quan sát. D đúng: Lời gọi thao tác thành công không chứng minh mục tiêu nghiệp vụ đã đạt.

2. **A, D.** A đúng: Agent cần phản hồi môi trường thay vì chỉ thực hiện kịch bản đã tưởng tượng. B sai: Tên/lời gọi không xác nhận kết quả thực thi hay mục tiêu nghiệp vụ. C sai: Hai lớp thao tác có hợp đồng dữ liệu khác nhau, không thể thống nhất bằng giả định này. D đúng: Cả file lẫn UI đều cần điều kiện để biết nhiệm vụ đã đạt.

3. **D.** A sai: Đa dạng công cụ không đồng nghĩa hiệu quả hoặc hoàn tất. B sai: Lời gọi hợp lệ vẫn có thể không đạt mục tiêu, như hộp thoại lưu chưa được xác nhận. C sai: Văn bản dài không chứng minh thay đổi môi trường đúng. D đúng: Đếm hành động đo hoạt động, không đo tác vụ có đạt kết quả đúng.

4. **A.** A đúng: Kiến trúc nên dựa vào công việc và phản hồi khả dụng, không chỉ hình thức demo. B sai: Ảnh không thay thế kiểm tra diff và hành vi chương trình. C sai: Thứ tự trình bày không là tiêu chí phù hợp kỹ thuật. D sai: Hai tác nhân ghi cùng vùng có thể gây xung đột, không tạo kiểm chứng độc lập.

5. **A, C.** A đúng: Đó là kiến thức thiết kế có thể chuyển sang các hệ agent khác. B sai: Tọa độ cụ thể vừa phụ thuộc UI vừa không phải nguyên tắc kiến trúc cần ưu tiên. C đúng: Mức ưu tiên thi cần gắn phạm vi đã xác định. D sai: Quan sát minh họa khác với tự triển khai và xác minh trong môi trường riêng.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, phần tác nhân AI bắt đầu từ Claude Code và Computer Use, xem cách thiết kế và thực hành rồi rút ra nguyên tắc. Tên sản phẩm không thay việc xác định vòng công cụ, cách quan sát và đánh giá của hệ thống. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents overview](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276804). Bản lưu: `sources/bedrock-media/276804.json`.

## Đối chiếu phụ đề chính thức

Bài giới thiệu Claude Code trên dòng lệnh và Computer Use làm hai ví dụ để phân tích, thực hành và rút kinh nghiệm thiết kế tác nhân. Đây là phần định hướng, không phải bằng chứng đã chạy các ứng dụng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Anthropic apps](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289230). Bản lưu: `sources/vertex-media/289230.json`.
