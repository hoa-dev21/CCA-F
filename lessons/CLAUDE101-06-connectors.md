# Connecting your tools

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383397), sources/claude101-lessons/383397.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Connector là kết nối giúp Claude truy cập một nguồn dữ liệu hoặc công cụ bên ngoài. Tùy khả năng và quyền được cấp, kết nối có thể chỉ đọc thông tin hoặc còn cho phép thực hiện hành động.

Bài học giới thiệu MCP như một giao thức chung để kết nối ứng dụng AI với công cụ và dữ liệu. Các kết nối web phục vụ dịch vụ trên mạng; tiện ích của ứng dụng máy tính (desktop extensions) phục vụ các khả năng cục bộ, chẳng hạn truy cập tệp trong môi trường được cho phép.

Ví dụ: Muốn tổng hợp các yêu cầu hỗ trợ khách hàng, còn gọi là ticket, Claude cần kết nối tới hệ thống quản lý ticket và có quyền đọc dữ liệu. Chỉ viết tên hệ thống trong câu yêu cầu không tạo ra kết nối này.

Sau khi thiết lập kết nối, cần đăng nhập hoặc xác thực, cấp quyền phù hợp rồi thử một yêu cầu đơn giản để kiểm tra dữ liệu nhận được. Quyền đọc tài liệu không đồng nghĩa với quyền sửa, gửi thông tin hoặc truy cập mọi dữ liệu của tổ chức.

## Tự kiểm tra

**Câu 1 — Chọn một.** Prompt yêu cầu tổng hợp ticket từ hệ thống nội bộ, nhưng chưa có connector. AI viết báo cáo nghe hợp lý. Bước cần làm trước khi dùng báo cáo?

A. Đưa tên miền hệ thống vào prompt và coi như đã cấp quyền đọc.

B. Hỏi AI có chắc chắn đã truy cập hệ thống hay không.

C. Kết nối, xác thực và kiểm tra quyền đọc dữ liệu ticket.

D. Yêu cầu báo cáo có nhiều mã ticket hơn để tăng tính cụ thể.

**Câu 2 — Chọn hai.** Connector đọc được tài liệu nhưng gửi email thất bại. Hai điều cần kiểm tra trước khi sửa prompt?

A. Độ dài câu yêu cầu vì quyền đọc luôn bao hàm quyền gửi.

B. Danh tính đã xác thực có quyền thực hiện hành động gửi tương ứng.

C. Connector có hỗ trợ hành động gửi hay chỉ cung cấp khả năng đọc.

D. Tên tài liệu vì cùng một connector bảo đảm cùng quyền cho mọi thao tác.

**Câu 3 — Chọn một.** Ứng dụng cần đọc file local trong thư mục được cho phép, nhưng chỉ có kết nối dịch vụ web. Cách chọn khả năng phù hợp?

A. Kiểm tra công cụ local có quyền vào đúng thư mục.

B. Gửi đường dẫn ổ đĩa vào dịch vụ web rồi coi nó truy cập được file.

C. Cấp thêm quyền đọc dịch vụ web để đường dẫn local trở nên khả dụng.

D. Đổi prompt sang tiếng Anh để connector hiểu đường dẫn tốt hơn.

**Câu 4 — Chọn hai.** Sau khi cài connector, quản trị viên muốn dùng ngay cho báo cáo lớn. Hai bước kiểm tra ban đầu hợp lý?

A. Thử một yêu cầu đọc nhỏ với dữ liệu có thể đối chiếu.

B. Đánh giá thành công chỉ từ việc biểu tượng connector xuất hiện.

C. Dùng tài khoản quản trị để bỏ qua mọi vấn đề quyền trong bản thử.

D. Xác nhận tài khoản và phạm vi quyền đang dùng đúng mục đích.

**Câu 5 — Chọn một.** Nhóm muốn dùng MCP để nối nhiều nguồn. Một thành viên nói có giao thức chung thì mọi công cụ sẽ có cùng quyền và hành động. Kết luận phù hợp?

A. Đúng nếu nguồn đã được một quản trị viên cài đặt.

B. Chỉ cần đặt cùng tên công cụ ở mọi nguồn để đồng nhất hành vi.

C. Giao thức thống nhất; năng lực và quyền vẫn cần kiểm tra riêng.

D. Đúng nếu các công cụ dùng cùng định dạng JSON.

## Đáp án và giải thích

1. **C.** C tạo và kiểm tra đường dữ liệu. D có thể tăng chi tiết bịa; A không tạo kết nối/quyền; B tự xác nhận không thay bằng chứng thực thi.

2. **B, C.** C kiểm tra khả năng; B kiểm tra quyền. A và D cùng nhầm một kết nối với toàn bộ quyền hành động.

3. **A.** A chọn công cụ đúng vị trí dữ liệu. B thiếu đường truy cập; C tăng quyền sai hệ thống; D ngôn ngữ không giải quyết khả năng truy cập.

4. **A, D.** A kiểm tra đầu cuối; D kiểm tra phạm vi. C che lỗi cấu hình và mở quyền quá mức; B chỉ chứng minh một phần thiết lập giao diện.

5. **C.** C phân biệt chuẩn giao tiếp với hợp đồng thực tế. D nhầm định dạng với ngữ nghĩa; A nhầm cài đặt với quyền người dùng; B tên chung không tạo cùng khả năng.
