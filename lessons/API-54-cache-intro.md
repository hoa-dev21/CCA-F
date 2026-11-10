# Prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287772), sources/api-lessons/287772.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Lưu đệm prompt (prompt caching) cho phép tái sử dụng phần xử lý của nội dung đầu vào lặp lại. Trong trường hợp phù hợp, cách này có thể giảm thời gian phản hồi và chi phí.

Ví dụ: Bạn đặt nhiều câu hỏi khác nhau về cùng một tài liệu dài, hoặc nhiều yêu cầu dùng chung định nghĩa công cụ và hướng dẫn hệ thống ổn định. Đây là những tình huống đáng đo lợi ích của cache.

Cache không phải kho lưu câu trả lời cuối để trả nguyên bản. Nó cũng không thay thế việc gửi ngữ cảnh: ứng dụng vẫn phải tạo yêu cầu với nội dung cần thiết. Nội dung chỉ gần giống nhau chưa chắc được tính là dùng lại cache thành công, còn gọi là cache hit.

Hãy kiểm tra số liệu sử dụng thực tế để biết phần nào được dùng lại. Thời hạn một giờ và cách giải thích bên trong hệ thống ở video là minh họa tại thời điểm giảng, không phải cam kết chung cho mọi mô hình và cấu hình. Theo đề cương đã lưu, chỉ cần biết cơ chế này tồn tại; chi tiết triển khai không phải trọng tâm.

## Câu hỏi

**1. Chọn một.** Caching chủ yếu tái sử dụng gì trong bài?

A. Mọi câu trả lời cuối bất kể câu hỏi.

B. Phần xử lý đầu vào có thể tái sử dụng.

C. Quyền đăng nhập.

D. Mọi lỗi hệ thống xử lý phía máy chủ.

**2. Chọn một.** Cache có thay việc truyền ngữ cảnh cần thiết không?

A. Có, không cần messages.

B. Có, mọi lần đều nhớ.

C. Không; ứng dụng vẫn gửi yêu cầu/context theo hợp đồng.

D. Có, chỉ cần cùng API key.

**3. Chọn một.** Tác vụ nào là ứng viên đáng đo lợi ích cache?

A. Nhiều yêu cầu dùng cùng tài liệu dài ổn định.

B. Mỗi yêu cầu hoàn toàn khác nguồn.

C. Chỉ một yêu cầu nhỏ rồi không lặp.

D. Không gửi dữ liệu.

## Đáp án

1. **B.** B đúng mục tiêu; A nhầm output cache, C và D không phải dữ liệu xử lý prompt.

2. **C.** C phân biệt cache với memory; A, B, D giả định tự giữ hội thoại.

3. **A.** A có phần lặp; B, C ít cơ hội tái dùng, D không có nội dung để xử lý.

## Đối chiếu tính năng trên Bedrock

Ví dụ Bedrock nêu thời gian cache còn hiệu lực 5 phút, trong khi bài API nêu 1 giờ. Đây là các ví dụ hoặc cấu hình khác nhau, không nên chọn một con số làm quy tắc chung. Cùng học nguyên tắc tái sử dụng xử lý đầu vào; khi triển khai cần xác minh thời hạn và ngưỡng áp dụng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276786). Bản lưu: `sources/bedrock-lessons/276786.json`.

## Đối chiếu Vertex

Bài Vertex cũng nêu 5 phút, khác 1 giờ trong bài API. Kiểm tra nhà cung cấp, mô hình và cấu hình thực tế trước khi dùng. Cache tái sử dụng tính toán cho đầu vào ổn định, không phải lưu sẵn câu trả lời hoặc tìm nội dung gần nghĩa. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289196). Bản lưu: `sources/vertex-lessons/289196.json`.
