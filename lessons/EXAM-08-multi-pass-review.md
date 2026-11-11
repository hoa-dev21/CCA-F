# Review độc lập và review nhiều lượt

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.6, trang PDF 19. Câu hỏi tự biên soạn.

## Nội dung bài học


Mô hình tự rà soát ngay trong cuộc trò chuyện đã viết mã có thể tiếp tục dựa vào các giả định cũ. Một phiên kiểm tra độc lập, nhận yêu cầu và mã nhưng không nhận lời lý giải của bên viết, có thể cung cấp góc nhìn mới.

Với thay đổi nhiều tệp, dồn tất cả vào một prompt lớn có thể khiến một số tệp được xem kỹ còn các tệp khác bị lướt qua. Bài đề xuất hai mức kiểm tra: rà từng tệp, rồi có một lượt riêng xem quan hệ giữa các tệp và đường đi của dữ liệu.

Ví dụ: Một tệp đổi kiểu dữ liệu trả về, nhưng tệp gọi hàm vẫn xử lý theo kiểu cũ. Chỉ kiểm tra từng tệp có thể bỏ sót lỗi này; lượt tích hợp cần đối chiếu hai phía.

Mỗi phát hiện có thể kèm bằng chứng và điểm tự tin. Muốn dùng điểm để quyết định chuyển người duyệt, phải đối chiếu và hiệu chỉnh bằng dữ liệu có nhãn trước. Điểm tự tin không thay bằng chứng và không tự chứng minh phát hiện đúng.

Tăng thời gian suy luận hoặc yêu cầu “tự phản biện kỹ hơn” trong cùng phiên không tạo sự độc lập về ngữ cảnh như một phiên khác. Dù chọn cách nào, vẫn cần đo hiệu quả trên nhiệm vụ cụ thể và thực hiện các kiểm tra cần thiết; không phương pháp nào tự bảo đảm tìm hết lỗi.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A reviewer examines a 20-file PR in one pass and often misses errors in later files. Which design improves coverage while checking cross-file interactions?

A. Review local changes, then perform an integration pass over contracts and data flow.

B. Shuffle file order and keep the first result.

C. Assign a reviewer per file and concatenate their findings unchanged.

D. Increase the maximum response length of the single review pass.

**Question 2 — Choose two.** An agent reviewing its own code repeats its design rationale instead of finding defects. Which TWO changes reduce confirmation bias?

A. Require a longer self-critique in the same context.

B. Use an independent review session with requirements and the current diff.

C. Provide defect criteria, report-or-skip examples, and evidence requirements.

D. Hide the diff and provide only the author's explanation.

**Question 3 — Choose one.** File-level reviews pass, but a caller still sends milliseconds to a function changed to accept seconds. Which additional review is most valuable?

A. Repeat file-level reviews with a larger model.

B. Ask each reviewer to confirm it understood the units.

C. Format the whole project consistently.

D. Review callers, contracts, and cross-module data flow.

**Question 4 — Choose one.** Two reviewers report the same defect at different locations, while another reports an unrelated defect with the same title. How should findings be consolidated?

A. Deduplicate by title.

B. Keep every finding unchanged.

C. Compare causes, execution paths, and locations before merging findings.

D. Keep only the highest-severity finding per file.

**Question 5 — Choose two.** A PR changes after review. Which TWO kinds of context are needed for another review?

A. The current diff and code at the new revision.

B. The author's statement that everything is fixed instead of verification.

C. Previous findings with locations and causes to distinguish fixed, open, and new issues.

D. Only the old diff to keep the review scope unchanged.

## Đáp án và giải thích

1. **A.** A xử lý cả độ sâu cục bộ và tương tác. B thay vị trí bỏ sót mà không bảo đảm bao phủ. C thiếu kiểm tra liên file. D tăng đầu ra chưa chứng minh chú ý đủ mọi phần.

2. **B, C.** B giảm ảnh hưởng lập luận đã sinh; C hướng đánh giá vào tiêu chí kiểm chứng. A có thể tiếp tục cùng thiên lệch. D bỏ mất đối tượng cần kiểm tra và phụ thuộc hoàn toàn mô tả của tác giả.

3. **D.** D nhìn quan hệ nơi sai lệch xuất hiện. A và B giữ phạm vi đã bỏ sót caller–callee. C có thể cải thiện trình bày nhưng không kiểm tra ngữ nghĩa đơn vị.

4. **C.** C gộp theo cùng lỗi thực chất. A có thể gộp hai lỗi khác nhau. B giữ trùng làm tăng nhiễu. D mất lỗi độc lập chỉ vì nằm cùng file và severity thấp hơn.

5. **A, C.** A cho reviewer bằng chứng hiện tại; C giúp theo dõi trạng thái mà không lặp báo cáo. B là tuyên bố cần kiểm chứng. D khiến đánh giá dựa trên trạng thái đã lỗi thời.
