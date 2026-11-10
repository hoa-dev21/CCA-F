# Quan sát kết quả hành động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287798), sources/api-lessons/287798.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI cần biết trạng thái hiện tại và kết quả thao tác để quyết định bước tiếp theo. Gửi một lệnh chỉ chứng minh đã yêu cầu thực hiện, chưa chứng minh đạt được thay đổi mong muốn.

Ví dụ: Trước khi sửa tệp cấu hình, cần đọc tệp và các phần liên quan để hiểu dự án. Sau khi gọi API, cần xem phản hồi có thành công và có dữ liệu cần thiết không. Sau khi tạo sản phẩm, cần đối chiếu sản phẩm với yêu cầu.

Quá trình quan sát, hành động rồi kiểm tra giúp tác nhân phát hiện lỗi và điều chỉnh. Nếu API trả lỗi nhưng tác nhân vẫn tiếp tục như đã nhận dữ liệu, các bước sau có thể dựa vào giả định sai.

Khi thiết kế công cụ, hãy hỏi: “Tác nhân sẽ biết thao tác này thành công bằng cách nào?”. Công cụ thực hiện cần đi cùng cách đọc kết quả hoặc kiểm tra trạng thái. Ví dụ giao diện và video trong bài minh họa nguyên tắc này; chi tiết điều khiển máy tính và xử lý hình ảnh nằm ngoài phạm vi đề cương đã lưu.

## Câu hỏi

**1. Chọn một.** API trả lỗi nhưng tác nhân AI tiếp tục bước phụ thuộc như thể thành công. Thiếu gì?

A. Một lời kết luận dài hơn.

B. Nhiều các công cụ hơn bất kể nhiệm vụ.

C. Kiểm tra kết quả thao tác trước khi quyết định bước tiếp.

D. Chỉ đổi tên biến.

**2. Chọn một.** Tác nhân AI cần sửa cấu hình repo chưa quen. Bước phù hợp trước khi ghi?

A. Đọc cấu hình và các phần liên quan hiện có.

B. Ghi đè theo mẫu bất kỳ.

C. Bỏ qua mọi quy ước repo.

D. Chỉ dựa vào tên file để đoán nội dung.

**3. Chọn một.** Log cho thấy lệnh đã được gửi. Có chứng minh mục tiêu đã đạt không?

A. Có, gửi đồng nghĩa thành công.

B. Chưa; cần kết quả thực thi và kiểm tra trạng thái mong muốn.

C. Có, nếu câu lệnh ngắn.

D. Có, miễn tác nhân AI không hỏi thêm.

## Đáp án

1. **C.** A và D không quan sát trạng thái; B không sửa điều kiện chuyển bước.
2. **A.** B và C bỏ dữ liệu hiện tại; D đoán thay cho đọc.
3. **B.** A nhầm ý định với kết quả; C và D không phải bằng chứng trạng thái.

## Đối chiếu Vertex

Đọc trạng thái trước khi sửa và quan sát kết quả sau thao tác. Ví dụ kiểm tra phụ đề, mốc thời gian, ảnh chụp và định dạng tệp giúp xác minh sản phẩm video. Không mặc định mọi bộ thực thi Computer Use đều tự trả ảnh sau mỗi hành động; ứng dụng cần cung cấp quan sát phù hợp. Mức kiểm tra nên dựa trên kết quả và tác động, tránh lặp kiểm tra vô ích sau mỗi bước nhỏ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Environment inspection](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289237). Bản lưu: `sources/vertex-lessons/289237.json`.
