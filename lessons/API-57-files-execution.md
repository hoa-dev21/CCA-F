# Code execution and the Files API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287777), sources/api-lessons/287777.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Files API trong bài cho phép tải tệp lên và nhận mã định danh tệp. Các bước sau có thể tham chiếu bằng mã đó thay vì gửi lại toàn bộ dữ liệu của tệp mỗi lần.

Công cụ chạy mã (code execution) được thực hiện phía dịch vụ. Ứng dụng không phải tự xây môi trường chạy của công cụ trong mẫu, nhưng vẫn phải quản lý tệp đầu vào, phản hồi và các tệp kết quả.

Ví dụ: Tải tệp CSV lên, đưa tham chiếu tệp vào môi trường thực thi theo cách được hỗ trợ, yêu cầu phân tích, xem mã và kết quả, rồi tải tệp đầu ra bằng mã định danh. Nhận được mã tệp sau khi tải lên chưa chứng minh tệp đã được đưa đúng vào môi trường chạy hoặc đã phân tích xong.

Nếu kết quả là biểu đồ, hãy mở biểu đồ và đối chiếu với dữ liệu, không chỉ đọc lời tóm tắt. Các giới hạn mạng, môi trường chạy và phiên bản công cụ trong video cần được kiểm tra lại trước khi triển khai.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A CSV upload returns `file_id`, but analysis cannot find the data. Which investigation addresses the storage-execution boundary?

A. Increase runtime because the ID proves the CSV is mounted.

B. Check whether the file reference reaches the correct request and runtime.

C. Infer columns from the filename.

D. Reupload for every question because IDs support downloads only.

**Question 2 — Choose two.** Code execution produces a chart and claims 20% revenue growth. Which TWO checks support using this in a budget decision?

A. Have the same model rewrite the claim twice and keep the overlap.

B. Inspect calculations, filters, and the source data actually used.

C. Open the chart and compare axes, units, and content with computed results.

D. Treat a successful download as verification of 20% growth.

**Question 3 — Choose one.** A course execution sample accesses the network, but deployment moves elsewhere. What is appropriate?

A. Test local arithmetic and assume networking also works.

B. Treat API authentication as authorization for runtime networking.

C. Add retries before checking environment restrictions.

D. Verify runtime limits, tool versions, and data provisioning before depending on network access.

**Question 4 — Choose two.** A job generates three files, but the user sees only text. Which TWO responsibilities remain with the application?

A. Reuse the input file ID for all outputs.

B. Read the response to identify generated artifacts.

C. Retrieve or expose suitable artifacts and verify they meet the request.

D. Reimplement every execution sandbox on the user's machine.

**Question 5 — Choose one.** A pipeline declares completion immediately after CSV upload, before execution responds. What is the accurate state design?

A. Distinguish upload, file provisioning, execution, and result verification.

B. Keep completion and add confidence for nonexistent results.

C. Wait a fixed interval and assume analysis finished.

D. Rename the status “analyzing” without changing completion conditions.

## Đáp án và giải thích

1. **B.** A sai: nhận định mount thành công chính là tiền đề chưa được chứng minh. B đúng: file_id xác nhận lưu tệp, chưa xác nhận môi trường chạy đã nhận nó. C sai: tên tệp không thay thế dữ liệu thực và có thể dẫn tới kết quả bịa. D sai: việc có cần tải lại không được suy ra từ lỗi; cần kiểm tra cách truyền tham chiếu.

2. **B, C.** A sai: hai cách diễn đạt không phải phép kiểm chứng độc lập của dữ liệu và mã. B đúng: số liệu có thể sai do logic xử lý dù mã chạy thành công. C đúng: artifact có thể diễn đạt sai dữ liệu hoặc không khớp lời tóm tắt. D sai: tải được tệp chỉ xác nhận vận chuyển dữ liệu, không xác nhận tính toán.

3. **D.** A sai: chạy phép tính nội bộ không kiểm tra khả năng truy cập mạng. B sai: quyền gọi API không tự chứng minh quyền mạng bên trong môi trường thực thi. C sai: retry có thể hữu ích với lỗi tạm thời nhưng không giải quyết giới hạn hoặc cấu hình không hỗ trợ. D đúng: cần xác minh năng lực môi trường đích trước khi thiết kế phụ thuộc vào nó.

4. **B, C.** A sai: định danh tệp nguồn không xác định các artifact mới được tạo. B đúng: ứng dụng cần ánh xạ kết quả thực thi với tệp có thể lấy về. C đúng: dịch vụ thực thi không thay thế trách nhiệm chuyển kết quả có ích tới người dùng. D sai: mẫu dùng công cụ phía dịch vụ nên không mặc định đòi tự dựng môi trường thực thi.

5. **A.** A đúng: các bước có bằng chứng hoàn tất khác nhau nên không thể dùng một tín hiệu thay tất cả. B sai: điểm confidence không tạo ra bằng chứng thực thi. C sai: thời gian trôi qua không xác nhận công cụ đã chạy thành công. D sai: thay nhãn không sửa lỗi điều phối chấp nhận quá sớm.
