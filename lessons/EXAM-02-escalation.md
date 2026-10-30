# Gate nghiệp vụ và bàn giao cho con người

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 1.4–1.5 và 5.2, trang PDF 7, 20–21. Câu hỏi tự biên soạn theo mục tiêu thi; không phải bản tóm tắt một video.

## Tóm tắt

Nếu một thao tác tài chính yêu cầu xác minh trước, mã phải chặn thao tác khi tiền điều kiện chưa đạt. Prompt “luôn xác minh trước” không tạo bảo đảm cưỡng chế. Hook trước thao tác có thể áp chính sách như giới hạn hoàn tiền; hook sau kết quả có thể chuẩn hóa timestamps và trạng thái trước khi mô hình dùng.

Theo ví dụ mục1.5, PostToolUse chuẩn hóa Unix timestamps và ISO8601 về biểu diễn thời gian thống nhất có timezone; numeric status codes được ánh xạ về trạng thái có nghĩa theo hợp đồng từng tool. Giữ giá trị gốc và nguồn để truy vết, không đoán khi đơn vị hoặc ý nghĩa mã chưa rõ. Hook trước thực thi chặn khoản hoàn vượt ngưỡng chính sách và chuyển sang người có thẩm quyền; hook sau kết quả không thể ngăn một khoản tiền đã được gửi.

Escalation có tiêu chí rõ: người dùng yêu cầu con người, chính sách thiếu hoặc mơ hồ, hoặc agent không thể tiến triển có ý nghĩa. Khách bực bội chưa đồng nghĩa bắt buộc chuyển ngay nếu họ chưa yêu cầu người và vấn đề vẫn giải quyết được. Ngược lại, yêu cầu rõ được gặp người phải được tôn trọng ngay, không bắt họ đi thêm một vòng điều tra.

System prompt có thể kèm few-shot đối chiếu: “Tôi rất bực, đơn bị trễ” nhưng chưa yêu cầu nhân viên → thừa nhận bực bội và đề nghị giải quyết nếu trong khả năng; “Đừng xử lý tự động nữa, chuyển nhân viên” → chuyển ngay với thông tin đã có. Không dùng sentiment hoặc điểm confidence tự báo làm proxy duy nhất cho độ phức tạp/chuyển cấp. Nếu khách nhắc lại mong muốn gặp người, tôn trọng thay vì tiếp tục thuyết phục họ qua thêm bước tự động.

Nhiều kết quả khách hàng trùng tên cần thêm định danh, không chọn theo phỏng đoán. Chính sách chỉ nói điều chỉnh giá của chính cửa hàng không tự cho phép áp điều chỉnh theo giá đối thủ.

Handoff cần customer ID đã xác minh, từng vấn đề, nguyên nhân đã biết, dữ liệu giao dịch, những gì đã thử và hành động đề xuất. Người tiếp nhận có thể không đọc được transcript, nên câu “khách cần hỗ trợ” là không đủ.

Một yêu cầu có nhiều vấn đề cần tách thành các hạng mục riêng, chia sẻ facts khách hàng đã xác minh, điều tra các nhánh độc lập song song rồi tổng hợp một phương án thống nhất. Handoff nên nêu rõ số tiền hoàn đề xuất, căn cứ và điều kiện chưa đạt; không chỉ gửi transcript dài hay một kết luận thiếu dữ liệu.

## Câu hỏi tình huống

**1. Chọn một.** Quy tắc yêu cầu xác minh trước hoàn tiền nhưng agent đôi lúc bỏ qua. Cách sửa bền vững?

A. Thêm chữ IMPORTANT vào cùng prompt.

B. Tăng số ví dụ thành công nhưng không đổi thực thi.

C. Để công cụ hoàn tiền tự đoán khách hàng.

D. Gate bằng mã chặn hoàn tiền khi chưa có định danh xác minh hợp lệ.

**2. Chọn một.** Khách nói rõ “hãy chuyển tôi cho nhân viên”. Đơn hàng có vẻ dễ xử lý. Theo mục tiêu đề cương?

A. Chuyển ngay theo yêu cầu, kèm thông tin đã có.

B. Buộc khách thử tự động thêm một lượt.

C. Chỉ chuyển nếu điểm sentiment rất thấp.

D. Đóng vụ việc vì có thể tự giải quyết.

**3. Chọn hai.** Tool trả hai khách hàng cùng tên và chính sách không nói về yêu cầu đặc biệt. Hành động phù hợp?

A. Chọn bản ghi có lịch sử mua lớn nhất.

B. Hỏi thêm định danh để phân biệt khách.

C. Chuyển trường hợp chính sách thiếu tới người có thẩm quyền, kèm handoff rõ.

D. Suy rộng quyền hoàn tiền từ chính sách tương tự.

## Đáp án

1. **D.** A và B vẫn chỉ là hướng dẫn; C không đạt tiền điều kiện.
2. **A.** B trái yêu cầu rõ; C dùng proxy không đáng tin; D bỏ yêu cầu hỗ trợ.
3. **B, C.** A chọn bằng heuristic; D tạo chính sách chưa được cấp.
