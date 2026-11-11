# Introduction to the course

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/241929), sources/bedrock-lessons/241929.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Bài mở đầu giới thiệu khóa học dành cho ai, học những gì và theo thứ tự nào. Đây là phần giúp bạn chuẩn bị, chưa phải bằng chứng rằng đã hoàn thành khóa hoặc biết triển khai ứng dụng.

Nếu dùng khóa Bedrock để ôn Architect, hãy phân biệt hai tài liệu: chương trình khóa học cho biết các bài và nguồn cần đọc; đề cương thi (Exam Guide) cho biết nội dung nào cần ưu tiên cho đúng chứng chỉ.

Một số kiến thức giống nhóm Claude API có thể dùng chung bài tóm tắt sau khi đã đối chiếu. Những điểm khác về cách gọi dịch vụ, chuyển đổi dữ liệu và môi trường chạy cần được ghi riêng.

Trang mở đầu ngắn không đủ để suy ra chi tiết kỹ thuật của các bài sau. Hãy dùng nó như bản đồ học tập rồi đọc bài tương ứng cho từng chủ đề.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Kỹ sư có một tuần ôn Architect và muốn dành phần lớn thời gian học mọi chi tiết cấu hình cloud trong khóa Bedrock vì khóa có nhiều bài. Cơ sở ưu tiên nào phù hợp nhất?

A. Số lượng bài của mỗi chủ đề trong khóa.

B. Thứ tự xuất hiện trên trang giới thiệu khóa học.

C. Ánh xạ Exam Guide sang các bài liên quan.

D. Mức khó cảm nhận của các lệnh cài đặt trong video.

**Câu 2 — Chọn hai.** Một mục tool-use có nội dung tương tự khóa Claude API; nhóm muốn dùng chung tài liệu ôn. Hai việc nào cần để tránh bỏ khác biệt nhà cung cấp?

A. Đối chiếu nguyên tắc chung trước khi quyết định dùng chung tóm tắt.

B. Giữ riêng các khác biệt request/response và môi trường chạy.

C. Đồng nhất toàn bộ ví dụ code chỉ vì cùng mô hình Claude.

D. Dùng trang mở đầu làm bằng chứng rằng mọi API đều tương đương.

**Câu 3 — Chọn một.** Người học đọc xong trang mở đầu và ghi “đã hoàn thành khóa, có thể triển khai”. Bằng chứng nào còn thiếu để khẳng định năng lực đó?

A. Bằng chứng trang mở đầu đã đọc và các mục nội dung đã được đánh dấu xem.

B. Bản kế hoạch học ánh xạ đủ mọi chủ đề của chương trình khóa.

C. Khả năng giải thích các thuật ngữ trong trang giới thiệu mà chưa thực hành.

D. Bằng chứng thực hành/đánh giá các năng lực liên quan.

**Câu 4 — Chọn một.** Một câu hỏi về cấu trúc phản hồi Converse xuất hiện khi đang đọc bài mở đầu. Cách dùng tài liệu nào hợp lý?

A. Suy ra cấu trúc từ sơ đồ tổng quát vì nó đã nêu nhà cung cấp.

B. Tra bài chuyên đề và nguồn kỹ thuật tương ứng.

C. Dùng cấu trúc API trực tiếp của cùng model.

D. Bỏ qua vì mọi nội dung chưa có trên trang mở đầu đều ngoài khóa.

**Câu 5 — Chọn hai.** Khi lập kế hoạch học dùng nhiều khóa nguồn, hai thông tin nào cần tách biệt?

A. Năng lực đã được thực hành/đánh giá so với bài chỉ mới đọc định hướng.

B. Tỷ lệ số video đã mở như bằng chứng duy nhất về mức hiểu.

C. Nguồn quyết định phạm vi thi so với nguồn cung cấp nội dung học bổ trợ.

D. Tên nhà cung cấp như bằng chứng tự đủ rằng mọi nội dung thuộc đề thi.

## Đáp án và giải thích

1. **C.** C gắn thời gian với phạm vi chứng chỉ. A/B phản ánh cấu trúc khóa không nhất thiết trọng số thi. D độ khó thao tác không chứng minh mức ưu tiên trong kỳ thi.

2. **A, B.** A xác nhận phần tương đương; B bảo toàn khác biệt tích hợp. C bỏ adapter cụ thể. D trang định hướng không cung cấp đủ chi tiết để kết luận tính tương đương kỹ thuật.

3. **D.** D cần bằng chứng năng lực qua thực hành/đánh giá. A là tiến độ đọc. B là kế hoạch bao phủ, chưa chứng minh đã thực hiện. C nhận diện thuật ngữ chưa chứng minh triển khai hay thiết kế đúng.

4. **B.** B chọn nguồn có độ chi tiết phù hợp câu hỏi. A/C suy rộng thiếu cơ sở. D trang mở đầu là bản đồ, không phải toàn bộ nội dung khóa.

5. **A, C.** A giúp đánh giá tiến độ theo bằng chứng, C giữ đúng vai trò từng tài liệu. B đếm truy cập thay năng lực. D phạm vi chứng chỉ phải đối chiếu đề cương, không suy từ thương hiệu.
