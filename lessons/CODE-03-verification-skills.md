# Quy trình kiểm chứng dùng lại

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486930), sources/code-lessons/486930.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Skill là bộ hướng dẫn đóng gói một quy trình để dùng lại. Ví dụ: sau mỗi lần tổ chức lại mã (refactor), một skill kiểm chứng có thể yêu cầu chạy kiểm thử, đọc phần thay đổi và báo kết quả kèm bằng chứng.

Phần mô tả của skill giúp hệ thống nhận biết khi nào nên dùng. Hướng dẫn chi tiết và tài liệu tham khảo được đọc khi cần; mã lệnh hỗ trợ có thể đặt cùng thư mục. Nên giữ hướng dẫn chính ngắn gọn và liên kết tới tài liệu giải thích sâu hơn.

Ba loại cấu hình có vai trò khác nhau: CLAUDE.md chứa quy ước thường xuyên áp dụng; skill hướng dẫn quy trình cho một loại nhiệm vụ; hook chạy mã tại một sự kiện để kiểm tra hoặc chặn thao tác. Nếu một bước tuyệt đối không được bỏ qua, chỉ viết nó trong skill chưa đủ để bắt buộc thực hiện.

Ví dụ: Một bài kiểm thử báo thành công sau khi AI xóa điều kiện kiểm tra quan trọng, gọi là assertion. Kết quả đó chưa chứng minh tính năng đúng. Cần xem diff — phần khác biệt giữa mã trước và sau khi sửa — để biết phép kiểm tra có bị làm yếu hay không, đồng thời xem kết quả chạy thực tế.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Nhóm lặp lại chuỗi kiểm chứng khi refactor: đọc diff, chạy test mục tiêu, typecheck, ghi kết quả. Cách đóng gói nào giúp tái sử dụng có chủ đích?

A. Skill ghi rõ lúc dùng, cách kiểm chứng và bằng chứng cần trả.

B. Đưa cả transcript lần refactor trước vào mọi phiên mới.

C. Đặt tên nhánh verify để tác nhân tự suy ra quy trình.

D. Chỉ đặt alias lệnh test và coi toàn bộ quy trình đã được chuẩn hóa.

**Câu 2 — Chọn một.** Test xanh sau sửa lỗi, nhưng diff cho thấy assertion quan trọng bị xóa. Quyết định nào đúng trước khi chấp nhận?

A. Chấp nhận bản sửa vì test runner trả exit code 0 và toàn bộ test còn lại đều vượt qua trên nhánh hiện tại.

B. Review độ mạnh của test và chạy bằng chứng phù hợp với yêu cầu gốc.

C. Yêu cầu tác nhân tự chấm confidence của bản sửa.

D. Chỉ thêm nhiều test không liên quan để bù số assertion đã mất.

**Câu 3 — Chọn hai.** Một bước kiểm tra bắt buộc tuyệt đối trước hành động phát hành. Hai thành phần nào cần cho thiết kế đáng tin?

A. Mô tả bước đó trong skill để quy trình minh bạch.

B. Dựa riêng vào skill như một cơ chế quyền không thể vượt qua.

C. Gate bằng chương trình/quyền tại nơi thực hiện hành động, từ chối khi chưa đạt.

D. Cho phát hành trước rồi dùng skill kiểm tra sau để tiết kiệm thời gian chờ.

**Câu 4 — Chọn một.** Skill chạy test thành công trên nhánh cũ rồi tác nhân sửa thêm code. Nó muốn dùng kết quả cũ để đánh dấu hoàn tất. Bước phù hợp nhất?

A. Chấp nhận nếu thay đổi cuối ít hơn mười dòng.

B. Gắn lại log cũ để giữ lịch sử bằng chứng.

C. Bỏ qua kiểm tra vì skill đã được gọi đúng một lần.

D. Kiểm tra lại phần bị ảnh hưởng trên mã hiện tại.

**Câu 5 — Chọn hai.** Một skill verification được chia sẻ cho dự án có nhiều package. Hai thông tin nào giúp tránh báo thành công giả?

A. Package/phạm vi đã kiểm tra và lệnh thực tế đã chạy.

B. Kết quả, lỗi còn mở và phần không thể kiểm tra.

C. Chỉ câu “all checks passed” không cần phạm vi.

D. Số lượng bước trong skill thay cho kết quả từng gate liên quan.

## Đáp án và giải thích

1. **A.** A mô tả cả lúc dùng, hành động và kết quả cần bàn giao. B lẫn chi tiết lỗi thời. C nhãn không thay hướng dẫn. D chỉ bao phủ một bước, bỏ việc rà diff và đánh giá bằng chứng.

2. **B.** B kiểm tra test còn chứng minh hành vi cần giữ hay không. A coi tín hiệu xanh tách khỏi nội dung test. C không thay thế bằng chứng. D số test không bù việc mất kiểm tra quan trọng.

3. **A, C.** A làm rõ quy trình; C cưỡng chế bất biến. B nhầm hướng dẫn với rào chắn thực thi. D đặt kiểm soát sau tác động, trái điều kiện bắt buộc trước phát hành.

4. **D.** D xét bằng chứng theo revision và phạm vi ảnh hưởng. A kích thước diff không đo hết rủi ro. B log thật nhưng không chứng minh code mới. C đếm lần gọi quy trình thay cho kiểm chứng trạng thái cuối.

5. **A, B.** A và B giới hạn rõ điều bằng chứng hỗ trợ. C có thể đánh đồng kiểm tra một package với toàn repo. D đếm hướng dẫn chứ không xác nhận thực thi thành công.
