# Hiệu chỉnh confidence và chọn mẫu kiểm tra

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.5, trang PDF 22. Câu hỏi tự biên soạn.

## Nội dung bài học


Độ chính xác chung cao có thể che giấu một nhóm lỗi quan trọng. Trước khi giảm người kiểm tra, hãy xem kết quả theo từng loại tài liệu và từng trường dữ liệu, không chỉ nhìn một con số tổng hợp.

Điểm tự tin do mô hình tự báo chưa phải xác suất đúng đã được kiểm chứng. Ví dụ: điểm 0,98 không tự có nghĩa kết quả đúng 98% số lần. Cần đối chiếu với dữ liệu có đáp án chuẩn, đo tỷ lệ đúng ở từng mức điểm rồi chọn ngưỡng chuyển người kiểm tra. Quá trình này gọi là hiệu chỉnh độ tự tin.

Điểm riêng cho từng trường giúp nhận ra chỗ yếu. Những trường điểm thấp, nguồn mơ hồ hoặc dữ liệu mâu thuẫn nên được chuyển người duyệt theo quy trình. Với nhóm điểm cao đang được tự động thông qua, vẫn cần kiểm tra mẫu.

Lấy mẫu ngẫu nhiên phân tầng nghĩa là chia dữ liệu thành các nhóm quan trọng, chẳng hạn theo loại tài liệu, rồi chọn ngẫu nhiên trong từng nhóm. Cách này giúp phát hiện lỗi ở nhóm ít gặp thay vì chỉ thấy nhóm phổ biến.

Ví dụ: Hệ thống đạt 97% chung nhưng thường sai ngày đáo hạn ở một mẫu biểu hiếm. Không nên dựa vào 97% để tăng tự động hóa cho mọi tài liệu. Cần đo đúng nhóm và trường đó, rồi kiểm chứng ngưỡng duyệt bằng dữ liệu có nhãn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Extraction accuracy is 97% overall, but account numbers in a rare document type have a 15% error rate. The team wants to skip review above model confidence 0.95. What is the best decision?

A. Use that threshold because overall accuracy is high.

B. Raise the global threshold to 0.99 and skip review for rare types.

C. Use a larger model without changing evaluation.

D. Calibrate by field and document type against ground truth, and review high-risk groups.

**Question 2 — Choose one.** Of 100 fields assigned confidence 0.98, only 82 are correct on a representative validation set. What does this show?

A. The scores are overconfident; 0.98 is not a calibrated probability.

B. Average 0.98 and 0.82 to obtain operational confidence.

C. The 82% result concerns only the validator, not confidence.

D. Review can be removed because the model scored each field separately.

**Question 3 — Choose two.** High-confidence results are automatically accepted. Input document layouts then begin to change. Which TWO measures help detect missed errors?

A. Review only fields the system rejects.

B. Take stratified random samples from automatically accepted results.

C. Track quality by document type and field, adjusting thresholds when drift is demonstrated.

D. Use the automatic acceptance rate as an accuracy measure instead of ground truth.

**Question 4 — Choose one.** Product descriptions and payment account numbers both have a 1% error rate. Review capacity is limited. Which policy is most appropriate?

A. Apply the same threshold because error probabilities are equal.

B. Prioritize longer descriptions because they use more tokens.

C. Prioritize by consequences, measured quality, and the ability to correct errors.

D. Prioritize variable confidence scores without considering business impact.

**Question 5 — Choose two.** A field has high model confidence, but two source pages provide different values. Which TWO actions are appropriate before using the value automatically?

A. Select the higher-confidence value and remove the conflict flag.

B. Preserve both values, their sources, and the conflict status.

C. Average the values if the schema requires one number.

D. Apply an authorized verification process or a predefined conflict resolution rule.

## Đáp án và giải thích

1. **D.** D nhìn thấy sai lệch bị trung bình che khuất và đo ý nghĩa điểm. A trộn nhóm có rủi ro khác nhau; B không biết điểm 0,99 có đáng tin; C thay mô hình mà chưa xác nhận lỗi đã giảm.

2. **A.** A so sánh dự báo với tần suất đúng quan sát được. B không có cơ sở hiệu chỉnh; C bỏ qua nhãn kiểm định đã giả định đáng tin; D tiếp tục dùng điểm sai lệch để ra quyết định.

3. **B, C.** B kiểm tra cả lỗi có confidence cao; C giúp thấy nhóm suy giảm. A chỉ quan sát phần đã bị chặn; D đo thông lượng chứ không đo đúng sai.

4. **C.** C kết hợp xác suất với hậu quả và chi phí sửa. A đánh đồng mức rủi ro; B dùng chi phí suy luận thay cho thiệt hại; D bỏ qua tác động dù confidence không được hiệu chỉnh.

5. **B, D.** B bảo toàn bằng chứng; D xử lý xung đột thay vì che nó. A không biến confidence thành nguồn chân lý. C có thể tạo giá trị không nguồn nào công bố và không đúng ngữ nghĩa của trường.
