# Hiệu chỉnh confidence và chọn mẫu kiểm tra

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.5, trang PDF 22. Câu hỏi tự biên soạn.

## Tóm tắt

Accuracy tổng thể cao có thể che một loại tài liệu hoặc trường dữ liệu rất yếu. Trước khi giảm người duyệt, phân tích theo loại tài liệu và theo trường quan trọng.

Confidence do mô hình tự báo chưa tự là xác suất đúng đã được hiệu chỉnh. Thu thập nhãn chuẩn, đo độ đúng theo các mức confidence, rồi đặt ngưỡng chuyển người phù hợp dữ liệu xác thực. Confidence ở cấp trường giúp ưu tiên reviewer vào chỗ yếu thay vì chỉ có một điểm chung cho cả tài liệu.

Đưa trường confidence thấp và nguồn mơ hồ/mâu thuẫn tới người duyệt. Với nhóm confidence cao, vẫn lấy mẫu ngẫu nhiên phân tầng để đo lỗi và phát hiện mẫu sai mới. Chỉ xem nhóm thấp không cho biết mức lỗi thực tế của nhóm đang tự động thông qua.

Ví dụ tự biên soạn: hệ thống đạt 97% chung nhưng sai nhiều ở ngày đáo hạn trên một mẫu biểu hiếm. Tăng tỷ lệ tự động cho mọi mẫu biểu dựa trên 97% có thể làm lỗi quan trọng lọt qua. Cần nhìn đúng phân đoạn và đo ngưỡng review trên nhãn thật.

## Câu hỏi tình huống

**1. Chọn một.** Accuracy chung cao nhưng một trường quan trọng trên mẫu hiếm thường sai. Trước khi giảm review cần làm gì?

A. Chỉ dùng accuracy chung.

B. Chỉ tăng confidence model được yêu cầu trả.

C. Ngừng theo dõi mẫu hiếm.

D. Đánh giá theo loại tài liệu/trường và hiệu chỉnh ngưỡng bằng dữ liệu có nhãn.

**2. Chọn một.** Model báo 0,98 cho một trường. Điều nào đúng?

A. Chưa chứng minh 98% đúng nếu chưa hiệu chỉnh với nhãn thực tế.

B. Chắc chắn đúng cho mọi tài liệu.

C. Không cần bất kỳ mẫu kiểm tra nào.

D. Có thể thay thế dữ liệu nguồn.

**3. Chọn hai.** Khi giảm review thủ công, biện pháp nào phù hợp?

A. Chỉ xem các ca model tự nhận yếu và không kiểm tra nhóm cao.

B. Lấy mẫu ngẫu nhiên phân tầng ở nhóm confidence cao.

C. Chuyển trường yếu hoặc dữ liệu nguồn mâu thuẫn tới người duyệt.

D. Áp một ngưỡng chưa xác thực cho mọi loại tài liệu.

## Đáp án

1. **D.** A che phân đoạn yếu; B đổi nhãn không tăng độ đúng; C bỏ vùng rủi ro.
2. **A.** B và C suy rộng điểm tự báo; D nhầm tín hiệu với bằng chứng gốc.
3. **B, C.** A không đo được lỗi nhóm tự thông qua; D bỏ hiệu chỉnh theo dữ liệu.
