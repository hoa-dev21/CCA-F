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

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Quy định cấm gửi dữ liệu nhạy cảm ra ngoài. Hook PostToolUse phát hiện vi phạm và log cảnh báo sau lệnh upload. Thiết kế nào đáp ứng yêu cầu ngăn gửi?

A. Giữ PostToolUse nhưng tăng mức cảnh báo thành critical.

B. Chặn upload vi phạm bằng PreToolUse trước thực thi.

C. Dùng Stop hook sau khi tác nhân hoàn tất toàn bộ nhiệm vụ.

D. Dùng PostToolUse xóa file nguồn khi phát hiện upload không hợp lệ.

**Câu 2 — Chọn một.** Theo hợp đồng mẫu của bài, exit code 1 là lỗi không chặn và 2 là lỗi chặn ở sự kiện hỗ trợ. Hook trả 1 và in “DENIED”, nhưng lệnh vẫn chạy. Cần sửa điều gì?

A. Cho wrapper đọc “DENIED” từ log và đánh dấu thất bại khi công cụ trả kết quả.

B. Thêm nhiều dòng stderr để lỗi rõ hơn.

C. Dùng cơ chế chặn đúng event; thử xem lệnh còn chạy không.

D. Di chuyển cùng hook sang sự kiện bất kỳ sau công cụ.

**Câu 3 — Chọn hai.** Hook thay command bằng updatedInput, nhưng tool còn yêu cầu workdir và timeout. Hai thao tác nào tránh làm sai lời gọi?

A. Giữ các trường cần thiết khi xây đối tượng đầu vào thay thế.

B. Chỉ trả command vì các trường còn lại luôn tự được trộn theo ý muốn.

C. Kiểm tra đối tượng thay thế theo hợp đồng và thử trường hợp có đủ tham số.

D. Để mô hình bổ sung các trường bị mất sau khi tool đã chạy.

**Câu 4 — Chọn một.** Nhóm muốn khôi phục ngữ cảnh sau compact bằng hook, nhưng không biết sự kiện nào đưa đầu ra vào hội thoại ở phiên bản đang dùng. Quyết định nào tốt nhất?

A. Dựa vào tên PostCompact để mặc định mọi stdout được đưa vào context.

B. Ghi ngữ cảnh ra stderr vì lỗi luôn được thêm vào hội thoại.

C. Chuyển toàn bộ nội dung sang hook sau công cụ cho dễ gọi.

D. Xác minh hợp đồng phiên bản bằng một lượt compact có kiểm tra context.

**Câu 5 — Chọn hai.** Hook bảo vệ một thao tác nhạy cảm đã được viết. Hai kiểm thử nào cần để biết nó thực thi đúng chính sách?

A. Yêu cầu vi phạm bị chặn trước khi có tác động bên ngoài.

B. Yêu cầu hợp lệ vẫn chạy với đầu vào bắt buộc được giữ đủ.

C. Chỉ unit-test mã trả về của hook, chưa chạy lời gọi công cụ qua host.

D. Chỉ kiểm tra file hook tồn tại ở đường dẫn cấu hình.

## Đáp án và giải thích

1. **B.** B đặt kiểm soát trước tác động. A/C chỉ phát hiện sau khi đã gửi; D xóa nguồn không thu hồi dữ liệu đã rời hệ thống và còn tạo tác động khác.

2. **C.** C kiểm tra ngữ nghĩa đầu ra và khả năng chặn của event. A đánh dấu lỗi sau khi thao tác đã chạy, không ngăn tác động. B hiển thị rõ hơn không đổi quyết định. D càng không ngăn được tác động đã xảy ra.

3. **A, C.** A bảo toàn đầu vào cần thiết; C kiểm chứng cách host áp dụng thay thế. B giả định cơ chế merge chưa được bảo đảm. D sửa sau thực thi không bảo vệ lời gọi hiện tại.

4. **D.** D kiểm chứng nơi và cách context được nạp. A suy từ tên event; B suy từ kênh log; C đổi sự kiện nhưng chưa giải quyết thời điểm và hợp đồng nạp sau compact.

5. **A, B.** A kiểm tra ngăn tác động; B tránh chặn/sửa sai hành động hợp lệ. C kiểm tra riêng hook nhưng chưa chứng minh host dùng đúng quyết định đó. D là tồn tại cấu hình, chưa chứng minh hook được gọi hay quyết định được host áp dụng.
