# Khả năng và giới hạn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291880), sources/fluency-lessons/291880.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học

AI tạo sinh (Generative AI) có thể giúp bạn viết, tóm tắt, dịch và trả lời câu hỏi. AI cũng có thể trả lời tiếp dựa trên nội dung trò chuyện trước đó, nếu được cung cấp nội dung này. Khi kết nối với công cụ hoặc nguồn dữ liệu bên ngoài, AI có thể tra cứu thêm thông tin để trả lời.

Tuy nhiên, AI vẫn có thể trả lời sai, kể cả khi câu trả lời nghe rất tự tin và hợp lý. Kiến thức có sẵn của AI có thể đã cũ. AI cũng có thể bỏ sót thông tin trong cuộc trò chuyện dài hoặc gặp khó khăn với những bài toán cần suy luận nhiều bước.

Vì vậy, đừng vội tin chỉ vì AI trả lời trôi chảy, và đừng cho rằng AI luôn làm tốt chỉ sau vài lần thử thành công. Hãy chọn công việc phù hợp với khả năng của AI và kiểm tra kết quả trước khi sử dụng. Con người vẫn cần dùng kiến thức và kinh nghiệm của mình để đánh giá, quyết định và chịu trách nhiệm.

Ví dụ: Nếu bạn hỏi “Đơn hàng của tôi đang ở đâu?”, AI cần tra cứu hệ thống đơn hàng để biết tình trạng mới nhất. Chỉ dựa vào kiến thức có sẵn thì AI không thể biết đơn hàng hiện đang ở đâu.

Khi xây dựng ứng dụng dùng API: Ứng dụng cần gửi kèm những phần liên quan của cuộc trò chuyện trước đó để AI hiểu câu hỏi tiếp theo. Đừng mặc định rằng AI tự nhớ các yêu cầu đã gửi riêng lẻ.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Trợ lý trả vị trí hiện tại của đơn hàng rất cụ thể dù chỉ nhận mã đơn và không có kết nối hệ thống. Sửa nào nhắm đúng nguồn thiếu thông tin?

A. Yêu cầu trả lời ít chắc chắn hơn nhưng giữ quy trình hiện tại.

B. Thêm ví dụ trạng thái đơn hàng vào prompt rồi dùng ví dụ gần nhất.

C. Đưa nguồn hiện tại được phép vào luồng rồi kiểm chứng.

D. Chạy cùng câu hỏi nhiều lần rồi lấy trạng thái được nhắc nhiều nhất.

**Câu 2 — Chọn một.** Năm demo đều đúng, nhưng dữ liệu thực tế đa dạng hơn và có tác vụ cần nhiều bước suy luận. Quyết định triển khai nào phù hợp?

A. Coi năm lần đúng là chứng minh đủ khả năng tổng quát.

B. Đo trên mẫu đại diện/ca khó, kiểm chứng theo rủi ro.

C. Chỉ kiểm tra ngữ pháp vì sai nội dung sẽ làm câu trả lời thiếu trôi chảy.

D. Tăng độ tự tin trong prompt để mô hình không do dự khi gặp trường hợp mới.

**Câu 3 — Chọn hai.** Ứng dụng gọi API riêng cho từng lượt, nhưng câu “đổi phương án thứ hai thành rẻ hơn” không kèm lịch sử. Hai việc nào giúp giải quyết thiếu ngữ cảnh?

A. Gửi các phương án trước cùng yêu cầu mới trong đầu vào liên quan.

B. Tăng số lần retry nguyên yêu cầu vì context có thể được nhớ lại.

C. Xác định rõ đối tượng “phương án thứ hai” và các ràng buộc cần giữ.

D. Dựa vào việc cùng API key để suy ra mô hình có chung trí nhớ hội thoại.

**Câu 4 — Chọn một.** AI vừa tra cứu một nguồn nhưng dữ liệu nguồn được cập nhật từ tháng trước. Người dùng cần trạng thái hôm nay. Kết luận nào đúng?

A. Có công cụ là đủ để bảo đảm thông tin mới.

B. Thời điểm gọi công cụ có thể dùng thay thời điểm cập nhật nguồn.

C. Kết quả tra cứu luôn đáng tin hơn mọi dữ liệu người dùng đưa.

D. Kiểm tra độ mới/phạm vi nguồn, không chỉ lúc lấy về.

**Câu 5 — Chọn hai.** Sau nhiều lượt, AI bỏ quên một ràng buộc và đưa số liệu tự tin nhưng không có căn cứ. Hai bước nào giải quyết hai giới hạn này?

A. Nạp lại ràng buộc quan trọng vào ngữ cảnh đang dùng.

B. Chỉ yêu cầu dùng giọng khiêm tốn hơn cho toàn câu trả lời.

C. Đối chiếu số liệu với nguồn và biểu diễn phần chưa xác minh.

D. Giữ câu trả lời vì tính nhất quán về văn phong cho thấy mô hình hiểu nhiệm vụ.

## Đáp án và giải thích

1. **C.** C cung cấp bằng chứng riêng cho đơn hàng. A giảm mức khẳng định nhưng chưa trả được trạng thái. B cung cấp mẫu, không phải dữ liệu đơn. D đồng thuận giữa các suy đoán không tạo thông tin hiện tại.

2. **B.** B không suy rộng quá demo và xét giới hạn suy luận. A mẫu nhỏ chưa bao phủ thực tế. C văn phong trôi chảy không báo độ đúng. D thay đổi cách diễn đạt, không chứng minh khả năng giải quyết.

3. **A, C.** A cung cấp thông tin bị thiếu; C loại mơ hồ về đối tượng và điều kiện. B không thêm dữ liệu. D danh tính xác thực không chứng minh lịch sử yêu cầu đã được cung cấp cho mô hình.

4. **D.** D phân biệt thời điểm truy xuất và thời điểm thông tin có hiệu lực. A coi kết nối là bảo đảm. B làm sai metadata của dữ liệu. C xếp hạng nguồn tuyệt đối mà không kiểm tra chất lượng cụ thể.

5. **A, C.** A xử lý thiếu/bỏ sót context; C xử lý nội dung thiếu căn cứ. B sửa mức thể hiện tự tin chứ không sửa dữ kiện. D phong cách nhất quán không chứng minh tính đúng hay mức hiểu ràng buộc.
