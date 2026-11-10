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

## Câu hỏi

**1. Chọn một.** Repo đã thay đổi lớn từ lần điều tra trước. Tác nhân AI liên tục viện dẫn kết quả công cụ cũ. Lựa chọn phù hợp?

A. Giữ lịch sử cũ và cấm đọc lại.

B. Chỉ thêm câu “hãy chính xác”.

C. Báo hoàn tất vì đã có kết quả ban đầu để so sánh.

D. Cân nhắc phiên mới với summary/state có nguồn và xác minh lại file hiện tại.

**2. Chọn hai.** Phục hồi sau crash trong hệ nhiều tác nhân AI nên có gì?

A. State có cấu trúc ở vị trí biết trước và manifest để tác nhân điều phối tải.

B. Chỉ dựa vào trí nhớ không được lưu.

C. Đưa summary/phát hiện cần thiết vào prompt tác nhân AI khởi động lại.

D. Giả định file tồn tại nghĩa tác nhân con đã đọc.

**3. Chọn một.** Summary dài dần làm mất chính xác số tiền và order ID. Cách sửa phù hợp?

A. Nén thêm mọi con số thành mô tả chung.

B. Giữ facts giao dịch có cấu trúc ngoài phần summary dễ mất chi tiết.

C. Dùng điểm tự tin thay order ID.

D. Xóa kết quả công cụ liên quan.

## Đáp án

1. **D.** A giữ trạng thái sai; B không thay bằng chứng; C nhầm lịch sử với hiện trạng.
2. **A, C.** B không phục hồi được; D nhầm lưu trữ với ngữ cảnh mô hình đã nhận.
3. **B.** A mất dữ kiện thêm; C sai loại thông tin; D bỏ nguồn cần thiết.
