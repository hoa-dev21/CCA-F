# Gate nghiệp vụ và bàn giao cho con người

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 1.4–1.5 và 5.2, trang PDF 7, 20–21. Câu hỏi tự biên soạn theo mục tiêu thi; không phải bản tóm tắt một video.

## Nội dung bài học


Khi một thao tác chỉ được phép sau khi đạt điều kiện bắt buộc, chương trình phải kiểm tra và chặn nếu điều kiện chưa đạt. Ví dụ: hoàn tiền cần có định danh khách hàng đã xác minh. Chỉ viết “luôn xác minh trước” trong prompt chưa tạo cơ chế bắt buộc.

Hook trước thao tác có thể kiểm tra ngưỡng hoàn tiền và chuyển khoản vượt thẩm quyền cho người phụ trách. Hook sau thao tác có vai trò khác, chẳng hạn chuẩn hóa kết quả để mô hình đọc. Nó không thể ngăn khoản tiền đã được chuyển.

Theo ví dụ của đề cương, `PostToolUse` có thể chuyển thời gian dạng Unix timestamp và ISO 8601 về cùng cách biểu diễn có múi giờ, hoặc đổi mã trạng thái dạng số thành ý nghĩa tương ứng của từng công cụ. Giữ giá trị gốc và nguồn để truy lại; không tự đoán khi chưa rõ đơn vị thời gian hoặc ý nghĩa mã.

Cần chuyển cho người có thẩm quyền khi người dùng yêu cầu gặp người, chính sách thiếu hoặc mơ hồ, hay tác nhân không thể tiến triển có ý nghĩa. Phân biệt hai tình huống:

- “Tôi rất bực vì đơn giao trễ”: ghi nhận sự bực bội và đề nghị giải quyết nếu còn trong khả năng.
- “Đừng xử lý tự động nữa, chuyển tôi cho nhân viên”: chuyển ngay với thông tin đã có, không bắt khách qua thêm một vòng tự động.

Có thể đưa các cặp ví dụ như vậy vào hướng dẫn hệ thống. Không dùng cảm xúc hoặc điểm tự tin do mô hình tự báo làm căn cứ duy nhất để quyết định chuyển cấp.

Nếu có nhiều khách cùng tên, hỏi thêm thông tin định danh thay vì chọn theo phỏng đoán. Nếu chính sách chỉ cho điều chỉnh theo giá của cửa hàng, không tự suy ra được phép áp giá đối thủ.

Thông tin bàn giao cần có mã khách đã xác minh, từng vấn đề, giao dịch liên quan, nguyên nhân đã biết, việc đã thử và hành động đề xuất. Với đề xuất hoàn tiền, nêu số tiền, căn cứ và điều kiện còn thiếu. Người nhận có thể không đọc được lịch sử chat, nên câu “khách cần hỗ trợ” hoặc một đoạn chat dài không được tổng hợp là chưa đủ.

Nếu khách có nhiều vấn đề, tách thành các hạng mục, dùng chung dữ kiện đã xác minh, xử lý song song những nhánh độc lập rồi đưa ra một phương án thống nhất.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A refund bot must verify identity before issuing a refund. Prompt compliance is 99%, but some refunds still skip verification. Which control enforces the requirement?

A. Add three refusal examples to the system prompt and lower temperature.

B. Ask the model to explain verification before calling the tool.

C. Have the executor verify identity for the specific customer and transaction before execution.

D. Check after the transaction and reverse refunds that skipped verification.

**Question 2 — Choose one.** A customer explicitly asks to speak to an employee. The bot could probably solve the issue in 20 seconds, but policy requires honoring transfer requests. What should it do?

A. Transfer the case with the issue summary and verified information.

B. Try solving it first and transfer only if that fails.

C. Require the customer to explain why they want an employee.

D. Ask for another confirmation because automation is available.

**Question 3 — Choose two.** A lookup returns two customers with the same name. The refund request also involves an exception not covered by policy. Which TWO actions address these uncertainties without guessing?

A. Select the customer with the most recent transaction and escalate the exception.

B. Request an allowed additional identifier to distinguish the customers.

C. Apply the closest existing policy provision to avoid waiting.

D. Refer the exception to an authorized person with the relevant facts and unresolved issues.

**Question 4 — Choose one.** A handoff includes the full conversation, but the employee still asks for the order ID, amount, and previous attempts. Which improvement is most useful?

A. Increase the transcript length limit.

B. Add a customer sentiment assessment at the top.

C. Rewrite the entire conversation as polished prose.

D. Provide structured case state: identifiers, verified facts, attempted steps, and pending decisions.

**Question 5 — Choose two.** A customer was verified for order A, then switches to order B and increases the refund amount. Which TWO conditions must be checked again before execution?

A. The relationship between the verified person, the transaction, and the authority to act.

B. Policy limits for the new amount and current transaction status.

C. The politeness of the model's approval message.

D. Whether a refund tool call succeeded earlier in the session.

## Đáp án và giải thích

1. **C.** C đặt bất biến tại điểm thực thi. A và B cải thiện hành vi nhưng không cưỡng chế điều kiện. D phát hiện sau tác động; hoàn tác có thể không khả dụng hoặc thất bại.

2. **A.** A thực hiện tiêu chí chuyển người đã đủ. B ưu tiên tối ưu vận hành hơn yêu cầu rõ ràng. C và D tạo trở ngại không được chính sách yêu cầu và bắt khách lặp lại ý muốn.

3. **B, D.** B giải quyết thiếu định danh; D giải quyết thiếu thẩm quyền/quy tắc. A vẫn có thể chọn nhầm người dù ngoại lệ được duyệt. C tự mở rộng chính sách khi chưa có căn cứ.

4. **D.** D giúp người nhận hành động và thấy trạng thái xác minh. A không giải quyết khả năng tìm dữ kiện; B không thay thế dữ liệu nghiệp vụ; C dễ mất định danh hoặc mức chắc chắn trong quá trình tóm tắt.

5. **A, B.** A ngăn tái dùng xác minh sai phạm vi; B kiểm tra điều kiện trên yêu cầu mới. C không chứng minh quyền hay điều kiện. D chỉ là lịch sử thực thi, không cấp quyền cho giao dịch khác.
