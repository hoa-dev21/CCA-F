# Structure with XML tags — Phân ranh giới nội dung

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287741), sources/api-lessons/287741.json. Câu hỏi tự biên soạn.

## Tóm tắt

Khi prompt trộn yêu cầu, tài liệu và mã nguồn, mô hình có thể khó phân biệt phần nào phục vụ mục đích nào. Các cặp thẻ như `<source_code>...</source_code>` và `<reference_docs>...</reference_docs>` tạo ranh giới rõ.

Không cần một bộ tên thẻ chuẩn. Chọn tên mô tả nội dung, dùng nhất quán và đóng thẻ rõ ràng. `<sales_records>` truyền đạt ý nghĩa cụ thể hơn `<data>` khi có nhiều loại dữ liệu trong cùng prompt.

Bài đặc biệt khuyến nghị cách này với ngữ cảnh dài, nhiều loại nội dung hoặc nhiều biến được chèn vào template. Lợi ích chính là tổ chức thông tin, không phải thay thế dữ liệu còn thiếu.

Ví dụ tự biên soạn: tách log lỗi và đoạn cấu hình thành hai vùng rồi yêu cầu đối chiếu chúng. Việc có ranh giới giúp biết lỗi nằm trong log hay trong cấu hình, thay vì coi toàn bộ là một khối văn bản.

## Câu hỏi

**1. Chọn một.** Prompt trộn mã và tài liệu khiến phân tích nhầm vai trò từng đoạn. Cải thiện trực tiếp?

A. Tăng tính ngẫu nhiên.

B. Dùng cặp thẻ mô tả riêng cho mã và tài liệu.

C. Xóa tài liệu tham chiếu.

D. Đổi tên model mà giữ nguyên nội dung.

**2. Chọn một.** Quy tắc đặt tên thẻ nào đúng theo bài?

A. Chỉ được dùng tên trong một tiêu chuẩn bắt buộc.

B. Mọi phần đều phải tên `<data>`.

C. Có thể đặt tên mô tả phù hợp nội dung.

D. Tên thẻ không bao giờ có ý nghĩa.

**3. Chọn một.** Dùng XML giúp trực tiếp việc gì?

A. Phân biệt cấu trúc và ranh giới các phần trong prompt.

B. Tự truy vấn cơ sở dữ liệu chưa tích hợp.

C. Bảo đảm mọi kết luận đều đúng.

D. Tăng dung lượng context vô hạn.

## Đáp án

1. **B.** A và D không giải quyết ranh giới; C bỏ dữ liệu có ích.
2. **C.** A và B áp đặt hạn chế không có; D phủ nhận lợi ích tên có nghĩa.
3. **A.** B đòi hỏi tích hợp; C không được bảo đảm; D sai về giới hạn ngữ cảnh.

## Đối chiếu Bedrock: Structure with XML tags

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276744) và đối chiếu khái niệm với bài chung. Cùng phân vùng mã/tài liệu và dữ liệu đầu vào bằng tags có nghĩa. Tags là tổ chức context, không tự là cơ chế bảo mật dữ liệu. Nguồn: sources/bedrock-lessons/276744.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Structure with XML tags](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289171), sources/vertex-lessons/289171.json. XML phân ranh instructions/data/code/docs và tên tag mô tả vai trò. Delimiter tăng rõ ràng nhưng không tạo ranh giới bảo mật tự động; nội dung bên trong vẫn là dữ liệu chưa tin cậy theo nguồn. Dùng chung câu hỏi khái niệm.
