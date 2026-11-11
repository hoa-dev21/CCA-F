# Resume, fork và trạng thái qua ranh giới context

Nguồn: Exam Guide CCAR-F v1.0, mục 1.7, 5.1 và 5.4, trang PDF 8–9, 19–22. Câu hỏi tự biên soạn.

## Nội dung bài học


Tiếp tục phiên cũ (resume) phù hợp khi phần lớn ngữ cảnh còn đúng. Theo đề cương, `--resume <session-name>` chọn một phiên đã đặt tên; việc mở phiên mới rồi gửi lại câu hỏi giống nhau không phải tiếp tục phiên đó. Cú pháp thực tế cần đối chiếu phiên bản đang dùng.

Nếu mã đã thay đổi, chỉ rõ tệp nào đổi để tác nhân đọc lại phần ảnh hưởng. Khi quá nhiều kết quả cũ đã lỗi thời, phiên mới với bản tóm tắt có cấu trúc và nguồn hiện tại có thể phù hợp hơn. Tạo nhánh phiên (fork) giúp thử phương án khác từ trạng thái ban đầu, nhưng các nhánh không tự chia sẻ những kết quả mới. Cấu hình `fork_session` cũng cần kiểm tra theo thư viện triển khai.

Giữ các dữ kiện quyết định trong bản ghi riêng: mã đơn, số tiền, ngày, trạng thái và mong muốn cụ thể của khách. Với nhiều vấn đề, tổ chức theo từng vấn đề hoặc đơn hàng và đưa phần liên quan vào mỗi yêu cầu, bên cạnh lịch sử đã rút gọn.

Ví dụ: Qua nhiều lần tóm tắt, “hoàn 35%, giao trước ngày 12” có thể thành “khách muốn hoàn và giao sớm”. Điều kiện quan trọng đã mất. Ngược lại, giữ cả 40 trường từ một lần tra đơn khi chỉ 5 trường liên quan lại làm ngữ cảnh dài không cần thiết. Lọc đúng phần cần dùng, đồng thời giữ tham chiếu để lấy lại khi cần.

Đề cương gọi việc thông tin giữa đầu vào dài dễ bị bỏ sót là “lost in the middle”. Để giảm rủi ro, đưa phát hiện chính lên đầu, chia phần bằng tiêu đề rõ và yêu cầu bước trước trả dữ kiện, nguồn, ngày, vị trí, phương pháp cùng mức liên quan. Không chuyển toàn bộ văn bản dài và mọi lời lý giải sang bước sau. Cách tổ chức này hỗ trợ đọc hiểu, không bảo đảm mô hình luôn đọc đúng hai đầu.

Với Messages API, ngữ cảnh cần thiết, gồm các khối công cụ, phải thực sự nằm trong yêu cầu gửi lại. Lưu ở máy chủ hoặc trên đĩa chưa đủ.

Trong khám phá dự án dài, tác nhân con có thể giữ chi tiết tìm kiếm, còn bên điều phối giữ tổng quan. Ghi phát hiện và đường dẫn vào sổ ghi chú (scratchpad). Lưu trạng thái từng tác nhân và một tệp danh mục (manifest) chỉ nơi tìm để phục hồi sau sự cố. Khi khởi động lại, phải tải và đưa phần trạng thái cần thiết vào ngữ cảnh.

Nếu câu trả lời chuyển từ dẫn đúng lớp mã đã tìm sang “thường hệ thống sẽ…”, hoặc mâu thuẫn với phát hiện trước, hãy kiểm tra sự suy giảm ngữ cảnh. Giao câu hỏi cụ thể cho từng nhánh, tổng hợp theo giai đoạn và chuyển kết quả cần thiết sang giai đoạn sau. Trước khi dùng `/compact` để rút gọn, giữ dữ kiện quan trọng có cấu trúc và kiểm tra bản tóm tắt không làm mất chúng.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Phiên điều tra cũ liên tục viện dẫn file đã bị thay đổi sau một refactor lớn. Cách tiếp tục nào giảm context lỗi thời mà giữ được mục tiêu?

