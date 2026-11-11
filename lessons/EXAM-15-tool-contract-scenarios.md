# Tình huống tool contract, lỗi và lựa chọn công cụ

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục2.1–2.5, trang PDF9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Nội dung bài học


Một công cụ có schema chặt vẫn có thể bị chọn nhầm nếu tên và mô tả không rõ. Cần mô tả mục đích, đầu vào, đầu ra, trường hợp dễ nhầm và sửa cả quy tắc chọn công cụ theo từ khóa sai trong hướng dẫn hệ thống.

Phân biệt ba việc: mô hình chọn công cụ nào, ứng dụng có quyền thực hiện hay không và ứng dụng thực hiện thế nào. `tool_choice="any"` yêu cầu gọi một công cụ nhưng không ép một tên cụ thể.

Ví dụ: Bước bổ sung dữ liệu chỉ được chạy sau khi thông tin mô tả đã kiểm tra. Hãy ép công cụ trích thông tin mô tả ở lượt đầu, để ứng dụng chạy và xác minh kết quả, gửi kết quả lại rồi mới cho phép bước tiếp theo. Mã điều phối phải thực hiện thứ tự này; cấu hình chọn công cụ không tự bảo đảm toàn quy trình.

Lỗi MCP cần được đánh dấu bằng `isError` và có nội dung đủ để chọn cách xử lý: loại lỗi, có thể thử lại không và mô tả cụ thể. Lỗi hết thời gian chờ có thể thử lại trong giới hạn; hoàn tiền bị chính sách cấm cần giải thích hoặc chuyển cấp. Kết quả tìm kiếm thành công nhưng rỗng vẫn phải được phân biệt với lỗi truy cập.

Cấp công cụ phù hợp vai trò và thu hẹp khả năng bằng kiểm tra thật. Khi tìm nơi gọi hàm trong mã có lớp trung gian (wrapper), xác định cả các tên xuất ra hoặc bí danh rồi tìm từng tên. Chỉ tìm tên hàm gốc một lần có thể bỏ sót nơi gọi qua tên khác.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** The host must validate metadata before enrichment calls a paid service. `tool_choice=any` allows either tool. Which change enforces this prerequisite?

A. List the metadata tool before enrichment.

B. Force metadata extraction and enable enrichment only after host validation succeeds.

C. Add a metadata-first example without changing the executor.

D. Run both in parallel and discard enrichment if metadata fails.

**Question 2 — Choose two.** An MCP tool returns “Operation failed” for both a lookup timeout and a forbidden refund. Which TWO changes support correct orchestration?

A. Return the error type, retryability, and actionable context using the interface's proper error status.

B. Convert every error into an empty result so synthesis can continue.

C. Bound retries for timeouts and route policy failures to permitted handling.

D. Retry every failure once before inspecting its type.

**Question 3 — Choose one.** `fetchRecord` is re-exported as `loadCustomer` and `getAccount`. Grep for `fetchRecord` finds only one caller. What should happen before changing its parameters?

A. Update the visible caller and assume indirect wrappers are unaffected.

B. Change signatures in every file containing “customer.”

C. Use the Grep count to estimate coverage and add random tests.

D. Trace aliases and exports, inspect wrappers, and check callers of every relevant name.

**Question 4 — Choose one.** A tool schema requires a positive `amount`. The model requests a USD 700 refund for a transaction capped at USD 500. What should the host do?

A. Execute because the schema is valid, then inspect the service response.

B. Change the amount to USD 500 without confirming the requested action.

C. Check business rules before execution and return an error with an escalation path.

D. Split the refund into two USD 350 calls.

**Question 5 — Choose two.** A tool returns a transient error after producing partial results. Which TWO elements should the result contract preserve?

A. Available data with clear sources and scope.

B. An overall success flag because some data exists.

C. Only the error, discarding useful data for a uniform return type.

D. An incomplete status, the cause, and recovery options.

## Đáp án và giải thích

1. **B.** B đặt cổng chuyển trạng thái và kiểm tra thực tế. A/C có thể định hướng nhưng không cưỡng chế. D vẫn gọi dịch vụ tính phí trước khi biết tiền điều kiện đạt.

2. **A, C.** A giữ tín hiệu cần cho điều phối; C dùng đúng tín hiệu đó. B biến lỗi thành dữ liệu thiếu và che nguyên nhân. D bỏ qua việc lỗi nghiệp vụ không thay đổi chỉ bằng retry.

3. **D.** D lần theo quan hệ thật. A bỏ ảnh hưởng qua wrapper; B tìm rộng nhưng không xác định đúng quan hệ; C số lần xuất hiện chuỗi không đo đủ độ bao phủ của ký hiệu.

4. **C.** C phân biệt schema với chính sách giao dịch. A đặt gate quá muộn; B thay đổi yêu cầu nghiệp vụ; D né giới hạn thay vì tuân thủ ý nghĩa của nó.

5. **A, D.** A giúp dùng lại phần hợp lệ; D ngăn downstream tưởng toàn bộ nhiệm vụ đã xong. B che phạm vi thiếu. C có thể làm mất công việc hữu ích và buộc chạy lại không cần thiết.
