# Making a request

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287725), sources/api-lessons/287725.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Trong mẫu Python của khóa, ứng dụng gọi `client.messages.create` và truyền tên mô hình, `max_tokens` cùng danh sách `messages`. Mỗi tin nhắn ghi vai trò người nói (role) và nội dung.

`max_tokens` là giới hạn trên cho lượng đầu ra mô hình được sinh, không phải độ dài bắt buộc. Ví dụ: đặt 1000 không có nghĩa câu trả lời luôn phải dùng đủ 1000 token. Token là đơn vị mà mô hình dùng để xử lý văn bản, không nhất thiết tương ứng với một từ.

Phản hồi là một đối tượng chứa nội dung và các thông tin khác. Ví dụ cơ bản chỉ lấy `content[0].text` vì giả định câu trả lời là văn bản đơn giản. Khi bổ sung công cụ, cần giữ các khối nội dung và `stop_reason` để xử lý đúng luồng, thay vì chỉ lấy phần chữ đầu tiên.

Bài cũng đề cập đặt khóa API trong cấu hình môi trường và không đưa tệp `.env` chứa thông tin bí mật vào kho mã nguồn. Tên mô hình trong notebook là ví dụ tại thời điểm giảng, cần kiểm tra khả năng hỗ trợ khi triển khai. Xác thực và quản lý tài khoản không phải trọng tâm đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Wrapper chỉ trả content[0].text. Sau khi thêm client tools, giao diện vẫn hiện lời “đang tra cứu” nhưng không có dữ liệu. Sửa nào tác động đúng nguyên nhân?

A. Tăng max_tokens để mô hình đủ chỗ viết dữ liệu tra cứu.

B. Ghép mọi block thành chuỗi và tìm tên công cụ bằng regex.

C. Thay lời dẫn bằng thông báo hoàn tất khi text không rỗng.

D. Chuyển content blocks và stop_reason cho bộ điều phối.

**Câu 2 — Chọn một.** Đặt max_tokens=1000, phản hồi kết thúc bình thường ở 180 token và đáp ứng yêu cầu. Cách diễn giải nào đúng?

A. Cần nối thêm phần giải thích để sử dụng đủ token đã đặt.

B. 180 token chứng minh chỉ 18% yêu cầu được xử lý.

C. API đã bỏ qua tham số vì đầu ra chưa đạt 1000 token.

D. Hợp lệ: max_tokens đặt trần, không ấn định độ dài.

**Câu 3 — Chọn hai.** Nhóm chuyển notebook mẫu thành dịch vụ. Hai thành phần nào cần bảo toàn để mở rộng từ trả lời văn bản sang tool use?

A. Vai trò và nội dung có cấu trúc của các tin nhắn trong lịch sử.

B. Metadata điều khiển cùng các block phản hồi cần cho vòng gọi.

C. Chỉ bản text đã hiển thị vì người dùng không nhìn các block còn lại.

D. Tên mô hình trong notebook như một cam kết hỗ trợ lâu dài.

**Câu 4 — Chọn một.** Một nhóm dùng số từ để kiểm tra max_tokens và báo lỗi vì câu trả lời 400 từ có hơn 400 token. Điều chỉnh nào đúng?

A. Bỏ qua lý do dừng nếu đầu ra chưa vượt số từ dự kiến.

B. Tính mỗi dấu cách là một token để thống nhất các ngôn ngữ.

C. Đo token bằng cơ chế phù hợp, không đồng nhất token với từ.

D. Giảm mọi yêu cầu xuống cùng số từ với max_tokens.

**Câu 5 — Chọn hai.** Đưa API vào backend triển khai mới, hai việc nào cần làm với cấu hình từ notebook?

A. Sao chép nguyên tên mô hình để kết quả chắc chắn tái lập.

B. Giữ khóa trong cấu hình bí mật và loại .env thật khỏi kho mã.

C. Commit .env rồi dựa vào tên nhánh private để bảo vệ khóa.

D. Kiểm tra model ID và khả năng hỗ trợ của môi trường đích.

## Đáp án và giải thích

1. **D.** A sai: Thêm ngân sách không chạy công cụ. B sai: Làm mất cấu trúc loại block, ID và đối số cần điều phối. C sai: Có chữ không chứng minh đã nhận kết quả công cụ. D đúng: Text đầu tiên có thể chỉ là lời dẫn của một lượt cần thực thi tiếp.

2. **D.** A sai: Thêm chữ không cần thiết không cải thiện nhiệm vụ. B sai: Token đầu ra không đo tỷ lệ công việc hoàn tất. C sai: Trần không buộc dùng hết ngân sách. D đúng: Độ đầy đủ cần xét theo nhiệm vụ và lý do dừng.

3. **A, B.** A đúng: Ngữ cảnh cần giữ đúng nguồn và dạng nội dung. B đúng: Ứng dụng cần biết khi nào phải thực thi tiếp. C sai: UI là một phép chiếu, không đủ cho giao thức. D sai: Ví dụ tại thời điểm giảng không bảo đảm môi trường mới.

4. **C.** A sai: Nội dung có thể bị cắt dù phép đếm từ trông hợp lệ. B sai: Quy tắc tự đặt không phản ánh tokenizer. C đúng: Token là đơn vị xử lý có thể tách khác từ. D sai: Độ dài từ không ràng buộc trực tiếp số token.

5. **B, D.** A sai: Cùng tên không bảo đảm mọi điều kiện và phiên bản như cũ. B đúng: Khóa không nên được phát tán cùng mã mẫu. C sai: Phân phối bí mật qua lịch sử repo mở rộng phạm vi lộ khóa. D đúng: Ví dụ cũ không đủ chứng minh tương thích.

## Đối chiếu Vertex

Mẫu dùng `AnthropicVertex(region, project_id)`, `client.messages.create` và mã mô hình theo Vertex. Phần cài thư viện bổ sung `[vertex]`, vùng `global` và mã mô hình trong khóa không bảo đảm dùng được với mọi dự án. `max_tokens` là giới hạn trên, không phải độ dài mục tiêu. Lấy `content[0].text` chỉ phù hợp với ví dụ văn bản đơn giản.

Nguồn đối chiếu: [Making a request](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289155). Bản lưu: `sources/vertex-lessons/289155.json`.
