# Chọn nơi chạy tự động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486935), sources/code-lessons/486935.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi muốn Claude chạy tự động, cần chọn nơi chạy phù hợp với dữ liệu và mức điều khiển bạn cần. Bài học phân biệt ba cách:

- Routine: tác vụ chạy trên hạ tầng do dịch vụ quản lý.
- Headless: chạy không có giao diện trò chuyện tương tác, trong mã lệnh hoặc quy trình tự động do bạn quản lý.
- Agent SDK: bộ thư viện để tích hợp luồng làm việc của tác nhân AI vào ứng dụng Python hoặc TypeScript.

Ví dụ: Nếu nhiệm vụ cần dữ liệu chỉ truy cập được trong mạng nội bộ, chạy headless trong môi trường của nhóm có thể phù hợp hơn một tác vụ trên đám mây không có quyền truy cập nguồn đó.

Trong ví dụ dòng lệnh, `-p` hoặc `--print` dùng cho cách chạy không tương tác. Kết quả có thể được chuyển sang bước xử lý tiếp theo. Khi bước sau cần dữ liệu có cấu trúc, bài kết hợp `--output-format json` với `--json-schema`, tức mô tả cấu trúc dữ liệu phải trả về. Dữ liệu kết quả nằm trong trường `structured_output`; toàn bộ phản hồi JSON còn có thông tin khác, nên không được coi tất cả là dữ liệu nghiệp vụ.

Với công việc nhiều giai đoạn, có thể lưu mã định danh phiên (session ID) để tiếp tục đúng phiên. Trước khi dùng lại ngữ cảnh, kiểm tra xem dữ liệu nguồn đã thay đổi hay chưa.

Bài còn nhắc đến chế độ khởi chạy tối giản (bare) và các tính năng đang thử nghiệm. Môi trường khởi chạy nhất quán không bảo đảm AI trả lời giống hệt ở mọi lần. Các quy tắc tự nạp cấu hình và giới hạn sản phẩm cần được xác minh theo phiên bản.

## Câu hỏi

**1. Chọn một.** Tác vụ cần môi trường nội bộ và logic quy trình xử lý riêng. Lựa chọn sát bài?

A. Chỉ dùng một routine cloud bất kể không truy cập được dữ liệu.

B. Headless trong quy trình xử lý do nhóm quản lý.

C. Chạy UI tương tác trong CI rồi chờ người duyệt.

D. Không gửi dữ liệu đầu vào.

**2. Chọn một.** Trong ví dụ xuất kết quả dạng JSON, bước xử lý tiếp theo cần lấy dữ liệu đúng cấu trúc đã yêu cầu. Nên đọc trường nào?

A. Tên session thay cho dữ liệu.

B. Lời giải thích trong log tùy ý.

C. `structured_output` theo hợp đồng phản hồi.

D. Toàn bộ phản hồi JSON, coi cả thông tin về phiên chạy là dữ liệu kết quả.

**3. Chọn một.** Muốn đưa luồng Claude vào sản phẩm Python/TypeScript thay vì chỉ gọi shell. Lựa chọn bài nêu?

A. Agent SDK — bộ thư viện tích hợp tác nhân AI vào ứng dụng.

B. Chỉ thay tên script.

C. Chỉ tạo một ảnh chụp màn hình.

D. Xóa mọi xử lý messages.

## Đáp án

1. **B.** A bỏ yêu cầu môi trường; C dễ treo và sai kiểu chạy; D thiếu dữ liệu.
2. **C.** Trường `structured_output` chứa kết quả có cấu trúc theo ví dụ của bài. Mã phiên và nội dung ghi trong log không thay thế dữ liệu này. Toàn bộ phản hồi JSON còn có thông tin khác về quá trình chạy, nên không được coi tất cả là kết quả nghiệp vụ.
3. **A.** B và C không cung cấp thư viện tích hợp; D bỏ chính luồng cần xử lý.
