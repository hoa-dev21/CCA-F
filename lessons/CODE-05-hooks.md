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

**Question 1 — Choose one.** PostToolUse detects sensitive-data upload after it occurs. Which design prevents prohibited transmission?

A. Raise the post-action alert to critical.

B. Block violating uploads in PreToolUse before execution.

C. Use a Stop hook after the whole task.

D. Delete the source after upload.

**Question 2 — Choose one.** Under the sample contract, exit code 1 is nonblocking and 2 blocks supported events. A hook prints “DENIED” and exits 1, but the command runs. What should change?

A. Mark failure from logs only after execution.

B. Print more stderr lines.

C. Use the event's proper blocking mechanism and verify execution is prevented.

D. Move the same hook to any post-tool event.

**Question 3 — Choose two.** A hook replaces `command` through `updatedInput`, while `workdir` and `timeout` are also required. Which TWO actions preserve a valid call?

A. Retain required fields in the replacement input.

B. Return only command and assume automatic merging.

C. Validate the replacement contract and test fully populated calls.

D. Let the model restore lost fields after execution.

**Question 4 — Choose one.** The team wants post-compaction context restoration but is unsure which installed-version event injects output. What is best?

A. Assume PostCompact injects all stdout based on its name.

B. Use stderr because all errors enter conversation.

C. Move everything to an arbitrary post-tool hook.

D. Verify the version's contract with an actual compaction and context check.

**Question 5 — Choose two.** Which TWO tests establish a sensitive-action hook's policy enforcement?

A. Violations are blocked before external effects.

B. Valid requests still run with required inputs preserved.

C. Only unit-test exit codes without invoking through the host.

D. Only check the hook file exists.

## Đáp án và giải thích

1. **B.** B đặt kiểm soát trước tác động. A/C chỉ phát hiện sau khi đã gửi; D xóa nguồn không thu hồi dữ liệu đã rời hệ thống và còn tạo tác động khác.

2. **C.** C kiểm tra ngữ nghĩa đầu ra và khả năng chặn của event. A đánh dấu lỗi sau khi thao tác đã chạy, không ngăn tác động. B hiển thị rõ hơn không đổi quyết định. D càng không ngăn được tác động đã xảy ra.

3. **A, C.** A bảo toàn đầu vào cần thiết; C kiểm chứng cách host áp dụng thay thế. B giả định cơ chế merge chưa được bảo đảm. D sửa sau thực thi không bảo vệ lời gọi hiện tại.

4. **D.** D kiểm chứng nơi và cách context được nạp. A suy từ tên event; B suy từ kênh log; C đổi sự kiện nhưng chưa giải quyết thời điểm và hợp đồng nạp sau compact.

5. **A, B.** A kiểm tra ngăn tác động; B tránh chặn/sửa sai hành động hợp lệ. C kiểm tra riêng hook nhưng chưa chứng minh host dùng đúng quyết định đó. D là tồn tại cấu hình, chưa chứng minh hook được gọi hay quyết định được host áp dụng.
