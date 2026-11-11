# Kiểm thử giao diện qua phản hồi trực quan

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276807), sources/bedrock-lessons/276807.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use là cách để mô hình quan sát giao diện và yêu cầu ứng dụng thực hiện thao tác như chụp màn hình, bấm chuột, gõ hoặc cuộn. Sau mỗi thao tác, mô hình dùng trạng thái mới để chọn bước tiếp theo.

Ví dụ kiểm thử trong bài là tính năng gợi ý tên tài liệu: gõ `@`, chọn bằng Enter, rồi dùng Backspace và xem vị trí danh sách gợi ý. Danh sách xuất hiện chưa đủ để kết luận đúng nếu nó che mất ô nhập.

Mỗi trường hợp kiểm thử cần trạng thái ban đầu, các bước, kết quả mong đợi và bằng chứng quan sát. Khi cần, tải lại trang hoặc chuẩn bị lại dữ liệu giữa các trường hợp để tránh ảnh hưởng lẫn nhau. Ghi rõ bước đạt, bước không đạt và phần chưa quan sát được.

Mẫu chạy môi trường máy tính trong container. Điều này giúp giới hạn phạm vi ảnh hưởng nhưng không tự loại bỏ rủi ro từ dữ liệu, mạng, tài khoản thật hoặc thao tác có hậu quả. Vẫn cần giới hạn tài nguyên và xác minh trước hành động khó đảo ngược; không coi nhận định “không có rủi ro” trong ví dụ là bảo đảm chung.

## Tự kiểm tra

**Question 1 — Choose one.** Typing `@` opens suggestions that obscure the input, but the agent marks the UI test passed. What criterion is missing?

A. Suggestion selection and popup placement against requirements.

B. Any changed pixels after typing.

C. A successful keyboard-tool result.

D. The correct keyboard-tool name.

**Question 2 — Choose two.** Backspace fails only after an Enter test. Which TWO actions distinguish application defects from test setup problems?

A. Record initial state and reset data between cases.

B. Replace failures with the last successful run.

C. Press Backspace repeatedly until the screenshot matches.

D. Record actions, expected results, and observed evidence per case.

**Question 3 — Choose one.** A test container uses a real account and can send external email. What follows despite its sandbox label?

A. Deleting the container reverses sent messages.

B. A test-like screenshot removes recipient checks.

C. Accounts, network access, and consequential actions still need task-appropriate limits.

D. The container isolates every external consequence.

**Question 4 — Choose two.** A dialog obscures the final form state, so saved data is unverified. Which TWO reports are appropriate?

A. Declare success because clicking Submit did not fail.

B. Preserve dialog evidence and identify the next permitted verification step.

C. Distinguish submission attempted from storage not yet verified.

D. Declare data loss solely because the record is hidden.

**Question 5 — Choose one.** Which plan makes an `@`, Enter, Backspace, and popup-placement test reproducible?

A. Record initial state, actions, and checkpoint evidence.

B. Keep only the final screenshot.

C. Keep only tool-call counts.

D. Record only “works normally.”

## Đáp án và giải thích

1. **A.** A đánh giá yêu cầu sản phẩm. B chỉ thấy thay đổi giao diện; C và D kiểm tra thao tác kỹ thuật, không chứng minh trải nghiệm đúng.

2. **A, D.** A kiểm soát ảnh hưởng giữa ca; D cho phép tái hiện. C làm đổi kịch bản không kiểm soát; B che tính phụ thuộc và bỏ bằng chứng lỗi.

3. **C.** C xét tài nguyên và tác động thực tế. D nhầm cô lập tiến trình với dịch vụ ngoài; A không thu hồi email; B hình thức giao diện không chứng minh tài khoản hoặc người nhận an toàn.

4. **B, C.** C phân biệt hành động và kết quả; B giúp tiếp tục kiểm chứng. A kết luận thành công quá sớm; D suy thất bại từ thiếu quan sát.

5. **A.** A nối hành động với quan sát theo tiêu chí. B bỏ mất lỗi trung gian; C đo hoạt động thay vì hành vi; D thiếu dữ liệu để tái hiện hoặc kiểm tra độc lập.

## Đối chiếu phụ đề chính thức

Ví dụ kiểm thử gợi ý tài liệu dùng `@`, Enter và Backspace rồi quan sát danh sách gợi ý lệch vị trí. Báo đạt hoặc không đạt phải theo tiêu chí cụ thể. Trình duyệt trong Docker vẫn có thể tác động bên ngoài qua tài khoản và dịch vụ, nên không coi là loại bỏ mọi rủi ro. Dùng chung câu hỏi.

Nguồn đối chiếu: [Computer use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289233). Bản lưu: `sources/vertex-media/289233.json`.
