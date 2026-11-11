# Adapter Converse

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276719), sources/bedrock-lessons/276719.json. Tóm tắt và câu hỏi tự biên soạn; cloud configuration chi tiết đọc bổ trợ, không thay trọng tâm Exam Guide.

## Nội dung bài học


Mẫu Python dùng thư viện boto3 để gọi Bedrock Runtime qua Converse. Tin nhắn có vai trò người nói (role), còn nội dung là danh sách các khối (blocks). Trong phản hồi mẫu, tin nhắn kết quả nằm ở `output.message`.

Cấu trúc này khác Anthropic Messages API. Khi chuyển nhà cung cấp, cần sửa phần chuyển đổi yêu cầu và phản hồi, còn gọi là adapter; không sao chép tên trường của API khác rồi kỳ vọng đọc được dữ liệu.

Mã mô hình và khả năng truy cập phụ thuộc môi trường, vùng và tài khoản. Nếu dịch vụ báo không tìm thấy mô hình, hãy kiểm tra mã mô hình hoặc inference profile, vùng hỗ trợ và quyền truy cập trước khi sửa prompt. Inference profile trong bài hỗ trợ định tuyến theo cấu hình được phép, không tự bỏ các ràng buộc về vùng hoặc nơi dữ liệu được xử lý.

Ví dụ đơn giản lấy khối văn bản đầu tiên để hiển thị. Khi dùng công cụ hoặc nhiều loại nội dung, cần giữ tin nhắn đầy đủ cho lịch sử và xử lý tiếp. Các mã định danh, vùng và phiên bản thư viện trong video cần được kiểm tra khi thực hành.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Sau chuyển sang Converse, request thành công nhưng code vẫn đọc response.content của API cũ. Sửa phù hợp nhất?

A. Bọc JSON trả về trong một trường content nhưng giữ nguyên các giả định block cũ.

B. Chỉ sửa request cho Converse; giữ parser response cũ vì lời gọi đã thành công.

C. Sửa adapter Converse, gồm output.message trong mẫu.

D. Đọc chuỗi đầu tiên tìm được ở bất kỳ trường nào của JSON.

**Câu 2 — Chọn hai.** Ví dụ chỉ hiển thị khối text đầu tiên; production có text và tool-use blocks. Hai thay đổi nào cần?

A. Giữ tin nhắn đầy đủ để lưu lịch sử và xử lý tiếp.

B. Chỉ lưu text hiển thị để giảm context ở mọi trường hợp.

C. Phân loại/xử lý các block theo hợp đồng thay vì coi mọi block là text.

D. Ghép tên tool vào text rồi bỏ block có cấu trúc.

**Câu 3 — Chọn một.** Service báo model không tồn tại trong môi trường được chọn; cùng notebook từng chạy ở tài khoản khác. Kiểm tra nào ưu tiên?

A. Đổi sang region notebook đã chạy và coi cấu hình tài khoản hiện tại là tương đương.

B. ID/profile, vùng và quyền tài khoản đang dùng.

C. Sao chép ID từ ví dụ cùng model family mà không kiểm tra profile hiện hành.

D. Retry cùng cấu hình theo exponential backoff trước khi kiểm tra quyền truy cập.

**Câu 4 — Chọn một.** Nhóm dùng inference profile và cho rằng từ đó mọi ràng buộc nơi xử lý dữ liệu đều không còn. Kiến trúc sư nên làm gì?

A. Chấp nhận vì profile là một tên trừu tượng không gắn vùng.

B. Dựa riêng vào vùng SDK để kết luận routing.

C. Chỉ kiểm tra request thành công, vì lỗi policy sẽ luôn được trả ngay.

D. Đối chiếu routing profile với ràng buộc dữ liệu.

**Câu 5 — Chọn hai.** Khi thay adapter Anthropic trực tiếp bằng Converse, hai kiểm thử nào có giá trị nhất?

A. Request/response có nhiều block và lịch sử tool interaction được bảo toàn.

B. Chỉ một prompt “xin chào” trả text không rỗng.

C. Các trạng thái kết thúc/lỗi được chuyển đúng cho hệ điều phối.

D. So sánh tên biến local giữa hai implementation phải giống nhau.

## Đáp án và giải thích

1. **C.** C cập nhật đúng tầng adapter. A đổi vỏ ngoài nhưng chưa ánh xạ nội dung/blocks. B thành công request không chứng minh parser response tương thích. D lấy chuỗi tùy ý có thể đọc nhầm metadata hoặc mất block.

2. **A, C.** A bảo toàn giao thức, C xử lý đúng loại nội dung. B có thể mất yêu cầu công cụ. D đổi cấu trúc thành văn bản không bảo toàn ID/tham số và quan hệ kết quả.

3. **B.** B kiểm tra các điều kiện truy cập thực. A sửa một yếu tố nhưng bỏ khác biệt tài khoản; C suy từ ví dụ/model family; D xử lý như lỗi tạm thời dù chưa có bằng chứng.

4. **D.** D kiểm tra cấu hình và yêu cầu thật. A trừu tượng hóa không xóa nghĩa vụ vùng. B vùng client không đủ mô tả routing. C thành công kỹ thuật không chứng minh đáp ứng mọi yêu cầu tổ chức.

5. **A, C.** A kiểm tra cấu trúc phức tạp, C kiểm tra điều khiển workflow. B là smoke test quá hẹp để chứng minh tương thích. D tên biến không quyết định hợp đồng runtime.
