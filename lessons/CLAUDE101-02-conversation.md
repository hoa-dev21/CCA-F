# Your first conversation with Claude

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-101/383390), sources/claude101-lessons/383390.json (đã đọc text đầy đủ). Tóm tắt và câu hỏi tự biên soạn, không phải đề thi thật. Bài nền tảng, không thay cho mục tiêu kỹ thuật của Exam Guide.

## Tóm tắt

Một prompt hữu ích nêu ba phần: bối cảnh/mục tiêu, nhiệm vụ cụ thể và quy tắc đầu ra. Đính kèm tài liệu liên quan giúp model làm việc với dữ liệu thật thay vì đoán tình huống.

Dùng follow-up và phản hồi cụ thể để cải tiến: chỉ ra đoạn cần ngắn hơn, góc phân tích còn thiếu hoặc cách diễn đạt cần đổi. Khi hội thoại lệch nhiều, có thể khởi đầu rõ hơn trong chat mới.

Bài đề cập memory và skills ở ứng dụng. Không suy từ memory sản phẩm rằng mỗi request Messages API tự giữ lịch sử; ở mẫu API đã học, ứng dụng phải truyền context. Giao diện cũ trong video có phần đã được khóa ghi chú là thay đổi, nên tập trung nguyên tắc giao tiếp.

## Câu hỏi

**1. Chọn một.** AI trả báo cáo không đúng đối tượng độc giả. Cần bổ sung trực tiếp gì?

A. Chỉ câu “làm tốt hơn”.

B. Chỉ số token lớn hơn.

C. Bỏ mọi quy tắc.

D. Bối cảnh độc giả, mục tiêu và định dạng cần có.

**2. Chọn một.** Muốn sửa tone mà giữ nội dung tốt, phản hồi nào hữu ích?

A. Nêu cụ thể đoạn/tone cần đổi và giữ những phần phù hợp.

B. Chỉ “sai”.

C. Xóa dữ liệu nguồn bất kể cần.

D. Coi bản nháp là kết quả bắt buộc.

**3. Chọn một.** Memory trên ứng dụng có chứng minh API request độc lập tự nhớ nhau không?

A. Có, mọi API dùng cùng cơ chế.

B. Không; cần phân biệt giao diện và trách nhiệm quản lý context của API.

C. Có, nếu cùng API key.

D. Có, nếu không tạo client mới.

## Đáp án

1. **D.** D giảm mơ hồ đang gây lỗi; A mơ hồ, B không chỉ đối tượng, C bỏ yêu cầu.

2. **A.** A đưa hướng sửa; B thiếu thông tin, C mất căn cứ, D bỏ vòng cải tiến.

3. **B.** B phân biệt lớp sản phẩm; A, C, D giả định tự lưu lịch sử mà mẫu API không có.
