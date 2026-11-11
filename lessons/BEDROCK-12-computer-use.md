# Kiểm thử giao diện qua phản hồi trực quan

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276807), sources/bedrock-lessons/276807.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Computer Use là cách để mô hình quan sát giao diện và yêu cầu ứng dụng thực hiện thao tác như chụp màn hình, bấm chuột, gõ hoặc cuộn. Sau mỗi thao tác, mô hình dùng trạng thái mới để chọn bước tiếp theo.

Ví dụ kiểm thử trong bài là tính năng gợi ý tên tài liệu: gõ `@`, chọn bằng Enter, rồi dùng Backspace và xem vị trí danh sách gợi ý. Danh sách xuất hiện chưa đủ để kết luận đúng nếu nó che mất ô nhập.

Mỗi trường hợp kiểm thử cần trạng thái ban đầu, các bước, kết quả mong đợi và bằng chứng quan sát. Khi cần, tải lại trang hoặc chuẩn bị lại dữ liệu giữa các trường hợp để tránh ảnh hưởng lẫn nhau. Ghi rõ bước đạt, bước không đạt và phần chưa quan sát được.

Mẫu chạy môi trường máy tính trong container. Điều này giúp giới hạn phạm vi ảnh hưởng nhưng không tự loại bỏ rủi ro từ dữ liệu, mạng, tài khoản thật hoặc thao tác có hậu quả. Vẫn cần giới hạn tài nguyên và xác minh trước hành động khó đảo ngược; không coi nhận định “không có rủi ro” trong ví dụ là bảo đảm chung.

## Tự kiểm tra

**Câu 1 — Chọn một.** Computer Use nhập @ và thấy danh sách gợi ý. Ảnh cho thấy danh sách che ô nhập, nhưng tác nhân ghi test đạt. Thiếu tiêu chí nào?

A. Kiểm tra chọn gợi ý và vị trí popup theo yêu cầu.

B. Kiểm tra có bất kỳ pixel nào thay đổi sau khi nhập @.

C. Xác nhận lệnh gõ ký tự trả thành công từ bộ thực thi.

D. Xác nhận mô hình đã gọi đúng tên công cụ bàn phím.

**Câu 2 — Chọn hai.** Ca kiểm thử Backspace thất bại chỉ khi chạy sau ca Enter. Hai việc nào giúp xác định lỗi giao diện hay lỗi bố trí test?

A. Ghi trạng thái ban đầu và chuẩn bị lại dữ liệu giữa các ca.

B. Chỉ chạy ca thành công cuối cùng rồi thay kết quả thất bại bằng kết quả đó.

C. Tăng số lần bấm Backspace đến khi giao diện giống ảnh mong đợi.

D. Lưu các bước, kết quả mong đợi và bằng chứng quan sát của từng ca.

**Câu 3 — Chọn một.** Container kiểm thử đăng nhập tài khoản thật và có thể gửi email ra ngoài. Hệ thống được mô tả là sandbox. Kết luận phù hợp?

A. Chỉ cần xóa container sau test để đảo ngược email đã gửi.

B. Có thể bỏ xác minh người nhận nếu ảnh giao diện trông giống môi trường test.

C. Vẫn phải giới hạn tài khoản, mạng và thao tác có hậu quả theo nhiệm vụ.

D. Có thể cho gửi thật vì container đã cô lập mọi hậu quả bên ngoài.

**Câu 4 — Chọn hai.** Tác nhân kiểm thử biểu mẫu, nhưng màn hình cuối bị che bởi hộp thoại và chưa quan sát được dữ liệu lưu. Hai cách báo cáo nào phù hợp?

A. Đánh dấu thành công vì lệnh bấm nút gửi không báo lỗi.

B. Lưu bằng chứng hộp thoại rồi xác định bước kiểm tra tiếp trong phạm vi cho phép.

C. Nêu rõ bước gửi đã thực hiện và việc lưu dữ liệu còn chưa kiểm chứng.

D. Đánh dấu thất bại dữ liệu vì không nhìn thấy bản ghi dưới hộp thoại.

**Câu 5 — Chọn một.** Kịch bản cần gõ @, chọn Enter, xóa bằng Backspace và kiểm tra vị trí popup. Phương án nào cho bằng chứng có thể tái hiện?

A. Lưu trạng thái đầu, thao tác và bằng chứng tại các điểm kiểm tra.

B. Chỉ lưu ảnh cuối vì nó đại diện toàn bộ quá trình.

C. Chỉ lưu số lần gọi công cụ vì các thao tác đều xác định được.

D. Lưu lời nhận xét “hoạt động bình thường” của tác nhân sau mỗi lần chạy.

## Đáp án và giải thích

1. **A.** A đánh giá yêu cầu sản phẩm. B chỉ thấy thay đổi giao diện; C và D kiểm tra thao tác kỹ thuật, không chứng minh trải nghiệm đúng.

2. **A, D.** A kiểm soát ảnh hưởng giữa ca; D cho phép tái hiện. C làm đổi kịch bản không kiểm soát; B che tính phụ thuộc và bỏ bằng chứng lỗi.

3. **C.** C xét tài nguyên và tác động thực tế. D nhầm cô lập tiến trình với dịch vụ ngoài; A không thu hồi email; B hình thức giao diện không chứng minh tài khoản hoặc người nhận an toàn.

4. **B, C.** C phân biệt hành động và kết quả; B giúp tiếp tục kiểm chứng. A kết luận thành công quá sớm; D suy thất bại từ thiếu quan sát.

5. **A.** A nối hành động với quan sát theo tiêu chí. B bỏ mất lỗi trung gian; C đo hoạt động thay vì hành vi; D thiếu dữ liệu để tái hiện hoặc kiểm tra độc lập.

## Đối chiếu phụ đề chính thức

Ví dụ kiểm thử gợi ý tài liệu dùng `@`, Enter và Backspace rồi quan sát danh sách gợi ý lệch vị trí. Báo đạt hoặc không đạt phải theo tiêu chí cụ thể. Trình duyệt trong Docker vẫn có thể tác động bên ngoài qua tài khoản và dịch vụ, nên không coi là loại bỏ mọi rủi ro. Dùng chung câu hỏi.

Nguồn đối chiếu: [Computer use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289233). Bản lưu: `sources/vertex-media/289233.json`.
