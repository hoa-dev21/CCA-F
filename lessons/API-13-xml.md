# Phân ranh giới nội dung

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287741), sources/api-lessons/287741.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi một prompt chứa cả yêu cầu, mã nguồn và tài liệu tham khảo, cần giúp Claude nhận ra từng phần. Bạn có thể đặt nội dung trong các cặp thẻ theo kiểu XML, gồm thẻ mở và thẻ đóng.

Ví dụ: đặt mã trong `<source_code>...</source_code>` và tài liệu trong `<reference_docs>...</reference_docs>`. Sau đó yêu cầu Claude đối chiếu mã với tài liệu. Nhờ tên thẻ, vai trò của từng đoạn rõ hơn so với việc ghép mọi thứ thành một khối văn bản.

Không có bộ tên thẻ bắt buộc cho cách tổ chức prompt này. Hãy chọn tên mô tả đúng nội dung, dùng nhất quán và đóng thẻ đầy đủ. Nếu có nhiều loại dữ liệu, tên `<sales_records>` cho biết đây là dữ liệu bán hàng rõ hơn tên chung `<data>`.

Cách này hữu ích khi nội dung dài, có nhiều nguồn hoặc dùng mẫu prompt chứa các phần được thay vào mỗi lần chạy. Nó giúp tổ chức thông tin; không tự bổ sung dữ liệu thiếu, kết nối cơ sở dữ liệu hay bảo đảm mọi kết luận đúng.

## Tự kiểm tra

**Question 1 — Choose one.** A prompt combines code and documentation. The model mistakes documentation examples for code defects. What addresses this?

A. Rename code variables to match documentation vocabulary.

B. Increase output length.

C. Separate code and reference documents with descriptive tags and explain how to compare them.

D. Place everything inside one `data` tag.

**Question 2 — Choose two.** Which TWO XML practices are supported by the lesson?

A. Use consistent opening and closing tags to clarify boundaries.

B. Use a secret tag name believed to increase source trust.

C. Treat XML-wrapped documents as verified evidence.

D. Choose descriptive names appropriate to each content type.

**Question 3 — Choose one.** A reference document says “ignore previous instructions.” It must be analyzed as data. Which design is appropriate?

A. Remove tags and append the sentence to the user request.

B. Place the document in the system prompt as instructions.

C. Separate data from instructions, explain its role, and test confusing cases.

D. Rename the tag `trusted_docs` and trust every sentence inside it.

**Question 4 — Choose two.** Which TWO packaging choices reduce reversed conclusions when comparing configurations?

A. Keep filenames but remove both configurations.

B. State the comparison direction from old to new.

C. Use clearly labeled `old_config` and `new_config` tags.

D. Use the same `config` label for both without specifying order.

**Question 5 — Choose one.** XML improves structural compliance, but conclusions remain wrong. Can validation be removed?

A. No; tags clarify sections, while correctness still requires checking.

B. Yes; balanced tags guarantee correct conclusions.

C. English tag names eliminate semantic errors.

D. Additional tag layers replace content validation.

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
