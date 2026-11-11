# Chia bước theo phụ thuộc

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287800), sources/api-lessons/287800.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Chaining là chia nhiệm vụ thành các bước nối tiếp, trong đó kết quả bước trước trở thành đầu vào cho bước sau. Giữa các lần gọi mô hình, ứng dụng có thể thêm xử lý hoặc kiểm tra bằng mã.

Ví dụ: Bước đầu tạo bản nháp bài viết. Bước sau nhận chính bản nháp đó để rà soát độ dài, cấu trúc và yêu cầu còn thiếu, rồi sửa lại. Mỗi bước tập trung vào một việc thay vì một prompt phải xử lý tất cả cùng lúc.

Các bước này phụ thuộc nhau nên không thể chạy độc lập như các nhánh song song. Bước sửa phải chờ có bản nháp và phải thực sự nhận được nội dung bản nháp.

Nếu kết quả trung gian bắt buộc đúng cấu trúc mới được chuyển tiếp, hãy kiểm tra bằng chương trình trước khi chạy bước sau. Cách chia chuỗi đáng thử khi prompt dài hay bỏ sót yêu cầu, nhưng cần đo lợi ích về chất lượng so với thời gian chờ tăng thêm.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một prompt vừa trích dữ liệu vừa viết báo cáo thường bỏ sót trường. Nhóm chia thành trích xuất rồi viết, nhưng không truyền kết quả trích xuất vào lượt viết. Điều gì cần sửa trước?

A. Tăng độ dài đầu ra của lượt viết.

B. Truyền bản trích xuất đã kiểm tra vào lượt viết.

C. Đổi tên hai prompt để mô hình nhận ra chúng thuộc cùng tác vụ.

D. Dùng cùng model ID để hai lượt tự chia sẻ kết quả.

**Câu 2 — Chọn một.** Đầu ra bước A phải có order_id hợp lệ trước khi B cập nhật đơn hàng. Cách đặt gate nào phù hợp?

A. Yêu cầu A tự nói “đã hợp lệ” ở cuối.

B. Cho B kiểm tra sau khi cập nhật vì đã có dữ liệu đầy đủ.

C. Host kiểm tra cấu trúc/nghiệp vụ trước bước B.

D. Gộp A/B thành một prompt để không cần kiểm tra trung gian.

**Câu 3 — Chọn hai.** Chuỗi tạo nháp rồi sửa cần đảm bảo lượt sửa thực sự đánh giá bản vừa tạo. Hai dữ liệu nào nên được truyền?

A. Bản nháp đúng phiên bản cần sửa.

B. Chỉ yêu cầu gốc để lượt sửa tự tái tạo bản nháp.

C. Rubric/ràng buộc của đầu ra cuối và phản hồi kiểm tra liên quan.

D. Chỉ một câu “hãy cải thiện bản trước” không kèm nội dung.

**Câu 4 — Chọn một.** Chain năm bước tăng độ đúng rất ít nhưng vượt SLA latency. Nhóm nên làm gì?

A. Giữ chain vì mỗi bước đã có mục tiêu riêng.

B. Tăng timeout cho người dùng rồi coi SLA đã đạt.

C. Bỏ toàn bộ validation để giảm số bước.

D. Đo từng bước; giảm bước ít giá trị, giữ gate bắt buộc.

**Câu 5 — Chọn hai.** Một chain thất bại ở bước cuối do trường trung gian bị hiểu sai. Hai dữ liệu quan sát nào giúp tìm đúng nơi lỗi phát sinh?

A. Input/output và trạng thái kiểm tra ở các ranh giới bước liên quan.

B. Chỉ tổng số token toàn chain.

C. Liên kết phiên bản kết quả trung gian với yêu cầu và bước tiêu thụ nó.

D. Chỉ câu trả lời cuối và confidence chung.

## Đáp án và giải thích

1. **B.** B tạo liên kết dữ liệu thực sự của chain. A không bổ sung thông tin. C và D không khiến các request tự kế thừa context.

2. **C.** C cưỡng chế tiền điều kiện trước tác động. A là tự khai. B quá muộn. D che bước trung gian nhưng không loại rủi ro dữ liệu lỗi.

3. **A, C.** A xác định đối tượng sửa, C xác định hướng sửa. B tạo một bản độc lập thay vì sửa bản cần đánh giá. D giả định request sau tự có context mà chưa truyền.

4. **D.** D tối ưu dựa trên chất lượng và thời gian thực tế. A cấu trúc rõ không đủ biện minh SLA. B thay timeout không đáp ứng SLA cũ. C bỏ kiểm soát bắt buộc mà chưa đo rủi ro.

5. **A, C.** A thấy điểm dữ liệu lệch, C truy được bản nào được dùng. B đo chi phí không chỉ ra ngữ nghĩa sai. D che các bước nơi nguyên nhân xuất hiện.

## Đối chiếu Vertex

Chuỗi bước dùng kết quả trước làm đầu vào sau, có thể xen kiểm tra hoặc xử lý bằng mã không dùng mô hình. Ví dụ tạo rồi sửa bài theo điều kiện không tự cho phép đăng lên mạng xã hội; việc xuất bản cần thuộc phạm vi nhiệm vụ. Đánh giá chất lượng để biết lợi ích có đáng thời gian chờ thêm hay không. Dùng chung câu hỏi.

Nguồn đối chiếu: [Chaining workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289239). Bản lưu: `sources/vertex-lessons/289239.json`.
