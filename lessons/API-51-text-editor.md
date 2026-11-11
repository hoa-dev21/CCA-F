# The text edit tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287760), sources/api-lessons/287760.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu công cụ chỉnh sửa văn bản có cấu trúc do Anthropic định nghĩa. Có bản mô tả công cụ không có nghĩa máy chủ Anthropic tự đọc hoặc sửa tệp trên máy bạn. Với loại công cụ do ứng dụng thực thi trong mẫu, ứng dụng vẫn phải viết mã xử lý và trả kết quả.

Các thao tác minh họa gồm xem tệp hoặc thư mục, đọc một phạm vi dòng, thay nội dung và tạo nội dung. Danh sách lệnh cùng phiên bản định nghĩa công cụ tùy mô hình; không nên lấy tính năng hoàn tác hoặc tên phiên bản cũ làm cam kết cho mọi mô hình hiện tại.

Trước khi sửa tệp có sẵn, đọc nội dung liên quan để biết trạng thái thật. Sau khi chạy thao tác hợp lệ, xem kết quả và phần khác biệt trước, sau khi sửa (diff).

Một khối `tool_use` mới thể hiện yêu cầu sửa, chưa chứng minh tệp đã thay đổi. Ứng dụng chịu trách nhiệm giới hạn tệp được truy cập, kiểm tra quyền, thực thi và xác minh kết quả.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** API trả tool_use yêu cầu sửa tệp, nhưng tệp local vẫn nguyên. Nhóm nghĩ dịch vụ đã tự sửa máy của mình. Thành phần nào còn thiếu?

A. Cho UI hiển thị tool_use như bằng chứng diff.

B. Host cần chạy yêu cầu sửa và trả kết quả thực thi.

C. Tăng max_tokens để tool_use chứa cả tệp đã chỉnh.

D. Một prompt yêu cầu mô hình khẳng định đã sửa.

**Câu 2 — Chọn một.** Agent định thay một đoạn văn đã đọc từ đầu phiên, nhưng người dùng vừa sửa tệp. Quy trình nào giảm ghi đè sai?

A. Thay toàn bộ tệp bằng bản mô hình nhớ để tránh anchor lỗi.

B. Đọc lại phần liên quan, sửa rồi đối chiếu diff.

C. Chỉ kiểm tra mã thoát của lệnh ghi.

D. Dùng bản cũ để giữ tính nhất quán với kế hoạch đã lập.

**Câu 3 — Chọn hai.** Ứng dụng triển khai text editor client tool. Hai trách nhiệm nào thuộc host?

A. Giả định mọi phiên bản công cụ có cùng khả năng undo.

B. Ủy thác quyền ghi cho mô hình vì schema do nhà cung cấp định nghĩa.

C. Giới hạn đường dẫn và quyền truy cập trước thực thi.

D. Đọc kết quả và kiểm tra thay đổi sau thao tác.

**Câu 4 — Chọn một.** Một tích hợp dựa vào undo của phiên bản mẫu, nhưng phiên bản đích không công bố thao tác đó. Cách thiết kế đúng?

A. Xác minh lệnh được hỗ trợ và thiết kế phục hồi phù hợp môi trường đích.

B. Gửi tên lệnh undo cũ và coi lỗi là đã hoàn tác.

C. Yêu cầu mô hình mô phỏng undo chỉ bằng lời xác nhận.

D. Dùng prompt ghi nhớ tệp thay cho mọi cơ chế đọc/kiểm tra.

**Câu 5 — Chọn hai.** Công cụ báo sửa thành công nhưng người dùng thấy hành vi sai. Hai kiểm tra nào phân biệt thành công kỹ thuật với thành công nhiệm vụ?

A. Chỉ xem tool_use có tên lệnh được hỗ trợ không.

B. Diff có đúng tệp, đúng phạm vi và giữ phần không liên quan không.

C. Hành vi sau sửa có đáp ứng yêu cầu ban đầu không.

D. Chỉ xem câu trả lời cuối có nêu đường dẫn tệp không.

## Đáp án và giải thích

1. **B.** A sai: Yêu cầu thay đổi chưa là thay đổi đã xảy ra. B đúng: Client tool không tự chạy chỉ vì có định nghĩa. C sai: Đối số lớn hơn vẫn cần thực thi. D sai: Câu chữ không ghi tệp.

2. **B.** A sai: Tăng nguy cơ mất thay đổi chưa đọc. B đúng: Phải thao tác trên trạng thái thật và xác nhận phạm vi. C sai: Ghi thành công không chứng minh nội dung đúng. D sai: Nhất quán với dữ liệu cũ có thể phá sửa đổi mới.

3. **C, D.** A sai: Khả năng phụ thuộc định nghĩa/phiên bản. B sai: Nguồn schema không thay cơ chế quyền local. C đúng: Host là nơi kiểm soát tác động lên tệp. D đúng: Cần xác nhận nội dung đạt mục tiêu.

4. **A.** A đúng: Không dựa vào cam kết không có ở phiên bản dùng. B sai: Lỗi không chứng minh phục hồi. C sai: Không tác động trạng thái tệp. D sai: Ngữ cảnh không bảo đảm khôi phục chính xác trạng thái.

5. **B, C.** A sai: Hợp lệ yêu cầu chưa đủ. B đúng: Kiểm tra tác động nội dung. C đúng: Kiểm tra mục tiêu cuối. D sai: Nêu tên không chứng minh đã sửa đúng.

## Đối chiếu Bedrock

Nhà cung cấp định nghĩa cấu trúc công cụ chỉnh sửa, nhưng ứng dụng vẫn phải thực hiện đọc, ghi và giới hạn đường dẫn. Mã phiên bản và khả năng hoàn tác trong video không áp dụng cho mọi phiên bản editor. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text editor tool](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276767). Bản lưu: `sources/bedrock-lessons/276767.json`.

## Đối chiếu Vertex

Dù có sẵn định nghĩa editor, ứng dụng vẫn cần bộ thực thi và phạm vi tệp được phép. Tiền tố mã mô hình, phiên bản và lệnh hoàn tác trong ví dụ phụ thuộc mô hình; cần kiểm tra thay vì giả định cùng tập lệnh ở mọi nơi. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text edit tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289180). Bản lưu: `sources/vertex-lessons/289180.json`.
