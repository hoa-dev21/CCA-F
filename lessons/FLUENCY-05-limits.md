# Capabilities & limitations — Khả năng và giới hạn

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291880), sources/fluency-lessons/291880.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Tóm tắt

Generative AI linh hoạt với nhiều tác vụ ngôn ngữ, có thể theo dõi hội thoại khi được cung cấp ngữ cảnh và kết nối công cụ để dùng thông tin bên ngoài. Khả năng này đi cùng hạn chế: kiến thức có mốc thời gian, có thể tạo thông tin sai, context hữu hạn và các bài toán suy luận khó.

Câu trả lời trôi chảy không tự chứng minh độ đúng. Chọn ứng dụng dựa trên khả năng thực tế và cách kiểm chứng, không dựa vào một ví dụ thành công đơn lẻ. Con người bổ sung chuyên môn, phán đoán và trách nhiệm.

Ví dụ tự biên soạn: báo cáo về trạng thái đơn hàng hiện tại cần nguồn dữ liệu mới hoặc công cụ tích hợp; không nên chỉ dựa vào tri thức huấn luyện. Trong API, ứng dụng vẫn phải quản lý lịch sử/context phù hợp, không suy từ trải nghiệm chat rằng request độc lập tự nhớ nhau.

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

**3. Chọn một.** Tại sao cần quản lý context ở phiên dài?

A. Context là vô hạn.

B. Mọi thông tin cũ được giữ chính xác mãi.

C. Không thể dùng hội thoại.

D. Context hữu hạn, thông tin quan trọng có thể không còn trong đầu vào phù hợp.

## Đáp án

1. **C.** C mô tả đầu ra sai; A và B phủ nhận quá mức khả năng, D nhầm diễn đạt với sự thật.
2. **B.** B bổ sung bằng chứng mới; A, C, D không lấy trạng thái hiện tại.
3. **D.** D nêu giới hạn; A, B sai về duy trì vô hạn, C phủ nhận quá rộng khả năng.
