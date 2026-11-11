# PDF support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287768), sources/api-lessons/287768.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Trong mẫu của bài, PDF được gửi bằng khối nội dung kiểu `document` với loại dữ liệu PDF phù hợp, thay vì gửi như một khối ảnh. Bạn có thể yêu cầu tóm tắt hoặc lấy thông tin từ tài liệu đó.

Một PDF có thể chứa văn bản, bảng, hình và bố cục cần đọc cùng nhau. Hỗ trợ nhận tệp PDF không có nghĩa mô hình luôn đọc đúng mọi trang hoặc mọi bảng.

Ví dụ: Bạn cần số liệu trong một bảng ở trang cụ thể. Hãy nêu rõ vị trí và trường cần lấy, rồi đối chiếu kết quả với tài liệu gốc. Nếu mô hình không tìm được một trường, chưa thể kết luận tài liệu không có trường đó; có thể quá trình đọc hoặc trích xuất đã bỏ sót.

Bài này bổ sung kiến thức về đầu vào của API. Chi tiết xử lý hình ảnh và khả năng thị giác không phải trọng tâm của đề cương thi Architect đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Adapter đang gửi PDF bằng khối image và nhận lỗi kiểu nội dung. Theo mẫu của bài, thay đổi đầu tiên cần làm là gì?

A. Tăng độ phân giải PDF trong khi giữ nguyên loại nội dung.

B. Giữ khối image nhưng đổi phần mở rộng tên tệp thành .pdf.

C. Nới validator phía ứng dụng để chấp nhận response lỗi là nội dung tài liệu.

D. Gửi document block với kiểu PDF theo giao thức đích.

**Câu 2 — Chọn hai.** Bảng ở trang 17 có hai cột số giống nhau nhưng khác đơn vị. Mô hình trích đúng hình thức JSON mà chọn nhầm cột. Hai cải thiện nào nhắm trực tiếp lỗi này?

A. Chấp nhận kết quả vì schema đã kiểm tra trường là số.

B. Lấy trung bình hai cột để giảm ảnh hưởng lựa chọn sai.

C. Đối chiếu kết quả với bảng gốc, gồm tiêu đề cột và chú thích liên quan.

D. Chỉ rõ trang, tên bảng, trường và đơn vị cần lấy trong yêu cầu.

**Câu 3 — Chọn một.** Mô hình trả “không tìm thấy mã hợp đồng” trong PDF 40 trang. Workflow định đánh dấu hợp đồng không có mã. Bước xử lý nào có căn cứ nhất?

A. Chạy lại cùng prompt và coi hai câu trả lời giống nhau là chứng minh vắng mặt.

B. Suy ra mã từ tên file để điền trường bắt buộc.

C. Đánh dấu thiếu vĩnh viễn vì provider đã chấp nhận toàn bộ PDF.

D. Phân biệt chưa trích được với xác nhận vắng mặt; kiểm tra vùng liên quan hoặc chuyển review theo yêu cầu.

**Câu 4 — Chọn hai.** Một PDF chứa số liệu trong bảng, ý nghĩa đơn vị trong chú thích và điều kiện áp dụng ở đoạn văn bên cạnh. Hai yêu cầu nào giúp tránh trích số đúng nhưng diễn giải sai?

A. Đọc số liệu cùng tiêu đề, chú thích và điều kiện liên quan.

B. Chỉ lấy chuỗi số có định dạng hợp lệ để loại nhiễu từ văn bản.

C. Chuẩn hóa tất cả đơn vị theo giá trị thường gặp của tài liệu cùng loại.

D. Giữ vị trí nguồn cùng giá trị và đơn vị trong kết quả cần kiểm chứng.

**Câu 5 — Chọn một.** Đội đã chạy thành công một PDF văn bản và định triển khai cho cả bản scan, bảng phức tạp và bố cục nhiều cột. Bằng chứng nào còn thiếu trước khi khẳng định chất lượng?

A. Một ví dụ có câu trả lời rất dài giải thích từng bước đọc.

B. Đo lỗi theo trường và bố cục trên tài liệu đại diện.

C. Việc dùng cùng phần mở rộng nên có thể tái dùng nguyên mức chính xác.

D. Thông báo upload thành công cho từng định dạng tệp .pdf.

## Đáp án và giải thích

1. **D.** A sai: độ phân giải không sửa lỗi hợp đồng kiểu nội dung. B sai: đổi tên không thay đổi loại khối hoặc cấu trúc request. C sai: việc đó che lỗi giao thức, không giúp provider nhận PDF đúng. D đúng: vấn đề nằm ở biểu diễn tài liệu trong request trước khi xét khả năng đọc nội dung.

2. **C, D.** A sai: kiểu số không chứng minh đã chọn đúng cột hoặc đơn vị. B sai: tạo số tổng hợp không được yêu cầu và có thể không có ý nghĩa nghiệp vụ. C đúng: kiểm chứng nguồn bắt lỗi đọc sai mà parse JSON không phát hiện. D đúng: vị trí và semantics giúp phân biệt các giá trị gần nhau.

3. **D.** A sai: các lần đọc có thể lặp cùng lỗi bỏ sót nên đồng thuận không đủ chứng cứ. B sai: tên file chưa được xác nhận là nguồn hợp lệ của mã hợp đồng. C sai: chấp nhận tệp không bảo đảm đọc chính xác mọi phần. D đúng: thất bại trích xuất có thể do bỏ sót chứ chưa chứng minh tài liệu không chứa trường.

4. **A, D.** A đúng: ý nghĩa của số phụ thuộc bố cục và thông tin xung quanh. B sai: loại văn bản có thể bỏ điều kiện quyết định ý nghĩa giá trị. C sai: giả định từ tài liệu khác không thay thế đơn vị ghi trong nguồn hiện tại. D đúng: downstream cần truy được bằng chứng để xác minh cách diễn giải.

5. **B.** A sai: độ dài giải thích không chứng minh bao phủ đúng các dạng bố cục. B đúng: một mẫu dễ không đại diện cho các thách thức đọc và trích xuất khác nhau. C sai: phần mở rộng không thể hiện độ khó của nội dung và bố cục. D sai: upload đo khả năng nhận tệp, không đo độ chính xác nội dung.

## Đối chiếu tính năng trên Bedrock

Mẫu Converse dùng `document.format`, `name` và `source.bytes`. Hỗ trợ PDF chưa bảo đảm hiểu đúng mọi trang, nên cần đối chiếu nguồn và kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308839). Bản lưu: `sources/bedrock-lessons/308839.json`.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ nguồn ban đầu dùng ghi chú chính thức cho trợ lý khóa học, khóa `vertex`, tiêu đề “PDF Support”, không phải bản chép video. Mẫu đổi khối ảnh sang khối tài liệu với `media_type` là `application/pdf` rồi gửi kèm prompt. Có thể phân tích văn bản, biểu đồ, bảng nhưng vẫn cần kiểm tra. Không suy từ ví dụ rằng mọi mô hình đều nhận cùng kích thước hoặc cách mã hóa; giữ trích dẫn và đối chiếu trang liên quan. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/vertex-289198.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đọc toàn bộ phụ đề bổ sung ví dụ `earth.pdf`: đổi khối ảnh sang `document` với `media_type: application/pdf` rồi yêu cầu tóm tắt. Phân tích được các loại nội dung trong PDF không bảo đảm trích xuất đúng mọi chi tiết; vẫn cần kiểm chứng theo nguồn. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198). Bản lưu: `sources/vertex-media/289198.json`.
