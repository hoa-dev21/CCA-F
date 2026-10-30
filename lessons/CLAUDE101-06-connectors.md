# Connecting your tools

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383397), sources/claude101-lessons/383397.json, đã đọc văn bản gốc. Tóm tắt và câu hỏi tự biên soạn; không phải đề thi thật.

## Tóm tắt

Connectors cho Claude truy cập công cụ và dữ liệu thật; tùy khả năng và quyền, chúng có thể đọc hoặc thực hiện hành động. Bài giới thiệu MCP là lớp chuẩn hóa kết nối. Web connectors nối dịch vụ cloud; desktop extensions phục vụ khả năng cục bộ qua ứng dụng desktop.

Phải xác thực và cấp quyền phù hợp; kết nối không đồng nghĩa có toàn quyền mọi dữ liệu trong tổ chức. Chọn nguồn đúng nhu cầu, thử một yêu cầu đơn giản và kiểm tra kết quả. Quyền đọc không tự cho phép sửa, gửi thông tin hay hành động trong hệ thống.

Ví dụ tự biên soạn: để tổng hợp ticket, trước hết cần nguồn ticket và quyền truy cập; chỉ nêu tên hệ thống trong prompt không tạo tích hợp. Không tự động cài hay cấp quyền từ bài học này.

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

C. Chỉ tên model.

D. Mọi web connector đều có toàn bộ file cục bộ.

## Đáp án

1. **B.** B tạo đường tới dữ liệu; A không có căn cứ, C và D không thêm nguồn.

2. **C.** C phân biệt scope; A, B, D suy rộng quyền không có.

3. **A.** A đúng loại tích hợp; B và C không tạo truy cập, D suy rộng sai.
