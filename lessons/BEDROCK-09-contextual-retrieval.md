# Contextual retrieval — Giữ bối cảnh của chunk

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276778), sources/bedrock-lessons/276778.json. Câu hỏi tự biên soạn.

## Tóm tắt

Chunk có thể mất quan hệ với tài liệu lớn: đại từ, thời kỳ, dự án hoặc tên phần không còn rõ. Bài thêm một đoạn bối cảnh ngắn trước chunk, tạo trong giai đoạn chuẩn bị từ tài liệu gốc và chunk cần định vị, rồi đưa bản bổ sung vào index.

Nếu tài liệu quá lớn, mẫu dùng phần đầu và các chunk gần trước đó làm bối cảnh hạn chế. Cần biết giới hạn này: phần được cung cấp không có một sự kiện thì model không được tự đoán để hoàn thiện lời giới thiệu.

Giữ riêng nguồn gốc và phần bối cảnh được sinh để tránh coi mọi câu bổ sung là trích nguyên văn. Đánh giá retrieval sau thay đổi, cùng chi phí chuẩn bị và nhu cầu cập nhật khi nguồn đổi. Đây là bổ sung ngữ cảnh trước indexing, khác reranking ứng viên theo query ở lúc truy vấn.

## Câu hỏi

**1. Chọn một.** Chunk nói “dự án này” nhưng mất tên dự án từ phần trước. Hướng của bài?

A. Xóa chunk.

B. Chỉ đổi tên model.

C. Lặp query thật nhiều.

D. Bổ sung bối cảnh ngắn dựa trên nguồn thật trước khi indexing.

**2. Chọn một.** Đoạn bối cảnh do model tạo nên được xem là gì?

A. Nội dung sinh cần kiểm tra, giữ phân biệt với nguồn gốc.

B. Trích nguyên văn chắc chắn từ nguồn.

C. Thay mọi citation.

D. Bằng chứng mới dù không có trong tài liệu.

**3. Chọn một.** Khác biệt chính với reranking trong bài trước?

A. Không có khác biệt.

B. Contextual retrieval bổ sung thông tin chunk trước index; reranking sắp ứng viên theo query sau tìm kiếm.

C. Cả hai tự thay dữ liệu thiếu bằng suy đoán.

D. Cả hai không cần đánh giá.

## Đáp án

1. **D.** A bỏ dữ liệu có ích; B không khôi phục bối cảnh; C không thêm thông tin chunk.
2. **A.** B nhầm generated text với quotation; C làm mất provenance; D tạo bằng chứng không có.
3. **B.** A bỏ khác biệt thời điểm/chức năng; C và D trái yêu cầu grounding/đánh giá.

## Đối chiếu Vertex

Đã đọc [Contextual retrieval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289187), sources/vertex-lessons/289187.json. Thêm snippet bối cảnh trước index, giữ riêng phần sinh và nguồn thật. Chọn chunk đầu và lân cận là bối cảnh giảm, không bảo đảm đủ. Code prompt minh họa thiếu f-string và result.text cần khớp wrapper; không sao chép như mã đã chạy. Dùng chung câu hỏi khái niệm.
