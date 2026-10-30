# Computer Use — Kiểm thử giao diện qua phản hồi trực quan

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276807), sources/bedrock-lessons/276807.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Computer Use cho phép ứng dụng thực thi yêu cầu chụp màn hình, click, gõ và cuộn để model quan sát rồi quyết định bước tiếp theo. Bài minh họa QA autocomplete: nhập @, chọn bằng Enter, rồi kiểm tra vị trí dropdown sau Backspace. Tiêu chí cụ thể giúp phân biệt thao tác thành công với giao diện thực sự đúng.

Mỗi ca nên có trạng thái ban đầu rõ, các bước, kết quả mong đợi và bằng chứng quan sát. Reset trang giữa các ca khi cần tránh trạng thái trước ảnh hưởng ca sau. Ghi rõ bước nào pass/fail và giới hạn quan sát; thao tác click đã chạy không đồng nghĩa tác vụ đã thành công.

Mẫu chạy desktop trong container. Cô lập làm giảm phạm vi ảnh hưởng nhưng không tự loại bỏ rủi ro dữ liệu, mạng, tài khoản hay thao tác có hậu quả. Chỉ cấp tài nguyên cần thiết, xác minh trước hành động khó đảo ngược. Các nhận định “không có rủi ro” trong bài không được dùng làm bảo đảm kiến trúc.

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

Đã đọc toàn bộ phụ đề tiếng Anh của [Computer use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289233), sources/vertex-media/289233.json. Demo QA autocomplete @, Enter và Backspace, quan sát dropdown lệch vị trí; cần báo cáo pass/fail theo tiêu chí rõ. Browser trong Docker không loại bỏ mọi tác động ra ngoài qua tài khoản/dịch vụ. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
