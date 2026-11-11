# The full RAG flow

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287764), sources/api-lessons/287764.json. Bài bổ trợ từ khóa API; chi tiết embeddings/vector DB không thuộc phạm vi Exam Guide đã tải. Câu hỏi tự biên soạn để kiểm tra bài học, không phải đề thi thật.

## Nội dung bài học


Một luồng RAG đầy đủ bắt đầu bằng việc chia tài liệu thành đoạn, tạo vectơ biểu diễn cho từng đoạn và lưu cùng nội dung hoặc thông tin để lấy lại nội dung gốc.

Khi có câu hỏi, hệ thống tạo vectơ tương thích cho câu hỏi, so với các vectơ đã lưu để tìm đoạn gần nghĩa. Sau đó, ứng dụng đưa văn bản tìm được cùng câu hỏi vào prompt để mô hình trả lời. Các dãy số giúp tìm kiếm; phần văn bản gốc mới cung cấp thông tin để trả lời.

Bài dùng độ tương đồng cosine (cosine similarity) và khoảng cách cosine (cosine distance) để minh họa. Với độ tương đồng, điểm cao hơn biểu thị gần hơn. Nếu khoảng cách được tính bằng 1 trừ độ tương đồng, khoảng cách thấp hơn biểu thị gần hơn.

Đây là điểm phục vụ tìm kiếm, không phải mức chắc chắn rằng câu trả lời đúng. Ví dụ: tài liệu nói về cách sửa lỗi phần mềm nhưng không nêu số lỗi đã sửa. Dù tài liệu gần nghĩa với câu hỏi, hệ thống vẫn cần nói rõ thiếu bằng chứng hoặc tìm thêm nguồn, không tự điền một con số.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Vector search trả đúng ID chunk nhưng prompt chỉ chứa dãy số vectơ. Câu trả lời thiếu thông tin. Bước nào bị bỏ sót?

A. Tăng độ chính xác số thập phân của vectơ trong prompt.

B. Tạo thêm embedding cho câu trả lời dự kiến.

C. Lookup văn bản từ ID và gửi kèm câu hỏi vào prompt.

D. Yêu cầu mô hình tự giải mã vectơ thành tài liệu.

**Câu 2 — Chọn một.** Sau cập nhật tài liệu, câu trả lời vẫn trích chính sách cũ dù prompt rõ. Cách điều tra đầu tiên hợp lý nhất?

A. Xóa mọi trích dẫn để tránh người dùng nhìn thấy bản cũ.

B. Chỉ đổi vai trò hệ thống thành chuyên gia chính sách.

C. Truy vết bản chunk từ kho qua retrieval tới prompt.

D. Tăng ngân sách suy luận để mô hình phát hiện thay đổi chưa nhận.

**Câu 3 — Chọn hai.** Thiết kế luồng RAG gồm bước chuẩn bị và bước hỏi. Hai cặp dữ liệu nào phải được nối đúng?

A. Embedding truy vấn với các vectơ tài liệu trong không gian tương thích.

B. Câu trả lời cuối với vectơ gần nhất, không cần câu hỏi gốc.

C. Thứ hạng tìm kiếm với số trang của tài liệu, coi hai số là một.

D. Embedding của chunk với văn bản hoặc tham chiếu nguồn tương ứng.

**Câu 4 — Chọn một.** Truy xuất lấy đúng tài liệu và prompt có đủ đoạn, nhưng mô hình bỏ qua ngoại lệ đã có. Tầng sửa ưu tiên là gì?

A. Tạo lại toàn bộ embedding trước khi xem câu trả lời.

B. Tăng top-k để bổ sung càng nhiều đoạn càng tốt.

C. Cách mô hình sử dụng ngữ cảnh và tiêu chí chấm câu trả lời.

D. Đổi ID chunk để buộc hệ thống trả tài liệu khác.

**Câu 5 — Chọn hai.** Nhóm muốn kiểm thử đầu cuối RAG thay vì chỉ kiểm tra API tìm kiếm. Hai điều kiện nào cần xác nhận?

A. Chỉ cần mô hình sinh được văn bản sau mỗi truy vấn.

B. Các kết quả tìm kiếm được ánh xạ thành đúng văn bản nguồn trong prompt.

C. Chỉ cần kho có số vectơ bằng số chunk.

D. Câu trả lời đáp ứng câu hỏi và được những đoạn đó hỗ trợ.

## Đáp án và giải thích

1. **C.** A sai: Nhiều chữ số không khôi phục bằng chứng văn bản. B sai: Không cung cấp văn bản nguồn đang thiếu. C đúng: Vectơ phục vụ tìm kiếm; nội dung phục vụ trả lời. D sai: Không phải cơ chế truy xuất nội dung trong luồng RAG.

2. **C.** A sai: Che dấu không sửa đầu vào sai. B sai: Vai trò không cập nhật kho hay ánh xạ nguồn. C đúng: Cần xác định chặng nào đang dùng dữ liệu cũ. D sai: Không suy ra được phiên bản không có trong ngữ cảnh.

3. **A, D.** A đúng: So gần nghĩa chỉ hợp lý khi biểu diễn tương thích. B sai: Mô hình cần nhu cầu cụ thể cùng bằng chứng. C sai: Thứ hạng thay theo truy vấn, không là vị trí nguồn. D đúng: Cần lấy đúng bằng chứng sau tìm kiếm.

4. **C.** A sai: Chưa có bằng chứng lỗi nằm ở biểu diễn. B sai: Thông tin cần thiết đã có; thêm nhiễu có thể không giúp. C đúng: Đã xác nhận tầng tìm kiếm cung cấp đủ bằng chứng. D sai: Phá ánh xạ không giải quyết lỗi dùng bằng chứng.

5. **B, D.** A sai: Có đầu ra không chứng minh đáp ứng nhiệm vụ. B đúng: Kiểm chứng đường dữ liệu tới mô hình. C sai: Số lượng đúng không chứng minh ánh xạ hay nội dung đúng. D đúng: Kiểm chứng đầu ra cuối.

## Đối chiếu RAG trên Bedrock

Bài Bedrock có cùng luồng RAG và ví dụ độ gần cosine. Các trục có nhãn trong hình chỉ giúp minh họa, không chứng minh mỗi chiều của vectơ thật đều có ý nghĩa đơn giản để gọi tên. Dùng chung câu hỏi.

Nguồn đối chiếu: [The full RAG flow](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276774). Bản lưu: `sources/bedrock-lessons/276774.json`.

## Đối chiếu Vertex

Giai đoạn chuẩn bị gồm chia đoạn, tạo vectơ và lưu. Khi có câu hỏi, tạo vectơ cho câu hỏi, tìm kiếm rồi ghép tài liệu vào prompt. Hình hai chiều có trục y học và phần mềm chỉ là minh họa. Không mặc định mọi API tự chuẩn hóa vectơ. Nếu nguồn chỉ nói về nỗ lực sửa lỗi mà không có số lỗi, không suy ra một con số để trả lời. Dùng chung câu hỏi.

Nguồn đối chiếu: [The full RAG flow](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289190). Bản lưu: `sources/vertex-lessons/289190.json`.
