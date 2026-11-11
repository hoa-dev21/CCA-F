# Đóng gói cấu hình cho nhóm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486939), sources/code-lessons/486939.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Plugin là gói tập hợp các thành phần như skills, tác nhân con, hooks và cấu hình kết nối MCP để cài đặt và quản lý phiên bản cùng nhau. Marketplace là nơi giúp tìm và phân phối các gói này, thay vì mỗi người tự sao chép thư mục cấu hình.

Trước khi cài, cần xem toàn bộ thành phần. Một plugin được giới thiệu vì có skill hữu ích vẫn có thể kèm hook chạy mã theo sự kiện hoặc tác nhân con có hướng dẫn riêng. Việc plugin đã được rà soát không tự chứng minh mọi hành vi đều phù hợp với dự án của bạn.

Theo bài học, hook của plugin chạy cùng hook của dự án, không mặc định thay thế chúng. Ví dụ: nếu cả hai đều kiểm tra trước khi công cụ chạy, cần thử xem các quyết định có xung đột hoặc cản trở công việc hợp lệ hay không.

Nên đóng gói cấu hình đã kiểm chứng, ghi rõ phiên bản như với các thư viện phụ thuộc và kiểm tra khi cập nhật. Phần tên riêng của plugin (namespace) giúp phân biệt thành phần đến từ đâu; nó không tự cô lập mọi tác động của mã hook.

Khi ôn thi, dùng bài này để hiểu việc chia sẻ cấu hình và quyền công cụ. Những chi tiết mới của marketplace cần được đối chiếu riêng với phạm vi đề cương.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Nhóm muốn một skill trong plugin, nhưng gói còn chứa hooks và MCP config. Review trước khi cài nên bao phủ gì?

A. Chỉ file hướng dẫn skill vì đó là thành phần sẽ được gọi.

B. Chỉ uy tín tác giả vì gói đã có marketplace.

C. Mọi thành phần có thể chạy, quyền và tương tác với repo.

D. Chỉ tên namespace vì namespace tự cô lập mã hook.

**Câu 2 — Chọn một.** Dự án đã có PreToolUse hook; plugin thêm hook cùng sự kiện. Giả định nào đúng để lên kế hoạch kiểm tra theo bài?

A. Cả hai có thể chạy, cần kiểm tra xung đột và thao tác hợp lệ/vi phạm.

B. Hook plugin luôn thay toàn bộ hook dự án.

C. Hook dự án tự động vô hiệu mọi hook plugin.

D. Hai hook cùng tên tự triệt tiêu nên không cần kiểm tra.

**Câu 3 — Chọn hai.** Plugin hoạt động tốt ở phiên bản cũ; bản mới bổ sung hook sửa đầu vào công cụ. Hai hành động nào phù hợp khi cập nhật?

A. Tự nâng cho cả nhóm vì skill chính không đổi tên.

B. Xem diff/thành phần thay đổi và thử hành vi với cấu hình dự án.

C. Ghi nhận phiên bản được dùng để truy nguyên hoặc quay lại khi cần.

D. Chỉ kiểm tra mô tả marketplace còn giống trước.

**Câu 4 — Chọn một.** Hai thành viên cài cùng tên plugin nhưng khác phiên bản, tạo kết quả kiểm tra khác nhau. Cải thiện nào giải quyết tính nhất quán triển khai?

A. Yêu cầu họ dùng cùng câu prompt và bỏ qua phiên bản.

B. So sánh số token đầu ra rồi lấy phiên bản ít token hơn.

C. Đổi tên plugin ở một máy để tránh xung đột tên.

D. Quản lý chung phiên bản/cấu hình; kiểm thử các lần nâng.

**Câu 5 — Chọn hai.** Một plugin đã được rà soát bên ngoài nhưng cần dùng trong repo có quy tắc dữ liệu riêng. Hai điều nào vẫn cần xác minh?

A. Hành vi hook/MCP và quyền có phù hợp giới hạn của dự án.

B. Việc được review bên ngoài tự cấp quyền cần thiết trong repo.

C. Tương tác với cấu hình hiện có và các trường hợp chặn/cho phép.

D. Namespace khác bảo đảm mã hook không ảnh hưởng thao tác dự án.

## Đáp án và giải thích

1. **C.** C xét hành vi thực tế của cả gói. A bỏ thành phần chạy theo sự kiện; B uy tín không thay đánh giá tính phù hợp; D tên riêng phân biệt nguồn nhưng không tự cô lập mọi tác động.

2. **A.** A phù hợp khả năng cùng hoạt động và yêu cầu kiểm chứng. B/C/D đều giả định cơ chế thay thế hoặc triệt tiêu chưa được bảo đảm, có thể che hành vi ngoài dự kiến.

3. **B, C.** B đánh giá tác động hành vi mới, C quản lý thay đổi có thể truy nguyên. A bỏ qua hook dù skill cùng tên. D văn bản giới thiệu không đại diện đầy đủ mã thực thi.

4. **D.** D kiểm soát biến môi trường có thể gây khác biệt. A giữ nguyên khác phiên bản. B không đo tính tương thích. C phân biệt tên không làm hành vi nhất quán.

5. **A, C.** A kiểm tra chính sách địa phương; C kiểm tra kết hợp thực tế. B nhầm đánh giá bên ngoài với thẩm quyền cấp quyền. D nhầm phân biệt tên với cách ly tác động.
