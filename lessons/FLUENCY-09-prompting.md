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

## Tự kiểm tra

**Câu 1 — Chọn một.** AI trả dữ liệu đúng nhưng tên trường JSON thay đổi giữa các lượt, làm adapter lỗi. Thay đổi prompt nào trực tiếp nhất, trước khi kiểm thử lại adapter?

A. Yêu cầu mô hình suy nghĩ kỹ hơn trước mọi câu trả lời.

B. Giao vai trò chuyên gia dữ liệu nhưng không nêu cấu trúc.

C. Tăng độ dài tối đa để mô hình giải thích các tên trường.

D. Nêu schema, ví dụ hợp lệ và cách biểu diễn dữ liệu thiếu.

**Câu 2 — Chọn hai.** Prompt phân tích yêu cầu gồm chín tiêu chí nhưng AI chỉ xử lý năm tiêu chí đầu. Hai thay đổi nào nhắm đúng lỗi bao phủ?

A. Bổ sung bước đối chiếu đầu ra với danh sách đầy đủ các tiêu chí.

B. Chia nhiệm vụ thành các bước có phạm vi và đầu ra rõ.

C. Chỉ giữ năm tiêu chí AI thường làm tốt nhất.

D. Đổi giọng điệu sang quyết đoán để tránh câu trả lời lửng.

**Câu 3 — Chọn một.** AI đưa ra khuyến nghị mua hàng có vẻ hợp lý nhưng dựa trên giá và điều khoản không có trong tài liệu đã cung cấp. Cách sửa phù hợp nhất?

A. Yêu cầu một vai trò có nhiều năm kinh nghiệm trong lĩnh vực.

B. Thêm ví dụ một khuyến nghị viết thuyết phục.

C. Yêu cầu câu trả lời ngắn để giảm số nhận định.

D. Bổ sung nguồn giá/điều khoản, phân biệt đã biết và chưa biết.

**Câu 4 — Chọn một.** AI đề xuất prompt mới dài gấp ba lần và nói chất lượng sẽ tốt hơn. Nhóm nên quyết định bằng cách nào?

A. Cho AI chấm mức chuyên nghiệp của hai prompt rồi dùng điểm cao hơn.

B. Chọn prompt có câu “kiểm tra trước khi trả lời” nhiều lần hơn.

C. Đo cả hai trên cùng tập và tiêu chí; kiểm tra lỗi mới/cũ.

D. Chấp nhận vì prompt mới mô tả nhiều bước hơn.

**Câu 5 — Chọn hai.** Nhóm dùng vài ví dụ để hướng dẫn phân loại phản hồi, nhưng tất cả ví dụ đều là trường hợp dễ và tích cực. Hai bổ sung nào giúp prompt thể hiện ranh giới quyết định tốt hơn?

A. Thêm nhiều bản sao của ví dụ tích cực để tăng trọng số.

B. Nêu tiêu chí phân loại và cách xử lý thiếu thông tin phù hợp nhiệm vụ.

C. Chỉ đổi nhãn các ví dụ sao cho số lượng mỗi nhãn cân bằng.

D. Thêm trường hợp gần ranh giới, phản ánh nhầm lẫn đã quan sát.

## Đáp án và giải thích

1. **D.** D làm rõ hợp đồng đầu ra cần kiểm chứng. A/B không cung cấp cấu trúc cụ thể. C tăng diễn giải, không bảo đảm trường ổn định; prompt cũng không thay thế validation của ứng dụng.

2. **A, B.** B giảm việc phải xử lý quá nhiều mục trong một bước. A phát hiện phần còn thiếu. D thay cách nói, không đo bao phủ. C giảm yêu cầu nghiệp vụ để che lỗi thay vì đáp ứng nhiệm vụ.

3. **D.** D nhắm thiếu căn cứ. B định hình văn phong, C giảm chiều dài và A định hướng vai trò; cả ba không bổ sung dữ liệu còn thiếu và có thể giữ nguyên suy đoán.

4. **C.** C đánh giá tác động lên đầu ra. D/B suy chất lượng từ hình thức prompt. A có thể góp ý nhưng không thay bằng chứng thực nghiệm trên nhiệm vụ.

5. **B, D.** D minh họa vùng khó; B làm rõ quy tắc và giới hạn. A không mở rộng dạng tình huống. C cân bằng bằng cách đổi nhãn không có căn cứ sẽ dạy sai hợp đồng.
