# Kiểm thử giao diện qua phản hồi trực quan

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276807), sources/bedrock-lessons/276807.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use là cách để mô hình quan sát giao diện và yêu cầu ứng dụng thực hiện thao tác như chụp màn hình, bấm chuột, gõ hoặc cuộn. Sau mỗi thao tác, mô hình dùng trạng thái mới để chọn bước tiếp theo.

Ví dụ kiểm thử trong bài là tính năng gợi ý tên tài liệu: gõ `@`, chọn bằng Enter, rồi dùng Backspace và xem vị trí danh sách gợi ý. Danh sách xuất hiện chưa đủ để kết luận đúng nếu nó che mất ô nhập.

Mỗi trường hợp kiểm thử cần trạng thái ban đầu, các bước, kết quả mong đợi và bằng chứng quan sát. Khi cần, tải lại trang hoặc chuẩn bị lại dữ liệu giữa các trường hợp để tránh ảnh hưởng lẫn nhau. Ghi rõ bước đạt, bước không đạt và phần chưa quan sát được.

Mẫu chạy môi trường máy tính trong container. Điều này giúp giới hạn phạm vi ảnh hưởng nhưng không tự loại bỏ rủi ro từ dữ liệu, mạng, tài khoản thật hoặc thao tác có hậu quả. Vẫn cần giới hạn tài nguyên và xác minh trước hành động khó đảo ngược; không coi nhận định “không có rủi ro” trong ví dụ là bảo đảm chung.

## Câu hỏi

**1. Chọn một.** Dropdown xuất hiện nhưng che trường nhập sau Backspace. Tiêu chí nào bắt được lỗi?

A. Chỉ kiểm tra browser đã mở.

B. Chỉ kiểm tra có một click.

C. Kiểm tra trạng thái hiển thị và vị trí dropdown sau đúng chuỗi thao tác.

D. Chỉ kiểm tra HTTP 200.

**2. Chọn một.** Ca thứ hai phụ thuộc tình cờ vào dữ liệu ca thứ nhất. Cải thiện phù hợp?

A. Định nghĩa trạng thái đầu và reset/chuẩn bị dữ liệu phù hợp giữa các ca.

B. Chạy ngẫu nhiên mà không ghi trạng thái.

C. Bỏ kết quả mong đợi.

D. Coi mọi click là pass.

**3. Chọn một.** Desktop nằm trong Docker nhưng có tài khoản thật đăng nhập. Kết luận đúng?

A. Mọi thao tác đều an toàn tuyệt đối.

B. Không cần giới hạn mạng.

C. Không cần kiểm tra quyền.

D. Vẫn cần giới hạn tài nguyên và kiểm soát hành động có hậu quả.

## Đáp án

1. **C.** Kiểm tra trạng thái hiển thị và vị trí dropdown sau đúng chuỗi thao tác. A/B/D không quan sát hành vi UI mà ca kiểm thử cần xác minh.

2. **A.** Định nghĩa trạng thái đầu và reset/chuẩn bị dữ liệu phù hợp giữa các ca. B làm khó tái hiện; C/D không kiểm chứng được hành vi.

3. **D.** Vẫn cần giới hạn tài nguyên và kiểm soát hành động có hậu quả. A/B/C nhầm cô lập môi trường với loại bỏ mọi tác động qua tài khoản/dịch vụ ngoài.

## Đối chiếu phụ đề chính thức

Ví dụ kiểm thử gợi ý tài liệu dùng `@`, Enter và Backspace rồi quan sát danh sách gợi ý lệch vị trí. Báo đạt hoặc không đạt phải theo tiêu chí cụ thể. Trình duyệt trong Docker vẫn có thể tác động bên ngoài qua tài khoản và dịch vụ, nên không coi là loại bỏ mọi rủi ro. Dùng chung câu hỏi.

Nguồn đối chiếu: [Computer use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289233). Bản lưu: `sources/vertex-media/289233.json`.
