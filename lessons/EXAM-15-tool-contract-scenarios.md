# Tình huống tool contract, lỗi và lựa chọn công cụ

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục2.1–2.5, trang PDF9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Nội dung bài học


Một công cụ có schema chặt vẫn có thể bị chọn nhầm nếu tên và mô tả không rõ. Cần mô tả mục đích, đầu vào, đầu ra, trường hợp dễ nhầm và sửa cả quy tắc chọn công cụ theo từ khóa sai trong hướng dẫn hệ thống.

Phân biệt ba việc: mô hình chọn công cụ nào, ứng dụng có quyền thực hiện hay không và ứng dụng thực hiện thế nào. `tool_choice="any"` yêu cầu gọi một công cụ nhưng không ép một tên cụ thể.

Ví dụ: Bước bổ sung dữ liệu chỉ được chạy sau khi thông tin mô tả đã kiểm tra. Hãy ép công cụ trích thông tin mô tả ở lượt đầu, để ứng dụng chạy và xác minh kết quả, gửi kết quả lại rồi mới cho phép bước tiếp theo. Mã điều phối phải thực hiện thứ tự này; cấu hình chọn công cụ không tự bảo đảm toàn quy trình.

Lỗi MCP cần được đánh dấu bằng `isError` và có nội dung đủ để chọn cách xử lý: loại lỗi, có thể thử lại không và mô tả cụ thể. Lỗi hết thời gian chờ có thể thử lại trong giới hạn; hoàn tiền bị chính sách cấm cần giải thích hoặc chuyển cấp. Kết quả tìm kiếm thành công nhưng rỗng vẫn phải được phân biệt với lỗi truy cập.

Cấp công cụ phù hợp vai trò và thu hẹp khả năng bằng kiểm tra thật. Khi tìm nơi gọi hàm trong mã có lớp trung gian (wrapper), xác định cả các tên xuất ra hoặc bí danh rồi tìm từng tên. Chỉ tìm tên hàm gốc một lần có thể bỏ sót nơi gọi qua tên khác.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Metadata phải được host kiểm tra trước khi enrichment gọi dịch vụ tính phí. tool_choice=any cho phép chọn cả hai. Thay đổi nào bảo đảm tiền điều kiện mà không chỉ dựa vào lời nhắc?

A. Đặt metadata trước enrichment trong danh sách tools.

B. Ép metadata; host kiểm tra đạt mới cho enrichment chạy.

C. Dùng ví dụ enrichment sau metadata và giữ nguyên executor.

D. Cho chạy song song rồi bỏ enrichment nếu metadata lỗi.

**Câu 2 — Chọn hai.** MCP tool dùng cùng “Operation failed” cho timeout tra cứu và hoàn tiền bị cấm. Hai thay đổi nào giúp điều phối đúng?

A. Trả loại lỗi, retryability và thông tin có thể hành động, dùng trạng thái lỗi đúng giao diện.

B. Chuyển mọi lỗi thành kết quả rỗng để mô hình tiếp tục tổng hợp.

C. Retry timeout có giới hạn; đưa lỗi chính sách sang luồng được phép.

D. Retry tất cả lỗi một lần rồi mới đọc phân loại để đơn giản code.

**Câu 3 — Chọn một.** fetchRecord được re-export thành loadCustomer và getAccount; grep fetchRecord chỉ thấy một caller. Trước khi đổi tham số, cần làm gì?

A. Đổi caller tìm được và coi các wrapper không gọi trực tiếp là không ảnh hưởng.

B. Tìm mọi file có chữ customer rồi đổi chữ ký hàng loạt.

C. Dùng số kết quả grep làm ước lượng phạm vi và tăng test ngẫu nhiên.

D. Truy alias/export, đọc wrapper và kiểm tra caller của từng tên liên quan.

**Câu 4 — Chọn một.** Tool schema xác nhận amount là số dương; mô hình yêu cầu hoàn 700 USD cho giao dịch cho phép tối đa 500 USD. Host nên dựa vào đâu để từ chối?

A. Schema đúng nên cho chạy rồi kiểm tra phản hồi dịch vụ.

B. Yêu cầu mô hình tự sửa thành 500 USD mà không xác nhận lại ý định.

C. Kiểm tra quy tắc nghiệp vụ trước thực thi và trả lỗi có hướng chuyển cấp.

D. Chia thành hai lần gọi 350 USD để cả hai đều nằm trong ngưỡng.

**Câu 5 — Chọn hai.** Một tool trả lỗi tạm thời sau khi có kết quả một phần. Hai thông tin nào cần giữ trong hợp đồng kết quả?

A. Phần dữ liệu đã có với nguồn/phạm vi rõ.

B. Dấu thành công tổng thể vì ít nhất một phần có dữ liệu.

C. Chỉ lỗi, bỏ phần đã có để đồng nhất kiểu trả về.

D. Trạng thái chưa đầy đủ, nguyên nhân và khả năng phục hồi.

## Đáp án và giải thích

1. **B.** B đặt cổng chuyển trạng thái và kiểm tra thực tế. A/C có thể định hướng nhưng không cưỡng chế. D vẫn gọi dịch vụ tính phí trước khi biết tiền điều kiện đạt.

2. **A, C.** A giữ tín hiệu cần cho điều phối; C dùng đúng tín hiệu đó. B biến lỗi thành dữ liệu thiếu và che nguyên nhân. D bỏ qua việc lỗi nghiệp vụ không thay đổi chỉ bằng retry.

3. **D.** D lần theo quan hệ thật. A bỏ ảnh hưởng qua wrapper; B tìm rộng nhưng không xác định đúng quan hệ; C số lần xuất hiện chuỗi không đo đủ độ bao phủ của ký hiệu.

4. **C.** C phân biệt schema với chính sách giao dịch. A đặt gate quá muộn; B thay đổi yêu cầu nghiệp vụ; D né giới hạn thay vì tuân thủ ý nghĩa của nó.

5. **A, D.** A giúp dùng lại phần hợp lệ; D ngăn downstream tưởng toàn bộ nhiệm vụ đã xong. B che phạm vi thiếu. C có thể làm mất công việc hữu ích và buộc chạy lại không cần thiết.
