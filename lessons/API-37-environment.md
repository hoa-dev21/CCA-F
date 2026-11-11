# Quan sát kết quả hành động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287798), sources/api-lessons/287798.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI cần biết trạng thái hiện tại và kết quả thao tác để quyết định bước tiếp theo. Gửi một lệnh chỉ chứng minh đã yêu cầu thực hiện, chưa chứng minh đạt được thay đổi mong muốn.

Ví dụ: Trước khi sửa tệp cấu hình, cần đọc tệp và các phần liên quan để hiểu dự án. Sau khi gọi API, cần xem phản hồi có thành công và có dữ liệu cần thiết không. Sau khi tạo sản phẩm, cần đối chiếu sản phẩm với yêu cầu.

Quá trình quan sát, hành động rồi kiểm tra giúp tác nhân phát hiện lỗi và điều chỉnh. Nếu API trả lỗi nhưng tác nhân vẫn tiếp tục như đã nhận dữ liệu, các bước sau có thể dựa vào giả định sai.

Khi thiết kế công cụ, hãy hỏi: “Tác nhân sẽ biết thao tác này thành công bằng cách nào?”. Công cụ thực hiện cần đi cùng cách đọc kết quả hoặc kiểm tra trạng thái. Ví dụ giao diện và video trong bài minh họa nguyên tắc này; chi tiết điều khiển máy tính và xử lý hình ảnh nằm ngoài phạm vi đề cương đã lưu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An agent edits configuration and receives exit code zero, but the application reads another file. What prevents a false completion claim?

A. Ask for a path-selection explanation before execution.

B. Verify the state the application actually uses after the change.

C. Declare success if execution and logging succeed.

D. Repeat the write and compare exit codes.

**Question 2 — Choose one.** An API returns HTTP 200 with `processing`, but reporting needs a completed record. What is appropriate?

A. Infer final data from the provisional response.

B. Check completion according to the API contract before the dependent step.

C. Use the response because HTTP 200 proves completion.

D. Wait a fixed interval and always declare completion.

**Question 3 — Choose two.** An agent edits unfamiliar configuration with interdependent sections. Which TWO checks belong in its observation-action loop?

A. Reread only the original prompt instead of the file.

B. Use the agent's assurance as post-action evidence.

C. Read current configuration and related sections before planning.

D. Inspect the diff and required behavior afterward.

**Question 4 — Choose one.** A report export tool returns only “request sent.” What contract change lets the agent know when a deliverable is ready?

A. Rename the message “report generated.”

B. Return a job ID and a way to check completion and retrieve the file.

C. Ask the agent to recount all submitted steps.

D. Infer completion from average export duration.

**Question 5 — Choose two.** A failed lookup yields partial data. Which TWO actions are needed before using it for synthesis?

A. Treat received data as complete because a response exists.

B. Record the error and recover or disclose limitations according to actual state.

C. Assess whether missing data affects the requested conclusion.

D. Convert the error to an empty list for consistent processing.

## Đáp án và giải thích

1. **B.** A sai: Lập luận trước hành động không thay quan sát kết quả. B đúng: Thành công của lệnh chưa chứng minh trạng thái đích đã đổi. C sai: Hai tín hiệu cùng phản ánh thực thi, chưa kiểm tra tác động mong muốn. D sai: Lặp cùng thao tác sai đích vẫn có thể cùng thành công.

2. **B.** A sai: Dữ liệu tạm không chứng minh trạng thái cuối. B đúng: Phải kiểm tra điều kiện nghiệp vụ, không chỉ giao vận. C sai: Đã nhận yêu cầu không đồng nghĩa xử lý xong. D sai: Thời gian chờ không phải quan sát trạng thái mong muốn.

3. **C, D.** A sai: Yêu cầu mô tả mục tiêu, không chứa toàn bộ trạng thái hiện tại. B sai: Lời tự báo cáo không thay kết quả quan sát môi trường. C đúng: Cần trạng thái thật để tránh giả định cấu trúc. D đúng: Kiểm tra tác động của hành động lên mục tiêu.

4. **B.** A sai: Đổi nhãn không bổ sung bằng chứng hoàn tất. B đúng: Agent có đường quan sát kết quả thực thi. C sai: Lịch sử yêu cầu không chứng minh có tệp đầu ra. D sai: Trung bình không xác nhận lần thực thi cụ thể.

5. **B, C.** A sai: Có phản hồi không chứng minh dữ liệu đầy đủ. B đúng: Bước tiếp theo phải phản ánh kết quả đã quan sát. C đúng: Dữ liệu một phần có thể không đủ điều kiện trả lời. D sai: Không tìm thấy dữ liệu và không tra cứu được là hai trạng thái khác nhau.

## Đối chiếu Vertex

Đọc trạng thái trước khi sửa và quan sát kết quả sau thao tác. Ví dụ kiểm tra phụ đề, mốc thời gian, ảnh chụp và định dạng tệp giúp xác minh sản phẩm video. Không mặc định mọi bộ thực thi Computer Use đều tự trả ảnh sau mỗi hành động; ứng dụng cần cung cấp quan sát phù hợp. Mức kiểm tra nên dựa trên kết quả và tác động, tránh lặp kiểm tra vô ích sau mỗi bước nhỏ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Environment inspection](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289237). Bản lưu: `sources/vertex-lessons/289237.json`.
