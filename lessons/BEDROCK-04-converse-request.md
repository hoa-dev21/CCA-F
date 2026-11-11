# Adapter Converse

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276719), sources/bedrock-lessons/276719.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Mẫu Python dùng thư viện boto3 để gọi Bedrock Runtime qua Converse. Tin nhắn có vai trò người nói (role), còn nội dung là danh sách các khối (blocks). Trong phản hồi mẫu, tin nhắn kết quả nằm ở `output.message`.

Cấu trúc này khác Anthropic Messages API. Khi chuyển nhà cung cấp, cần sửa phần chuyển đổi yêu cầu và phản hồi, còn gọi là adapter; không sao chép tên trường của API khác rồi kỳ vọng đọc được dữ liệu.

Mã mô hình và khả năng truy cập phụ thuộc môi trường, vùng và tài khoản. Nếu dịch vụ báo không tìm thấy mô hình, hãy kiểm tra mã mô hình hoặc inference profile, vùng hỗ trợ và quyền truy cập trước khi sửa prompt. Inference profile trong bài hỗ trợ định tuyến theo cấu hình được phép, không tự bỏ các ràng buộc về vùng hoặc nơi dữ liệu được xử lý.

Ví dụ đơn giản lấy khối văn bản đầu tiên để hiển thị. Khi dùng công cụ hoặc nhiều loại nội dung, cần giữ tin nhắn đầy đủ cho lịch sử và xử lý tiếp. Các mã định danh, vùng và phiên bản thư viện trong video cần được kiểm tra khi thực hành.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** After migration to Converse, code still reads the direct API's `response.content`. What is appropriate?

A. Wrap everything in `content` while retaining old block assumptions.

B. Change requests only because calls succeed.

C. Update the Converse adapter, including the sample's `output.message` path.

D. Read the first string anywhere in the JSON.

**Question 2 — Choose two.** Production returns text and tool blocks, while a sample displays only the first text block. Which TWO changes are needed?

A. Retain the complete message for history and further processing.

B. Always store displayed text only.

C. Handle block types according to the response contract.

D. Flatten tool names into prose and discard structure.

**Question 3 — Choose one.** A model is missing in the selected environment although the notebook worked elsewhere. What should be checked first?

A. Switch regions and assume account configuration matches.

B. The active model ID or profile, region, and account permissions.

C. Copy a similar family ID without checking profiles.

D. Retry with backoff before checking access.

**Question 4 — Choose one.** A team assumes inference profiles eliminate data-location restrictions. What should an architect do?

A. Accept because abstract names have no region.

B. Infer routing solely from the SDK region.

C. Check request success only.

D. Compare profile routing with data-handling constraints.

**Question 5 — Choose two.** Which TWO tests matter when replacing a direct Anthropic adapter with Converse?

A. Mixed blocks and tool-interaction history remain intact.

B. Only a greeting returns nonempty text.

C. Stop and error states reach orchestration correctly.

D. Local variable names match across implementations.

## Đáp án và giải thích

1. **C.** C cập nhật đúng tầng adapter. A đổi vỏ ngoài nhưng chưa ánh xạ nội dung/blocks. B thành công request không chứng minh parser response tương thích. D lấy chuỗi tùy ý có thể đọc nhầm metadata hoặc mất block.

2. **A, C.** A bảo toàn giao thức, C xử lý đúng loại nội dung. B có thể mất yêu cầu công cụ. D đổi cấu trúc thành văn bản không bảo toàn ID/tham số và quan hệ kết quả.

3. **B.** B kiểm tra các điều kiện truy cập thực. A sửa một yếu tố nhưng bỏ khác biệt tài khoản; C suy từ ví dụ/model family; D xử lý như lỗi tạm thời dù chưa có bằng chứng.

4. **D.** D kiểm tra cấu hình và yêu cầu thật. A trừu tượng hóa không xóa nghĩa vụ vùng. B vùng client không đủ mô tả routing. C thành công kỹ thuật không chứng minh đáp ứng mọi yêu cầu tổ chức.

5. **A, C.** A kiểm tra cấu trúc phức tạp, C kiểm tra điều khiển workflow. B là smoke test quá hẹp để chứng minh tương thích. D tên biến không quyết định hợp đồng runtime.
