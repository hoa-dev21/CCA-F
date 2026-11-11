# Creating with artifacts

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383394), sources/claude101-lessons/383394.json, đã đọc văn bản đầy đủ. Tóm tắt/câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Artifact là một sản phẩm được tạo trong không gian riêng để bạn xem, chỉnh sửa và dùng lại. Bài học đưa ra các ví dụ như tài liệu, bài trình chiếu, bản mẫu ứng dụng và bảng theo dõi số liệu (dashboard). Artifact có chỗ để thao tác riêng, thay vì chỉ là một đoạn trả lời trong cuộc trò chuyện hoặc một tệp tải về.

Khi yêu cầu tạo artifact, hãy nói rõ sản phẩm cần làm, ai sẽ dùng, dữ liệu đầu vào và các thao tác cần hỗ trợ. Ví dụ: “Tạo bảng theo dõi doanh số cho trưởng nhóm, có bộ lọc theo tháng và biểu đồ từ bảng dữ liệu đính kèm”.

Bạn có thể yêu cầu chỉnh sửa qua cuộc trò chuyện hoặc dùng công cụ biên tập phù hợp với loại artifact. Nếu xuất thành tệp, cần kiểm tra định dạng và phiên bản cuối. Việc sửa tệp đã xuất không nhất thiết cập nhật ngược lại artifact.

Khi chia sẻ, chọn quyền xem hoặc sửa theo nhu cầu người nhận. Cũng cần xác định biểu đồ dùng dữ liệu được chụp lại tại một thời điểm (snapshot) hay dữ liệu cập nhật trực tiếp (live). Nếu chỉ là bản chụp dữ liệu, cần cập nhật và kiểm tra nguồn khi muốn có số mới. Các lựa chọn chia sẻ và gói hỗ trợ có thể thay đổi theo sản phẩm.

## Tự kiểm tra

**Câu 1 — Chọn một.** Dashboard artifact tạo từ file doanh số tháng trước vẫn hiển thị số cũ sau khi file trên máy được sửa. Cần xác định gì đầu tiên?

A. Dashboard dùng snapshot hay kết nối dữ liệu cập nhật?

B. Màu biểu đồ có làm người xem nhầm số mới với số cũ không.

C. Tên artifact có chứa từ “live” để kích hoạt cập nhật không.

D. Có nên yêu cầu mô hình đoán số mới từ xu hướng tháng trước không.

**Câu 2 — Chọn hai.** Nhóm xuất artifact thành file rồi sửa file đã tải về. Hai điều nên kiểm tra trước bàn giao?

A. Phiên bản nào là bản cuối và nội dung xuất có đúng định dạng cần dùng không.

B. Chỉ kiểm tra artifact ban đầu rồi bỏ qua file thực tế được gửi.

C. Mặc định mọi chỉnh sửa file tự đồng bộ ngược vì có cùng tiêu đề.

D. Các sửa đổi ở file có được phản ánh lại artifact hay cần cập nhật riêng.

**Câu 3 — Chọn một.** Yêu cầu “làm dashboard đẹp” tạo biểu đồ nhưng không lọc được theo tháng, trong khi trưởng nhóm cần tính năng này. Prompt nào sửa đúng thiếu sót?

A. Đổi vai trò mô hình thành nhà thiết kế nhiều kinh nghiệm.

B. Tăng số biểu đồ mà không nêu thao tác cần hỗ trợ.

C. Nêu người dùng, dữ liệu và hành vi lọc tháng của biểu đồ.

D. Yêu cầu thêm hiệu ứng chuyển cảnh và giữ nguyên cấu trúc dữ liệu.

**Câu 4 — Chọn hai.** Artifact chuẩn bị gửi cho người chỉ cần xem kết quả. Hai kiểm tra nào phù hợp?

A. Cấp quyền sửa cho mọi người vì artifact dễ dùng lại.

B. Kiểm tra dữ liệu và phiên bản cuối thực tế được chia sẻ.

C. Chọn quyền chia sẻ theo nhu cầu xem hoặc sửa của người nhận.

D. Coi khả năng mở được liên kết là đủ chứng minh số liệu đúng.

**Câu 5 — Chọn một.** Nhóm muốn dùng artifact làm công cụ ra quyết định từ số liệu mới hàng ngày. Thiết kế nào làm rõ giới hạn sử dụng?

A. Nêu nguồn, độ mới và cách cập nhật/kiểm tra trước sử dụng.

B. Bỏ thời điểm dữ liệu để giao diện luôn trông mới.

C. Để mô hình làm mới lời giải thích mà giữ nguyên bảng số liệu cũ.

D. Đổi tiêu đề thành “báo cáo hôm nay” mỗi khi mở artifact.

## Đáp án và giải thích

1. **A.** A xác định cơ chế dữ liệu. B không sửa nguồn; C tên không tạo kết nối; D dự đoán không phải số liệu cập nhật.

2. **A, D.** A xác nhận bản giao; D kiểm tra quan hệ giữa hai sản phẩm. C giả định đồng bộ; B bỏ đối tượng mà người nhận thực sự sử dụng.

3. **C.** C xác định hành vi sản phẩm. D và B chủ yếu tác động phong cách; A thêm số lượng không bảo đảm thao tác mong muốn.

4. **B, C.** C đặt quyền theo nhiệm vụ; B xác minh nội dung. A mở quyền không cần; D chỉ kiểm tra truy cập.

5. **A.** A nối sản phẩm với nguồn và độ mới. B che giới hạn; C cập nhật lời văn không cập nhật dữ kiện; D nhãn ngày không tạo bằng chứng mới.
