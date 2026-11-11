# Tạo tập đầu vào kiểm thử

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287739), bản nội dung sources/api-lessons/287739.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Trước khi tạo dữ liệu kiểm thử, cần biết ứng dụng phải tạo ra kết quả gì. Trong bài, ứng dụng tạo mã Python, dữ liệu JSON hoặc biểu thức tìm mẫu văn bản (regex) cho các nhiệm vụ liên quan đến AWS. Đầu ra chỉ được chứa nội dung cần dùng, không kèm lời giải thích.

Bộ dữ liệu kiểm thử là danh sách các bản ghi JSON. Trong mỗi bản ghi, trường `task` mô tả nhiệm vụ sẽ đưa vào prompt. Bạn có thể tự viết các bản ghi hoặc nhờ Claude tạo theo yêu cầu rõ về loại đầu ra, độ khó, số trường hợp và cấu trúc cần có.

Ví dụ: Nếu ứng dụng hỗ trợ cả JSON và regex nhưng bộ kiểm thử chỉ có yêu cầu tạo JSON, bạn chưa biết ứng dụng làm tốt với regex hay không. Cần chọn các trường hợp bao quát những nhóm công việc quan trọng.

Lưu bộ dữ liệu thành tệp giúp dùng lại cùng đầu vào khi so sánh các phiên bản prompt. Ba bản ghi trong bài chỉ để minh họa cách làm, chưa đủ để chứng minh chất lượng của một ứng dụng đưa vào sử dụng thực tế.

Mã ví dụ dùng mô hình nhanh để hỗ trợ tạo dữ liệu, cùng kỹ thuật viết sẵn phần mở đầu câu trả lời (prefilling) và chuỗi dừng (stop sequence). Khả năng hỗ trợ các kỹ thuật này tùy mô hình; cần kiểm tra trước khi chạy. Điều chính cần nắm ở đây là cách thiết kế và lưu bộ đầu vào phù hợp.

## Tự kiểm tra

**Câu 1 — Chọn một.** Ứng dụng sinh Python, JSON và regex. Tập thử có 90% Python, các định dạng còn lại mỗi loại chỉ vài ca dễ. Điểm chung cao cho biết điều gì?

A. Có thể phát hành cả ba vì phần lớn yêu cầu đã đạt.

B. Chỉ tăng trọng số của hai nhóm ít mẫu.

C. Bổ sung ca đại diện và đo riêng hai nhóm ít mẫu.

D. Nên gộp mọi đầu ra thành văn bản để dùng điểm Python cho cả ba.

**Câu 2 — Chọn hai.** Nhờ mô hình tạo tập thử cho ứng dụng sinh mã AWS theo ba định dạng. Hai yêu cầu nào giúp dữ liệu có thể dùng trực tiếp và đúng mục tiêu?

A. Cho phép trộn lời giải thích vào trường task thay cho yêu cầu cụ thể.

B. Nêu các loại đầu ra và giới hạn độ phức tạp cần bao phủ.

C. Yêu cầu mọi task dùng cùng một ví dụ để dễ đạt điểm ổn định.

D. Quy định cấu trúc bản ghi, trong đó task mô tả nhiệm vụ cần kiểm tra.

**Câu 3 — Chọn một.** Mỗi lần đánh giá, nhóm lại nhờ AI sinh một tập mới rồi so điểm hai prompt. Cách sửa nào giữ được phép so sánh đáng tin cậy?

A. Yêu cầu tập mới có độ dài trung bình bằng tập cũ.

B. Giữ số lượng ca bằng nhau nhưng để chủ đề thay đổi tự do.

C. Chạy hai prompt trên cùng tập đã duyệt và lưu lại.

D. Chọn ngẫu nhiên một nửa điểm của mỗi đợt để so sánh.

**Câu 4 — Chọn hai.** Đầu ra production phải chỉ gồm mã hoặc dữ liệu, không có lời giải thích. Hai loại ca nào cần có để kiểm tra hợp đồng này?

A. Task yêu cầu regex hoặc Python với tiêu chí đầu ra đúng loại tương ứng.

B. Task luôn cho phép Markdown để bộ parse dễ bỏ qua phần thừa.

C. Task yêu cầu JSON để kiểm tra có thêm văn bản ngoài JSON hay không.

D. Task chỉ yêu cầu giải thích bằng lời vì dễ chấm tính hữu ích.

**Câu 5 — Chọn một.** Tập do AI tạo chứa task mơ hồ “làm việc với AWS” và task quá phức tạp so với ứng dụng mục tiêu. Xử lý nào tốt nhất trước khi đo prompt?

A. Duyệt task theo phạm vi/độ khó đã định rồi lưu tập.

B. Giữ nguyên vì dữ liệu AI tạo bảo đảm không thiên vị prompt.

C. Chỉ sửa đáp án mẫu để phù hợp với bất kỳ đầu ra nào model sinh.

D. Loại ca khó để đo năng lực thông thường.

## Đáp án và giải thích

1. **C.** C nhận ra thiếu bao phủ. A suy rộng từ nhóm đa số; D làm mất tiêu chí định dạng; B tăng trọng số không tạo thêm bằng chứng về loại ca chưa có.

2. **B, D.** D làm dữ liệu có hợp đồng; B định hướng độ bao phủ. C làm nghèo tình huống; A lẫn đáp án hoặc lời bình với đầu vào nhiệm vụ.

3. **C.** C cố định đầu vào. B số lượng bằng nhau không bảo đảm độ khó bằng nhau; A độ dài không đại diện độ khó; D trộn điểm không kiểm soát khác biệt dữ liệu.

4. **A, C.** C và A kiểm tra các định dạng thực tế. B nới hợp đồng so với production; D đổi tác vụ nên không kiểm chứng yêu cầu đầu ra chỉ có nội dung dùng được.

5. **A.** A kiểm soát chất lượng dữ liệu kiểm thử. B nhầm nguồn sinh với tính đại diện; D làm mất ca khó nhưng hợp lệ; C làm thước đo chạy theo kết quả thay vì yêu cầu.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276733). Bản lưu: `sources/bedrock-lessons/276733.json`.

## Đối chiếu Vertex

Ví dụ tạo dữ liệu kiểm thử cho nhiệm vụ AWS có đầu ra Python, JSON hoặc regex. Có thể soạn bằng tay hoặc nhờ mô hình rồi lưu lại. Ba ví dụ chưa đại diện cho ứng dụng thực tế; dữ liệu sinh cần được kiểm tra, bổ sung trường hợp biên và có tập kiểm thử riêng. Prefill và chuỗi dừng không thay việc kiểm tra JSON hoặc schema. Dùng chung câu hỏi.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289163). Bản lưu: `sources/vertex-lessons/289163.json`.
