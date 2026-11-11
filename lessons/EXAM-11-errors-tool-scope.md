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

**Câu 1 — Chọn một.** Công cụ hoàn tiền trả lỗi policy_denied, retryable=false. Bot thấy người dùng rất bức xúc và muốn thử tham số khác. Cách xử lý đúng?

A. Retry cùng giao dịch với số tiền chia nhỏ để vượt qua gate.

B. Đổi tên công cụ trong prompt để mô hình chọn lại.

C. Giải thích giới hạn và chuyển sang luồng được phép/người có thẩm quyền.

D. Retry một lần như mọi lỗi mạng để chắc chắn kết quả.

**Câu 2 — Chọn một.** Tác nhân tổng hợp thường cần xác minh một ngày; điều tra nhiều nguồn chỉ chiếm ít yêu cầu. Thiết kế nào cân bằng công cụ hẹp và điều phối sâu?

A. Cho tổng hợp mọi công cụ nghiên cứu để không cần coordinator.

B. verify_fact cho việc hẹp; coordinator điều phối việc sâu.

C. Luôn khởi chạy cả nhóm nghiên cứu dù chỉ cần một ngày.

D. Bắt tổng hợp suy luận ngày từ context để tránh chi phí công cụ.

**Câu 3 — Chọn hai.** Hai công cụ có schema khác nhau nhưng mô tả đều “lấy thông tin khách hàng”. Mô hình hay chọn công cụ ghi thay cho công cụ đọc. Hai cải thiện nào nhắm đúng lỗi?

A. Đổi tên/mô tả để nêu rõ mục đích, tác động và lúc không nên dùng.

B. Rà hướng dẫn định tuyến trong system prompt để bỏ chỉ dẫn mâu thuẫn.

C. Tăng token đầu ra nhưng giữ nguyên tên/mô tả.

D. Chỉ sửa thông báo lỗi sau khi ghi sai đã xảy ra.

**Câu 4 — Chọn một.** Cùng thông báo “Operation failed” đang dùng cho timeout và vi phạm chính sách. Adapter nên bổ sung gì để orchestrator phục hồi đúng?

A. Một câu xin lỗi thống nhất dài hơn.

B. Mã HTTP duy nhất để giảm nhánh xử lý.

C. Điểm confidence do mô hình tự chấm.

D. Loại lỗi, retryability, ngữ cảnh và hướng phục hồi hợp lệ.

**Câu 5 — Chọn hai.** Công cụ đọc dữ liệu timeout; công cụ ghi giao dịch timeout sau khi gửi yêu cầu, chưa biết bên đích đã thực hiện chưa. Hai quyết định nào hợp lý?

A. Retry cả hai vô điều kiện vì đều là timeout.

B. Retry có giới hạn với thao tác đọc khi phù hợp.

C. Tra trạng thái hoặc dùng cơ chế chống lặp của giao dịch trước khi quyết định retry ghi.

D. Coi timeout ghi là bằng chứng chưa có tác động bên ngoài.

## Đáp án và giải thích

1. **C.** C tôn trọng lỗi nghiệp vụ. A tìm cách né chính sách; B không thay đổi quyền; D bỏ qua phân loại không retryable và không có nguyên nhân tạm thời để thử lại.

2. **B.** B đáp ứng nhu cầu phổ biến với phạm vi nhỏ và vẫn có đường xử lý phức tạp. A mở rộng công cụ không cần; C thêm chi phí cho tác vụ đơn; D bỏ bước xác minh mà yêu cầu cần.

3. **A, B.** A tạo ranh giới lựa chọn, B tránh cấu hình khác triệt tiêu ranh giới đó. C không bổ sung tín hiệu phân biệt. D xử lý triệu chứng sau tác động, không giải quyết cách chọn công cụ.

4. **D.** D phân biệt lỗi tạm thời và lỗi nghiệp vụ. A cải thiện diễn đạt nhưng không điều phối. B xóa phân loại. C không thay thế tín hiệu từ công cụ về nguyên nhân thực tế.

5. **B, C.** B phù hợp lỗi tạm thời của thao tác đọc; C xử lý trạng thái thực thi chưa biết. A có thể tạo tác động kép. D nhầm không nhận được phản hồi với không thực hiện giao dịch.
