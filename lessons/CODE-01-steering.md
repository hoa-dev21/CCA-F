# Điều hướng phiên dài

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486901), sources/code-lessons/486901.json. Câu hỏi tự biên soạn. Các tính năng mới trong khóa không mặc định đều nằm trong Exam Guide.

## Nội dung bài học


Với nhiệm vụ dài, nên khảo sát dự án và làm rõ hướng triển khai trước khi sửa mã. Chế độ lập kế hoạch (plan mode) phục vụ việc đọc, phân tích và đề xuất. Bạn có thể xem kế hoạch, bổ sung yêu cầu còn thiếu rồi mới cho thực hiện.

Khi cuộc trò chuyện dài, hệ thống có thể rút gọn lịch sử thành bản tóm tắt để dành chỗ cho thông tin mới. Quá trình này gọi là compaction và có thể làm mất chi tiết. Hãy nêu rõ những gì cần giữ: quyết định thiết kế, yêu cầu chưa hoàn thành và kết quả kiểm tra đã có.

Bài học còn giới thiệu rewind, tức quay lại một mốc đã lưu (checkpoint). Khi dùng, cần xác định muốn khôi phục mã, nội dung trò chuyện hay cả hai. Hai loại trạng thái này không nên bị nhầm với nhau.

Cần phân biệt mục tiêu (goal) với việc chạy lặp (loop). Mục tiêu có điều kiện hoàn tất kiểm chứng được, chẳng hạn các bài kiểm thử được chỉ định đã chạy thành công. Chạy lặp chỉ là thực hiện yêu cầu theo nhịp, chẳng hạn kiểm tra kết quả CI — hệ thống tự động xây dựng và kiểm thử mã. Chạy nhiều lần không chứng minh đã đạt mục tiêu.

Nếu nhiều phiên cùng sửa một kho mã nguồn, Git worktrees cho mỗi phiên một cây tệp riêng để giảm việc ghi đè. Sau khi hợp nhất, vẫn phải kiểm tra các thay đổi có tương thích hay không. Khi ôn thi, ưu tiên lập kế hoạch, quản lý ngữ cảnh và bằng chứng thực thi; đối chiếu đề cương riêng cho các tính năng bổ sung.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Sau compact, tác nhân tiếp tục refactor nhưng bỏ ràng buộc “không đổi API công khai”. Trước khi tiếp tục phiên dài, thay đổi nào giảm đúng rủi ro này?

A. Bàn giao ràng buộc và trạng thái cần giữ; kiểm tra lại diff.

B. Tăng giới hạn câu trả lời để tác nhân có chỗ nhắc lại mọi quyết định.

C. Gửi lại yêu cầu refactor ban đầu, bỏ trạng thái công việc đang làm.

D. Chỉ ghi tên nhánh để tác nhân tự suy ra các ràng buộc trước đó.

**Câu 2 — Chọn hai.** Hai phiên phải sửa cùng một mô-đun nhưng có mục tiêu độc lập. Nhóm muốn tránh ghi đè khi làm việc đồng thời. Hai biện pháp nào phù hợp?

A. Dùng chung thư mục và dựa vào prompt “đừng ghi đè”.

B. Dùng worktree riêng cho từng nhánh công việc.

C. Xem worktree riêng là đủ để bỏ bước kiểm thử tích hợp.

D. Review và kiểm thử lại khi hợp nhất các thay đổi.

**Câu 3 — Chọn một.** Tác nhân báo đã refactor xong, code trông ngắn hơn nhưng chưa có kết quả thực thi. Tiêu chí hoàn tất nào kiểm chứng được rõ nhất?

A. Không còn lời đề nghị sửa tiếp trong câu trả lời.

B. Số dòng giảm và tác nhân đánh giá rủi ro thấp.

C. Test liên quan và typecheck đạt; diff đã được rà soát.

D. Tác nhân đã dành đủ số lượt dự kiến cho nhiệm vụ.

**Câu 4 — Chọn một.** Người dùng sửa yêu cầu giữa phiên: giữ cách lưu dữ liệu cũ, chỉ thay UI. Tác nhân đã lên kế hoạch đổi cả schema. Bước tiếp theo nào hợp lý nhất?

A. Hoàn tất kế hoạch cũ để tránh lãng phí phần đã nghiên cứu.

B. Tiếp tục đổi schema nhưng không nhắc trong báo cáo UI.

C. Tóm tắt yêu cầu mới nhưng vẫn giữ các bước schema trong kế hoạch.

D. Cập nhật phạm vi/kế hoạch, kiểm tra thay đổi đã làm và chỉ tiếp tục phần phù hợp yêu cầu mới.

**Câu 5 — Chọn hai.** Phiên dài chuyển sang tác nhân mới để hoàn tất sửa lỗi. Hai dữ liệu nào nên có trong bàn giao?

A. Ràng buộc, file đã sửa, kết quả kiểm tra và phần còn chưa xác minh.

B. Chỉ lời kết luận “gần xong” để tránh tạo thiên lệch.

C. Nguồn/đường dẫn cần đọc lại cùng các bước tiếp theo cụ thể.

D. Toàn bộ transcript thay cho việc chỉ ra trạng thái công việc.

## Đáp án và giải thích

1. **A.** A bảo toàn thông tin điều khiển và kiểm tra việc tuân thủ. B tăng đầu ra không đưa lại dữ kiện đã mất. C mất tiến độ và quyết định mới. D tên nhánh không chứa hợp đồng thiết kế.

2. **B, D.** B cách ly file đang sửa; D phát hiện xung đột ngữ nghĩa sau hợp nhất. A chỉ là lời nhắc trong khi vẫn chung file. C nhầm cách ly thao tác với tính tương thích của kết quả.

3. **C.** C gắn hoàn tất với bằng chứng thực thi và phạm vi thay đổi. A là trạng thái hội thoại; B là chỉ số trình bày; D là lượng công việc đã tiêu, không phải tính đúng.

4. **D.** D đưa chỉ dẫn mới vào hành động và rà tác động đã có. A ưu tiên chi phí chìm. B thay đổi ngoài phạm vi. C đổi mô tả mà không đổi kế hoạch thực thi.

5. **A, C.** A và C cho phép tiếp tục có kiểm chứng, phân biệt đã làm và còn mở. B không cung cấp trạng thái. D có thể dùng làm nguồn phụ nhưng không thay thế bàn giao rõ ràng và dễ chứa thông tin cũ.
