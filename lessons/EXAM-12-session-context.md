# Resume, fork và trạng thái qua ranh giới context

Nguồn: Exam Guide CCAR-F v1.0, mục 1.7, 5.1 và 5.4, trang PDF 8–9, 19–22. Câu hỏi tự biên soạn.

## Nội dung bài học


Tiếp tục phiên cũ (resume) phù hợp khi phần lớn ngữ cảnh còn đúng. Theo đề cương, `--resume <session-name>` chọn một phiên đã đặt tên; việc mở phiên mới rồi gửi lại câu hỏi giống nhau không phải tiếp tục phiên đó. Cú pháp thực tế cần đối chiếu phiên bản đang dùng.

Nếu mã đã thay đổi, chỉ rõ tệp nào đổi để tác nhân đọc lại phần ảnh hưởng. Khi quá nhiều kết quả cũ đã lỗi thời, phiên mới với bản tóm tắt có cấu trúc và nguồn hiện tại có thể phù hợp hơn. Tạo nhánh phiên (fork) giúp thử phương án khác từ trạng thái ban đầu, nhưng các nhánh không tự chia sẻ những kết quả mới. Cấu hình `fork_session` cũng cần kiểm tra theo thư viện triển khai.

Giữ các dữ kiện quyết định trong bản ghi riêng: mã đơn, số tiền, ngày, trạng thái và mong muốn cụ thể của khách. Với nhiều vấn đề, tổ chức theo từng vấn đề hoặc đơn hàng và đưa phần liên quan vào mỗi yêu cầu, bên cạnh lịch sử đã rút gọn.

Ví dụ: Qua nhiều lần tóm tắt, “hoàn 35%, giao trước ngày 12” có thể thành “khách muốn hoàn và giao sớm”. Điều kiện quan trọng đã mất. Ngược lại, giữ cả 40 trường từ một lần tra đơn khi chỉ 5 trường liên quan lại làm ngữ cảnh dài không cần thiết. Lọc đúng phần cần dùng, đồng thời giữ tham chiếu để lấy lại khi cần.

Đề cương gọi việc thông tin giữa đầu vào dài dễ bị bỏ sót là “lost in the middle”. Để giảm rủi ro, đưa phát hiện chính lên đầu, chia phần bằng tiêu đề rõ và yêu cầu bước trước trả dữ kiện, nguồn, ngày, vị trí, phương pháp cùng mức liên quan. Không chuyển toàn bộ văn bản dài và mọi lời lý giải sang bước sau. Cách tổ chức này hỗ trợ đọc hiểu, không bảo đảm mô hình luôn đọc đúng hai đầu.

Với Messages API, ngữ cảnh cần thiết, gồm các khối công cụ, phải thực sự nằm trong yêu cầu gửi lại. Lưu ở máy chủ hoặc trên đĩa chưa đủ.

Trong khám phá dự án dài, tác nhân con có thể giữ chi tiết tìm kiếm, còn bên điều phối giữ tổng quan. Ghi phát hiện và đường dẫn vào sổ ghi chú (scratchpad). Lưu trạng thái từng tác nhân và một tệp danh mục (manifest) chỉ nơi tìm để phục hồi sau sự cố. Khi khởi động lại, phải tải và đưa phần trạng thái cần thiết vào ngữ cảnh.

Nếu câu trả lời chuyển từ dẫn đúng lớp mã đã tìm sang “thường hệ thống sẽ…”, hoặc mâu thuẫn với phát hiện trước, hãy kiểm tra sự suy giảm ngữ cảnh. Giao câu hỏi cụ thể cho từng nhánh, tổng hợp theo giai đoạn và chuyển kết quả cần thiết sang giai đoạn sau. Trước khi dùng `/compact` để rút gọn, giữ dữ kiện quan trọng có cấu trúc và kiểm tra bản tóm tắt không làm mất chúng.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** An old investigation session keeps citing files changed by a major refactor. How can work continue with less stale context while preserving the objective?

A. Start a new session with a sourced summary and verify current files.

B. Trust old conclusions because they were checked previously.

C. Reload the entire old transcript for more detail.

D. Delete only the final answer while retaining stale tool results.

**Question 2 — Choose two.** A multi-agent system must recover after a crash without repeating completed work. Which TWO elements are needed?

A. A “continue” message without state.

B. Structured state at a known location and a manifest identifying artifacts and step status.

C. An explicit summary and required facts loaded into the restarted agent's context.

D. An old session ID assumed to restore all context automatically.

**Question 3 — Choose one.** After three compactions, “refund 35% of order A before the 12th” becomes “customer wants a refund soon.” Which change protects business facts?

A. Increase the prose summary length.

B. Ask the model to repeat the amount from memory on every turn.

C. Store canonical facts in structured case state and reload them when needed.

D. Put the whole conversation in tool names to avoid compaction.

**Question 4 — Choose one.** After a crash, the manifest says a payment request was sent but has no success confirmation. What should happen before resubmission?

A. Mark it successful because it was submitted.

B. Resubmit immediately because no response was received.

C. Use a new transaction ID to avoid a naming collision.

D. Check the target system using the transaction identifier and idempotency rules.

**Question 5 — Choose two.** A handoff summary includes findings from a previous session. Which TWO items help a new agent identify what needs rechecking?

A. Sources or paths with the revision or time checked.

B. Unverified points, assumptions, and unfinished work.

C. Only one confidence score for the entire summary.

D. The previous agent's name instead of evidence sources.

## Đáp án và giải thích

1. **A.** A chuyển tri thức cần thiết và kiểm tra tính hiện hành. B coi bằng chứng cũ là vĩnh viễn. C có thể tăng nhiễu cũ; D không loại được dữ liệu công cụ đang gây sai.

2. **B, C.** B cung cấp điểm phục hồi, C đưa thông tin vào quá trình suy luận mới. A thiếu trạng thái; D không chứng minh context hoặc artifact đã được tải lại.

3. **C.** C tách facts chính xác khỏi phần tóm tắt dễ mất chi tiết. A giảm nguy cơ nhưng không tạo nơi lưu chuẩn; B có thể củng cố số nhớ sai; D lạm dụng metadata và không giải quyết quản lý trạng thái.

4. **D.** D phân biệt gửi yêu cầu với hoàn tất tác động. A có thể báo thành công sai; B có thể thực thi hai lần; C đổi ID còn có thể vô hiệu cơ chế chống lặp.

5. **A, B.** A cho biết bằng chứng có thể lỗi thời; B phân biệt đã biết và chưa biết. C không xác định phần cần kiểm tra. D không chứng minh tính đúng hay tính hiện hành của phát hiện.
