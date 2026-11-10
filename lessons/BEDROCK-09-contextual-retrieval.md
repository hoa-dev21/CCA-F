# Giữ bối cảnh của đoạn văn bản

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276778), sources/bedrock-lessons/276778.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi tài liệu được chia nhỏ, một đoạn có thể mất thông tin ở phần trước. Ví dụ: đoạn chỉ viết “dự án này”, nhưng tên dự án nằm ngoài phần được lấy. Contextual retrieval bổ sung một lời giới thiệu ngắn dựa trên tài liệu gốc để làm rõ đoạn thuộc bối cảnh nào.

Phần bổ sung được tạo trong giai đoạn chuẩn bị dữ liệu, rồi đưa cùng đoạn văn vào chỉ mục tìm kiếm. Nó có thể làm rõ tên dự án, thời kỳ hoặc phần tài liệu mà đoạn đang nói đến.

Nếu tài liệu quá lớn, mẫu chỉ dùng phần đầu và các đoạn gần trước đó làm bối cảnh. Khi dữ liệu được cung cấp chưa có một sự kiện, mô hình không được tự đoán để viết đủ lời giới thiệu.

Cần giữ riêng văn bản gốc và phần do mô hình bổ sung, tránh trình bày mọi câu như trích nguyên văn. Sau khi thêm bối cảnh, đo lại chất lượng tìm kiếm, tính cả chi phí chuẩn bị và việc cập nhật khi nguồn thay đổi.

Cách này khác reranking: contextual retrieval bổ sung bối cảnh trước khi lập chỉ mục; reranking sắp lại các ứng viên theo câu hỏi sau khi tìm kiếm.

## Câu hỏi

**1. Chọn một.** Đoạn văn bản nói “dự án này” nhưng mất tên dự án từ phần trước. Hướng của bài?

A. Xóa đoạn văn bản.

B. Chỉ đổi tên mô hình.

C. Lặp truy vấn tìm kiếm thật nhiều.

D. Bổ sung bối cảnh ngắn dựa trên nguồn thật trước khi indexing.

**2. Chọn một.** Đoạn bối cảnh do mô hình tạo nên được xem là gì?

A. Nội dung sinh cần kiểm tra, giữ phân biệt với nguồn gốc.

B. Trích nguyên văn chắc chắn từ nguồn.

C. Thay mọi trích dẫn nguồn.

D. Bằng chứng mới dù không có trong tài liệu.

**3. Chọn một.** Khác biệt chính với reranking trong bài trước?

A. Không có khác biệt.

B. Contextual truy xuất dữ liệu bổ sung thông tin đoạn văn bản trước chỉ mục tìm kiếm; reranking sắp ứng viên theo truy vấn tìm kiếm sau tìm kiếm.

C. Cả hai tự thay dữ liệu thiếu bằng suy đoán.

D. Cả hai không cần đánh giá.

## Đáp án

1. **D.** A bỏ dữ liệu có ích; B không khôi phục bối cảnh; C không thêm thông tin đoạn văn bản.
2. **A.** B nhầm generated text với quotation; C làm mất provenance; D tạo bằng chứng không có.
3. **B.** A bỏ khác biệt thời điểm/chức năng; C và D trái yêu cầu grounding/đánh giá.

## Đối chiếu Vertex

Bổ sung đoạn bối cảnh trước khi lập chỉ mục và giữ riêng phần được sinh với nguồn gốc. Chỉ dùng phần đầu và các đoạn lân cận là cách giảm dữ liệu, không bảo đảm đủ bối cảnh. Mã minh họa thiếu f-string và cách dùng `result.text` phải khớp hàm hỗ trợ; không coi đoạn đó là mã đã được chạy kiểm chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Contextual retrieval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289187). Bản lưu: `sources/vertex-lessons/289187.json`.