A. Phiên mới nhận summary có nguồn; xác minh lại file hiện tại.

B. Giữ phiên và yêu cầu tin các kết luận cũ vì chúng đã từng được kiểm tra.

C. Nạp lại toàn bộ transcript cũ để tăng mức chi tiết.

D. Chỉ xóa câu trả lời cuối, giữ nguyên kết quả công cụ đã cũ.

**Câu 2 — Chọn hai.** Hệ nhiều tác nhân phải phục hồi sau crash mà không làm lại bước đã hoàn tất. Hai thành phần nào cần có?

A. Một thông báo “hãy tiếp tục” không kèm trạng thái.

B. State có cấu trúc tại vị trí biết trước cùng manifest chỉ ra artifact/trạng thái bước.

C. Tóm tắt và dữ kiện cần thiết được đưa rõ vào context tác nhân khởi động lại.

D. Một session ID cũ được coi là đủ để mọi tác nhân tự có lại context.

**Câu 3 — Chọn một.** Sau ba lần compact, “hoàn 35% đơn A trước ngày 12” thành “khách muốn hoàn sớm”. Thay đổi nào bảo vệ dữ kiện nghiệp vụ?

A. Tăng độ dài bản tóm tắt văn xuôi.

B. Yêu cầu mô hình nhắc lại số tiền từ trí nhớ mỗi lượt.

C. Lưu facts chuẩn trong case state; nạp lại khi cần xử lý.

D. Đưa cả hội thoại vào tên công cụ để không bị compact.

**Câu 4 — Chọn một.** Sau crash, manifest ghi “đã gửi yêu cầu thanh toán” nhưng chưa có xác nhận thành công. Khởi động lại nên làm gì trước khi gửi lại?

A. Đánh dấu thành công vì thao tác đã được gửi.

B. Gửi lại ngay vì lần trước không có phản hồi.

C. Đổi transaction ID rồi gửi để tránh trùng tên.

D. Kiểm tra trạng thái bên đích bằng định danh giao dịch và quy tắc chống lặp.

**Câu 5 — Chọn hai.** Summary bàn giao có các phát hiện từ phiên trước. Hai thông tin nào giúp tác nhân mới biết phần nào cần xác minh lại?

A. Nguồn/đường dẫn cùng revision hoặc thời điểm kiểm tra.

B. Điểm chưa xác minh, giả định và công việc còn mở.

C. Chỉ một confidence chung cho toàn summary.

D. Tên tác nhân cũ thay cho nguồn bằng chứng.

## Đáp án và giải thích

1. **A.** A chuyển tri thức cần thiết và kiểm tra tính hiện hành. B coi bằng chứng cũ là vĩnh viễn. C có thể tăng nhiễu cũ; D không loại được dữ liệu công cụ đang gây sai.

2. **B, C.** B cung cấp điểm phục hồi, C đưa thông tin vào quá trình suy luận mới. A thiếu trạng thái; D không chứng minh context hoặc artifact đã được tải lại.

3. **C.** C tách facts chính xác khỏi phần tóm tắt dễ mất chi tiết. A giảm nguy cơ nhưng không tạo nơi lưu chuẩn; B có thể củng cố số nhớ sai; D lạm dụng metadata và không giải quyết quản lý trạng thái.

4. **D.** D phân biệt gửi yêu cầu với hoàn tất tác động. A có thể báo thành công sai; B có thể thực thi hai lần; C đổi ID còn có thể vô hiệu cơ chế chống lặp.

5. **A, B.** A cho biết bằng chứng có thể lỗi thời; B phân biệt đã biết và chưa biết. C không xác định phần cần kiểm tra. D không chứng minh tính đúng hay tính hiện hành của phát hiện.
