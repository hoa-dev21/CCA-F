# Chọn theo độ trễ được phép

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.5, trang PDF 18–19. Các con số là thông tin của bản đề cương này, cần xác minh khi triển khai dịch vụ. Câu hỏi tự biên soạn.

## Nội dung bài học


Message Batches xử lý một nhóm yêu cầu theo cách bất đồng bộ: gửi trước và nhận kết quả sau. Đề cương đang dùng nêu mức giảm chi phí 50% và thời gian xử lý có thể tới 24 giờ, không bảo đảm trả nhanh. Đây là dữ kiện của bản đề cương, không phải báo giá hoặc cam kết dịch vụ hiện hành đã được xác minh.

Hãy chọn theo hạn hoàn thành trước khi xét giảm giá. Báo cáo qua đêm hoặc kiểm toán tuần có thể chấp nhận chờ. Một bước kiểm tra bắt buộc trước khi hợp nhất mã, khi kỹ sư đang chờ, cần cách xử lý đáp ứng thời gian ngắn hơn.

Dùng `custom_id` để liên kết kết quả với yêu cầu ban đầu; không giả định thứ tự kết quả giống thứ tự gửi. Nếu 8 trong 500 tài liệu lỗi, tìm đúng 8 mục, sửa nguyên nhân rồi gửi lại phần lỗi thay vì chạy lại cả phần đã thành công. Tối ưu prompt trên mẫu trước khi chạy lô lớn cũng giúp giảm chi phí sửa lại.

Một yêu cầu trong batch không tự thực hiện toàn bộ vòng gọi công cụ bên ngoài. Nếu mô hình yêu cầu công cụ, ứng dụng phải chạy công cụ rồi gửi kết quả trở lại qua các bước điều phối phù hợp.

Khi tính hạn, cộng cả thời gian chờ gom lô và xử lý. Theo ví dụ lý thuyết, hạn 30 giờ với xử lý tối đa 24 giờ chỉ còn 6 giờ để chờ gom nếu bỏ qua chi phí khác; lịch gom 4 giờ có thêm khoảng đệm. Vận hành thực tế còn phải tính thử lại và thời gian phụ, không coi phép tính này là cam kết dịch vụ.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A PR merge check needs a response within minutes, while a technical debt report is read tomorrow morning. Which design reduces cost while preserving timing requirements?

A. Batch both tasks for consistent orchestration.

B. Use real-time processing for the merge check and batch the report if its deadline permits.

C. Batch the merge check and poll more often to meet its SLA.

D. Use real-time processing for both because both analyze code.

**Question 2 — Choose one.** A batch of 500 documents has 492 successes and eight failures caused by input limits. Which recovery approach avoids unnecessary work and addresses the cause?

A. Resubmit all 500 documents with new IDs.

B. Resubmit the eight unchanged documents because batch errors are usually temporary.

C. Identify the eight failures by `custom_id`, adjust their inputs, and retry only those items.

D. Mark the eight failures successful with empty results.

**Question 3 — Choose two.** A job submits 200 requests and receives results out of input order. Which TWO designs support correct matching and safe retries?

A. Use stable `custom_id` values to map results to source records.

B. Match by line position because input and output counts are equal.

C. Track item-level status and prevent duplicate writes when results are received again.

D. Assign new IDs on every poll.

**Question 4 — Choose one.** Assume batch processing takes up to 24 hours, the deadline is 30 hours after arrival, and other steps require four hours. What is the maximum collection interval that meets the worst-case deadline?

A. Six hours, because 6 + 24 equals 30.

B. Four hours, leaving two hours after batch processing.

C. Three hours, because the average wait is only 1.5 hours.

D. Two hours, because 2 + 24 + 4 equals 30.

**Question 5 — Choose two.** A batch request returns `tool_use` for an internal tool whose result is needed for the final answer. Which TWO responsibilities remain with the orchestrator?

A. Validate and execute the tool, linking its result to the corresponding request.

B. Treat `tool_use` as proof that the provider executed the tool.

C. Create the next model turn with the tool result in the required protocol.

D. Mark the job permanently failed because a batch cannot return `tool_use`.

## Đáp án và giải thích

1. **B.** B chọn theo yêu cầu thời gian từng tác vụ. A có thể vi phạm gate. C quan sát thường xuyên không làm batch hoàn tất sớm hơn. D có thể chạy được nhưng bỏ qua cơ hội tiết kiệm ở tác vụ chấp nhận chờ.

2. **C.** C giữ phần thành công và sửa lỗi cấu trúc đầu vào. A lặp công việc không cần; B giữ nguyên nguyên nhân; D che mất thất bại khiến downstream tưởng dữ liệu đầy đủ.

3. **A, C.** A không phụ thuộc thứ tự. C giúp xử lý lại mà không tạo tác động trùng. B sai khi đầu ra đổi thứ tự hoặc thiếu mục. D làm mất định danh nghiệp vụ xuyên các lần đọc cùng job.

4. **D.** D tính thời gian chờ tối đa cùng xử lý và dự phòng. A bỏ 4 giờ phụ; B chỉ còn 2 giờ phụ; C dùng trung bình thay cho cam kết worst case và tổng tối đa vẫn 31 giờ.

5. **A, C.** A và C xây vòng tương tác bên ngoài cho client tool. B nhầm đề nghị với thực thi. D coi một trạng thái cần xử lý tiếp là lỗi không phục hồi, trong khi vấn đề là điều phối workflow.
