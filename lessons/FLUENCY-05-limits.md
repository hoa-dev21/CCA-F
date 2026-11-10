# Khả năng và giới hạn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291880), sources/fluency-lessons/291880.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học

AI tạo sinh (Generative AI) có thể giúp bạn viết, tóm tắt, dịch và trả lời câu hỏi. AI cũng có thể trả lời tiếp dựa trên nội dung trò chuyện trước đó, nếu được cung cấp nội dung này. Khi kết nối với công cụ hoặc nguồn dữ liệu bên ngoài, AI có thể tra cứu thêm thông tin để trả lời.

Tuy nhiên, AI vẫn có thể trả lời sai, kể cả khi câu trả lời nghe rất tự tin và hợp lý. Kiến thức có sẵn của AI có thể đã cũ. AI cũng có thể bỏ sót thông tin trong cuộc trò chuyện dài hoặc gặp khó khăn với những bài toán cần suy luận nhiều bước.

Vì vậy, đừng vội tin chỉ vì AI trả lời trôi chảy, và đừng cho rằng AI luôn làm tốt chỉ sau vài lần thử thành công. Hãy chọn công việc phù hợp với khả năng của AI và kiểm tra kết quả trước khi sử dụng. Con người vẫn cần dùng kiến thức và kinh nghiệm của mình để đánh giá, quyết định và chịu trách nhiệm.

Ví dụ: Nếu bạn hỏi “Đơn hàng của tôi đang ở đâu?”, AI cần tra cứu hệ thống đơn hàng để biết tình trạng mới nhất. Chỉ dựa vào kiến thức có sẵn thì AI không thể biết đơn hàng hiện đang ở đâu.

Khi xây dựng ứng dụng dùng API: Ứng dụng cần gửi kèm những phần liên quan của cuộc trò chuyện trước đó để AI hiểu câu hỏi tiếp theo. Đừng mặc định rằng AI tự nhớ các yêu cầu đã gửi riêng lẻ.

## Câu hỏi

**1. Chọn một.** AI đưa số liệu sai nhưng lời giải thích rất tự tin. Hạn chế nào liên quan?

A. Không thể tạo văn bản.

B. Không có bất kỳ khả năng ngôn ngữ nào.

C. Hallucination; cần xác minh nguồn.

D. Mọi dữ liệu sai đều thành đúng khi nói rõ.

**2. Chọn một.** Cần trạng thái hệ thống mới nhất. Hướng thiết kế phù hợp?

A. Chỉ tin dữ liệu huấn luyện.

B. Đưa dữ liệu hiện tại qua nguồn/công cụ phù hợp rồi kiểm tra.

C. Không cần kết nối hệ thống.

D. Tăng độ dài câu trả lời thay truy xuất.

**3. Chọn một.** Tại sao cần quản lý ngữ cảnh ở phiên dài?

A. Ngữ cảnh là vô hạn.

B. Mọi thông tin cũ được giữ chính xác mãi.

C. Không thể dùng hội thoại.

D. Ngữ cảnh hữu hạn, thông tin quan trọng có thể không còn trong đầu vào phù hợp.

## Đáp án

1. **C.** C mô tả đầu ra sai; A và B phủ nhận quá mức khả năng, D nhầm diễn đạt với sự thật.
2. **B.** B bổ sung bằng chứng mới; A, C, D không lấy trạng thái hiện tại.
3. **D.** D nêu giới hạn; A, B sai về duy trì vô hạn, C phủ nhận quá rộng khả năng.
