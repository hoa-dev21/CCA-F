# Structured data exercise — Prefill, delimiter và giới hạn bảo đảm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287729), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287729.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Yêu cầu bài tập là giữ nguyên prompt sinh ba lệnh AWS CLI, chỉ chỉnh assistant prefill và stop sequences để đầu ra có cả ba lệnh trong một khối, không giải thích/comment. Đây là bài về điều khiển định dạng, không thực thi các lệnh.

Prefill chỉ có ba backticks có thể khiến phần text mới bắt đầu bằng nhãn ngôn ngữ bash. Thêm bash vào phần prefill giải quyết nhãn đó, nhưng model vẫn có thể tách nhiều code blocks hoặc thêm comment shell. Video bổ sung câu dẫn trong prefill nêu cả ba lệnh ở một khối không comment, rồi mở code fence bash; stop ở fence đóng.

Stop marker có thể chặn ngay sau lệnh đầu nếu model tạo nhiều blocks. Prefill/stop trong video là kỹ thuật theo model/phiên bản; kiểm tra khả năng hỗ trợ và validation đầu ra thực. Không coi định dạng sạch là bằng chứng lệnh đúng, an toàn hoặc được phép chạy; extraction/schema khi cần vẫn phải theo contract được hỗ trợ.

## Câu hỏi

**1. Chọn một.** Prefill chỉ mở code fence, phần sinh bắt đầu bằng từ bash ngoài mong muốn. Vì sao?

A. Model luôn bỏ qua prefill.

B. Model đang hoàn thiện nhãn ngôn ngữ của code fence.

C. API đã thực thi lệnh bash.

D. Stop sequence tự thêm chữ bash.

**2. Chọn một.** Stop ở fence đóng nhưng chỉ nhận một trong ba lệnh. Nguyên nhân sát ví dụ?

A. Model không hỗ trợ số ba.

B. Response luôn bị cắt vì mạng.

C. Không thể có nhiều code blocks trong Markdown.

D. Model định viết mỗi lệnh trong một block; marker đầu tiên đã kết thúc generation.

**3. Chọn một.** Đầu ra có đủ ba dòng lệnh và không comment. Có thể tự động chạy ngay không?

A. Chưa; cần kiểm tra nội dung, quyền và tác động, định dạng không chứng minh tính đúng.

B. Có, mọi lệnh do model sinh đều an toàn.

C. Có, prefill là cơ chế cấp quyền.

D. Có, stop sequence validate AWS parameters.

## Đáp án

1. **B.** Model đang hoàn thiện nhãn ngôn ngữ của code fence. A không đúng hiện tượng; C nhầm sinh với thực thi; D không phải vai trò stop marker.

2. **D.** Model định viết mỗi lệnh trong một block; marker đầu tiên đã kết thúc generation. A/B không có bằng chứng; C sai về Markdown.

3. **A.** Chưa; cần kiểm tra nội dung, quyền và tác động, định dạng không chứng minh tính đúng. B suy rộng sai; C/D gán cho kỹ thuật định dạng khả năng authorization/validation không có.

## Đối chiếu qua phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Structured data exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276718), sources/bedrock-media/276718.json. Phụ đề xác nhận cùng bài ba AWS CLI commands với prefill/stop, nhãn bash, single block và không comment. Chỉ sinh text, không chạy lệnh. Khả năng prefill phụ thuộc model/provider; việc đạt format không chứng minh correctness hoặc quyền thực thi.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Structured data exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289152), sources/vertex-media/289152.json. Đối chiếu toàn bộ phụ đề với nguồn API287729 đã đọc: trùng nguyên văn. Giữ các lưu ý về xác thực/provider và tính tương thích model của bài chung. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
