# Tạo tập đầu vào kiểm thử

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287739), bản nội dung sources/api-lessons/287739.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Trước khi tạo dữ liệu kiểm thử, cần biết ứng dụng phải tạo ra kết quả gì. Trong bài, ứng dụng tạo mã Python, dữ liệu JSON hoặc biểu thức tìm mẫu văn bản (regex) cho các nhiệm vụ liên quan đến AWS. Đầu ra chỉ được chứa nội dung cần dùng, không kèm lời giải thích.

Bộ dữ liệu kiểm thử là danh sách các bản ghi JSON. Trong mỗi bản ghi, trường `task` mô tả nhiệm vụ sẽ đưa vào prompt. Bạn có thể tự viết các bản ghi hoặc nhờ Claude tạo theo yêu cầu rõ về loại đầu ra, độ khó, số trường hợp và cấu trúc cần có.

Ví dụ: Nếu ứng dụng hỗ trợ cả JSON và regex nhưng bộ kiểm thử chỉ có yêu cầu tạo JSON, bạn chưa biết ứng dụng làm tốt với regex hay không. Cần chọn các trường hợp bao quát những nhóm công việc quan trọng.

Lưu bộ dữ liệu thành tệp giúp dùng lại cùng đầu vào khi so sánh các phiên bản prompt. Ba bản ghi trong bài chỉ để minh họa cách làm, chưa đủ để chứng minh chất lượng của một ứng dụng đưa vào sử dụng thực tế.

Mã ví dụ dùng mô hình nhanh để hỗ trợ tạo dữ liệu, cùng kỹ thuật viết sẵn phần mở đầu câu trả lời (prefilling) và chuỗi dừng (stop sequence). Khả năng hỗ trợ các kỹ thuật này tùy mô hình; cần kiểm tra trước khi chạy. Điều chính cần nắm ở đây là cách thiết kế và lưu bộ đầu vào phù hợp.

## Câu hỏi

**1. Chọn một.** Ứng dụng hỗ trợ ba định dạng nhưng bộ dữ liệu chỉ gồm Python. Hạn chế trực tiếp?

A. JSON không thể lưu task.

B. Chưa đo được chất lượng ở hai nhóm còn lại.

C. Không thể so sánh prompt Python.

D. Mọi kết quả Python đều sai.

**2. Chọn một.** Lý do lưu bộ dữ liệu để dùng lại?

A. Để so các phiên bản trên cùng đầu vào.

B. Để không cần bộ chấm điểm.

C. Để bảo đảm mô hình không sai.

D. Để API tự nhớ hội thoại.

**3. Chọn một.** Khi nhờ mô hình tạo bộ dữ liệu, chỉ dẫn nào hữu ích nhất?

A. “Tạo gì cũng được.”

B. “Hãy cho mọi đầu ra điểm 10.”

C. Nêu loại task, định dạng bản ghi và giới hạn độ phức tạp.

D. Không mô tả ứng dụng đích.

## Đáp án

1. **B.** A sai về JSON; C vẫn có thể so trên nhóm Python; D không suy ra từ thiếu bao phủ.
2. **A.** B và C nhầm dữ liệu với đánh giá và bảo đảm; D nhầm dữ liệu kiểm thử với lịch sử yêu cầu.
3. **C.** A và D tạo dữ liệu kém liên quan; B làm sai hoạt động chấm điểm.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276733). Bản lưu: `sources/bedrock-lessons/276733.json`.

## Đối chiếu Vertex

Ví dụ tạo dữ liệu kiểm thử cho nhiệm vụ AWS có đầu ra Python, JSON hoặc regex. Có thể soạn bằng tay hoặc nhờ mô hình rồi lưu lại. Ba ví dụ chưa đại diện cho ứng dụng thực tế; dữ liệu sinh cần được kiểm tra, bổ sung trường hợp biên và có tập kiểm thử riêng. Prefill và chuỗi dừng không thay việc kiểm tra JSON hoặc schema. Dùng chung câu hỏi.

Nguồn đối chiếu: [Generating test datasets](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289163). Bản lưu: `sources/vertex-lessons/289163.json`.
