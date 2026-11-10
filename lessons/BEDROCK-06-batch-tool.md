# Gom lời gọi khác với chạy đồng thời

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276766), sources/bedrock-lessons/276766.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài tạo công cụ `batch_tool` nhận một danh sách các lời gọi, mỗi lời gọi có tên công cụ và đầu vào. Claude có thể gửi cả nhóm trong một lần yêu cầu, giúp giảm số lượt trao đổi với mô hình.

Gom lời gọi không đồng nghĩa chạy đồng thời. Trong mã mẫu, `run_batch` dùng vòng `for` và gọi `run_tool` lần lượt. Muốn chạy song song thật sự, ứng dụng phải có cách thực thi tương ứng, quản lý lỗi và ghép kết quả đúng với từng lời gọi.

Chỉ chạy đồng thời các thao tác độc lập. Nếu B cần kết quả của A, phải thực hiện A trước hoặc dùng bộ điều phối hiểu rõ quan hệ phụ thuộc đó. Việc hai lời gọi nằm trong cùng danh sách không làm mất phụ thuộc dữ liệu.

`batch_tool` tự viết trong bài khác Message Batches API xử lý các yêu cầu theo lô bất đồng bộ. Hai cơ chế có mục đích và vòng đời riêng. Với mỗi thao tác trong nhóm, vẫn cần kiểm tra công cụ được phép dùng, đầu vào, quyền và kết quả.

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

Mẫu Vertex cũng chạy vòng `for` tuần tự, chưa thực thi đồng thời và không phải Message Batches API. Schema khai báo `arguments` là đối tượng nhưng mã `json.loads(invocation.arguments)` cần chuỗi: phải thống nhất trước khi chạy. Giới hạn kích thước nhóm, kiểm tra từng lời gọi, quyền và lỗi một phần; không cho các batch tự lồng vô hạn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The batch tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289189). Bản lưu: `sources/vertex-lessons/289189.json`.
