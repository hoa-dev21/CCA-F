# Text chunking strategies

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287776), sources/api-lessons/287776.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Chunking là chia tài liệu thành các đoạn nhỏ để lưu và tìm kiếm. Cách chia ảnh hưởng trực tiếp đến việc hệ thống có lấy được đủ ngữ cảnh hay không.

Có vài hướng thường gặp trong bài:

- Chia theo kích thước: dễ áp dụng nhưng có thể cắt giữa câu hoặc tách tiêu đề khỏi nội dung.
- Cho các đoạn chồng lên nhau một phần (overlap): giữ thông tin lân cận ở ranh giới, đổi lại có thêm dữ liệu trùng và lượng lưu trữ.
- Chia theo cấu trúc như phần hoặc tiêu đề: phù hợp khi tài liệu có định dạng nhất quán.
- Chia theo câu hoặc ý nghĩa: có thể giữ nội dung liền mạch hơn; cách dựa trên ý nghĩa cần thêm xử lý.

Ví dụ: Quy tắc nằm ở cuối đoạn, còn ngoại lệ nằm ở đầu đoạn tiếp theo. Nếu chỉ tìm được đoạn đầu, AI có thể trả lời thiếu điều kiện. Cần xem lại ranh giới chia hoặc phần chồng lặp rồi thử với câu hỏi thực tế.

Không có kích thước hay phương pháp tốt nhất cho mọi kho. Hãy kiểm tra đoạn được lấy có giữ đủ ý nghĩa và truy được về nguồn không; cách phức tạp nhất chưa chắc đáng với công sức thêm vào.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một chính sách có quy tắc cuối mục và ngoại lệ đầu mục kế. Chunk theo độ dài làm hai phần tách nhau; câu hỏi về ngoại lệ thường sai. Thử nghiệm nào nhắm đúng nguyên nhân?

A. Tăng số ví dụ định dạng JSON cho mô hình trả lời.

B. Giảm kích thước mọi chunk xuống nhỏ nhất để tăng độ chính xác.

C. Thử ranh giới/overlap mới trên ca cần quy tắc và ngoại lệ.

D. Giữ chunk hiện tại và loại ngoại lệ khỏi tiêu chí đánh giá.

**Câu 2 — Chọn một.** Kho Markdown có tiêu đề nhất quán nhưng mục dài ngắn rất khác nhau. Phương án khởi đầu hợp lý nhất?

A. Coi mỗi tiêu đề là một chunk độc lập không kèm nội dung.

B. Dùng một độ dài cố định làm chuẩn và bỏ thông tin tiêu đề.

C. Gộp cả kho thành một chunk vì cấu trúc đã rõ.

D. Chia theo mục, tách mục dài và đo độ đủ ngữ cảnh.

**Câu 3 — Chọn hai.** Tăng overlap giúp một số câu đúng hơn nhưng chi phí tăng. Hai chỉ số nào cần xem cùng nhau?

A. Chỉ tốc độ tạo embedding lần đầu, bỏ qua lúc truy vấn.

B. Lượng nội dung trùng được lưu và đưa vào ngữ cảnh.

C. Tỷ lệ lấy đủ bằng chứng ở câu hỏi có thông tin qua ranh giới.

D. Số chunk tăng được coi trực tiếp là chất lượng cao hơn.

**Câu 4 — Chọn một.** Nhóm đổi sang semantic chunking phức tạp; chất lượng trên bộ hỏi không đổi còn xử lý chậm hơn. Quyết định nào phù hợp?

A. Giữ cách mới vì tên “semantic” bảo đảm hiểu tài liệu sâu hơn.

B. Giữ phương án đơn giản nếu nó đáp ứng tiêu chí với chi phí tốt hơn.

C. Tăng độ phức tạp tiếp trước khi phân tích các lỗi còn lại.

D. Chỉ đánh giá trên các ca từng cải thiện để chứng minh cách mới.

**Câu 5 — Chọn hai.** Một chunk trả lời tốt nhưng không truy lại được đoạn nguồn sau khi tài liệu cập nhật. Hai yêu cầu nào nên bổ sung?

A. Giữ tham chiếu nguồn và vị trí hoặc phiên bản phù hợp khi chia đoạn.

B. Dùng thứ tự chunk trong kết quả tìm kiếm làm vị trí nguồn cố định.

C. Kiểm tra tính toàn vẹn ngữ nghĩa lẫn khả năng đối chiếu sau chia.

D. Chỉ lưu embedding vì nó đại diện đầy đủ văn bản.

## Đáp án và giải thích

1. **C.** A sai: Định dạng không sửa bằng chứng thiếu. B sai: Có thể làm ngữ cảnh phân mảnh hơn. C đúng: Cần bảo toàn ngữ cảnh qua ranh giới. D sai: Thay tiêu chí che lỗi thay vì sửa nó.

2. **D.** A sai: Tiêu đề không cung cấp toàn bộ bằng chứng. B sai: Có thể tách bối cảnh đang có sẵn. C sai: Mất tính chọn lọc và có thể vượt ngữ cảnh. D đúng: Tận dụng cấu trúc nhưng vẫn đo hạn chế.

3. **B, C.** A sai: Không phản ánh toàn bộ tác động vận hành. B đúng: Đo chi phí và nhiễu do chồng lặp. C đúng: Đo lợi ích của overlap. D sai: Số lượng không đo đủ ý nghĩa.

4. **B.** A sai: Tên phương pháp không thay bằng chứng đánh giá. B đúng: Độ phức tạp cần được biện minh bằng lợi ích đo được. C sai: Có thể tối ưu sai tầng lỗi. D sai: Chọn mẫu thiên lệch không phản ánh hiệu quả toàn bộ.

5. **A, C.** A đúng: Cần truy được về bằng chứng gốc. B sai: Thứ hạng truy vấn không phải định danh vị trí tài liệu. C đúng: Chunk tốt phải hữu ích và kiểm chứng được. D sai: Vectơ không thay đường lấy văn bản nguồn.

## Đối chiếu RAG trên Bedrock

Bài Bedrock so sánh chia theo kích thước, cấu trúc, ý nghĩa và việc cho các đoạn chồng nhau một phần. Cần đánh giá trên tài liệu thật, không mặc định một cách luôn tốt nhất. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276782). Bản lưu: `sources/bedrock-lessons/276782.json`.

## Đối chiếu Vertex

Mẫu chia đoạn cần bảo đảm `0 <= overlap < size` để vòng lặp tiếp tục tiến lên. Nhận định chia theo ký tự luôn đáng tin nhất cho mã không phải quy tắc chung. Hãy giữ tiêu đề và thông tin nguồn, rồi đo chất lượng tìm kiếm khi so sánh các cách chia. Dùng chung câu hỏi.

Nguồn đối chiếu: [Text chunking strategies](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289208). Bản lưu: `sources/vertex-lessons/289208.json`.
