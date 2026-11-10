# Tình huống tool contract, lỗi và lựa chọn công cụ

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục2.1–2.5, trang PDF9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Nội dung bài học


Một công cụ có schema chặt vẫn có thể bị chọn nhầm nếu tên và mô tả không rõ. Cần mô tả mục đích, đầu vào, đầu ra, trường hợp dễ nhầm và sửa cả quy tắc chọn công cụ theo từ khóa sai trong hướng dẫn hệ thống.

Phân biệt ba việc: mô hình chọn công cụ nào, ứng dụng có quyền thực hiện hay không và ứng dụng thực hiện thế nào. `tool_choice="any"` yêu cầu gọi một công cụ nhưng không ép một tên cụ thể.

Ví dụ: Bước bổ sung dữ liệu chỉ được chạy sau khi thông tin mô tả đã kiểm tra. Hãy ép công cụ trích thông tin mô tả ở lượt đầu, để ứng dụng chạy và xác minh kết quả, gửi kết quả lại rồi mới cho phép bước tiếp theo. Mã điều phối phải thực hiện thứ tự này; cấu hình chọn công cụ không tự bảo đảm toàn quy trình.

Lỗi MCP cần được đánh dấu bằng `isError` và có nội dung đủ để chọn cách xử lý: loại lỗi, có thể thử lại không và mô tả cụ thể. Lỗi hết thời gian chờ có thể thử lại trong giới hạn; hoàn tiền bị chính sách cấm cần giải thích hoặc chuyển cấp. Kết quả tìm kiếm thành công nhưng rỗng vẫn phải được phân biệt với lỗi truy cập.

Cấp công cụ phù hợp vai trò và thu hẹp khả năng bằng kiểm tra thật. Khi tìm nơi gọi hàm trong mã có lớp trung gian (wrapper), xác định cả các tên xuất ra hoặc bí danh rồi tìm từng tên. Chỉ tìm tên hàm gốc một lần có thể bỏ sót nơi gọi qua tên khác.

## Câu hỏi

**1. Chọn một.** Enrichment cần thông tin mô tả đã kiểm tra. Cấu hình `tool_choice="any"` với cả hai công cụ khiến mô hình đôi lúc gọi enrichment trước. Sửa phù hợp nhất?

A. Chỉ đổi description enrichment thành chữ hoa.

B. Ép công cụ thông tin mô tả ở lượt đầu, host thực thi/kiểm tra rồi mở bước tiếp theo và gửi kết quả.

C. Giữ any và coi mọi công cụ call là đúng thứ tự.

D. Chạy enrichment trước với thông tin mô tả do host đoán.

**2. Chọn hai.** Hệ thống trả cùng “Operation failed” cho lỗi quá thời gian chờ và hoàn tiền bị cấm. Cần thay đổi gì?

A. Trả category, khả năng thử lại và mô tả có thể hành động, đánh dấu lỗi đúng giao diện MCP.

B. Đánh dấu cả hai là kết quả thành công rỗng.

C. Thử lại chính sách cấm đến khi mô hình đổi quyết định.

D. Thử lại lỗi quá thời gian chờ có giới hạn; giải thích/chuyển luồng được phép cho business error không thử lại.

**3. Chọn một.** Hàm `fetchRecord` được tái export qua wrapper dưới hai tên; grep tên gốc chỉ thấy một caller. Bước phù hợp nhất?

A. Kết luận không còn caller nào khác.

B. Đọc mọi file toàn repo vào một prompt.

C. Xác định các tên export/alias của wrapper, tìm từng tên rồi đọc luồng liên quan.

D. Đổi tên hàm mà không kiểm tra imports.

## Đáp án

1. **B.** A không cưỡng chế; C nhầm any với forced-name; D bỏ tiền điều kiện và có thể dùng dữ liệu bịa.

2. **A, D.** B che lỗi truy cập/chính sách thành rỗng hợp lệ; C không thay đổi quy tắc nghiệp vụ và lãng phí thử lại.

3. **C.** A bỏ alias; B gây tải ngữ cảnh không có mục tiêu; D có thể làm hỏng các caller chưa phát hiện.
