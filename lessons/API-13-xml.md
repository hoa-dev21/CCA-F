# Phân ranh giới nội dung

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287741), sources/api-lessons/287741.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi một prompt chứa cả yêu cầu, mã nguồn và tài liệu tham khảo, cần giúp Claude nhận ra từng phần. Bạn có thể đặt nội dung trong các cặp thẻ theo kiểu XML, gồm thẻ mở và thẻ đóng.

Ví dụ: đặt mã trong `<source_code>...</source_code>` và tài liệu trong `<reference_docs>...</reference_docs>`. Sau đó yêu cầu Claude đối chiếu mã với tài liệu. Nhờ tên thẻ, vai trò của từng đoạn rõ hơn so với việc ghép mọi thứ thành một khối văn bản.

Không có bộ tên thẻ bắt buộc cho cách tổ chức prompt này. Hãy chọn tên mô tả đúng nội dung, dùng nhất quán và đóng thẻ đầy đủ. Nếu có nhiều loại dữ liệu, tên `<sales_records>` cho biết đây là dữ liệu bán hàng rõ hơn tên chung `<data>`.

Cách này hữu ích khi nội dung dài, có nhiều nguồn hoặc dùng mẫu prompt chứa các phần được thay vào mỗi lần chạy. Nó giúp tổ chức thông tin; không tự bổ sung dữ liệu thiếu, kết nối cơ sở dữ liệu hay bảo đảm mọi kết luận đúng.

## Câu hỏi

**1. Chọn một.** Prompt trộn mã và tài liệu khiến phân tích nhầm vai trò từng đoạn. Cải thiện trực tiếp?

A. Tăng tính ngẫu nhiên.

B. Dùng cặp thẻ mô tả riêng cho mã và tài liệu.

C. Xóa tài liệu tham chiếu.

D. Đổi tên mô hình mà giữ nguyên nội dung.

**2. Chọn một.** Quy tắc đặt tên thẻ nào đúng theo bài?

A. Chỉ được dùng tên trong một tiêu chuẩn bắt buộc.

B. Mọi phần đều phải tên `<data>`.

C. Có thể đặt tên mô tả phù hợp nội dung.

D. Tên thẻ không bao giờ có ý nghĩa.

**3. Chọn một.** Dùng XML giúp trực tiếp việc gì?

A. Phân biệt cấu trúc và ranh giới các phần trong prompt.

B. Tự truy vấn cơ sở dữ liệu chưa tích hợp.

C. Bảo đảm mọi kết luận đều đúng.

D. Tăng dung lượng ngữ cảnh vô hạn.

## Đáp án

1. **B.** A và D không giải quyết ranh giới; C bỏ dữ liệu có ích.
2. **C.** A và B áp đặt hạn chế không có; D phủ nhận lợi ích tên có nghĩa.
3. **A.** B đòi hỏi tích hợp; C không được bảo đảm; D sai về giới hạn ngữ cảnh.

## Đối chiếu Bedrock: Structure with XML tags

Bài Bedrock dùng thẻ có tên rõ để tách mã, tài liệu và dữ liệu đầu vào. Thẻ giúp tổ chức ngữ cảnh, không tự tạo cơ chế bảo mật. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276744). Bản lưu: `sources/bedrock-lessons/276744.json`.

## Đối chiếu Vertex

Thẻ XML giúp phân biệt hướng dẫn, dữ liệu, mã và tài liệu. Tên thẻ nên nói rõ vai trò. Dấu phân cách làm cấu trúc dễ hiểu hơn nhưng không tự biến nội dung bên trong thành dữ liệu đáng tin cậy hoặc thành chỉ dẫn được phép thực hiện. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structure with XML tags](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289171). Bản lưu: `sources/vertex-lessons/289171.json`.
