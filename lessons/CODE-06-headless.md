# Chọn nơi chạy tự động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486935), sources/code-lessons/486935.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi muốn Claude chạy tự động, cần chọn nơi chạy phù hợp với dữ liệu và mức điều khiển bạn cần. Bài học phân biệt ba cách:

- Routine: tác vụ chạy trên hạ tầng do dịch vụ quản lý.
- Headless: chạy không có giao diện trò chuyện tương tác, trong mã lệnh hoặc quy trình tự động do bạn quản lý.
- Agent SDK: bộ thư viện để tích hợp luồng làm việc của tác nhân AI vào ứng dụng Python hoặc TypeScript.

Ví dụ: Nếu nhiệm vụ cần dữ liệu chỉ truy cập được trong mạng nội bộ, chạy headless trong môi trường của nhóm có thể phù hợp hơn một tác vụ trên đám mây không có quyền truy cập nguồn đó.

Trong ví dụ dòng lệnh, `-p` hoặc `--print` dùng cho cách chạy không tương tác. Kết quả có thể được chuyển sang bước xử lý tiếp theo. Khi bước sau cần dữ liệu có cấu trúc, bài kết hợp `--output-format json` với `--json-schema`, tức mô tả cấu trúc dữ liệu phải trả về. Dữ liệu kết quả nằm trong trường `structured_output`; toàn bộ phản hồi JSON còn có thông tin khác, nên không được coi tất cả là dữ liệu nghiệp vụ.

Với công việc nhiều giai đoạn, có thể lưu mã định danh phiên (session ID) để tiếp tục đúng phiên. Trước khi dùng lại ngữ cảnh, kiểm tra xem dữ liệu nguồn đã thay đổi hay chưa.

Bài còn nhắc đến chế độ khởi chạy tối giản (bare) và các tính năng đang thử nghiệm. Môi trường khởi chạy nhất quán không bảo đảm AI trả lời giống hệt ở mọi lần. Các quy tắc tự nạp cấu hình và giới hạn sản phẩm cần được xác minh theo phiên bản.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một tác vụ cần truy cập dữ liệu chỉ có trong mạng nội bộ và phải dùng logic điều phối riêng. Hạ tầng routine cloud hiện không có kết nối tới dữ liệu đó. Lựa chọn triển khai phù hợp nhất?

A. Dùng routine cloud rồi thêm tên máy nội bộ vào prompt.

B. Chạy headless trong môi trường nhóm quản lý có quyền truy cập nguồn.

C. Dùng UI tương tác trong CI và chờ người đăng nhập mỗi lần.

D. Chuyển toàn bộ dữ liệu ra ngoài trước, không cần đánh giá điều kiện truy cập.

**Câu 2 — Chọn một.** CLI trả JSON envelope chứa metadata phiên và structured_output theo schema nghiệp vụ. Adapter cần kiểm tra findings để quyết định bước sau. Cách xử lý đúng nhất?

A. Đọc trạng thái chạy; validate findings từ structured_output.

B. Validate toàn bộ envelope như thể mọi trường đều thuộc schema findings.

C. Lấy dòng văn bản cuối stdout vì đó thường là tóm tắt kết quả.

D. Dùng session ID làm tín hiệu thành công và bỏ kiểm tra findings.

**Câu 3 — Chọn hai.** Workflow nhiều giai đoạn muốn tiếp tục cùng phiên để tận dụng ngữ cảnh, nhưng repo có thể đổi giữa hai lần chạy. Hai việc nào cần làm?

A. Chỉ lưu bản tóm tắt cuối, bỏ session ID vì có thể suy lại.

B. Lưu session ID/trạng thái cần thiết để tiếp tục đúng phiên.

C. Tin mọi kết quả công cụ cũ nếu session ID không đổi.

D. Xác minh lại dữ liệu nguồn đã thay đổi trước khi dựa vào kết luận cũ.

**Câu 4 — Chọn một.** Sản phẩm TypeScript cần tích hợp vòng điều phối tác nhân, xử lý sự kiện và logic nghiệp vụ trong ứng dụng. Theo các lựa chọn của bài, hướng nào sát nhu cầu nhất?

A. Đóng gói thêm các lệnh shell rời rạc và để UI tự ghép log.

B. Dùng routine không truy cập được runtime của sản phẩm.

C. Dùng Agent SDK để tích hợp luồng tác nhân vào mã ứng dụng.

D. Dùng chế độ tương tác và parse câu trả lời văn xuôi làm giao thức.

**Câu 5 — Chọn hai.** Hai lần chạy cùng cấu hình khởi động tối giản cho đầu ra hơi khác nhau. Hai kết luận nào hợp lý?

A. Cấu hình môi trường nhất quán không bảo đảm đầu ra mô hình giống hệt.

B. Sai khác đầu ra chứng minh cấu hình khởi động đã không được áp dụng.

C. Không cần đo chất lượng nếu các lần chạy cùng command line.

D. Vẫn cần kiểm thử hành vi và kiểm tra hợp đồng/cấu hình theo phiên bản.

## Đáp án và giải thích

1. **B.** B đáp ứng nơi chạy và quyền truy cập cần thiết. A không tạo kết nối mạng. C không phù hợp tác vụ tự động không người trực. D thay đổi ranh giới dữ liệu mà chưa xét yêu cầu tổ chức.

2. **A.** A phân biệt trạng thái thực thi với dữ liệu nghiệp vụ. B đọc nhầm tầng giao thức. C phụ thuộc cách trình bày log. D có phiên không đồng nghĩa đã có kết quả hợp lệ.

3. **B, D.** B xác định phiên, D bảo vệ tính hiện hành của bằng chứng. A không bảo đảm nối đúng trạng thái. C đồng nhất danh tính phiên với độ mới của nội dung.

4. **C.** C phù hợp tích hợp lập trình vào sản phẩm. A có thể dùng cho script đơn giản nhưng không đáp ứng trực tiếp nhu cầu vòng điều phối trong ứng dụng. B không đạt ràng buộc môi trường. D phụ thuộc tương tác và văn phong thay vì giao diện tích hợp.

5. **A, D.** A phân biệt tái lập môi trường và tính xác định đầu ra. D xác nhận điều sản phẩm cần. B suy nguyên nhân duy nhất từ một hiện tượng. C bỏ đo kết quả dù môi trường giống nhau.
