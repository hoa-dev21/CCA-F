# Getting an API key

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/296766), sources/api-lessons/296766.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Khóa API là thông tin bí mật dùng khi ứng dụng truy cập dịch vụ theo cơ chế trong bài. Bài hướng dẫn tạo khóa trên trang quản lý, chọn không gian làm việc (workspace), đặt tên và giữ giá trị khóa để dùng cho bài thực hành tiếp theo.

Tên khóa giúp bạn nhớ nó phục vụ mục đích gì. Đặt tên “course” không tự giới hạn quyền hoặc bảo vệ khóa; vẫn cần cấu hình quyền và nơi lưu phù hợp.

Không đưa giá trị khóa vào kho mã nguồn, câu hỏi luyện tập hoặc tài liệu chia sẻ. Bạn không cần cung cấp khóa thật cho trợ giảng để học khái niệm hay làm câu hỏi của bài.

Giao diện quản lý và các lựa chọn xác thực có thể thay đổi. Khi thực hành, dựa vào hướng dẫn chính thức của môi trường đang dùng. Đây là bước chuẩn bị thực hành, không phải nội dung ưu tiên của đề cương Architect; việc đọc bản tóm tắt cũng chưa tạo khóa thay bạn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A test application uses a production-workspace key named “course.” What must be checked before a new workload?

A. Prompt length as a course-only restriction.

B. The effective workspace, permissions, and key provisioning and storage.

C. One small successful request as proof of suitable permissions.

D. Rename the key “read-only-course” without changing settings.

**Question 2 — Choose two.** A teammate needs to diagnose authentication without using your credentials. Which TWO items can be shared appropriately?

A. A screenshot containing the actual key.

B. The full `.env` in a private issue.

C. Credential-loading logic and intended workspace without secret values.

D. Sanitized error codes and relevant environment configuration.

**Question 3 — Choose one.** A debug script prints environment variables into a CI artifact containing an API key. What is correct?

A. Environment-variable storage means only names are logged.

B. Internal artifacts need no access review.

C. Logs can expose secrets; restrict or redact values.

D. Renaming the key invalidates already logged values.

**Question 4 — Choose one.** The console differs from an old video and offers new workspaces and permissions. How should a learning credential be created?

A. Use the working production key.

B. Create it in the current workspace and check scope only after failure.

C. Verify the workspace, permissions, and current console workflow.

D. Grant maximum permissions to avoid exercise errors.

**Question 5 — Choose two.** An application loads credentials for the wrong environment, and keys have similar names. Which TWO checks identify the cause?

A. Infer the key from answer quality.

B. Rename keys and assume routing is fixed.

C. Compare the effective credential's workspace and permissions with the intended environment.

D. Trace actual runtime configuration sources and precedence.

## Đáp án và giải thích

1. **B.** A sai: Nội dung prompt không xác lập quyền của credential. B đúng: Nhãn chỉ phục vụ nhận diện; các thuộc tính thực tế mới quyết định phạm vi truy cập. C sai: Kết nối thành công chứng minh một yêu cầu được chấp nhận, không chứng minh phạm vi quyền tối thiểu. D sai: Đổi nhãn không tạo quyền chỉ đọc hoặc tách môi trường.

2. **C, D.** A sai: Ảnh vẫn truyền giá trị bí mật cho người nhận và nơi lưu ảnh. B sai: Issue riêng vẫn là nơi chia sẻ không cần thiết nếu chỉ cần chẩn đoán đường nạp cấu hình. C đúng: Đây là ngữ cảnh cần để phát hiện nạp nhầm nguồn hoặc phạm vi. D đúng: Các tín hiệu này giúp phân biệt lỗi cấu hình mà không truyền bí mật xác thực.

3. **C.** A sai: Việc in môi trường có thể in cả giá trị, không tự thay bằng tên. B sai: Phạm vi truy cập artifact có thể rộng hơn phạm vi người cần sử dụng khóa. C đúng: Bí mật cần được bảo vệ trên toàn luồng, không chỉ nơi mã nguồn đọc nó. D sai: Đổi nhãn không mặc nhiên thay đổi hoặc thu hồi credential đã lộ.

4. **C.** A sai: Hoạt động được không chứng minh khóa phù hợp mục đích học riêng. B sai: Một request có thể thành công ở workspace không mong muốn; thử gọi không thay việc xác nhận phạm vi trước khi tạo. C đúng: Cách này kiểm tra ngữ nghĩa thao tác trong môi trường thực tế thay vì bắt chước vị trí UI. D sai: Tối ưu tránh lỗi bằng quyền thừa không đáp ứng yêu cầu phạm vi phù hợp.

5. **C, D.** A sai: Nội dung sinh ra không phải bằng chứng đáng tin về danh tính xác thực. B sai: Tên giúp quản trị nhưng không đổi giá trị runtime đã nạp. C đúng: Đây là phép kiểm tra phạm vi thực tế sau khi tìm đúng nguồn nạp. D đúng: Credential hiệu lực có thể khác cấu hình mà người vận hành đang nhìn.
