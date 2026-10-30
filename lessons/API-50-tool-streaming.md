# Fine grained tool calling

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/313160), sources/api-lessons/313160.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Tóm tắt

Bài giới thiệu nhận đối số công cụ theo từng phần để UI phản hồi sớm hơn. Một mảnh JSON hoặc snapshot đang sinh không nhất thiết là đối tượng hoàn chỉnh hợp lệ. Bộ xử lý phải phân biệt dữ liệu tạm để hiển thị với input đã đủ để thực thi.

Giảm buffering tạo đánh đổi về validation và cách xử lý dữ liệu chưa hoàn tất. Đừng chạy thao tác có tác động chỉ vì đã thấy một phần đối số. Kiểm tra kết thúc, parse và hợp đồng đầu vào trước bước thực thi.

Tên event, tùy chọn fine_grained và mô tả buffering của khóa là theo phiên bản lúc giảng, cần đối chiếu API/SDK khi triển khai. Chi tiết streaming nằm ngoài phạm vi Exam Guide đã tải.

## Câu hỏi

**1. Chọn một.** Đang stream nhưng mới nhận nửa chuỗi JSON. Có nên coi lỗi parse là kết quả cuối chắc chắn hỏng?

A. Có, mọi phần luôn hoàn chỉnh.

B. Chưa; cần phân biệt phần tạm với dữ liệu hoàn tất và xử lý đúng trạng thái.

C. Có, xóa mọi input.

D. Không cần parse bao giờ.

**2. Chọn một.** Input chưa hoàn tất nhưng đã có trường số tiền. Có nên thực thi thanh toán ngay?

A. Có, model luôn không đổi phần sau.

B. Có, để UI nhanh.

C. Không; chờ input đủ và kiểm tra hợp đồng/quyền trước tác động.

D. Có, chỉ cần một trường.

**3. Chọn một.** Lợi ích chính được bài hướng tới?

A. Phản hồi từng phần sớm hơn, đi cùng xử lý validation phù hợp.

B. Bảo đảm mọi hành động đúng.

C. Tự cấp quyền công cụ.

D. Bỏ yêu cầu quản lý trạng thái.

## Đáp án

1. **B.** B xét trạng thái stream; A giả định sai, C bỏ dữ liệu, D bỏ validation.

2. **C.** C tách hiển thị khỏi thực thi; A, B, D đánh đổi tính đúng mà không đủ dữ liệu.

3. **A.** A là độ đáp ứng; B bảo đảm quá mức, C sai quyền, D bỏ nhiệm vụ ứng dụng.
