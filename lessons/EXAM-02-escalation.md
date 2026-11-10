# Gate nghiệp vụ và bàn giao cho con người

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 1.4–1.5 và 5.2, trang PDF 7, 20–21. Câu hỏi tự biên soạn theo mục tiêu thi; không phải bản tóm tắt một video.

## Nội dung bài học


Khi một thao tác chỉ được phép sau khi đạt điều kiện bắt buộc, chương trình phải kiểm tra và chặn nếu điều kiện chưa đạt. Ví dụ: hoàn tiền cần có định danh khách hàng đã xác minh. Chỉ viết “luôn xác minh trước” trong prompt chưa tạo cơ chế bắt buộc.

Hook trước thao tác có thể kiểm tra ngưỡng hoàn tiền và chuyển khoản vượt thẩm quyền cho người phụ trách. Hook sau thao tác có vai trò khác, chẳng hạn chuẩn hóa kết quả để mô hình đọc. Nó không thể ngăn khoản tiền đã được chuyển.

Theo ví dụ của đề cương, `PostToolUse` có thể chuyển thời gian dạng Unix timestamp và ISO 8601 về cùng cách biểu diễn có múi giờ, hoặc đổi mã trạng thái dạng số thành ý nghĩa tương ứng của từng công cụ. Giữ giá trị gốc và nguồn để truy lại; không tự đoán khi chưa rõ đơn vị thời gian hoặc ý nghĩa mã.

Cần chuyển cho người có thẩm quyền khi người dùng yêu cầu gặp người, chính sách thiếu hoặc mơ hồ, hay tác nhân không thể tiến triển có ý nghĩa. Phân biệt hai tình huống:

- “Tôi rất bực vì đơn giao trễ”: ghi nhận sự bực bội và đề nghị giải quyết nếu còn trong khả năng.
- “Đừng xử lý tự động nữa, chuyển tôi cho nhân viên”: chuyển ngay với thông tin đã có, không bắt khách qua thêm một vòng tự động.

Có thể đưa các cặp ví dụ như vậy vào hướng dẫn hệ thống. Không dùng cảm xúc hoặc điểm tự tin do mô hình tự báo làm căn cứ duy nhất để quyết định chuyển cấp.

Nếu có nhiều khách cùng tên, hỏi thêm thông tin định danh thay vì chọn theo phỏng đoán. Nếu chính sách chỉ cho điều chỉnh theo giá của cửa hàng, không tự suy ra được phép áp giá đối thủ.

Thông tin bàn giao cần có mã khách đã xác minh, từng vấn đề, giao dịch liên quan, nguyên nhân đã biết, việc đã thử và hành động đề xuất. Với đề xuất hoàn tiền, nêu số tiền, căn cứ và điều kiện còn thiếu. Người nhận có thể không đọc được lịch sử chat, nên câu “khách cần hỗ trợ” hoặc một đoạn chat dài không được tổng hợp là chưa đủ.

Nếu khách có nhiều vấn đề, tách thành các hạng mục, dùng chung dữ kiện đã xác minh, xử lý song song những nhánh độc lập rồi đưa ra một phương án thống nhất.

## Câu hỏi tình huống

**1. Chọn một.** Quy tắc yêu cầu xác minh trước hoàn tiền nhưng tác nhân AI đôi lúc bỏ qua. Cách sửa bền vững?

A. Thêm chữ IMPORTANT vào cùng prompt.

B. Tăng số ví dụ thành công nhưng không đổi thực thi.

C. Để công cụ hoàn tiền tự đoán khách hàng.

D. Gate bằng mã chặn hoàn tiền khi chưa có định danh xác minh hợp lệ.

**2. Chọn một.** Khách nói rõ “hãy chuyển tôi cho nhân viên”. Đơn hàng có vẻ dễ xử lý. Theo mục tiêu đề cương?

A. Chuyển ngay theo yêu cầu, kèm thông tin đã có.

B. Buộc khách thử tự động thêm một lượt.

C. Chỉ chuyển nếu điểm sentiment rất thấp.

D. Đóng vụ việc vì có thể tự giải quyết.

**3. Chọn hai.** Công cụ trả hai khách hàng cùng tên và chính sách không nói về yêu cầu đặc biệt. Hành động phù hợp?

A. Chọn bản ghi có lịch sử mua lớn nhất.

B. Hỏi thêm định danh để phân biệt khách.

C. Chuyển trường hợp chính sách thiếu tới người có thẩm quyền, kèm handoff rõ.

D. Suy rộng quyền hoàn tiền từ chính sách tương tự.

## Đáp án

1. **D.** A và B vẫn chỉ là hướng dẫn; C không đạt tiền điều kiện.
2. **A.** B trái yêu cầu rõ; C dùng proxy không đáng tin; D bỏ yêu cầu hỗ trợ.
3. **B, C.** A chọn bằng heuristic; D tạo chính sách chưa được cấp.
