# Ví dụ prefill và stop sequence

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287732), sources/api-lessons/287732.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học xử lý tình huống cần JSON nhưng mô hình trả thêm lời giải thích hoặc khung định dạng Markdown. Ví dụ ở thời điểm khóa học dùng assistant prefill, tức viết sẵn phần mở đầu câu trả lời, để mở khung mã; sau đó dùng stop sequence, tức chuỗi đánh dấu dừng, ở dấu đóng khung.

Mục đích là hướng câu trả lời về dạng dễ đọc bằng chương trình. Đây không phải cơ chế bảo đảm dữ liệu đúng mọi yêu cầu. JSON đọc được vẫn có thể thiếu trường, chứa giá trị sai hoặc đưa thông tin không có trong nguồn.

Ví dụ dùng kỹ thuật phụ thuộc mô hình và phiên bản. Trước khi chạy lại trên môi trường khác, phải kiểm tra khả năng hỗ trợ prefill và sự tương thích với các tính năng khác. Chuỗi dừng đặt không phù hợp cũng có thể cắt câu trả lời sớm.

Khi ôn Architect, đọc thêm EXAM-05 về cấu trúc đầu ra và `tool_choice`, cùng EXAM-06 về kiểm tra dữ liệu. Cần phân biệt việc làm sạch định dạng với việc kiểm tra cấu trúc và ý nghĩa của kết quả.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Prefill và stop marker đã loại được Markdown. JSON parse thành công nhưng thiếu mã đơn bắt buộc. Thay đổi nào giải quyết đúng lớp lỗi còn lại?

A. Chỉ yêu cầu prefill dài hơn để JSON luôn có vẻ hoàn chỉnh.

B. Thêm một stop marker nữa sau dấu ngoặc đóng JSON.

C. Bỏ mọi whitespace trước khi parse rồi nhận kết quả.

D. Validate trường/kiểu và xử lý mã thiếu theo hợp đồng.

**Câu 2 — Chọn hai.** Nhóm chuyển notebook có assistant prefill sang mô hình và chế độ suy luận khác. Hai việc nào cần trước khi coi workflow tương đương?

A. Chỉ so sánh câu trả lời đầu tiên có cùng kiểu thụt dòng.

B. Kiểm tra hỗ trợ và khả năng kết hợp các tính năng trên model/API đích.

C. Giữ nguyên cấu hình nếu SDK có cùng tên hàm gửi request.

D. Chạy bộ ca gồm đầu ra đúng, thiếu trường và bị dừng sớm; kiểm tra cả trạng thái kết thúc.

**Câu 3 — Chọn một.** JSON bị cắt ngay khi một giá trị chuỗi chứa đoạn trùng stop sequence. Tăng max_tokens vẫn không giúp. Cách chẩn đoán nào đúng nhất?

A. Chuyển dữ liệu chuỗi thành số để stop sequence không xuất hiện.

B. Tăng timeout mạng để chờ phần JSON còn lại.

C. Tự thêm dấu ngoặc đóng rồi coi các trường trước đó là đầy đủ.

D. Kiểm tra stop reason và marker, sửa rồi thử lại ca bị cắt.

**Câu 4 — Chọn một.** Đầu ra JSON đúng schema chứa tổng hóa đơn 1.000, trong khi cộng các dòng được 950. Nhóm muốn sửa prefill để loại lỗi. Quyết định kiến trúc nào phù hợp hơn?

A. Chấp nhận vì schema xác nhận amount là số.

B. Bổ sung validation ngữ nghĩa, giữ cả hai giá trị và xử lý xung đột theo hợp đồng.

C. Chọn tổng ở trường cuối vì nó được sinh sau nên đã tổng hợp đủ dữ liệu.

D. Thêm tổng 950 vào prefill để mô hình luôn lặp lại giá trị mong muốn.

**Câu 5 — Chọn hai.** Hệ thống muốn đưa JSON từ mô hình thẳng vào bước cập nhật hồ sơ. Hai kiểm soát nào nằm ngoài khả năng bảo đảm của việc bỏ code fence bằng prefill/stop?

A. Kiểm tra giá trị với nguồn và quy tắc nghiệp vụ.

B. Kiểm tra đã bỏ code fence rồi coi đó là bằng chứng được phép ghi.

C. Kiểm tra quyền và tiền điều kiện trước khi cập nhật hồ sơ.

D. Dùng tên trường giống cơ sở dữ liệu để thay cho kiểm tra tính hợp lệ.

## Đáp án và giải thích

1. **D.** A sai: Hướng định dạng không chứng minh giá trị đúng hay được nguồn hỗ trợ. B sai: Điểm dừng không xác nhận các trường cần thiết đã tồn tại. C sai: Whitespace không tạo mã đơn còn thiếu. D đúng: Parse chỉ kiểm tra cú pháp; thiếu trường thuộc kiểm tra cấu trúc hoặc nghiệp vụ.

2. **B, D.** A sai: Một ví dụ trình bày không bao phủ tương thích và đường lỗi. B đúng: Kỹ thuật từ ví dụ không bảo đảm tương thích ở mọi môi trường. C sai: Tên hàm giống nhau không chứng minh hợp đồng tính năng giống nhau. D đúng: Cần xác minh hành vi thực tế, không chỉ API có nhận request.

3. **D.** A sai: Thay kiểu dữ liệu nguồn làm đổi hợp đồng thay vì sửa nguyên nhân điều khiển dừng. B sai: Dừng do marker không phải phần phản hồi đang chờ thêm qua mạng. C sai: Sửa cú pháp không khôi phục dữ liệu bị cắt hoặc chứng minh đủ trường. D đúng: Hiện tượng phù hợp marker kết thúc sinh trước khi cấu trúc hoàn tất.

4. **B.** A sai: Kiểu số không xác nhận số đúng hoặc khớp dữ kiện. B đúng: Định dạng đã đạt; vấn đề là tính nhất quán nghiệp vụ và nguồn bằng chứng. C sai: Thứ tự sinh không chứng minh phép tính hoặc nguồn đáng tin hơn. D sai: Ghi sẵn đáp án che xung đột và không giải quyết cho tài liệu khác.

5. **A, C.** A đúng: JSON sạch không chứng minh dữ kiện có căn cứ hoặc đúng ngữ nghĩa. B sai: Dấu Markdown không liên quan quyền thực thi. C đúng: Định dạng văn bản không cấp quyền cho hành động. D sai: Tên trùng chỉ hỗ trợ ánh xạ, không chứng minh các giá trị được chấp nhận.

## Đối chiếu bài Bedrock

Ví dụ dùng phần mở đầu câu trả lời để mở khối mã và chuỗi dừng để bỏ phần bao Markdown. Đây là kỹ thuật trong phiên bản của khóa; cần kiểm tra tương thích và dữ liệu đầu ra. Đọc được JSON chưa chứng minh đúng nghiệp vụ. Dùng chung phần giải thích và câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276724). Bản lưu: `sources/bedrock-lessons/276724.json`.

## Đối chiếu Vertex

Mẫu điền trước dấu mở khối mã JSON, đặt chuỗi dừng ở dấu đóng rồi đọc dữ liệu bằng `json.loads`. Cách này không bảo đảm đúng schema hoặc giá trị, cũng không mặc định dùng được với mọi mô hình hay chế độ suy luận. Chọn cơ chế đầu ra được hỗ trợ và kiểm tra kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289158). Bản lưu: `sources/vertex-lessons/289158.json`.
