# Effective prompting techniques

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291895), sources/fluency-lessons/291895.json. Bản rút gọn/chuyển ngữ từ văn bản bài học; câu hỏi tự biên soạn, không phải đề thi thật.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025). Bản gốc và phần chuyển thể này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); có bổ sung ví dụ/câu hỏi.

## Nội dung bài học


Prompt là câu yêu cầu hoặc phần hướng dẫn bạn gửi cho AI. Bài học giới thiệu sáu cách giúp yêu cầu rõ hơn:

1. Cung cấp bối cảnh: cho AI biết mục tiêu, người đọc và dữ liệu liên quan.
2. Đưa ví dụ: cho một mẫu để AI hiểu kết quả bạn mong muốn.
3. Nêu điều kiện cần tuân thủ: chẳng hạn độ dài, định dạng hoặc những nội dung phải có.
4. Chia nhiệm vụ phức tạp thành các bước có phạm vi rõ.
5. Dành một bước kiểm tra dữ liệu và yêu cầu trước khi đưa ra câu trả lời.
6. Xác định vai trò và giọng điệu phù hợp, chẳng hạn giải thích như một gia sư cho người mới học.

Chọn cách sửa dựa trên lỗi thực tế. Nếu AI trả sai cấu trúc JSON, hãy nêu rõ cấu trúc và đưa mẫu. Nếu AI bỏ sót nhiều yêu cầu, hãy chia nhiệm vụ thành các bước. Nếu câu trả lời thiếu căn cứ, hãy bổ sung dữ liệu liên quan.

Bạn có thể nhờ AI góp ý để cải thiện prompt, rồi thử lại và đánh giá kết quả theo tiêu chí đã đặt. Yêu cầu “hãy suy nghĩ trước khi trả lời” không bảo đảm câu trả lời đúng; điều cần kiểm tra là kết quả và căn cứ mà AI trình bày.

## Câu hỏi

**1. Chọn một.** AI trả sai cấu trúc JSON mong muốn. Sửa prompt trực tiếp nhất trong bài?

A. Chỉ khen AI.

B. Chỉ đổi chủ đề.

C. Bỏ mọi ràng buộc.

D. Nêu cấu trúc và ví dụ đầu ra cần có.

**2. Chọn một.** Nhiệm vụ nhiều phần thường bị bỏ sót. Kỹ thuật nào phù hợp?

A. Chia thành các bước có phạm vi rõ.

B. Chỉ yêu cầu nhanh hơn.

C. Xóa các phần khó.

D. Không đưa bối cảnh.

**3. Chọn một.** Nhờ AI cải thiện prompt có thay thế việc đo chất lượng không?

A. Có, luôn bảo đảm đúng.

B. Chưa; vẫn kiểm tra đầu ra theo tiêu chí.

C. Có, nếu prompt dài.

D. Có, nếu giọng tự tin.

## Đáp án

1. **D.** D cung cấp mục tiêu định dạng; A, B không sửa lỗi, C làm mơ hồ hơn.

2. **A.** A giảm tải từng bước; B không xử lý bao phủ, C bỏ yêu cầu, D thiếu dữ liệu.

3. **B.** B giữ vòng kiểm chứng; A, C, D suy từ hình thức sang độ đúng.
