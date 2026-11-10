# Chọn nhánh chuyên biệt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287801), sources/api-lessons/287801.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Routing là phân loại yêu cầu rồi chuyển tới cách xử lý phù hợp. Mỗi nhóm có thể dùng prompt, công cụ hoặc quy trình khác nhau. Trong mẫu của bài, một yêu cầu đi vào nhánh được chọn, thay vì chạy tất cả các nhánh.

Ví dụ: Câu hỏi về lỗi phần mềm cần quy trình hỗ trợ kỹ thuật; yêu cầu sửa hóa đơn cần quy trình thanh toán. Bước phân loại quyết định chuyển câu hỏi tới đâu.

Cách này có ích khi các nhóm yêu cầu đủ rõ để phân loại đáng tin cậy, và mỗi nhóm được lợi từ cách xử lý chuyên biệt. Nếu mọi yêu cầu cần cùng cách làm, thêm bộ chuyển nhánh có thể không mang lại lợi ích tương xứng.

Khi kết quả sai, cần phân biệt lỗi chọn nhánh với lỗi bên trong nhánh. Quy trình kỹ thuật có thể hoạt động tốt nhưng vẫn trả lời không phù hợp nếu được giao nhầm yêu cầu về hóa đơn. Khi đó, cần xem bước phân loại trước khi sửa quy trình kỹ thuật.

## Câu hỏi

**1. Chọn một.** Hệ thống cần chọn một trong các quy trình xử lý theo loại yêu cầu. Pattern nào?

A. Parallelization chạy mọi nhánh.

B. Luôn dùng cùng một prompt chung.

C. Routing.

D. Chỉ đọc resource danh mục.

**2. Chọn một.** Quy trình xử lý kỹ thuật hoạt động tốt nhưng nhận nhiều yêu cầu hóa đơn. Nên kiểm tra đầu tiên?

A. Logic phân loại và chuyển nhánh.

B. Chỉ độ dài câu trả lời kỹ thuật.

C. Chỉ tên file log.

D. Xóa mọi quy trình xử lý chuyên biệt.

**3. Chọn một.** Điều kiện nào ủng hộ routing?

A. Không thể phân biệt nhóm nào nhưng vẫn chọn ngẫu nhiên.

B. Các nhóm rõ, phân loại đủ tin cậy và chuyên biệt hóa có lợi.

C. Mọi yêu cầu bắt buộc cần tất cả nhánh đồng thời.

D. Không có khác biệt xử lý giữa các nhóm.

## Đáp án

1. **C.** A khác cơ chế chọn một nhánh; B không chuyên biệt; D không điều phối quy trình xử lý.
2. **A.** B và C không sửa nhầm loại; D bỏ thiết kế khi chưa chẩn đoán.
3. **B.** A thiếu độ tin cậy; C nghiêng về phân tích nhiều nhánh; D thiếu lý do thêm router.

## Đối chiếu Vertex

Bộ điều phối phân loại rồi chọn một quy trình chuyên biệt, không chạy mọi nhánh. Gợi ý 3–10 nhóm trong bài là minh họa; cần xử lý đầu vào mơ hồ hoặc không thuộc nhóm nào và đo lỗi phân loại. Cùng chủ đề như lập trình hoặc lướt sóng vẫn có thể chứa nhiều ý định khác nhau. Dùng chung câu hỏi.

Nguồn đối chiếu: [Routing workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289242). Bản lưu: `sources/vertex-lessons/289242.json`.
