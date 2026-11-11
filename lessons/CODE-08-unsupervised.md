# Kiểm chứng phiên tự chạy

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486938), sources/code-lessons/486938.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi để AI tự chạy và ít theo dõi từng bước, bạn càng cần kiểm tra bằng chứng sau khi nó kết thúc. Bắt đầu từ trạng thái tệp thực tế và diff — phần mã đã thay đổi — thay vì chỉ đọc bản tóm tắt của AI.

Đối chiếu các tệp đã sửa với kế hoạch, rồi tìm những thay đổi ngoài phạm vi. Sau đó chạy các kiểm thử phù hợp và xem kết quả thực tế. Nếu một kiểm tra bắt buộc phải đạt trước khi tiếp tục, có thể dùng hook hoặc mã kiểm soát để chặn khi kiểm tra chưa đạt, thay vì chỉ nhắc AI trong yêu cầu.

Với cách chạy không tương tác (headless), hãy xem cả kết quả JSON và mã kết thúc chương trình (exit code). Chỉ một tín hiệu riêng lẻ có thể chưa chứng minh rằng mọi yêu cầu đã được đáp ứng.

Một phiên rà soát độc lập có thể phát hiện lỗi mà phiên viết mã bỏ sót, nhưng vẫn cần kiểm thử thực tế. Kiểm soát quyền chỉ xác định thao tác có được phép hay không, không chứng minh mã đúng.

Ví dụ: AI được giao tổ chức lại mã nhưng còn sửa một tệp triển khai ngoài kế hoạch. Dù các kiểm thử đơn vị đã thành công, bạn vẫn cần xem thay đổi đó và thực hiện kiểm tra phù hợp trước khi chấp nhận.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Tác nhân tự chạy báo “chỉ refactor”, nhưng diff có cả thay đổi cấu hình deploy. Unit test xanh. Bước đánh giá tiếp theo nào đúng?

A. Chấp nhận vì refactor không đổi hành vi theo lời tác nhân.

B. Rà diff, gồm file deploy, rồi kiểm tra theo tác động.

C. Chỉ yêu cầu tác nhân sửa lại phần tóm tắt cho đầy đủ.

D. Bỏ file deploy khỏi báo cáo để chỉ review phần được yêu cầu.

**Câu 2 — Chọn một.** Tác nhân nói “đã chạy test”, nhưng transcript chỉ chứa dự định chạy và không có kết quả. Kết luận nào hợp lý nhất?

A. Cần chạy hoặc quan sát bằng chứng thực thi trước khi xác nhận gate đạt.

B. Có thể coi là đạt vì tuyên bố dùng thì quá khứ.

C. Permission cho phép test nên có thể suy ra test đã chạy.

D. Chỉ cần reviewer đồng ý với câu tóm tắt.

**Câu 3 — Chọn hai.** Một job headless trả exit code 0 nhưng JSON nêu chưa hoàn thành vì hết lượt. Hai kiểm tra nào cần cho quyết định sử dụng kết quả?

A. Trạng thái nghiệp vụ trong JSON theo hợp đồng phản hồi.

B. Exit code 0 đủ nên bỏ nội dung JSON.

C. Bằng chứng yêu cầu và gate thực tế đã đạt đến đâu.

D. Số token đã dùng để suy ra mức độ hoàn chỉnh.

**Câu 4 — Chọn một.** Reviewer độc lập không tìm ra lỗi ở bản sửa nhưng chưa có kiểm thử thực tế. Vai trò của kết quả review nên được hiểu thế nào?

A. Nó thay thế test vì dùng context độc lập.

B. Nó chứng minh mọi requirement đã được đáp ứng.

C. Nó đủ để chấp nhận nếu reviewer dùng mô hình khác và đã đọc toàn bộ diff.

D. Bổ sung góc nhìn; vẫn kiểm tra phạm vi và kết quả chạy.

**Câu 5 — Chọn hai.** Muốn tác vụ tự chạy chỉ được tiếp tục sau khi kiểm tra bắt buộc đạt, hai thành phần nào hỗ trợ thiết kế?

A. Một lời nhắc ở đầu prompt là toàn bộ cơ chế cưỡng chế.

B. Gate/hook bằng chương trình kiểm tra kết quả trước bước tiếp theo.

C. Log trạng thái và kết quả kiểm tra gắn với mã đang được dùng.

D. Đánh dấu hoàn tất khi tác nhân im lặng đủ lâu.

## Đáp án và giải thích

1. **B.** B dùng trạng thái thực tế và kiểm tra đúng phần bị ảnh hưởng. A tin lời kể dù có bằng chứng khác. C sửa báo cáo chưa đánh giá tác động. D che thay đổi thực sự vẫn tồn tại.

2. **A.** A phân biệt kế hoạch/tuyên bố với thực thi. B dựa vào ngữ pháp. C nhầm được phép với đã làm. D thêm một sự đồng ý không thay thế kết quả kiểm thử.

3. **A, C.** A đọc trạng thái nhiệm vụ, C kiểm tra điều kiện chấp nhận. B chỉ nhìn một lớp tín hiệu. D tiêu hao tài nguyên không đo độ hoàn tất.

4. **D.** D giữ đúng giới hạn của review. A/B suy rộng kết luận không tìm thấy lỗi thành bảo đảm đúng. C đổi mô hình và đọc toàn bộ diff có thể giúp rà soát, nhưng chưa thay thế kết quả kiểm chứng hành vi khi chạy.

5. **B, C.** B cưỡng chế điều kiện, C cho phép kiểm chứng trạng thái thật. A hướng dẫn nhưng không bảo đảm không bỏ bước. D dùng trạng thái hội thoại thay bằng chứng nhiệm vụ.
