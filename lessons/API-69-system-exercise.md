# Vai trò và tính súc tích

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287724), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287724.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập yêu cầu tạo hàm Python kiểm tra ký tự trùng trong một chuỗi. Câu trả lời ban đầu có nhiều mã, chú thích và giải thích. Sau đó, người học thêm hướng dẫn hệ thống yêu cầu đóng vai kỹ sư Python viết mã súc tích, nhưng giữ nguyên nhiệm vụ cần giải quyết.

Mục tiêu là quan sát tác động của hướng dẫn chung về vai trò và phong cách. Nếu muốn áp dụng phong cách qua nhiều lượt, trong mẫu này cần truyền system prompt qua hàm gửi yêu cầu.

Mã ngắn hơn chưa chắc đúng hơn. Vẫn cần thử các trường hợp phù hợp như chuỗi rỗng, ký tự lặp và cách phân biệt chữ hoa, chữ thường. Ví dụ: nếu bản rút gọn tự coi “A” và “a” là cùng ký tự trong khi yêu cầu chưa nói vậy, cần làm rõ và kiểm thử thay vì chấp nhận vì ít dòng hơn.

Không nên rút ngắn bằng cách bỏ kiểm tra cần thiết hoặc âm thầm đổi hành vi. System prompt hướng dẫn mô hình, không phải cơ chế cưỡng chế mã chạy đúng; một lần minh họa thành công cũng không bảo đảm mọi lần đều cùng định dạng.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A concise Python role yields a one-line duplicate-character function that lowercases inputs, although case sensitivity was unspecified. What is appropriate?

A. Clarify case semantics and test; style instructions do not redefine behavior.

B. Accept because lowercasing is common.

C. Repeat “concise” and choose the shortest version.

D. Remove `Aa` from evaluation to compare only agreed cases.

**Question 2 — Choose two.** A wrapper accepts a system prompt, but one API branch omits it. Which TWO steps isolate inconsistent style?

A. Run the same task and settings through each branch to separate missing context from variation.

B. Raise temperature for consistency.

C. Inspect each branch's actual request payload.

D. Put the role in the client variable's name.

**Question 3 — Choose one.** A shorter function passes a duplicate-character example but fails on empty strings. Token use falls 60%. How should it be evaluated?

A. Check correctness on defined boundary cases, then compare costs among qualifying versions.

B. Exclude empty strings because the video does.

C. Accept an expert role and fix boundaries later.

D. Let brevity points offset correctness failures equally.

**Question 4 — Choose one.** Tasks vary by turn, while concise code with little introduction is always required. Which separation is clearest?

A. Rename the wrapper and omit model instructions.

B. Rely on an unsent previous short answer.

C. Keep shared style in `system` and specific functionality in each task.

D. Put every future task in the system prompt upfront.

**Question 5 — Choose two.** Which TWO conditions make a new duplicate-checking system role comparable with its baseline?

A. Use line count as the only metric.

B. Keep functional requirements and tests stable.

C. Report only cases improved by the new version.

D. Test empty, repeated, unique, and mixed-case strings under agreed semantics.

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
