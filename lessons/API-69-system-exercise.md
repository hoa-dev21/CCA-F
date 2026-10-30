# System prompts exercise — Vai trò và tính súc tích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287724), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287724.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Bài yêu cầu tạo hàm Python kiểm tra ký tự trùng trong một chuỗi. Đầu ra ban đầu có nhiều code, comment và giải thích. Người học thêm system prompt gán vai trò kỹ sư Python viết code súc tích rồi so sánh kết quả, giữ nguyên yêu cầu chức năng.

Điểm cần hiểu là hướng dẫn thường trực về vai trò/phong cách có thể ảnh hưởng cách trả lời. “Súc tích hơn” không tự chứng minh code đúng hoặc tốt hơn ở mọi tiêu chí: vẫn kiểm tra hành vi với chuỗi rỗng, ký tự lặp, phân biệt hoa/thường và yêu cầu thực của ứng dụng. Không tối ưu số dòng bằng cách bỏ validation hay đổi semantics.

Liên hệ Architect: chọn nơi đặt hướng dẫn và đo hiệu quả; role prompt là hướng dẫn cho model, không là cơ chế cưỡng chế code thực thi. Không suy một lần demo ngắn hơn thành bảo đảm đầu ra luôn có đúng định dạng.

## Câu hỏi

**1. Chọn một.** Đã thêm role “kỹ sư Python viết code súc tích” và code ngắn hơn. Bằng chứng nào còn cần trước khi chấp nhận?

A. Không cần gì vì ngắn hơn luôn tốt hơn.

B. Chỉ đếm số token đầu ra.

C. Kiểm tra chức năng/edge cases và yêu cầu ban đầu vẫn được đáp ứng.

D. Chỉ tăng confidence model.

**2. Chọn một.** Tính súc tích là yêu cầu chung qua nhiều lượt, còn tác vụ cụ thể thay đổi. Trong mẫu bài, đặt ở đâu?

A. System prompt được wrapper truyền đúng vào request.

B. Chỉ trong câu trả lời cũ không gửi lại.

C. Trong tên biến của client.

D. Chỉ ở comment Python không đưa vào context.

**3. Chọn một.** Code rút gọn bắt đầu coi “A” và “a” là cùng ký tự dù yêu cầu chưa nói vậy. Đánh giá phù hợp?

A. Chấp nhận vì ít dòng hơn.

B. Thêm thật nhiều từ concise.

C. Bỏ ca chữ hoa khỏi eval.

D. Làm rõ semantics và kiểm thử; thay đổi phong cách không được âm thầm đổi yêu cầu.

## Đáp án

1. **C.** Kiểm tra chức năng/edge cases và yêu cầu ban đầu vẫn được đáp ứng. A/B chỉ đo độ dài; D không xác minh hành vi.

2. **A.** System prompt được wrapper truyền đúng vào request. B/C/D không cung cấp hướng dẫn thường trực cho request theo cách mẫu triển khai.

3. **D.** Làm rõ semantics và kiểm thử; thay đổi phong cách không được âm thầm đổi yêu cầu. A bỏ correctness; B không xác định semantics; C làm yếu phép đo.

## Đối chiếu qua phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [System prompt exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276717), sources/bedrock-media/276717.json. Cùng nhiệm vụ giảm preamble/comments của hàm kiểm tra ký tự trùng bằng system role concise Python engineer. Wrapper provider phải truyền system đúng cấu trúc; output súc tích hơn vẫn cần test chức năng. Không khái quát demo thành role prompt luôn tốt hơn mọi cách viết yêu cầu khác.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [System prompts exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289157), sources/vertex-media/289157.json. Đối chiếu toàn bộ phụ đề với nguồn API287724 đã đọc: chỉ khác built-in/built in hoặc an/and do cách chép phụ đề, không đổi nội dung bài. Không suy từ tên/duration. Giữ các lưu ý về xác thực/provider và tính tương thích model của bài chung. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
