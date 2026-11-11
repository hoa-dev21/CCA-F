# Công cụ có thể kết hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287803), sources/api-lessons/287803.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI nhận mục tiêu và một tập công cụ, rồi chọn cách kết hợp chúng để giải quyết yêu cầu. Người thiết kế không cần viết sẵn công cụ riêng cho mọi câu hỏi có thể xuất hiện.

Ví dụ của bài có công cụ lấy ngày giờ, cộng một khoảng thời gian và tạo lời nhắc. Có yêu cầu chỉ dùng một công cụ, có yêu cầu phải dùng nhiều công cụ theo thứ tự. Nếu thiếu thông tin cần thiết, tác nhân phải hỏi thêm thay vì tự đoán. Chẳng hạn, muốn tính ngày hết bảo hành thì cần biết ngày mua và các điều kiện liên quan.

Công cụ nên đủ linh hoạt để dùng lại nhưng vẫn có định nghĩa rõ: làm việc gì, nhận tham số nào và trả kết quả gì. Công cụ tên “làm mọi thứ” với mô tả mơ hồ không giúp mô hình biết cách dùng đúng.

Bài sử dụng công cụ tệp và dòng lệnh (shell) để minh họa công việc lập trình. Không vì thế mà cấp toàn bộ quyền shell cho tác nhân chỉ cần tra cứu đơn hàng. Theo phần liên hệ đề cương thi, công cụ và quyền truy cập phải phù hợp với vai trò, nhiệm vụ thực tế.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Người dùng muốn nhắc trước khi hết bảo hành, nhưng chưa cung cấp ngày mua và thời hạn. Agent có công cụ thời gian, cộng thời gian và tạo lời nhắc. Hành động phù hợp nhất?

A. Dùng ngày hiện tại làm ngày mua rồi đặt nhắc theo thời hạn phổ biến.

B. Hỏi đủ dữ kiện trước khi tính hạn và tạo nhắc.

C. Tạo nhắc trước, sửa khi khách phản đối.

D. Gọi mọi công cụ và dùng câu trả lời có confidence cao nhất.

**Câu 2 — Chọn một.** Một tool tên do_everything nhận chuỗi tùy ý; mô hình chọn sai giữa tra cứu và sửa dữ liệu. Thiết kế nào cải thiện khả năng kết hợp công cụ?

A. Giữ tool chung, bổ sung ví dụ cho mỗi ý định và để parser suy ra thao tác từ chuỗi.

B. Giữ một schema chuỗi rộng, kiểm tra chủ yếu đầu ra sau khi thao tác đã chạy.

C. Tách tool tái sử dụng có mục đích/schema rõ.

D. Tạo tool riêng theo từng câu hỏi.

**Câu 3 — Chọn hai.** Agent chỉ tra trạng thái đơn hàng nhưng bộ demo có cả shell và file editor. Hai quyết định nào phù hợp khi đưa vào sản phẩm?

A. Chỉ cấp công cụ cần cho vai trò tra cứu.

B. Giữ toàn bộ công cụ demo vì chúng đã được dùng trong khóa học.

C. Kiểm tra quyền và đầu vào tại nơi thực thi, không chỉ dựa vào quyết định chọn tool.

D. Cấp shell rộng để phòng mọi tình huống chưa dự kiến.

**Câu 4 — Chọn một.** Agent phải lấy thời điểm hiện tại, cộng 90 phút rồi tạo lời nhắc; timestamp bước tính là đầu vào bắt buộc của bước tạo. Điều phối nào đúng?

A. Gọi ba công cụ song song để giảm round-trip.

B. Đặt timestamp ước lượng trong bước tạo rồi dùng bước tính để kiểm tra sau.

C. Chỉ gọi tạo lời nhắc với chuỗi “90 phút” dù schema cần timestamp.

D. Truyền kết quả theo phụ thuộc, kiểm tra trước khi tạo.

**Câu 5 — Chọn hai.** Nhóm mở rộng agent sang các yêu cầu mới bằng cùng bộ công cụ ngày giờ/lời nhắc. Hai tiêu chí nào giúp đánh giá thiết kế tái sử dụng?

A. Công cụ có thể kết hợp cho tác vụ mới mà vẫn có mục đích và kiểu dữ liệu rõ.

B. Mỗi tool được đặt tên theo toàn bộ câu hỏi cụ thể của người dùng.

C. Có cách phát hiện thiếu dữ kiện và hỏi lại trước hành động phụ thuộc.

D. Mọi yêu cầu đều bắt buộc dùng cùng số lượng công cụ.

## Đáp án và giải thích

1. **B.** B tránh tác động dựa trên dữ kiện đoán. A thay thông tin nghiệp vụ bằng mặc định chưa được chấp thuận. C vẫn tạo một lịch sai. D công cụ không cung cấp dữ kiện chưa từng được đưa vào.

2. **C.** C làm rõ ranh giới mà vẫn tái sử dụng. A thêm ví dụ nhưng tiếp tục dùng parser suy diễn thao tác từ chuỗi mơ hồ. B kiểm tra sau tác động và không làm rõ hợp đồng đầu vào. D tạo tool theo từng câu hỏi làm tăng số lượng và khó tổng quát.

3. **A, C.** A giảm năng lực ngoài nhiệm vụ; C kiểm soát hành động thực. B ví dụ giảng dạy không quyết định quyền sản phẩm. D mở rộng quyền không gắn nhu cầu cụ thể.

4. **D.** D bảo toàn chuỗi dữ liệu. A/B dùng giá trị chưa có hoặc suy đoán. C vi phạm hợp đồng đầu vào của công cụ trong tình huống.

5. **A, C.** A hỗ trợ kết hợp, C giữ tính đúng khi đầu vào thiếu. B gắn công cụ với từng cách diễn đạt. D số bước nên theo nhu cầu, không phải một chỉ tiêu cố định.

## Đối chiếu Vertex

Công cụ nên dùng lại và kết hợp được nhưng phải có mô tả, phạm vi rõ. Ví dụ tính bảo hành cần hỏi ngày mua nếu chưa có. Công cụ Bash đa dụng không thay nguyên tắc chỉ cấp quyền cần thiết; công cụ hẹp có thể phù hợp hơn. Tên `post_media` trong ví dụ không tự trao quyền xuất bản khi người dùng chưa yêu cầu. Dùng chung câu hỏi.

Nguồn đối chiếu: [Agents and tools](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289243). Bản lưu: `sources/vertex-lessons/289243.json`.
