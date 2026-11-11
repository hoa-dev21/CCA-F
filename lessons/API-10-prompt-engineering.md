# Cải tiến có kiểm chứng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287745), sources/api-lessons/287745.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Cải thiện prompt là một quá trình thử, đo và sửa. Trước hết, xác định kết quả ứng dụng cần tạo ra. Sau đó viết yêu cầu ban đầu, đánh giá kết quả, áp dụng một cách sửa rồi đánh giá lại. Chỉ nên giữ thay đổi khi kết quả kiểm tra cho thấy nó có ích.

Tiêu chí đánh giá phải bám vào nhiệm vụ thật. Ví dụ: với ứng dụng lập thực đơn, văn phong dễ đọc chưa đủ. Bạn còn phải kiểm tra khẩu phần và các yêu cầu về ăn uống. Nếu bỏ những tiêu chí này, điểm cao vẫn có thể đi kèm một thực đơn không dùng được.

Bài học khuyến nghị thay một yếu tố mỗi lần để dễ biết điều gì làm kết quả thay đổi. Nếu vừa thêm ví dụ, vừa đổi cách diễn đạt, vừa đổi cách chấm, bạn khó xác định nguyên nhân điểm tăng hoặc giảm.

Có thể dùng bộ kiểm thử nhỏ để thử ý tưởng nhanh, rồi mở rộng khi đánh giá trước khi đưa vào sử dụng. Hãy đọc từng trường hợp sai: điểm trung bình cho thấy xu hướng chung, còn lỗi cụ thể cho biết phần hướng dẫn nào cần sửa. Một vài ví dụ thành công chưa chứng minh ứng dụng xử lý tốt mọi tình huống thực tế.

## Tự kiểm tra

**Câu 1 — Chọn một.** Nhóm vừa đổi prompt, thêm ví dụ, thay model và thay grader; điểm tăng. Muốn biết sửa prompt có thật sự giúp, nên làm gì?

A. So độ dài hai prompt để ước lượng đóng góp từng thay đổi.

B. Chạy cấu hình mới nhiều lần rồi quy mọi cải thiện cho prompt.

C. Chọn thay đổi có tên dễ giải thích nhất làm nguyên nhân.

D. Giữ các yếu tố khác cố định và so hai prompt trên cùng tập.

**Câu 2 — Chọn hai.** Ứng dụng lập thực đơn đạt văn phong tốt nhưng sai khẩu phần và yêu cầu ăn uống. Hai việc nào cần làm trước khi tối ưu tiếp?

A. Dùng lỗi quan sát được để sửa chỉ dẫn liên quan rồi chạy lại.

B. Chỉ thêm ví dụ văn phong đẹp vì điểm hiện tại đang đo phần đó.

C. Đưa khẩu phần và ràng buộc ăn uống vào tiêu chí đánh giá.

D. Giảm trọng số lỗi nội dung để tổng điểm phản ánh cảm nhận tốt.

**Câu 3 — Chọn một.** Một sửa đổi tốt trên tập 10 ca dùng để lặp nhanh. Trước phát hành cho nhiều dạng đầu vào, quyết định nào phù hợp nhất?

A. Dùng đúng 10 ca đó làm bằng chứng duy nhất vì đã lặp nhiều lần.

B. Tăng số lượt chạy của một ca dễ nhất để tiết kiệm chi phí.

C. Bỏ tập cũ và chỉ đo các ca mới được tác giả prompt chọn.

D. Xác thực lại trên tập đại diện rộng hơn và kiểm tra hồi quy.

**Câu 4 — Chọn hai.** Prompt mới sửa được lỗi thiếu trường nhưng làm sai một nhóm định dạng khác. Hai thông tin nào cần cho quyết định giữ hay bỏ thay đổi?

A. Mức chấp nhận hồi quy và tầm quan trọng của nhóm bị ảnh hưởng.

B. Điểm và lỗi theo từng nhóm tác vụ, không chỉ điểm chung.

C. Mức tự tin của người viết prompt rằng bản mới rõ ràng hơn.

D. Số kỹ thuật prompt đã thêm vào bản mới.

**Câu 5 — Chọn một.** Prompt thiếu trường customer_id. Đội đề xuất tăng độ dài hướng dẫn lên gấp đôi bằng nhiều quy tắc không liên quan. Cách sửa có mục tiêu hơn là gì?

A. Làm rõ customer_id; đo trước/sau cả ca thiếu trường.

B. Bổ sung toàn bộ quy tắc từ các dự án trước.

C. Đổi giọng văn sang trang trọng rồi suy ra model sẽ tuân thủ cấu trúc hơn.

D. Chỉ tăng giới hạn đầu ra dù output hiện tại chưa chạm giới hạn.

## Đáp án và giải thích

1. **D.** D cô lập tác động cần đo. C không có bằng chứng; B đo lặp cấu hình gộp vẫn không tách nguyên nhân; A độ dài không đo hiệu quả.

2. **A, C.** C sửa thước đo; A tạo vòng cải tiến có kiểm chứng. B tối ưu sai mục tiêu; D che lỗi quan trọng thay vì sửa.

3. **D.** D phân biệt lặp nhanh với xác thực. A tăng nguy cơ tối ưu theo tập nhỏ; B thiếu bao phủ; C mất so sánh và có thiên lệch chọn mẫu.

4. **A, B.** B thể hiện đánh đổi thực tế; A gắn đánh đổi với yêu cầu sản phẩm. D số kỹ thuật không đo chất lượng; C nhận xét chủ quan không thay phép đo.

5. **A.** A bám lỗi quan sát và kiểm chứng. B tạo nhiễu không liên quan; D không xử lý nguyên nhân đã nêu; C nhầm giọng văn với tuân thủ cấu trúc.

## Đối chiếu Bedrock: Kỹ thuật viết yêu cầu cho AI

Bài Bedrock dùng cùng chu trình: đặt mục tiêu, đo kết quả ban đầu, thử cách sửa và đánh giá lại. Mức tăng điểm trong ví dụ không được bảo đảm cho nhiệm vụ khác. Các kiến thức tương đương dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276749). Bản lưu: `sources/bedrock-lessons/276749.json`.

## Đối chiếu Vertex

Bài Vertex cũng yêu cầu đo trước và sau khi thay prompt, rồi đọc lỗi theo nhóm. Ví dụ lập thực đơn và cấu hình chạy đồng thời từ 1–3 chỉ để minh họa, không phải số đo hiệu năng chuẩn hay giới hạn chung. Thay đổi có thể tốt hơn hoặc kém hơn; quyết định giữ hay bỏ cần dựa trên bằng chứng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt engineering](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289169). Bản lưu: `sources/vertex-lessons/289169.json`.
