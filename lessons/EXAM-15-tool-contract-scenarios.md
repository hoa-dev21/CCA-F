# Tình huống tool contract, lỗi và lựa chọn công cụ

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục2.1–2.5, trang PDF9–11. Bài bổ trợ và câu hỏi tự biên soạn.

## Tóm tắt

Mô tả tool phải phân biệt được mục đích, input/output và trường hợp biên; sửa description cùng quy tắc system prompt gây liên kết từ khóa sai. Tool có schema chặt nhưng tên/mô tả mơ hồ vẫn có thể bị chọn nhầm.

Tool selection, thực thi và quyền là ba phần riêng. `any` yêu cầu dùng tool nhưng không ép đúng tool cụ thể; forced selection theo tên cần phối hợp với mã host và các lượt tiếp theo để thực hiện đúng thứ tự. Cấp tool theo vai trò và thay capability rộng bằng công cụ hẹp có validation thật.

Lỗi MCP cần `isError` cùng metadata ứng dụng đủ để chọn cách phục hồi. Một payload chỉ nói “failed” không phân biệt được timeout với chính sách cấm. Truy vấn thành công nhưng không có dữ liệu phải giữ nghĩa rỗng hợp lệ. Với codebase có wrappers, tìm tên export rồi tìm cả các tên đó để theo caller, không chỉ grep tên hàm gốc một lần.

## Câu hỏi

**1. Chọn một.** Enrichment cần metadata đã kiểm tra. Cấu hình `tool_choice="any"` với cả hai tool khiến model đôi lúc gọi enrichment trước. Sửa phù hợp nhất?

A. Chỉ đổi description enrichment thành chữ hoa.

B. Ép tool metadata ở lượt đầu, host thực thi/kiểm tra rồi mở bước tiếp theo và gửi kết quả.

C. Giữ any và coi mọi tool call là đúng thứ tự.

D. Chạy enrichment trước với metadata do host đoán.

**2. Chọn hai.** Hệ thống trả cùng “Operation failed” cho timeout và hoàn tiền bị cấm. Cần thay đổi gì?

A. Trả category, khả năng retry và mô tả có thể hành động, đánh dấu lỗi đúng giao diện MCP.

B. Đánh dấu cả hai là kết quả thành công rỗng.

C. Retry chính sách cấm đến khi model đổi quyết định.

D. Retry timeout có giới hạn; giải thích/chuyển luồng được phép cho business error không retry.

**3. Chọn một.** Hàm `fetchRecord` được tái export qua wrapper dưới hai tên; grep tên gốc chỉ thấy một caller. Bước phù hợp nhất?

A. Kết luận không còn caller nào khác.

B. Đọc mọi file toàn repo vào một prompt.

C. Xác định các tên export/alias của wrapper, tìm từng tên rồi đọc luồng liên quan.

D. Đổi tên hàm mà không kiểm tra imports.

## Đáp án

1. **B.** A không cưỡng chế; C nhầm any với forced-name; D bỏ tiền điều kiện và có thể dùng dữ liệu bịa.

2. **A, D.** B che lỗi truy cập/chính sách thành rỗng hợp lệ; C không thay đổi quy tắc nghiệp vụ và lãng phí retry.

3. **C.** A bỏ alias; B gây tải context không có mục tiêu; D có thể làm hỏng các caller chưa phát hiện.
