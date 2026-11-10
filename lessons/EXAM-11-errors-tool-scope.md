# Phân loại lỗi và phân phối công cụ theo vai trò

Nguồn: Exam Guide CCAR-F v1.0, mục 2.1–2.3, trang PDF 9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Nội dung bài học

Công cụ có ranh giới mơ hồ dễ bị chọn nhầm. Description cần làm rõ đầu vào, đầu ra, lúc dùng, trường hợp biên và khác biệt với công cụ tương tự. Nếu vẫn misroute, kiểm tra cả system prompt có liên kết từ khóa quá rộng không. Có thể tách công cụ tổng quát thành các chức năng có hợp đồng rõ.

Ví dụ theo mục2.1: đổi `analyze_content` mơ hồ thành `extract_web_results`, mô tả rõ nó nhận kết quả web và trả dữ liệu trích xuất, khác công cụ xử lý tài liệu. Công cụ `analyze_document` ôm nhiều việc có thể tách thành `extract_data_points`, `summarize_content`, `verify_claim_against_source`. Thêm định dạng input và ví dụ truy vấn giúp xác định ranh giới; nếu system prompt nói “có chữ analysis thì dùng analyze_content”, phải sửa quy tắc từ khóa đó cùng với description.

Lỗi cần phân loại: transient có thể phục hồi, validation cần sửa input, permission cần xử lý quyền và business cần giải thích chính sách. Thông tin mô tả lỗi nên có loại, khả năng thử lại và mô tả hữu ích. `isError` trong MCP và `is_error` của tool-result ở API là hai giao diện khác nhau; không mặc định mọi tên trường là chuẩn chung cho mọi SDK.

Ví dụ nội dung dữ liệu gửi đi lỗi do ứng dụng thiết kế trong MCP result có `isError: true`, phần nội dung chứa `errorCategory: "business"`, `isRetryable: false`, mã `REFUND_LIMIT_EXCEEDED` và mô tả dễ hiểu cho khách. Nếu hợp đồng dùng tên `retriable: false` như một ví dụ trong guide, adapter phải ánh xạ nhất quán; các tên thông tin mô tả này không tự là field bắt buộc của MCP. Không trả một câu “Operation failed” cho mọi lỗi: lỗi quá thời gian chờ có thể thử lại giới hạn, validation cần sửa input, permission cần xử lý quyền, business cần luồng được phép. Kết quả tìm kiếm hợp lệ không có bản ghi phải biểu diễn thành công rỗng, khác lỗi không truy cập được nguồn.

Đừng thử lại một vi phạm chính sách chỉ vì đổi lời nhắc. Truy vấn thành công không có kết quả khác lỗi truy cập. Tác nhân con thử phục hồi cục bộ hợp lý trước khi gửi tác nhân điều phối lỗi còn lại và kết quả một phần.

Mỗi tác nhân AI nhận công cụ phù hợp vai trò. Nếu tổng hợp thường cần kiểm tra fact đơn giản, cấp công cụ hẹp cho nhu cầu đó có thể giảm roundtrip; điều tra phức tạp vẫn đi qua tác nhân điều phối. Không vì tiện mà cấp toàn bộ công cụ tìm kiếm/sửa cho mọi tác nhân AI.

Thay `fetch_url` tùy ý bằng `load_document` kiểm tra URL thuộc kho tài liệu được phép là cách thu hẹp capability, không chỉ đổi tên. Nhiều công cụ ngoài chuyên môn làm tăng lựa chọn sai; các con số18 và4–5 trong guide là ví dụ, không phải một ngưỡng tối ưu phổ quát. Với `tool_choice`, `auto` cho mô hình quyết định có dùng công cụ; `any` buộc dùng một công cụ nhưng không chọn đúng tên thay bạn; `{"type":"tool","name":"extract_metadata"}` chọn công cụ cụ thể khi mode hỗ trợ. Thực thi và xác minh thông tin mô tả, trả result rồi mới mở bước enrichment ở lượt sau; ép một công cụ ở lượt đầu không tự cưỡng chế toàn quy trình xử lý nếu host vẫn cho vượt bước.

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
