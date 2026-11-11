# Creating with artifacts

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383394), sources/claude101-lessons/383394.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Artifact là một sản phẩm được tạo trong không gian riêng để bạn xem, chỉnh sửa và dùng lại. Bài học đưa ra các ví dụ như tài liệu, bài trình chiếu, bản mẫu ứng dụng và bảng theo dõi số liệu (dashboard). Artifact có chỗ để thao tác riêng, thay vì chỉ là một đoạn trả lời trong cuộc trò chuyện hoặc một tệp tải về.

Khi yêu cầu tạo artifact, hãy nói rõ sản phẩm cần làm, ai sẽ dùng, dữ liệu đầu vào và các thao tác cần hỗ trợ. Ví dụ: “Tạo bảng theo dõi doanh số cho trưởng nhóm, có bộ lọc theo tháng và biểu đồ từ bảng dữ liệu đính kèm”.

Bạn có thể yêu cầu chỉnh sửa qua cuộc trò chuyện hoặc dùng công cụ biên tập phù hợp với loại artifact. Nếu xuất thành tệp, cần kiểm tra định dạng và phiên bản cuối. Việc sửa tệp đã xuất không nhất thiết cập nhật ngược lại artifact.

Khi chia sẻ, chọn quyền xem hoặc sửa theo nhu cầu người nhận. Cũng cần xác định biểu đồ dùng dữ liệu được chụp lại tại một thời điểm (snapshot) hay dữ liệu cập nhật trực tiếp (live). Nếu chỉ là bản chụp dữ liệu, cần cập nhật và kiểm tra nguồn khi muốn có số mới. Các lựa chọn chia sẻ và gói hỗ trợ có thể thay đổi theo sản phẩm.

## Tự kiểm tra

**Question 1 — Choose one.** A dashboard artifact still shows old figures after its local source file changes. What should be identified first?

A. Whether the dashboard uses a snapshot or a live data connection.

B. Whether chart colors conceal new values.

C. Whether its name includes “live.”

D. Whether the model can guess updated figures.

**Question 2 — Choose two.** An exported artifact file is edited locally. Which TWO checks precede handoff?

A. Identify the final version and verify its actual export format and content.

B. Check only the original artifact.

C. Assume matching titles provide reverse synchronization.

D. Determine whether local edits need a separate artifact update.

**Question 3 — Choose one.** A “beautiful dashboard” lacks required monthly filtering. What prompt change addresses this?

A. Assign a more experienced designer role.

B. Add more charts without specifying behavior.

C. Specify users, data, and month-filter behavior.

D. Add transitions without changing data structure.

**Question 4 — Choose two.** Which TWO checks suit sharing an artifact with a view-only recipient?

A. Grant edit access to everyone for reuse.

B. Verify the actual data and final shared version.

C. Match sharing permissions to viewing or editing needs.

D. Treat an opening link as proof of correct figures.

**Question 5 — Choose one.** A daily decision tool uses fresh figures. Which design clarifies its limits?

A. State sources, freshness, update methods, and pre-use checks.

B. Hide timestamps so it always looks current.

C. Refresh explanations but retain old tables.

D. Rename it “today's report” whenever opened.

## Đáp án và giải thích

1. **A.** A xác định cơ chế dữ liệu. B không sửa nguồn; C tên không tạo kết nối; D dự đoán không phải số liệu cập nhật.

2. **A, D.** A xác nhận bản giao; D kiểm tra quan hệ giữa hai sản phẩm. C giả định đồng bộ; B bỏ đối tượng mà người nhận thực sự sử dụng.

3. **C.** C xác định hành vi sản phẩm. D và B chủ yếu tác động phong cách; A thêm số lượng không bảo đảm thao tác mong muốn.

4. **B, C.** C đặt quyền theo nhiệm vụ; B xác minh nội dung. A mở quyền không cần; D chỉ kiểm tra truy cập.

5. **A.** A nối sản phẩm với nguồn và độ mới. B che giới hạn; C cập nhật lời văn không cập nhật dữ kiện; D nhãn ngày không tạo bằng chứng mới.
