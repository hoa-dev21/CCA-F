# Quy trình kiểm chứng dùng lại

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486930), sources/code-lessons/486930.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Skill là bộ hướng dẫn đóng gói một quy trình để dùng lại. Ví dụ: sau mỗi lần tổ chức lại mã (refactor), một skill kiểm chứng có thể yêu cầu chạy kiểm thử, đọc phần thay đổi và báo kết quả kèm bằng chứng.

Phần mô tả của skill giúp hệ thống nhận biết khi nào nên dùng. Hướng dẫn chi tiết và tài liệu tham khảo được đọc khi cần; mã lệnh hỗ trợ có thể đặt cùng thư mục. Nên giữ hướng dẫn chính ngắn gọn và liên kết tới tài liệu giải thích sâu hơn.

Ba loại cấu hình có vai trò khác nhau: CLAUDE.md chứa quy ước thường xuyên áp dụng; skill hướng dẫn quy trình cho một loại nhiệm vụ; hook chạy mã tại một sự kiện để kiểm tra hoặc chặn thao tác. Nếu một bước tuyệt đối không được bỏ qua, chỉ viết nó trong skill chưa đủ để bắt buộc thực hiện.

Ví dụ: Một bài kiểm thử báo thành công sau khi AI xóa điều kiện kiểm tra quan trọng, gọi là assertion. Kết quả đó chưa chứng minh tính năng đúng. Cần xem diff — phần khác biệt giữa mã trước và sau khi sửa — để biết phép kiểm tra có bị làm yếu hay không, đồng thời xem kết quả chạy thực tế.

## Câu hỏi

**1. Chọn một.** Muốn chuẩn hóa chuỗi kiểm tra lặp lại khi refactor. Nơi phù hợp?

A. Một skill có mô tả phù hợp và các bước kiểm chứng.

B. Chỉ ghi trong một phản hồi cũ.

C. Không lưu quy trình, nhớ hỏi thủ công mỗi lần.

D. Chỉ đổi tên repo.

**2. Chọn một.** Test xanh nhưng diff xóa các assertion quan trọng. Kết luận phù hợp?

A. Test xanh luôn đủ.

B. Không cần xem diff test.

C. Chưa chứng minh yêu cầu; cần xác minh test không bị làm yếu.

D. Chỉ cần thêm thông báo “pass”.

**3. Chọn một.** Một bước kiểm tra tuyệt đối không được bỏ qua. Chọn cơ chế nào để cưỡng chế?

A. Chỉ mô tả skill hay hơn.

B. Hook/kiểm soát mã chạy và chặn khi chưa đạt.

C. Chỉ thêm ví dụ thành công.

D. Chỉ lưu checklist trong ghi chú riêng.

## Đáp án

1. **A.** B và C thiếu khả năng tái sử dụng nhất quán; D không chuẩn hóa quy trình.
2. **C.** A bỏ qua chất lượng phép đo; B bỏ bằng chứng; D tạo nhãn thay cho kiểm tra.
3. **B.** A, C, D đều vẫn là chỉ dẫn có thể bị bỏ qua.
