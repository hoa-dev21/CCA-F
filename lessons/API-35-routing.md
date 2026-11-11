# Chọn nhánh chuyên biệt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287801), sources/api-lessons/287801.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Routing là phân loại yêu cầu rồi chuyển tới cách xử lý phù hợp. Mỗi nhóm có thể dùng prompt, công cụ hoặc quy trình khác nhau. Trong mẫu của bài, một yêu cầu đi vào nhánh được chọn, thay vì chạy tất cả các nhánh.

Ví dụ: Câu hỏi về lỗi phần mềm cần quy trình hỗ trợ kỹ thuật; yêu cầu sửa hóa đơn cần quy trình thanh toán. Bước phân loại quyết định chuyển câu hỏi tới đâu.

Cách này có ích khi các nhóm yêu cầu đủ rõ để phân loại đáng tin cậy, và mỗi nhóm được lợi từ cách xử lý chuyên biệt. Nếu mọi yêu cầu cần cùng cách làm, thêm bộ chuyển nhánh có thể không mang lại lợi ích tương xứng.

Khi kết quả sai, cần phân biệt lỗi chọn nhánh với lỗi bên trong nhánh. Quy trình kỹ thuật có thể hoạt động tốt nhưng vẫn trả lời không phù hợp nếu được giao nhầm yêu cầu về hóa đơn. Khi đó, cần xem bước phân loại trước khi sửa quy trình kỹ thuật.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Yêu cầu sửa hóa đơn bị chuyển sang nhánh kỹ thuật; nhánh kỹ thuật vốn xử lý đúng các ticket phần mềm. Sửa thành phần nào trước?

A. Prompt của nhánh kỹ thuật để nó cũng sửa hóa đơn.

B. Router và tiêu chí phân loại ở ranh giới hai nhóm.

C. Tăng tool của mọi nhánh để xử lý được mọi loại yêu cầu.

D. Chạy thêm lần nữa cùng nhánh kỹ thuật rồi lấy đa số.

**Câu 2 — Chọn một.** Mọi yêu cầu trong một sản phẩm hiện dùng cùng quy trình, cùng công cụ và rubric. Nhóm muốn thêm router với bốn nhãn. Quyết định hợp lý nhất?

A. Thêm router vì phân loại luôn cải thiện độ đúng.

B. Dùng bốn nhãn nhưng chạy cùng handler để chứng minh kiến trúc mở rộng.

C. Chỉ thêm khi chuyên biệt hóa tạo lợi ích đo được.

D. Chạy cả bốn nhãn song song rồi dùng nhãn có confidence cao nhất.

**Câu 3 — Chọn hai.** Ticket vừa báo lỗi phần mềm vừa tranh chấp hóa đơn, trong khi router hiện chỉ có hai nhãn đơn. Hai thay đổi nào giúp xử lý ranh giới này?

A. Định nghĩa quy tắc ưu tiên/chuyển cấp hoặc luồng cho yêu cầu nhiều ý định.

B. Bắt chọn nhãn đầu tiên xuất hiện trong câu để luôn xác định được.

C. Đưa ví dụ ranh giới và đánh giá lỗi định tuyến trên tập riêng.

D. Gán ngẫu nhiên một nhãn để tránh bias về một nhánh.

**Câu 4 — Chọn một.** Router báo nhãn đúng, nhưng câu trả lời cuối vẫn sai do nhánh chuyên biệt lấy nhầm dữ liệu. Cách đo nào phân biệt được vấn đề?

A. Chỉ đo độ đúng nhãn vì một nhánh chuyên biệt đã được kiểm thử trước đó.

B. Đo latency toàn luồng và tỷ lệ request HTTP thành công theo từng nhánh.

C. Dùng confidence định tuyến để quyết định câu trả lời cuối có cần review.

D. Đo router, chất lượng nhánh và kết quả toàn luồng.

**Câu 5 — Chọn hai.** Hệ routing chọn một nhánh xử lý cho mỗi yêu cầu đã phân loại rõ. Hai đặc điểm nào cần giữ khi tối ưu?

A. Chỉ gọi nhánh được chọn khi các nhánh khác không cần cho yêu cầu.

B. Luôn gọi mọi nhánh để mỗi nhánh biết router đang hoạt động.

C. Các handler nhận đủ context và quyền phù hợp nhiệm vụ riêng.

D. Dùng cùng prompt chung cho mọi nhánh dù nhu cầu khác nhau.

## Đáp án và giải thích

1. **B.** B nhắm lỗi chọn nhánh. A/C làm nhánh chuyên biệt phình ra mà giữ lỗi định tuyến. D lặp xử lý sai loại đầu vào.

2. **C.** C xét lợi ích thực của chuyên biệt hóa. A khẳng định quá mức. B thêm độ phức tạp mà chưa thay hành vi. D tăng công việc không cần cho một quy trình chung.

3. **A, C.** A quy định cách xử lý trường hợp không đơn; C kiểm tra khả năng phân loại. B phụ thuộc cách viết thay vì nhu cầu. D làm hành vi không gắn tiêu chí nghiệp vụ.

4. **D.** D đo từng tầng và toàn hệ để xác định lỗi thực. A không kiểm tra chất lượng nhánh trên dữ liệu hiện tại. B đo vận hành, không đo lấy đúng dữ liệu. C confidence chọn nhánh không chứng minh kết quả bên trong nhánh.

5. **A, C.** A giữ mục tiêu tránh xử lý thừa; C tạo giá trị chuyên biệt. B biến routing thành chạy mọi nhánh. D làm mất khác biệt mà router nhằm khai thác.

## Đối chiếu Vertex

Bộ điều phối phân loại rồi chọn một quy trình chuyên biệt, không chạy mọi nhánh. Gợi ý 3–10 nhóm trong bài là minh họa; cần xử lý đầu vào mơ hồ hoặc không thuộc nhóm nào và đo lỗi phân loại. Cùng chủ đề như lập trình hoặc lướt sóng vẫn có thể chứa nhiều ý định khác nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Routing workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289242). Bản lưu: `sources/vertex-lessons/289242.json`.
