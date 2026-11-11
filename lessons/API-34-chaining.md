# Chia bước theo phụ thuộc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287800), sources/api-lessons/287800.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Chaining là chia nhiệm vụ thành các bước nối tiếp, trong đó kết quả bước trước trở thành đầu vào cho bước sau. Giữa các lần gọi mô hình, ứng dụng có thể thêm xử lý hoặc kiểm tra bằng mã.

Ví dụ: Bước đầu tạo bản nháp bài viết. Bước sau nhận chính bản nháp đó để rà soát độ dài, cấu trúc và yêu cầu còn thiếu, rồi sửa lại. Mỗi bước tập trung vào một việc thay vì một prompt phải xử lý tất cả cùng lúc.

Các bước này phụ thuộc nhau nên không thể chạy độc lập như các nhánh song song. Bước sửa phải chờ có bản nháp và phải thực sự nhận được nội dung bản nháp.

Nếu kết quả trung gian bắt buộc đúng cấu trúc mới được chuyển tiếp, hãy kiểm tra bằng chương trình trước khi chạy bước sau. Cách chia chuỗi đáng thử khi prompt dài hay bỏ sót yêu cầu, nhưng cần đo lợi ích về chất lượng so với thời gian chờ tăng thêm.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Extraction and report writing are split into two calls, but extracted data never reaches the writing call. What should be fixed first?

A. Increase report output length.

B. Pass validated extraction results into the writing step.

C. Rename prompts to show they belong together.

D. Use the same model ID to share results automatically.

**Question 2 — Choose one.** Step A must produce a valid `order_id` before B updates an order. Where should validation occur?

A. Ask A to declare validity in prose.

B. Have B check only after updating.

C. Have the host check structure and business validity before B.

D. Merge both steps into one prompt to remove checks.

**Question 3 — Choose two.** Which TWO inputs ensure a revision step evaluates the intended draft?

A. The actual draft at the correct revision.

B. Only the original request, letting revision recreate the draft.

C. Final-output criteria and relevant validation feedback.

D. Only “improve the previous version” without content.

**Question 4 — Choose one.** A five-step chain offers little accuracy gain and violates latency requirements. What should the team do?

A. Keep it because every step has a purpose.

B. Raise the timeout and declare the SLA met.

C. Remove every validation step.

D. Measure individual steps, remove low-value work, and retain mandatory checks.

**Question 5 — Choose two.** An intermediate field is misinterpreted, causing final failure. Which TWO observations locate the cause?

A. Inputs, outputs, and validation status at relevant step boundaries.

B. Only total chain tokens.

C. Links between intermediate result versions, requests, and consuming steps.

D. Only the final answer and overall confidence.

## Đáp án và giải thích

1. **B.** B tạo liên kết dữ liệu thực sự của chain. A không bổ sung thông tin. C và D không khiến các request tự kế thừa context.

2. **C.** C cưỡng chế tiền điều kiện trước tác động. A là tự khai. B quá muộn. D che bước trung gian nhưng không loại rủi ro dữ liệu lỗi.

3. **A, C.** A xác định đối tượng sửa, C xác định hướng sửa. B tạo một bản độc lập thay vì sửa bản cần đánh giá. D giả định request sau tự có context mà chưa truyền.

4. **D.** D tối ưu dựa trên chất lượng và thời gian thực tế. A cấu trúc rõ không đủ biện minh SLA. B thay timeout không đáp ứng SLA cũ. C bỏ kiểm soát bắt buộc mà chưa đo rủi ro.

5. **A, C.** A thấy điểm dữ liệu lệch, C truy được bản nào được dùng. B đo chi phí không chỉ ra ngữ nghĩa sai. D che các bước nơi nguyên nhân xuất hiện.

## Đối chiếu Vertex

Chuỗi bước dùng kết quả trước làm đầu vào sau, có thể xen kiểm tra hoặc xử lý bằng mã không dùng mô hình. Ví dụ tạo rồi sửa bài theo điều kiện không tự cho phép đăng lên mạng xã hội; việc xuất bản cần thuộc phạm vi nhiệm vụ. Đánh giá chất lượng để biết lợi ích có đáng thời gian chờ thêm hay không. Dùng chung câu hỏi.

Nguồn đối chiếu: [Chaining workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289239). Bản lưu: `sources/vertex-lessons/289239.json`.
