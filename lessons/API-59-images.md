# Image support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287778), sources/api-lessons/287778.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Có thể đưa ảnh vào tin nhắn cùng hướng dẫn bằng văn bản để yêu cầu AI mô tả, so sánh hoặc phân tích. Câu hỏi nên nêu rõ cần xem phần nào và đánh giá theo tiêu chí gì.

Ví dụ: Với một ảnh phức tạp, yêu cầu “phân tích ảnh này” có thể quá rộng. Hãy chỉ rõ đối tượng cần quan sát, thông tin cần lấy và định dạng kết quả. Có thể thêm ví dụ hoặc chia nhiệm vụ thành các bước nếu cần.

AI vẫn có thể đếm sai vật thể hoặc đọc nhầm chi tiết. Việc nó tự kiểm tra bằng hai cách rồi ra cùng đáp án chưa tạo ra hai bằng chứng độc lập: cả hai cách có thể mắc cùng lỗi. Tác vụ quan trọng cần cách kiểm chứng phù hợp.

Các giới hạn về số ảnh, kích thước và token trong video phụ thuộc phiên bản. Khả năng thị giác (vision) là phần bổ trợ, nằm ngoài phạm vi đề cương Architect đã lưu; một ảnh cũng không đủ để thay mọi đánh giá chuyên môn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A vague dashboard-image request produces a long description but omits the required error rate. What most directly helps?

A. Require JSON without naming the field.

B. Double the description length.

C. Assign a more senior expert role.

D. Specify the region, metric, unit, and comparison criteria.

**Question 2 — Choose two.** Two model counting methods both report 48 components, affecting inventory shipment. Which TWO actions are appropriate?

A. Do not treat agreement between self-checks as independent evidence.

B. Use 48 as ground truth for evaluating those methods.

C. Accept because two methods cannot make the same error.

D. Compare with verified counts or suitable inventory evidence.

**Question 3 — Choose one.** A blurry chart is read as 8.1 instead of 3.1, and exact values are required. What should happen?

A. Obtain a clearer image or source, or disclose insufficient evidence and seek verification.

B. Repeat reasoning and use the majority value.

C. Select a value matching historical trends.

D. Accept any correctly formatted number.

**Question 4 — Choose two.** Which TWO task details make before-and-after UI image comparisons useful and verifiable?

A. Specify target regions and meaningful difference criteria.

B. Link observations to locations and distinguish unreadable details.

C. Infer all backend behavior from visible buttons.

D. Use comment count as the main quality criterion.

**Question 5 — Choose one.** Old image and token limits are copied to a different production model. What should happen before finalizing the architecture?

A. Verify target support and limits, then test representative data.

B. Assume one provider's models share all limits.

C. Use HTTP success as the only compatibility check.

D. Crop oversized images without tracking lost content.

## Đáp án và giải thích

1. **D.** A sai: định dạng không xác định nội dung quan trọng phải quan sát. B sai: tăng độ dài không định hướng vào mục tiêu bị bỏ sót. C sai: vai trò không cung cấp vị trí và tiêu chí còn thiếu. D đúng: phạm vi cụ thể biến nhiệm vụ rộng thành thông tin có thể kiểm chứng.

2. **A, D.** A đúng: cả hai có thể chia sẻ cùng lỗi quan sát hoặc bỏ sót. B sai: dùng dự đoán làm chuẩn tạo vòng xác nhận, không kiểm chứng sự thật. C sai: không có cơ sở độc lập để suy luận xác suất đó. D đúng: quyết định cần bằng chứng đủ tin cậy ngoài tự khẳng định của mô hình.

3. **A.** A đúng: cần cải thiện dữ liệu quan sát hoặc giữ trạng thái chưa biết thay vì đoán. B sai: có thể lặp cùng lỗi quan sát do chất lượng nguồn. C sai: xu hướng không chứng minh ký tự thật trong ảnh. D sai: validator định dạng không bảo vệ yêu cầu chính xác đã đặt ra.

4. **A, B.** A đúng: giúp tránh mô tả các thay đổi không liên quan tới mục đích. B đúng: giữ khả năng đối chiếu và giới hạn của bằng chứng ảnh. C sai: ảnh giao diện không chứng minh logic thực thi hoặc trạng thái hệ thống phía sau. D sai: nhiều nhận xét có thể là suy diễn hoặc thay đổi vụn không liên quan.

5. **A.** A đúng: thông số gắn phiên bản không được mặc định áp dụng sang môi trường khác. B sai: cùng nhà cung cấp không chứng minh cùng hợp đồng hoặc năng lực. C sai: thành công giao thức không chứng minh nội dung ảnh còn đủ cho nhiệm vụ. D sai: cắt có thể loại chi tiết cần thiết và gây kết luận sai không được phát hiện.

## Đối chiếu tính năng trên Bedrock

Mẫu Bedrock dùng `image.format` và `source.bytes`, khác khối ảnh base64 của Messages API. Các giới hạn ảnh trong hai khóa khác nhau và phụ thuộc nhà cung cấp, mô hình, phiên bản; không lấy làm thông số hiện hành mặc định. Dùng chung câu hỏi.

Nguồn đối chiếu: [Image support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276789). Bản lưu: `sources/bedrock-lessons/276789.json`.

## Đối chiếu Vertex

Mẫu Messages dùng base64, `media_type` và `data` cho ảnh. Ví dụ đếm viên bi và chấm ảnh vệ tinh minh họa ích lợi của yêu cầu cụ thể. Số ảnh, dung lượng, kích thước và công thức tính token trong video không là giới hạn chung hiện hành. Mô tả nguy cơ cháy không thay đánh giá chuyên môn; tách điều quan sát được khỏi suy đoán và kiểm tra trường hợp khó, chưa chắc chắn. Dùng chung câu hỏi.

Nguồn đối chiếu: [Image support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289203). Bản lưu: `sources/vertex-lessons/289203.json`.
