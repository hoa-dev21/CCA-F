# Getting an API key

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/296766), sources/api-lessons/296766.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Khóa API là thông tin bí mật dùng khi ứng dụng truy cập dịch vụ theo cơ chế trong bài. Bài hướng dẫn tạo khóa trên trang quản lý, chọn không gian làm việc (workspace), đặt tên và giữ giá trị khóa để dùng cho bài thực hành tiếp theo.

Tên khóa giúp bạn nhớ nó phục vụ mục đích gì. Đặt tên “course” không tự giới hạn quyền hoặc bảo vệ khóa; vẫn cần cấu hình quyền và nơi lưu phù hợp.

Không đưa giá trị khóa vào kho mã nguồn, câu hỏi luyện tập hoặc tài liệu chia sẻ. Bạn không cần cung cấp khóa thật cho trợ giảng để học khái niệm hay làm câu hỏi của bài.

Giao diện quản lý và các lựa chọn xác thực có thể thay đổi. Khi thực hành, dựa vào hướng dẫn chính thức của môi trường đang dùng. Đây là bước chuẩn bị thực hành, không phải nội dung ưu tiên của đề cương Architect; việc đọc bản tóm tắt cũng chưa tạo khóa thay bạn.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ứng dụng thử nghiệm dùng khóa tên “course” trong workspace sản xuất. Nhóm cho rằng tên này đã giới hạn khóa cho bài học. Trước khi chạy workload mới, cần kiểm tra gì trực tiếp nhất?

A. Giới hạn độ dài prompt để khóa chỉ dùng được cho nội dung khóa học.

B. Workspace, quyền thực tế và nơi cấp/lưu khóa đang dùng.

C. Thử một request nhỏ thành công rồi coi mọi quyền đã phù hợp.

D. Đổi tên thành “read-only-course” rồi giữ nguyên mọi cấu hình.

**Câu 2 — Chọn hai.** Bạn cần nhờ đồng đội chẩn đoán lỗi xác thực nhưng không cần họ thực hiện yêu cầu thay bạn. Hai thông tin nào phù hợp để chia sẻ?

A. Khóa thật trong ảnh chụp console vì ảnh không phải mã nguồn.

B. File .env đầy đủ qua issue riêng để thông tin dễ tái hiện.

C. Cách ứng dụng nạp credential và workspace dự kiến, không kèm giá trị khóa.

D. Mã lỗi đã che dữ liệu nhạy cảm cùng cấu hình môi trường liên quan.

**Câu 3 — Chọn một.** Một khóa được lưu trong biến môi trường, nhưng script debug in toàn bộ môi trường vào artifact CI. Nhận định nào chính xác nhất?

A. Khóa đã ở biến môi trường nên artifact chỉ chứa tên biến.

B. Artifact CI là nội bộ nên không cần kiểm tra những người có thể đọc.

C. Log vẫn có thể lộ khóa; phải giới hạn hoặc che giá trị.

D. Đổi tên khóa trong console sẽ làm giá trị đã ghi ra log không còn hữu ích.

**Câu 4 — Chọn một.** Console hiện tại khác video, có nhiều workspace và các lựa chọn quyền mới. Bạn muốn tạo credential cho môi trường học riêng. Bước nào có cơ sở nhất?

A. Dùng khóa sản xuất đang hoạt động để loại vấn đề giao diện mới.

B. Tạo khóa ở workspace đang chọn, chỉ xem lại phạm vi nếu gọi thử bị lỗi.

C. Xác minh workspace, quyền và quy trình console hiện hành.

D. Chọn các quyền rộng nhất để tránh lỗi trong quá trình làm bài.

**Câu 5 — Chọn hai.** Hai ứng dụng có tên khóa gần giống nhau; một ứng dụng đang gửi request bằng credential của môi trường khác. Hai bước nào giúp xác định đúng nguyên nhân mà không đoán theo nhãn?

A. So sánh chất lượng câu trả lời để suy ra khóa nào đang được dùng.

B. Đổi tên cả hai khóa theo tên ứng dụng rồi coi lỗi đã sửa.

C. Đối chiếu workspace/quyền của credential hiệu lực với môi trường dự kiến.

D. Theo dõi nguồn cấu hình thực sự được runtime nạp và thứ tự ưu tiên.

## Đáp án và giải thích

1. **B.** A sai: Nội dung prompt không xác lập quyền của credential. B đúng: Nhãn chỉ phục vụ nhận diện; các thuộc tính thực tế mới quyết định phạm vi truy cập. C sai: Kết nối thành công chứng minh một yêu cầu được chấp nhận, không chứng minh phạm vi quyền tối thiểu. D sai: Đổi nhãn không tạo quyền chỉ đọc hoặc tách môi trường.

2. **C, D.** A sai: Ảnh vẫn truyền giá trị bí mật cho người nhận và nơi lưu ảnh. B sai: Issue riêng vẫn là nơi chia sẻ không cần thiết nếu chỉ cần chẩn đoán đường nạp cấu hình. C đúng: Đây là ngữ cảnh cần để phát hiện nạp nhầm nguồn hoặc phạm vi. D đúng: Các tín hiệu này giúp phân biệt lỗi cấu hình mà không truyền bí mật xác thực.

3. **C.** A sai: Việc in môi trường có thể in cả giá trị, không tự thay bằng tên. B sai: Phạm vi truy cập artifact có thể rộng hơn phạm vi người cần sử dụng khóa. C đúng: Bí mật cần được bảo vệ trên toàn luồng, không chỉ nơi mã nguồn đọc nó. D sai: Đổi nhãn không mặc nhiên thay đổi hoặc thu hồi credential đã lộ.

4. **C.** A sai: Hoạt động được không chứng minh khóa phù hợp mục đích học riêng. B sai: Một request có thể thành công ở workspace không mong muốn; thử gọi không thay việc xác nhận phạm vi trước khi tạo. C đúng: Cách này kiểm tra ngữ nghĩa thao tác trong môi trường thực tế thay vì bắt chước vị trí UI. D sai: Tối ưu tránh lỗi bằng quyền thừa không đáp ứng yêu cầu phạm vi phù hợp.

5. **C, D.** A sai: Nội dung sinh ra không phải bằng chứng đáng tin về danh tính xác thực. B sai: Tên giúp quản trị nhưng không đổi giá trị runtime đã nạp. C đúng: Đây là phép kiểm tra phạm vi thực tế sau khi tìm đúng nguồn nạp. D đúng: Credential hiệu lực có thể khác cấu hình mà người vận hành đang nhìn.
