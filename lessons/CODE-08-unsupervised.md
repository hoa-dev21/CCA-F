# Kiểm chứng phiên tự chạy

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486938), sources/code-lessons/486938.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi để AI tự chạy và ít theo dõi từng bước, bạn càng cần kiểm tra bằng chứng sau khi nó kết thúc. Bắt đầu từ trạng thái tệp thực tế và diff — phần mã đã thay đổi — thay vì chỉ đọc bản tóm tắt của AI.

Đối chiếu các tệp đã sửa với kế hoạch, rồi tìm những thay đổi ngoài phạm vi. Sau đó chạy các kiểm thử phù hợp và xem kết quả thực tế. Nếu một kiểm tra bắt buộc phải đạt trước khi tiếp tục, có thể dùng hook hoặc mã kiểm soát để chặn khi kiểm tra chưa đạt, thay vì chỉ nhắc AI trong yêu cầu.

Với cách chạy không tương tác (headless), hãy xem cả kết quả JSON và mã kết thúc chương trình (exit code). Chỉ một tín hiệu riêng lẻ có thể chưa chứng minh rằng mọi yêu cầu đã được đáp ứng.

Một phiên rà soát độc lập có thể phát hiện lỗi mà phiên viết mã bỏ sót, nhưng vẫn cần kiểm thử thực tế. Kiểm soát quyền chỉ xác định thao tác có được phép hay không, không chứng minh mã đúng.

Ví dụ: AI được giao tổ chức lại mã nhưng còn sửa một tệp triển khai ngoài kế hoạch. Dù các kiểm thử đơn vị đã thành công, bạn vẫn cần xem thay đổi đó và thực hiện kiểm tra phù hợp trước khi chấp nhận.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An autonomous agent claims “refactor only,” but its diff changes deployment configuration. Unit tests pass. What comes next?

A. Accept the agent's claim of unchanged behavior.

B. Review the full diff, including deployment files, and verify by impact.

C. Only correct the summary.

D. Hide deployment changes to match requested scope.

**Question 2 — Choose one.** The agent says tests ran, but the transcript shows only intentions. What is justified?

A. Obtain execution evidence before confirming the gate passed.

B. Past-tense wording proves execution.

C. Permission to test implies tests ran.

D. A reviewer's agreement with the summary is enough.

**Question 3 — Choose two.** A headless job exits zero, but JSON reports incomplete work due to turn exhaustion. Which TWO checks inform result use?

A. Business status under the response contract.

B. Exit zero alone, ignoring JSON.

C. Evidence of requirements and gates actually met.

D. Token count as a completion proxy.

**Question 4 — Choose one.** An independent reviewer finds no defect, but no tests have run. How should this be interpreted?

A. Independent context replaces testing.

B. Every requirement is proven satisfied.

C. A different model reading the diff is sufficient.

D. Review adds perspective; scope and execution outcomes still need verification.

**Question 5 — Choose two.** Which TWO elements enforce continuation only after mandatory checks pass?

A. An opening reminder as the entire mechanism.

B. A programmatic gate or hook checking results before the next action.

C. Logs linking check state and results to the code being used.

D. Declare completion after a period of silence.

## Đáp án và giải thích

1. **B.** B dùng trạng thái thực tế và kiểm tra đúng phần bị ảnh hưởng. A tin lời kể dù có bằng chứng khác. C sửa báo cáo chưa đánh giá tác động. D che thay đổi thực sự vẫn tồn tại.

2. **A.** A phân biệt kế hoạch/tuyên bố với thực thi. B dựa vào ngữ pháp. C nhầm được phép với đã làm. D thêm một sự đồng ý không thay thế kết quả kiểm thử.

3. **A, C.** A đọc trạng thái nhiệm vụ, C kiểm tra điều kiện chấp nhận. B chỉ nhìn một lớp tín hiệu. D tiêu hao tài nguyên không đo độ hoàn tất.

4. **D.** D giữ đúng giới hạn của review. A/B suy rộng kết luận không tìm thấy lỗi thành bảo đảm đúng. C đổi mô hình và đọc toàn bộ diff có thể giúp rà soát, nhưng chưa thay thế kết quả kiểm chứng hành vi khi chạy.

5. **B, C.** B cưỡng chế điều kiện, C cho phép kiểm chứng trạng thái thật. A hướng dẫn nhưng không bảo đảm không bỏ bước. D dùng trạng thái hội thoại thay bằng chứng nhiệm vụ.
