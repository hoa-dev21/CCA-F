# Tình huống few-shot, false positives và độ trễ batch

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục4.1–4.6, trang PDF16–19. Câu hỏi tự biên soạn.

## Nội dung bài học


Một vài ví dụ có chủ đích (few-shot) giúp làm rõ những trường hợp mà hướng dẫn bằng lời vẫn dễ bị hiểu khác nhau. Chọn cả trường hợp hợp lệ dễ bị cảnh báo sai và trường hợp thực sự cần báo, kèm lý do cùng định dạng kết quả.

Với trích xuất tài liệu, ví dụ nên cho thấy cùng thông tin có thể nằm ở các vị trí khác nhau. Chẳng hạn, tài liệu không có mục “Methodology” nhưng phương pháp nghiên cứu nằm trong phần mở đầu. Có thể minh họa cách tìm và đánh giá lại trên tài liệu mới. Không dùng ví dụ để dạy tự điền khi nguồn thật sự không có thông tin.

Theo dõi cảnh báo sai (false positives) theo nhóm hoặc kiểu lỗi, không chỉ xem điểm trung bình. Nếu nhóm góp ý phong cách quá nhiễu làm kỹ sư bỏ qua cả lỗi bảo mật, có thể tạm tắt nhóm đó, làm rõ tiêu chí báo hoặc bỏ qua rồi kiểm tra trước khi bật lại.

Khi chọn xử lý theo lô (batch), phải xét tổng thời gian chờ gom và thời gian xử lý. Theo tình huống trong đề cương, hạn 30 giờ với xử lý tối đa 24 giờ và chu kỳ gom 4 giờ tạo thời gian tối đa lý thuyết là 28 giờ, còn 2 giờ đệm.

Đây là phép tính chưa gồm thử lại và thời gian phụ. Nó không phải bảo đảm cho hệ thống vận hành thực tế. Batch phù hợp với công việc chấp nhận chờ, không chỉ vì có lợi về chi phí.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An extractor returns `null` for research methods stated in the introduction, but succeeds under a “Methodology” heading. Which improvement addresses the cause?

A. Increase output tokens to allow longer answers.

B. Add few-shot examples of the missed layout and evaluate on new documents.

C. Forbid `null` so the model must fill the field.

D. Train the evaluator to accept `null` more often.

**Question 2 — Choose one.** Comment-style checks cause most false alarms, while security checks are useful. What is the best immediate improvement?

A. Disable all reviews to restore user trust.

B. Raise the severity of every style warning.

C. Disable the noisy category, improve its criteria and examples, and measure before restoring it.

D. Keep the merge gate unchanged and move style warnings to the report's end.

**Question 3 — Choose two.** Assume batch processing takes up to 24 hours and documents have a 30-hour deadline from arrival. The proposed collection interval is four hours. Which TWO conclusions are correct?

A. Worst-case waiting plus processing takes 28 hours before other steps.

B. Every document has at least six hours left for retries.

C. At most two hours remain in the worst case; retries and overhead must also fit.

D. More frequent polling increases the guaranteed buffer to six hours.

**Question 4 — Choose one.** Few-shot examples improve results on the same 20 documents used to design the prompt. What is still needed before claiming production quality gains?

A. Rerun those 20 documents in a different order.

B. Evaluate a held-out set with rare layouts and fixed scoring criteria.

C. Measure JSON parse success on those 20 documents.

D. Use average model confidence as accuracy.

**Question 5 — Choose two.** A 500-document batch has eight failures due to excessive input length and many successes. Which TWO choices reduce retry cost and preserve traceability?

A. Resubmit the entire batch under a new ID.

B. Retry the same eight documents without changing processing.

C. Preserve `custom_id` mappings and per-item status to identify failures.

D. Adjust handling of oversized inputs and resubmit only the items requiring recovery.

## Đáp án và giải thích

1. **B.** B bổ sung dạng bố cục bị thiếu và kiểm tra khả năng tổng quát. A không tạo tín hiệu trích xuất; C khuyến khích điền thiếu căn cứ; D thay thước đo để che lỗi.

2. **C.** C giảm hại có chọn lọc và đặt đường phục hồi có kiểm chứng. A bỏ chức năng hữu ích; B làm nhiễu nghiêm trọng hơn; D chỉ thay hiển thị, không sửa quyết định sai.

3. **A, C.** A tính 4 + 24, C nêu phần ngân sách còn lại. B bỏ thời gian chờ gom. D tần suất quan sát không rút ngắn thời gian xử lý được cam kết.

4. **B.** B kiểm tra tổng quát hóa và tránh đo trên dữ liệu đã tối ưu. A vẫn dùng dữ liệu cũ; C chỉ kiểm tra cấu trúc; D thay nhãn thực bằng tự đánh giá chưa hiệu chỉnh.

5. **C, D.** C xác định phần lỗi và nối lại kết quả, D giải quyết nguyên nhân. A lặp phần đã xong; B giữ nguyên điều kiện thất bại. Retry không thay thế bước chẩn đoán.
