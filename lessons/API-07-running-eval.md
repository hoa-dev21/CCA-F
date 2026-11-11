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

## Tự kiểm tra

**Câu 1 — Chọn một.** Pipeline chạy đủ 200 ca, lưu output và luôn gán score=10. Nhóm muốn dùng báo cáo để duyệt phát hành. Kết luận nào đúng?

A. Có thể dùng độ phân tán điểm bằng không để xác nhận độ ổn định model.

B. Pipeline đã kiểm tra luồng chạy, chưa có phép đo chất lượng đầu ra.

C. Chỉ cần tăng số ca để điểm cố định trở thành đáng tin cậy.

D. Chất lượng đã đạt tối đa vì mọi ca đều có đầu ra và điểm.

**Câu 2 — Chọn hai.** Một ca có điểm thấp nhưng dashboard không cho biết nguyên nhân. Hai trường nào phải đi cùng score để điều tra theo cấu trúc của bài?

A. output thay bằng câu trả lời lý tưởng do người viết mong muốn.

B. output chứa câu trả lời thực tế.

C. test_case chứa đầu vào thực tế.

D. test_case thay bằng số thứ tự trong một tập có thể thay đổi.

**Câu 3 — Chọn một.** Nhóm muốn thay cách chấm mà giữ cách ghép prompt và vòng duyệt tập. Trách nhiệm nào là điểm tích hợp hợp lý nhất?

A. Giao bộ chấm tự duyệt tập rồi bỏ bản ghi test_case.

B. run_prompt tự đổi toàn bộ tập để phù hợp bộ chấm mới.

C. run_eval viết lại mọi output trước khi bộ chấm nhận chúng.

D. run_test_case chấm output do run_prompt trả về.

**Câu 4 — Chọn hai.** Sau refactor, run_eval trả điểm chung tốt nhưng thiếu 12 output do lỗi gọi API. Hai cách xử lý nào giúp báo cáo không gây hiểu lầm?

A. Ghi nhận rõ các ca không chạy thành công và nguyên nhân.

B. Gán điểm tối đa cho ca lỗi để không phạt chất lượng prompt.

C. Tách số ca được chấm khỏi tổng số ca dự kiến khi tổng hợp.

D. Loại ca lỗi khỏi báo cáo và vẫn ghi rằng đã chạy đủ tập.

**Câu 5 — Chọn một.** Hai phiên bản run_prompt trả khác nhau nhưng log chỉ giữ score. Nhóm muốn xác định lỗi ghép prompt hay lỗi bộ chấm. Cải tiến nào trực tiếp nhất?

A. Chỉ lưu điểm trung bình của mỗi phiên bản để giảm nhiễu.

B. Chỉ lưu output có điểm cao làm chuẩn cho lần chạy sau.

C. Lưu từng test_case, output và score trong cùng bản ghi.

D. Lưu riêng ba danh sách và ghép theo thứ tự hoàn thành bất đồng bộ.

## Đáp án và giải thích

1. **B.** B phân biệt kiểm tra plumbing với đánh giá. D và A diễn giải điểm giả như kết quả đo; C tăng số lần chấm giả không tạo bằng chứng.

2. **B, C.** C cho yêu cầu; B cho hành vi quan sát. A mất bằng chứng thất bại; D có thể không truy lại được đầu vào sau khi tập đổi.

3. **D.** D giữ phân tách chạy một ca, chấm và tổng hợp. B trộn sinh output với quản lý dữ liệu; C làm sai bằng chứng; A mất cấu trúc truy nguyên từng ca.

4. **A, C.** A giữ khả năng điều tra; C làm rõ mẫu số phép đo. B bịa kết quả chấm; D che mất độ bao phủ và lỗi vận hành.

5. **C.** C giữ liên kết đầu vào–đầu ra–điểm. D có nguy cơ ghép nhầm ca khi thứ tự hoàn thành đổi; A và B bỏ dữ liệu cần chẩn đoán lỗi.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276736). Bản lưu: `sources/bedrock-lessons/276736.json`.

## Đối chiếu Vertex

Theo hồ sơ đối chiếu toàn văn, phần nội dung chính trùng bài API liên kết dưới đây sau khi bỏ khoảng trắng và mốc thời gian của trình phát. Việc dùng chung nội dung dựa trên bản văn, không chỉ tiêu đề.

Nguồn đối chiếu: [Running the eval](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289166); [Bài đối chiếu](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287743). Bản lưu: `sources/vertex-lessons/289166.json`.
