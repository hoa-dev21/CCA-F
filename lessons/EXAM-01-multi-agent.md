# Điều phối nhiều agent và truyền ngữ cảnh

Nguồn bổ trợ: Exam Guide CCAR-F v1.0 July 2026, mục 1.2–1.3, trang PDF 5–6. Đây là bài biên soạn theo đề cương thi, không phải một bài video Skilljar. Câu hỏi mới tự biên soạn.

## Nội dung bài học


Trong mô hình hub-and-spoke của đề cương, một tác nhân điều phối đứng ở trung tâm: phân tích yêu cầu, chia việc, chọn tác nhân con, nhận kết quả và xử lý lỗi. Không phải yêu cầu nào cũng cần gọi mọi tác nhân. Một câu hỏi đơn giản có thể chỉ cần một nhánh.

Chia việc theo chủ đề hoặc nguồn dữ liệu để hạn chế làm trùng. Tuy nhiên, cần kiểm tra tổng thể để việc chia quá nhỏ không bỏ sót phạm vi quan trọng. Sau khi tổng hợp, nếu thiếu một góc nhìn, giao thêm nhiệm vụ cụ thể cho phần thiếu thay vì chạy lại toàn bộ nghiên cứu.

Tác nhân con có ngữ cảnh riêng, không tự biết toàn bộ cuộc trò chuyện của tác nhân điều phối. Khi giao việc, cần gửi mục tiêu, phạm vi, tiêu chí chất lượng, dữ liệu và kết quả trước đó có liên quan. Kết quả bàn giao nên tách phát hiện khỏi thông tin nguồn như URL, tên tài liệu, trang và ngày để không mất căn cứ khi tổng hợp.

Theo giao diện trong đề cương, tác nhân điều phối cần `Task` trong `allowedTools` để gọi tác nhân con. `AgentDefinition` khai báo mô tả, hướng dẫn hệ thống và giới hạn công cụ. Các nhiệm vụ độc lập có thể được yêu cầu trong cùng lượt để chạy song song. Đây là tên giao diện theo đề cương; khi triển khai phải đối chiếu thư viện đang dùng.

Ví dụ: Nghiên cứu thị trường có một nhánh đọc quy định và một nhánh đọc dữ liệu khách hàng. Tác nhân điều phối giao phạm vi riêng, nhận kết quả có nguồn rồi kiểm tra xem có thiếu dữ liệu của một thời kỳ nào không. Nếu thiếu, nó giao truy vấn bổ sung và chuyển phát hiện mới vào bước tổng hợp.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A research agent reads 40 documents, but the synthesis agent receives only the topic. Its report lacks evidence even though the coordinator has the full history. Which change addresses the cause with the least unnecessary context?

A. Have the synthesis agent reread all 40 documents.

B. Pass the findings, source locations, and limitations to the synthesis agent.

C. Give both agents the same session ID without changing their prompts.

D. Increase the synthesis agent's token budget so it can infer the missing history.

**Question 2 — Choose two.** A research system invokes four specialists for every request. Looking up a publication date becomes slower without improving accuracy. Which TWO changes reduce unnecessary work while preserving support for complex research?

A. Have the coordinator route requests according to their actual needs.

B. Let every specialist invoke all the other specialists whenever information is missing.

C. Assign distinct scopes and deliverables to the branches that are actually needed.

D. Always run all four branches but keep only the fastest result.

**Question 3 — Choose one.** Two agents recommend the same solution, but both cite the same original blog post. The coordinator wants to call this independent confirmation. What should it do?

A. Count two pieces of evidence because the reasoning runs were independent.

B. Ask a third agent to read both conclusions and vote.

C. Treat the overlap between the conclusions as certain.

D. Trace the evidence to its origin, count it as one source, and seek more evidence when the risk warrants it.

**Question 4 — Choose one.** A synthesis covers costs but omits a mandatory data retention requirement. There is enough budget for one more research branch. What is the best next step?

A. Research the missing retention requirement, then resynthesize using the sourced findings.

B. Rerun every specialist with the original prompt.

C. Ask the synthesis agent to fill the gap using general knowledge.

D. Submit the report and classify the omission as a presentation issue.

**Question 5 — Choose two.** A research branch times out after reviewing three of six planned sources. Which TWO items should it hand off so the coordinator can decide whether to use the partial result or continue research?

A. An overall confidence score instead of the missing-source list.

B. The available findings, their sources, and the scope already checked.

C. A completion claim because the allocated budget has been exhausted.

D. The unchecked areas and the reason for stopping or any errors encountered.

## Đáp án và giải thích

1. **B.** B tạo bàn giao tường minh, có chọn lọc. A có thể lấy lại dữ liệu nhưng lặp toàn bộ nghiên cứu. C không chứng minh các context độc lập được chia sẻ. D tăng sức chứa, không đưa bằng chứng vào đó.

2. **A, C.** A giảm nhánh không cần; C giảm trùng lặp khi cần nhiều nhánh. B tạo điều phối phân tán khó kiểm soát. D bỏ kết quả nhưng vẫn trả chi phí gọi và có thể chọn câu trả lời nhanh mà thiếu góc quan trọng.

3. **D.** D phân biệt độc lập của tác nhân và độc lập của bằng chứng. A đếm đôi nguồn; B thêm phiếu nhưng không thêm chứng cứ; C đồng thuận không loại được sai lệch chung từ nguồn gốc.

4. **A.** A dùng ngân sách cho khoảng trống đã xác định. B lặp việc đã đủ; C chưa tạo bằng chứng cho tiêu chí bắt buộc; D coi thiếu thông tin quyết định là lỗi văn phong.

5. **B, D.** B bảo toàn phần có thể dùng, D làm rõ khoảng trống và khả năng phục hồi. A không đủ để kiểm tra độ bao phủ. C nhầm hoàn tất ngân sách với hoàn tất nhiệm vụ.
