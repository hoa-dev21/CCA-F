# Ứng dụng thực thi vòng công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276805), sources/bedrock-lessons/276805.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use dùng cùng nguyên tắc vòng gọi công cụ: gửi mục tiêu và định nghĩa công cụ cho mô hình, nhận yêu cầu thao tác, để ứng dụng thực hiện trong môi trường máy tính rồi gửi kết quả trở lại. Mô hình quan sát kết quả để quyết định bước tiếp theo.

Bản mô tả công cụ chỉ cho biết khả năng và đầu vào. Nó không tự tạo môi trường máy tính hoặc chạy chuột, bàn phím. Mẫu triển khai trong bài dùng Docker, Firefox và mã điều khiển các thao tác này.

AWS profile là cấu hình của mẫu dùng Bedrock, không phải yêu cầu chung cho mọi cách triển khai Computer Use. Trước khi thực hành, cần kiểm tra mô hình, công cụ và nhà cung cấp có tương thích với nhau không.

Giữ mã liên kết giữa lời gọi và kết quả, báo rõ lỗi thực thi và quan sát lại màn hình sau thao tác. Ví dụ: nếu bộ thực thi không tìm được màn hình, phải gửi lỗi để có thể xử lý tiếp, không giả vờ đã bấm thành công.

Đặt giới hạn số bước, thời gian, điều kiện thành công và cách thoát hoặc chuyển xử lý khi lỗi. Lặp lại thao tác bấm mà trang không đổi cần được chẩn đoán, không tiếp tục vô hạn.

## Tự kiểm tra

**Câu 1 — Chọn một.** Ứng dụng đã gửi schema công cụ chuột nhưng chưa có tiến trình điều khiển máy tính. Mô hình trả yêu cầu bấm nút. Phần nào còn thiếu để hoàn thành vòng xử lý?

A. Một mô tả công cụ chi tiết hơn để mô hình tự thực thi cú bấm.

B. AWS profile ở mọi nhà cung cấp để schema trở thành công cụ đang chạy.

C. Một câu assistant xác nhận đã bấm để mô hình chuyển bước.

D. Executor chạy thao tác, trả kết quả và quan sát cho mô hình.

**Câu 2 — Chọn hai.** Hai thao tác liên tiếp là bấm Lưu và chụp màn hình. Bộ thực thi trả kết quả chụp cho ID của thao tác bấm. Hai điều cần sửa?

A. Quan sát trạng thái sau thao tác trước khi suy ra việc lưu thành công.

B. Giữ đúng mã liên kết giữa từng lời gọi và kết quả tương ứng.

C. Gắn mọi kết quả vào thao tác cuối để giảm kích thước lịch sử.

D. Bỏ ID vì thứ tự mảng đã đủ khi hệ thống chạy bất đồng bộ.

**Câu 3 — Chọn một.** Sau ba lần bấm cùng tọa độ, màn hình không thay đổi. Chính sách cho phép tối đa mười bước. Bước tiếp theo hợp lý nhất?

A. Đổi ngẫu nhiên tọa độ đến khi có thay đổi trên màn hình.

B. Kiểm tra trạng thái, lỗi tool và mục tiêu trước khi thử lại.

C. Bấm thêm bảy lần rồi báo thành công vì đã dùng hết ngân sách.

D. Tăng ngân sách tự động vì thao tác hợp lệ theo schema.

**Câu 4 — Chọn hai.** Bạn chuyển mẫu Computer Use từ Bedrock sang nhà cung cấp khác. Hai kiểm tra nào cần làm trước khi chạy?

A. Chỉ thay URL endpoint vì cấu trúc công cụ luôn giống nhau ở mọi nơi.

B. Giữ AWS profile làm điều kiện bắt buộc của mọi triển khai mới.

C. Xác nhận bộ thực thi, môi trường quan sát và cơ chế báo lỗi hoạt động.

D. Kiểm tra mô hình và giao diện công cụ có tương thích với nhà cung cấp mới.

**Câu 5 — Chọn một.** Bộ thực thi không tìm được màn hình để chụp sau khi bấm. Host cần phản hồi ra sao?

A. Trả ảnh cũ và đánh dấu thành công để không làm gián đoạn kế hoạch.

B. Bỏ kết quả lỗi rồi yêu cầu mô hình tiếp tục từ bước kế tiếp.

C. Trả ảnh trống như ảnh thật vì định dạng vẫn hợp lệ.

D. Trả lỗi đúng lời gọi để vòng xử lý quyết định phục hồi/dừng.

## Đáp án và giải thích

1. **D.** D hoàn tất phía host và phản hồi. A nhầm khai báo với thực thi; B biến cấu hình mẫu thành yêu cầu chung; C tạo xác nhận không có hành động.

2. **A, B.** B giữ hợp đồng vòng công cụ; A kiểm chứng tác động. D dễ nhầm khi kết quả về khác thứ tự; C làm mất quan hệ giữa hành động và bằng chứng.

3. **B.** B sử dụng phản hồi để điều chỉnh. C nhầm giới hạn với thành công; D tránh ràng buộc thay vì xử lý lỗi; A tạo tác động không gắn với mục tiêu.

4. **C, D.** D kiểm tra hợp đồng dịch vụ; C kiểm tra phía thực thi. B là chi tiết mẫu Bedrock, không phải bản chất Computer Use; A giả định tương thích chưa được xác minh.

5. **D.** D giữ trạng thái trung thực và khả năng phục hồi. A dùng bằng chứng lỗi thời; B mất thông tin cần chẩn đoán; C đúng định dạng nhưng sai nghĩa.

## Đối chiếu phụ đề chính thức

Computer Use dùng định nghĩa, yêu cầu và kết quả công cụ theo cùng nguyên tắc tool use. Ứng dụng phải cung cấp môi trường thao tác chuột, bàn phím và trả phản hồi. Mẫu Docker là một cách triển khai; schema không tự tạo môi trường máy tính hoặc bảo đảm an toàn tuyệt đối. Dùng chung câu hỏi.

Nguồn đối chiếu: [How computer use works](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289234). Bản lưu: `sources/vertex-media/289234.json`.
