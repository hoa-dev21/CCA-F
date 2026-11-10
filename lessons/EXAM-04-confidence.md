# Hiệu chỉnh confidence và chọn mẫu kiểm tra

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.5, trang PDF 22. Câu hỏi tự biên soạn.

## Nội dung bài học


Độ chính xác chung cao có thể che giấu một nhóm lỗi quan trọng. Trước khi giảm người kiểm tra, hãy xem kết quả theo từng loại tài liệu và từng trường dữ liệu, không chỉ nhìn một con số tổng hợp.

Điểm tự tin do mô hình tự báo chưa phải xác suất đúng đã được kiểm chứng. Ví dụ: điểm 0,98 không tự có nghĩa kết quả đúng 98% số lần. Cần đối chiếu với dữ liệu có đáp án chuẩn, đo tỷ lệ đúng ở từng mức điểm rồi chọn ngưỡng chuyển người kiểm tra. Quá trình này gọi là hiệu chỉnh độ tự tin.

Điểm riêng cho từng trường giúp nhận ra chỗ yếu. Những trường điểm thấp, nguồn mơ hồ hoặc dữ liệu mâu thuẫn nên được chuyển người duyệt theo quy trình. Với nhóm điểm cao đang được tự động thông qua, vẫn cần kiểm tra mẫu.

Lấy mẫu ngẫu nhiên phân tầng nghĩa là chia dữ liệu thành các nhóm quan trọng, chẳng hạn theo loại tài liệu, rồi chọn ngẫu nhiên trong từng nhóm. Cách này giúp phát hiện lỗi ở nhóm ít gặp thay vì chỉ thấy nhóm phổ biến.

Ví dụ: Hệ thống đạt 97% chung nhưng thường sai ngày đáo hạn ở một mẫu biểu hiếm. Không nên dựa vào 97% để tăng tự động hóa cho mọi tài liệu. Cần đo đúng nhóm và trường đó, rồi kiểm chứng ngưỡng duyệt bằng dữ liệu có nhãn.

## Câu hỏi tình huống

**1. Chọn một.** Độ chính xác chung cao nhưng một trường quan trọng trên mẫu hiếm thường sai. Trước khi giảm kiểm tra cần làm gì?

A. Chỉ dùng độ chính xác chung.

B. Chỉ tăng điểm tự tin mô hình được yêu cầu trả.

C. Ngừng theo dõi mẫu hiếm.

D. Đánh giá theo loại tài liệu/trường và hiệu chỉnh ngưỡng bằng dữ liệu có nhãn.

**2. Chọn một.** Mô hình báo 0,98 cho một trường. Điều nào đúng?

A. Chưa chứng minh 98% đúng nếu chưa hiệu chỉnh với nhãn thực tế.

B. Chắc chắn đúng cho mọi tài liệu.

C. Không cần bất kỳ mẫu kiểm tra nào.

D. Có thể thay thế dữ liệu nguồn.

**3. Chọn hai.** Khi giảm kiểm tra thủ công, biện pháp nào phù hợp?

A. Chỉ xem các ca mô hình tự nhận yếu và không kiểm tra nhóm cao.

B. Lấy mẫu ngẫu nhiên phân tầng ở nhóm điểm tự tin cao.

C. Chuyển trường yếu hoặc dữ liệu nguồn mâu thuẫn tới người duyệt.

D. Áp một ngưỡng chưa xác thực cho mọi loại tài liệu.

## Đáp án

1. **D.** A che phân đoạn yếu; B đổi nhãn không tăng độ đúng; C bỏ vùng rủi ro.
2. **A.** B và C suy rộng điểm tự báo; D nhầm tín hiệu với bằng chứng gốc.
3. **B, C.** A không đo được lỗi nhóm tự thông qua; D bỏ hiệu chỉnh theo dữ liệu.
