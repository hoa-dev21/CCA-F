# Accessing the API

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287726), sources/api-lessons/287726.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Trong ứng dụng web của bài, giao diện người dùng gửi yêu cầu tới máy chủ ứng dụng. Máy chủ gọi API của mô hình, nhận phản hồi rồi trả kết quả cho giao diện. Phân biệt các chặng này giúp tìm đúng nơi xảy ra lỗi.

Khóa API bí mật được giữ ở phía máy chủ. Nếu nhúng khóa lâu dài vào mã giao diện công khai, người dùng có thể lấy khóa và sử dụng ngoài dự định của bạn.

Phản hồi từ API có nội dung, số liệu sử dụng (usage) và lý do dừng (stop reason). Cần đọc lý do dừng để biết mô hình đã kết thúc lượt, bị giới hạn đầu ra hay cần xử lý tiếp. Nếu dừng vì `max_tokens`, phải xem nội dung có bị cắt và quyết định cách tiếp tục phù hợp. Chỉ thấy văn bản chưa đủ để kết luận thành công.

Phần giải thích token và embedding trong video được đơn giản hóa để làm quen, không phải mô tả đầy đủ cấu trúc bên trong mô hình. Danh sách thư viện, mô hình và cách xác thực cần được đối chiếu khi thực hành; quản lý tài khoản không phải trọng tâm đề cương đã lưu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** The UI says “no result,” with an unknown browser, backend, or model API failure. What investigation minimizes guessing?

A. Change the prompt first.

B. Raise UI timeouts without checking backend receipt.

C. Trace requests, responses, and schemas across each boundary.

D. Call directly from the browser with a long-lived key.

**Question 2 — Choose two.** An answer looks plausible but stops with `max_tokens`. Which TWO actions precede declaring completion?

A. Treat HTTP success as task completion.

B. Invent the ending without verification.

C. Continue or report incompleteness according to the application contract.

D. Check truncation and required content or format completeness.

**Question 3 — Choose one.** A long-lived API key is bundled in JavaScript, with the call button hidden from unauthenticated users. What is correct?

A. An obscure variable name is sufficient protection.

B. The key is safe because no key input appears.

C. HTTPS prevents the browser itself from reading the key.

D. The bundle exposes the key; keep secrets server-side and enforce server-side access control.

**Question 4 — Choose two.** The backend retains text but drops usage and stop reasons. Which TWO changes support monitoring and orchestration?

A. Infer stopping from final punctuation.

B. Retain appropriate usage data for resource monitoring.

C. Replace all metadata with UI character counts.

D. Inspect stop reasons and relevant blocks for completion, limits, or tool handling.

**Question 5 — Choose one.** A direct API sample works, but the application's adapter reads the wrong response field and the UI is blank. What fixes the cause?

A. Correct the adapter against actual responses and test the path to the UI.

B. Increase tokens so the missing field is generated.

C. Put the key in the browser to receive raw responses.

D. Use a larger model for easier rendering.

## Đáp án và giải thích

1. **C.** A sai: lỗi truyền tải hoặc adapter không được giải quyết bằng prompt. B sai: thời gian chờ không xác định nơi mất kết quả. C đúng: các thành phần có trách nhiệm khác nhau nên cần xác định chặng hỏng. D sai: cách này làm lộ bí mật và không phải bước chẩn đoán có kiểm soát.

2. **C, D.** A sai: thành công giao thức khác với hoàn thành yêu cầu người dùng. B sai: bổ sung nội dung bằng suy đoán có thể tạo dữ liệu sai. C đúng: ứng dụng phải xử lý trạng thái dừng thay vì chỉ nhìn text. D đúng: giới hạn token có thể làm kết quả dang dở dù phần đầu đọc tốt.

3. **D.** A sai: obfuscation không tạo ranh giới bảo vệ bí mật trong client. B sai: việc không hiển thị trong UI không ngăn đọc tài nguyên client. C sai: HTTPS bảo vệ khi truyền, không ngăn người nhận xem dữ liệu của họ. D đúng: ẩn giao diện không giữ kín mã/credential được gửi tới browser.

4. **B, D.** A sai: câu hoàn chỉnh về ngữ pháp không xác nhận trạng thái yêu cầu. B đúng: text không phản ánh chính xác toàn bộ số liệu sử dụng. C sai: ký tự hiển thị không thay thế số liệu/giao thức provider trả về. D đúng: cần tín hiệu giao thức để điều phối đúng trạng thái.

5. **A.** A đúng: provider đã trả dữ liệu; điểm lỗi là chuyển đổi/hiển thị của ứng dụng. B sai: tham số độ dài không thay cấu trúc giao thức của response. C sai: làm rộng nơi giữ bí mật không phải cách sửa adapter đúng hợp đồng. D sai: mô hình không sửa được code đọc sai trường response.

## Đối chiếu Vertex

Yêu cầu đi qua máy chủ ứng dụng và Vertex rồi trả nội dung, số liệu sử dụng và lý do dừng. Cụm “API Key” trong bài tổng quan không có nghĩa phải dùng khóa Anthropic trực tiếp cho Vertex. Bài thiết lập 307525 và bài gọi API 289155 dùng thông tin xác thực Google/ADC cùng dự án, vùng. Không để thông tin xác thực bí mật trong mã giao diện.

Nguồn đối chiếu: [Accessing the API](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289151). Bản lưu: `sources/vertex-lessons/289151.json`.
