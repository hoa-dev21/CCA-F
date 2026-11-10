# Tình huống context dài, nguồn mâu thuẫn và review có chọn mẫu

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục5.1–5.6, trang PDF19–23. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi rút gọn lịch sử, giữ riêng những dữ kiện quyết định dưới dạng có cấu trúc: mã đơn, số tiền, ngày, trạng thái và mong muốn cụ thể. Ví dụ: “hoàn 35% đơn A trước ngày 12” không được biến thành “khách muốn hoàn sớm”.

Bản ghi lưu trên đĩa hoặc máy chủ chưa đủ. Mỗi yêu cầu hoặc tác nhân được khởi động lại cần thực sự nhận phần dữ kiện liên quan. Tách kết quả khám phá dài khỏi phiên chính và đặt phát hiện quan trọng ở đầu bản tổng hợp giúp giảm bỏ sót.

Khi nguồn bất đồng, chuyển cả các giá trị cùng nguồn, thời gian và phương pháp cho bên điều phối đối chiếu trước khi tổng hợp. Hai giá trị đo ở hai thời kỳ khác nhau chưa chắc mâu thuẫn. Không xóa một nguồn hoặc đoán thêm dữ liệu để báo cáo có vẻ đầy đủ.

Lỗi truy cập phải được báo là lỗi hoặc khoảng trống thông tin. Không biến nó thành một lần tìm kiếm thành công nhưng không có kết quả.

Trước khi giảm người kiểm tra, đo độ chính xác theo trường dữ liệu và loại tài liệu, rồi hiệu chỉnh điểm tự tin bằng dữ liệu có nhãn. Chuyển các trường hợp yếu hoặc mơ hồ cho người duyệt, đồng thời vẫn chọn mẫu ngẫu nhiên trong từng nhóm điểm cao để phát hiện lỗi đang lọt. Một tỷ lệ đúng chung, chẳng hạn 97%, chưa đủ để tự động thông qua mọi nhóm dữ liệu.

## Câu hỏi

**1. Chọn một.** Sau nhiều lần summary, kỳ vọng “hoàn35% đơnA trước ngày12” thành “khách muốn hoàn sớm”. Sửa kiến trúc phù hợp nhất?

A. Nén thêm để bỏ mọi con số.

B. Đặt case facts có cấu trúc theo issue/order ngoài history đã nén và đưa facts liên quan vào mỗi yêu cầu.

C. Chỉ tăng điểm tự tin của câu trả lời.

D. Chỉ lưu order ID trên đĩa rồi không truyền vào yêu cầu.

**2. Chọn một.** Hai nguồn tài chính đáng tin báo các giá trị khác nhau nhưng thời kỳ đo cũng khác. Downstream nên nhận gì?

A. Trung bình hai số không có việc ghi rõ nguồn.

B. Chỉ giá trị lớn hơn vì dễ đọc.

C. Cả hai giá trị với nguồn, thời gian, phương pháp và chú thích khác biệt để tác nhân điều phối đối chiếu.

D. Một kết luận chắc chắn rằng nguồn thứ hai sai.

**3. Chọn hai.** Muốn giảm kiểm tra thủ công vì độ chính xác chung97%, nhưng mẫu hiếm ít được đo. Cần làm gì trước và trong tự động hóa?

A. Phân tích độ chính xác theo loại tài liệu/field và hiệu chỉnh ngưỡng trên nhãn thật.

B. Chỉ kiểm tra ca điểm tự tin thấp, không bao giờ lấy mẫu nhóm cao.

C. Coi confidence0.99 của mô hình là bằng chứng đúng99% cho mọi mẫu.

D. Chọn mẫu ngẫu nhiên phân tầng nhóm điểm tự tin cao để đo lỗi và phát hiện pattern mới.

## Đáp án

1. **B.** A mất dữ kiện; C không khôi phục facts; D nhầm lưu trữ với ngữ cảnh đã được mô hình nhận.

2. **C.** A xóa ý nghĩa thời kỳ; B chọn tùy tiện; D kết luận sai khi chưa đối chiếu phương pháp/thời gian.

3. **A, D.** B không đo lỗi nhóm được tự thông qua; C chưa có calibration. Ca mơ hồ/mâu thuẫn vẫn cần ưu tiên người duyệt.
