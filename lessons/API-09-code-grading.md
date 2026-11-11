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

## Tự kiểm tra

**Câu 1 — Chọn một.** Regex biên dịch được nhưng nhận cả chuỗi hợp lệ lẫn không hợp lệ. Cần thêm lớp kiểm tra nào?

A. Đo độ ngắn của biểu thức để giảm khả năng lỗi.

B. Các ví dụ dương và âm theo hành vi cần nhận diện.

C. Biên dịch regex bằng cùng thư viện thêm một lần.

D. Xác nhận output không có Markdown rồi coi là hoàn tất.

**Câu 2 — Chọn hai.** Ứng dụng chấm Python bằng ast.parse, JSON bằng json.loads. Hai kết luận nào được các phép kiểm này hỗ trợ?

A. Python được kiểm tra cú pháp mà không cần chạy mã sinh ra.

B. JSON parse được chứng minh cấu trúc nghiệp vụ không thiếu trường.

C. JSON parse được chưa chứng minh các giá trị đáp ứng task.

D. Python parse được chứng minh thuật toán trả đúng mọi đầu vào.

**Câu 3 — Chọn một.** Một bản ghi yêu cầu JSON nhưng output là Python hợp lệ. Validator được chọn bằng cách đoán từ output nên ca vẫn đạt. Sửa nào phù hợp?

A. Cho tất cả output qua mọi validator và đạt nếu một phép bất kỳ thành công.

B. Đổi format của test case theo định dạng model đã tạo.

C. Chọn validator từ trường format của test case, không từ output.

D. Bỏ kiểm tra định dạng để ưu tiên model tự chọn cách giải.

**Câu 4 — Chọn hai.** Đội đánh giá muốn báo riêng lỗi cú pháp và lỗi tác vụ. Hai phép kiểm nào bổ sung cho nhau khi chấm mã sinh?

A. Chạy mọi mã chưa kiểm tra trực tiếp trên máy production.

B. Parse cú pháp bằng validator tương ứng với format.

C. Dùng điểm parse để thay hoàn toàn điểm đúng nhiệm vụ.

D. Kiểm tra hành vi hoặc đối chiếu yêu cầu sau khi cú pháp hợp lệ.

**Câu 5 — Chọn một.** Đầu ra JSON đúng nội dung nhưng được bọc trong lời giải thích. Hợp đồng yêu cầu chỉ JSON. Cách chấm nào phản ánh đúng hợp đồng?

A. Ghi lỗi định dạng: toàn bộ output không parse được.

B. Chấm đạt nếu model khẳng định đoạn bên trong là JSON.

C. Đổi format sang text vì nội dung trả lời vẫn hữu ích.

D. Trích JSON rồi chấm đạt, không lưu bước sửa.

## Đáp án và giải thích

1. **B.** B kiểm tra ngữ nghĩa đối sánh. C chỉ lặp kiểm tra cú pháp; A không chứng minh hành vi; D kiểm tra bao gói nhưng bỏ lỗi nhận diện.

2. **A, C.** A là phạm vi của AST parse; C phân biệt cú pháp với nội dung. D chưa có kiểm thử hành vi; B chưa kiểm tra schema hay quy tắc nghiệp vụ.

3. **C.** C kiểm tra đúng hợp đồng đầu vào. A chấp nhận sai loại; B thay yêu cầu để hợp kết quả; D bỏ ràng buộc của sản phẩm.

4. **B, D.** B phát hiện sai cấu trúc, D phát hiện sai chức năng. C đồng nhất hai tiêu chí; A không cần thiết để parse và tạo rủi ro thực thi ngoài phạm vi đánh giá.

5. **A.** A đo đầu ra thực tế theo hợp đồng. D che lỗi bằng hậu xử lý không được quy định; C thay nhiệm vụ; B dùng tự nhận định thay kiểm tra.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276735). Bản lưu: `sources/bedrock-lessons/276735.json`.

## Đối chiếu Vertex

Hồ sơ đối chiếu toàn văn với bài API 287737 chỉ ghi nhận khác cách diễn đạt như “upfront/ahead of time” và “average/take the average”. Kiến thức chấm bằng mã không đổi, nên dùng chung câu hỏi thay vì đếm thành bộ mới.

Nguồn đối chiếu: [Code based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289167). Bản lưu: `sources/vertex-lessons/289167.json`.
