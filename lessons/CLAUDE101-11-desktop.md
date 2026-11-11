# How you’ll work with Claude on your desktop

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/440908), sources/claude101-lessons/440908.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài học phân biệt ba cách làm việc trên ứng dụng máy tính: trao đổi từng lượt trong Chat, giao nhiệm vụ nhiều bước trong Cowork và phát triển phần mềm với Code.

- Chat phù hợp khi bạn cần trao đổi liên tục. Ví dụ: cùng AI nghĩ ý tưởng, nhận xét từng phương án rồi đặt câu hỏi tiếp.
- Cowork phù hợp với việc có đầu ra rõ, cần nhiều bước hoặc nhiều nguồn thông tin. Bạn giao nhiệm vụ trong phạm vi cụ thể rồi xem xét kế hoạch và kết quả.
- Code phù hợp khi cần đọc và sửa mã trong dự án, sau đó chạy kiểm thử trong môi trường phát triển.

Hãy chọn theo thao tác cần thực hiện. Với mọi cách làm, bạn vẫn cần đặt phạm vi và kiểm tra kết quả phù hợp với mức tự chủ đã giao cho AI.

Cũng cần biết công việc chạy trên máy cá nhân hay trên hệ thống đám mây. Nếu nhiệm vụ phụ thuộc vào tệp chỉ có trên máy của bạn, đừng mặc định rằng nó vẫn chạy được khi máy tắt. Hãy kiểm tra nơi chạy và cách truy cập dữ liệu. Tính năng và giao diện có thể thay đổi; chi tiết thao tác điều khiển máy tính không phải trọng tâm đề cương Architect đã lưu.

## Tự kiểm tra

**Question 1 — Choose one.** A user wants iterative discussion of ideas with feedback after each option and no fixed deliverable yet. What fits?

A. Schedule automation before defining criteria.

B. Use turn-by-turn chat to clarify and develop options.

C. Delegate a long autonomous task and inspect only the final report.

D. Open a coding environment without a code task.

**Question 2 — Choose two.** A multistep job depends on laptop-only files, and the user wants to shut the laptop down. Which TWO facts need verification?

A. Assume desktop apps upload all files automatically.

B. Only check that the UI says “running.”

C. Whether data remains accessible after shutdown.

D. Whether execution occurs locally or in the cloud.

**Question 3 — Choose one.** For fixing code, running tests, and showing a diff, what should determine the environment?

A. The largest chat area.

B. The most autonomous-sounding mode name.

C. The fewest turns regardless of test access.

D. Authorized project reads, edits, and test execution.

**Question 4 — Choose two.** Which TWO requirements remain for autonomous multistep synthesis with a clear deliverable?

A. Plan and result checkpoints proportional to task impact.

B. Data scope, allowed actions, and required outputs.

C. Tool-step count as the only completion criterion.

D. Permission to modify every readable source.

**Question 5 — Choose one.** Does moving from Chat to a multistep mode remove the need to review results?

A. Yes, when the underlying model matches.

B. No; results still require verification despite different autonomy levels.

C. Yes, if plans have numbered steps.

D. Yes, if one prompt expresses the task.

## Đáp án và giải thích

1. **B.** B phù hợp cộng tác tương tác. C giảm điểm phản hồi mà nhiệm vụ cần; D không có thao tác phát triển phần mềm; A tự động hóa khi mục tiêu còn chưa rõ.

2. **C, D.** D xác định nơi thực thi; C xác định phụ thuộc dữ liệu. B không chứng minh khả năng tiếp tục; A là giả định về sao chép và quyền chưa được kiểm tra.

3. **D.** D khớp thao tác cần làm. A tối ưu hiển thị; B dựa vào nhãn; C bỏ năng lực kiểm chứng quan trọng.

4. **A, B.** B giới hạn công việc; A giữ khả năng giám sát. D suy quyền viết từ quyền đọc; C hoạt động không đồng nghĩa đạt mục tiêu.

5. **B.** B giữ trách nhiệm theo nhiệm vụ. C kế hoạch không chứng minh thực hiện; D số prompt không quyết định giám sát; A mô hình chung không làm quyền và độ tin cậy giống nhau.
