# The Description-Discernment loop

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291901), sources/fluency-lessons/291901.json. Bản rút gọn/chuyển ngữ từ văn bản bài học; câu hỏi tự biên soạn, không phải đề thi thật.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025). Bản gốc và phần chuyển thể này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); có bổ sung ví dụ/câu hỏi.

## Nội dung bài học


Làm việc với AI thường cần nhiều lượt: mô tả yêu cầu, kiểm tra kết quả, phản hồi rồi kiểm tra bản sửa. Đây là vòng lặp giữa mô tả (Description) và đánh giá (Discernment).

Bắt đầu từ kế hoạch và phần việc đã giao cho AI. Nêu rõ kết quả cần tạo, cách thực hiện và cách tương tác mong muốn. Khi nhận câu trả lời, đối chiếu với những yêu cầu đó và chỉ ra phần cần sửa.

Ví dụ: Bạn yêu cầu bảng so sánh có chi phí nhưng AI bỏ sót cột này. Hãy nói rõ cột còn thiếu và dữ liệu cần dùng, rồi kiểm tra xem bản sửa đã đáp ứng chưa. Lặp nguyên yêu cầu mà không chỉ ra vấn đề thường không giúp bạn biết vì sao kết quả chưa đạt.

Khi so sánh các bản sửa, hãy dùng cùng tiêu chí để biết kết quả có tốt hơn không. Nếu có thông tin mới làm thay đổi yêu cầu, ghi lại thay đổi và điều chỉnh kế hoạch. Bạn vẫn là người quyết định giữ, sửa hay bỏ kết quả cuối cùng.

## Tự kiểm tra

**Câu 1 — Chọn một.** AI bỏ cột chi phí đã được yêu cầu trong bảng so sánh. Bạn gửi lại nguyên prompt ba lần nhưng lỗi lặp lại. Bước nào cải thiện vòng Description–Discernment?

A. Đổi sang dạng văn xuôi để không phải có cột chi phí.

B. Tăng độ dài prompt bằng cách lặp yêu cầu nhiều hơn.

C. Nêu cột thiếu và nguồn chi phí; kiểm tra lại bản sửa.

D. Chấp nhận bảng nếu các cột còn lại đều tốt.

**Câu 2 — Chọn một.** Nhóm sửa prompt và đồng thời đổi bộ tiêu chí chấm theo những điểm bản mới làm tốt. Bản mới có điểm cao hơn. Kết luận nào có cơ sở?

A. Chỉ cần lấy trung bình điểm cũ và mới để có chất lượng thực.

B. Cần cùng tiêu chí hoặc tách tác động do đổi mục tiêu.

C. Prompt mới kém hơn vì tiêu chí đã thay đổi.

D. Có thể khẳng định prompt mới tốt hơn vì điểm đã tăng.

**Câu 3 — Chọn hai.** Trong lúc sửa đề xuất, dữ liệu mới cho thấy deadline cũ không còn khả thi. Hai hành động nào phù hợp?

A. Giữ deadline cũ để các lượt sửa có cùng tiêu chí hình thức.

B. Làm rõ yêu cầu cập nhật và đánh giá bản tiếp theo theo tiêu chí mới đã thống nhất.

C. Xóa dữ liệu mới khỏi context vì nó làm khó việc hoàn tất.

D. Ghi lại thông tin mới và điều chỉnh kế hoạch/phân công nếu cần.

**Câu 4 — Chọn một.** AI sửa đúng lỗi bạn nêu nhưng vô tình làm mất một phần đã đúng ở bản trước. Cách đánh giá bản sửa nào thích hợp nhất?

A. Chấp nhận nếu AI xác nhận chỉ sửa một chỗ.

B. Chỉ kiểm tra lỗi vừa yêu cầu sửa vì phần cũ từng đạt.

C. Kiểm tra lỗi đã sửa và các yêu cầu cần giữ từ bản cũ.

D. Yêu cầu quay lại toàn bộ bản cũ mà không xem lỗi ban đầu.

**Câu 5 — Chọn hai.** Sau nhiều lượt, AI đề nghị chốt bản cuối. Hai căn cứ nào nên chi phối quyết định giữ/sửa/bỏ của người dùng?

A. Độ tự tin trong câu kết luận của AI sau lượt cuối.

B. Kết quả đã đáp ứng các tiêu chí chấp nhận và bằng chứng cần thiết.

C. Số lượt đã đạt kế hoạch nên công việc được coi là hoàn tất.

D. Các giới hạn còn lại và tác động của chúng đối với mục đích sử dụng.

## Đáp án và giải thích

1. **C.** C nối chẩn đoán cụ thể với yêu cầu sửa và kiểm chứng. B không làm rõ nguyên nhân. D bỏ tiêu chí. A thay hình thức để tránh yêu cầu thay vì đáp ứng thông tin cần cho quyết định.

2. **B.** B giữ tính so sánh và ghi nhận thay đổi yêu cầu. D nhầm thước đo mới với tiến bộ. C cũng kết luận quá mức. A trộn hai đại lượng không cùng cách đo.

3. **B, D.** D và B thích ứng có kiểm soát và giữ dấu vết thay đổi. A cố giữ tiêu chí đã không còn phù hợp. C bỏ bằng chứng để bảo vệ kế hoạch thay vì cập nhật quyết định.

4. **C.** C phát hiện cả cải thiện lẫn hồi quy. B bỏ ảnh hưởng phụ. A tin mô tả thay vì kiểm tra sản phẩm. D loại cải tiến có thể hữu ích và phục hồi lỗi đã biết.

5. **B, D.** B xác định phần đạt, D xác định rủi ro còn lại để người dùng phán đoán. C nhầm lượng nỗ lực với chất lượng. A tự tin không thay thế căn cứ và trách nhiệm quyết định của người dùng.
