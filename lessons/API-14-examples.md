# Providing examples — Dạy bằng ví dụ đầu vào và đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287746), sources/api-lessons/287746.json. Câu hỏi tự biên soạn.

## Tóm tắt

**One-shot** dùng một ví dụ; **multi-shot** dùng nhiều ví dụ. Mỗi ví dụ cho thấy đầu vào và đầu ra mong muốn, hữu ích với định dạng phức tạp, giọng điệu và trường hợp mơ hồ.

Bài minh họa lỗi phân loại sắc thái châm biếm: từ ngữ có vẻ tích cực nhưng ý nghĩa thực tế tiêu cực. Thêm nhiều câu tích cực đơn giản không thể hiện được ranh giới khó; ví dụ châm biếm có nhãn đúng minh họa điều hệ thống cần học.

Đặt tên rõ phần đầu vào, phần đầu ra mẫu; có thể dùng XML để phân vùng. Giải thích vì sao đầu ra là tốt giúp làm rõ yêu cầu tinh tế. Dùng lỗi thường gặp và đầu ra đạt chất lượng trong eval để chọn ví dụ phù hợp tác vụ.

Ví dụ tự biên soạn: bộ trích xuất hay điền ngày thiếu bằng cách đoán. Một ví dụ đầu vào không có ngày, cùng đầu ra thể hiện cách xử lý dữ liệu thiếu theo hợp đồng, hữu ích hơn nhiều ví dụ chỉ chứa đầy đủ dữ liệu.

## Câu hỏi

**1. Chọn một.** Bộ phân loại sai ở câu châm biếm. Nên ưu tiên ví dụ nào?

A. Một câu châm biếm có nhãn và giải thích đúng.

B. Mười câu tích cực giống hệt nhau.

C. Một ví dụ không liên quan tác vụ.

D. Chỉ ghi “đừng sai”.

**2. Chọn hai.** Một ví dụ có cấu trúc nên phân biệt những gì?

A. Đầu vào mẫu.

B. Đầu ra lý tưởng.

C. Mật khẩu tài khoản.

D. Một điểm số cố định thay đầu ra.

**3. Chọn một.** Khi có nhiều kiểu trường hợp biên khác nhau, cách nào thể hiện chúng tốt hơn?

A. Xóa mọi ví dụ.

B. Dùng các ví dụ liên quan bao phủ những kiểu khác nhau.

C. Lặp một ví dụ không khó thật nhiều lần.

D. Không nêu định dạng đầu ra.

## Đáp án

1. **A.** Trực tiếp minh họa ranh giới đang sai. B chưa bao phủ lỗi; C không liên quan; D không dạy cách xử lý.
2. **A, B.** C không cần cho ví dụ; D không cho thấy hành vi mong muốn.
3. **B.** A và D giảm hướng dẫn; C không tăng độ đa dạng trường hợp.

## Đối chiếu Bedrock: Providing examples

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276747) và đối chiếu khái niệm với bài chung. Cùng ví dụ châm biếm, few-shot và lựa chọn ví dụ từ eval. Tập ví dụ tốt không loại bỏ yêu cầu đánh giá trên trường hợp mới. Nguồn: sources/bedrock-lessons/276747.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Providing examples](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289177), sources/vertex-lessons/289177.json. Input/output mẫu giúp format và ca khó như sarcasm; chọn ví dụ phát triển đã review và giữ test holdout riêng. Điểm10 từ model grader chưa đủ chứng minh mẫu hoàn hảo; tránh đưa test đang chấm vào prompt rồi báo điểm như bằng chứng khái quát hóa. Dùng chung câu hỏi khái niệm.
