# Tình huống few-shot, false positives và độ trễ batch

Nguồn: Exam Guide CCAR-F v1.0 July2026, mục4.1–4.6, trang PDF16–19. Câu hỏi tự biên soạn.

## Nội dung bài học


Một vài ví dụ có chủ đích (few-shot) giúp làm rõ những trường hợp mà hướng dẫn bằng lời vẫn dễ bị hiểu khác nhau. Chọn cả trường hợp hợp lệ dễ bị cảnh báo sai và trường hợp thực sự cần báo, kèm lý do cùng định dạng kết quả.

Với trích xuất tài liệu, ví dụ nên cho thấy cùng thông tin có thể nằm ở các vị trí khác nhau. Chẳng hạn, tài liệu không có mục “Methodology” nhưng phương pháp nghiên cứu nằm trong phần mở đầu. Có thể minh họa cách tìm và đánh giá lại trên tài liệu mới. Không dùng ví dụ để dạy tự điền khi nguồn thật sự không có thông tin.

Theo dõi cảnh báo sai (false positives) theo nhóm hoặc kiểu lỗi, không chỉ xem điểm trung bình. Nếu nhóm góp ý phong cách quá nhiễu làm kỹ sư bỏ qua cả lỗi bảo mật, có thể tạm tắt nhóm đó, làm rõ tiêu chí báo hoặc bỏ qua rồi kiểm tra trước khi bật lại.

Khi chọn xử lý theo lô (batch), phải xét tổng thời gian chờ gom và thời gian xử lý. Theo tình huống trong đề cương, hạn 30 giờ với xử lý tối đa 24 giờ và chu kỳ gom 4 giờ tạo thời gian tối đa lý thuyết là 28 giờ, còn 2 giờ đệm.

Đây là phép tính chưa gồm thử lại và thời gian phụ. Nó không phải bảo đảm cho hệ thống vận hành thực tế. Batch phù hợp với công việc chấp nhận chờ, không chỉ vì có lợi về chi phí.

## Câu hỏi

**1. Chọn một.** Field phương pháp nghiên cứu thường null ở tài liệu không có mục Methodology nhưng thông tin thực ra nằm trong đoạn mở đầu. Cải thiện nào sát nguyên nhân nhất?

A. Luôn điền phương pháp phổ biến nhất.

B. Bỏ mọi trường null mà không kiểm tra.

C. Thêm few-shot cho bố cục có phương pháp nhúng trong đoạn và phép đánh giá trên tài liệu mới.

D. Chỉ bắt mô hình tự tin hơn.

**2. Chọn một.** Category comment-style tạo nhiều cảnh báo sai khiến kỹ sư bỏ qua cả lỗi bảo mật thật. Lựa chọn phù hợp nhất?

A. Thêm thật nhiều cảnh báo style.

B. Tạm tắt nhóm nhiễu, xác định report/skip rõ và ví dụ hợp lệ để cải thiện trước khi bật lại.

C. Bỏ mọi category kiểm tra vĩnh viễn.

D. Đổi nhãn mọi finding thành critical.

**3. Chọn một.** Theo tình huống trong đề cương: xử lý tối đa 24 giờ, hạn hoàn thành là 30 giờ từ lúc tài liệu đến, chưa tính thử lại và thời gian phụ. Chu kỳ gom nào dưới đây còn khoảng đệm?

A. Mỗi 8 giờ vì 24 < 30.

B. Mỗi 12 giờ vì xử lý theo lô được giảm giá.

C. Mỗi 24 giờ vì gọi là xử lý theo lô hằng ngày.

D. Mỗi 4 giờ: chờ tối đa 4 + 24 = 28 giờ, còn 2 giờ đệm theo lý thuyết.

## Đáp án

1. **C.** A bịa giá trị; B che lỗi; D không dạy cách nhận thông tin có thật ở bố cục khác.

2. **B.** A tăng nhiễu; C bỏ cả nhóm hữu ích; D làm severity mất nghĩa. Cần đo precision/recall theo category khi cải thiện.

3. **D.** A, B, C lần lượt có thể mất 8 + 24 = 32 giờ, 12 + 24 = 36 giờ và 24 + 24 = 48 giờ, đều vượt hạn 30 giờ. Khoảng đệm 2 giờ của D chưa tính thử lại hoặc các chậm trễ khác khi vận hành.
