# Dạy bằng ví dụ đầu vào và đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287746), sources/api-lessons/287746.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bạn có thể đưa ví dụ vào prompt để Claude hiểu rõ kết quả mong muốn. Dùng một ví dụ gọi là one-shot; dùng nhiều ví dụ gọi là multi-shot. Mỗi ví dụ nên phân biệt rõ đầu vào mẫu và đầu ra đạt yêu cầu.

Ví dụ đặc biệt hữu ích khi định dạng phức tạp, giọng văn khó mô tả hoặc dữ liệu có nhiều cách hiểu. Có thể dùng các thẻ XML để tách đầu vào và đầu ra, kèm lời giải thích ngắn về điểm cần học từ mẫu.

Trong bài, hệ thống phân loại sai câu châm biếm: câu dùng từ tích cực nhưng thực chất thể hiện thái độ tiêu cực. Một ví dụ châm biếm có nhãn đúng giúp làm rõ trường hợp này hơn việc thêm nhiều câu khen đơn giản.

Hãy chọn ví dụ dựa trên lỗi thường gặp. Nếu ứng dụng hay tự đoán ngày khi tài liệu không có ngày, hãy đưa một mẫu thiếu ngày cùng đầu ra xử lý đúng theo quy định. Khi có nhiều kiểu lỗi, dùng các mẫu phù hợp với từng kiểu thay vì lặp lại một mẫu dễ.

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

Bài Bedrock cũng dùng ví dụ châm biếm và cách chọn một vài mẫu từ kết quả đánh giá. Ví dụ tốt trong prompt vẫn cần được kiểm tra trên trường hợp mới. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276747). Bản lưu: `sources/bedrock-lessons/276747.json`.

## Đối chiếu Vertex

Cặp đầu vào và đầu ra mẫu giúp làm rõ định dạng và trường hợp khó như châm biếm. Chọn mẫu đã kiểm tra để phát triển prompt và giữ tập kiểm thử riêng. Điểm 10 do mô hình chấm chưa chứng minh mẫu hoàn hảo. Không đưa chính câu kiểm thử vào prompt rồi coi điểm đạt được là bằng chứng làm tốt với dữ liệu mới. Dùng chung câu hỏi.

Nguồn đối chiếu: [Providing examples](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289177). Bản lưu: `sources/vertex-lessons/289177.json`.
