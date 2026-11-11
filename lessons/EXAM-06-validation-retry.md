# Validation và retry có phản hồi lỗi

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.4, trang PDF 18. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi dữ liệu trích xuất không qua kiểm tra, yêu cầu sửa nên chứa tài liệu gốc, kết quả đang sai và lỗi cụ thể. “Làm lại cho đúng” ít hữu ích hơn việc chỉ ra trường nào sai hoặc các giá trị nào không khớp.

Thử lại phù hợp khi mô hình có thể sửa từ dữ liệu đã nhận, chẳng hạn đặt nhầm trường hoặc đổi sai định dạng ngày. Nếu ngày hiệu lực chỉ nằm trong phụ lục chưa được cung cấp, gửi lại cùng đầu vào nhiều lần không bổ sung bằng chứng. Cần lấy phụ lục, biểu diễn dữ liệu còn thiếu hoặc chuyển người kiểm tra theo quy trình.

Phân biệt kiểm tra cấu trúc với kiểm tra ý nghĩa. JSON đúng và đủ trường chưa chứng minh tổng tiền chính xác hay từng trường lấy đúng từ nguồn. Chế độ kiểm tra nghiêm ngặt được hỗ trợ có thể giảm lỗi cấu trúc; mã nghiệp vụ vẫn phải kiểm tra quan hệ giữa các giá trị.

Ví dụ: Các dòng hàng cộng thành 120 nhưng hóa đơn ghi tổng 125. Giữ `stated_total` là tổng ghi trên nguồn và `calculated_total` là tổng được tính, kèm `conflict_detected` để đánh dấu có xung đột. Giữ cả cách tính và nguồn để người duyệt kiểm tra; không tự sửa một số cho bằng số còn lại chỉ để vượt kiểm tra.

Trong hệ thống rà soát mã, trường `detected_pattern` có thể ghi loại vấn đề phát hiện được. Phân tích những loại thường bị người dùng bác bỏ giúp sửa prompt đúng chỗ, thay vì thay đổi toàn bộ cách chấm một cách mơ hồ.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Extraction puts the signing date into the effective-date field, although both dates appear in the document. Which retry request most directly addresses the error?

A. Send the same schema with “be more careful.”

B. Send only the incorrect JSON and ask for a different date.

C. Send the source, incorrect JSON, and the rule distinguishing the two dates.

D. Repeat the original prompt more often and use the majority result.

**Question 2 — Choose one.** The effective date is defined in a missing appendix. Three retries produce three different dates. What is the best next step?

A. Choose the most frequently returned date.

B. Obtain the appendix or return the contract-defined missing-data or review state.

C. Use the signing date because it appears in the available document.

D. Keep retrying until confidence exceeds the threshold.

**Question 3 — Choose two.** An invoice states a total of 1,000, but its line items sum to 950. It is unclear whether a line is missing or the source is wrong. Which TWO items should be preserved?

A. The stated and calculated totals in distinct fields.

B. Only 950 because arithmetic is deterministic.

C. The conflict status and relevant source locations.

D. 975 as a temporary compromise.

**Question 4 — Choose one.** Every retry produces valid JSON with the same business-rule violation. Which design prevents infinite retries and supports investigation?

A. Disable the validator after the third failure.

B. Set a timeout and report success with the final JSON.

C. Replace every invalid value with `null`, even when the schema does not allow it.

D. Limit retries, retain diagnostics, and obtain more evidence or escalate for review.

**Question 5 — Choose two.** A validator finds a missing order number and conflicting invoice totals. Which TWO retry instructions help without encouraging changes to the evidence?

A. Generate an order number using the supplier's usual pattern.

B. Identify the missing field, include available sources, and allow the contract-defined missing state.

C. Adjust line items until they match the stated total.

D. Preserve the stated and calculated totals and flag the unresolved conflict.

## Đáp án và giải thích

1. **C.** C cung cấp nguồn và chẩn đoán cụ thể. A không chỉ ra sai lệch; B thiếu căn cứ chọn ngày; D lặp lại điều kiện gây nhầm và đa số không bảo đảm đúng.

2. **B.** B bổ sung bằng chứng hoặc biểu diễn đúng giới hạn. A bỏ phiếu trên suy đoán; C thay một khái niệm bằng khái niệm khác; D không khắc phục thiếu nguồn.

3. **A, C.** A giữ hai quan sát, C làm downstream biết phải xử lý mâu thuẫn. B chọn bên đúng khi chưa đủ thông tin; D tạo số không có cơ sở kế toán.

4. **D.** D giới hạn chi phí và giữ trạng thái thất bại có thể hành động. A bỏ kiểm soát; B nhầm parse được với đạt yêu cầu; C làm mất ý nghĩa hợp đồng và bằng chứng.

5. **B, D.** B cho phép báo thiếu trung thực; D bảo toàn bất đồng. A tạo định danh không có nguồn; C thay dữ liệu để vượt validation, che lỗi mà bước kiểm tra cần phát hiện.
