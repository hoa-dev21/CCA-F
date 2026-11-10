# Chặn trước, kiểm tra sau

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486933), sources/code-lessons/486933.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Hook là đoạn mã chạy khi một sự kiện xác định xảy ra. Chọn đúng thời điểm là điều quan trọng:

- `PreToolUse`: chạy trước thao tác của công cụ, phù hợp để kiểm tra và chặn hành động chưa được phép.
- `PostToolUse`: chạy sau khi thao tác thành công, phù hợp để định dạng mã hoặc kiểm tra lỗi sau khi sửa.
- `Stop`: kiểm tra điều kiện trước khi kết thúc lượt làm việc.

Ví dụ: Muốn ngăn gửi dữ liệu ra ngoài, phải kiểm tra trước khi lệnh gửi chạy. Một hook chạy sau khi gửi xong không thể làm cho dữ liệu trở thành chưa được gửi.

Trong mẫu của bài, `PreToolUse` có thể trả quyết định dạng JSON: `allow` là cho phép, `deny` là từ chối và `ask` là yêu cầu hỏi người dùng. Nếu dùng `updatedInput` để thay đầu vào, cần giữ đủ các trường bắt buộc trong đối tượng mới. Chỉ trả một trường đã sửa có thể làm mất các trường còn lại.

Cũng trong mẫu này, mã kết thúc chương trình (exit code) 2 biểu thị lỗi chặn ở sự kiện hỗ trợ chặn; mã 1 là lỗi không chặn. Không phải mọi sự kiện hook đều có cùng khả năng chặn.

Để bổ sung ngữ cảnh sau khi hội thoại được rút gọn, bài dùng `SessionStart` với điều kiện khớp sự kiện `compact`. Không mặc định đầu ra của `PostCompact` sẽ được đưa vào hội thoại. Đây là chi tiết cần kiểm tra theo phiên bản trước khi triển khai. Dù đã có hook, vẫn phải kiểm tra mã và dữ liệu đầu vào để biết quy tắc có thực sự được thực thi đúng hay không.

## Câu hỏi

**1. Chọn một.** Phải ngăn gửi dữ liệu trước khi lệnh chạy. Hook phù hợp nhất?

A. PostToolUse sau khi gửi xong.

B. Chỉ ghi một lời nhắc ở cuối.

C. PreToolUse kiểm tra và từ chối trước thực thi.

D. Chỉ tóm tắt hội thoại.

**2. Chọn một.** Hook ở sự kiện hỗ trợ blocking muốn chặn nhưng trả exit code 1 theo mẫu khóa. Lỗi nào cần xem lại?

A. 1 không phải blocking code trong mẫu; cần cơ chế quyết định/exit code chặn phù hợp.

B. Mọi exit code đều chặn.

C. Chỉ cần log màu đỏ.

D. Không cần kiểm tra event.

**3. Chọn một.** Hook sửa một trường bằng `updatedInput` rồi làm mất trường bắt buộc khác. Cách sửa?

A. Bỏ bản mô tả cấu trúc dữ liệu hoàn toàn.

B. Giữ các trường cần thiết trong đối tượng đầu vào thay thế.

C. Cho mô hình đoán lại sau thao tác.

D. Chỉ sửa tên hook.

## Đáp án

1. **C.** A quá muộn; B và D không cưỡng chế trước hành động.
2. **A.** B sai về ngữ nghĩa exit code; C không quyết định luồng; D bỏ khác biệt sự kiện.
3. **B.** A không khôi phục hợp đồng; C dựa vào đoán; D không sửa input.
