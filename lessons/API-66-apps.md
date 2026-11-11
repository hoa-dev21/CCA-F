# Ví dụ tác nhân AI thực tế

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287787), sources/api-lessons/287787.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Nội dung bài học


Bài học dùng Claude Code và khả năng điều khiển giao diện máy tính (computer use) để giới thiệu ứng dụng AI thực hiện nhiều bước. Điểm chung là kết hợp mô hình với công cụ, thực hiện thao tác và quan sát kết quả để chọn bước tiếp theo.

Claude Code làm việc với tệp, lệnh và quy trình phát triển phần mềm. Computer use thao tác qua giao diện. Hai cách khác nhau ở nơi hành động, nhưng đều cần biết thao tác vừa làm có đạt kết quả mong muốn hay không.

Ví dụ: Sau khi yêu cầu sửa tệp, cần xem tệp đã thay đổi đúng chưa. Sau thao tác trên giao diện, cần xem trạng thái mới thay vì chỉ giả định việc bấm nút đã thành công.

Đây là bài định hướng trước phần tác nhân AI. Theo đề cương đã lưu, chi tiết computer use nằm ngoài phạm vi thi; nguyên tắc kết hợp công cụ và kiểm chứng kết quả vẫn hữu ích. Bài học mô tả cách hoạt động, không thực hiện thao tác máy tính hay cài ứng dụng thay người học.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An agent clicks Save and claims completion while a confirmation dialog remains open. What is missing?

A. Switch to a nonexistent CLI interface.

B. A longer prompt explaining that Save usually works.

C. Click the same coordinates again despite the changed UI.

D. Observe the result and verify the target state.

**Question 2 — Choose two.** Which TWO principles apply to both file-tool agents and UI agents?

A. Choose next steps from actual results and handle errors within permissions.

B. Treat a tool name as proof of task success.

C. Use coordinates and file paths interchangeably.

D. Define target states and verify post-action evidence.

**Question 3 — Choose one.** A team measures task completion by tool-call count after watching demos. What additional measure is essential?

A. The number of tool types used.

B. The proportion of syntactically valid tool results.

C. Explanation length after each call.

D. Objective-based success criteria tied to verified final state.

**Question 4 — Choose one.** A repository has suitable file and shell tools for edits and tests. Should the team switch to UI automation because a demo looked impressive?

A. Use the existing verifiable file-and-command workflow.

B. Use UI screenshots as proof that all code changes are correct.

C. Choose whichever product appeared last in the introduction.

D. Have both methods edit the same files simultaneously.

**Question 5 — Choose two.** Under the stored study blueprint, computer use is orientation material outside detailed exam priorities. Which TWO uses remain valuable?

A. Learn orchestration, observation, and verification principles.

B. Spend most study time memorizing demo button coordinates.

C. Allocate time by the blueprint rather than weighting every demo feature equally.

D. Treat watching two successful demos as completing your own exercises.

## Đáp án và giải thích

1. **D.** A sai: Không thể suy rằng đường CLI khả dụng; vấn đề trực tiếp là kiểm chứng kết quả. B sai: Mô tả kỳ vọng không thay quan sát trạng thái hiện tại. C sai: Lặp mù có thể tác động sai phần tử và không giải quyết thiếu quan sát. D đúng: Lời gọi thao tác thành công không chứng minh mục tiêu nghiệp vụ đã đạt.

2. **A, D.** A đúng: Agent cần phản hồi môi trường thay vì chỉ thực hiện kịch bản đã tưởng tượng. B sai: Tên/lời gọi không xác nhận kết quả thực thi hay mục tiêu nghiệp vụ. C sai: Hai lớp thao tác có hợp đồng dữ liệu khác nhau, không thể thống nhất bằng giả định này. D đúng: Cả file lẫn UI đều cần điều kiện để biết nhiệm vụ đã đạt.

3. **D.** A sai: Đa dạng công cụ không đồng nghĩa hiệu quả hoặc hoàn tất. B sai: Lời gọi hợp lệ vẫn có thể không đạt mục tiêu, như hộp thoại lưu chưa được xác nhận. C sai: Văn bản dài không chứng minh thay đổi môi trường đúng. D đúng: Đếm hành động đo hoạt động, không đo tác vụ có đạt kết quả đúng.

4. **A.** A đúng: Kiến trúc nên dựa vào công việc và phản hồi khả dụng, không chỉ hình thức demo. B sai: Ảnh không thay thế kiểm tra diff và hành vi chương trình. C sai: Thứ tự trình bày không là tiêu chí phù hợp kỹ thuật. D sai: Hai tác nhân ghi cùng vùng có thể gây xung đột, không tạo kiểm chứng độc lập.

5. **A, C.** A đúng: Đó là kiến thức thiết kế có thể chuyển sang các hệ agent khác. B sai: Tọa độ cụ thể vừa phụ thuộc UI vừa không phải nguyên tắc kiến trúc cần ưu tiên. C đúng: Mức ưu tiên thi cần gắn phạm vi đã xác định. D sai: Quan sát minh họa khác với tự triển khai và xác minh trong môi trường riêng.

## Đối chiếu phụ đề chính thức

Theo hồ sơ phụ đề, phần tác nhân AI bắt đầu từ Claude Code và Computer Use, xem cách thiết kế và thực hành rồi rút ra nguyên tắc. Tên sản phẩm không thay việc xác định vòng công cụ, cách quan sát và đánh giá của hệ thống. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents overview](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276804). Bản lưu: `sources/bedrock-media/276804.json`.

## Đối chiếu phụ đề chính thức

Bài giới thiệu Claude Code trên dòng lệnh và Computer Use làm hai ví dụ để phân tích, thực hành và rút kinh nghiệm thiết kế tác nhân. Đây là phần định hướng, không phải bằng chứng đã chạy các ứng dụng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Anthropic apps](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289230). Bản lưu: `sources/vertex-media/289230.json`.
