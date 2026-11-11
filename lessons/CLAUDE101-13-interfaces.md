# Other ways to work with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383402), sources/claude101-lessons/383402.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài học giới thiệu các cách dùng Claude trong những môi trường làm việc khác nhau: phát triển phần mềm với Code, trao đổi trong Slack, tạo bản mẫu thiết kế, làm việc với tài liệu Microsoft 365 và thực hiện tác vụ trên trình duyệt.

Để chọn công cụ, hãy trả lời ba câu hỏi: Dữ liệu đang ở đâu? Bạn cần thực hiện thao tác gì? Công cụ có quyền và khả năng kiểm tra kết quả hay không?

Ví dụ: Sửa một sổ làm việc Excel đang mở, có các công thức phụ thuộc lẫn nhau, khác với tạo một tệp bảng tính mới từ cuộc trò chuyện. Tương tự, sửa mã trong kho mã nguồn và chạy kiểm thử cần môi trường thực thi; một câu trả lời mô tả cách sửa chưa thực hiện những việc đó.

Mỗi giao diện có khả năng, quyền truy cập và điều kiện sử dụng riêng. Không nên mặc định dữ liệu hoặc quyền ở một nơi tự chuyển sang mọi nơi khác. Khi ôn Architect, dùng bài này để hiểu cách chọn môi trường làm việc, rồi học các nội dung kỹ thuật theo đề cương thi thay vì học thuộc mọi tên sản phẩm.

## Tự kiểm tra

**Câu 1 — Chọn một.** Người dùng cần sửa workbook đang mở có công thức phụ thuộc nhau. Trợ lý tạo một file Excel mới với số liệu tĩnh. Thiếu sót chính là gì?

A. Chưa dùng đủ nhiều sheet trong file mới.

B. Chưa trình bày công thức bằng lời giải thích dài hơn.

C. Chưa gửi file mới qua cùng kênh chat như yêu cầu ban đầu.

D. Chưa chọn công cụ sửa và kiểm chứng đúng workbook.

**Câu 2 — Chọn hai.** Một yêu cầu được chuyển từ Slack sang công cụ phát triển phần mềm. Hai điều cần xác minh lại?

A. Quyền thực thi và khả năng kiểm tra kết quả của công cụ mới.

B. Dữ liệu và repository cần dùng có thực sự truy cập được trong môi trường mới.

C. Mặc định nội dung đã thấy ở phiên trước luôn có trong ngữ cảnh mới.

D. Mặc định quyền ở Slack tự chuyển sang mọi công cụ khác.

**Câu 3 — Chọn một.** Hai công cụ cùng có thể “hỗ trợ tài liệu”: một chỉ tạo file mới, một sửa tài liệu đang mở. Người dùng yêu cầu cập nhật bảng hiện tại và giữ nhận xét. Cách chọn phù hợp?

A. Dùng chat mô tả thay đổi để người dùng tự suy ra tài liệu đã được cập nhật.

B. Chọn công cụ tiếp cận đúng tài liệu và kiểm tra được bảng cùng nhận xét sau sửa.

C. Chọn công cụ tạo file nhanh hơn rồi coi file mới thay thế hoàn toàn bản đang mở.

D. Chọn theo tên thương hiệu dù chưa kiểm tra khả năng giữ nhận xét.

**Câu 4 — Chọn hai.** Nhóm thiết kế một quy trình đa giao diện. Hai câu hỏi nào giúp chọn đúng nơi thực hiện mỗi bước?

A. Giao diện nào tạo lời xác nhận hoàn thành dài nhất.

B. Giao diện nào xuất hiện nhiều nhất trong video hướng dẫn cũ.

C. Có quyền phù hợp và cách kiểm chứng thay đổi tại đích hay không.

D. Dữ liệu đích ở đâu và cần đọc, sửa hay thực thi thao tác gì.

**Câu 5 — Chọn một.** Trợ lý đã giải thích cách sửa code trong chat. Báo cáo dự án ghi “đã sửa và test đạt”. Điều chỉnh nào đúng?

A. Giữ báo cáo vì lời giải thích bao gồm cả lệnh test nên đã tương đương thực thi.

B. Thêm ảnh chụp đoạn chat làm bằng chứng test đạt.

C. Nhờ reviewer kiểm tra logic bản vá trong chat rồi ghi kết quả review thành trạng thái test đã chạy đạt.

D. Chưa xác nhận sửa xong: cần áp dụng và test trong repository.

## Đáp án và giải thích

1. **D.** D phân biệt tạo bản sao với sửa phiên làm việc đích. A và B không giải quyết đối tượng; C kênh giao tiếp không tạo liên kết workbook.

2. **A, B.** B kiểm tra dữ liệu; A kiểm tra khả năng và quyền. D và C suy sự kế thừa không được bảo đảm.

3. **B.** B đáp ứng thao tác và ràng buộc bảo toàn. C có thể mất trạng thái; D không đánh giá khả năng; A nhầm hướng dẫn với hành động.

4. **C, D.** D xác định yêu cầu kỹ thuật; C xác nhận khả năng thực tế. B dựa vào sự quen thuộc lịch sử; A dùng lời nói thay bằng chứng.

5. **D.** D nối báo cáo với hành động và quan sát. A nhầm lệnh được viết với lệnh đã chạy. B chứng minh có đề xuất, không có kết quả test. C bổ sung review logic có ích nhưng review không phải bằng chứng rằng bản vá đã áp dụng và kiểm thử thực tế đã đạt.
