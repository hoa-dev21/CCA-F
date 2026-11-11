# Your first conversation with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383390), sources/claude101-lessons/383390.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Nội dung bài học


Một yêu cầu gửi cho Claude, còn gọi là prompt, nên có ba phần: bối cảnh và mục tiêu, nhiệm vụ cụ thể, cùng yêu cầu về kết quả. Nếu nhiệm vụ dựa trên tài liệu, hãy cung cấp tài liệu liên quan để Claude có căn cứ trả lời.

Ví dụ: “Tôi cần giới thiệu quy trình này cho nhân viên mới. Hãy tóm tắt tài liệu đính kèm thành năm bước, dùng từ dễ hiểu và giải thích các chữ viết tắt”. Yêu cầu này rõ hơn câu “Tóm tắt giúp tôi”.

Sau câu trả lời đầu tiên, bạn có thể gửi yêu cầu tiếp để chỉnh sửa. Hãy chỉ rõ phần cần giữ và phần cần đổi, chẳng hạn: “Giữ năm bước trên, nhưng rút ngắn bước 2 và đổi giọng văn cho thân thiện hơn”. Nếu cuộc trò chuyện đã lệch quá xa mục tiêu, có thể mở cuộc trò chuyện mới với yêu cầu rõ hơn.

Bài gốc có nhắc đến tính năng ghi nhớ (memory) và bộ hướng dẫn cho nhiệm vụ chuyên biệt (skills) trong ứng dụng. Đừng suy ra rằng các yêu cầu API gửi riêng lẻ cũng tự nhớ nhau. Trong cách dùng Messages API được học ở đây, ứng dụng cần gửi kèm ngữ cảnh liên quan. Một số thao tác giao diện trong video đã thay đổi; điều cần nắm là cách cung cấp thông tin và phản hồi.

## Tự kiểm tra

**Câu 1 — Chọn một.** Ứng dụng gửi hai yêu cầu API tách rời. Yêu cầu hai viết “rút ngắn bước 2” nhưng không kèm câu trả lời trước. Chat sản phẩm có ghi nhớ nên nhóm cho rằng lỗi do prompt quá ngắn. Sửa đúng là gì?

A. Tăng độ dài yêu cầu hai bằng hướng dẫn viết văn chung.

B. Yêu cầu API dùng tính năng ghi nhớ của giao diện chat mà không chuyển ngữ cảnh.

C. Gửi nội dung cần sửa cùng mục tiêu và ràng buộc giữ lại trong yêu cầu hai.

D. Thêm tên người dùng vào yêu cầu hai để API tự tìm cuộc trò chuyện.

**Câu 2 — Chọn hai.** Nhóm viết hướng dẫn nhân viên mới từ quy trình nội bộ. Hai phần đầu vào nào cần thiết để giảm việc AI tự đoán?

A. Chỉ tên quy trình vì mô hình biết cách doanh nghiệp thường vận hành.

B. Nhiệm vụ cụ thể cùng cấu trúc, mức chi tiết của đầu ra.

C. Tài liệu quy trình đúng phiên bản và mục tiêu của người đọc.

D. Một lời yêu cầu “chuyên nghiệp” thay cho tiêu chí nội dung.

**Câu 3 — Chọn một.** Bản nháp đã đúng năm bước, riêng bước 2 quá dài. Bạn cần giữ thứ tự và nội dung bốn bước còn lại. Phản hồi nào kiểm soát thay đổi tốt nhất?

A. Giữ năm bước; rút bước 2 còn hai câu, giữ đủ điều kiện.

B. Viết lại toàn bộ cho ngắn hơn và tự chọn lại cấu trúc phù hợp.

C. Giữ nguyên độ dài nhưng đổi vai trò thành chuyên gia truyền thông.

D. Tạo thêm năm cách trình bày rồi chọn bản nghe tự nhiên nhất.

**Câu 4 — Chọn hai.** Hội thoại đã chuyển qua nhiều chủ đề, tài liệu cũ và mới mâu thuẫn. Hai bước nào giúp khởi động lại có kiểm soát?

A. Tóm tắt mục tiêu hiện tại và đưa tài liệu liên quan đúng phiên bản vào phiên mới.

B. Sao chép toàn bộ lịch sử không phân biệt phiên bản và để AI tự chọn.

C. Mở phiên trống rồi chỉ viết “tiếp tục như cũ” để tránh ngữ cảnh dài.

D. Nêu các quyết định cần giữ cùng những yêu cầu đã bị thay thế.

**Câu 5 — Chọn một.** Prompt yêu cầu tóm tắt cho người mới nhưng đầu ra đầy chữ viết tắt. Tài liệu đã đủ và nội dung đúng. Bước điều chỉnh nhắm đúng nguyên nhân?

A. Thay mô hình trước khi xác định yêu cầu diễn đạt còn thiếu.

B. Yêu cầu câu trả lời dài gấp đôi để các thuật ngữ tự trở nên rõ nghĩa.

C. Nêu người đọc, cách giải thích chữ viết tắt và câu mẫu.

D. Thu thập thêm tài liệu kỹ thuật chi tiết hơn rồi giữ prompt cũ.

## Đáp án và giải thích

1. **C.** C cung cấp đối tượng cần sửa. D không tạo lịch sử; A thêm chữ nhưng thiếu dữ liệu; B suy hành vi của sản phẩm sang các yêu cầu API độc lập.

2. **B, C.** C cung cấp căn cứ và bối cảnh; B xác định sản phẩm cần tạo. A bỏ dữ liệu riêng; D chỉ định phong cách nhưng chưa xác định thông tin cần có.

3. **A.** A nêu phần giữ và phần đổi. B có thể làm mất nội dung đã đúng; C không sửa lỗi độ dài; D thêm lựa chọn nhưng không kiểm soát phạm vi sửa.

4. **A, D.** A tái lập căn cứ; D tránh hồi sinh yêu cầu cũ. C thiếu trạng thái; B giữ nguyên sự nhập nhằng đã gây vấn đề.

5. **C.** C sửa tiêu chí giao tiếp còn thiếu. D tăng dữ liệu không giải quyết đối tượng; A đổi công cụ trước khi sửa hợp đồng đầu ra; B độ dài không bảo đảm thuật ngữ được giải thích.
