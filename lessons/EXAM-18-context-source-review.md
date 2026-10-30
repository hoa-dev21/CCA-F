# Tình huống context dài, nguồn mâu thuẫn và review có chọn mẫu

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục5.1–5.6, trang PDF19–23. Câu hỏi tự biên soạn.

## Tóm tắt

Tóm tắt lịch sử cần giữ facts quyết định dưới dạng có cấu trúc: order ID, số tiền, ngày, trạng thái và kỳ vọng cụ thể. Bản ghi nằm trên đĩa hoặc server chưa đủ; request/agent khởi động lại phải nhận context liên quan. Cô lập khám phá dài và đưa key findings lên đầu bản tổng hợp giúp giảm bỏ sót.

Khi nguồn bất đồng, giữ từng claim cùng nguồn, thời gian và phương pháp; coordinator đối chiếu trước synthesis. Lỗi truy cập phải báo là lỗi/khoảng trống chứ không biến thành truy vấn thành công rỗng. Dữ liệu thiếu không được lấp bằng suy đoán chỉ để báo cáo có vẻ đầy đủ.

Confidence cần hiệu chỉnh với nhãn thật ở cấp field/document type. Review các ca yếu/mơ hồ và vẫn chọn mẫu ngẫu nhiên phân tầng ở nhóm confidence cao để đo lỗi đang lọt. Một điểm accuracy tổng thể không đủ cho quyết định tự động hóa mọi phân đoạn.

## Câu hỏi

**1. Chọn một.** Sau nhiều lần summary, kỳ vọng “hoàn35% đơnA trước ngày12” thành “khách muốn hoàn sớm”. Sửa kiến trúc phù hợp nhất?

A. Nén thêm để bỏ mọi con số.

B. Đặt case facts có cấu trúc theo issue/order ngoài history đã nén và đưa facts liên quan vào mỗi request.

C. Chỉ tăng confidence của câu trả lời.

D. Chỉ lưu order ID trên đĩa rồi không truyền vào request.

**2. Chọn một.** Hai nguồn tài chính đáng tin báo các giá trị khác nhau nhưng thời kỳ đo cũng khác. Downstream nên nhận gì?

A. Trung bình hai số không có attribution.

B. Chỉ giá trị lớn hơn vì dễ đọc.

C. Cả hai giá trị với nguồn, thời gian, phương pháp và chú thích khác biệt để coordinator đối chiếu.

D. Một kết luận chắc chắn rằng nguồn thứ hai sai.

**3. Chọn hai.** Muốn giảm review thủ công vì accuracy chung97%, nhưng mẫu hiếm ít được đo. Cần làm gì trước và trong tự động hóa?

A. Phân tích accuracy theo loại tài liệu/field và hiệu chỉnh ngưỡng trên nhãn thật.

B. Chỉ review ca confidence thấp, không bao giờ lấy mẫu nhóm cao.

C. Coi confidence0.99 của model là bằng chứng đúng99% cho mọi mẫu.

D. Chọn mẫu ngẫu nhiên phân tầng nhóm confidence cao để đo lỗi và phát hiện pattern mới.

## Đáp án

1. **B.** A mất dữ kiện; C không khôi phục facts; D nhầm lưu trữ với context đã được model nhận.

2. **C.** A xóa ý nghĩa thời kỳ; B chọn tùy tiện; D kết luận sai khi chưa đối chiếu phương pháp/thời gian.

3. **A, D.** B không đo lỗi nhóm được tự thông qua; C chưa có calibration. Ca mơ hồ/mâu thuẫn vẫn cần ưu tiên người duyệt.
