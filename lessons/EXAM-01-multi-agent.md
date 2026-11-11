# Điều phối nhiều agent và truyền ngữ cảnh

Nguồn bổ trợ: Exam Guide CCAR-F v1.0 July 2026, mục 1.2–1.3, trang PDF 5–6. Đây là bài biên soạn theo đề cương thi, không phải một bài video Skilljar. Câu hỏi mới tự biên soạn.

## Nội dung bài học


Trong mô hình hub-and-spoke của đề cương, một tác nhân điều phối đứng ở trung tâm: phân tích yêu cầu, chia việc, chọn tác nhân con, nhận kết quả và xử lý lỗi. Không phải yêu cầu nào cũng cần gọi mọi tác nhân. Một câu hỏi đơn giản có thể chỉ cần một nhánh.

Chia việc theo chủ đề hoặc nguồn dữ liệu để hạn chế làm trùng. Tuy nhiên, cần kiểm tra tổng thể để việc chia quá nhỏ không bỏ sót phạm vi quan trọng. Sau khi tổng hợp, nếu thiếu một góc nhìn, giao thêm nhiệm vụ cụ thể cho phần thiếu thay vì chạy lại toàn bộ nghiên cứu.

Tác nhân con có ngữ cảnh riêng, không tự biết toàn bộ cuộc trò chuyện của tác nhân điều phối. Khi giao việc, cần gửi mục tiêu, phạm vi, tiêu chí chất lượng, dữ liệu và kết quả trước đó có liên quan. Kết quả bàn giao nên tách phát hiện khỏi thông tin nguồn như URL, tên tài liệu, trang và ngày để không mất căn cứ khi tổng hợp.

Theo giao diện trong đề cương, tác nhân điều phối cần `Task` trong `allowedTools` để gọi tác nhân con. `AgentDefinition` khai báo mô tả, hướng dẫn hệ thống và giới hạn công cụ. Các nhiệm vụ độc lập có thể được yêu cầu trong cùng lượt để chạy song song. Đây là tên giao diện theo đề cương; khi triển khai phải đối chiếu thư viện đang dùng.

Ví dụ: Nghiên cứu thị trường có một nhánh đọc quy định và một nhánh đọc dữ liệu khách hàng. Tác nhân điều phối giao phạm vi riêng, nhận kết quả có nguồn rồi kiểm tra xem có thiếu dữ liệu của một thời kỳ nào không. Nếu thiếu, nó giao truy vấn bổ sung và chuyển phát hiện mới vào bước tổng hợp.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Tác nhân tìm kiếm đọc 40 tài liệu; tác nhân tổng hợp chỉ nhận tên chủ đề. Báo cáo thiếu bằng chứng dù coordinator có đầy đủ lịch sử. Thay đổi nào giải quyết đúng nguyên nhân với ít ngữ cảnh thừa nhất?

A. Cho tổng hợp đọc lại cả 40 tài liệu để tự dựng lịch sử.

B. Bàn giao phát hiện, vị trí nguồn và giới hạn cho tổng hợp.

C. Gắn chung session ID cho hai tác nhân rồi giữ nguyên prompt.

D. Tăng ngân sách token của tổng hợp để nó tự suy ra phần lịch sử thiếu.

**Câu 2 — Chọn hai.** Hệ nghiên cứu dùng bốn chuyên gia cho mọi yêu cầu. Với câu hỏi tra một ngày công bố, độ trễ tăng nhưng độ đúng không đổi. Hai thay đổi nào giữ khả năng xử lý nghiên cứu phức tạp mà giảm công việc thừa?

A. Coordinator định tuyến theo nhu cầu thực tế của yêu cầu.

B. Mỗi chuyên gia tự gọi tất cả chuyên gia còn lại khi thấy thiếu thông tin.

C. Phân phạm vi và đầu ra riêng cho các nhánh thật sự cần chạy.

D. Luôn gọi đủ bốn nhánh nhưng chỉ giữ kết quả nhánh trả lời sớm nhất.

**Câu 3 — Chọn một.** Hai tác nhân đều đề xuất một giải pháp, nhưng cùng dẫn lại một bài blog gốc. Coordinator muốn gọi đây là xác nhận độc lập. Quyết định nào tốt nhất?

A. Coi là hai bằng chứng vì hai lần suy luận được thực hiện độc lập.

B. Cho tác nhân thứ ba đọc hai kết luận và bỏ phiếu.

C. Lấy giao của hai kết luận làm kết luận chắc chắn.

D. Truy nguồn gốc; ghi nhận một nguồn, bổ sung khi rủi ro đòi hỏi.

**Câu 4 — Chọn một.** Bản tổng hợp tốt về chi phí nhưng thiếu ràng buộc lưu trữ dữ liệu, một tiêu chí bắt buộc. Còn đủ ngân sách cho một nhánh nghiên cứu. Bước tiếp theo nào phù hợp?

A. Giao truy vấn có mục tiêu về ràng buộc lưu trữ, rồi đưa phát hiện có nguồn vào lượt tổng hợp mới.

B. Chạy lại toàn bộ chuyên gia với prompt ban đầu để tăng cơ hội tìm được.

C. Yêu cầu tổng hợp tự thêm một đoạn lưu trữ dựa vào kiến thức chung.

D. Gửi báo cáo hiện tại và đánh dấu phần thiếu là vấn đề trình bày.

**Câu 5 — Chọn hai.** Một nhánh hết thời gian và chỉ có ba nguồn trong sáu nguồn dự kiến. Hai thông tin nào cần bàn giao để coordinator quyết định dùng kết quả một phần hay bổ sung nghiên cứu?

A. Điểm tự tin tổng hợp thay cho danh sách nguồn còn thiếu.

B. Các phát hiện đã có kèm nguồn, phạm vi đã kiểm tra.

C. Kết luận hoàn thành vì nhánh đã tiêu hết ngân sách được cấp.

D. Những phần chưa kiểm tra và lý do dừng hoặc lỗi đã gặp.

## Đáp án và giải thích

1. **B.** B tạo bàn giao tường minh, có chọn lọc. A có thể lấy lại dữ liệu nhưng lặp toàn bộ nghiên cứu. C không chứng minh các context độc lập được chia sẻ. D tăng sức chứa, không đưa bằng chứng vào đó.

2. **A, C.** A giảm nhánh không cần; C giảm trùng lặp khi cần nhiều nhánh. B tạo điều phối phân tán khó kiểm soát. D bỏ kết quả nhưng vẫn trả chi phí gọi và có thể chọn câu trả lời nhanh mà thiếu góc quan trọng.

3. **D.** D phân biệt độc lập của tác nhân và độc lập của bằng chứng. A đếm đôi nguồn; B thêm phiếu nhưng không thêm chứng cứ; C đồng thuận không loại được sai lệch chung từ nguồn gốc.

4. **A.** A dùng ngân sách cho khoảng trống đã xác định. B lặp việc đã đủ; C chưa tạo bằng chứng cho tiêu chí bắt buộc; D coi thiếu thông tin quyết định là lỗi văn phong.

5. **B, D.** B bảo toàn phần có thể dùng, D làm rõ khoảng trống và khả năng phục hồi. A không đủ để kiểm tra độ bao phủ. C nhầm hoàn tất ngân sách với hoàn tất nhiệm vụ.
