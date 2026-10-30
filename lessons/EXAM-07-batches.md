# Batch processing — Chọn theo độ trễ được phép

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.5, trang PDF 18–19. Các con số là thông tin của bản đề cương này, cần xác minh khi triển khai dịch vụ. Câu hỏi tự biên soạn.

## Tóm tắt

Đề cương mô tả Message Batches có ưu đãi chi phí nhưng thời gian xử lý có thể tới 24 giờ và không có bảo đảm độ trễ ngắn. Phù hợp báo cáo qua đêm hoặc kiểm toán tuần, không phù hợp gate chặn merge mà kỹ sư đang chờ.

Con số ưu đãi trong Exam Guide là50%; đây là dữ kiện của bản đề cương, không phải báo giá hiện hành đã xác minh. Khi giải tình huống thi, ưu tiên ràng buộc latency và khả năng tương tác trước lợi ích giảm giá.

Dùng `custom_id` để ghép request và response; không giả định thứ tự đầu ra khớp thứ tự gửi. Khi một số tài liệu thất bại, sửa nguyên nhân rồi gửi lại phần lỗi, không chạy lại toàn bộ tập đã thành công. Tối ưu prompt trên mẫu trước đợt lớn giảm chi phí lặp.

Batch không tự chạy một vòng tương tác nhiều lượt gọi công cụ trong cùng request: nếu phải nhận tool request, thực thi bên ngoài rồi gửi kết quả, cần điều phối các bước riêng.

Khi tính hạn hoàn tất, tính cả thời gian chờ gom batch và thời gian xử lý. Theo ví dụ biên trong đề cương, giới hạn 30 giờ với xử lý tối đa 24 giờ còn tối đa 6 giờ cho chờ gom nếu không xét chi phí khác; lịch 4 giờ có thêm khoảng đệm. Production cần tính cả retry và overhead, không coi con số lý thuyết là SLA được dịch vụ cam kết.

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

**3. Chọn một.** Tác vụ cần gọi backend rồi đưa kết quả trở lại mô hình trong cùng một vòng tương tác. Có nên giả định một batch request tự làm toàn bộ?

A. Không; cần thiết kế điều phối tool loop bên ngoài phù hợp.

B. Có, batch tự thực thi mọi client tool.

C. Có, chỉ cần đặt tên tool trong câu hỏi.

D. Có, thứ tự response tự thay thế vòng gọi.

## Đáp án

1. **B.** A và D bỏ ràng buộc độ trễ; C bỏ yêu cầu kiểm tra.
2. **C.** A lặp nguyên nhân và phí phần đã đúng; B che lỗi; D bỏ liên kết định danh.
3. **A.** B và C giả định thực thi tự động không có; D nhầm ghép kết quả với tương tác.
