# The text edit tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287760), sources/api-lessons/287760.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu công cụ chỉnh sửa văn bản có cấu trúc do Anthropic định nghĩa. Có bản mô tả công cụ không có nghĩa máy chủ Anthropic tự đọc hoặc sửa tệp trên máy bạn. Với loại công cụ do ứng dụng thực thi trong mẫu, ứng dụng vẫn phải viết mã xử lý và trả kết quả.

Các thao tác minh họa gồm xem tệp hoặc thư mục, đọc một phạm vi dòng, thay nội dung và tạo nội dung. Danh sách lệnh cùng phiên bản định nghĩa công cụ tùy mô hình; không nên lấy tính năng hoàn tác hoặc tên phiên bản cũ làm cam kết cho mọi mô hình hiện tại.

Trước khi sửa tệp có sẵn, đọc nội dung liên quan để biết trạng thái thật. Sau khi chạy thao tác hợp lệ, xem kết quả và phần khác biệt trước, sau khi sửa (diff).

Một khối `tool_use` mới thể hiện yêu cầu sửa, chưa chứng minh tệp đã thay đổi. Ứng dụng chịu trách nhiệm giới hạn tệp được truy cập, kiểm tra quyền, thực thi và xác minh kết quả.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An API requests a file edit, but the local file remains unchanged. What is missing?

A. Display `tool_use` as proof of a diff.

B. The host must execute the edit and return its actual result.

C. Increase tokens so the request contains the edited file.

D. Prompt the model to claim the edit succeeded.

**Question 2 — Choose one.** An agent plans to replace text read earlier, but the user has since changed the file. What reduces accidental overwrites?

A. Replace the whole file from model memory.

B. Reread relevant content, edit, and inspect the diff.

C. Check only the write command's exit code.

D. Use the old version to preserve the original plan.

**Question 3 — Choose two.** Which TWO responsibilities belong to a text-editor client-tool host?

A. Assume undo works identically in every tool version.

B. Delegate write authorization to the model because the provider defined the schema.

C. Restrict paths and access before execution.

D. Inspect execution results and verify changes afterward.

**Question 4 — Choose one.** The sample supports undo, but the target version does not advertise it. What is correct?

A. Verify supported commands and design recovery for the target environment.

B. Send the old undo command and interpret errors as rollback.

C. Ask the model to simulate undo with confirmation text.

D. Replace file reads with prompt memory.

**Question 5 — Choose two.** The edit tool reports success, but behavior is wrong. Which TWO checks distinguish execution success from task success?

A. Only the requested command name is supported.

B. The diff affects the right file and scope while preserving unrelated content.

C. Post-edit behavior meets the original requirements.

D. Only the final answer mentions the file path.

## Đáp án và giải thích

1. **B.** A sai: Yêu cầu thay đổi chưa là thay đổi đã xảy ra. B đúng: Client tool không tự chạy chỉ vì có định nghĩa. C sai: Đối số lớn hơn vẫn cần thực thi. D sai: Câu chữ không ghi tệp.

2. **B.** A sai: Tăng nguy cơ mất thay đổi chưa đọc. B đúng: Phải thao tác trên trạng thái thật và xác nhận phạm vi. C sai: Ghi thành công không chứng minh nội dung đúng. D sai: Nhất quán với dữ liệu cũ có thể phá sửa đổi mới.

3. **C, D.** A sai: Khả năng phụ thuộc định nghĩa/phiên bản. B sai: Nguồn schema không thay cơ chế quyền local. C đúng: Host là nơi kiểm soát tác động lên tệp. D đúng: Cần xác nhận nội dung đạt mục tiêu.

4. **A.** A đúng: Không dựa vào cam kết không có ở phiên bản dùng. B sai: Lỗi không chứng minh phục hồi. C sai: Không tác động trạng thái tệp. D sai: Ngữ cảnh không bảo đảm khôi phục chính xác trạng thái.

5. **B, C.** A sai: Hợp lệ yêu cầu chưa đủ. B đúng: Kiểm tra tác động nội dung. C đúng: Kiểm tra mục tiêu cuối. D sai: Nêu tên không chứng minh đã sửa đúng.

## Đối chiếu Bedrock

Nhà cung cấp định nghĩa cấu trúc công cụ chỉnh sửa, nhưng ứng dụng vẫn phải thực hiện đọc, ghi và giới hạn đường dẫn. Mã phiên bản và khả năng hoàn tác trong video không áp dụng cho mọi phiên bản editor. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text editor tool](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276767). Bản lưu: `sources/bedrock-lessons/276767.json`.

## Đối chiếu Vertex

Dù có sẵn định nghĩa editor, ứng dụng vẫn cần bộ thực thi và phạm vi tệp được phép. Tiền tố mã mô hình, phiên bản và lệnh hoàn tác trong ví dụ phụ thuộc mô hình; cần kiểm tra thay vì giả định cùng tập lệnh ở mọi nơi. Dùng chung câu hỏi.

Nguồn đối chiếu: [The text edit tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289180). Bản lưu: `sources/vertex-lessons/289180.json`.
