# Temperature — Độ biến thiên đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287728), sources/api-lessons/287728.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Tóm tắt

Bài giới thiệu quá trình chọn token từ phân phối xác suất và temperature điều chỉnh mức tập trung của lựa chọn. Mức thấp thiên về đầu ra ít biến thiên hơn; mức cao mở rộng độ đa dạng, hữu ích khi tìm nhiều ý tưởng.

Đây không phải thước đo độ đúng. Hạ temperature không sửa dữ liệu thiếu hoặc bảo đảm factual accuracy, và không nên coi temperature 0 là cam kết đầu ra y hệt ở mọi lần chạy. Ví dụ minh họa trong khóa đơn giản hóa quá trình sampling.

Khả năng hỗ trợ tham số, phạm vi giá trị và phối hợp với thinking phụ thuộc model/API. Bản ôn này không xác nhận cú pháp hiện hành cho mọi model. Khi triển khai, đối chiếu tài liệu phiên bản rồi đánh giá trên dữ liệu tác vụ.

## Câu hỏi

**1. Chọn một.** Hạ temperature có tự giải quyết thiếu nguồn dữ liệu hiện tại không?

A. Có, mọi kiến thức sẽ cập nhật.

B. Có, không cần tools.

C. Có, nếu output ngắn.

D. Không; vẫn cần dữ liệu nguồn phù hợp và kiểm chứng.

**2. Chọn một.** Nhóm muốn đo độ đa dạng khi brainstorm. Hướng thử nào phù hợp khái niệm bài?

A. So các cấu hình sampling được model hỗ trợ trên cùng tiêu chí tác vụ.

B. Chỉ tăng quyền hệ thống.

C. Bỏ mọi ràng buộc bắt buộc.

D. Coi một lần thử là bảo đảm.

**3. Chọn một.** Có thể hứa temperature 0 cho kết quả bất biến ở mọi hệ thống không?

A. Có, đó là ý nghĩa của accuracy.

B. Không; không suy từ mức ít biến thiên thành bảo đảm tuyệt đối.

C. Có, không cần xét model.

D. Có, bất kể dữ liệu đầu vào thay đổi.

## Đáp án

1. **D.** D giữ đúng nguồn bằng chứng; A, B nhầm sampling với truy xuất, C không thêm dữ liệu.

2. **A.** A đo tác động thực; B không điều chỉnh sampling, C có thể sai mục tiêu, D suy rộng mẫu đơn.

3. **B.** B tránh bảo đảm quá mức; A nhầm khái niệm, C và D bỏ khác biệt hệ thống/đầu vào.

## Đối chiếu Bedrock

Đã đọc [Temperature](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276720), sources/bedrock-lessons/276720.json. Ví dụ Converse đặt inferenceConfig.temperature. Temperature thấp có thể giảm độ biến thiên, không bảo đảm kết quả đúng hoặc lặp lại tuyệt đối; các khoảng và default trong video không được dùng như cấu hình hiện hành cho mọi model. Dùng chung câu hỏi khái niệm, không đếm trùng.

## Đối chiếu Vertex

Nguồn [Temperature](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289154), sources/vertex-lessons/289154.json. Mẫu messages.create đặt temperature trực tiếp, khác inferenceConfig của Bedrock Converse. Bài cũng nhắc xác suất không bảo đảm đầu ra khác nhau; không suy nhiệt độ thấp đồng nghĩa factual correctness hay lặp tuyệt đối.
