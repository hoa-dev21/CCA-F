# Chấm bằng mã chương trình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287737), bản nội dung sources/api-lessons/287737.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Chấm bằng mã chương trình phù hợp với những điều kiện có thể kiểm tra rõ ràng. Ví dụ của bài sử dụng ba cách kiểm tra trong Python:

- `json.loads`: đọc dữ liệu để kiểm tra cú pháp JSON.
- `ast.parse`: phân tích cú pháp mã Python mà không cần thực thi đoạn mã đó.
- `re.compile`: biên dịch biểu thức tìm mẫu (regex) để kiểm tra nó có hợp lệ về cú pháp hay không.

Bộ dữ liệu có trường `format` để chọn bộ kiểm tra tương ứng, còn gọi là validator. Nếu yêu cầu đầu ra là JSON thì phải kiểm tra như JSON; hợp lệ ở một định dạng khác không đáp ứng yêu cầu.

Đúng cú pháp chưa có nghĩa làm đúng nhiệm vụ. Mã Python có thể không mắc lỗi cú pháp nhưng tính sai. Regex có thể biên dịch được nhưng nhận cả những chuỗi lẽ ra phải bị từ chối. Vì vậy, bài kết hợp kiểm tra bằng mã với chấm bằng mô hình để xem cả định dạng và nội dung.

Ví dụ: Một regex được yêu cầu nhận đúng mã đơn hàng. Ngoài kiểm tra biên dịch, cần thử các mã hợp lệ và không hợp lệ để biết nó phân biệt đúng hay chưa.

Mẫu lấy trung bình hai điểm chỉ là một cách minh họa. Có thể chọn trọng số theo yêu cầu ứng dụng. Nếu đúng cú pháp là điều kiện bắt buộc, điểm trung bình cao không đủ để bỏ qua lỗi cú pháp.

## Câu hỏi

**1. Chọn một.** Regex biên dịch thành công nhưng nhận mọi chuỗi. Kết luận đúng?

A. Đã chứng minh đúng yêu cầu nghiệp vụ.

B. Không cần kiểm tra thêm.

C. Mọi regex đều sai cú pháp.

D. Đã qua kiểm tra cú pháp, chưa chứng minh đúng hành vi.

**2. Chọn một.** Trường nào giúp chọn validator trong bài?

A. `format`.

B. Tên người dùng.

C. Thời gian mở trình duyệt.

D. Điểm cố định.

**3. Chọn hai.** Đánh giá tổng thể cần phân biệt những khía cạnh nào?

A. Cú pháp hợp lệ.

B. Mọi đầu ra phải dài bằng nhau.

C. Giải quyết đúng yêu cầu.

D. Mọi trường hợp phải đạt 10.

## Đáp án

1. **D.** A và B suy rộng quá bằng chứng; C trái dữ kiện biên dịch thành công.
2. **A.** B, C không mô tả loại đầu ra; D là điểm chứ không phải bộ chọn validator.
3. **A, C.** B không phải yêu cầu chung; D biến mục tiêu thành giả định, không phải đánh giá.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276735). Bản lưu: `sources/bedrock-lessons/276735.json`.

## Đối chiếu Vertex

Hồ sơ đối chiếu toàn văn với bài API 287737 chỉ ghi nhận khác cách diễn đạt như “upfront/ahead of time” và “average/take the average”. Kiến thức chấm bằng mã không đổi, nên dùng chung câu hỏi thay vì đếm thành bộ mới.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289167). Bản lưu: `sources/vertex-lessons/289167.json`.
