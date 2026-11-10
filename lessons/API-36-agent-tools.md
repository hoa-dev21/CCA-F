# Công cụ có thể kết hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287803), sources/api-lessons/287803.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI nhận mục tiêu và một tập công cụ, rồi chọn cách kết hợp chúng để giải quyết yêu cầu. Người thiết kế không cần viết sẵn công cụ riêng cho mọi câu hỏi có thể xuất hiện.

Ví dụ của bài có công cụ lấy ngày giờ, cộng một khoảng thời gian và tạo lời nhắc. Có yêu cầu chỉ dùng một công cụ, có yêu cầu phải dùng nhiều công cụ theo thứ tự. Nếu thiếu thông tin cần thiết, tác nhân phải hỏi thêm thay vì tự đoán. Chẳng hạn, muốn tính ngày hết bảo hành thì cần biết ngày mua và các điều kiện liên quan.

Công cụ nên đủ linh hoạt để dùng lại nhưng vẫn có định nghĩa rõ: làm việc gì, nhận tham số nào và trả kết quả gì. Công cụ tên “làm mọi thứ” với mô tả mơ hồ không giúp mô hình biết cách dùng đúng.

Bài sử dụng công cụ tệp và dòng lệnh (shell) để minh họa công việc lập trình. Không vì thế mà cấp toàn bộ quyền shell cho tác nhân chỉ cần tra cứu đơn hàng. Theo phần liên hệ đề cương thi, công cụ và quyền truy cập phải phù hợp với vai trò, nhiệm vụ thực tế.

## Câu hỏi

**1. Chọn một.** Muốn hỗ trợ nhiều yêu cầu về thời gian mà không viết công cụ riêng cho từng câu. Thiết kế sát bài?

A. Một tập công cụ ngày giờ có hợp đồng rõ, kết hợp được.

B. Một công cụ tên “làm mọi thứ” không có bản mô tả cấu trúc dữ liệu.

C. Hard-code một câu trả lời cho mọi yêu cầu.

D. Không trả kết quả trung gian.

**2. Chọn một.** Khách hỏi ngày hết bảo hành nhưng chưa nêu ngày mua. Cách phù hợp?

A. Đoán một ngày mua và không báo.

B. Coi hôm nay là ngày mua mặc định bất kể tình huống.

C. Hỏi thông tin còn thiếu trước khi tính.

D. Tạo kết quả ngẫu nhiên.

**3. Chọn một.** Có nên cấp toàn bộ công cụ shell cho tác nhân AI chỉ cần tra cứu đơn hàng vì ví dụ lập trình dùng shell?

A. Có, mọi tác nhân AI phải có cùng các công cụ.

B. Có, càng nhiều quyền luôn càng chính xác.

C. Có, bản mô tả cấu trúc dữ liệu không quan trọng.

D. Không suy rộng; chọn quyền và công cụ phù hợp vai trò nghiệp vụ.

## Đáp án

1. **A.** B mơ hồ; C không thích ứng; D làm mất dữ liệu cần kết hợp.
2. **C.** A, B và D tạo đầu vào không có căn cứ.
3. **D.** A và B bỏ nguyên tắc phạm vi; C bỏ hợp đồng gọi công cụ.

## Đối chiếu Vertex

Công cụ nên dùng lại và kết hợp được nhưng phải có mô tả, phạm vi rõ. Ví dụ tính bảo hành cần hỏi ngày mua nếu chưa có. Công cụ Bash đa dụng không thay nguyên tắc chỉ cấp quyền cần thiết; công cụ hẹp có thể phù hợp hơn. Tên `post_media` trong ví dụ không tự trao quyền xuất bản khi người dùng chưa yêu cầu. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289243). Bản lưu: `sources/vertex-lessons/289243.json`.
