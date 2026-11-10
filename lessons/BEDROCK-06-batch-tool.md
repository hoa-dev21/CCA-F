# Gom lời gọi khác với chạy đồng thời

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276766), sources/bedrock-lessons/276766.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Bài tạo một batch_tool nhận danh sách tên công cụ và đối số để gom nhiều yêu cầu vào một lần mô hình gọi công cụ. Chỉ dùng với các thao tác độc lập hoặc một bộ điều phối hiểu đúng phụ thuộc.

Điểm phải đọc kỹ trong mã: ví dụ run_batch dùng vòng for và gọi run_tool lần lượt. Gom sub-invocations trong một message có thể giảm lượt qua mô hình, nhưng mã đó không tự thực thi đồng thời. Muốn concurrency thật cần cơ chế thực thi phù hợp, quản lý lỗi và tương quan kết quả.

Đừng nhầm batch_tool tùy biến với Message Batches API xử lý yêu cầu bất đồng bộ trong đề cương. Hai cơ chế có mục tiêu và vòng đời khác nhau. Mỗi invocation vẫn cần kiểm tra công cụ được phép, đối số và kết quả. Không tự thực thi nhiều hành động có tác động nếu chưa có quyền/phụ thuộc rõ.

## Câu hỏi

**1. Chọn một.** Một công cụ nhận mảng invocation nhưng mã thực thi dùng for đồng bộ. Điều gì đúng?

A. Chắc chắn mọi công cụ chạy đồng thời.

B. Không có invocation nào được xử lý.

C. Đây là Message Batches API.

D. Lời gọi được gom, nhưng chưa chứng minh concurrency thực thi.

**2. Chọn một.** B cần kết quả A. Có nên cho chúng chạy đồng thời chỉ vì cùng mảng?

A. Không; phải giải quyết phụ thuộc dữ liệu trước.

B. Có, thứ tự không bao giờ quan trọng.

C. Có, mô hình tự bảo đảm hệ thống xử lý phía máy chủ.

D. Có, miễn không log lỗi.

**3. Chọn một.** batch_tool và Message Batches API có đồng nghĩa không?

A. Có, mọi batch có cùng SLA.

B. Không; một bên là công cụ gom invocation, bên kia là API batch yêu cầu riêng.

C. Có, cả hai tự chạy client các công cụ nhiều lượt.

D. Có, tên là đủ quyết định.

## Đáp án

1. **D.** A nhầm grouping với scheduling; B sai về vòng for; C nhầm sản phẩm.
2. **A.** B bỏ phụ thuộc; C gán bảo đảm ngoài mô hình; D che lỗi không sửa dữ liệu.
3. **B.** A suy rộng SLA; C gán công cụ loop tự động; D nhầm tên với chức năng.

## Đối chiếu Vertex

Đã đọc [The batch tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289189), sources/vertex-lessons/289189.json. Mẫu Vertex cũng dùng vòng for đồng bộ, không tạo concurrency thật và không phải Message Batches API. Bản mô tả cấu trúc dữ liệu arguments khai báo object nhưng mã json.loads(invocation.arguments) đòi string: phải thống nhất quy định về dữ liệu và hành vi trước chạy. Giới hạn batch, validate từng invocation, quyền và lỗi từng phần; không cho batch tự lồng vô hạn. Dùng chung câu hỏi khái niệm.
