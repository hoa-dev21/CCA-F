# Chấm bằng mô hình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287742), bản nội dung sources/api-lessons/287742.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có ba cách chấm kết quả: dùng mã chương trình, dùng mô hình AI hoặc nhờ con người. Chọn cách chấm theo tiêu chí cần kiểm tra. Mã phù hợp với quy tắc rõ như cấu trúc dữ liệu; mô hình có thể hỗ trợ xem câu trả lời có đầy đủ và đúng yêu cầu không; người chấm có thể vận dụng chuyên môn nhưng cần thời gian.

Khi dùng mô hình làm người chấm, cần cung cấp cả yêu cầu gốc và câu trả lời cần đánh giá. Bài học đề xuất kết quả chấm gồm điểm mạnh, điểm yếu, lý do và điểm số. Nhờ phần giải thích, bạn biết vì sao câu trả lời chưa đạt và nên sửa yêu cầu ở đâu.

Ví dụ: AI tạo dữ liệu JSON đúng cú pháp nhưng lọc nhầm loại đơn hàng. Chương trình đọc JSON chỉ xác nhận dữ liệu có đúng định dạng. Muốn phát hiện lỗi lọc nhầm, phải đối chiếu nội dung với yêu cầu gốc; có thể dùng mô hình hỗ trợ việc đánh giá này.

Điểm do mô hình chấm có thể thay đổi giữa các lần và bản thân mô hình chấm cũng có thể sai. Vì vậy, dùng điểm trung bình để hỗ trợ so sánh, đồng thời xem nhận xét và lỗi cụ thể. Không coi một điểm số cao là bằng chứng tuyệt đối rằng kết quả đúng.

## Tự kiểm tra

**Câu 1 — Chọn một.** JSON do model sinh parse được nhưng cấu hình vùng triển khai trái yêu cầu. Bộ chấm hiện chỉ kiểm tra parse. Bổ sung nào giải quyết lỗ hổng?

A. Chấm cấu hình theo yêu cầu gốc của tác vụ.

B. Thêm kiểm tra khoảng trắng để chắc chắn JSON đúng định dạng.

C. Lặp phép parse để tăng độ tin cậy.

D. Chấm độ mạch lạc của lời giải thích thay cho vùng triển khai.

**Câu 2 — Chọn hai.** Nhóm dùng một model làm grader cho trợ lý. Hai thành phần nào cần có để điểm chấm có thể điều tra?

A. Tên prompt “bản cải tiến” để grader biết nên ưu tiên.

B. Chỉ mức tự tin của model tạo output thay cho phân tích.

C. Lý do, điểm mạnh và điểm yếu đi kèm điểm số.

D. Yêu cầu gốc cùng output được chấm.

**Câu 3 — Chọn một.** Đầu ra phải có JSON đúng cú pháp và tóm tắt đầy đủ các rủi ro khó quy thành chuỗi cố định. Thiết kế grader nào phù hợp nhất?

A. Dùng so khớp nguyên văn với một tóm tắt mẫu cho mọi đầu vào.

B. Dùng mã kiểm tra JSON và model theo rubric kiểm tra nội dung.

C. Dùng model cho cả hai rồi bỏ kiểm tra parse vì model hiểu JSON.

D. Chỉ dùng parse JSON và coi trường risks có mặt là đủ.

**Câu 4 — Chọn hai.** Grader cho hai câu trả lời trái ngược cùng điểm cao. Hai bước nào giúp phân biệt lỗi rubric với lỗi người chấm?

A. Xem lại lý do chấm và đối chiếu với yêu cầu gốc.

B. Đổi tên model sinh đáp án rồi dùng tên đó làm tiêu chí phân xử.

C. Dùng các ca có nhãn đã duyệt để kiểm tra tính nhất quán của grader.

D. Tăng điểm của cả hai để tránh tranh cãi giữa các lần chạy.

**Câu 5 — Chọn một.** Một output rất trôi chảy nhưng bỏ qua hai ràng buộc bắt buộc. Grader chỉ hỏi “câu trả lời có hay không?”. Sửa nào sát nguyên nhân nhất?

A. Yêu cầu grader ưu tiên câu trả lời dài hơn vì thường đầy đủ hơn.

B. Chấm riêng tuân thủ và rõ ràng, chỉ ra vi phạm cụ thể.

C. Dùng điểm trình bày bù phần thông tin thiếu.

D. Chỉ giảm nhiệt độ model sinh để mặc định các ràng buộc sẽ được giữ.

## Đáp án và giải thích

1. **A.** A đo ngữ nghĩa nhiệm vụ. B và C vẫn chỉ đo cú pháp; D chuyển sang văn phong, không kiểm tra ràng buộc bị vi phạm.

2. **C, D.** D tạo cơ sở đối chiếu; C giúp kiểm tra lý do chấm. A dễ gây thiên lệch; B không đánh giá đáp ứng yêu cầu thực tế.

3. **B.** B kết hợp phép đo phù hợp từng tiêu chí. C bỏ một kiểm tra tất định dễ làm; D nhầm có trường với đủ ý; A phạt những cách diễn đạt đúng khác mẫu.

4. **A, C.** A kiểm tra căn cứ từng điểm; C kiểm tra grader trên chuẩn biết trước. D che mâu thuẫn; B đánh giá danh tính thay cho nội dung.

5. **B.** B làm rõ điều phải chấm. A và C dùng hình thức thay cho độ đầy đủ; D thay cấu hình sinh nhưng không sửa thước đo đang bỏ sót lỗi.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276738). Bản lưu: `sources/bedrock-lessons/276738.json`.

## Đối chiếu Vertex

Chọn chấm bằng mã, mô hình hay con người theo tiêu chí cần đo. Mã có thể kiểm tra cú pháp; việc làm đúng nhiệm vụ cần xem hành vi và tiêu chí, có thể kết hợp AI với người đánh giá. Lời giải thích của mô hình chấm chưa chứng minh điểm đúng. Cần đối chiếu mẫu có nhãn và xem lỗi theo nhóm, không chỉ điểm trung bình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289168). Bản lưu: `sources/vertex-lessons/289168.json`.
