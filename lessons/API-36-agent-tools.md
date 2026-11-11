# Công cụ có thể kết hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287803), sources/api-lessons/287803.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI nhận mục tiêu và một tập công cụ, rồi chọn cách kết hợp chúng để giải quyết yêu cầu. Người thiết kế không cần viết sẵn công cụ riêng cho mọi câu hỏi có thể xuất hiện.

Ví dụ của bài có công cụ lấy ngày giờ, cộng một khoảng thời gian và tạo lời nhắc. Có yêu cầu chỉ dùng một công cụ, có yêu cầu phải dùng nhiều công cụ theo thứ tự. Nếu thiếu thông tin cần thiết, tác nhân phải hỏi thêm thay vì tự đoán. Chẳng hạn, muốn tính ngày hết bảo hành thì cần biết ngày mua và các điều kiện liên quan.

Công cụ nên đủ linh hoạt để dùng lại nhưng vẫn có định nghĩa rõ: làm việc gì, nhận tham số nào và trả kết quả gì. Công cụ tên “làm mọi thứ” với mô tả mơ hồ không giúp mô hình biết cách dùng đúng.

Bài sử dụng công cụ tệp và dòng lệnh (shell) để minh họa công việc lập trình. Không vì thế mà cấp toàn bộ quyền shell cho tác nhân chỉ cần tra cứu đơn hàng. Theo phần liên hệ đề cương thi, công cụ và quyền truy cập phải phù hợp với vai trò, nhiệm vụ thực tế.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A warranty reminder needs purchase date and warranty duration, neither provided. The agent has time, date-arithmetic, and reminder tools. What should it do?

A. Assume purchase was today and use a common duration.

B. Obtain the missing facts before calculating and creating the reminder.

C. Create now and revise if the user objects.

D. Call every tool and select by confidence.

**Question 2 — Choose one.** A `do_everything` tool accepts arbitrary strings and confuses reads with writes. Which design improves composability?

A. Keep it and infer operations from more examples.

B. Keep an unrestricted string schema and check only after execution.

C. Split it into reusable tools with clear purposes and schemas.

D. Create a separate tool for every individual question.

**Question 3 — Choose two.** An order-status agent inherits shell and file-editor tools from a demo. Which TWO production choices are appropriate?

A. Expose only capabilities needed for lookup.

B. Retain all demo tools because the course used them.

C. Validate permissions and inputs at execution time.

D. Grant unrestricted shell access for unforeseen situations.

**Question 4 — Choose one.** A reminder requires current time, adding 90 minutes, and creation using the calculated timestamp. What is correct?

A. Run all three simultaneously.

B. Create with a guessed time and verify afterward.

C. Send “90 minutes” although the schema requires a timestamp.

D. Pass results along dependencies and validate before creation.

**Question 5 — Choose two.** Which TWO criteria assess reusable time-and-reminder tools for new requests?

A. They compose into new tasks while retaining clear purposes and types.

B. Every tool is named after one complete user question.

C. The agent detects missing facts and asks before dependent actions.

D. Every request must use the same number of tools.

## Đáp án và giải thích

1. **B.** B tránh tác động dựa trên dữ kiện đoán. A thay thông tin nghiệp vụ bằng mặc định chưa được chấp thuận. C vẫn tạo một lịch sai. D công cụ không cung cấp dữ kiện chưa từng được đưa vào.

2. **C.** C làm rõ ranh giới mà vẫn tái sử dụng. A thêm ví dụ nhưng tiếp tục dùng parser suy diễn thao tác từ chuỗi mơ hồ. B kiểm tra sau tác động và không làm rõ hợp đồng đầu vào. D tạo tool theo từng câu hỏi làm tăng số lượng và khó tổng quát.

3. **A, C.** A giảm năng lực ngoài nhiệm vụ; C kiểm soát hành động thực. B ví dụ giảng dạy không quyết định quyền sản phẩm. D mở rộng quyền không gắn nhu cầu cụ thể.

4. **D.** D bảo toàn chuỗi dữ liệu. A/B dùng giá trị chưa có hoặc suy đoán. C vi phạm hợp đồng đầu vào của công cụ trong tình huống.

5. **A, C.** A hỗ trợ kết hợp, C giữ tính đúng khi đầu vào thiếu. B gắn công cụ với từng cách diễn đạt. D số bước nên theo nhu cầu, không phải một chỉ tiêu cố định.

## Đối chiếu Vertex

Công cụ nên dùng lại và kết hợp được nhưng phải có mô tả, phạm vi rõ. Ví dụ tính bảo hành cần hỏi ngày mua nếu chưa có. Công cụ Bash đa dụng không thay nguyên tắc chỉ cấp quyền cần thiết; công cụ hẹp có thể phù hợp hơn. Tên `post_media` trong ví dụ không tự trao quyền xuất bản khi người dùng chưa yêu cầu. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289243). Bản lưu: `sources/vertex-lessons/289243.json`.
