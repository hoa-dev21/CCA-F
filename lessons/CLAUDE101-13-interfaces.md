# Other ways to work with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383402), sources/claude101-lessons/383402.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài học giới thiệu các cách dùng Claude trong những môi trường làm việc khác nhau: phát triển phần mềm với Code, trao đổi trong Slack, tạo bản mẫu thiết kế, làm việc với tài liệu Microsoft 365 và thực hiện tác vụ trên trình duyệt.

Để chọn công cụ, hãy trả lời ba câu hỏi: Dữ liệu đang ở đâu? Bạn cần thực hiện thao tác gì? Công cụ có quyền và khả năng kiểm tra kết quả hay không?

Ví dụ: Sửa một sổ làm việc Excel đang mở, có các công thức phụ thuộc lẫn nhau, khác với tạo một tệp bảng tính mới từ cuộc trò chuyện. Tương tự, sửa mã trong kho mã nguồn và chạy kiểm thử cần môi trường thực thi; một câu trả lời mô tả cách sửa chưa thực hiện những việc đó.

Mỗi giao diện có khả năng, quyền truy cập và điều kiện sử dụng riêng. Không nên mặc định dữ liệu hoặc quyền ở một nơi tự chuyển sang mọi nơi khác. Khi ôn Architect, dùng bài này để hiểu cách chọn môi trường làm việc, rồi học các nội dung kỹ thuật theo đề cương thi thay vì học thuộc mọi tên sản phẩm.

## Tự kiểm tra

**Question 1 — Choose one.** A user needs changes in an open workbook with dependent formulas, but the assistant creates a static new file. What is missing?

A. More worksheets.

B. Longer formula explanations.

C. Sending the file through the same chat channel.

D. A tool that edits and verifies the intended workbook.

**Question 2 — Choose two.** A task moves from Slack to a development tool. Which TWO things need rechecking?

A. Execution permissions and result-verification capabilities.

B. Actual access to required data and repositories in the new environment.

C. Assume all prior session content is present.

D. Assume Slack permissions transfer automatically.

**Question 3 — Choose one.** A user wants an existing document table updated while preserving comments. Which tool choice fits?

A. Describe edits in chat and imply completion.

B. Use a tool accessing that document and verifying both table and comments afterward.

C. Create a faster new file and assume full replacement.

D. Choose by brand name without checking comment preservation.

**Question 4 — Choose two.** Which TWO questions guide a multi-interface workflow?

A. Which interface gives the longest completion message?

B. Which appeared most in old videos?

C. Are suitable permissions and target-state verification available?

D. Where is the target data, and what reads, edits, or actions are needed?

**Question 5 — Choose one.** A chat explains a code fix, but project status says “fixed and tests passed.” What correction is needed?

A. Keep it because suggested test commands equal execution.

B. Use a chat screenshot as test evidence.

C. Relabel logic review as passing executed tests.

D. Do not confirm completion until the patch is applied and tested in the repository.

## Đáp án và giải thích

1. **D.** D phân biệt tạo bản sao với sửa phiên làm việc đích. A và B không giải quyết đối tượng; C kênh giao tiếp không tạo liên kết workbook.

2. **A, B.** B kiểm tra dữ liệu; A kiểm tra khả năng và quyền. D và C suy sự kế thừa không được bảo đảm.

3. **B.** B đáp ứng thao tác và ràng buộc bảo toàn. C có thể mất trạng thái; D không đánh giá khả năng; A nhầm hướng dẫn với hành động.

4. **C, D.** D xác định yêu cầu kỹ thuật; C xác nhận khả năng thực tế. B dựa vào sự quen thuộc lịch sử; A dùng lời nói thay bằng chứng.

5. **D.** D nối báo cáo với hành động và quan sát. A nhầm lệnh được viết với lệnh đã chạy. B chứng minh có đề xuất, không có kết quả test. C bổ sung review logic có ích nhưng review không phải bằng chứng rằng bản vá đã áp dụng và kiểm thử thực tế đã đạt.
