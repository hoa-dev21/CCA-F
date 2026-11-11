# Tình huống context dài, nguồn mâu thuẫn và review có chọn mẫu

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục5.1–5.6, trang PDF19–23. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi rút gọn lịch sử, giữ riêng những dữ kiện quyết định dưới dạng có cấu trúc: mã đơn, số tiền, ngày, trạng thái và mong muốn cụ thể. Ví dụ: “hoàn 35% đơn A trước ngày 12” không được biến thành “khách muốn hoàn sớm”.

Bản ghi lưu trên đĩa hoặc máy chủ chưa đủ. Mỗi yêu cầu hoặc tác nhân được khởi động lại cần thực sự nhận phần dữ kiện liên quan. Tách kết quả khám phá dài khỏi phiên chính và đặt phát hiện quan trọng ở đầu bản tổng hợp giúp giảm bỏ sót.

Khi nguồn bất đồng, chuyển cả các giá trị cùng nguồn, thời gian và phương pháp cho bên điều phối đối chiếu trước khi tổng hợp. Hai giá trị đo ở hai thời kỳ khác nhau chưa chắc mâu thuẫn. Không xóa một nguồn hoặc đoán thêm dữ liệu để báo cáo có vẻ đầy đủ.

Lỗi truy cập phải được báo là lỗi hoặc khoảng trống thông tin. Không biến nó thành một lần tìm kiếm thành công nhưng không có kết quả.

Trước khi giảm người kiểm tra, đo độ chính xác theo trường dữ liệu và loại tài liệu, rồi hiệu chỉnh điểm tự tin bằng dữ liệu có nhãn. Chuyển các trường hợp yếu hoặc mơ hồ cho người duyệt, đồng thời vẫn chọn mẫu ngẫu nhiên trong từng nhóm điểm cao để phát hiện lỗi đang lọt. Một tỷ lệ đúng chung, chẳng hạn 97%, chưa đủ để tự động thông qua mọi nhóm dữ liệu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** After compaction, “refund 35% of order A before the 12th” loses its amount and date. Which architectural change protects these facts across sessions?

A. Make the summary longer and use it as the only source of truth.

B. Store structured case and order facts, loading relevant fields on each turn.

C. Infer missing numbers from the latest transcript.

D. Assign higher confidence to frequently repeated facts.

**Question 2 — Choose one.** Two credible financial sources report different values for different measurement periods. What should downstream processing receive to avoid a false contradiction?

A. Both values with sources, periods, methods, and comparability limits.

B. Their average as a compromise.

C. Only the latest value because older evidence is irrelevant.

D. Only the value assigned higher model confidence.

**Question 3 — Choose two.** Overall accuracy is 97%, but rare document types are poorly measured. Which TWO steps are needed before and during a reduction in manual review?

A. Apply 97% as one threshold for every field.

B. Analyze quality by document type and field and calibrate scores against ground truth.

C. Inspect only low-confidence results because high-confidence ones are safe.

D. Take stratified random samples from automatically accepted results.

**Question 4 — Choose one.** A synthesis agent receives a summary saying “sources agree,” but all figures cite one original report. Which handoff change prevents double-counting evidence?

A. Keep only the number of websites and their average reputation.

B. Discard all secondary sources while keeping the existing conclusion.

C. Preserve claim-to-source mappings and source origins to assess independence.

D. Ask another agent to rewrite the summary.

**Question 5 — Choose two.** An independent reviewer must examine changes to an API and its consumer. Previous findings refer to an older revision. Which TWO kinds of context are required?

A. Current contracts, diffs on both sides, and criteria for reportable impact.

B. Previous findings with status, to verify them against the new revision.

C. Only the author's explanation to avoid distraction from the code.

D. Only passing test results to infer that all contracts are consistent.

## Đáp án và giải thích

1. **B.** B có nơi lưu chuẩn tách khỏi tóm tắt. A vẫn có nguy cơ mất chi tiết; C không phục hồi được dữ kiện đã không còn; D tần suất nhắc không chứng minh độ đúng.

2. **A.** A giữ điều kiện diễn giải. B tạo số tổng hợp không có phương pháp; C có thể mất dữ liệu so sánh lịch sử; D confidence không giải quyết khác biệt kỳ đo.

3. **B, D.** B kiểm tra khác biệt giữa nhóm và ý nghĩa điểm; D phát hiện lỗi confidence cao. A che nhóm yếu; C bỏ một nguồn sai lệch quan trọng và không đo được lỗi lọt.

4. **C.** C cho thấy các bản sao dùng chung một dòng bằng chứng. A đếm website; B có thể loại dữ liệu mà chưa xét nguồn; D đổi diễn đạt không tạo bằng chứng độc lập.

5. **A, B.** A cho reviewer đủ phạm vi kiểm tra liên file; B tránh lặp lỗi đã sửa và giữ lỗi chưa giải quyết. C dễ giữ thiên lệch của tác giả. D test xanh không chứng minh mọi tương tác đã được kiểm tra.
