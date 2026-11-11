# Hàm thực thi và lỗi hữu ích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287756), sources/api-lessons/287756.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Hàm thực thi công cụ là đoạn mã ứng dụng chạy khi nhận yêu cầu gọi công cụ. Trong bài, các hàm xử lý thời gian có tham số được đặt tên rõ, kiểm tra giá trị và trả lỗi có ý nghĩa khi đầu vào không hợp lệ.

Cần làm đủ ba việc: viết hàm thực hiện nhiệm vụ, mô tả công cụ và đầu vào bằng schema, rồi nối tên công cụ với hàm trong bộ điều phối của vòng hội thoại. Chỉ có hàm thì Claude chưa biết cách dùng; chỉ có schema thì thao tác chưa thể chạy.

Ví dụ: Một tham số bắt buộc bị rỗng. Thông báo rõ tham số nào thiếu và điều kiện cần đáp ứng sẽ giúp Claude sửa yêu cầu tốt hơn câu “Có lỗi”.

Không phải lỗi nào cũng xử lý bằng cách gọi lại. Thiếu quyền hoặc vi phạm quy tắc nghiệp vụ cần cách xử lý phù hợp với loại lỗi đó. Khi Claude sửa đầu vào sau khi đọc lỗi, nó đang sử dụng thông tin mới trong cuộc trò chuyện; điều đó không có nghĩa mô hình được huấn luyện lại sau mỗi lần gọi.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Schema công cụ hợp lệ, nhưng gọi tên calculate_time luôn thất bại vì dispatcher không có ánh xạ. Sửa nào đủ đúng tầng lỗi?

A. Đổi kiểu của tham số thành chuỗi để giảm lỗi parse.

B. Bổ sung dispatch từ tên tool sang hàm và kiểm tra kết quả.

C. Gửi kết quả dự đoán từ mô hình thay cho tool_result.

D. Thêm ví dụ tính thời gian vào mô tả công cụ.

**Câu 2 — Chọn một.** Đối số start_time rỗng. Bộ thực thi trả “Operation failed” và mô hình lặp lại cùng đầu vào. Thay đổi nào có ích nhất?

A. Trả lỗi chỉ rõ start_time bắt buộc và dạng giá trị hợp lệ.

B. Tăng số lần retry để mô hình tự tìm giá trị phù hợp.

C. Đổi thông báo thành “hãy suy nghĩ kỹ hơn rồi thử lại”.

D. Cho phép start_time rỗng và dùng giờ máy chủ trong mọi trường hợp.

**Câu 3 — Chọn hai.** Hai lời gọi thất bại: một thiếu tham số, một bị từ chối quyền ghi. Hai phản ứng nào phù hợp?

A. Đổi mô tả công cụ để mô hình gọi lại quyền ghi nhiều lần.

B. Sửa tham số theo lỗi validation khi có thông tin cần thiết.

C. Dùng luồng được phép hoặc chuyển xử lý khi thiếu quyền.

D. Coi mọi lỗi là tạm thời và dùng cùng chính sách retry.

**Câu 4 — Chọn một.** Sau một tool_result báo định dạng sai, mô hình sửa đối số thành công. Kết luận nào được bằng chứng này hỗ trợ?

A. Hàm công cụ đã huấn luyện lại mô hình sau lần lỗi.

B. Phản hồi lỗi trong context giúp sửa lời gọi hiện tại.

C. Mô hình sẽ nhớ quy tắc đó trong mọi phiên mới.

D. Schema đã tự động cập nhật theo lỗi của backend.

**Câu 5 — Chọn hai.** Nhóm viết hàm cộng ngày rồi muốn cung cấp cho Claude. Hai điều kiện tích hợp nào còn cần bên cạnh mã hàm?

A. Bộ điều phối chạy hàm, kiểm tra đầu vào và trả kết quả/lỗi đúng vòng gọi.

B. Mô tả công cụ và schema đối số đủ rõ cho mô hình tạo yêu cầu.

C. Đưa toàn bộ mã hàm vào câu trả lời người dùng.

D. Đổi tên hàm thành một động từ dễ hiểu là đủ để API tự tìm hàm.

## Đáp án và giải thích

1. **B.** A sai: Lỗi nằm ở định tuyến, không phải kiểu tham số. B đúng: Schema mô tả giao diện; dispatcher mới nối vào mã. C sai: Thay tính toán thật bằng suy đoán không sửa tích hợp. D sai: Không tạo ánh xạ thực thi đang thiếu.

2. **A.** A đúng: Phản hồi có thể hành động giúp sửa đúng đầu vào. B sai: Không có thông tin mới nên dễ lặp lỗi hoặc bịa mốc. C sai: Không bổ sung điều kiện thất bại cụ thể. D sai: Âm thầm đổi nghĩa thay vì giải quyết thiếu dữ liệu.

3. **B, C.** A sai: Mô tả không thay kiểm soát quyền thực tế. B đúng: Lỗi đầu vào có thể phục hồi bằng yêu cầu đúng. C đúng: Retry cùng quyền không giải quyết sự từ chối. D sai: Các loại lỗi có điều kiện phục hồi khác nhau.

4. **B.** A sai: Một phản hồi hội thoại không chứng minh huấn luyện. B đúng: Không cần giả định thay đổi trọng số. C sai: Không có bằng chứng trạng thái được lưu xuyên phiên. D sai: Sửa lời gọi không chứng minh sửa khai báo giao diện.

5. **A, B.** A đúng: Cần đường thực thi và phản hồi thực tế. B đúng: Mô hình cần biết giao diện được cung cấp. C sai: Hiển thị mã không đăng ký công cụ. D sai: Tên không tự tạo kết nối vào tiến trình ứng dụng.

## Đối chiếu Bedrock: Công cụ functions

Bài Bedrock dùng cùng ví dụ công cụ thời gian và nhắc việc với quy định đầu vào rõ. Việc mô hình có thể thử lại không có nghĩa mọi lỗi đều cần hoặc được phép thử lại. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276757). Bản lưu: `sources/bedrock-lessons/276757.json`.

## Đối chiếu Vertex

Đặt tên và tham số rõ, kiểm tra đầu vào, trả lỗi giúp người gọi sửa được. `datetime.now()` trong mẫu dùng giờ của môi trường và chưa gắn múi giờ. Ứng dụng chịu trách nhiệm thực thi, không phải mô hình tự chạy hàm. Không trả nguyên thông tin lỗi chứa dữ liệu nhạy cảm hoặc khóa bí mật. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tool functions](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289176). Bản lưu: `sources/vertex-lessons/289176.json`.
