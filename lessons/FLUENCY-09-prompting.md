# Effective prompting techniques

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291895), sources/fluency-lessons/291895.json. Bản rút gọn/chuyển ngữ từ văn bản bài học; câu hỏi tự biên soạn, không phải đề thi thật.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025). Bản gốc và phần chuyển thể này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); có bổ sung ví dụ/câu hỏi.

## Tóm tắt

Bài giới thiệu sáu kỹ thuật: cung cấp bối cảnh, đưa ví dụ, chỉ định ràng buộc, chia nhiệm vụ phức tạp, dành bước xem xét trước khi trả lời và xác định vai trò/giọng điệu.

Chọn kỹ thuật theo lỗi: đầu ra sai format thì nêu format và ví dụ; thiếu bối cảnh thì bổ sung dữ liệu liên quan; tác vụ nhiều yêu cầu thì chia bước. Có thể nhờ AI giúp cải thiện prompt, nhưng đánh giá kết quả thực tế vẫn cần thiết. Không coi lời yêu cầu “nghĩ trước” là bảo đảm mọi kết luận đúng hoặc là yêu cầu cung cấp toàn bộ suy nghĩ nội bộ.

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
