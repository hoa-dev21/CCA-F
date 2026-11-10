# Độ biến thiên đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287728), sources/api-lessons/287728.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Khi tạo câu trả lời, mô hình chọn các token tiếp theo dựa trên phân bố xác suất. Tham số `temperature` điều chỉnh mức độ tập trung của lựa chọn này. Trong cách giải thích đơn giản của bài, giá trị thấp thường làm đầu ra ít biến đổi hơn; giá trị cao có thể tạo nhiều cách diễn đạt hoặc ý tưởng đa dạng hơn.

`temperature` không phải thước đo độ đúng. Hạ giá trị này không bổ sung dữ liệu còn thiếu và không sửa được một nguồn thông tin sai. Cũng không nên hứa rằng đặt bằng 0 sẽ luôn cho kết quả giống hệt ở mọi hệ thống và mọi lần chạy.

Ví dụ: Nếu muốn tìm nhiều ý tưởng, bạn có thể so sánh những cấu hình được mô hình hỗ trợ trên cùng yêu cầu. Nếu cần trạng thái đơn hàng mới nhất, điều cần bổ sung là dữ liệu từ hệ thống đơn hàng, không phải chỉ thay `temperature`.

Mô hình và API có thể khác nhau về việc hỗ trợ tham số, khoảng giá trị và cách dùng cùng chế độ suy luận (thinking). Khi triển khai, hãy đối chiếu phiên bản và đánh giá trên công việc thực tế.

## Câu hỏi

**1. Chọn một.** Hạ temperature có tự giải quyết thiếu nguồn dữ liệu hiện tại không?

A. Có, mọi kiến thức sẽ cập nhật.

B. Có, không cần các công cụ.

C. Có, nếu output ngắn.

D. Không; vẫn cần dữ liệu nguồn phù hợp và kiểm chứng.

**2. Chọn một.** Nhóm muốn đo độ đa dạng khi brainstorm. Hướng thử nào phù hợp khái niệm bài?

A. So các cấu hình sampling được mô hình hỗ trợ trên cùng tiêu chí tác vụ.

B. Chỉ tăng quyền hệ thống.

C. Bỏ mọi ràng buộc bắt buộc.

D. Coi một lần thử là bảo đảm.

**3. Chọn một.** Có thể hứa temperature 0 cho kết quả bất biến ở mọi hệ thống không?

A. Có, đó là ý nghĩa của độ chính xác.

B. Không; không suy từ mức ít biến thiên thành bảo đảm tuyệt đối.

C. Có, không cần xét mô hình.

D. Có, bất kể dữ liệu đầu vào thay đổi.

## Đáp án

1. **D.** D giữ đúng nguồn bằng chứng; A, B nhầm sampling với truy xuất, C không thêm dữ liệu.

2. **A.** A đo tác động thực; B không điều chỉnh sampling, C có thể sai mục tiêu, D suy rộng mẫu đơn.

3. **B.** B tránh bảo đảm quá mức; A nhầm khái niệm, C và D bỏ khác biệt hệ thống/đầu vào.

## Đối chiếu Bedrock

Mẫu Converse đặt tham số ở `inferenceConfig.temperature`. Giá trị thấp có thể giảm độ biến đổi, không bảo đảm thông tin đúng hoặc kết quả giống hệt mọi lần. Khoảng giá trị và mặc định trong video cần kiểm tra trước khi dùng với mô hình khác. Dùng chung câu hỏi.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276720). Bản lưu: `sources/bedrock-lessons/276720.json`.

## Đối chiếu Vertex

Mẫu `messages.create` đặt `temperature` trực tiếp, khác `inferenceConfig` của Bedrock Converse. Chọn theo xác suất không có nghĩa mỗi lần nhất thiết ra kết quả khác. Giá trị thấp cũng không bảo đảm câu trả lời đúng hoặc luôn lặp lại hoàn toàn giống nhau.

Nguồn đối chiếu: [Temperature](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289154). Bản lưu: `sources/vertex-lessons/289154.json`.
