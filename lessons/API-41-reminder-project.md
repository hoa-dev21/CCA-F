# Thiết kế hệ thống nhắc việc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287751), sources/api-lessons/287751.json. Tóm tắt và câu hỏi tự biên soạn; ghi rõ các giới hạn của ví dụ khi cần.

## Nội dung bài học


Ví dụ nhắc việc giúp phân biệt một câu trả lời với một hành động đã thực hiện. Để tạo lời nhắc, hệ thống cần lấy thời gian hiện tại, tính thời điểm cần nhắc và ghi lời nhắc vào nơi quản lý.

Claude nói “Tôi sẽ nhắc bạn” chưa tạo ra bản ghi nào. Ứng dụng phải thực hiện thao tác và kiểm tra kết quả trước khi xác nhận với người dùng.

Ví dụ: Người dùng muốn được nhắc sau ba ngày. Nếu cách tính cần mốc hiện tại, hệ thống phải lấy mốc đó trước, chuyển nó cho bước tính toán, rồi dùng thời điểm đã tính để tạo lời nhắc. Công cụ tính thời gian giúp thực hiện phép tính chuyên biệt thay vì chỉ dựa vào câu trả lời tự do của mô hình.

Các công cụ cần có đầu vào và kết quả rõ để phối hợp và kiểm tra từng bước. Những điểm như múi giờ hoặc cách hiểu một ngày mơ hồ cần được quy định hoặc hỏi lại theo yêu cầu ứng dụng; không nên mặc định mô hình tự biết mọi trạng thái môi trường.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Người dùng yêu cầu “nhắc sau ba ngày”. Công cụ tính ngày chạy song song với công cụ tạo lời nhắc; bước tạo dùng giờ hiện tại vì kết quả tính chưa về. Cách sửa phù hợp?

A. Giữ chạy song song và sửa lời nhắc sau khi xác nhận với người dùng.

B. Chờ mốc đã tính, kiểm tra nó rồi truyền sang thao tác tạo.

C. Cho mô hình ước tính mốc để công cụ tính chỉ dùng đối chiếu.

D. Lặp cả hai công cụ để tăng xác suất hai kết quả trùng nhau.

**Câu 2 — Chọn một.** Backend ghi lời nhắc báo lỗi. Claude đã sinh câu “đã tạo lời nhắc” trước khi nhận kết quả. Ứng dụng nên làm gì?

A. Coi lời hứa trong hội thoại là một lời nhắc dự phòng.

B. Ghi log lỗi nội bộ nhưng báo thành công để tránh lặp yêu cầu.

C. Thông báo ghi thất bại và xử lý theo lỗi backend.

D. Giữ câu đã sinh vì thời điểm tính toán vẫn đúng.

**Câu 3 — Chọn hai.** Yêu cầu “nhắc sáng thứ Hai” đến từ người đi công tác, chưa rõ múi giờ. Hai bước nào cần làm trước khi xác nhận?

A. Dùng quy ước múi giờ đã được ứng dụng xác lập hoặc hỏi lại nếu chưa có.

B. Mặc định múi giờ máy chủ vì backend là nơi thực thi.

C. Chọn múi giờ dựa trên ngôn ngữ người dùng và tránh hỏi lại.

D. Xác nhận kết quả tạo từ nơi quản lý lời nhắc.

**Câu 4 — Chọn một.** Có ba công cụ lấy giờ hiện tại, tính thời điểm và ghi lời nhắc. Kiểm thử nào phát hiện lỗi phối hợp mà test từng hàm có thể bỏ sót?

A. Kiểm tra mô hình giải thích được công dụng từng công cụ.

B. Kiểm tra tên công cụ đều có trong prompt hệ thống.

C. Thử luồng tính mốc → ghi → xác nhận theo kết quả ghi.

D. Kiểm tra ba hàm đều trả giá trị không rỗng khi gọi riêng.

**Câu 5 — Chọn hai.** Sau khi tính lịch, dữ liệu ghi nhận sai một ngày. Hai bằng chứng nào hữu ích nhất để xác định khâu lỗi?

A. Chỉ câu xác nhận cuối cùng của Claude.

B. Chỉ tổng số token dùng trong hội thoại.

C. Mốc kết quả tính và giá trị thực tế đã ghi trong backend.

D. Mốc hiện tại, múi giờ và đối số đã truyền vào công cụ tính.

## Đáp án và giải thích

1. **B.** A sai: Xác nhận trước dễ báo một hành động chưa đúng. B đúng: Đây là phụ thuộc dữ liệu, không thể bỏ để song song hóa. C sai: Bỏ qua kết quả chuyên biệt đang cần cho thao tác. D sai: Thử lại không sửa sai thứ tự phụ thuộc.

2. **C.** A sai: Nội dung chat không phải hệ thống quản lý lời nhắc. B sai: Che lỗi khiến người dùng dựa vào hành động chưa xảy ra. C đúng: Lời xác nhận phải theo trạng thái thực tế. D sai: Đúng thời gian không chứng minh có bản ghi.

3. **A, D.** A đúng: Mốc thời gian phải có ý nghĩa xác định. B sai: Vị trí xử lý không xác định ý định người dùng. C sai: Ngôn ngữ không đủ chứng minh múi giờ. D đúng: Phải kiểm chứng tác động ghi dữ liệu.

4. **C.** A sai: Giải thích không kiểm chứng luồng thực thi. B sai: Khả năng nhìn thấy không chứng minh thứ tự và truyền dữ liệu. C đúng: Đánh giá hợp đồng giữa các bước và trạng thái cuối. D sai: Không chứng minh chúng được nối đúng.

5. **C, D.** A sai: Không cho thấy các giá trị ở ranh giới bước. B sai: Không xác định dữ liệu thời gian đã truyền. C đúng: Cho phép phân biệt lỗi tính với lỗi chuyển/ghi. D đúng: Cho phép kiểm tra đầu vào phép tính.

## Đối chiếu Vertex

Dự án chia thành lấy thời gian, cộng khoảng thời gian và tạo lời nhắc; cần làm rõ múi giờ và các cách hiểu mơ hồ. Phần giới thiệu nói tới thông báo theo lịch, nhưng mã ở bài 289185 chỉ in kết quả để minh họa. Vì vậy chưa thể khẳng định lời nhắc thật đã được tạo. Dùng chung câu hỏi.

Nguồn đối chiếu: [Project overview](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289175). Bản lưu: `sources/vertex-lessons/289175.json`.
