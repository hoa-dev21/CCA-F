# Running the eval — Tổ chức pipeline đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743), bản nội dung sources/api-lessons/287743.json. Câu hỏi tự biên soạn.

## Tóm tắt

Bài tách pipeline thành ba trách nhiệm. `run_prompt` ghép một test case với mẫu prompt rồi lấy đầu ra. `run_test_case` chạy trường hợp đó và chấm kết quả. `run_eval` lặp qua dataset, tập hợp các kết quả.

Mỗi bản ghi kết quả giữ `test_case`, `output` và `score`. Lưu cả đầu vào lẫn đầu ra cho phép truy ngược nguyên nhân thay vì chỉ nhìn con số tổng hợp.

Trong bài, điểm `10` ban đầu là **placeholder** để kiểm tra luồng chạy; tác giả nói rõ phải thay bằng grader thật. Chạy hết dataset mà tất cả được gán điểm cố định không chứng minh prompt đạt chất lượng.

Ví dụ tự biên soạn: pipeline tạo 100 bản ghi thành công nhưng chưa triển khai logic chấm. Kết luận đúng là đã kiểm tra được việc điều phối request và thu kết quả; chất lượng câu trả lời vẫn chưa được đánh giá.

Từ khóa: **test case** — trường hợp kiểm thử; **output** — đầu ra; **placeholder** — giá trị tạm.

## Câu hỏi

**1. Chọn một.** Pipeline luôn gán `score=10`. Kết quả có thể chứng minh gì?

A. Mọi đầu ra đều đúng.

B. Prompt tốt nhất đã được tìm thấy.

C. Các bước chạy và tập hợp kết quả hoạt động, chưa chứng minh chất lượng.

D. Không cần triển khai grader.

**2. Chọn hai.** Ngoài điểm, nên giữ dữ liệu nào theo cấu trúc bài học?

A. Test case gốc.

B. Mật khẩu tài khoản.

C. Đầu ra thực tế.

D. Một điểm tự đặt để thay đầu ra.

**3. Chọn một.** Hàm nào chịu trách nhiệm chạy toàn bộ dataset?

A. `run_prompt`.

B. `run_eval`.

C. Hàm chỉ parse JSON.

D. Hàm đọc system prompt.

## Đáp án

1. **C.** A, B, D đều coi giá trị tạm là kết quả đo thật.
2. **A, C.** Giữ bằng chứng để chẩn đoán. B không phục vụ đánh giá và không nên đưa vào; D thay bằng chứng bằng số giả.
3. **B.** A xử lý một prompt; C và D không điều phối toàn bộ tập.

## Đối chiếu Bedrock

Đã đọc và đối chiếu [Running the eval](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276736), sources/bedrock-lessons/276736.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.

## Đối chiếu Vertex

Nguồn [Running the eval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289166), sources/vertex-lessons/289166.json. Toàn bộ mainText sau bỏ whitespace, timestamp và player timer trùng nguồn đã đọc https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743. Đối chiếu toàn văn, không suy từ tiêu đề.
