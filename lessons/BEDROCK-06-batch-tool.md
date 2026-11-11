# Gom lời gọi khác với chạy đồng thời

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276766), sources/bedrock-lessons/276766.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài tạo công cụ `batch_tool` nhận một danh sách các lời gọi, mỗi lời gọi có tên công cụ và đầu vào. Claude có thể gửi cả nhóm trong một lần yêu cầu, giúp giảm số lượt trao đổi với mô hình.

Gom lời gọi không đồng nghĩa chạy đồng thời. Trong mã mẫu, `run_batch` dùng vòng `for` và gọi `run_tool` lần lượt. Muốn chạy song song thật sự, ứng dụng phải có cách thực thi tương ứng, quản lý lỗi và ghép kết quả đúng với từng lời gọi.

Chỉ chạy đồng thời các thao tác độc lập. Nếu B cần kết quả của A, phải thực hiện A trước hoặc dùng bộ điều phối hiểu rõ quan hệ phụ thuộc đó. Việc hai lời gọi nằm trong cùng danh sách không làm mất phụ thuộc dữ liệu.

`batch_tool` tự viết trong bài khác Message Batches API xử lý các yêu cầu theo lô bất đồng bộ. Hai cơ chế có mục đích và vòng đời riêng. Với mỗi thao tác trong nhóm, vẫn cần kiểm tra công cụ được phép dùng, đầu vào, quyền và kết quả.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** `batch_tool` receives four calls, but `run_batch` awaits `run_tool` inside a loop. Logs show one active call. What is correct?

A. An input array proves parallel execution.

B. Requests are grouped, but execution remains sequential.

C. The provider's batch API is limiting concurrency.

D. Only prompts affect execution speed.

**Question 2 — Choose one.** Two independent lookups and an update depending on both appear in one list. How should they run?

A. All together because they form one batch.

B. Update first while lookups run.

C. Parallelize lookups, then validate results before updating.

D. Update with predictions and check afterward.

**Question 3 — Choose two.** Which TWO mechanisms are needed besides concurrent launch of independent calls?

A. Stable result and error correlation per invocation.

B. Assume completion order equals input order.

C. Per-action permission and input checks with separate error handling.

D. Mark remaining calls successful if one fails.

**Question 4 — Choose one.** A team applies Message Batches API polling semantics to a local `batch_tool`. What distinction matters?

A. Both share the word batch, so lifecycles match.

B. Every local batch tool is an official API wrapper.

C. Only SDK names differ.

D. A grouped-invocation tool differs from an asynchronous request-batch API.

**Question 5 — Choose two.** Two batch lookups succeed, but a write times out with unknown status. Which TWO actions are appropriate?

A. Preserve successful lookups and the write's unknown state.

B. Retry everything unconditionally.

C. Check status or idempotency before retrying the write.

D. Delete all results and declare complete failure.

## Đáp án và giải thích

1. **B.** B phân biệt gom lời gọi và chạy đồng thời. A lấy cấu trúc dữ liệu làm bằng chứng concurrency. C nhầm batch_tool tự viết với dịch vụ batch. D cách thực thi host quyết định lịch chạy.

2. **C.** C tôn trọng đồ thị phụ thuộc. A/B không có đầu vào cập nhật. D có thể gây tác động từ dữ liệu sai trước khi biết kết quả thực.

3. **A, C.** A tránh ghép nhầm khi thứ tự thay đổi; C giữ hợp đồng và trạng thái từng tác động. B không đúng với concurrency. D báo thành công không có bằng chứng.

4. **D.** D xét cơ chế và vòng đời thực. A/B/C suy tương đương từ tên gọi; bài dùng một công cụ tự viết, không chứng minh nó có job lifecycle của dịch vụ batch.

5. **A, C.** A bảo toàn dữ liệu hữu ích và không báo sai; C giảm nguy cơ tác động lặp. B có thể ghi hai lần. D làm mất phần thành công mà không giải quyết trạng thái ghi chưa rõ.

## Đối chiếu Vertex

Mẫu Vertex cũng chạy vòng `for` tuần tự, chưa thực thi đồng thời và không phải Message Batches API. Schema khai báo `arguments` là đối tượng nhưng mã `json.loads(invocation.arguments)` cần chuỗi: phải thống nhất trước khi chạy. Giới hạn kích thước nhóm, kiểm tra từng lời gọi, quyền và lỗi một phần; không cho các batch tự lồng vô hạn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The batch tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289189). Bản lưu: `sources/vertex-lessons/289189.json`.
