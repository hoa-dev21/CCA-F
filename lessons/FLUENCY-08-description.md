# A closer look at Description

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291891), sources/fluency-lessons/291891.json. Bản rút gọn/chuyển ngữ từ văn bản bài học; câu hỏi tự biên soạn, không phải đề thi thật.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025). Bản gốc và phần chuyển thể này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); có bổ sung ví dụ/câu hỏi.

## Nội dung bài học


Mô tả yêu cầu (Description) là giúp AI hiểu bạn muốn nhận kết quả gì và muốn hai bên làm việc với nhau như thế nào. Có ba phần cần phân biệt:

- Kết quả cần tạo (Product): nội dung gì, dành cho ai, trình bày theo định dạng và phong cách nào. Ví dụ: “Tạo bảng so sánh hai cột cho người mới học”.
- Cách thực hiện (Process): hướng tiếp cận nhiệm vụ. Ví dụ: “Đối chiếu từng yêu cầu với tài liệu nguồn trước khi kết luận”.
- Cách tương tác (Performance): AI nên giao tiếp và phối hợp với bạn ra sao. Ví dụ: “Trả lời ngắn gọn, hỏi lại khi thiếu dữ liệu và chỉ ra điểm chưa hợp lý trong đề xuất của tôi”.

Nếu nội dung đúng nhưng câu trả lời quá dài, hãy làm rõ cách tương tác mong muốn. Nếu AI dùng cách phân tích không phù hợp, hãy sửa hướng dẫn về cách thực hiện. Mô tả rõ giúp AI bớt phải đoán ý, nhưng bạn vẫn cần kiểm tra kết quả.

## Tự kiểm tra

**Câu 1 — Chọn một.** Một nhóm yêu cầu AI “so sánh hai giải pháp cho ban điều hành”. Kết quả đúng dữ kiện nhưng thành bài hướng dẫn kỹ thuật dài, thiếu bảng quyết định. Sửa mô tả nào nhắm trực tiếp vào sản phẩm cần nhận?

A. Nêu người đọc, tiêu chí và cấu trúc bảng cần bàn giao.

B. Yêu cầu AI kiểm tra từng con số hai lần trước khi viết.

C. Yêu cầu AI phản biện mạnh hơn trong mọi lượt trao đổi.

D. Chia nghiên cứu thành nhiều lượt nhưng giữ nguyên mô tả đầu ra.

**Câu 2 — Chọn một.** Báo cáo chọn nhà cung cấp đã đúng định dạng nhưng kết luận trước khi kiểm tra chi phí vận hành. Nhóm muốn giữ định dạng hiện tại. Can thiệp nào phù hợp nhất?

A. Đổi báo cáo sang infographic để thấy chi phí rõ hơn.

B. Đưa toàn bộ báo cáo vào phụ lục và chỉ trình bày kết luận.

C. Yêu cầu giọng văn ít tự tin hơn mà giữ cách phân tích.

D. Đối chiếu tiêu chí và căn cứ chi phí trước kết luận.

**Câu 3 — Chọn hai.** AI liên tục đồng ý với phương án của kiến trúc sư dù dữ liệu còn thiếu. Hai chỉ dẫn nào chủ yếu cải thiện Performance trong quan hệ cộng tác?

A. Yêu cầu nêu bất đồng có căn cứ và nói rõ điểm chưa đủ thông tin.

B. Yêu cầu tính tổng chi phí ba năm theo một công thức cố định.

C. Chỉ rõ khi nào cần hỏi lại thay vì tự giả định ý người dùng.

D. Yêu cầu mỗi bảng so sánh có đúng bốn cột.

**Câu 4 — Chọn một.** Một prompt ghi “bản đề xuất tối đa một trang”, sau đó yêu cầu “giải thích đầy đủ từng nguồn và từng phép tính ngay trong bản đề xuất”. AI liên tục vi phạm độ dài. Cách sửa tốt nhất?

A. Tăng vai trò từ chuyên viên lên kiến trúc sư trưởng.

B. Bỏ toàn bộ yêu cầu nguồn để ưu tiên hình thức.

C. Lặp lại giới hạn một trang ở đầu và cuối prompt.

D. Tách đề xuất một trang và phụ lục chứa bằng chứng.

**Câu 5 — Chọn hai.** Nhóm đã mô tả rõ Product, Process và Performance cho tác vụ rủi ro cao. Hai kết luận nào vẫn đúng?

A. Đầu ra vẫn cần kiểm tra theo tiêu chí và nguồn dữ liệu thực tế.

B. Mô tả đủ ba phần là bằng chứng kết quả đã chính xác.

C. Nếu đầu ra sai, cần xác định khía cạnh nào chưa đạt để phản hồi có mục tiêu.

D. Chỉ cần đánh giá văn phong vì Process đã được chỉ định trong prompt.

## Đáp án và giải thích

1. **A.** A làm rõ Product: đối tượng, nội dung và hình thức bàn giao. B sửa Process về kiểm chứng nhưng không xác định sản phẩm. C sửa Performance về tương tác. D có thể hỗ trợ xử lý nhưng vẫn để AI đoán kết quả mong đợi.

2. **D.** D sửa Process, tức thứ tự và phương pháp hình thành kết luận. A đổi Product nhưng không sửa phân tích. C đổi cách diễn đạt mà thiếu kiểm chứng. B giảm khả năng nhìn thấy thiếu hụt chứ không bổ sung nó.

3. **A, C.** C và A quy định cách phối hợp, phản hồi và bộc lộ bất định. D quy định hình thức Product. B quy định Process tính toán. Các phần đều có ích nhưng giải quyết khía cạnh khác nhau.

4. **D.** D giải quyết xung đột Product bằng cấu trúc bàn giao rõ. C nhấn mạnh mà không hòa giải yêu cầu. B bỏ khả năng kiểm chứng cần thiết. A thay vai trò nhưng giữ mâu thuẫn.

5. **A, C.** A giữ Discernment sau Description. C giúp sửa đúng nguyên nhân thay vì tăng mọi chỉ dẫn. B nhầm hướng dẫn rõ với kết quả đúng. D giả định chỉ định quy trình đồng nghĩa quy trình đã được tuân thủ và dữ liệu đã đúng.
