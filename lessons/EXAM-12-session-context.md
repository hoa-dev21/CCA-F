# Resume, fork và trạng thái qua ranh giới context

Nguồn: Exam Guide CCAR-F v1.0, mục 1.7, 5.1 và 5.4, trang PDF 8–9, 19–22. Câu hỏi tự biên soạn.

## Tóm tắt

Resume dùng lại một phiên khi phần lớn context còn đúng; báo rõ file nào đã đổi để agent đọc lại đúng chỗ. Khi tool results cũ đã lỗi thời nhiều, phiên mới với bản tóm tắt có cấu trúc và nguồn hiện tại có thể đáng tin hơn giữ mọi lịch sử cũ.

Exam Guide mục1.7 mô tả `--resume <session-name>` để chọn đúng phiên điều tra đã đặt tên. Resume không phải chạy lại một prompt giống nhau trong phiên mới. Khi quay lại sau thay đổi code, truyền danh sách file đã sửa và yêu cầu xác minh lại phần ảnh hưởng. Đây là cú pháp theo đề cương; khi dùng thực tế cần kiểm tra giao diện phiên bản đang cài.

Fork tạo nhánh độc lập từ baseline để khám phá phương án khác. Không giả định các nhánh tự chia sẻ kết quả mới hoặc bộ nhớ. Thuật ngữ/cấu hình `fork_session` trong đề cương cần đối chiếu SDK lúc triển khai.

Giữ case facts riêng cho ID, số tiền, ngày, trạng thái và kỳ vọng người dùng, thay vì chỉ để trong tóm tắt tự do dễ mất độ chính xác. Lược bớt trường tool không cần và đưa phát hiện quan trọng lên phần đầu tổng hợp; vẫn bảo toàn nguồn/ngày và khoảng trống.

Trong phiên nhiều vấn đề, duy trì một lớp dữ liệu có cấu trúc theo từng issue/order, đưa case facts liên quan vào mỗi request bên ngoài phần lịch sử đã nén. Nén dần có thể biến “hoàn35%, giao trước ngày12” thành “khách muốn hoàn và giao sớm”, làm mất điều kiện quyết định. Trả40field từ order lookup khi chỉ5field liên quan cũng làm context phình mà ít thêm giá trị; lọc đúng trường trước khi tích lũy và giữ tham chiếu để lấy lại khi cần.

Hiệu ứng “lost in the middle” trong đề cương nhắc rằng thông tin giữa input dài dễ bị bỏ sót hơn; đây là rủi ro thiết kế, không là bảo đảm mọi model luôn đọc đúng hai đầu. Đặt key-findings summary ở đầu, chia chi tiết bằng header rõ. Sửa upstream để trả key facts, citations, ngày/vị trí/phương pháp và relevance thay vì dồn văn bản dài cùng toàn bộ chuỗi lý giải vào downstream. Khi dùng Messages API, lịch sử/context cần thiết phải được gửi lại đúng cấu trúc, gồm tool blocks, không chỉ nằm trong biến server.

Với khám phá repo dài, subagents giữ output tìm kiếm chi tiết, coordinator giữ bức tranh tổng thể. Scratchpad lưu phát hiện; manifest trỏ tới state export từng agent để phục hồi sau crash. Khi resume, tải và đưa trạng thái cần vào context, không chỉ có file trên đĩa rồi mong model tự biết.

Dấu hiệu context suy giảm là câu trả lời đổi sang “thường hệ thống sẽ…” thay vì trỏ đúng class đã tìm, hoặc kết luận không nhất quán với findings trước. Giao câu hỏi cụ thể cho từng nhánh như tìm test files hay trace refund dependencies; ghi đường dẫn/bằng chứng vào scratchpad, tổng hợp phase hiện tại rồi đưa summary vào context ban đầu của phase sau. Theo guide, `/compact` giảm context discovery dài; trước khi nén vẫn giữ facts/trạng thái quan trọng có cấu trúc và kiểm tra summary không mất chúng.

## Câu hỏi

**1. Chọn một.** Repo đã thay đổi lớn từ lần điều tra trước. Agent liên tục viện dẫn tool results cũ. Lựa chọn phù hợp?

A. Giữ lịch sử cũ và cấm đọc lại.

B. Chỉ thêm câu “hãy chính xác”.

C. Báo hoàn tất vì đã có baseline.

D. Cân nhắc phiên mới với summary/state có nguồn và xác minh lại file hiện tại.

**2. Chọn hai.** Phục hồi sau crash trong hệ nhiều agent nên có gì?

A. State có cấu trúc ở vị trí biết trước và manifest để coordinator tải.

B. Chỉ dựa vào trí nhớ không được lưu.

C. Đưa summary/phát hiện cần thiết vào prompt agent khởi động lại.

D. Giả định file tồn tại nghĩa subagent đã đọc.

**3. Chọn một.** Summary dài dần làm mất chính xác số tiền và order ID. Cách sửa phù hợp?

A. Nén thêm mọi con số thành mô tả chung.

B. Giữ facts giao dịch có cấu trúc ngoài phần summary dễ mất chi tiết.

C. Dùng confidence thay order ID.

D. Xóa kết quả tool liên quan.

## Đáp án

1. **D.** A giữ trạng thái sai; B không thay bằng chứng; C nhầm lịch sử với hiện trạng.
2. **A, C.** B không phục hồi được; D nhầm lưu trữ với context model đã nhận.
3. **B.** A mất dữ kiện thêm; C sai loại thông tin; D bỏ nguồn cần thiết.
