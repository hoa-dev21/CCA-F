# Hợp đồng gọi công cụ

Nguồn: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287753), sources/api-lessons/287753.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Để Claude sử dụng một công cụ, ứng dụng cần cung cấp cả mã thực thi lẫn bản mô tả công cụ. Bản mô tả cho Claude biết công cụ dùng để làm gì và cần đầu vào nào; bản thân mô tả không chạy thao tác.

Trong bài, bản khai báo có ba phần chính:

- `name`: tên công cụ, nên thể hiện rõ chức năng.
- `description`: giải thích công cụ làm gì, khi nào nên dùng và trả về loại thông tin nào.
- `input_schema`: mô tả cấu trúc đầu vào, gồm các tham số, kiểu dữ liệu và ý nghĩa của chúng. Danh sách `required` chỉ rõ tham số bắt buộc.

Ví dụ: Nếu tham số là một ngày, cần nói rõ ngày phải viết theo định dạng nào. Nếu có hai công cụ tra cứu gần giống nhau, hãy giải thích trường hợp dùng từng công cụ, thay vì cùng mô tả là “lấy dữ liệu”.

Bạn có thể nhờ Claude tạo bản mô tả từ mã và tài liệu, nhưng vẫn cần đối chiếu với hàm thật. Mô tả một tham số mà hàm không nhận sẽ khiến hai bên không khớp nhau. Chú thích kiểu dữ liệu trong mã (type annotation) cũng không thay thế việc viết và kết nối hàm thực thi.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hai công cụ read_invoice và read_payment cùng mô tả “lấy dữ liệu tài chính”. Model thường chọn sai dù input_schema đều hợp lệ. Sửa nào trực tiếp nhất?

A. Thêm nhiều thuộc tính tùy chọn giống nhau vào cả hai schema.

B. Chỉ tăng số lần retry mà giữ nguyên mô tả lựa chọn.

C. Đổi cả hai tên thành fetch_data để giảm khác biệt.

D. Làm rõ dữ liệu trả về và ranh giới sử dụng hai tool.

**Câu 2 — Chọn hai.** Công cụ nhận ngày dạng YYYY-MM-DD, còn hàm thực thi cần customer_id. Hai kiểm tra nào phải có khi duyệt schema AI tạo?

A. Giả định type hints đã tự cung cấp mã gọi dịch vụ.

B. Chấp nhận schema nếu JSON hợp lệ dù thiếu customer_id.

C. Mô tả định dạng ngày và ý nghĩa tham số tại nơi model đọc được.

D. Đối chiếu tên, kiểu và tham số bắt buộc với hàm thực thi.

**Câu 3 — Chọn một.** Schema có amount là số, nhưng chính sách chỉ cho phép hoàn dưới hạn mức theo tài khoản. Model gửi số hợp lệ nhưng vượt hạn. Tầng nào cần quyết định cho phép thực thi?

A. Host kiểm tra chính sách tài khoản trước giao dịch.

B. Dùng description amount thay gate nghiệp vụ.

C. Đổi tên công cụ thành safe_refund rồi tin yêu cầu model tạo.

D. JSON parser cho phép mọi số nên giao dịch phải được coi hợp lệ.

**Câu 4 — Chọn hai.** Hàm tra cứu cần order_id và region; schema chỉ khai báo order_id bắt buộc, region nằm trong chú thích nội bộ. Hai sửa đổi nào cần phối hợp?

A. Giữ schema cũ vì model có thể suy ra chú thích trong mã chưa gửi.

B. Nêu ý nghĩa và giá trị định dạng của region trong mô tả gửi model.

C. Cho router tự chọn một region bất kỳ để mọi lời gọi đều chạy.

D. Đưa region vào schema và required nếu hàm thật sự luôn cần nó.

**Câu 5 — Chọn một.** Nhóm tạo schema chính xác nhưng chưa đăng ký mã thực thi. Demo cho thấy model sinh tool_use đẹp. Điều gì còn thiếu để tuyên bố công cụ hoạt động?

A. Chạy được hàm tương ứng và gửi kết quả thực tế trở lại model.

B. Chỉ kiểm tra tên công cụ trong tool_use trùng schema.

C. Chụp một mẫu tool_use hợp lệ làm bằng chứng tích hợp hoàn tất.

D. Cho model diễn giải các tham số như thể đó là dữ liệu dịch vụ.

## Đáp án và giải thích

1. **D.** D cung cấp tín hiệu chọn công cụ. A tăng độ phức tạp không sửa ranh giới; C làm mơ hồ hơn; B lặp quyết định dựa trên cùng thông tin thiếu.

2. **C, D.** D kiểm tra hợp đồng hai phía; C giảm mơ hồ về giá trị. A nhầm kiểu với triển khai; B đúng cú pháp nhưng thiếu đầu vào bắt buộc của hàm.

3. **A.** A phân biệt schema dữ liệu với quyền nghiệp vụ. B hướng dẫn không thay chốt thực thi; D nhầm tính hợp lệ số với quyền giao dịch; C tên không cưỡng chế chính sách.

4. **B, D.** D xác định sự hiện diện, B xác định cách điền. C đoán đầu vào có thể truy sai dữ liệu; A giả định model thấy nội dung chưa được cung cấp.

5. **A.** A kiểm chứng đường thực thi và phản hồi. B chỉ kiểm tra khai báo; D nhầm đầu vào với kết quả; C chứng minh model đề nghị đúng, chưa chứng minh công cụ chạy.

## Đối chiếu Bedrock: mô tả đầu vào công cụ bằng JSON Schema

Mẫu Converse dùng `toolSpec` và `inputSchema`, khác trường `input_schema` của Messages API. Tạo schema từ dữ liệu mẫu chỉ là bước đầu; cần đối chiếu với hàm và dữ liệu thật. Không đưa khóa bí mật hoặc dữ liệu riêng vào công cụ chuyển đổi bên ngoài. Dùng chung câu hỏi về khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276758). Bản lưu: `sources/bedrock-lessons/276758.json`.

## Đối chiếu Vertex

Mẫu Messages dùng `name`, `description` và `input_schema`. `ToolParam` hỗ trợ kiểm tra kiểu khi phát triển, không thay kiểm tra dữ liệu lúc chạy. Schema do mô hình tạo vẫn cần rà soát. Độ dài mô tả 3–4 câu chỉ là gợi ý; điều chính là nêu phạm vi và lúc dùng công cụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289174). Bản lưu: `sources/vertex-lessons/289174.json`.
