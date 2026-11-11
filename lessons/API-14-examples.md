# Dạy bằng ví dụ đầu vào và đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287746), sources/api-lessons/287746.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bạn có thể đưa ví dụ vào prompt để Claude hiểu rõ kết quả mong muốn. Dùng một ví dụ gọi là one-shot; dùng nhiều ví dụ gọi là multi-shot. Mỗi ví dụ nên phân biệt rõ đầu vào mẫu và đầu ra đạt yêu cầu.

Ví dụ đặc biệt hữu ích khi định dạng phức tạp, giọng văn khó mô tả hoặc dữ liệu có nhiều cách hiểu. Có thể dùng các thẻ XML để tách đầu vào và đầu ra, kèm lời giải thích ngắn về điểm cần học từ mẫu.

Trong bài, hệ thống phân loại sai câu châm biếm: câu dùng từ tích cực nhưng thực chất thể hiện thái độ tiêu cực. Một ví dụ châm biếm có nhãn đúng giúp làm rõ trường hợp này hơn việc thêm nhiều câu khen đơn giản.

Hãy chọn ví dụ dựa trên lỗi thường gặp. Nếu ứng dụng hay tự đoán ngày khi tài liệu không có ngày, hãy đưa một mẫu thiếu ngày cùng đầu ra xử lý đúng theo quy định. Khi có nhiều kiểu lỗi, dùng các mẫu phù hợp với từng kiểu thay vì lặp lại một mẫu dễ.

## Tự kiểm tra

**Câu 1 — Chọn một.** Bộ phân loại cảm xúc thường gán tích cực cho câu “tuyệt thật, lại mất dữ liệu”. Các ví dụ hiện tại chỉ có câu khen trực tiếp. Bổ sung nào sát lỗi nhất?

A. Đổi mọi ví dụ sang nhãn trung tính để giảm nhầm tích cực.

B. Ví dụ châm biếm có nhãn đúng và lý do về ý định.

C. Nhiều câu khen trực tiếp hơn để củng cố nhãn tích cực.

D. Chỉ một định nghĩa dài hơn cho từ “tuyệt”.

**Câu 2 — Chọn hai.** Nhóm thêm few-shot cho bộ trích xuất. Hai đặc điểm nào làm ví dụ có ích hơn cho khái quát hóa?

A. Đưa một đầu ra mâu thuẫn với hướng dẫn mà không giải thích ngoại lệ.

B. Phân biệt rõ đầu vào mẫu và đầu ra đạt yêu cầu.

C. Bao phủ những trường hợp dễ nhầm và định dạng thực tế cần xử lý.

D. Dùng nhiều bản sao gần giống của một ca dễ duy nhất.

**Câu 3 — Chọn một.** Prompt yêu cầu trả JSON, nhưng các ví dụ đều có lời giải thích bên ngoài JSON. Model lặp lại phần lời giải thích. Cách sửa trực tiếp nhất?

A. Tăng số ví dụ có lời giải thích để model hiểu sâu nội dung.

B. Làm đầu ra mẫu nhất quán với hợp đồng chỉ JSON rồi đo lại.

C. Chấp nhận output miễn chứa một đoạn JSON.

D. Thêm câu “rất quan trọng” nhưng giữ các ví dụ trái hợp đồng.

**Câu 4 — Chọn hai.** Sau khi thêm ví dụ cho ca khó, điểm trên chính ví dụ đó tăng. Hai việc nào cần làm để đánh giá lợi ích thực tế?

A. Thử trên các ca mới cùng loại nhưng không trùng ví dụ trong prompt.

B. Chỉ chấm lại các ví dụ đã đưa vào prompt để đo khả năng nhớ.

C. Bỏ các ca không giống ví dụ vì few-shot không cần khái quát.

D. Kiểm tra các nhóm cũ để phát hiện hồi quy do ví dụ mới.

**Câu 5 — Chọn một.** Hai nhãn dễ nhầm khác nhau ở việc người viết phàn nàn trực tiếp hay mỉa mai. Ngân sách prompt chỉ còn đủ hai ví dụ. Chọn bộ nào hợp lý nhất?

A. Cặp gần từ ngữ, khác ý định, có nhãn/lý do rõ.

B. Hai câu tích cực rất ngắn để tiết kiệm token tối đa.

C. Lặp lại hai ca đã phân loại đúng.

D. Hai câu có nội dung hoàn toàn khác nhau và không thuộc vùng nhầm.

## Đáp án và giải thích

1. **B.** B minh họa đúng ranh giới đang thiếu. C tăng mẫu không liên quan lỗi; D không dạy cách hiểu ngữ cảnh châm biếm; A làm lệch nhãn thay vì phân biệt.

2. **B, C.** B làm rõ phép ánh xạ; C thể hiện ranh giới quyết định. D tăng số lượng nhưng ít thông tin mới; A tạo tín hiệu không nhất quán.

3. **B.** B sửa tín hiệu mẫu đang xung đột. D giữ nguồn mâu thuẫn; C đổi yêu cầu sản phẩm để hợp lỗi; A củng cố hành vi sai.

4. **A, D.** A kiểm tra khả năng áp dụng; D kiểm tra đánh đổi. B dễ đo ghi nhớ; C thu hẹp mục tiêu không có căn cứ.

5. **A.** A làm nổi bật ranh giới quyết định. B tiết kiệm nhưng không nhắm lỗi; D khó cho thấy yếu tố phân biệt; C lặp tín hiệu đã có.

## Đối chiếu Bedrock: Providing examples

Bài Bedrock cũng dùng ví dụ châm biếm và cách chọn một vài mẫu từ kết quả đánh giá. Ví dụ tốt trong prompt vẫn cần được kiểm tra trên trường hợp mới. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276747). Bản lưu: `sources/bedrock-lessons/276747.json`.

## Đối chiếu Vertex

Cặp đầu vào và đầu ra mẫu giúp làm rõ định dạng và trường hợp khó như châm biếm. Chọn mẫu đã kiểm tra để phát triển prompt và giữ tập kiểm thử riêng. Điểm 10 do mô hình chấm chưa chứng minh mẫu hoàn hảo. Không đưa chính câu kiểm thử vào prompt rồi coi điểm đạt được là bằng chứng làm tốt với dữ liệu mới. Dùng chung câu hỏi.

Nguồn đối chiếu: [Providing examples](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289177). Bản lưu: `sources/vertex-lessons/289177.json`.
