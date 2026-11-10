# Vai trò và tính súc tích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287724), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287724.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập yêu cầu tạo hàm Python kiểm tra ký tự trùng trong một chuỗi. Câu trả lời ban đầu có nhiều mã, chú thích và giải thích. Sau đó, người học thêm hướng dẫn hệ thống yêu cầu đóng vai kỹ sư Python viết mã súc tích, nhưng giữ nguyên nhiệm vụ cần giải quyết.

Mục tiêu là quan sát tác động của hướng dẫn chung về vai trò và phong cách. Nếu muốn áp dụng phong cách qua nhiều lượt, trong mẫu này cần truyền system prompt qua hàm gửi yêu cầu.

Mã ngắn hơn chưa chắc đúng hơn. Vẫn cần thử các trường hợp phù hợp như chuỗi rỗng, ký tự lặp và cách phân biệt chữ hoa, chữ thường. Ví dụ: nếu bản rút gọn tự coi “A” và “a” là cùng ký tự trong khi yêu cầu chưa nói vậy, cần làm rõ và kiểm thử thay vì chấp nhận vì ít dòng hơn.

Không nên rút ngắn bằng cách bỏ kiểm tra cần thiết hoặc âm thầm đổi hành vi. System prompt hướng dẫn mô hình, không phải cơ chế cưỡng chế mã chạy đúng; một lần minh họa thành công cũng không bảo đảm mọi lần đều cùng định dạng.

## Câu hỏi

**1. Chọn một.** Đã thêm role “kỹ sư Python viết code súc tích” và code ngắn hơn. Bằng chứng nào còn cần trước khi chấp nhận?

A. Không cần gì vì ngắn hơn luôn tốt hơn.

B. Chỉ đếm số token đầu ra.

C. Kiểm tra chức năng/edge cases và yêu cầu ban đầu vẫn được đáp ứng.

D. Chỉ tăng điểm tự tin mô hình.

**2. Chọn một.** Tính súc tích là yêu cầu chung qua nhiều lượt, còn tác vụ cụ thể thay đổi. Trong mẫu bài, đặt ở đâu?

A. System prompt được wrapper truyền đúng vào yêu cầu.

B. Chỉ trong câu trả lời cũ không gửi lại.

C. Trong tên biến của client.

D. Chỉ ở comment Python không đưa vào ngữ cảnh.

**3. Chọn một.** Code rút gọn bắt đầu coi “A” và “a” là cùng ký tự dù yêu cầu chưa nói vậy. Đánh giá phù hợp?

A. Chấp nhận vì ít dòng hơn.

B. Thêm thật nhiều từ concise.

C. Bỏ ca chữ hoa khỏi phép đánh giá.

D. Làm rõ semantics và kiểm thử; thay đổi phong cách không được âm thầm đổi yêu cầu.

## Đáp án

1. **C.** Kiểm tra chức năng/edge cases và yêu cầu ban đầu vẫn được đáp ứng. A/B chỉ đo độ dài; D không xác minh hành vi.

2. **A.** System prompt được wrapper truyền đúng vào yêu cầu. B/C/D không cung cấp hướng dẫn thường trực cho yêu cầu theo cách mẫu triển khai.

3. **D.** Làm rõ semantics và kiểm thử; thay đổi phong cách không được âm thầm đổi yêu cầu. A bỏ correctness; B không xác định semantics; C làm yếu phép đo.

## Đối chiếu qua phụ đề chính thức

Bài Bedrock cùng yêu cầu giảm lời dẫn và chú thích của hàm kiểm tra ký tự trùng bằng vai trò kỹ sư Python viết súc tích. Hàm gửi yêu cầu phải truyền hướng dẫn hệ thống đúng cấu trúc nhà cung cấp. Mã ngắn hơn vẫn cần kiểm thử; ví dụ không chứng minh đặt vai trò luôn tốt hơn mọi cách viết yêu cầu khác.

Nguồn đối chiếu: [System prompt exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276717). Bản lưu: `sources/bedrock-media/276717.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đối chiếu toàn bộ phụ đề với bài API 287724 ghi nhận chỉ khác nhỏ như “built-in/built in” hoặc “an/and”, không đổi nội dung. Kết luận không chỉ dựa vào tên hay thời lượng. Giữ các lưu ý xác thực, nhà cung cấp và tương thích mô hình; dùng chung câu hỏi.

Nguồn đối chiếu: [System prompts exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289157). Bản lưu: `sources/vertex-media/289157.json`.
