# Code execution and the Files API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287777), sources/api-lessons/287777.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Files API trong bài cho phép tải tệp lên và nhận mã định danh tệp. Các bước sau có thể tham chiếu bằng mã đó thay vì gửi lại toàn bộ dữ liệu của tệp mỗi lần.

Công cụ chạy mã (code execution) được thực hiện phía dịch vụ. Ứng dụng không phải tự xây môi trường chạy của công cụ trong mẫu, nhưng vẫn phải quản lý tệp đầu vào, phản hồi và các tệp kết quả.

Ví dụ: Tải tệp CSV lên, đưa tham chiếu tệp vào môi trường thực thi theo cách được hỗ trợ, yêu cầu phân tích, xem mã và kết quả, rồi tải tệp đầu ra bằng mã định danh. Nhận được mã tệp sau khi tải lên chưa chứng minh tệp đã được đưa đúng vào môi trường chạy hoặc đã phân tích xong.

Nếu kết quả là biểu đồ, hãy mở biểu đồ và đối chiếu với dữ liệu, không chỉ đọc lời tóm tắt. Các giới hạn mạng, môi trường chạy và phiên bản công cụ trong video cần được kiểm tra lại trước khi triển khai.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ứng dụng tải CSV lên Files API và nhận file_id, nhưng lượt phân tích báo không tìm thấy dữ liệu. Điều tra nào nhắm đúng ranh giới giữa lưu tệp và thực thi?

A. Tăng thời gian chạy mã vì nhận file_id chứng minh CSV đã được mount.

B. Kiểm tra file reference đã đi vào đúng request/runtime chưa.

C. Yêu cầu mô hình suy ra cột từ tên file để tiếp tục phân tích.

D. Tải lại CSV sau mỗi câu hỏi vì file_id chỉ phục vụ tải xuống.

**Câu 2 — Chọn hai.** Công cụ chạy mã trả biểu đồ và lời tóm tắt “doanh thu tăng 20%”. Báo cáo sẽ dùng để quyết định ngân sách. Hai bước kiểm chứng nào bổ sung cho nhau?

A. Cho cùng mô hình viết lại tóm tắt bằng hai cách rồi dùng phần giống nhau.

B. Đối chiếu phép tính, bộ lọc và dữ liệu nguồn đã thực sự được dùng.

C. Mở biểu đồ, kiểm tra trục, đơn vị và nội dung với dữ liệu kết quả.

D. Coi tải xuống thành công là bằng chứng tỷ lệ 20% đã được xác nhận.

**Câu 3 — Chọn một.** Một mẫu code execution trong khóa truy cập mạng thành công. Nhóm chuyển sang môi trường khác và muốn dùng cùng thiết kế. Quyết định kiến trúc nào phù hợp?

A. Chạy một phép tính không dùng mạng trong môi trường mới; nếu thành công thì giữ nguyên phần tải dữ liệu qua mạng.

B. Kiểm tra token gọi API được chấp nhận rồi coi kết nối mạng bên trong môi trường thực thi đã được cấp tương ứng.

C. Giữ cấu hình mẫu và bổ sung retry/backoff cho truy cập mạng trước khi xác minh các giới hạn của môi trường mới.

D. Xác minh giới hạn môi trường, phiên bản công cụ và cách cấp dữ liệu trước khi dựa vào truy cập mạng.

**Câu 4 — Chọn hai.** Job tạo ba tệp đầu ra, nhưng người dùng chỉ thấy một lời trả lời bằng văn bản. Hai trách nhiệm nào ứng dụng vẫn phải đảm nhiệm dù mã chạy phía dịch vụ?

A. Dùng file_id đầu vào làm địa chỉ cho tất cả tệp đầu ra để giảm trạng thái.

B. Đọc phản hồi để nhận đúng định danh các artifact được tạo.

C. Tải hoặc cung cấp artifact phù hợp và xác minh chúng đúng với yêu cầu.

D. Triển khai lại toàn bộ sandbox chạy mã trên máy người dùng cho mọi yêu cầu.

**Câu 5 — Chọn một.** Pipeline đánh dấu hoàn tất ngay sau khi nhận mã tệp CSV đã tải lên, trước khi có phản hồi thực thi. Cách sửa trạng thái nào chính xác nhất?

A. Phân biệt upload, cấp tệp, chạy và kiểm chứng kết quả.

B. Giữ trạng thái hoàn tất nhưng bổ sung confidence cho kết quả chưa có.

C. Đợi một khoảng thời gian cố định sau upload rồi coi như phân tích xong.

D. Chỉ đổi nhãn thành “đang phân tích” và giữ nguyên điều kiện kết thúc job.

## Đáp án và giải thích

1. **B.** A sai: nhận định mount thành công chính là tiền đề chưa được chứng minh. B đúng: file_id xác nhận lưu tệp, chưa xác nhận môi trường chạy đã nhận nó. C sai: tên tệp không thay thế dữ liệu thực và có thể dẫn tới kết quả bịa. D sai: việc có cần tải lại không được suy ra từ lỗi; cần kiểm tra cách truyền tham chiếu.

2. **B, C.** A sai: hai cách diễn đạt không phải phép kiểm chứng độc lập của dữ liệu và mã. B đúng: số liệu có thể sai do logic xử lý dù mã chạy thành công. C đúng: artifact có thể diễn đạt sai dữ liệu hoặc không khớp lời tóm tắt. D sai: tải được tệp chỉ xác nhận vận chuyển dữ liệu, không xác nhận tính toán.

3. **D.** A sai: chạy phép tính nội bộ không kiểm tra khả năng truy cập mạng. B sai: quyền gọi API không tự chứng minh quyền mạng bên trong môi trường thực thi. C sai: retry có thể hữu ích với lỗi tạm thời nhưng không giải quyết giới hạn hoặc cấu hình không hỗ trợ. D đúng: cần xác minh năng lực môi trường đích trước khi thiết kế phụ thuộc vào nó.

4. **B, C.** A sai: định danh tệp nguồn không xác định các artifact mới được tạo. B đúng: ứng dụng cần ánh xạ kết quả thực thi với tệp có thể lấy về. C đúng: dịch vụ thực thi không thay thế trách nhiệm chuyển kết quả có ích tới người dùng. D sai: mẫu dùng công cụ phía dịch vụ nên không mặc định đòi tự dựng môi trường thực thi.

5. **A.** A đúng: các bước có bằng chứng hoàn tất khác nhau nên không thể dùng một tín hiệu thay tất cả. B sai: điểm confidence không tạo ra bằng chứng thực thi. C sai: thời gian trôi qua không xác nhận công cụ đã chạy thành công. D sai: thay nhãn không sửa lỗi điều phối chấp nhận quá sớm.
