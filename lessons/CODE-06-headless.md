# Routines and Headless — Chọn nơi chạy tự động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486935), sources/code-lessons/486935.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài phân biệt routine chạy trên hạ tầng quản lý, headless chạy trong script của bạn, và Agent SDK nhúng luồng vào sản phẩm Python/TypeScript. Chọn theo môi trường cần thiết và quyền điều khiển, không chỉ theo tên công nghệ.

`-p`/`--print` dùng cho tác vụ không có giao diện tương tác. Đầu vào/đầu ra có thể đi qua pipeline. Khi cần hợp đồng cho downstream, bài kết hợp `--output-format json` và `--json-schema`, đọc dữ liệu từ `structured_output` của phản hồi JSON thay vì giả định toàn bộ envelope là payload nghiệp vụ.

Với nhiều giai đoạn, có thể lưu session ID rồi tiếp tục phiên phù hợp. Cần kiểm tra trạng thái nguồn dữ liệu trước khi dùng lại ngữ cảnh cũ.

Khóa hiện tại đề cập routine, giới hạn preview và chế độ bare. Không coi “môi trường khởi chạy tối giản/nhất quán” là bảo đảm model trả đầu ra y hệt mọi lần; dữ liệu và phép kiểm chứng vẫn cần thiết. Chi tiết tự nạp cấu hình và giới hạn sản phẩm cần xác minh theo phiên bản trước khi chạy thực tế.

## Câu hỏi

**1. Chọn một.** Tác vụ cần môi trường nội bộ và logic pipeline riêng. Lựa chọn sát bài?

A. Chỉ dùng một routine cloud bất kể không truy cập được dữ liệu.

B. Headless trong pipeline do nhóm quản lý.

C. Chạy UI tương tác trong CI rồi chờ người duyệt.

D. Không gửi dữ liệu đầu vào.

**2. Chọn một.** Downstream nhận schema payload trong ví dụ output JSON. Nên đọc trường nào?

A. Tên session thay cho dữ liệu.

B. Lời giải thích trong log tùy ý.

C. `structured_output` theo hợp đồng phản hồi.

D. Toàn bộ envelope như thể đều là payload schema.

**3. Chọn một.** Muốn đưa luồng Claude vào sản phẩm Python/TypeScript thay vì chỉ gọi shell. Lựa chọn bài nêu?

A. Agent SDK.

B. Chỉ thay tên script.

C. Chỉ tạo một ảnh chụp màn hình.

D. Xóa mọi xử lý messages.

## Đáp án

1. **B.** A bỏ yêu cầu môi trường; C dễ treo và sai kiểu chạy; D thiếu dữ liệu.
2. **C.** A và B không phải payload schema; D nhầm metadata envelope với kết quả có cấu trúc.
3. **A.** B và C không cung cấp thư viện tích hợp; D bỏ chính luồng cần xử lý.
