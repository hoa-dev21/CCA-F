# Chấm bằng mô hình

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287742), bản nội dung sources/api-lessons/287742.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Có ba cách chấm kết quả: dùng mã chương trình, dùng mô hình AI hoặc nhờ con người. Chọn cách chấm theo tiêu chí cần kiểm tra. Mã phù hợp với quy tắc rõ như cấu trúc dữ liệu; mô hình có thể hỗ trợ xem câu trả lời có đầy đủ và đúng yêu cầu không; người chấm có thể vận dụng chuyên môn nhưng cần thời gian.

Khi dùng mô hình làm người chấm, cần cung cấp cả yêu cầu gốc và câu trả lời cần đánh giá. Bài học đề xuất kết quả chấm gồm điểm mạnh, điểm yếu, lý do và điểm số. Nhờ phần giải thích, bạn biết vì sao câu trả lời chưa đạt và nên sửa yêu cầu ở đâu.

Ví dụ: AI tạo dữ liệu JSON đúng cú pháp nhưng lọc nhầm loại đơn hàng. Chương trình đọc JSON chỉ xác nhận dữ liệu có đúng định dạng. Muốn phát hiện lỗi lọc nhầm, phải đối chiếu nội dung với yêu cầu gốc; có thể dùng mô hình hỗ trợ việc đánh giá này.

Điểm do mô hình chấm có thể thay đổi giữa các lần và bản thân mô hình chấm cũng có thể sai. Vì vậy, dùng điểm trung bình để hỗ trợ so sánh, đồng thời xem nhận xét và lỗi cụ thể. Không coi một điểm số cao là bằng chứng tuyệt đối rằng kết quả đúng.

## Câu hỏi

**1. Chọn một.** Đầu ra parse được nhưng không giải quyết yêu cầu. Tiêu chí nào bị vi phạm?

A. Chỉ độ dài.

B. Task following — làm đúng tác vụ.

C. Tính tồn tại của bộ dữ liệu.

D. Chắc chắn cú pháp JSON.

**2. Chọn một.** Cấu trúc bộ chấm điểm nào hỗ trợ chẩn đoán tốt nhất theo bài?

A. Chỉ ghi “ổn”.

B. Chỉ ghi tên mô hình.

C. Điểm mạnh, điểm yếu, lý do và điểm.

D. Luôn trả 10.

**3. Chọn hai.** Những gì mô hình bộ chấm điểm cần để đối chiếu yêu cầu và kết quả?

A. Yêu cầu gốc.

B. Đầu ra cần chấm.

C. Thông tin đăng nhập của người dùng.

D. Một nhãn “đúng” gán cố định.

## Đáp án

1. **B.** A không mô tả lỗi; C không phải tiêu chí đầu ra; D trái dữ kiện parse được.
2. **C.** A và B thiếu đánh giá hữu ích; D không chấm thực tế.
3. **A, B.** C không cần cho đánh giá; D thay việc đánh giá bằng kết luận cố định.

## Đối chiếu Bedrock

Nội dung về phương pháp đánh giá tương đương với bài chung nên dùng chung phần giải thích và câu hỏi, không tính thêm một bộ câu hỏi mới. Khi chuyển mã sang Bedrock, cần phần chuyển đổi phù hợp với Converse. Những ví dụ dùng prefill, chuỗi dừng và tên mô hình trong khóa vẫn phải được kiểm tra khả năng hỗ trợ khi triển khai.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276738). Bản lưu: `sources/bedrock-lessons/276738.json`.

## Đối chiếu Vertex

Chọn chấm bằng mã, mô hình hay con người theo tiêu chí cần đo. Mã có thể kiểm tra cú pháp; việc làm đúng nhiệm vụ cần xem hành vi và tiêu chí, có thể kết hợp AI với người đánh giá. Lời giải thích của mô hình chấm chưa chứng minh điểm đúng. Cần đối chiếu mẫu có nhãn và xem lỗi theo nhóm, không chỉ điểm trung bình. Dùng chung câu hỏi.

Nguồn đối chiếu: [Model based grading](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289168). Bản lưu: `sources/vertex-lessons/289168.json`.
