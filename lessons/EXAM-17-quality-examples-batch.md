# Tình huống few-shot, false positives và độ trễ batch

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục4.1–4.6, trang PDF16–19. Câu hỏi tự biên soạn.

## Nội dung bài học


Một vài ví dụ có chủ đích (few-shot) giúp làm rõ những trường hợp mà hướng dẫn bằng lời vẫn dễ bị hiểu khác nhau. Chọn cả trường hợp hợp lệ dễ bị cảnh báo sai và trường hợp thực sự cần báo, kèm lý do cùng định dạng kết quả.

Với trích xuất tài liệu, ví dụ nên cho thấy cùng thông tin có thể nằm ở các vị trí khác nhau. Chẳng hạn, tài liệu không có mục “Methodology” nhưng phương pháp nghiên cứu nằm trong phần mở đầu. Có thể minh họa cách tìm và đánh giá lại trên tài liệu mới. Không dùng ví dụ để dạy tự điền khi nguồn thật sự không có thông tin.

Theo dõi cảnh báo sai (false positives) theo nhóm hoặc kiểu lỗi, không chỉ xem điểm trung bình. Nếu nhóm góp ý phong cách quá nhiễu làm kỹ sư bỏ qua cả lỗi bảo mật, có thể tạm tắt nhóm đó, làm rõ tiêu chí báo hoặc bỏ qua rồi kiểm tra trước khi bật lại.

Khi chọn xử lý theo lô (batch), phải xét tổng thời gian chờ gom và thời gian xử lý. Theo tình huống trong đề cương, hạn 30 giờ với xử lý tối đa 24 giờ và chu kỳ gom 4 giờ tạo thời gian tối đa lý thuyết là 28 giờ, còn 2 giờ đệm.

Đây là phép tính chưa gồm thử lại và thời gian phụ. Nó không phải bảo đảm cho hệ thống vận hành thực tế. Batch phù hợp với công việc chấp nhận chờ, không chỉ vì có lợi về chi phí.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Trường phương pháp nghiên cứu hay null khi thông tin nằm trong đoạn mở đầu, dù đúng khi có heading Methodology. Cải thiện nào nhắm nguyên nhân?

A. Tăng giới hạn token đầu ra để mô hình viết chi tiết hơn.

B. Few-shot cho bố cục bị bỏ sót; đánh giá trên tài liệu mới.

C. Bắt schema cấm null để buộc điền phương pháp.

D. Chỉ huấn luyện evaluator chấp nhận null thường xuyên hơn.

**Câu 2 — Chọn một.** Category comment-style gây phần lớn cảnh báo sai; category bảo mật vẫn có giá trị. Cách cải thiện trước mắt tốt nhất?

A. Tắt tất cả review để người dùng lấy lại niềm tin.

B. Đổi mọi cảnh báo style thành severity cao để người dùng chú ý.

C. Tắt riêng nhóm nhiễu; sửa tiêu chí/ví dụ và đo trước khi bật.

D. Giữ nguyên gate nhưng chuyển cảnh báo style xuống cuối.

**Câu 3 — Chọn hai.** Giả sử xử lý batch tối đa 24 giờ và deadline từ lúc tài liệu đến là 30 giờ. Chu kỳ gom 4 giờ được đề xuất. Hai kết luận nào đúng?

A. Worst case chờ và xử lý là 28 giờ trước các khâu phụ.

B. Mọi tài liệu còn ít nhất 6 giờ để retry.

C. Có tối đa 2 giờ đệm trong worst case; phải tính thêm retry và thời gian phụ.

D. Polling thường xuyên sẽ tăng khoảng đệm đảm bảo lên 6 giờ.

**Câu 4 — Chọn một.** Few-shot sửa tốt 20 tài liệu được dùng để thiết kế prompt; nhóm muốn coi đó là mức tăng chất lượng production. Bước nào còn thiếu?

A. Chạy lại cùng 20 tài liệu với thứ tự khác.

B. Đánh giá trên tập giữ riêng, có bố cục hiếm và tiêu chí chấm cố định.

C. Tính tỷ lệ JSON parse được trên 20 tài liệu.

D. Lấy confidence trung bình của mô hình làm độ chính xác.

**Câu 5 — Chọn hai.** Batch 500 tài liệu có 8 lỗi do dài vượt giới hạn và nhiều kết quả thành công. Hai lựa chọn nào giảm chi phí retry và giữ truy nguyên?

A. Gửi lại toàn bộ batch dưới ID mới cho dễ quản lý.

B. Retry nguyên 8 tài liệu mà không đổi chiến lược xử lý.

C. Lưu ánh xạ custom_id và trạng thái từng mục để chọn đúng phần lỗi.

D. Điều chỉnh xử lý đầu vào quá dài, rồi gửi lại riêng các mục cần phục hồi.

## Đáp án và giải thích

1. **B.** B bổ sung dạng bố cục bị thiếu và kiểm tra khả năng tổng quát. A không tạo tín hiệu trích xuất; C khuyến khích điền thiếu căn cứ; D thay thước đo để che lỗi.

2. **C.** C giảm hại có chọn lọc và đặt đường phục hồi có kiểm chứng. A bỏ chức năng hữu ích; B làm nhiễu nghiêm trọng hơn; D chỉ thay hiển thị, không sửa quyết định sai.

3. **A, C.** A tính 4 + 24, C nêu phần ngân sách còn lại. B bỏ thời gian chờ gom. D tần suất quan sát không rút ngắn thời gian xử lý được cam kết.

4. **B.** B kiểm tra tổng quát hóa và tránh đo trên dữ liệu đã tối ưu. A vẫn dùng dữ liệu cũ; C chỉ kiểm tra cấu trúc; D thay nhãn thực bằng tự đánh giá chưa hiệu chỉnh.

5. **C, D.** C xác định phần lỗi và nối lại kết quả, D giải quyết nguyên nhân. A lặp phần đã xong; B giữ nguyên điều kiện thất bại. Retry không thay thế bước chẩn đoán.
