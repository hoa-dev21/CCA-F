# Agents and tools — Công cụ có thể kết hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287803), sources/api-lessons/287803.json. Câu hỏi tự biên soạn.

## Tóm tắt

Agent nhận mục tiêu và tập công cụ để tự tìm cách giải. Những khả năng đơn giản, có thể kết hợp, giúp xử lý nhiều yêu cầu mà người thiết kế không viết sẵn mọi chuỗi bước.

Ví dụ của khóa gồm lấy ngày giờ, cộng khoảng thời gian và tạo nhắc việc. Yêu cầu đơn giản chỉ cần một tool; yêu cầu khác cần kết hợp nhiều tool. Khi thiếu dữ liệu như ngày mua hàng để tính hết bảo hành, agent cần hỏi bổ sung.

Bài dùng công cụ file và shell để minh họa khả năng kết hợp trong lập trình. Không suy ra mọi agent nghiệp vụ nên được cấp quyền shell hoặc công cụ quá rộng: thiết kế phải phù hợp nhiệm vụ. Exam Guide cũng yêu cầu ranh giới công cụ và quyền truy cập theo vai trò.

Trừu tượng hóa vừa đủ khác với mô tả mơ hồ. Một công cụ nên có hợp đồng rõ dù có thể được dùng trong nhiều chuỗi thao tác.

## Câu hỏi

**1. Chọn một.** Muốn hỗ trợ nhiều yêu cầu về thời gian mà không viết tool riêng cho từng câu. Thiết kế sát bài?

A. Một tập công cụ ngày giờ có hợp đồng rõ, kết hợp được.

B. Một tool tên “làm mọi thứ” không có schema.

C. Hard-code một câu trả lời cho mọi yêu cầu.

D. Không trả kết quả trung gian.

**2. Chọn một.** Khách hỏi ngày hết bảo hành nhưng chưa nêu ngày mua. Cách phù hợp?

A. Đoán một ngày mua và không báo.

B. Coi hôm nay là ngày mua mặc định bất kể tình huống.

C. Hỏi thông tin còn thiếu trước khi tính.

D. Tạo kết quả ngẫu nhiên.

**3. Chọn một.** Có nên cấp toàn bộ công cụ shell cho agent chỉ cần tra cứu đơn hàng vì ví dụ lập trình dùng shell?

A. Có, mọi agent phải có cùng tools.

B. Có, càng nhiều quyền luôn càng chính xác.

C. Có, schema không quan trọng.

D. Không suy rộng; chọn quyền và tool phù hợp vai trò nghiệp vụ.

## Đáp án

1. **A.** B mơ hồ; C không thích ứng; D làm mất dữ liệu cần kết hợp.
2. **C.** A, B và D tạo đầu vào không có căn cứ.
3. **D.** A và B bỏ nguyên tắc phạm vi; C bỏ hợp đồng gọi công cụ.

## Đối chiếu Vertex

Đã đọc [Agents and tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289243), sources/vertex-lessons/289243.json. Tool đủ tổng quát để kết hợp, nhưng mỗi tool có mô tả và ranh giới rõ. Agent hỏi ngày mua khi thiếu thông tin tính warranty. Bash đa dụng không thay quyền tối thiểu hoặc công cụ hẹp phù hợp; ví dụ post_media không trao quyền xuất bản khi người dùng chưa yêu cầu. Dùng chung câu hỏi khái niệm.
