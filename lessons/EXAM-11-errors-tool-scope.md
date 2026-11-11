# Phân loại lỗi và phân phối công cụ theo vai trò

Nguồn: Exam Guide CCAR-F v1.0, mục 2.1–2.3, trang PDF 9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Nội dung bài học


Nếu các công cụ có tên hoặc mô tả mơ hồ, mô hình dễ chọn nhầm. Mô tả cần nêu đầu vào, đầu ra, lúc dùng, trường hợp dễ nhầm và điểm khác với công cụ gần giống. Đồng thời kiểm tra hướng dẫn hệ thống, vì một quy tắc chọn theo từ khóa quá rộng có thể làm mô hình tiếp tục chọn sai.

Ví dụ: Đổi `analyze_content` thành `extract_web_results` và nói rõ công cụ nhận kết quả web để trích dữ liệu. Một công cụ tài liệu ôm quá nhiều việc có thể tách thành `extract_data_points`, `summarize_content` và `verify_claim_against_source`. Nếu hướng dẫn cũ nói cứ thấy chữ “analysis” là chọn công cụ phân tích chung, phải sửa cả hướng dẫn đó.

Lỗi cần cho biết cách xử lý tiếp:

- Lỗi tạm thời (transient), như hết thời gian chờ: có thể thử lại trong giới hạn.
- Lỗi đầu vào (validation): sửa tham số.
- Lỗi quyền (permission): xử lý quyền phù hợp.
- Lỗi nghiệp vụ (business): giải thích chính sách hoặc chuyển sang luồng được phép.

Trong MCP, `isError` đánh dấu lỗi; trong kết quả công cụ của API được học, tên trường là `is_error`. Không trộn hai giao diện. Một kết quả MCP có thể dùng `isError: true`, còn phần nội dung do ứng dụng thiết kế chứa `errorCategory: "business"`, `isRetryable: false`, mã `REFUND_LIMIT_EXCEEDED` và giải thích dễ hiểu. Nếu dùng tên `retriable` theo một ví dụ khác, phần chuyển đổi phải thống nhất. Các trường phân loại này không tự là trường bắt buộc chung của MCP.

Không trả cùng câu “Operation failed” cho mọi lỗi. Cũng không đổi lỗi truy cập thành danh sách rỗng: tìm kiếm thành công không có bản ghi khác với chưa truy cập được nguồn. Tác nhân con thử khắc phục cục bộ khi hợp lý, rồi báo lỗi còn lại và kết quả một phần cho bên điều phối.

Cấp công cụ theo vai trò. Tác nhân tổng hợp có thể được dùng công cụ hẹp để kiểm tra một dữ kiện đơn giản, còn điều tra sâu vẫn qua bên điều phối. Thay `fetch_url` tùy ý bằng `load_document` có kiểm tra URL thuộc kho được phép là thu hẹp khả năng thật, không chỉ đổi tên. Các con số 18 và 4–5 công cụ trong đề cương là ví dụ, không phải ngưỡng tối ưu cho mọi ứng dụng.

Với `tool_choice`, `auto` cho phép mô hình quyết định có gọi công cụ; `any` yêu cầu gọi một công cụ nhưng không ép tên cụ thể. Cấu hình `{"type":"tool","name":"extract_metadata"}` chọn công cụ cụ thể khi được hỗ trợ. Nếu phải trích thông tin mô tả trước khi bổ sung dữ liệu, ứng dụng cần thực thi, kiểm tra, trả kết quả rồi mới mở bước tiếp theo. Ép công cụ ở lượt đầu chưa đủ nếu mã điều phối vẫn cho bỏ qua điều kiện.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A refund tool returns `policy_denied` and `retryable=false`. The customer is upset, and the bot wants to try different arguments. What should it do?

A. Split the refund into smaller amounts to bypass the check.

B. Rename the tool in the prompt so the model selects it again.

C. Explain the restriction and follow an allowed escalation or authorized-human process.

D. Retry once as if this were a network error.

**Question 2 — Choose one.** A synthesis agent often needs to verify one date; only a few requests require extensive research. Which design balances narrow tools with deeper orchestration?

A. Give the synthesis agent every research tool so no coordinator is needed.

B. Provide `verify_fact` for narrow checks and use the coordinator for deeper research.

C. Always launch the full research team, even for one date.

D. Have the agent infer dates from context to avoid tool costs.

**Question 3 — Choose two.** Two tools have different schemas but both say “get customer information.” The model often chooses the write tool instead of the read tool. Which TWO changes address this?

A. Clarify names, purposes, effects, and when each tool should not be used.

B. Remove conflicting routing instructions from the system prompt.

C. Increase output tokens without changing names or descriptions.

D. Improve error messages only after an incorrect write occurs.

**Question 4 — Choose one.** An adapter uses “Operation failed” for both timeouts and policy violations. What should it add for appropriate recovery?

A. A longer, standardized apology.

B. One shared HTTP status to reduce branches.

C. A model-generated confidence score.

D. The error category, retryability, relevant context, and permitted recovery options.

**Question 5 — Choose two.** A read tool times out. A write tool also times out after submission, leaving its execution status unknown. Which TWO decisions are appropriate?

A. Retry both unconditionally because both timed out.

B. Use bounded retries for the read when appropriate.

C. Check transaction status or use idempotency controls before retrying the write.

D. Treat the write timeout as proof that no external action occurred.

## Đáp án và giải thích

1. **C.** C tôn trọng lỗi nghiệp vụ. A tìm cách né chính sách; B không thay đổi quyền; D bỏ qua phân loại không retryable và không có nguyên nhân tạm thời để thử lại.

2. **B.** B đáp ứng nhu cầu phổ biến với phạm vi nhỏ và vẫn có đường xử lý phức tạp. A mở rộng công cụ không cần; C thêm chi phí cho tác vụ đơn; D bỏ bước xác minh mà yêu cầu cần.

3. **A, B.** A tạo ranh giới lựa chọn, B tránh cấu hình khác triệt tiêu ranh giới đó. C không bổ sung tín hiệu phân biệt. D xử lý triệu chứng sau tác động, không giải quyết cách chọn công cụ.

4. **D.** D phân biệt lỗi tạm thời và lỗi nghiệp vụ. A cải thiện diễn đạt nhưng không điều phối. B xóa phân loại. C không thay thế tín hiệu từ công cụ về nguyên nhân thực tế.

5. **B, C.** B phù hợp lỗi tạm thời của thao tác đọc; C xử lý trạng thái thực thi chưa biết. A có thể tạo tác động kép. D nhầm không nhận được phản hồi với không thực hiện giao dịch.
