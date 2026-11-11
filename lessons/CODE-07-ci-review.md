# kiểm tra quản lý và CI tùy biến

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486936), sources/code-lessons/486936.json. Câu hỏi tự biên soạn; thông tin dịch vụ preview cần kiểm tra trước triển khai.

## Nội dung bài học


Bài học so sánh dịch vụ rà soát mã được quản lý sẵn với quy trình tùy biến bằng GitHub Actions. Chọn theo việc bạn cần hệ thống thực hiện.

Theo phạm vi dịch vụ được mô tả trong bài, dịch vụ rà soát phân tích thay đổi trong bối cảnh dự án, đăng nhận xét lên yêu cầu hợp nhất mã (pull request, viết tắt là PR), xếp mức độ nghiêm trọng và giảm nhận xét trùng lặp. Dịch vụ này không tự sửa mã hay tự phê duyệt hoặc chặn PR; con người vẫn quyết định cách xử lý.

GitHub Actions phù hợp khi bạn cần xây một quy trình riêng, chẳng hạn sửa mã theo yêu cầu trong bình luận hoặc tạo báo cáo theo lịch. Quy trình phải nêu sự kiện kích hoạt, yêu cầu gửi AI và các tùy chọn dòng lệnh cần dùng.

Nếu quy trình chạy không có người theo dõi, hãy cấu hình quyền để nó không bị treo khi chờ phê duyệt. Chỉ cấp công cụ phục vụ nhiệm vụ; một báo cáo chỉ đọc dữ liệu không cần quyền sửa mã.

Giới hạn số lượt giúp kiểm soát tài nguyên. Khi chạm giới hạn, chỉ có thể kết luận tác vụ đã dừng vì hết lượt, chưa thể kết luận công việc hoàn tất. Tương tự, có nhận xét rà soát trên PR không có nghĩa mọi kiểm thử và điều kiện chấp nhận đã đạt.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Nhóm cần bot sửa mã theo comment PR. Dịch vụ review được mô tả trong bài chỉ đưa findings, không tự sửa. Thiết kế nào đáp ứng nhu cầu?

A. Thêm nhãn auto-fix và coi dịch vụ review đã có chức năng sửa.

B. Tăng severity để dịch vụ review tự chuyển sang chế độ ghi.

C. Action tùy biến, giới hạn quyền và có bước kiểm chứng.

D. Bỏ bước kiểm thử vì sửa theo comment đã là yêu cầu được phê duyệt.

**Câu 2 — Chọn một.** Job định kỳ chỉ tổng hợp báo cáo từ repo nhưng được cấp quyền sửa và deploy. Thay đổi nào phù hợp nhất?

A. Giới hạn quyền vào đọc dữ liệu và xuất báo cáo.

B. Giữ quyền rộng để job không bao giờ phải từ chối.

C. Thêm câu “không deploy” nhưng giữ nguyên mọi quyền.

D. Chỉ tắt log của công cụ ghi để báo cáo ít nhiễu.

**Câu 3 — Chọn hai.** Action dừng vì đạt giới hạn lượt và đã có một số nhận xét trên PR. Hai điều nào cần kiểm tra trước khi coi review hoàn tất?

A. Chỉ số lượt đã dùng bằng giới hạn nên mức độ bao phủ đã đủ.

B. Trạng thái chạy cùng phạm vi thực sự đã được kiểm tra.

C. Các gate/tiêu chí chấp nhận và bằng chứng còn thiếu.

D. Sự tồn tại của ít nhất một comment là bằng chứng mọi file đã được review.

**Câu 4 — Chọn một.** Workflow CI không có người trực đôi khi yêu cầu xác nhận quyền và treo đến timeout. Sửa nào bảo đảm xử lý tự động trong giới hạn đã định?

A. Tăng timeout để chờ người duyệt lâu hơn.

B. Tự trả lời đồng ý mọi prompt vì code nằm trong repo nội bộ.

C. Chạy lại job nhiều lần cho tới lúc mô hình không hỏi.

D. Chạy không tương tác; cấp quyền cần dùng, từ chối ngoài phạm vi.

**Câu 5 — Chọn hai.** Nhóm vừa cập nhật prompt bot review và muốn triển khai an toàn. Hai bằng chứng nào hữu ích nhất?

A. Đánh giá findings trên PR đại diện, gồm lỗi thật và pattern hợp lệ.

B. Xác minh quyền, trigger và xử lý đầu ra phù hợp workflow dự kiến.

C. Chỉ kiểm tra bot có đăng được comment.

D. Chỉ xem câu trả lời có giọng văn chuyên nghiệp.

## Đáp án và giải thích

1. **C.** C tạo workflow có khả năng thực hiện hành động cần thiết. A/B không mở rộng chức năng ngoài phạm vi dịch vụ. D quyền sửa không thay thế việc chứng minh bản sửa đúng.

2. **A.** A giảm năng lực không phục vụ nhiệm vụ. B ưu tiên tiện lợi hơn phạm vi công việc. C là hướng dẫn chưa phải giới hạn thực thi. D giảm khả năng quan sát nhưng vẫn giữ quyền thừa.

3. **B, C.** B xác định phần đã làm, C xác định điều kiện hoàn tất. A nhầm giới hạn tài nguyên với kết quả. D comment không chứng minh độ bao phủ hay chất lượng toàn bộ PR.

4. **D.** D xử lý quyền như một phần thiết kế CI. A vẫn phụ thuộc người không trực. B bỏ ranh giới thao tác. C không sửa điều kiện gây treo và kết quả phụ thuộc may rủi.

5. **A, B.** A đo chất lượng quyết định, B đo vận hành và phạm vi. C chỉ chứng minh một khả năng kết nối. D không chứng minh finding đúng hoặc pipeline xử lý trạng thái lỗi đúng.
