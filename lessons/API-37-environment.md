# Environment inspection — Quan sát kết quả hành động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287798), sources/api-lessons/287798.json. Câu hỏi tự biên soạn.

## Tóm tắt

Agent cần biết trạng thái hiện tại và kết quả thao tác để quyết định bước tiếp theo. Gửi lệnh không chứng minh trạng thái mong muốn đã đạt.

Trước khi sửa file, đọc nội dung để hiểu cấu trúc. Sau khi gọi API, xem dữ liệu trả về và kiểm tra điều kiện cần thiết. Khi tạo sản phẩm, đối chiếu kết quả với yêu cầu. Vòng quan sát này giúp phát hiện lỗi, theo dõi tiến độ và thích ứng thay vì tiếp tục theo giả định cũ.

Câu hỏi thiết kế quan trọng: “Agent sẽ biết hành động này thành công bằng cách nào?” Công cụ thực thi cần đi cùng khả năng quan sát phù hợp. Bài có ví dụ UI/video, nhưng chi tiết computer use và vision nằm ngoài phạm vi Exam Guide đã tải; phần ôn thi ở đây tập trung nguyên tắc kiểm chứng trạng thái.

## Câu hỏi

**1. Chọn một.** API trả lỗi nhưng agent tiếp tục bước phụ thuộc như thể thành công. Thiếu gì?

A. Một lời kết luận dài hơn.

B. Nhiều tools hơn bất kể nhiệm vụ.

C. Kiểm tra kết quả thao tác trước khi quyết định bước tiếp.

D. Chỉ đổi tên biến.

**2. Chọn một.** Agent cần sửa cấu hình repo chưa quen. Bước phù hợp trước khi ghi?

A. Đọc cấu hình và các phần liên quan hiện có.

B. Ghi đè theo mẫu bất kỳ.

C. Bỏ qua mọi quy ước repo.

D. Chỉ dựa vào tên file để đoán nội dung.

**3. Chọn một.** Log cho thấy lệnh đã được gửi. Có chứng minh mục tiêu đã đạt không?

A. Có, gửi đồng nghĩa thành công.

B. Chưa; cần kết quả thực thi và kiểm tra trạng thái mong muốn.

C. Có, nếu câu lệnh ngắn.

D. Có, miễn agent không hỏi thêm.

## Đáp án

1. **C.** A và D không quan sát trạng thái; B không sửa điều kiện chuyển bước.
2. **A.** B và C bỏ dữ liệu hiện tại; D đoán thay cho đọc.
3. **B.** A nhầm ý định với kết quả; C và D không phải bằng chứng trạng thái.

## Đối chiếu Vertex

Đã đọc [Environment inspection](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289237), sources/vertex-lessons/289237.json. Đọc trạng thái trước sửa, quan sát sau thao tác; ví dụ captions/timing/screenshots/file format giúp kiểm chứng video. Không mặc định mọi Computer Use executor tự trả ảnh sau mỗi action; host phải cung cấp quan sát phù hợp. Mức kiểm tra theo kết quả và tác động, không cần lặp kiểm tra vô ích sau mỗi bước nhỏ. Dùng chung câu hỏi khái niệm.
