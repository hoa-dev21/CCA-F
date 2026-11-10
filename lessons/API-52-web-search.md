# The web search tool

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287755), sources/api-lessons/287755.json. Tóm tắt và câu hỏi tự biên soạn; chi tiết phiên bản chỉ dùng sau khi xác minh tương thích.

## Nội dung bài học


Công cụ tìm kiếm web trong bài được chạy phía dịch vụ Anthropic, còn gọi là server tool. Điểm này khác với công cụ chỉnh sửa tệp do ứng dụng phải tự viết mã thực thi.

Phản hồi có thể gồm các khối yêu cầu tìm kiếm, kết quả và trích dẫn nguồn. Ứng dụng cần giữ các thông tin đó và trình bày nguồn phù hợp để người dùng kiểm tra câu trả lời.

Có thể đặt giới hạn số lần tìm kiếm hoặc phạm vi nguồn theo những tùy chọn công cụ hỗ trợ. Giới hạn số lần dùng chỉ kiểm soát mức sử dụng, không chứng minh đã tìm đủ bằng chứng. Tương tự, giới hạn vào một trang uy tín giúp chọn nguồn nhưng không bảo đảm mọi nhận định đều được nguồn đó chứng minh.

Ví dụ: Sau khi tìm kiếm, cần xem đoạn được trích có thực sự hỗ trợ kết luận hay không. Chỉ còn câu trả lời bằng văn bản mà mất liên kết nguồn sẽ khiến người dùng khó kiểm tra.

Tên phiên bản, điều kiện bật công cụ và các trường hỗ trợ trong video cần đối chiếu khi triển khai. Ý chính của bài là phân biệt nơi thực thi và giữ được bằng chứng từ nguồn.

## Câu hỏi

**1. Chọn một.** Khác biệt thực thi nổi bật của web search trong bài với client editor?

A. Cả hai tự sửa file local.

B. Web search chạy phía dịch vụ; client editor vẫn cần mã ứng dụng thực thi.

C. Bản mô tả công cụ chỉnh sửa luôn tự tạo mã thực thi phía máy chủ.

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

Ví dụ tìm kiếm phía dịch vụ dùng `max_uses`, `allowed_domains` và các khối kết quả, trích dẫn. Khác editor do ứng dụng chạy, công cụ tìm kiếm do dịch vụ thực thi khi nhà cung cấp và mô hình hỗ trợ. Video chưa chứng minh tính năng đang có trên mọi cấu hình Vertex. Giới hạn tên miền không bảo đảm mọi nhận định đúng; giữ trích dẫn và kiểm tra nội dung nguồn. Dùng chung câu hỏi.

Nguồn đối chiếu: [The web search tool](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289183). Bản lưu: `sources/vertex-lessons/289183.json`.
