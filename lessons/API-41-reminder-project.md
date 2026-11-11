# Thiết kế hệ thống nhắc việc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287751), sources/api-lessons/287751.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Ví dụ nhắc việc giúp phân biệt một câu trả lời với một hành động đã thực hiện. Để tạo lời nhắc, hệ thống cần lấy thời gian hiện tại, tính thời điểm cần nhắc và ghi lời nhắc vào nơi quản lý.

Claude nói “Tôi sẽ nhắc bạn” chưa tạo ra bản ghi nào. Ứng dụng phải thực hiện thao tác và kiểm tra kết quả trước khi xác nhận với người dùng.

Ví dụ: Người dùng muốn được nhắc sau ba ngày. Nếu cách tính cần mốc hiện tại, hệ thống phải lấy mốc đó trước, chuyển nó cho bước tính toán, rồi dùng thời điểm đã tính để tạo lời nhắc. Công cụ tính thời gian giúp thực hiện phép tính chuyên biệt thay vì chỉ dựa vào câu trả lời tự do của mô hình.

Các công cụ cần có đầu vào và kết quả rõ để phối hợp và kiểm tra từng bước. Những điểm như múi giờ hoặc cách hiểu một ngày mơ hồ cần được quy định hoặc hỏi lại theo yêu cầu ứng dụng; không nên mặc định mô hình tự biết mọi trạng thái môi trường.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Date calculation and reminder creation run concurrently; creation uses the current time before calculation finishes. What is the correct fix?

A. Keep parallel execution and revise after confirmation.

B. Wait for the calculated target, validate it, and pass it to creation.

C. Guess the target and use calculation only for comparison.

D. Repeat both calls until their results coincide.

**Question 2 — Choose one.** Reminder storage fails after Claude has already said “created.” What should the application do?

A. Treat the promise as a backup reminder.

B. Log the failure but report success.

C. Report the write failure and handle the backend error.

D. Keep the claim because the calculated time was correct.

**Question 3 — Choose two.** A traveling user asks for Monday-morning delivery without specifying a timezone. Which TWO steps are needed before confirmation?

A. Use an established application timezone rule or ask if none exists.

B. Always use the server's timezone.

C. Infer timezone from the user's language.

D. Confirm creation through the reminder system.

**Question 4 — Choose one.** Which test catches coordination errors missed by separate time, arithmetic, and storage unit tests?

A. Ask the model to explain all tools.

B. Check that all names appear in the system prompt.

C. Test calculation, writing, and confirmation based on the actual write result.

D. Verify each function separately returns something.

**Question 5 — Choose two.** A saved reminder is one day wrong. Which TWO evidence sets best locate the failure?

A. Only Claude's final confirmation.

B. Only total token usage.

C. The calculated target and the value actually stored.

D. Current time, timezone, and arguments passed to calculation.

## Đáp án và giải thích

1. **B.** A sai: Xác nhận trước dễ báo một hành động chưa đúng. B đúng: Đây là phụ thuộc dữ liệu, không thể bỏ để song song hóa. C sai: Bỏ qua kết quả chuyên biệt đang cần cho thao tác. D sai: Thử lại không sửa sai thứ tự phụ thuộc.

2. **C.** A sai: Nội dung chat không phải hệ thống quản lý lời nhắc. B sai: Che lỗi khiến người dùng dựa vào hành động chưa xảy ra. C đúng: Lời xác nhận phải theo trạng thái thực tế. D sai: Đúng thời gian không chứng minh có bản ghi.

3. **A, D.** A đúng: Mốc thời gian phải có ý nghĩa xác định. B sai: Vị trí xử lý không xác định ý định người dùng. C sai: Ngôn ngữ không đủ chứng minh múi giờ. D đúng: Phải kiểm chứng tác động ghi dữ liệu.

4. **C.** A sai: Giải thích không kiểm chứng luồng thực thi. B sai: Khả năng nhìn thấy không chứng minh thứ tự và truyền dữ liệu. C đúng: Đánh giá hợp đồng giữa các bước và trạng thái cuối. D sai: Không chứng minh chúng được nối đúng.

5. **C, D.** A sai: Không cho thấy các giá trị ở ranh giới bước. B sai: Không xác định dữ liệu thời gian đã truyền. C đúng: Cho phép phân biệt lỗi tính với lỗi chuyển/ghi. D đúng: Cho phép kiểm tra đầu vào phép tính.

## Đối chiếu Vertex

Dự án chia thành lấy thời gian, cộng khoảng thời gian và tạo lời nhắc; cần làm rõ múi giờ và các cách hiểu mơ hồ. Phần giới thiệu nói tới thông báo theo lịch, nhưng mã ở bài 289185 chỉ in kết quả để minh họa. Vì vậy chưa thể khẳng định lời nhắc thật đã được tạo. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project overview](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289175). Bản lưu: `sources/vertex-lessons/289175.json`.
