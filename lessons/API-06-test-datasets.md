# Tạo tập đầu vào kiểm thử

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287739), bản nội dung sources/api-lessons/287739.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Trước khi tạo dữ liệu kiểm thử, xác định sản phẩm mong muốn. Trong bài học, ứng dụng sinh Python, JSON hoặc regex cho tác vụ AWS, và cần đầu ra thuần nội dung, không thêm lời giải thích.

Bộ dữ liệu là danh sách các đối tượng JSON. Trường `task` mô tả yêu cầu sẽ được chèn vào prompt cần đánh giá. Có thể viết thủ công hoặc nhờ Claude sinh theo mô tả rõ phạm vi: loại đầu ra, độ phức tạp, số lượng trường hợp và cấu trúc bản ghi.

Bài học lưu bộ dữ liệu ra tệp để nạp lại trong các lần đánh giá. Điều này giúp tái sử dụng cùng đầu vào khi thử các phiên bản prompt. Mẫu ba bản ghi trong bài phục vụ minh họa, không phải bằng chứng ba trường hợp đủ bao phủ một ứng dụng production.

Bài dùng một mô hình nhanh để hỗ trợ sinh dữ liệu. Mã ví dụ có prefilling và stop sequence; khả năng tương thích của kỹ thuật đó cần kiểm tra theo mô hình trước khi chạy, không phải trọng tâm cần học thuộc ở đây.

Ví dụ để dễ hình dung: nếu ứng dụng xuất cả JSON và regex, tập chỉ gồm JSON không kiểm tra được hành vi ở nhóm regex.

## Câu hỏi

**1. Chọn một.** Ứng dụng hỗ trợ ba định dạng nhưng bộ dữ liệu chỉ gồm Python. Hạn chế trực tiếp?

A. JSON không thể lưu task.

B. Chưa đo được chất lượng ở hai nhóm còn lại.

C. Không thể so sánh prompt Python.

D. Mọi kết quả Python đều sai.

**2. Chọn một.** Lý do lưu bộ dữ liệu để dùng lại?

A. Để so các phiên bản trên cùng đầu vào.

B. Để không cần bộ chấm điểm.

C. Để bảo đảm mô hình không sai.

D. Để API tự nhớ hội thoại.

**3. Chọn một.** Khi nhờ mô hình tạo bộ dữ liệu, chỉ dẫn nào hữu ích nhất?

A. “Tạo gì cũng được.”

B. “Hãy cho mọi đầu ra điểm 10.”

C. Nêu loại task, định dạng bản ghi và giới hạn độ phức tạp.

D. Không mô tả ứng dụng đích.

## Đáp án

1. **B.** A sai về JSON; C vẫn có thể so trên nhóm Python; D không suy ra từ thiếu bao phủ.
2. **A.** B và C nhầm dữ liệu với đánh giá và bảo đảm; D nhầm dữ liệu kiểm thử với lịch sử yêu cầu.
3. **C.** A và D tạo dữ liệu kém liên quan; B làm sai hoạt động chấm điểm.

## Đối chiếu Bedrock

Đã đọc và đối chiếu [Generating test datasets](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276733), sources/bedrock-lessons/276733.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp phép đánh giá vì các mục tiêu chính tương đương. Mã gọi nhà cung cấp vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên mô hình không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Đã đọc [Generating test datasets](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289163), sources/vertex-lessons/289163.json. Bộ dữ liệu minh họa AWS Python/JSON/regex, có thể soạn tay hoặc sinh với mô hình rồi lưu. Ba ví dụ không đủ đại diện production; dữ liệu sinh cần kiểm tra, edge cases và tách tập kiểm tra. Prefill/stop không thay JSON/schema validation. Dùng chung câu hỏi khái niệm.
