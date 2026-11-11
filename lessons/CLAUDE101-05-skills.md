# Working with skills

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383396), sources/claude101-lessons/383396.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Skill là một bộ hướng dẫn và tài nguyên giúp AI thực hiện một loại công việc cụ thể. Bộ này có thể chứa các bước xử lý, ví dụ, tiêu chí đầu ra và mã lệnh hỗ trợ. Trong cách dùng được bài giới thiệu, hướng dẫn được nạp khi phù hợp với nhiệm vụ, giúp bạn bớt phải nhắc lại từng bước.

Ví dụ: Nếu tháng nào bạn cũng làm báo cáo, một skill có thể hướng dẫn cách đọc dữ liệu, tính các chỉ số và trình bày kết quả theo mẫu. Để tạo skill hữu ích, cần mô tả quy trình rõ ràng, đưa ví dụ và cải tiến sau khi thử với công việc thật.

Projects và Skills có vai trò khác nhau nhưng có thể phối hợp. Project cung cấp tài liệu và bối cảnh của công việc; skill hướng dẫn cách thực hiện. Một skill viết báo cáo có thể sử dụng tài liệu đang lưu trong project.

Trước khi dùng skill từ bên ngoài, hãy xem nguồn và nội dung, nhất là mã lệnh đi kèm. Khi Claude tạo tệp từ tài liệu bạn tải lên, đừng mặc định rằng tệp gốc trên máy đã được sửa. Hãy kiểm tra tệp đầu ra và lưu đúng phiên bản. Cách bật và phạm vi hỗ trợ skill có thể thay đổi theo sản phẩm.

## Tự kiểm tra

**Question 1 — Choose one.** Monthly reports follow one process but use different customers and data. What belongs in a skill?

A. The first report copied forever.

B. Automatic access to every customer source.

C. “Write well” plus all past chats.

D. Reusable procedures, criteria, and examples, with data supplied at runtime.

**Question 2 — Choose two.** An external skill sends data to an unfamiliar service. Which TWO actions precede company use?

A. Assess required data and permissions against task scope.

B. Inspect provenance, instructions, and supporting-code behavior.

C. Run it immediately on real data.

D. Use attractive sample reports instead of checking data transmission.

**Question 3 — Choose one.** A skill produces a report file, but the user's original local file is unchanged. What is correct?

A. Reupload the original and assume local overwrite.

B. Inspect the artifact and save step; a new file does not necessarily update the original.

C. Save elsewhere and mark the original updated.

D. Assume identical filenames imply synchronization.

**Question 4 — Choose two.** Which TWO roles correctly divide Projects and reporting skills?

A. Project descriptions replace calculations.

B. Skills automatically contain every customer's latest data.

C. Skills provide reusable processing and presentation procedures.

D. Projects provide relevant documents and context.

**Question 5 — Choose one.** A skill works on a complete example but fails when a column is missing. What improves it?

A. Add more complete examples without defining missing-data handling.

B. Invent common values for absent columns.

C. Retry unchanged inputs.

D. Define missing-data behavior and test realistic boundary cases.

## Đáp án và giải thích

1. **D.** D đóng gói cách làm có thể dùng lại. A nhầm ví dụ với dữ liệu mới; B suy quyền từ hướng dẫn; C thiếu quy trình và tiêu chí cụ thể.

2. **A, B.** B xem hành vi mã và nguồn của skill; A kiểm soát phạm vi dữ liệu/quyền. D đánh giá chất lượng báo cáo nhưng không xác định dữ liệu được gửi đi đâu và việc gửi đó có phù hợp không. C biến dữ liệu thật thành phép thử trước kiểm tra.

3. **B.** B phân biệt tạo artifact với ghi vào đường dẫn gốc và kiểm tra đúng bước lưu. A gửi lại dữ liệu nguồn không đưa kết quả về bản local. C lưu bản mới ở nơi khác chưa cập nhật file gốc. D trùng tên không chứng minh có cơ chế đồng bộ hay thao tác ghi đè.

4. **C, D.** D và C bổ sung cho nhau. B nhầm hướng dẫn với dữ liệu cập nhật; A nhầm mô tả tổ chức với quy trình thực hiện.

5. **D.** D làm rõ hợp đồng thiếu dữ liệu và kiểm chứng trường hợp biên. A chỉ củng cố happy path đã hoạt động. B tự tạo dữ liệu không có căn cứ để vượt yêu cầu hình thức. C thử lại không sửa việc hướng dẫn chưa định nghĩa trường hợp thiếu cột.
