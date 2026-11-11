# Độ biến thiên đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287728), sources/api-lessons/287728.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Khi tạo câu trả lời, mô hình chọn các token tiếp theo dựa trên phân bố xác suất. Tham số `temperature` điều chỉnh mức độ tập trung của lựa chọn này. Trong cách giải thích đơn giản của bài, giá trị thấp thường làm đầu ra ít biến đổi hơn; giá trị cao có thể tạo nhiều cách diễn đạt hoặc ý tưởng đa dạng hơn.

`temperature` không phải thước đo độ đúng. Hạ giá trị này không bổ sung dữ liệu còn thiếu và không sửa được một nguồn thông tin sai. Cũng không nên hứa rằng đặt bằng 0 sẽ luôn cho kết quả giống hệt ở mọi hệ thống và mọi lần chạy.

Ví dụ: Nếu muốn tìm nhiều ý tưởng, bạn có thể so sánh những cấu hình được mô hình hỗ trợ trên cùng yêu cầu. Nếu cần trạng thái đơn hàng mới nhất, điều cần bổ sung là dữ liệu từ hệ thống đơn hàng, không phải chỉ thay `temperature`.

Mô hình và API có thể khác nhau về việc hỗ trợ tham số, khoảng giá trị và cách dùng cùng chế độ suy luận (thinking). Khi triển khai, hãy đối chiếu phiên bản và đánh giá trên công việc thực tế.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Bot trả sai trạng thái đơn hàng dù temperature thấp và câu trả lời ổn định. Log cho thấy chưa tra hệ thống đơn hàng. Ưu tiên sửa gì?

A. Hạ thêm temperature để buộc mô hình chọn trạng thái có xác suất cao nhất.

B. Tăng temperature để có cơ hội đoán trúng trạng thái khác.

C. Bổ sung nguồn trạng thái hiện tại và kiểm chứng kết quả tra cứu.

D. Lấy đa số từ nhiều lần chạy cùng prompt rồi báo kết quả.

**Câu 2 — Chọn một.** Hai cấu hình brainstorm khác temperature được chấm trên hai bộ yêu cầu khác nhau. Cấu hình cao có điểm đa dạng tốt hơn. Kết luận nào hợp lý nhất?

A. Chỉ cần so độ dài đầu ra để loại ảnh hưởng của đề bài.

B. Cần so sampling trên cùng yêu cầu và tiêu chí chấm.

C. Có thể triển khai cấu hình cao cho mọi nhiệm vụ vì điểm đa dạng tốt hơn.

D. Cấu hình thấp không phù hợp brainstorm trong mọi trường hợp.

**Câu 3 — Chọn hai.** Nhóm cần dịch vụ ổn định và có thể kiểm toán. Hai phát biểu nào nên đưa vào tiêu chí vận hành?

A. Temperature thấp có thể giảm biến thiên nhưng không bảo đảm đầu ra bất biến.

B. Vẫn cần bộ đánh giá và kiểm tra bằng chứng cho độ đúng.

C. Temperature bằng 0 thay được kiểm thử hồi quy vì kết quả sẽ giống nhau.

D. Câu trả lời lặp lại nhiều lần được coi là đã xác minh sự thật.

**Câu 4 — Chọn một.** Sau khi đổi mô hình, cấu hình sampling cũ bị từ chối khi bật chế độ suy luận. Bước nào phù hợp nhất?

A. Kiểm tra tổ hợp tham số được model/API mới hỗ trợ.

B. Thử nhiều giá trị ngẫu nhiên cho tới khi một yêu cầu không lỗi.

C. Suy luận rằng mô hình mới kém hơn vì không nhận tham số cũ.

D. Tắt kiểm tra lỗi và dùng đầu ra cuối cùng được cache.

**Câu 5 — Chọn hai.** Một prompt có dữ liệu nguồn mâu thuẫn. Nhóm muốn đo tác động temperature mà không nhầm với xử lý dữ liệu. Hai việc nào cần tách biệt?

A. Chọn cấu hình luôn bỏ qua một nguồn để đạt tính nhất quán.

B. Đánh giá cách phản ánh xung đột nguồn bằng tiêu chí riêng.

C. Đo biến thiên câu trả lời qua nhiều lần chạy cùng cấu hình và đầu vào.

D. Dùng điểm tự tin do mô hình báo làm temperature mục tiêu.

## Đáp án và giải thích

1. **C.** A sai: Ổn định hơn vẫn có thể ổn định ở kết luận sai. B sai: Đa dạng suy đoán không thay bằng chứng. C đúng: Sampling không tạo dữ liệu môi trường đang thiếu. D sai: Các lần đoán có thể cùng thiếu một nguồn quan trọng.

2. **B.** A sai: Độ dài không kiểm soát độ khó hay độ đa dạng nội dung. B đúng: Thiết kế so sánh hiện có biến gây nhiễu. C sai: Đa dạng không đại diện độ đúng cho mọi tác vụ. D sai: Một phép so chưa kiểm soát không chứng minh quy luật chung.

3. **A, B.** A đúng: Không suy từ xu hướng thành cam kết tuyệt đối. B đúng: Sampling không phải thước đo tính chính xác. C sai: Không có bảo đảm đó và môi trường còn có thể đổi. D sai: Nhất quán không chứng minh nguồn đúng.

4. **A.** A đúng: Lỗi tương thích cần giải quyết trước so sánh hành vi. B sai: Không xác lập cấu hình được hỗ trợ có chủ đích. C sai: Hỗ trợ cấu hình không đồng nhất năng lực nhiệm vụ. D sai: Không sửa khả năng tương thích của yêu cầu mới.

5. **B, C.** A sai: Nhất quán bằng cách giấu mâu thuẫn không giải quyết độ đúng. B đúng: Đây là chất lượng sử dụng bằng chứng. C đúng: Đây là cách quan sát ảnh hưởng sampling. D sai: Hai đại lượng khác vai trò, không thay thế nhau.

## Đối chiếu Bedrock

Mẫu Converse đặt tham số ở `inferenceConfig.temperature`. Giá trị thấp có thể giảm độ biến đổi, không bảo đảm thông tin đúng hoặc kết quả giống hệt mọi lần. Khoảng giá trị và mặc định trong video cần kiểm tra trước khi dùng với mô hình khác. Dùng chung câu hỏi.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276720). Bản lưu: `sources/bedrock-lessons/276720.json`.

## Đối chiếu Vertex

Mẫu `messages.create` đặt `temperature` trực tiếp, khác `inferenceConfig` của Bedrock Converse. Chọn theo xác suất không có nghĩa mỗi lần nhất thiết ra kết quả khác. Giá trị thấp cũng không bảo đảm câu trả lời đúng hoặc luôn lặp lại hoàn toàn giống nhau.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289154). Bản lưu: `sources/vertex-lessons/289154.json`.
