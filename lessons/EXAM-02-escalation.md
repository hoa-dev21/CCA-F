# Gate nghiệp vụ và bàn giao cho con người

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 1.4–1.5 và 5.2, trang PDF 7, 20–21. Câu hỏi tự biên soạn theo mục tiêu thi; không phải bản tóm tắt một video.

## Nội dung bài học


Khi một thao tác chỉ được phép sau khi đạt điều kiện bắt buộc, chương trình phải kiểm tra và chặn nếu điều kiện chưa đạt. Ví dụ: hoàn tiền cần có định danh khách hàng đã xác minh. Chỉ viết “luôn xác minh trước” trong prompt chưa tạo cơ chế bắt buộc.

Hook trước thao tác có thể kiểm tra ngưỡng hoàn tiền và chuyển khoản vượt thẩm quyền cho người phụ trách. Hook sau thao tác có vai trò khác, chẳng hạn chuẩn hóa kết quả để mô hình đọc. Nó không thể ngăn khoản tiền đã được chuyển.

Theo ví dụ của đề cương, `PostToolUse` có thể chuyển thời gian dạng Unix timestamp và ISO 8601 về cùng cách biểu diễn có múi giờ, hoặc đổi mã trạng thái dạng số thành ý nghĩa tương ứng của từng công cụ. Giữ giá trị gốc và nguồn để truy lại; không tự đoán khi chưa rõ đơn vị thời gian hoặc ý nghĩa mã.

Cần chuyển cho người có thẩm quyền khi người dùng yêu cầu gặp người, chính sách thiếu hoặc mơ hồ, hay tác nhân không thể tiến triển có ý nghĩa. Phân biệt hai tình huống:

- “Tôi rất bực vì đơn giao trễ”: ghi nhận sự bực bội và đề nghị giải quyết nếu còn trong khả năng.
- “Đừng xử lý tự động nữa, chuyển tôi cho nhân viên”: chuyển ngay với thông tin đã có, không bắt khách qua thêm một vòng tự động.

Có thể đưa các cặp ví dụ như vậy vào hướng dẫn hệ thống. Không dùng cảm xúc hoặc điểm tự tin do mô hình tự báo làm căn cứ duy nhất để quyết định chuyển cấp.

Nếu có nhiều khách cùng tên, hỏi thêm thông tin định danh thay vì chọn theo phỏng đoán. Nếu chính sách chỉ cho điều chỉnh theo giá của cửa hàng, không tự suy ra được phép áp giá đối thủ.

Thông tin bàn giao cần có mã khách đã xác minh, từng vấn đề, giao dịch liên quan, nguyên nhân đã biết, việc đã thử và hành động đề xuất. Với đề xuất hoàn tiền, nêu số tiền, căn cứ và điều kiện còn thiếu. Người nhận có thể không đọc được lịch sử chat, nên câu “khách cần hỗ trợ” hoặc một đoạn chat dài không được tổng hợp là chưa đủ.

Nếu khách có nhiều vấn đề, tách thành các hạng mục, dùng chung dữ kiện đã xác minh, xử lý song song những nhánh độc lập rồi đưa ra một phương án thống nhất.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Bot có quy định phải xác minh danh tính trước hoàn tiền. Trong kiểm thử, lời nhắc được tuân thủ 99% nhưng vẫn có giao dịch bỏ bước. Kiểm soát nào đáp ứng yêu cầu không được hoàn khi chưa xác minh?

A. Thêm ba ví dụ từ chối vào system prompt và giảm temperature.

B. Yêu cầu mô hình ghi lý do xác minh trước khi gọi công cụ.

C. Gate ở executor kiểm tra xác minh đúng khách/giao dịch.

D. Dùng bộ kiểm tra sau giao dịch để hoàn tác những lần thiếu xác minh.

**Câu 2 — Chọn một.** Khách yêu cầu rõ “chuyển tôi cho nhân viên”. Bot đã có đủ dữ liệu và dự đoán tự xử lý chỉ mất 20 giây. Chính sách yêu cầu tôn trọng đề nghị chuyển người. Bước phù hợp nhất?

A. Chuyển theo yêu cầu, bàn giao vấn đề và dữ liệu đã xác minh.

B. Thử giải quyết trong 20 giây rồi chỉ chuyển nếu thất bại.

C. Hỏi lại lý do muốn gặp người trước khi tạo yêu cầu chuyển.

D. Đề nghị khách xác nhận thêm lần nữa vì hệ thống có thể tự xử lý.

**Câu 3 — Chọn hai.** Tra cứu trả hai khách cùng tên. Yêu cầu hoàn tiền còn thuộc ngoại lệ chính sách chưa mô tả. Hai bước nào giải quyết hai loại bất định mà không đoán?

A. Chọn hồ sơ có giao dịch gần nhất rồi nhờ người duyệt ngoại lệ.

B. Hỏi định danh bổ sung được phép để phân biệt đúng khách.

C. Áp dụng trường hợp tương tự nhất trong chính sách để tránh chờ.

D. Chuyển ngoại lệ cho người có thẩm quyền, kèm thông tin và điểm chưa rõ.

**Câu 4 — Chọn một.** Hồ sơ chuyển cấp chứa toàn bộ transcript nhưng nhân viên vẫn hỏi lại mã đơn, số tiền và điều đã thử. Cải thiện nào hữu ích nhất?

A. Tăng giới hạn độ dài transcript để không cắt mất thông tin.

B. Thêm đánh giá cảm xúc khách hàng ở đầu transcript.

C. Để mô hình viết lại toàn bộ hội thoại thành văn xuôi trôi chảy.

D. Bàn giao case state: định danh, facts, bước đã thử, quyết định còn mở.

**Câu 5 — Chọn hai.** Khách đã xác minh cho đơn A, sau đó đổi sang đơn B và tăng số tiền hoàn. Hai điều kiện nào gate cần đánh giá lại trước khi thực thi?

A. Sự gắn kết giữa người được xác minh, đối tượng giao dịch và quyền thực hiện.

B. Giới hạn chính sách với số tiền và trạng thái giao dịch hiện tại.

C. Độ lịch sự của câu trả lời chấp thuận mà mô hình đã soạn.

D. Việc mô hình từng gọi thành công công cụ hoàn tiền trong cùng phiên.

## Đáp án và giải thích

1. **C.** C đặt bất biến tại điểm thực thi. A và B cải thiện hành vi nhưng không cưỡng chế điều kiện. D phát hiện sau tác động; hoàn tác có thể không khả dụng hoặc thất bại.

2. **A.** A thực hiện tiêu chí chuyển người đã đủ. B ưu tiên tối ưu vận hành hơn yêu cầu rõ ràng. C và D tạo trở ngại không được chính sách yêu cầu và bắt khách lặp lại ý muốn.

3. **B, D.** B giải quyết thiếu định danh; D giải quyết thiếu thẩm quyền/quy tắc. A vẫn có thể chọn nhầm người dù ngoại lệ được duyệt. C tự mở rộng chính sách khi chưa có căn cứ.

4. **D.** D giúp người nhận hành động và thấy trạng thái xác minh. A không giải quyết khả năng tìm dữ kiện; B không thay thế dữ liệu nghiệp vụ; C dễ mất định danh hoặc mức chắc chắn trong quá trình tóm tắt.

5. **A, B.** A ngăn tái dùng xác minh sai phạm vi; B kiểm tra điều kiện trên yêu cầu mới. C không chứng minh quyền hay điều kiện. D chỉ là lịch sử thực thi, không cấp quyền cho giao dịch khác.
