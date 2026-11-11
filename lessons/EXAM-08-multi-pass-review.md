# Review độc lập và review nhiều lượt

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.6, trang PDF 19. Câu hỏi tự biên soạn.

## Nội dung bài học


Mô hình tự rà soát ngay trong cuộc trò chuyện đã viết mã có thể tiếp tục dựa vào các giả định cũ. Một phiên kiểm tra độc lập, nhận yêu cầu và mã nhưng không nhận lời lý giải của bên viết, có thể cung cấp góc nhìn mới.

Với thay đổi nhiều tệp, dồn tất cả vào một prompt lớn có thể khiến một số tệp được xem kỹ còn các tệp khác bị lướt qua. Bài đề xuất hai mức kiểm tra: rà từng tệp, rồi có một lượt riêng xem quan hệ giữa các tệp và đường đi của dữ liệu.

Ví dụ: Một tệp đổi kiểu dữ liệu trả về, nhưng tệp gọi hàm vẫn xử lý theo kiểu cũ. Chỉ kiểm tra từng tệp có thể bỏ sót lỗi này; lượt tích hợp cần đối chiếu hai phía.

Mỗi phát hiện có thể kèm bằng chứng và điểm tự tin. Muốn dùng điểm để quyết định chuyển người duyệt, phải đối chiếu và hiệu chỉnh bằng dữ liệu có nhãn trước. Điểm tự tin không thay bằng chứng và không tự chứng minh phát hiện đúng.

Tăng thời gian suy luận hoặc yêu cầu “tự phản biện kỹ hơn” trong cùng phiên không tạo sự độc lập về ngữ cảnh như một phiên khác. Dù chọn cách nào, vẫn cần đo hiệu quả trên nhiệm vụ cụ thể và thực hiện các kiểm tra cần thiết; không phương pháp nào tự bảo đảm tìm hết lỗi.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Reviewer đọc PR 20 file trong một lượt; thường soi kỹ file đầu nhưng bỏ lỗi ở file cuối. Thiết kế nào tăng độ bao phủ mà vẫn kiểm tra tương tác liên file?

A. Review cục bộ rồi thêm lượt tích hợp hợp đồng/luồng dữ liệu.

B. Đảo thứ tự file mỗi lần và lấy kết quả đầu tiên.

C. Cho mỗi file một reviewer rồi nối nguyên các findings.

D. Tăng độ dài câu trả lời tối đa của một lượt review.

**Câu 2 — Chọn hai.** Tác nhân vừa viết code tự review và lặp lại lý do thiết kế thay vì tìm lỗi. Hai thay đổi nào giúp giảm thiên lệch xác nhận?

A. Bắt tác nhân viết dài hơn phần tự phản biện trong cùng context.

B. Dùng phiên review độc lập nhận yêu cầu và diff hiện tại.

C. Đưa tiêu chí lỗi, ví dụ report/skip và bằng chứng cần có cho reviewer.

D. Chỉ đưa giải thích của tác giả, giấu diff để reviewer không bị chi phối bởi cách cài đặt.

**Câu 3 — Chọn một.** Review từng file đều đạt, nhưng caller vẫn gửi mili giây cho hàm vừa đổi sang giây. Lượt bổ sung nào có giá trị nhất?

A. Chạy lại review từng file với mô hình lớn hơn.

B. Yêu cầu mỗi reviewer xác nhận chính mình đã hiểu đơn vị.

C. Chạy format toàn dự án để đồng nhất cách đặt tên.

D. Review caller, hợp đồng và luồng dữ liệu liên mô-đun.

**Câu 4 — Chọn một.** Hai reviewer báo cùng một lỗi ở hai vị trí; một reviewer khác báo lỗi độc lập có cùng tiêu đề. Cách tổng hợp nào tránh cả trùng lặp lẫn mất lỗi?

A. Khử trùng theo tiêu đề finding.

B. Giữ nguyên mọi finding để không bỏ sót.

C. Đối chiếu nguyên nhân, đường thực thi và vị trí trước khi gộp.

D. Chỉ giữ finding có severity cao nhất trong mỗi file.

**Câu 5 — Chọn hai.** PR được cập nhật sau lượt review. Hai loại ngữ cảnh nào cần cho lượt review lại?

A. Diff/mã hiện tại tại revision mới.

B. Kết luận “đã sửa hết” của tác giả thay cho kiểm tra lại.

C. Findings cũ với vị trí/nguyên nhân để phân biệt đã sửa, còn mở và phát sinh mới.

D. Chỉ diff cũ để tránh thay đổi phạm vi review.

## Đáp án và giải thích

1. **A.** A xử lý cả độ sâu cục bộ và tương tác. B thay vị trí bỏ sót mà không bảo đảm bao phủ. C thiếu kiểm tra liên file. D tăng đầu ra chưa chứng minh chú ý đủ mọi phần.

2. **B, C.** B giảm ảnh hưởng lập luận đã sinh; C hướng đánh giá vào tiêu chí kiểm chứng. A có thể tiếp tục cùng thiên lệch. D bỏ mất đối tượng cần kiểm tra và phụ thuộc hoàn toàn mô tả của tác giả.

3. **D.** D nhìn quan hệ nơi sai lệch xuất hiện. A và B giữ phạm vi đã bỏ sót caller–callee. C có thể cải thiện trình bày nhưng không kiểm tra ngữ nghĩa đơn vị.

4. **C.** C gộp theo cùng lỗi thực chất. A có thể gộp hai lỗi khác nhau. B giữ trùng làm tăng nhiễu. D mất lỗi độc lập chỉ vì nằm cùng file và severity thấp hơn.

5. **A, C.** A cho reviewer bằng chứng hiện tại; C giúp theo dõi trạng thái mà không lặp báo cáo. B là tuyên bố cần kiểm chứng. D khiến đánh giá dựa trên trạng thái đã lỗi thời.
