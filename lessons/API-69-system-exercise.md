# Vai trò và tính súc tích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287724), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287724.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập yêu cầu tạo hàm Python kiểm tra ký tự trùng trong một chuỗi. Câu trả lời ban đầu có nhiều mã, chú thích và giải thích. Sau đó, người học thêm hướng dẫn hệ thống yêu cầu đóng vai kỹ sư Python viết mã súc tích, nhưng giữ nguyên nhiệm vụ cần giải quyết.

Mục tiêu là quan sát tác động của hướng dẫn chung về vai trò và phong cách. Nếu muốn áp dụng phong cách qua nhiều lượt, trong mẫu này cần truyền system prompt qua hàm gửi yêu cầu.

Mã ngắn hơn chưa chắc đúng hơn. Vẫn cần thử các trường hợp phù hợp như chuỗi rỗng, ký tự lặp và cách phân biệt chữ hoa, chữ thường. Ví dụ: nếu bản rút gọn tự coi “A” và “a” là cùng ký tự trong khi yêu cầu chưa nói vậy, cần làm rõ và kiểm thử thay vì chấp nhận vì ít dòng hơn.

Không nên rút ngắn bằng cách bỏ kiểm tra cần thiết hoặc âm thầm đổi hành vi. System prompt hướng dẫn mô hình, không phải cơ chế cưỡng chế mã chạy đúng; một lần minh họa thành công cũng không bảo đảm mọi lần đều cùng định dạng.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Sau khi thêm vai trò “kỹ sư Python viết súc tích”, hàm kiểm tra ký tự trùng còn một dòng nhưng chuyển mọi chuỗi sang lowercase. Yêu cầu gốc chưa nói về phân biệt hoa/thường. Quyết định nào đúng nhất?

A. Làm rõ hoa/thường rồi kiểm thử; style không đổi semantics.

B. Chấp nhận vì lowercase là cách phổ biến để đơn giản hóa xử lý chuỗi.

C. Thêm từ “concise” nhiều lần rồi chọn bản ngắn nhất.

D. Bỏ ca “Aa” khỏi phép đo để chỉ so tính súc tích trên các ca đã thống nhất.

**Câu 2 — Chọn hai.** Wrapper nhận system prompt nhưng một nhánh gọi API không truyền tham số đó. Các lượt chạy có phong cách thiếu nhất quán. Hai bước nào giúp khoanh vùng đúng nguyên nhân?

A. Thử cùng nhiệm vụ và cấu hình qua các nhánh để tách lỗi truyền context khỏi biến thiên đầu ra.

B. Chỉ tăng temperature để phong cách thống nhất giữa các nhánh.

C. Kiểm tra payload thực tế của từng đường gọi để xác nhận hướng dẫn được gửi.

D. Đặt vai trò vào tên biến client để nhánh nào cũng nhìn thấy.

**Câu 3 — Chọn một.** Bản rút gọn vượt qua ví dụ chuỗi có ký tự lặp nhưng lỗi với chuỗi rỗng. Nhóm báo cải thiện vì token giảm 60%. Cách đánh giá phù hợp nhất?

A. Đánh giá correctness trên tập ca biên đã định trước rồi mới so chi phí/độ dài giữa các bản đáp ứng.

B. Chỉ đo trên chuỗi không rỗng vì ví dụ video cũng như vậy.

C. Chấp nhận khi system prompt có từ “expert”, vì lỗi biên có thể sửa sau.

D. Gộp điểm độ dài và correctness với trọng số bằng nhau để lỗi biên được bù.

**Câu 4 — Chọn một.** Tác vụ thay đổi mỗi lượt nhưng yêu cầu chung luôn là mã súc tích, ít lời dẫn. Trong cấu trúc mẫu của bài, thiết kế nào giữ ranh giới rõ nhất?

A. Đổi function name thành concise_request rồi bỏ hướng dẫn gửi mô hình.

B. Chỉ dựa vào câu trả lời ngắn của lượt trước mà không gửi lại nó.

C. System giữ phong cách chung; mỗi task nêu chức năng riêng.

