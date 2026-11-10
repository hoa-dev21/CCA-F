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

## Câu hỏi

**1. Chọn một.** Công cụ từ chối vì hoàn tiền vượt chính sách và trả lỗi không thử lại. Cách phù hợp?

A. Đổi prompt rồi gửi lại vô hạn.

B. Giải thích giới hạn và chuyển luồng được phép/escalation theo chính sách.

C. Đánh dấu thành công rỗng.

D. Giảm số tiền trong dữ liệu nguồn mà không hỏi.

**2. Chọn một.** Tác nhân AI tổng hợp thường cần tra một ngày đơn giản; điều tra sâu ít gặp. Thiết kế phù hợp nhất?

A. Cho mọi quyền của tác nhân AI web, kể cả chỉnh dữ liệu.

B. Cấm kiểm tra fact trong mọi trường hợp.

C. Công cụ verify_fact hẹp cho trường hợp phổ biến; luồng sâu qua tác nhân điều phối.

D. Đoán ngày để tránh roundtrip.

**3. Chọn một.** Hai công cụ có bản mô tả cấu trúc dữ liệu khác nhau nhưng description gần hệt khiến chọn sai. Cần làm gì?

A. Làm rõ ranh giới/tên/description và rà system prompt liên quan.

B. Chỉ tăng max_tokens.

C. Chỉ thêm các công cụ không liên quan.

D. Bỏ thông tin mô tả lỗi.

## Đáp án

1. **B.** A không thay chính sách; C che lỗi; D sửa dữ liệu trái căn cứ.
2. **C.** A cấp quyền vượt vai trò; B làm luồng kém hiệu quả; D bịa dữ kiện.
3. **A.** B không sửa lựa chọn; C tăng nhiễu; D bỏ tín hiệu phục hồi.
