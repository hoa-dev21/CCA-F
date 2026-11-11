# Fine grained tool calling

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/313160), sources/api-lessons/313160.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu cách nhận đầu vào của công cụ theo từng phần khi mô hình đang tạo, gọi là streaming. Nhờ đó, giao diện có thể hiển thị tiến độ sớm hơn thay vì chờ toàn bộ nội dung.

Dữ liệu đang truyền chưa chắc đã hoàn chỉnh. Ví dụ: bạn mới nhận nửa chuỗi JSON thì việc chưa đọc được JSON không có nghĩa kết quả cuối chắc chắn lỗi. Bộ xử lý cần biết đang nhận dữ liệu tạm hay đã kết thúc.

Cũng cần tách việc hiển thị với việc thực thi. Nếu công cụ chuyển tiền mới nhận được trường số tiền nhưng chưa nhận đủ đối số, không được chạy ngay. Phải đợi đầu vào hoàn chỉnh, đọc được cấu trúc và kiểm tra các điều kiện, quyền cần thiết.

Nhận dữ liệu sớm hơn đòi hỏi xử lý tốt trạng thái chưa hoàn tất. Tên sự kiện, tùy chọn và cách giữ dữ liệu chờ trong video thuộc phiên bản lúc giảng; khi triển khai phải đối chiếu API và thư viện đang dùng. Chi tiết streaming nằm ngoài phạm vi đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Stream công cụ chuyển tiền đã có amount=500 nhưng chưa nhận tài khoản đích. UI muốn phản hồi nhanh. Thiết kế nào đúng?

A. Thực thi trước với tài khoản gần nhất trong hội thoại rồi sửa nếu cần.

B. Thực thi khi chuỗi đầu tiên parse được dù stream chưa kết thúc.

C. Cho mô hình xác nhận giao dịch trong lúc chờ phần còn lại.

D. Báo tiến độ; đủ đối số và qua kiểm tra mới thực thi.

**Câu 2 — Chọn một.** Parser báo lỗi khi mới nhận nửa chuỗi JSON từ stream. Kết luận hợp lý nhất là gì?

A. Chèn dấu đóng JSON rồi dùng đối số đã vá để thực thi.

B. Bỏ kiểm tra cấu trúc vì streaming vốn không parse được.

C. Đó còn là dữ liệu tạm; phải xét trạng thái cuối.

D. Coi toàn bộ yêu cầu thất bại và chạy lại công cụ ngay.

**Câu 3 — Chọn hai.** Bộ xử lý streaming đã ghép đủ đối số của một thao tác ghi. Hai gate nào còn cần trước tác động?

A. Bỏ validation vì dữ liệu do mô hình sinh có schema mô tả.

B. Xác nhận đầu vào hoàn tất và đúng cấu trúc theo hợp đồng.

C. Kiểm tra quyền và điều kiện nghiệp vụ của thao tác.

D. Coi việc UI hiện đủ văn bản là quyền phê duyệt.

**Câu 4 — Chọn một.** Ứng dụng dùng tên sự kiện từ video cũ, không nhận biết kết thúc ở SDK mới. Bước sửa đúng là gì?

A. Đếm số dấu ngoặc để thay hoàn toàn trạng thái stream.

B. Dùng một timeout ngắn làm dấu kết thúc cho mọi yêu cầu.

C. Đối chiếu sự kiện và cách hoàn tất của phiên bản đang dùng.

D. Thực thi mỗi lần có một delta vì mỗi delta là lời gọi riêng.

**Câu 5 — Chọn hai.** Đo hiệu quả tool streaming so với trả một lần. Hai tiêu chí nào cần tách?

A. Coi số delta nhiều hơn là chất lượng nghiệp vụ cao hơn.

B. Thời điểm người dùng thấy tiến độ đầu tiên.

C. Coi token đầu tiên là thời điểm công cụ hoàn thành.

D. Thời điểm đối số hợp lệ sẵn sàng để thực thi an toàn.

## Đáp án và giải thích

1. **D.** A sai: Dùng đầu vào suy đoán có thể chuyển sai nơi. B sai: Một phần parse được chưa chứng minh đối số cuối hoàn chỉnh. C sai: Lời xác nhận đi trước kết quả thực thi. D đúng: Hiển thị sớm không đồng nghĩa được phép tạo tác động.

2. **C.** A sai: Sửa tùy tiện có thể làm sai ý nghĩa còn đang truyền. B sai: Đầu vào cuối vẫn cần đọc và kiểm tra. C đúng: JSON chưa hoàn chỉnh có thể là trạng thái bình thường. D sai: Có thể phát sinh gọi trùng trước khi biết kết quả cuối.

3. **B, C.** A sai: Mô tả không thay kiểm tra tại bộ thực thi. B đúng: Đủ dữ liệu phải được xác định bằng trạng thái giao thức. C đúng: Đúng JSON không đồng nghĩa được phép thực hiện. D sai: Hiển thị không là cơ chế cấp quyền.

4. **C.** A sai: JSON cân bằng không chứng minh không còn sự kiện. B sai: Chậm dữ liệu có thể bị hiểu nhầm là hoàn tất. C đúng: Lỗi thuộc hợp đồng giao thức thực tế. D sai: Các phần có thể thuộc cùng một lời gọi.

5. **B, D.** A sai: Phân mảnh truyền dữ liệu không đo độ đúng. B đúng: Streaming có thể cải thiện phản hồi cảm nhận. C sai: Đầu vào còn đang được sinh. D đúng: Đây là mốc khác hiển thị ban đầu.
