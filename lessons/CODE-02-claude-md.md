# Đặt hướng dẫn đúng chỗ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486929), sources/code-lessons/486929.json. Câu hỏi tự biên soạn.

## Nội dung bài học


CLAUDE.md là tệp hướng dẫn để mô hình đọc, thường dùng cho quy ước của dự án như cách đặt tên hoặc nơi đặt tệp. Đây không phải cơ chế tự động chặn mọi thao tác sai. Nếu một hành động bắt buộc phải bị ngăn, cần có kiểm soát bằng chương trình, chẳng hạn hook chạy trước thao tác.

Bài học phân biệt các phạm vi hướng dẫn:

- Chính sách tổ chức (managed policy): áp dụng theo quản lý của tổ chức.
- Hướng dẫn người dùng (user): sở thích cá nhân dùng qua nhiều dự án.
- Hướng dẫn dự án: quy ước được lưu trong kho mã nguồn và chia sẻ với nhóm.
- Hướng dẫn cục bộ (local): ghi chú cá nhân chỉ dành cho dự án đó.

Chọn phạm vi theo người và công việc cần chịu ảnh hưởng. Ví dụ: một ghi chú thử nghiệm riêng trên nhánh của bạn thường không nên trở thành quy tắc chung cho cả nhóm.

Bạn có thể dùng imports để đưa nội dung từ tệp khác vào hướng dẫn. Cách này giúp tổ chức tài liệu, nhưng toàn bộ phần được đưa vào vẫn chiếm ngữ cảnh. Chia một tệp thành ba tệp rồi nạp cả ba không tự giảm lượng thông tin mô hình phải đọc.

Viết quy tắc cụ thể và nêu rõ cần làm gì. “Đặt mã xử lý API trong thư mục X, mỗi tệp một phần xử lý” dễ thực hiện hơn “làm theo cách tốt nhất”. Khi quy tắc gây hiểu nhầm, hãy sửa nó thay vì liên tục thêm chỉ dẫn trùng lặp hoặc mâu thuẫn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** CLAUDE.md ghi “không push nhánh bảo vệ”, nhưng tác nhân vẫn có công cụ shell với quyền push. Yêu cầu là thao tác đó phải bị ngăn trước khi xảy ra. Kiểm soát nào phù hợp nhất?

A. Tăng ưu tiên của lời cấm trong CLAUDE.md, thêm ví dụ từ chối push để mô hình áp dụng cho mọi lệnh shell.

B. Dùng kiểm soát quyền/hook chặn thao tác tại điểm thực thi.

C. Yêu cầu tác nhân ghi lý do trước mọi lần push.

D. Kiểm tra lịch sử Git sau mỗi lượt rồi revert nếu vi phạm.

**Câu 2 — Chọn một.** Nhóm chia CLAUDE.md dài thành ba file và import cả ba trong mọi phiên. Kết luận nào đúng?

A. Context giảm xấp xỉ còn một phần ba do có ba file.

B. Mỗi import tạo một phiên con nên không chiếm context chính.

C. Dễ quản lý hơn; nội dung được nạp vẫn chiếm context.

D. Các phần import chỉ là đường dẫn, tác nhân không đọc nội dung.

**Câu 3 — Chọn hai.** Một quy ước bắt buộc cho nhóm và một ghi chú thử nghiệm cá nhân chỉ cho repo này cần lưu khác phạm vi. Hai lựa chọn nào phù hợp?

A. Quy ước nhóm đặt trong cấu hình dự án được quản lý phiên bản.

B. Ghi chú cá nhân đặt vào cấu hình toàn cục để mọi repo áp dụng.

C. Ghi chú thử nghiệm đặt ở phạm vi local của repo theo cơ chế hỗ trợ.

D. Quy ước nhóm đặt trong user config riêng của người tạo dự án.

**Câu 4 — Chọn một.** Tác nhân làm đúng trên máy tác giả nhưng bỏ quy ước trên CI sạch. Cấu hình chỉ tồn tại trong thư mục cá nhân tác giả. Cách điều tra/sửa trực tiếp nhất?

A. Dán lịch sử chat của tác giả vào thông báo lỗi CI.

B. Tăng ngân sách suy luận trong CI để tác nhân tự tìm quy ước.

C. Giữ cấu hình cũ và chỉ kiểm tra kết quả cuối nhiều hơn.

D. Đặt rule trong dự án; xác minh CI thực sự nạp rule.

**Câu 5 — Chọn hai.** Nhóm muốn CLAUDE.md hữu ích mà không biến thành tài liệu khổng lồ khó tuân thủ. Hai nội dung nào đáng ưu tiên?

A. Quy tắc dự án cụ thể, các lệnh kiểm tra và ràng buộc khó suy ra từ code.

B. Bản sao đầy đủ của mọi API reference dù không liên quan công việc thường gặp.

C. Chỉ dẫn tìm nguồn chi tiết khi cần và phạm vi áp dụng rõ.

D. Mọi ghi chú cá nhân tạm thời để tất cả phiên đều đọc được.

## Đáp án và giải thích

1. **B.** B tạo rào chắn trước tác động. A/C hướng dẫn hành vi mà không cưỡng chế. D phát hiện sau khi đã push và revert không biến việc công bố trước đó thành chưa xảy ra.

2. **C.** C phân biệt tổ chức file và lượng nội dung nạp. A/B không được suy ra từ chia file. D mâu thuẫn với việc các phần được import và nạp để cung cấp hướng dẫn.

3. **A, C.** A phân phối cùng repo; C giới hạn ghi chú vào đúng dự án/người dùng. B làm lan quy tắc ngoài mục đích. D không đưa hướng dẫn đến đồng đội khi clone.

4. **D.** D sửa nguồn khác biệt môi trường. A không tạo cấu hình có phiên bản; B thiếu dữ liệu không phải thiếu suy luận; C phát hiện hậu quả nhưng giữ nguyên nguyên nhân.

5. **A, C.** A chứa thông tin điều khiển thực tế; C giúp tìm thêm ngữ cảnh đúng lúc. B tăng nội dung không cần thiết. D trộn phạm vi cá nhân và dùng chung, dễ gây nhiễu hoặc chỉ dẫn lỗi thời.
