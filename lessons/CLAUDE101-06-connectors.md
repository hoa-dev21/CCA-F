# Connecting your tools

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383397), sources/claude101-lessons/383397.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Nội dung bài học


Connector là kết nối giúp Claude truy cập một nguồn dữ liệu hoặc công cụ bên ngoài. Tùy khả năng và quyền được cấp, kết nối có thể chỉ đọc thông tin hoặc còn cho phép thực hiện hành động.

Bài học giới thiệu MCP như một giao thức chung để kết nối ứng dụng AI với công cụ và dữ liệu. Các kết nối web phục vụ dịch vụ trên mạng; tiện ích của ứng dụng máy tính (desktop extensions) phục vụ các khả năng cục bộ, chẳng hạn truy cập tệp trong môi trường được cho phép.

Ví dụ: Muốn tổng hợp các yêu cầu hỗ trợ khách hàng, còn gọi là ticket, Claude cần kết nối tới hệ thống quản lý ticket và có quyền đọc dữ liệu. Chỉ viết tên hệ thống trong câu yêu cầu không tạo ra kết nối này.

Sau khi thiết lập kết nối, cần đăng nhập hoặc xác thực, cấp quyền phù hợp rồi thử một yêu cầu đơn giản để kiểm tra dữ liệu nhận được. Quyền đọc tài liệu không đồng nghĩa với quyền sửa, gửi thông tin hoặc truy cập mọi dữ liệu của tổ chức.

## Câu hỏi

**1. Chọn một.** Bot cần dữ liệu ticket mới nhất nhưng chưa có kết nối. Bước phù hợp?

A. Chỉ yêu cầu đoán trạng thái.

B. Tích hợp nguồn phù hợp, xác thực/quyền và kiểm tra truy cập.

C. Chỉ tăng độ dài output.

D. Đổi giọng điệu.

**2. Chọn một.** Connector đọc được tài liệu có chứng minh được phép sửa mọi dữ liệu không?

A. Có, mọi quyền tương đương.

B. Có, miễn user mở chat.

C. Không; hành động phụ thuộc quyền và khả năng được cấp.

D. Có, tên connector thay thế permission.

**3. Chọn một.** Khả năng truy cập file hoặc ứng dụng cục bộ trong bài gắn với loại nào?

A. Desktop extensions phù hợp môi trường desktop.

B. Chỉ một URL không tích hợp.

C. Chỉ tên mô hình.

D. Mọi web connector đều có toàn bộ file cục bộ.

## Đáp án

1. **B.** B tạo đường tới dữ liệu; A không có căn cứ, C và D không thêm nguồn.

2. **C.** C phân biệt scope; A, B, D suy rộng quyền không có.

3. **A.** A đúng loại tích hợp; B và C không tạo truy cập, D suy rộng sai.
