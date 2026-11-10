# Chọn theo độ trễ được phép

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.5, trang PDF 18–19. Các con số là thông tin của bản đề cương này, cần xác minh khi triển khai dịch vụ. Câu hỏi tự biên soạn.

## Nội dung bài học


Message Batches xử lý một nhóm yêu cầu theo cách bất đồng bộ: gửi trước và nhận kết quả sau. Đề cương đang dùng nêu mức giảm chi phí 50% và thời gian xử lý có thể tới 24 giờ, không bảo đảm trả nhanh. Đây là dữ kiện của bản đề cương, không phải báo giá hoặc cam kết dịch vụ hiện hành đã được xác minh.

Hãy chọn theo hạn hoàn thành trước khi xét giảm giá. Báo cáo qua đêm hoặc kiểm toán tuần có thể chấp nhận chờ. Một bước kiểm tra bắt buộc trước khi hợp nhất mã, khi kỹ sư đang chờ, cần cách xử lý đáp ứng thời gian ngắn hơn.

Dùng `custom_id` để liên kết kết quả với yêu cầu ban đầu; không giả định thứ tự kết quả giống thứ tự gửi. Nếu 8 trong 500 tài liệu lỗi, tìm đúng 8 mục, sửa nguyên nhân rồi gửi lại phần lỗi thay vì chạy lại cả phần đã thành công. Tối ưu prompt trên mẫu trước khi chạy lô lớn cũng giúp giảm chi phí sửa lại.

Một yêu cầu trong batch không tự thực hiện toàn bộ vòng gọi công cụ bên ngoài. Nếu mô hình yêu cầu công cụ, ứng dụng phải chạy công cụ rồi gửi kết quả trở lại qua các bước điều phối phù hợp.

Khi tính hạn, cộng cả thời gian chờ gom lô và xử lý. Theo ví dụ lý thuyết, hạn 30 giờ với xử lý tối đa 24 giờ chỉ còn 6 giờ để chờ gom nếu bỏ qua chi phí khác; lịch gom 4 giờ có thêm khoảng đệm. Vận hành thực tế còn phải tính thử lại và thời gian phụ, không coi phép tính này là cam kết dịch vụ.

## Câu hỏi tình huống

**1. Chọn một.** Hai tác vụ: gate merge phải xong sớm, báo cáo nợ kỹ thuật đọc sáng mai. Cách chọn phù hợp?

A. Batch cho cả hai chỉ vì giảm giá.

B. Realtime cho gate; cân nhắc batch cho báo cáo chịu độ trễ.

C. Bỏ gate kiểm tra.

D. Chỉ dựa vào lần batch trước chạy nhanh.

**2. Chọn một.** 8 trong 500 tài liệu thất bại vì quá dài. Bước tiếp theo phù hợp?

A. Gửi lại toàn bộ 500 không thay đổi gì.

B. Bỏ qua lỗi và coi mọi tài liệu thành công.

C. Tìm 8 mục qua custom_id, điều chỉnh xử lý rồi gửi lại phần lỗi.

D. Ghép kết quả bằng vị trí bất kể ID.

**3. Chọn một.** Tác vụ cần gọi hệ thống xử lý phía máy chủ rồi đưa kết quả trở lại mô hình trong cùng một vòng tương tác. Có nên giả định một batch yêu cầu tự làm toàn bộ?

A. Không; cần thiết kế điều phối công cụ loop bên ngoài phù hợp.

B. Có, batch tự thực thi mọi công cụ do ứng dụng thực thi.

C. Có, chỉ cần đặt tên công cụ trong câu hỏi.

D. Có, thứ tự phản hồi tự thay thế vòng gọi.

## Đáp án

1. **B.** A và D bỏ ràng buộc độ trễ; C bỏ yêu cầu kiểm tra.
2. **C.** A lặp nguyên nhân và phí phần đã đúng; B che lỗi; D bỏ liên kết định danh.
3. **A.** B và C giả định thực thi tự động không có; D nhầm ghép kết quả với tương tác.
