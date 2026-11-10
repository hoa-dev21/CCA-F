# Tổ chức quy trình xử lý đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743), bản nội dung sources/api-lessons/287743.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài học chia chương trình đánh giá thành ba hàm, mỗi hàm có một nhiệm vụ:

- `run_prompt`: ghép một trường hợp kiểm thử với mẫu yêu cầu rồi gọi Claude để lấy câu trả lời.
- `run_test_case`: chạy một trường hợp và chấm câu trả lời nhận được.
- `run_eval`: lần lượt xử lý toàn bộ bộ dữ liệu và tập hợp kết quả.

Mỗi bản ghi kết quả giữ ba phần: `test_case` là đầu vào đã thử, `output` là câu trả lời thực tế và `score` là điểm đánh giá. Lưu đủ ba phần giúp bạn tìm nguyên nhân khi điểm thấp, thay vì chỉ thấy một con số tổng hợp.

Trong giai đoạn đầu của ví dụ, mọi kết quả đều được gán điểm `10`. Đây chỉ là giá trị tạm (placeholder) để kiểm tra chương trình có chạy và lưu kết quả đúng hay không. Sau đó phải thay bằng cách chấm thực sự.

Ví dụ: Chương trình tạo đủ 100 bản ghi nhưng bản nào cũng được gán 10 điểm cố định. Bạn mới biết luồng gửi yêu cầu và thu câu trả lời hoạt động. Chưa có bằng chứng rằng 100 câu trả lời đó đạt chất lượng.

## Câu hỏi

**1. Chọn một.** Quy trình xử lý luôn gán `score=10`. Kết quả có thể chứng minh gì?

A. Mọi đầu ra đều đúng.

B. Prompt tốt nhất đã được tìm thấy.

C. Các bước chạy và tập hợp kết quả hoạt động, chưa chứng minh chất lượng.

D. Không cần triển khai bộ chấm điểm.

**2. Chọn hai.** Ngoài điểm, nên giữ dữ liệu nào theo cấu trúc bài học?

A. Test case gốc.

B. Mật khẩu tài khoản.

C. Đầu ra thực tế.

D. Một điểm tự đặt để thay đầu ra.

**3. Chọn một.** Hàm nào chịu trách nhiệm chạy toàn bộ bộ dữ liệu?

A. `run_prompt`.

B. `run_eval`.

C. Hàm chỉ parse JSON.

D. Hàm đọc system prompt.

## Đáp án

1. **C.** A, B, D đều coi giá trị tạm là kết quả đo thật.
2. **A, C.** Giữ bằng chứng để chẩn đoán. B không phục vụ đánh giá và không nên đưa vào; D thay bằng chứng bằng số giả.
3. **B.** A xử lý một prompt; C và D không điều phối toàn bộ tập.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276736). Bản lưu: `sources/bedrock-lessons/276736.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu toàn văn, phần nội dung chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Việc dùng chung nội dung dựa trên bản văn, không chỉ tiêu đề.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289166); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743). Bản lưu: `sources/vertex-lessons/289166.json`.
