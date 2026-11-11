# Ứng dụng thực thi vòng công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276805), sources/bedrock-lessons/276805.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use dùng cùng nguyên tắc vòng gọi công cụ: gửi mục tiêu và định nghĩa công cụ cho mô hình, nhận yêu cầu thao tác, để ứng dụng thực hiện trong môi trường máy tính rồi gửi kết quả trở lại. Mô hình quan sát kết quả để quyết định bước tiếp theo.

Bản mô tả công cụ chỉ cho biết khả năng và đầu vào. Nó không tự tạo môi trường máy tính hoặc chạy chuột, bàn phím. Mẫu triển khai trong bài dùng Docker, Firefox và mã điều khiển các thao tác này.

AWS profile là cấu hình của mẫu dùng Bedrock, không phải yêu cầu chung cho mọi cách triển khai Computer Use. Trước khi thực hành, cần kiểm tra mô hình, công cụ và nhà cung cấp có tương thích với nhau không.

Giữ mã liên kết giữa lời gọi và kết quả, báo rõ lỗi thực thi và quan sát lại màn hình sau thao tác. Ví dụ: nếu bộ thực thi không tìm được màn hình, phải gửi lỗi để có thể xử lý tiếp, không giả vờ đã bấm thành công.

Đặt giới hạn số bước, thời gian, điều kiện thành công và cách thoát hoặc chuyển xử lý khi lỗi. Lặp lại thao tác bấm mà trang không đổi cần được chẩn đoán, không tiếp tục vô hạn.

## Tự kiểm tra

**Question 1 — Choose one.** The application advertises a mouse tool but has no computer-control process. The model requests a click. What is missing?

A. A longer description enabling model-side execution.

B. An AWS profile for every provider.

C. An assistant confirmation that the click occurred.

D. An executor performing actions and returning results and observations.

**Question 2 — Choose two.** A Save click and screenshot have separate IDs, but the screenshot is returned under the click ID. Which TWO corrections are needed?

A. Observe post-action state before inferring save success.

B. Preserve each call's correct result correlation.

C. Attach all results to the last call.

D. Discard IDs because array order suffices asynchronously.

**Question 3 — Choose one.** Three clicks at the same coordinates change nothing; ten steps are permitted. What should happen next?

A. Randomize coordinates until something changes.

B. Inspect state, tool errors, and the objective before retrying.

C. Click seven more times and claim success after budget exhaustion.

D. Automatically expand the budget because the schema is valid.

**Question 4 — Choose two.** Which TWO checks precede moving a computer-use sample from Bedrock to another provider?

A. Change only the endpoint because tool contracts are universal.

B. Require an AWS profile everywhere.

C. Verify executor, observation environment, and error reporting.

D. Verify model and tool-interface compatibility with the new provider.

**Question 5 — Choose one.** The executor cannot capture a screen after a click. How should the host respond?

A. Return an old screenshot as successful.

B. Omit the failure and continue.

C. Return a blank image as a genuine observation.

D. Return a correctly linked error for recovery or stopping.

## Đáp án và giải thích

1. **D.** D hoàn tất phía host và phản hồi. A nhầm khai báo với thực thi; B biến cấu hình mẫu thành yêu cầu chung; C tạo xác nhận không có hành động.

2. **A, B.** B giữ hợp đồng vòng công cụ; A kiểm chứng tác động. D dễ nhầm khi kết quả về khác thứ tự; C làm mất quan hệ giữa hành động và bằng chứng.

3. **B.** B sử dụng phản hồi để điều chỉnh. C nhầm giới hạn với thành công; D tránh ràng buộc thay vì xử lý lỗi; A tạo tác động không gắn với mục tiêu.

4. **C, D.** D kiểm tra hợp đồng dịch vụ; C kiểm tra phía thực thi. B là chi tiết mẫu Bedrock, không phải bản chất Computer Use; A giả định tương thích chưa được xác minh.

5. **D.** D giữ trạng thái trung thực và khả năng phục hồi. A dùng bằng chứng lỗi thời; B mất thông tin cần chẩn đoán; C đúng định dạng nhưng sai nghĩa.

## Đối chiếu phụ đề chính thức

Computer Use dùng định nghĩa, yêu cầu và kết quả công cụ theo cùng nguyên tắc tool use. Ứng dụng phải cung cấp môi trường thao tác chuột, bàn phím và trả phản hồi. Mẫu Docker là một cách triển khai; schema không tự tạo môi trường máy tính hoặc bảo đảm an toàn tuyệt đối. Dùng chung câu hỏi.

Nguồn đối chiếu: [How computer use works](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289234). Bản lưu: `sources/vertex-media/289234.json`.
