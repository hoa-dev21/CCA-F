# Tình huống few-shot, false positives và độ trễ batch

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục4.1–4.6, trang PDF16–19. Câu hỏi tự biên soạn.

## Tóm tắt

Few-shot hữu ích khi hướng dẫn dài vẫn tạo phán đoán hoặc định dạng không nhất quán. Chọn ví dụ khó, gồm ca hợp lệ dễ bị gắn cờ sai và ca thật cần báo, với lý do và output contract. Với extraction, thay đổi bố cục tài liệu cần ví dụ cho thấy thông tin có thể nằm ở đâu; không dùng ví dụ để lấp dữ liệu vắng mặt.

Theo dõi false positives theo category/pattern thay vì chỉ điểm trung bình. Có thể tạm vô hiệu hóa nhóm quá nhiễu trong khi sửa prompt/eval để giữ niềm tin vào nhóm phát hiện có giá trị.

Batch phù hợp workload chấp nhận chờ; tính cả thời gian gom và xử lý. Theo số liệu tình huống guide, nếu cho phép30giờ và processing có thể24giờ, chu kỳ gom4giờ còn2giờ đệm lý thuyết. Đó không là bảo đảm production khi còn retry và overhead.

## Câu hỏi

**1. Chọn một.** Field phương pháp nghiên cứu thường null ở tài liệu không có mục Methodology nhưng thông tin thực ra nằm trong đoạn mở đầu. Cải thiện nào sát nguyên nhân nhất?

A. Luôn điền phương pháp phổ biến nhất.

B. Bỏ mọi trường null mà không kiểm tra.

C. Thêm few-shot cho bố cục có phương pháp nhúng trong đoạn và eval trên tài liệu mới.

D. Chỉ bắt model tự tin hơn.

**2. Chọn một.** Category comment-style tạo nhiều cảnh báo sai khiến kỹ sư bỏ qua cả lỗi bảo mật thật. Lựa chọn phù hợp nhất?

A. Thêm thật nhiều cảnh báo style.

B. Tạm tắt nhóm nhiễu, xác định report/skip rõ và ví dụ hợp lệ để cải thiện trước khi bật lại.

C. Bỏ mọi category review vĩnh viễn.

D. Đổi nhãn mọi finding thành critical.

**3. Chọn một.** Dùng mô hình thời gian của guide: xử lý tối đa24giờ, SLA từ lúc tài liệu đến là30giờ, chưa xét retry/overhead. Chu kỳ gom nào dưới đây còn khoảng đệm?

A. Mỗi8giờ vì24<30.

B. Mỗi12giờ vì batch giảm giá.

C. Mỗi24giờ vì tên là daily batch.

D. Mỗi4giờ: chờ tối đa4+24=28giờ, còn2giờ lý thuyết.

## Đáp án

1. **C.** A bịa giá trị; B che lỗi; D không dạy cách nhận thông tin có thật ở bố cục khác.

2. **B.** A tăng nhiễu; C bỏ cả nhóm hữu ích; D làm severity mất nghĩa. Cần đo precision/recall theo category khi cải thiện.

3. **D.** A/B/C lần lượt có thể chờ8+24=32,12+24=36,24+24=48giờ, đều vượt30. Đệm2giờ chưa tính rủi ro vận hành.
