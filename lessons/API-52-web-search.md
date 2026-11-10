# The web search tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287755), sources/api-lessons/287755.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học

Web search trong bài là server công cụ: Anthropic thực hiện tìm kiếm, khác công cụ do ứng dụng thực thi phải có mã thực thi trong ứng dụng. Phản hồi gồm các blocks tìm kiếm, kết quả và trích dẫn nguồn cần hiển thị phù hợp.

Có thể giới hạn số lần dùng và phạm vi nguồn theo khả năng bản mô tả cấu trúc dữ liệu. Giới hạn tìm kiếm là ngân sách, không phải bảo đảm đã tìm đủ mọi bằng chứng. Chọn domain có chủ đích hỗ trợ phạm vi nguồn, nhưng một domain uy tín cũng không bảo đảm claim được hỗ trợ đúng.

Version string, điều kiện enable và field hỗ trợ trong video cần kiểm tra theo API hiện hành khi triển khai. Phần ôn tập tập trung trách nhiệm thực thi và bảo toàn nguồn, không khuyến nghị thay đổi thiết lập tài khoản từ bài này.

## Câu hỏi

**1. Chọn một.** Khác biệt thực thi nổi bật của web search trong bài với client editor?

A. Cả hai tự sửa file local.

B. Web search chạy phía dịch vụ; client editor vẫn cần mã ứng dụng thực thi.

C. Editor bản mô tả cấu trúc dữ liệu luôn tạo hệ thống xử lý phía máy chủ.

D. Không có kết quả search.

**2. Chọn một.** Đã đặt max uses, có chứng minh câu hỏi được trả lời đầy đủ không?

A. Có, ngân sách bằng độ đúng.

B. Có, không cần các trích dẫn nguồn.

C. Không; phải kiểm tra chất lượng và bao phủ nguồn sau tìm kiếm.

D. Có, chỉ cần hết lượt.

**3. Chọn một.** UI muốn người dùng kiểm tra từng claim. Cần giữ gì?

A. Trích dẫn nguồn gắn nguồn/vị trí với nhận định thay vì chỉ prose.

B. Chỉ tên mô hình.

C. Chỉ số lượt tìm kiếm.

D. Xóa URL để gọn.

## Đáp án

1. **B.** B phân biệt nơi chạy; A sai thao tác, C nhầm giao diện với triển khai, D bỏ kết quả.

2. **C.** C tách rào chắn với mục tiêu; A và D nhầm điều kiện dừng, B bỏ kiểm chứng.

3. **A.** A cho đường kiểm chứng; B và C không chỉ bằng chứng, D làm mất nguồn.

## Đối chiếu Vertex

Đã đọc [The web search tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289183), sources/vertex-lessons/289183.json. Ví dụ server-side search có max_uses/allowed_domains và search/citation blocks. Trái với client-side editor, search được dịch vụ thực thi khi provider/model hỗ trợ. Cần kiểm tra hỗ trợ trên Vertex đang dùng; video không đủ để chứng minh khả dụng hiện hành. Allowed domain không bảo đảm mọi claim đúng; giữ trích dẫn nguồn và kiểm chứng nguồn. Dùng chung câu hỏi khái niệm.
