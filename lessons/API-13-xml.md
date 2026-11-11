# Phân ranh giới nội dung

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287741), sources/api-lessons/287741.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi một prompt chứa cả yêu cầu, mã nguồn và tài liệu tham khảo, cần giúp Claude nhận ra từng phần. Bạn có thể đặt nội dung trong các cặp thẻ theo kiểu XML, gồm thẻ mở và thẻ đóng.

Ví dụ: đặt mã trong `<source_code>...</source_code>` và tài liệu trong `<reference_docs>...</reference_docs>`. Sau đó yêu cầu Claude đối chiếu mã với tài liệu. Nhờ tên thẻ, vai trò của từng đoạn rõ hơn so với việc ghép mọi thứ thành một khối văn bản.

Không có bộ tên thẻ bắt buộc cho cách tổ chức prompt này. Hãy chọn tên mô tả đúng nội dung, dùng nhất quán và đóng thẻ đầy đủ. Nếu có nhiều loại dữ liệu, tên `<sales_records>` cho biết đây là dữ liệu bán hàng rõ hơn tên chung `<data>`.

Cách này hữu ích khi nội dung dài, có nhiều nguồn hoặc dùng mẫu prompt chứa các phần được thay vào mỗi lần chạy. Nó giúp tổ chức thông tin; không tự bổ sung dữ liệu thiếu, kết nối cơ sở dữ liệu hay bảo đảm mọi kết luận đúng.

## Tự kiểm tra

**Câu 1 — Chọn một.** Prompt ghép mã nguồn và tài liệu hướng dẫn thành một khối. Model đôi lúc báo một ví dụ trong tài liệu là lỗi trong mã. Thay đổi nào nhắm đúng nguyên nhân?

A. Đổi tên biến trong mã cho giống từ ngữ trong tài liệu.

B. Chỉ tăng giới hạn đầu ra để model có chỗ giải thích dài hơn.

C. Tách mã/tài liệu bằng thẻ mô tả và nêu cách đối chiếu.

D. Gộp mã và tài liệu vào cùng thẻ data.

**Câu 2 — Chọn hai.** Nhóm chuẩn hóa prompt dùng thẻ XML cho nguồn tham khảo và yêu cầu. Hai lựa chọn nào có cơ sở theo bài?

A. Dùng cặp mở/đóng nhất quán để ranh giới các phần rõ ràng.

B. Chọn một tên thẻ bí mật được cho là tự nâng mức tin cậy của nguồn.

C. Coi tài liệu trong thẻ là đã được xác minh vì có cấu trúc XML.

D. Dùng tên thẻ mô tả phù hợp với loại nội dung của ứng dụng.

**Câu 3 — Chọn một.** Một đoạn tài liệu chứa câu “bỏ qua yêu cầu trước”. Hệ thống đặt nó trong reference_docs nhưng vẫn cần phân tích như dữ liệu. Thiết kế nào phù hợp nhất?

A. Bỏ thẻ và nối câu đó vào cuối yêu cầu để giữ nguyên thứ tự nguồn.

B. Đưa tài liệu vào system như hướng dẫn.

C. Tách tài liệu khỏi chỉ dẫn; nêu vai trò và thử ca gây nhầm.

D. Đổi tên thẻ thành trusted_docs rồi mặc định mọi câu trong đó đáng tin.

**Câu 4 — Chọn hai.** Prompt so sánh hai phiên bản cấu hình. Hai cách đóng gói nào giúp tránh báo ngược thay đổi?

A. Giữ riêng tên file nhưng bỏ toàn bộ nội dung hai phiên bản.

B. Nêu rõ cần đối chiếu từ phiên bản cũ sang phiên bản mới.

C. Tách old_config và new_config bằng các thẻ có nhãn rõ.

D. Dùng cùng một tên config cho cả hai và bỏ mô tả thứ tự.

**Câu 5 — Chọn một.** Sau khi thêm XML, model tuân thủ cấu trúc hơn nhưng vẫn đưa kết luận sai. Nhóm định bỏ validation vì “đã dùng thẻ”. Kết luận nào đúng?

A. Thẻ giúp nhận biết phần; vẫn phải kiểm tra độ đúng.

B. Nếu các thẻ cân bằng thì kết luận trong mỗi thẻ được bảo đảm đúng.

C. Nên đổi mọi thẻ sang tiếng Anh để loại bỏ sai ngữ nghĩa.

D. Tăng lớp thẻ thay kiểm tra nội dung.

## Đáp án và giải thích

1. **C.** C giữ ranh giới và vai trò từng phần. D vẫn trộn hai loại nội dung; A thay dữ liệu cần phân tích; B không khắc phục nhầm nguồn.

2. **A, D.** D không phụ thuộc bộ tên bắt buộc; A tạo phân đoạn rõ. B gán tính chất không có cho tên thẻ; C nhầm bao gói dữ liệu với kiểm chứng nội dung.

3. **C.** C kết hợp phân ranh giới với chỉ dẫn sử dụng dữ liệu. D tên thẻ không tạo bảo đảm an toàn; B nâng dữ liệu thành chỉ dẫn; A làm ranh giới còn khó nhận biết hơn.

4. **B, C.** C xác định đối tượng, B xác định chiều so sánh. D dễ nhầm vai trò; A không cung cấp dữ liệu để phân tích thay đổi.

5. **A.** A phân biệt cấu trúc prompt với chất lượng suy luận. B gán bảo đảm không có; D tăng độ phức tạp cú pháp; C đổi ngôn ngữ nhãn không chứng minh kết luận đúng.

## Đối chiếu Bedrock: Structure with XML tags

Bài Bedrock dùng thẻ có tên rõ để tách mã, tài liệu và dữ liệu đầu vào. Thẻ giúp tổ chức ngữ cảnh, không tự tạo cơ chế bảo mật. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276744). Bản lưu: `sources/bedrock-lessons/276744.json`.

## Đối chiếu Vertex

Thẻ XML giúp phân biệt hướng dẫn, dữ liệu, mã và tài liệu. Tên thẻ nên nói rõ vai trò. Dấu phân cách làm cấu trúc dễ hiểu hơn nhưng không tự biến nội dung bên trong thành dữ liệu đáng tin cậy hoặc thành chỉ dẫn được phép thực hiện. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structure with XML tags](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289171). Bản lưu: `sources/vertex-lessons/289171.json`.
