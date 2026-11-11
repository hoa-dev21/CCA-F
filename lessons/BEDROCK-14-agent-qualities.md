# Quan sát, hành động, đánh giá

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276808), sources/bedrock-lessons/276808.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Từ Claude Code và Computer Use, bài rút ra các yếu tố của một tác nhân AI hoạt động tốt: công cụ có mục đích rõ, vòng xử lý có giới hạn, khả năng quan sát môi trường và kiểm tra kết quả liên tục.

Trước khi sửa mã, cần đọc mã đang có. Trước khi thao tác giao diện, cần quan sát trạng thái hiện tại. Kiến thức huấn luyện không tự cho mô hình biết nội dung riêng của dự án hoặc màn hình của bạn.

Phản hồi công cụ giúp chọn bước tiếp và kiểm chứng kết quả. Chạy kiểm thử vừa thực hiện một hành động vừa tạo bằng chứng về hành vi. Trước khi cho tác nhân chạy, cần định nghĩa thế nào là thành công, lỗi và hết số lượt; đánh giá cả tình huống thất bại và cách khôi phục.

Mức tự chủ còn phụ thuộc tác động của nhiệm vụ. Thử giao diện trên môi trường kiểm thử khác với bấm thanh toán bằng tài khoản thật; sửa mã để con người duyệt khác với tự triển khai lên hệ thống vận hành.

Vì vậy, không chọn quyền chỉ dựa trên tên công cụ. Hãy xét khả năng kiểm chứng, đảo ngược thao tác và chuyển cho người có thẩm quyền khi cần.

## Tự kiểm tra

**Câu 1 — Chọn một.** Hai agent dùng cùng công cụ browser: một chạy test trên bản sao, một thanh toán bằng tài khoản thật. Cách quyết định mức tự chủ phù hợp?

A. Cấp quyền rộng hơn cho agent có ít bước thực hiện hơn.

B. Dùng độ tự tin trong câu trả lời của agent làm ngưỡng cấp quyền.

C. Đánh giá tác động, khả năng khôi phục và kiểm chứng từng việc.

D. Cấp cùng quyền vì cả hai gọi cùng tên công cụ.

**Câu 2 — Chọn hai.** Agent sửa hàm dựa trên kiến thức về framework, chưa đọc file hiện tại. Hai việc nào cần bổ sung vào vòng làm việc?

A. Yêu cầu mô hình mô tả framework dài hơn thay cho đọc dự án.

B. Dùng kiểm thử hoặc quan sát hành vi để kiểm chứng bản sửa.

C. Đọc mã và phụ thuộc liên quan trong dự án trước khi chọn bản sửa.

D. Đánh dấu hoàn thành khi công cụ ghi file trả thành công.

**Câu 3 — Chọn một.** Agent có điểm hoàn thành cao trên tác vụ thuận lợi, nhưng thường lặp vô hạn khi dịch vụ trả lỗi. Đánh giá nào thiếu?

A. Các ca lỗi, giới hạn vòng lặp và đường phục hồi/chuyển cấp.

B. Chỉ độ dài prompt mô tả nhiệm vụ thành công.

C. Chỉ số lần công cụ có thể được gọi đồng thời.

D. Chỉ việc tác nhân có thể tạo câu trả lời cuối đúng định dạng.

**Câu 4 — Chọn hai.** Trước khi cho agent tự chạy, nhóm muốn phân biệt “thành công” với “đã hết lượt”. Hai yếu tố nên có?

A. Tiêu chí kết quả quan sát được gắn với mục tiêu người dùng.

B. Lấy câu “đã hoàn tất” do mô hình viết làm bằng chứng cuối.

C. Coi mọi vòng dừng không ném exception là thành công.

D. Trạng thái dừng riêng cho lỗi, hết ngân sách và cần chuyển xử lý.

**Câu 5 — Chọn một.** Agent tạo patch đúng và chạy test đạt trong nhánh riêng. Nhiệm vụ được giao là chuẩn bị thay đổi để con người duyệt. Bước nào phù hợp tiếp theo?

A. Mở rộng phạm vi sửa các module liên quan trước khi báo cáo để tối ưu toàn hệ thống.

B. Xóa bản ghi test vì diff đã chứa toàn bộ thông tin người duyệt cần.

C. Bàn giao diff cùng kết quả kiểm chứng và giới hạn còn lại cho người duyệt.

D. Triển khai production vì test đạt đã chứng minh quyền tự chủ phù hợp.

## Đáp án và giải thích

1. **C.** C đánh giá theo hệ quả thực. D bỏ qua môi trường; A số bước không đo mức rủi ro; B tự tin không chứng minh tác động có thể kiểm soát.

2. **B, C.** C cung cấp trạng thái riêng của dự án; B đánh giá kết quả. A không cập nhật thông tin tại chỗ; D chỉ chứng minh thao tác ghi, không chứng minh sửa đúng.

3. **A.** A đánh giá khả năng vận hành khi điều kiện xấu. B không trực tiếp kiểm tra vòng lặp lỗi; C đo năng lực song song; D định dạng không chứng minh dừng và phục hồi đúng.

4. **A, D.** A định nghĩa thành công; D tránh trộn các lý do dừng. C đồng nhất kết thúc kỹ thuật với đạt mục tiêu; B dựa vào tự báo cáo thay vì bằng chứng.

5. **C.** C hoàn thành trong phạm vi được giao. D suy quyền từ kết quả test; A tự mở rộng mục tiêu; B loại bỏ bằng chứng hành vi không có trong diff.
