# Getting better results

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383392), sources/claude101-lessons/383392.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Khi câu trả lời chưa đạt, hãy xác định cụ thể vấn đề trước khi sửa yêu cầu:

- Quá chung chung: bổ sung tình huống, người đọc và mục tiêu.
- Quá dài: nêu độ dài hoặc số ý cần có.
- Sai định dạng: đưa cấu trúc mong muốn và một ví dụ.
- Có thông tin đáng ngờ: đối chiếu với nguồn phù hợp trước khi sử dụng.

Ví dụ: Claude viết lời tư vấn chưa sát khách hàng. Bạn cần bổ sung khách hàng đang gặp vấn đề gì và muốn đạt kết quả nào. Chỉ yêu cầu “hãy viết tốt hơn” không cho Claude biết thông tin còn thiếu.

Với công việc lặp lại, hãy chọn một số ví dụ thật, đặt tiêu chí đánh giá, thử yêu cầu rồi sửa theo lỗi quan sát được. Một vài lần thử thành công giúp bạn làm quen và cải tiến, nhưng chưa đủ để kết luận hệ thống sẽ làm tốt trong mọi tình huống thực tế.

Nếu số liệu đã đúng nhưng kết luận thiếu ý, hãy chỉ ra ý cần phân tích thêm. Viết dài hơn hoặc trả lời tự tin hơn không tự làm kết quả chính xác hơn.

## Tự kiểm tra

**Câu 1 — Chọn một.** Email tư vấn đúng ngữ pháp nhưng đề xuất sản phẩm vượt ngân sách khách hàng. Prompt chỉ ghi “viết email chuyên nghiệp”. Thay đổi nào ưu tiên?

A. Yêu cầu mô hình thể hiện sự tự tin của chuyên gia bán hàng.

B. Bổ sung nhu cầu, ngân sách và tiêu chí của khách hàng.

C. Đưa thêm ví dụ lời chào và chữ ký theo thương hiệu.

D. Giảm số từ để email súc tích hơn.

**Câu 2 — Chọn hai.** Một quy trình tạo báo cáo sẽ dùng hàng tuần. Hai bước nào tạo cơ sở cải tiến đáng tin hơn việc chọn bản văn hay nhất?

A. So sánh độ tự tin trong lời kết luận thay cho đối chiếu dữ liệu.

B. Chỉ dùng mẫu đã sửa thành công để chứng minh độ ổn định.

C. Ghi lỗi quan sát được, sửa yêu cầu và kiểm tra lại theo cùng tiêu chí.

D. Đặt tiêu chí rõ và thử trên các ví dụ thật có đặc điểm khác nhau.

**Câu 3 — Chọn một.** JSON đầu ra thường có đủ thông tin nhưng sai tên trường, làm hệ thống nhận dữ liệu từ chối. Cách sửa prompt trực tiếp nhất?

A. Bổ sung thêm dữ liệu nền về chủ đề cần phân tích.

B. Yêu cầu phản hồi ngắn hơn để giảm số token.

C. Yêu cầu suy nghĩ kỹ hơn nhưng không nêu hợp đồng đầu ra.

D. Nêu cấu trúc trường và một ví dụ đầu ra hợp lệ.

**Câu 4 — Chọn hai.** Báo cáo có số liệu đúng nhưng kết luận bỏ qua chi phí vận hành. Hai phản hồi nào hữu ích?

A. Cung cấp nguồn chi phí liên quan và yêu cầu ghi rõ chỗ còn thiếu dữ liệu.

B. Chỉ ra yếu tố bị thiếu và yêu cầu phân tích ảnh hưởng của nó tới kết luận.

C. Yêu cầu giữ nguyên kết luận và thêm lời khẳng định chắc chắn.

D. Yêu cầu thêm ba đoạn văn bất kỳ để kết luận sâu hơn.

**Câu 5 — Chọn một.** Prompt mới đạt 5/5 ví dụ demo do người viết tự chọn. Nhóm định bỏ kiểm tra đầu ra. Kết luận hợp lý nhất?

A. Tăng số lần chạy cùng một ví dụ dễ để thay thế đánh giá các dạng đầu vào khác.

B. Có tín hiệu tốt; cần thử thêm trên mẫu đại diện và ca khó.

C. Năm mẫu đúng đủ chứng minh prompt xử lý mọi đầu vào cùng chủ đề.

D. Chỉ cần hỏi mô hình độ tin cậy rồi dùng điểm tự báo cáo để quyết định.

## Đáp án và giải thích

1. **B.** B xử lý thông tin quyết định còn thiếu. C và D chỉ đổi hình thức; A có thể làm đề xuất sai nghe thuyết phục hơn.

2. **C, D.** D tạo tập đánh giá liên quan; C nối thay đổi với kết quả. B thiên lệch về dữ liệu đã tối ưu; A đo phong cách thay vì chất lượng.

3. **D.** D làm rõ yêu cầu cấu trúc. A sửa sai tầng; B không xác định tên trường; C không thay thế hợp đồng định dạng.

4. **A, B.** B sửa thiếu sót lập luận; A bổ sung căn cứ. D tăng dung lượng không bảo đảm đúng trọng tâm; C khóa kết luận trước khi xem bằng chứng bổ sung.

5. **B.** B giới hạn kết luận theo bằng chứng. C khái quát quá mức; D chưa có hiệu chỉnh; A kiểm tra lặp lại một dạng không đo độ bao phủ.
