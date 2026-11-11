# Chọn theo độ trễ được phép

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.5, trang PDF 18–19. Các con số là thông tin của bản đề cương này, cần xác minh khi triển khai dịch vụ. Câu hỏi tự biên soạn.

## Nội dung bài học


Message Batches xử lý một nhóm yêu cầu theo cách bất đồng bộ: gửi trước và nhận kết quả sau. Đề cương đang dùng nêu mức giảm chi phí 50% và thời gian xử lý có thể tới 24 giờ, không bảo đảm trả nhanh. Đây là dữ kiện của bản đề cương, không phải báo giá hoặc cam kết dịch vụ hiện hành đã được xác minh.

Hãy chọn theo hạn hoàn thành trước khi xét giảm giá. Báo cáo qua đêm hoặc kiểm toán tuần có thể chấp nhận chờ. Một bước kiểm tra bắt buộc trước khi hợp nhất mã, khi kỹ sư đang chờ, cần cách xử lý đáp ứng thời gian ngắn hơn.

Dùng `custom_id` để liên kết kết quả với yêu cầu ban đầu; không giả định thứ tự kết quả giống thứ tự gửi. Nếu 8 trong 500 tài liệu lỗi, tìm đúng 8 mục, sửa nguyên nhân rồi gửi lại phần lỗi thay vì chạy lại cả phần đã thành công. Tối ưu prompt trên mẫu trước khi chạy lô lớn cũng giúp giảm chi phí sửa lại.

Một yêu cầu trong batch không tự thực hiện toàn bộ vòng gọi công cụ bên ngoài. Nếu mô hình yêu cầu công cụ, ứng dụng phải chạy công cụ rồi gửi kết quả trở lại qua các bước điều phối phù hợp.

Khi tính hạn, cộng cả thời gian chờ gom lô và xử lý. Theo ví dụ lý thuyết, hạn 30 giờ với xử lý tối đa 24 giờ chỉ còn 6 giờ để chờ gom nếu bỏ qua chi phí khác; lịch gom 4 giờ có thêm khoảng đệm. Vận hành thực tế còn phải tính thử lại và thời gian phụ, không coi phép tính này là cam kết dịch vụ.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Gate kiểm tra PR cần phản hồi trong vài phút; báo cáo nợ kỹ thuật được đọc sáng mai. Nhóm muốn giảm chi phí nhưng không đổi SLA. Thiết kế nào phù hợp?

A. Đưa cả hai vào batch để đồng nhất cách điều phối.

B. Realtime cho gate; batch cho báo cáo nếu đáp ứng deadline.

C. Dùng batch cho gate nhưng tăng tần suất polling để đáp ứng SLA.

D. Dùng realtime cho cả hai vì cùng phân tích mã nguồn.

**Câu 2 — Chọn một.** Batch 500 tài liệu có 492 thành công và 8 lỗi vượt giới hạn đầu vào. Cách phục hồi nào tránh lặp công việc và nhắm đúng nguyên nhân?

A. Gửi lại 500 tài liệu với ID mới để có bộ kết quả thống nhất.

B. Gửi lại nguyên 8 tài liệu vì lỗi batch thường là tạm thời.

C. Ánh xạ 8 lỗi bằng custom_id, điều chỉnh đầu vào rồi retry riêng các mục đó.

D. Đánh dấu 8 mục là thành công với kết quả rỗng để đủ số lượng.

**Câu 3 — Chọn hai.** Một job nộp 200 yêu cầu, kết quả được nhận không theo thứ tự đầu vào. Hai thiết kế nào giúp ghi đúng kết quả và retry an toàn?

A. Dùng custom_id ổn định để nối từng kết quả với bản ghi nguồn.

B. Ghép theo vị trí dòng vì số lượng đầu vào và đầu ra bằng nhau.

C. Lưu trạng thái từng mục và chống ghi trùng khi nhận lại kết quả.

D. Tạo ID mới sau mỗi lần polling để phân biệt các lần tải.

**Câu 4 — Chọn một.** Trong giới hạn giả định của bài toán, batch có thể xử lý 24 giờ, deadline từ lúc tài liệu đến là 30 giờ, cần dự phòng 4 giờ cho khâu khác. Chu kỳ gom tối đa nào đáp ứng worst case?

A. 6 giờ vì 6 + 24 bằng deadline.

B. 4 giờ vì còn 2 giờ sau khi batch xử lý.

C. 3 giờ vì thời gian chờ trung bình chỉ 1,5 giờ.

D. 2 giờ vì 2 + 24 + 4 bằng 30 giờ.

**Câu 5 — Chọn hai.** Một yêu cầu batch trả tool_use cho công cụ nội bộ; cần kết quả công cụ để mô hình trả lời cuối. Hai trách nhiệm nào vẫn thuộc hệ điều phối?

A. Xác thực/thực thi công cụ rồi nối kết quả với yêu cầu tương ứng.

B. Xem tool_use là bằng chứng công cụ đã được provider thực thi.

C. Tạo lượt tiếp theo với kết quả công cụ theo giao thức cần dùng.

D. Đổi trạng thái job thành lỗi vĩnh viễn vì batch không thể trả tool_use.

## Đáp án và giải thích

1. **B.** B chọn theo yêu cầu thời gian từng tác vụ. A có thể vi phạm gate. C quan sát thường xuyên không làm batch hoàn tất sớm hơn. D có thể chạy được nhưng bỏ qua cơ hội tiết kiệm ở tác vụ chấp nhận chờ.

2. **C.** C giữ phần thành công và sửa lỗi cấu trúc đầu vào. A lặp công việc không cần; B giữ nguyên nguyên nhân; D che mất thất bại khiến downstream tưởng dữ liệu đầy đủ.

3. **A, C.** A không phụ thuộc thứ tự. C giúp xử lý lại mà không tạo tác động trùng. B sai khi đầu ra đổi thứ tự hoặc thiếu mục. D làm mất định danh nghiệp vụ xuyên các lần đọc cùng job.

4. **D.** D tính thời gian chờ tối đa cùng xử lý và dự phòng. A bỏ 4 giờ phụ; B chỉ còn 2 giờ phụ; C dùng trung bình thay cho cam kết worst case và tổng tối đa vẫn 31 giờ.

5. **A, C.** A và C xây vòng tương tác bên ngoài cho client tool. B nhầm đề nghị với thực thi. D coi một trạng thái cần xử lý tiếp là lỗi không phục hồi, trong khi vấn đề là điều phối workflow.
