# Your first conversation with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383390), sources/claude101-lessons/383390.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Một yêu cầu gửi cho Claude, còn gọi là prompt, nên có ba phần: bối cảnh và mục tiêu, nhiệm vụ cụ thể, cùng yêu cầu về kết quả. Nếu nhiệm vụ dựa trên tài liệu, hãy cung cấp tài liệu liên quan để Claude có căn cứ trả lời.

Ví dụ: “Tôi cần giới thiệu quy trình này cho nhân viên mới. Hãy tóm tắt tài liệu đính kèm thành năm bước, dùng từ dễ hiểu và giải thích các chữ viết tắt”. Yêu cầu này rõ hơn câu “Tóm tắt giúp tôi”.

Sau câu trả lời đầu tiên, bạn có thể gửi yêu cầu tiếp để chỉnh sửa. Hãy chỉ rõ phần cần giữ và phần cần đổi, chẳng hạn: “Giữ năm bước trên, nhưng rút ngắn bước 2 và đổi giọng văn cho thân thiện hơn”. Nếu cuộc trò chuyện đã lệch quá xa mục tiêu, có thể mở cuộc trò chuyện mới với yêu cầu rõ hơn.

Bài gốc có nhắc đến tính năng ghi nhớ (memory) và bộ hướng dẫn cho nhiệm vụ chuyên biệt (skills) trong ứng dụng. Đừng suy ra rằng các yêu cầu API gửi riêng lẻ cũng tự nhớ nhau. Trong cách dùng Messages API được học ở đây, ứng dụng cần gửi kèm ngữ cảnh liên quan. Một số thao tác giao diện trong video đã thay đổi; điều cần nắm là cách cung cấp thông tin và phản hồi.

## Câu hỏi

**1. Chọn một.** AI trả báo cáo không đúng đối tượng độc giả. Cần bổ sung trực tiếp gì?

A. Chỉ câu “làm tốt hơn”.

B. Chỉ số token lớn hơn.

C. Bỏ mọi quy tắc.

D. Bối cảnh độc giả, mục tiêu và định dạng cần có.

**2. Chọn một.** Muốn sửa tone mà giữ nội dung tốt, phản hồi nào hữu ích?

A. Nêu cụ thể đoạn/tone cần đổi và giữ những phần phù hợp.

B. Chỉ “sai”.

C. Xóa dữ liệu nguồn bất kể cần.

D. Coi bản nháp là kết quả bắt buộc.

**3. Chọn một.** Memory trên ứng dụng có chứng minh API yêu cầu độc lập tự nhớ nhau không?

A. Có, mọi API dùng cùng cơ chế.

B. Không; cần phân biệt giao diện và trách nhiệm quản lý ngữ cảnh của API.

C. Có, nếu cùng API key.

D. Có, nếu không tạo client mới.

## Đáp án

1. **D.** D giảm mơ hồ đang gây lỗi; A mơ hồ, B không chỉ đối tượng, C bỏ yêu cầu.

2. **A.** A đưa hướng sửa; B thiếu thông tin, C mất căn cứ, D bỏ vòng cải tiến.

3. **B.** B phân biệt lớp sản phẩm; A, C, D giả định tự lưu lịch sử mà mẫu API không có.
