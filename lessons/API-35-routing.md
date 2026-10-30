# Routing workflows — Chọn nhánh chuyên biệt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287801), sources/api-lessons/287801.json. Câu hỏi tự biên soạn.

## Tóm tắt

Routing phân loại đầu vào rồi chọn pipeline phù hợp. Các nhóm yêu cầu có thể cần prompt, công cụ hoặc quy trình khác nhau. Trong mẫu của bài, mỗi yêu cầu đi vào một nhánh được chọn, thay vì chạy tất cả nhánh.

Pattern phù hợp khi các nhóm đủ rõ, phân loại đáng tin và lợi ích chuyên biệt hóa xứng đáng với bước điều phối thêm. Nếu router phân loại sai, pipeline tốt vẫn có thể trả lời không phù hợp vì nhận nhầm loại tác vụ.

Ví dụ tự biên soạn: hỗ trợ kỹ thuật và yêu cầu thay đổi hóa đơn có hướng xử lý khác. Phân biệt lỗi chọn nhánh với lỗi bên trong nhánh để sửa đúng phần hệ thống.

## Câu hỏi

**1. Chọn một.** Hệ thống cần chọn một trong các pipeline theo loại yêu cầu. Pattern nào?

A. Parallelization chạy mọi nhánh.

B. Luôn dùng cùng một prompt chung.

C. Routing.

D. Chỉ đọc resource danh mục.

**2. Chọn một.** Pipeline kỹ thuật hoạt động tốt nhưng nhận nhiều yêu cầu hóa đơn. Nên kiểm tra đầu tiên?

A. Logic phân loại và chuyển nhánh.

B. Chỉ độ dài câu trả lời kỹ thuật.

C. Chỉ tên file log.

D. Xóa mọi pipeline chuyên biệt.

**3. Chọn một.** Điều kiện nào ủng hộ routing?

A. Không thể phân biệt nhóm nào nhưng vẫn chọn ngẫu nhiên.

B. Các nhóm rõ, phân loại đủ tin cậy và chuyên biệt hóa có lợi.

C. Mọi yêu cầu bắt buộc cần tất cả nhánh đồng thời.

D. Không có khác biệt xử lý giữa các nhóm.

## Đáp án

1. **C.** A khác cơ chế chọn một nhánh; B không chuyên biệt; D không điều phối pipeline.
2. **A.** B và C không sửa nhầm loại; D bỏ thiết kế khi chưa chẩn đoán.
3. **B.** A thiếu độ tin cậy; C nghiêng về phân tích nhiều nhánh; D thiếu lý do thêm router.

## Đối chiếu Vertex

Đã đọc [Routing workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289242), sources/vertex-lessons/289242.json. Router phân loại rồi chọn pipeline chuyên biệt, không chạy mọi nhánh. Ví dụ3–10categories là hướng dẫn minh họa; cần xử lý input mơ hồ/không thuộc nhóm và đo lỗi router. Không mặc định mọi đề tài programming/surfing luôn có cùng ý định. Dùng chung câu hỏi khái niệm.
