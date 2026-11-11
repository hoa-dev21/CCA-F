# Fine grained tool calling

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/313160), sources/api-lessons/313160.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Bài học giới thiệu cách nhận đầu vào của công cụ theo từng phần khi mô hình đang tạo, gọi là streaming. Nhờ đó, giao diện có thể hiển thị tiến độ sớm hơn thay vì chờ toàn bộ nội dung.

Dữ liệu đang truyền chưa chắc đã hoàn chỉnh. Ví dụ: bạn mới nhận nửa chuỗi JSON thì việc chưa đọc được JSON không có nghĩa kết quả cuối chắc chắn lỗi. Bộ xử lý cần biết đang nhận dữ liệu tạm hay đã kết thúc.

Cũng cần tách việc hiển thị với việc thực thi. Nếu công cụ chuyển tiền mới nhận được trường số tiền nhưng chưa nhận đủ đối số, không được chạy ngay. Phải đợi đầu vào hoàn chỉnh, đọc được cấu trúc và kiểm tra các điều kiện, quyền cần thiết.

Nhận dữ liệu sớm hơn đòi hỏi xử lý tốt trạng thái chưa hoàn tất. Tên sự kiện, tùy chọn và cách giữ dữ liệu chờ trong video thuộc phiên bản lúc giảng; khi triển khai phải đối chiếu API và thư viện đang dùng. Chi tiết streaming nằm ngoài phạm vi đề cương thi đã lưu.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A transfer stream contains `amount=500` but no destination account yet. How can the UI remain responsive safely?

A. Execute using the latest account and revise later.

B. Execute as soon as any JSON prefix parses.

C. Confirm the transfer while awaiting remaining data.

D. Show progress, then execute only after arguments are complete and validated.

**Question 2 — Choose one.** A parser errors on half a streamed JSON string. What is the best interpretation?

A. Add closing braces and execute repaired arguments.

B. Remove structural validation.

C. The data is provisional; inspect the final stream state.

D. Immediately rerun the tool as a failed request.

**Question 3 — Choose two.** Arguments for a write have been assembled from a stream. Which TWO checks still precede the side effect?

A. Skip validation because the model received a schema.

B. Confirm complete, structurally valid inputs.

C. Check permissions and business preconditions.

D. Treat fully displayed text as approval.

**Question 4 — Choose one.** Old event names prevent recognizing completion with a new SDK. What should be done?

A. Replace state handling with brace counting.

B. Use one short timeout for all requests.

C. Verify events and completion semantics for the installed version.

D. Execute on every delta as a separate call.

**Question 5 — Choose two.** Which TWO timing measures should be distinguished when evaluating tool streaming?

A. Delta count as business quality.

B. Time until the user first sees progress.

C. First token time as tool-completion time.

D. Time until complete validated arguments are safe to execute.

## Đáp án và giải thích

1. **D.** A sai: Dùng đầu vào suy đoán có thể chuyển sai nơi. B sai: Một phần parse được chưa chứng minh đối số cuối hoàn chỉnh. C sai: Lời xác nhận đi trước kết quả thực thi. D đúng: Hiển thị sớm không đồng nghĩa được phép tạo tác động.

2. **C.** A sai: Sửa tùy tiện có thể làm sai ý nghĩa còn đang truyền. B sai: Đầu vào cuối vẫn cần đọc và kiểm tra. C đúng: JSON chưa hoàn chỉnh có thể là trạng thái bình thường. D sai: Có thể phát sinh gọi trùng trước khi biết kết quả cuối.

3. **B, C.** A sai: Mô tả không thay kiểm tra tại bộ thực thi. B đúng: Đủ dữ liệu phải được xác định bằng trạng thái giao thức. C đúng: Đúng JSON không đồng nghĩa được phép thực hiện. D sai: Hiển thị không là cơ chế cấp quyền.

4. **C.** A sai: JSON cân bằng không chứng minh không còn sự kiện. B sai: Chậm dữ liệu có thể bị hiểu nhầm là hoàn tất. C đúng: Lỗi thuộc hợp đồng giao thức thực tế. D sai: Các phần có thể thuộc cùng một lời gọi.

5. **B, D.** A sai: Phân mảnh truyền dữ liệu không đo độ đúng. B đúng: Streaming có thể cải thiện phản hồi cảm nhận. C sai: Đầu vào còn đang được sinh. D đúng: Đây là mốc khác hiển thị ban đầu.
