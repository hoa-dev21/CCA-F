# Chọn nơi chạy tự động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486935), sources/code-lessons/486935.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi muốn Claude chạy tự động, cần chọn nơi chạy phù hợp với dữ liệu và mức điều khiển bạn cần. Bài học phân biệt ba cách:

- Routine: tác vụ chạy trên hạ tầng do dịch vụ quản lý.
- Headless: chạy không có giao diện trò chuyện tương tác, trong mã lệnh hoặc quy trình tự động do bạn quản lý.
- Agent SDK: bộ thư viện để tích hợp luồng làm việc của tác nhân AI vào ứng dụng Python hoặc TypeScript.

Ví dụ: Nếu nhiệm vụ cần dữ liệu chỉ truy cập được trong mạng nội bộ, chạy headless trong môi trường của nhóm có thể phù hợp hơn một tác vụ trên đám mây không có quyền truy cập nguồn đó.

Trong ví dụ dòng lệnh, `-p` hoặc `--print` dùng cho cách chạy không tương tác. Kết quả có thể được chuyển sang bước xử lý tiếp theo. Khi bước sau cần dữ liệu có cấu trúc, bài kết hợp `--output-format json` với `--json-schema`, tức mô tả cấu trúc dữ liệu phải trả về. Dữ liệu kết quả nằm trong trường `structured_output`; toàn bộ phản hồi JSON còn có thông tin khác, nên không được coi tất cả là dữ liệu nghiệp vụ.

Với công việc nhiều giai đoạn, có thể lưu mã định danh phiên (session ID) để tiếp tục đúng phiên. Trước khi dùng lại ngữ cảnh, kiểm tra xem dữ liệu nguồn đã thay đổi hay chưa.

Bài còn nhắc đến chế độ khởi chạy tối giản (bare) và các tính năng đang thử nghiệm. Môi trường khởi chạy nhất quán không bảo đảm AI trả lời giống hệt ở mọi lần. Các quy tắc tự nạp cấu hình và giới hạn sản phẩm cần được xác minh theo phiên bản.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A job needs internal-network data and custom orchestration unavailable to the cloud routine infrastructure. What deployment fits?

A. Put the internal hostname in a cloud prompt.

B. Run headlessly in a team-managed environment with source access.

C. Use interactive CI and wait for login each run.

D. Export all data without reviewing access constraints.

**Question 2 — Choose one.** A CLI JSON envelope contains session metadata and `structured_output`. How should an adapter validate findings for downstream decisions?

A. Check execution status and validate findings inside `structured_output`.

B. Validate the entire envelope as the findings schema.

C. Take the last stdout line.

D. Treat a session ID as proof of success.

**Question 3 — Choose two.** A multistage workflow resumes sessions while code may change between runs. Which TWO actions are needed?

A. Save only the final summary and infer session identity.

B. Preserve session ID and state for correct resumption.

C. Trust every old tool result if the ID is unchanged.

D. Revalidate changed source data before relying on old conclusions.

**Question 4 — Choose one.** A TypeScript application needs integrated agent orchestration, event handling, and business logic. Which option fits?

A. Separate shell commands whose logs the UI combines.

B. A routine without access to the application runtime.

C. An Agent SDK integrated into application code.

D. An interactive session with prose parsed as a protocol.

**Question 5 — Choose two.** Two identically configured minimal-startup runs differ slightly. Which TWO conclusions are reasonable?

A. Consistent setup does not guarantee identical model output.

B. Variation proves startup settings were ignored.

C. Identical command lines remove the need for quality evaluation.

D. Behavior tests and version-specific contract checks remain necessary.

## Đáp án và giải thích

1. **B.** B đáp ứng nơi chạy và quyền truy cập cần thiết. A không tạo kết nối mạng. C không phù hợp tác vụ tự động không người trực. D thay đổi ranh giới dữ liệu mà chưa xét yêu cầu tổ chức.

2. **A.** A phân biệt trạng thái thực thi với dữ liệu nghiệp vụ. B đọc nhầm tầng giao thức. C phụ thuộc cách trình bày log. D có phiên không đồng nghĩa đã có kết quả hợp lệ.

3. **B, D.** B xác định phiên, D bảo vệ tính hiện hành của bằng chứng. A không bảo đảm nối đúng trạng thái. C đồng nhất danh tính phiên với độ mới của nội dung.

4. **C.** C phù hợp tích hợp lập trình vào sản phẩm. A có thể dùng cho script đơn giản nhưng không đáp ứng trực tiếp nhu cầu vòng điều phối trong ứng dụng. B không đạt ràng buộc môi trường. D phụ thuộc tương tác và văn phong thay vì giao diện tích hợp.

5. **A, D.** A phân biệt tái lập môi trường và tính xác định đầu ra. D xác nhận điều sản phẩm cần. B suy nguyên nhân duy nhất từ một hiện tượng. C bỏ đo kết quả dù môi trường giống nhau.
