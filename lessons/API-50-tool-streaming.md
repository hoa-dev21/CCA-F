# Fine grained tool calling

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/313160), sources/api-lessons/313160.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu cách nhận đầu vào của công cụ theo từng phần khi mô hình đang tạo, gọi là streaming. Nhờ đó, giao diện có thể hiển thị tiến độ sớm hơn thay vì chờ toàn bộ nội dung.

Dữ liệu đang truyền chưa chắc đã hoàn chỉnh. Ví dụ: bạn mới nhận nửa chuỗi JSON thì việc chưa đọc được JSON không có nghĩa kết quả cuối chắc chắn lỗi. Bộ xử lý cần biết đang nhận dữ liệu tạm hay đã kết thúc.

Cũng cần tách việc hiển thị với việc thực thi. Nếu công cụ chuyển tiền mới nhận được trường số tiền nhưng chưa nhận đủ đối số, không được chạy ngay. Phải đợi đầu vào hoàn chỉnh, đọc được cấu trúc và kiểm tra các điều kiện, quyền cần thiết.

Nhận dữ liệu sớm hơn đòi hỏi xử lý tốt trạng thái chưa hoàn tất. Tên sự kiện, tùy chọn và cách giữ dữ liệu chờ trong video thuộc phiên bản lúc giảng; khi triển khai phải đối chiếu API và thư viện đang dùng. Chi tiết streaming nằm ngoài phạm vi đề cương thi đã lưu.

## Câu hỏi

**1. Chọn một.** Đang stream nhưng mới nhận nửa chuỗi JSON. Có nên coi lỗi parse là kết quả cuối chắc chắn hỏng?

A. Có, mọi phần luôn hoàn chỉnh.

B. Chưa; cần phân biệt phần tạm với dữ liệu hoàn tất và xử lý đúng trạng thái.

C. Có, xóa mọi input.

D. Không cần parse bao giờ.

**2. Chọn một.** Input chưa hoàn tất nhưng đã có trường số tiền. Có nên thực thi thanh toán ngay?

A. Có, mô hình luôn không đổi phần sau.

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
