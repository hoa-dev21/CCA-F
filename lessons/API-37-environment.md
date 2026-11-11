# Quan sát kết quả hành động

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287798), sources/api-lessons/287798.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Tác nhân AI cần biết trạng thái hiện tại và kết quả thao tác để quyết định bước tiếp theo. Gửi một lệnh chỉ chứng minh đã yêu cầu thực hiện, chưa chứng minh đạt được thay đổi mong muốn.

Ví dụ: Trước khi sửa tệp cấu hình, cần đọc tệp và các phần liên quan để hiểu dự án. Sau khi gọi API, cần xem phản hồi có thành công và có dữ liệu cần thiết không. Sau khi tạo sản phẩm, cần đối chiếu sản phẩm với yêu cầu.

Quá trình quan sát, hành động rồi kiểm tra giúp tác nhân phát hiện lỗi và điều chỉnh. Nếu API trả lỗi nhưng tác nhân vẫn tiếp tục như đã nhận dữ liệu, các bước sau có thể dựa vào giả định sai.

Khi thiết kế công cụ, hãy hỏi: “Tác nhân sẽ biết thao tác này thành công bằng cách nào?”. Công cụ thực hiện cần đi cùng cách đọc kết quả hoặc kiểm tra trạng thái. Ví dụ giao diện và video trong bài minh họa nguyên tắc này; chi tiết điều khiển máy tính và xử lý hình ảnh nằm ngoài phạm vi đề cương đã lưu.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Agent gửi lệnh sửa cấu hình, nhận mã thoát 0, rồi báo tính năng đã hoạt động. Kiểm tra sau đó cho thấy ứng dụng đọc một tệp cấu hình khác. Bổ sung nào trực tiếp ngăn kết luận sai này?

A. Yêu cầu mô hình giải thích vì sao chọn đường dẫn trước khi gửi lệnh.

B. Kiểm tra trạng thái mà ứng dụng thực sự sử dụng sau thao tác.

C. Đánh dấu thành công nếu cả lệnh và quá trình ghi log đều không lỗi.

D. Chạy lại lệnh ghi cấu hình và so sánh hai mã thoát.

**Câu 2 — Chọn một.** Một API trả HTTP 200 với nội dung “processing”. Bước kế tiếp cần bản ghi đã hoàn tất để tính báo cáo. Thiết kế phù hợp nhất là gì?

A. Cho mô hình suy luận dữ liệu cuối từ dữ liệu tạm để giảm độ trễ.

B. Đọc trạng thái hoàn tất theo hợp đồng API trước khi chạy bước phụ thuộc.

C. Cho bước báo cáo dùng dữ liệu phản hồi vì HTTP 200 đã xác nhận thành công.

D. Đợi một khoảng cố định rồi luôn đánh dấu hoàn tất.

**Câu 3 — Chọn hai.** Agent sửa repo chưa quen. Tệp cấu hình tồn tại nhưng có các mục phụ thuộc lẫn nhau. Hai kiểm tra nào đặt đúng chỗ trong vòng quan sát–hành động?

A. Đọc lại prompt ban đầu thay cho đọc tệp vì yêu cầu đã đầy đủ.

B. Dùng câu xác nhận của agent làm bằng chứng hậu kiểm.

C. Đọc cấu hình hiện tại cùng các phần liên quan trước khi lập thay đổi.

D. Đối chiếu diff và hành vi cần đạt sau khi sửa.

**Câu 4 — Chọn một.** Sau thao tác xuất báo cáo, công cụ chỉ trả “request sent”. Nhóm muốn agent biết lúc nào có thể giao tệp. Cần sửa hợp đồng công cụ theo hướng nào?

A. Đổi thông báo thành “report generated” để mô hình không hiểu nhầm.

B. Trả mã tác vụ cùng cơ chế kiểm tra hoàn tất và lấy tệp.

C. Yêu cầu agent kể lại đầy đủ các bước đã gửi.

D. Cho mô hình xác nhận dựa trên thời lượng xuất báo cáo trung bình.

**Câu 5 — Chọn hai.** API tra cứu thất bại nhưng đã trả một phần dữ liệu. Agent định dùng phần đó để hoàn tất tổng hợp. Hai việc nào cần làm trước khi kết luận?

A. Coi phần dữ liệu nhận được là toàn bộ vì công cụ đã trả phản hồi.

B. Ghi nhận lỗi và chọn phục hồi hoặc báo hạn chế theo trạng thái thực.

C. Xác định phần dữ liệu thiếu có ảnh hưởng tới kết luận yêu cầu không.

D. Chuyển lỗi thành danh sách rỗng để bước sau chạy thống nhất.

## Đáp án và giải thích

1. **B.** A sai: Lập luận trước hành động không thay quan sát kết quả. B đúng: Thành công của lệnh chưa chứng minh trạng thái đích đã đổi. C sai: Hai tín hiệu cùng phản ánh thực thi, chưa kiểm tra tác động mong muốn. D sai: Lặp cùng thao tác sai đích vẫn có thể cùng thành công.

2. **B.** A sai: Dữ liệu tạm không chứng minh trạng thái cuối. B đúng: Phải kiểm tra điều kiện nghiệp vụ, không chỉ giao vận. C sai: Đã nhận yêu cầu không đồng nghĩa xử lý xong. D sai: Thời gian chờ không phải quan sát trạng thái mong muốn.

3. **C, D.** A sai: Yêu cầu mô tả mục tiêu, không chứa toàn bộ trạng thái hiện tại. B sai: Lời tự báo cáo không thay kết quả quan sát môi trường. C đúng: Cần trạng thái thật để tránh giả định cấu trúc. D đúng: Kiểm tra tác động của hành động lên mục tiêu.

4. **B.** A sai: Đổi nhãn không bổ sung bằng chứng hoàn tất. B đúng: Agent có đường quan sát kết quả thực thi. C sai: Lịch sử yêu cầu không chứng minh có tệp đầu ra. D sai: Trung bình không xác nhận lần thực thi cụ thể.

5. **B, C.** A sai: Có phản hồi không chứng minh dữ liệu đầy đủ. B đúng: Bước tiếp theo phải phản ánh kết quả đã quan sát. C đúng: Dữ liệu một phần có thể không đủ điều kiện trả lời. D sai: Không tìm thấy dữ liệu và không tra cứu được là hai trạng thái khác nhau.

## Đối chiếu Vertex

Đọc trạng thái trước khi sửa và quan sát kết quả sau thao tác. Ví dụ kiểm tra phụ đề, mốc thời gian, ảnh chụp và định dạng tệp giúp xác minh sản phẩm video. Không mặc định mọi bộ thực thi Computer Use đều tự trả ảnh sau mỗi hành động; ứng dụng cần cung cấp quan sát phù hợp. Mức kiểm tra nên dựa trên kết quả và tác động, tránh lặp kiểm tra vô ích sau mỗi bước nhỏ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Environment inspection](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289237). Bản lưu: `sources/vertex-lessons/289237.json`.
