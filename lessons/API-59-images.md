# Image support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287778), sources/api-lessons/287778.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Có thể đưa ảnh vào tin nhắn cùng hướng dẫn bằng văn bản để yêu cầu AI mô tả, so sánh hoặc phân tích. Câu hỏi nên nêu rõ cần xem phần nào và đánh giá theo tiêu chí gì.

Ví dụ: Với một ảnh phức tạp, yêu cầu “phân tích ảnh này” có thể quá rộng. Hãy chỉ rõ đối tượng cần quan sát, thông tin cần lấy và định dạng kết quả. Có thể thêm ví dụ hoặc chia nhiệm vụ thành các bước nếu cần.

AI vẫn có thể đếm sai vật thể hoặc đọc nhầm chi tiết. Việc nó tự kiểm tra bằng hai cách rồi ra cùng đáp án chưa tạo ra hai bằng chứng độc lập: cả hai cách có thể mắc cùng lỗi. Tác vụ quan trọng cần cách kiểm chứng phù hợp.

Các giới hạn về số ảnh, kích thước và token trong video phụ thuộc phiên bản. Khả năng thị giác (vision) là phần bổ trợ, nằm ngoài phạm vi đề cương Architect đã lưu; một ảnh cũng không đủ để thay mọi đánh giá chuyên môn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một ảnh dashboard chứa nhiều biểu đồ; yêu cầu “phân tích ảnh” tạo mô tả dài nhưng bỏ tỷ lệ lỗi cần kiểm tra. Thay đổi nào nhắm thiếu sót rõ nhất?

A. Yêu cầu chỉ trả JSON mà không bổ sung trường cần lấy.

B. Yêu cầu mô tả ảnh dài gấp đôi để tăng cơ hội nhắc đến tỷ lệ lỗi.

C. Đổi vai trò thành chuyên gia cao cấp nhưng giữ nguyên câu hỏi.

D. Chỉ rõ vùng, đại lượng, đơn vị và tiêu chí so sánh.

**Câu 2 — Chọn hai.** Mô hình đếm linh kiện bằng hai cách và cùng báo 48. Số lượng ảnh hưởng việc xuất kho. Hai hành động nào phù hợp trước khi chấp nhận?

A. Không coi đồng thuận của hai lần tự kiểm tra là hai bằng chứng độc lập.

B. Lấy 48 làm nhãn chuẩn để đánh giá lại chính hai cách đếm.

C. Chấp nhận ngay vì xác suất hai cách sai cùng số bằng không.

D. Đối chiếu bằng nguồn/kiểm tra phù hợp như dữ liệu kiểm kê hoặc kiểm đếm đã xác minh.

**Câu 3 — Chọn một.** Ảnh chụp biểu đồ mờ khiến mô hình đọc “8,1” thay vì “3,1”. Hệ thống yêu cầu số chính xác, không chấp nhận ước lượng. Hướng xử lý nào phù hợp?

A. Lấy ảnh/nguồn rõ hơn hoặc báo chưa đủ bằng chứng và chuyển xác minh.

B. Tăng số lần suy luận trên cùng ảnh rồi chọn giá trị xuất hiện nhiều nhất.

C. Chọn giá trị phù hợp xu hướng lịch sử để làm kết quả hiện tại.

D. Chấp nhận số có định dạng hợp lệ và để người dùng tự phát hiện sai.

**Câu 4 — Chọn hai.** Ứng dụng so sánh ảnh trước và sau một thay đổi giao diện. Hai chi tiết nào nên có trong nhiệm vụ để kết quả hữu ích và có thể kiểm tra?

A. Chỉ rõ đối tượng/vùng cần so sánh và tiêu chí khác biệt quan trọng.

B. Yêu cầu gắn mỗi nhận xét với vị trí quan sát và phân biệt chi tiết không đọc rõ.

C. Yêu cầu suy ra mọi hành vi backend từ các nút nhìn thấy.

D. Dùng số lượng nhận xét làm tiêu chí chính để chọn kết quả tốt hơn.

**Câu 5 — Chọn một.** Nhóm sao chép giới hạn ảnh/token từ video cũ vào cấu hình production của mô hình khác. Lựa chọn nào đúng trước khi chốt kiến trúc?

A. Kiểm tra hỗ trợ/giới hạn đích rồi thử dữ liệu đại diện.

B. Giữ thông số vì các mô hình cùng nhà cung cấp luôn có giới hạn giống nhau.

C. Chỉ đo xem request có HTTP thành công để kết luận cấu hình phù hợp.

D. Tự động cắt ảnh vượt giới hạn mà không theo dõi nội dung bị mất.

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
