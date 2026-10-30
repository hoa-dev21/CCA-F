# Lỗi có cấu trúc và nguồn của kết luận

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.3 và 5.6, trang PDF 21, 23. Câu hỏi tự biên soạn.

## Tóm tắt

Phân biệt truy vấn thành công không có kết quả với không truy cập được nguồn. Trả timeout thành danh sách rỗng “thành công” khiến coordinator tưởng đã kiểm tra và không thấy gì.

Subagent xử lý lỗi tạm thời trong phạm vi cho phép; khi không khắc phục được, gửi loại lỗi, truy vấn đã thử, kết quả một phần và phương án khác. Trạng thái chung “không hoạt động” thiếu dữ liệu để quyết định phục hồi. Cũng không nên hủy toàn bộ nghiên cứu chỉ vì một nguồn thất bại nếu còn cách hoàn thành một phần có chú thích.

Mỗi phát hiện giữ ánh xạ claim–source: kết luận, nguồn, vị trí hoặc trích đoạn liên quan, ngày công bố/thu thập và bối cảnh phương pháp. Bước tóm tắt phải bảo toàn ánh xạ thay vì gom một danh sách URL tách khỏi các nhận định.

Hai số liệu khác nhau từ nguồn đáng tin có thể khác thời kỳ hoặc phương pháp. Giữ cả giá trị, gắn nguồn và chú thích xung đột; không chọn giá trị thuận mắt hoặc lấy trung bình vô căn cứ. Báo cáo phân biệt phát hiện chắc chắn, tranh luận và khoảng trống do nguồn không truy cập được.

Document-analysis agent hoàn tất phần phân tích với các giá trị xung đột được chú thích, rồi coordinator quyết định cách đối chiếu trước khi chuyển synthesis; không tự xóa một giá trị ở upstream. Dạng structured finding có thể giữ claim, source URL/document name, relevant excerpt/location, publication/collection date, methodological context và trạng thái contested/established/gap. Synthesis ghép các mapping này, giữ nguyên cách nguồn mô tả giới hạn phương pháp.

Chọn dạng trình bày theo dữ liệu: bảng cho số liệu tài chính cần so sánh, văn xuôi cho diễn biến tin tức, danh sách có cấu trúc cho phát hiện kỹ thuật. Không ép mọi nội dung về một đoạn summary đồng dạng khiến mất quan hệ claim–source hay mốc thời gian. Coverage annotations nêu rõ chủ đề được hỗ trợ và chủ đề còn trống do nguồn không sẵn có.

## Câu hỏi tình huống

**1. Chọn một.** Tìm kiếm timeout sau thử phục hồi cục bộ. Báo cáo nào hữu ích nhất?

A. “Không tìm thấy gì”, gắn thành công.

B. Loại lỗi, truy vấn, các lần thử, dữ liệu một phần và phương án thay thế.

C. Chỉ ghi “failed”.

D. Hủy mọi nhánh khác dù đang có kết quả.

**2. Chọn một.** Hai nguồn đáng tin cho tỷ lệ khác nhau ở hai năm khác nhau. Cách tổng hợp phù hợp?

A. Chọn số lớn hơn.

B. Bỏ cả hai vì chắc chắn nguồn sai.

C. Giữ giá trị cùng ngày và phương pháp, giải thích khác biệt thời kỳ trước khi coi là mâu thuẫn.

D. Lấy trung bình và bỏ nguồn.

**3. Chọn hai.** Sau nén kết quả để chuyển cho agent tổng hợp, dữ liệu nào cần giữ?

A. Ánh xạ từng claim với nguồn và vị trí liên quan.

B. Chỉ danh sách URL không gắn với kết luận.

C. Gắn mọi phát hiện là chắc chắn để đơn giản hóa.

D. Ngày thu thập/công bố và chú thích khoảng trống hoặc xung đột.

## Đáp án

1. **B.** A che lỗi; C không đủ phục hồi; D bỏ kết quả hợp lệ không cần thiết.
2. **C.** A chọn tùy tiện; B kết luận quá sớm; D xóa khác biệt ngữ nghĩa và attribution.
3. **A, D.** B làm mất liên kết bằng chứng; C làm mất thông tin bất định.
