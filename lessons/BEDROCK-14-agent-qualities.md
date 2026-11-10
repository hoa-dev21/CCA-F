# Quan sát, hành động, đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276808), sources/bedrock-lessons/276808.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Từ Claude Code và Computer Use, bài rút ra các yếu tố của một tác nhân AI hoạt động tốt: công cụ có mục đích rõ, vòng xử lý có giới hạn, khả năng quan sát môi trường và kiểm tra kết quả liên tục.

Trước khi sửa mã, cần đọc mã đang có. Trước khi thao tác giao diện, cần quan sát trạng thái hiện tại. Kiến thức huấn luyện không tự cho mô hình biết nội dung riêng của dự án hoặc màn hình của bạn.

Phản hồi công cụ giúp chọn bước tiếp và kiểm chứng kết quả. Chạy kiểm thử vừa thực hiện một hành động vừa tạo bằng chứng về hành vi. Trước khi cho tác nhân chạy, cần định nghĩa thế nào là thành công, lỗi và hết số lượt; đánh giá cả tình huống thất bại và cách khôi phục.

Mức tự chủ còn phụ thuộc tác động của nhiệm vụ. Thử giao diện trên môi trường kiểm thử khác với bấm thanh toán bằng tài khoản thật; sửa mã để con người duyệt khác với tự triển khai lên hệ thống vận hành.

Vì vậy, không chọn quyền chỉ dựa trên tên công cụ. Hãy xét khả năng kiểm chứng, đảo ngược thao tác và chuyển cho người có thẩm quyền khi cần.

## Câu hỏi

**1. Chọn một.** Tác nhân AI sửa file dựa trên giả định về cấu trúc repo rồi thất bại. Thiết kế nào giải quyết nguyên nhân?

A. Cấp mọi công cụ có thể có.

B. Thêm lời khẳng định mô hình rất giỏi.

C. Bỏ kiểm tra đầu ra.

D. Cho tác nhân AI đọc trạng thái repo cần thiết trước khi sửa và kiểm chứng sau đó.

**2. Chọn một.** Tác nhân AI lặp cùng công cụ dù liên tục nhận lỗi. Thiếu điều gì?

A. Thêm output dài hơn.

B. Giới hạn vòng lặp và nhánh xử lý lỗi/chuyển cấp.

C. Công cụ có tên ngắn hơn.

D. Bỏ kết quả công cụ.

**3. Chọn một.** Hai tác nhân AI cùng dùng Computer Use: một thử UI staging, một chuyển tiền thật. Có thể dùng cùng mức tự chủ vì cùng công cụ?

A. Có, tên công cụ quyết định toàn bộ rủi ro.

B. Có, screenshot bảo đảm đúng.

C. Không; cần xét tác động, quyền, khả năng đảo ngược và kiểm chứng của từng tác vụ.

D. Có, Docker loại bỏ hậu quả ngoài hệ thống.

## Đáp án

1. **D.** Cho tác nhân AI đọc trạng thái repo cần thiết trước khi sửa và kiểm chứng sau đó. A không bảo đảm ngữ cảnh phù hợp; B không cung cấp dữ kiện; C bỏ phản hồi.

2. **B.** Giới hạn vòng lặp và nhánh xử lý lỗi/chuyển cấp. A/C không giải quyết vòng lặp; D làm mất bằng chứng lỗi.

3. **C.** Không; cần xét tác động, quyền, khả năng đảo ngược và kiểm chứng của từng tác vụ. A bỏ ngữ cảnh; B nhầm quan sát với bảo đảm; D bỏ tác động qua dịch vụ/tài khoản thật.
