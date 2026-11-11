# Introducing Retrieval Augmented Generation

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287763), sources/api-lessons/287763.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


RAG là cách tìm những phần tài liệu liên quan rồi đưa vào yêu cầu cho AI để hỗ trợ trả lời. Thay vì gửi toàn bộ kho tài liệu trong mỗi lần hỏi, ứng dụng chọn các đoạn có khả năng chứa thông tin cần thiết.

Có hai giai đoạn: chuẩn bị tài liệu và chia thành các phần có thể tìm kiếm; sau đó, khi có câu hỏi, tìm các phần liên quan và đưa nội dung đó cho mô hình.

Ví dụ: Kho hướng dẫn công ty quá lớn để gửi tất cả. Khi người dùng hỏi về hoàn tiền, hệ thống tìm phần chính sách liên quan rồi gửi cùng câu hỏi. Cần lấy đủ điều kiện và ngoại lệ, vì một đoạn chỉ nói chung về hoàn tiền có thể chưa đủ để trả lời.

RAG giúp giảm nội dung không liên quan và làm việc với kho lớn, nhưng cần thêm công đoạn chuẩn bị và cơ chế tìm kiếm. Hãy đánh giá riêng việc tìm đúng, đủ tài liệu và việc AI trả lời từ tài liệu đó. Nhờ vậy, bạn biết cần sửa khâu tìm kiếm hay khâu tạo câu trả lời.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** RAG tìm đúng chính sách hoàn tiền nhưng chỉ lấy đoạn điều kiện chung; ngoại lệ nằm ở phần tiếp theo. Câu trả lời sai dù mô hình bám sát đoạn được cấp. Ưu tiên sửa gì?

A. Tăng yêu cầu mô hình chỉ trả lời theo ngữ cảnh hiện tại.

B. Thêm vài mẫu câu trả lời đúng mà giữ nguyên truy xuất.

C. Kiểm tra truy xuất có đủ quy tắc và ngoại lệ không.

D. Hạ temperature để câu trả lời ổn định hơn.

**Câu 2 — Chọn một.** Kho nhỏ vừa ngữ cảnh và cập nhật ít; nhóm đề xuất RAG vì “luôn tốt hơn gửi tài liệu”. Quyết định kiến trúc nên dựa vào đâu?

A. Chọn gửi toàn bộ vì RAG chỉ có ích với dữ liệu công khai.

B. Chọn RAG nếu trả lời ngắn hơn dù thiếu một số ngoại lệ.

C. Chỉ so số token của prompt cuối vì đó là toàn bộ chi phí RAG.

D. So chất lượng và chi phí toàn luồng trên bộ hỏi đại diện.

**Câu 3 — Chọn hai.** Câu trả lời RAG sai, nhóm chưa biết lỗi tìm kiếm hay sinh đáp án. Hai phép kiểm tra nào giúp phân biệt?

A. Cho mô hình bộ bằng chứng đầy đủ đã kiểm tra rồi chấm câu trả lời.

B. Gộp mọi lỗi thành một điểm trung bình duy nhất.

C. Chấm chỉ giọng văn và độ mạch lạc của câu trả lời cuối.

D. So các đoạn lấy được với bằng chứng cần cho câu hỏi.

**Câu 4 — Chọn một.** Ứng dụng đã chia kho tài liệu và lập chỉ mục, nhưng lúc hỏi chỉ gửi câu hỏi cho mô hình. Nhóm kỳ vọng mô hình tự biết dữ liệu đã lập chỉ mục. Thành phần nào thiếu?

A. Một prompt xác nhận rằng hệ thống có kho dữ liệu nội bộ.

B. Đặt tên mô hình theo chủ đề tài liệu để gắn kiến thức.

C. Chạy lại bước chia đoạn trước mỗi câu hỏi.

D. Truy xuất khi hỏi, đưa đoạn tìm được vào request.

**Câu 5 — Chọn hai.** Người dùng hỏi chính sách cho một trường hợp cụ thể. Hai tiêu chí nào có ý nghĩa hơn chỉ “top result cùng chủ đề”?

A. Câu trả lời cuối được kiểm tra đối chiếu với bằng chứng đã lấy.

B. Điểm tương đồng cao được dùng thay nhãn đúng/sai của câu trả lời.

C. Mỗi câu trả lời có nhiều đoạn trích bất kể nội dung.

D. Đoạn chứa điều kiện áp dụng và ngoại lệ liên quan đến trường hợp.

## Đáp án và giải thích

1. **C.** A sai: Nó đã bám sát nguồn nhưng nguồn chưa đầy đủ. B sai: Có thể che ca cụ thể nhưng không sửa khả năng lấy đủ tài liệu. C đúng: Lỗi bắt đầu từ ngữ cảnh thiếu điều kiện. D sai: Không bổ sung ngoại lệ bị bỏ sót.

2. **D.** A sai: Quyền truy cập không quyết định duy nhất phương án truy xuất. B sai: Ngắn hơn không thay tiêu chí đầy đủ. C sai: Bỏ qua lập chỉ mục, tìm kiếm và khả năng mất ngữ cảnh. D đúng: RAG có lợi ích và chi phí phụ thuộc bài toán.

3. **A, D.** A đúng: Cô lập khả năng dùng bằng chứng ở khâu tạo đáp án. B sai: Mất khả năng xác định tầng cần sửa. C sai: Không đo đủ bằng chứng hoặc tính đúng. D đúng: Đo đúng và đủ ở khâu truy xuất.

4. **D.** A sai: Nói có kho không cấp nội dung kho. B sai: Tên cấu hình không huấn luyện hay truyền tài liệu. C sai: Lặp chuẩn bị không thay bước tìm và truyền dữ liệu. D đúng: Chuẩn bị kho không tự đưa thông tin vào ngữ cảnh.

5. **A, D.** A đúng: Tìm đúng vẫn có thể sinh sai. B sai: Điểm tìm kiếm không đo suy luận cuối. C sai: Số đoạn không bảo đảm đủ thông tin cần thiết. D đúng: Liên quan chung chưa đủ trả lời quyết định cụ thể.

## Đối chiếu RAG trên Bedrock

Bài Bedrock cùng so sánh việc tìm phần liên quan với gửi toàn bộ tài liệu cho mô hình. Các kiến thức tương đương dùng chung phần tóm tắt và câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276780). Bản lưu: `sources/bedrock-lessons/276780.json`.

## Đối chiếu Vertex

Ví dụ thay việc gửi tài liệu 800 trang bằng các đoạn tìm được giúp giảm đầu vào, nhưng có thể bỏ sót bối cảnh quan trọng. Không có cách luôn tốt nhất; cần thử trên câu hỏi và tài liệu đại diện. Dùng chung câu hỏi.

Nguồn đối chiếu: [Introducing Retrieval Augmented Generation](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289191). Bản lưu: `sources/vertex-lessons/289191.json`.
