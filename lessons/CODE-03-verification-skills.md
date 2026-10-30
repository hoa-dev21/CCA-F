# Verification Skills — Quy trình kiểm chứng dùng lại

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486930), sources/code-lessons/486930.json. Câu hỏi tự biên soạn.

## Tóm tắt

Skill đóng gói một quy trình lặp lại. Ví dụ kiểm chứng gồm chạy test, đọc diff, kiểm tra không làm yếu test để tạo kết quả xanh, rồi báo đạt/không đạt kèm bằng chứng.

Mô tả skill giúp hệ thống nhận diện khi nào quy trình liên quan. Nội dung chi tiết và tài liệu tham chiếu chỉ cần đọc khi sử dụng; script hỗ trợ có thể đặt cùng thư mục để thực thi. Giữ file hướng dẫn chính gọn, tách tài liệu sâu thành file tham chiếu có liên kết.

Phân biệt ba bề mặt: CLAUDE.md cho quy ước thường trực; skill cho quy trình theo loại tác vụ; hook cho điều kiện phải được cưỡng chế. Skill tự kích hoạt theo mô tả vẫn dựa vào việc tuân theo hướng dẫn, không thay cơ chế chặn bằng mã nếu quy tắc tuyệt đối không được bỏ qua.

Ví dụ tự biên soạn: test xanh sau khi xóa assertion không chứng minh tính năng đúng. Cần đọc thay đổi test và xem kết quả chạy thực tế, thay vì chỉ tin câu “đã kiểm tra”.

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