D. Đưa tất cả tác vụ tương lai vào system prompt ngay từ đầu.

**Câu 5 — Chọn hai.** Để so sánh system role mới với baseline cho hàm kiểm tra ký tự trùng, hai điều kiện nào giúp kết luận có ý nghĩa?

A. Dùng số dòng làm chuẩn duy nhất vì mục tiêu bài có chữ súc tích.

B. Giữ yêu cầu chức năng và tập kiểm thử ổn định giữa hai phiên bản.

C. Chỉ giữ các ca mà phiên bản mới làm tốt hơn để báo mức tiến bộ.

D. Đo các ca rỗng, lặp, không lặp và hoa/thường theo semantics đã thống nhất.

## Đáp án và giải thích

1. **A.** A đúng: Tính súc tích là ràng buộc trình bày, không xác nhận thay đổi định nghĩa ký tự trùng. B sai: Phổ biến không chứng minh đúng yêu cầu cụ thể còn chưa rõ. C sai: Tăng trọng số phong cách không xác định được nghĩa đúng của nhiệm vụ. D sai: Loại ca làm lộ khác biệt che thay đổi hành vi thay vì giải quyết nó.

2. **A, C.** A đúng: So sánh có kiểm soát giúp biết sự khác biệt nằm ở wrapper hay chỉ ở lần sinh. B sai: Temperature không bổ sung hướng dẫn bị mất và có thể tăng biến thiên. C đúng: Tham số ở chữ ký hàm chưa chứng minh đã tới API. D sai: Tên biến trong chương trình không mặc nhiên được đưa vào ngữ cảnh mô hình.

3. **A.** A đúng: Tiết kiệm chỉ có ý nghĩa khi không mất hành vi bắt buộc. B sai: Đề bài và miền sử dụng thực tế quyết định phạm vi, không chỉ một ví dụ minh họa. C sai: Nhãn vai trò không là bằng chứng chất lượng hoặc đáp ứng hiện tại. D sai: Nếu hành vi là yêu cầu bắt buộc thì giảm token không bù việc vi phạm.

4. **C.** A sai: Tên hàm nội bộ không truyền chỉ dẫn phong cách cho mô hình. B sai: Nội dung không có trong request không tự trở thành hướng dẫn của request mới. C đúng: Cách này thể hiện chính sách phong cách dùng chung mà vẫn cho phép tác vụ thay đổi. D sai: Không thể định sẵn mọi nhiệm vụ, đồng thời dễ trộn yêu cầu chung với yêu cầu từng lượt.

5. **B, D.** A sai: Bài vẫn yêu cầu chức năng đúng; phong cách không thay correctness. B đúng: Nếu đồng thời đổi yêu cầu, khó xác định role cải thiện hay chỉ đổi bài toán. C sai: Chọn lại tập theo kết quả tạo thiên lệch phép so sánh. D đúng: Các ca này phát hiện việc mã ngắn hơn âm thầm đổi hành vi.

## Đối chiếu qua phụ đề chính thức

Bài Bedrock cùng yêu cầu giảm lời dẫn và chú thích của hàm kiểm tra ký tự trùng bằng vai trò kỹ sư Python viết súc tích. Hàm gửi yêu cầu phải truyền hướng dẫn hệ thống đúng cấu trúc nhà cung cấp. Mã ngắn hơn vẫn cần kiểm thử; ví dụ không chứng minh đặt vai trò luôn tốt hơn mọi cách viết yêu cầu khác.

Nguồn đối chiếu: [System prompt exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276717). Bản lưu: `sources/bedrock-media/276717.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đối chiếu toàn bộ phụ đề với bài API 287724 ghi nhận chỉ khác nhỏ như “built-in/built in” hoặc “an/and”, không đổi nội dung. Kết luận không chỉ dựa vào tên hay thời lượng. Giữ các lưu ý xác thực, nhà cung cấp và tương thích mô hình; dùng chung câu hỏi.

Nguồn đối chiếu: [System prompts exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289157). Bản lưu: `sources/vertex-media/289157.json`.
