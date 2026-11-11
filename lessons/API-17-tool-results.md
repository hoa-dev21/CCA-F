# Trả kết quả đúng lần gọi

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287752), sources/api-lessons/287752.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Sau khi Claude yêu cầu gọi công cụ, ứng dụng lấy đầu vào trong khối `tool_use` và chạy hàm tương ứng. Kết quả cần được gửi lại để Claude có thể trả lời hoặc quyết định bước tiếp theo.

Trong mẫu của bài, ứng dụng tạo khối `tool_result` bên trong một tin nhắn có vai trò `user`. Đây là cách biểu diễn kết quả công cụ trong giao thức; không có nghĩa người dùng phải tự gõ kết quả đó.

Khối kết quả có các thông tin quan trọng: `tool_use_id` khớp với mã của lần gọi ban đầu; `content` chứa dữ liệu trả về; `is_error` đánh dấu lỗi khi thao tác thất bại.

Một phản hồi có thể yêu cầu nhiều công cụ. Giả sử hai phép tra cứu chạy cùng lúc nhưng kết thúc theo thứ tự khác nhau: phải ghép kết quả bằng mã định danh, không bằng thứ tự hoàn thành.

Ở yêu cầu tiếp theo, giữ lịch sử trước đó, tin nhắn `assistant` chứa yêu cầu gọi công cụ và tin nhắn `user` chứa kết quả. Mẫu của bài cũng tiếp tục gửi định nghĩa công cụ. Chạy hàm thành công mới là một phần của luồng; cần gửi kết quả lại cho Claude thì mô hình mới sử dụng được dữ liệu ấy.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hai tra cứu A và B hoàn thành ngược thứ tự khởi chạy. Kết quả A chứa giá đơn hàng, B chứa trạng thái giao. Cách ghép nào đúng?

A. Ghép kết quả theo thứ tự hoàn tất.

B. Gắn mỗi kết quả với tool_use_id của chính lời gọi tạo ra nó.

C. Ghép bằng tên công cụ vì một công cụ chỉ có thể xuất hiện một lần.

D. Cho Claude suy ra kết quả nào thuộc A hay B từ nội dung text.

**Câu 2 — Chọn hai.** Một công cụ lỗi kết nối, công cụ kia thành công. Hai đặc điểm nào cần có trong các tool_result trả về?

A. Bỏ kết quả lỗi để model chỉ nhận dữ liệu đáng tin.

B. Mỗi kết quả giữ đúng tool_use_id ban đầu.

C. Cả hai kết quả đều gắn lỗi vì cùng nằm trong một response.

D. Kết quả thất bại được đánh dấu is_error thay vì biến thành dữ liệu rỗng thành công.

**Câu 3 — Chọn một.** Hàm tra cứu đã chạy và lưu dữ liệu vào database, nhưng request tiếp theo không chứa tool_result. Model tiếp tục hỏi dữ liệu. Nguyên nhân trực tiếp là gì?

A. Cần đổi role của mọi messages thành assistant để model biết đã có kết quả.

B. Cần gọi lại hàm nhiều lần cho tới khi model tự nhận thấy dữ liệu.

C. Model phải tự đọc database nếu tên database có trong schema.

D. Kết quả chưa được đưa vào ngữ cảnh mà model nhận.

**Câu 4 — Chọn hai.** Theo mẫu hội thoại của bài, sau khi thực thi client tool, hai thành phần nào phải cùng được giữ khi gọi Claude tiếp?

A. Tin nhắn assistant chỉ chứa câu “công cụ đã chạy” thay yêu cầu gốc.

B. Tin nhắn user do người dùng tự gõ lại toàn bộ dữ liệu công cụ.

C. Tin nhắn user có tool_result nối đúng ID và chứa kết quả.

D. Tin nhắn assistant có khối tool_use gốc.

**Câu 5 — Chọn một.** Một công cụ trả “không tìm thấy đơn”; công cụ khác bị timeout. Adapter đang chuyển cả hai thành mảng rỗng. Cải tiến nào cần ưu tiên?

A. Coi cả hai là lỗi vĩnh viễn, không retry.

B. Phân biệt truy vấn rỗng hợp lệ với lỗi thực thi.

C. Đổi cả hai thành thành công để tránh gián đoạn hội thoại.

D. Ghép hai thông báo vào text chung không giữ ID lời gọi.

## Đáp án và giải thích

1. **B.** B giữ tương quan độc lập thứ tự. A ghép nhầm khi bất đồng bộ; C có thể có nhiều lần gọi cùng tên; D bỏ mã định danh đáng tin để đoán.

2. **B, D.** B định danh đúng; D giữ ngữ nghĩa lỗi. C làm sai lần gọi thành công; A để thiếu phản hồi cho một yêu cầu và che thông tin cần phục hồi.

3. **D.** D phân biệt lưu ở host với gửi tới model. C giả định truy cập chưa thiết lập; A làm sai vai trò; B thêm thực thi nhưng không sửa đường truyền kết quả.

4. **C, D.** D giữ yêu cầu, C cung cấp phản hồi đúng giao thức. B role user ở đây không bắt buộc người dùng nhập; A mất ID và đầu vào cần đối chiếu.

5. **B.** B bảo toàn ý nghĩa để chọn bước tiếp. A mất kết quả hợp lệ; C che lỗi vận hành; D mất quan hệ lỗi–công cụ.

## Đối chiếu Bedrock: gửi kết quả công cụ

Converse đặt tất cả các khối kết quả công cụ vào tin nhắn vai trò `user`. Yêu cầu tiếp theo cần giữ phản hồi `assistant` chứa các lời gọi cùng định nghĩa công cụ. Mỗi kết quả phải có mã định danh khớp lần gọi tương ứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276760). Bản lưu: `sources/bedrock-lessons/276760.json`.

## Đối chiếu Vertex

Mẫu Vertex gửi khối `tool_result` trong nội dung tin nhắn `user`, gồm `tool_use_id`, nội dung và dấu lỗi `is_error`. Lấy `response.content[1]` chỉ là cách minh họa; khi triển khai cần duyệt theo loại và trả đủ kết quả của mọi lời gọi. Không trộn `is_error` với `isError` của MCP hoặc `status` của Converse. Dùng chung câu hỏi.

Nguồn đối chiếu: [Sending tool results](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289184). Bản lưu: `sources/vertex-lessons/289184.json`.
