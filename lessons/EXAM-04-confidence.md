# Hiệu chỉnh confidence và chọn mẫu kiểm tra

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.5, trang PDF 22. Câu hỏi tự biên soạn.

## Nội dung bài học


Độ chính xác chung cao có thể che giấu một nhóm lỗi quan trọng. Trước khi giảm người kiểm tra, hãy xem kết quả theo từng loại tài liệu và từng trường dữ liệu, không chỉ nhìn một con số tổng hợp.

Điểm tự tin do mô hình tự báo chưa phải xác suất đúng đã được kiểm chứng. Ví dụ: điểm 0,98 không tự có nghĩa kết quả đúng 98% số lần. Cần đối chiếu với dữ liệu có đáp án chuẩn, đo tỷ lệ đúng ở từng mức điểm rồi chọn ngưỡng chuyển người kiểm tra. Quá trình này gọi là hiệu chỉnh độ tự tin.

Điểm riêng cho từng trường giúp nhận ra chỗ yếu. Những trường điểm thấp, nguồn mơ hồ hoặc dữ liệu mâu thuẫn nên được chuyển người duyệt theo quy trình. Với nhóm điểm cao đang được tự động thông qua, vẫn cần kiểm tra mẫu.

Lấy mẫu ngẫu nhiên phân tầng nghĩa là chia dữ liệu thành các nhóm quan trọng, chẳng hạn theo loại tài liệu, rồi chọn ngẫu nhiên trong từng nhóm. Cách này giúp phát hiện lỗi ở nhóm ít gặp thay vì chỉ thấy nhóm phổ biến.

Ví dụ: Hệ thống đạt 97% chung nhưng thường sai ngày đáo hạn ở một mẫu biểu hiếm. Không nên dựa vào 97% để tăng tự động hóa cho mọi tài liệu. Cần đo đúng nhóm và trường đó, rồi kiểm chứng ngưỡng duyệt bằng dữ liệu có nhãn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Hệ trích xuất đúng 97% toàn bộ trường, nhưng mã tài khoản của một mẫu hiếm sai 15%. Nhóm muốn bỏ duyệt khi mô hình tự tin trên 0,95. Quyết định nào có cơ sở nhất?

A. Dùng ngưỡng đó vì độ đúng tổng thể đã cao hơn yêu cầu.

B. Tăng ngưỡng toàn hệ lên 0,99 rồi bỏ duyệt các mẫu hiếm.

C. Đổi sang mô hình lớn hơn và giữ quy trình đo hiện tại.

D. Hiệu chỉnh theo trường/loại với nhãn thật; review nhóm rủi ro.

**Câu 2 — Chọn một.** Trong 100 trường mà mô hình chấm 0,98, chỉ 82 trường đúng trên tập kiểm định đại diện. Kết luận nào đúng nhất?

A. Điểm đang quá cao; 0,98 chưa phải xác suất đã hiệu chỉnh.

B. Cần lấy trung bình 0,98 và 0,82 để có confidence vận hành.

C. Kết quả 82% chỉ phản ánh validator, không liên quan confidence.

D. Có thể bỏ review vì mô hình vẫn đánh giá từng trường riêng lẻ.

**Câu 3 — Chọn hai.** Sau triển khai tự động chấp nhận nhóm confidence cao, dữ liệu đầu vào bắt đầu đổi bố cục. Hai biện pháp nào giúp phát hiện lỗi lọt?

A. Chỉ xem lại các trường bị hệ thống từ chối.

B. Lấy mẫu ngẫu nhiên phân tầng trong nhóm được tự động chấp nhận.

C. Theo dõi chất lượng theo loại tài liệu/trường và điều chỉnh ngưỡng khi có bằng chứng drift.

D. Dùng tỷ lệ chấp nhận tự động làm chỉ số chính xác thay cho nhãn thật.

**Câu 4 — Chọn một.** Hai trường có cùng tỷ lệ sai 1%: mô tả sản phẩm và số tài khoản nhận tiền. Nguồn lực review giới hạn. Chính sách nào hợp lý nhất?

A. Dùng cùng ngưỡng vì xác suất sai bằng nhau.

B. Ưu tiên mô tả dài vì tốn nhiều token hơn.

C. Ưu tiên theo hậu quả, chất lượng đo được và khả năng sửa lỗi.

D. Ưu tiên trường có confidence dao động nhiều, bỏ qua giá trị nghiệp vụ.

**Câu 5 — Chọn hai.** Một trường có confidence cao nhưng hai trang nguồn cho giá trị khác nhau. Hai hành động nào phù hợp trước khi tự động sử dụng?

A. Chọn giá trị có confidence cao hơn và loại dấu xung đột.

B. Giữ các giá trị cùng nguồn và trạng thái mâu thuẫn.

C. Tính trung bình hai giá trị nếu schema yêu cầu một số duy nhất.

D. Chuyển trường đó sang quy trình xác minh có thẩm quyền hoặc quy tắc giải quyết xung đột đã định.

## Đáp án và giải thích

1. **D.** D nhìn thấy sai lệch bị trung bình che khuất và đo ý nghĩa điểm. A trộn nhóm có rủi ro khác nhau; B không biết điểm 0,99 có đáng tin; C thay mô hình mà chưa xác nhận lỗi đã giảm.

2. **A.** A so sánh dự báo với tần suất đúng quan sát được. B không có cơ sở hiệu chỉnh; C bỏ qua nhãn kiểm định đã giả định đáng tin; D tiếp tục dùng điểm sai lệch để ra quyết định.

3. **B, C.** B kiểm tra cả lỗi có confidence cao; C giúp thấy nhóm suy giảm. A chỉ quan sát phần đã bị chặn; D đo thông lượng chứ không đo đúng sai.

4. **C.** C kết hợp xác suất với hậu quả và chi phí sửa. A đánh đồng mức rủi ro; B dùng chi phí suy luận thay cho thiệt hại; D bỏ qua tác động dù confidence không được hiệu chỉnh.

5. **B, D.** B bảo toàn bằng chứng; D xử lý xung đột thay vì che nó. A không biến confidence thành nguồn chân lý. C có thể tạo giá trị không nguồn nào công bố và không đúng ngữ nghĩa của trường.
