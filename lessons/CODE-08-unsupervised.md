# Verifying Unsupervised Runs — Kiểm chứng phiên tự chạy

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486938), sources/code-lessons/486938.json. Câu hỏi tự biên soạn.

## Tóm tắt

Càng ít quan sát quá trình, càng cần tái dựng bằng chứng sau khi chạy. Bắt đầu từ diff và trạng thái thật thay vì bản tóm tắt của agent. Xem các file nằm trong kế hoạch, rồi tìm thay đổi ngoài phạm vi.

Chạy test và quan sát kết quả thực tế. Hook có thể biến kiểm thử thành gate thay vì một lời hứa trong prompt. Với headless, xem cả kết quả JSON và exit code; một trong hai riêng lẻ có thể chưa đủ để xác nhận toàn bộ yêu cầu.

Review độc lập bằng phiên mới có thể tìm lỗi mà người viết đã bỏ qua, nhưng không thay phép kiểm tra thực thi. Guardrail quyền kiểm tra hành động, không xác nhận code đúng.

Ví dụ tự biên soạn: agent báo hoàn tất refactor nhưng sửa thêm một file triển khai. Dù test unit xanh, vẫn cần xem thay đổi ngoài phạm vi và kiểm tra phù hợp trước khi chấp nhận.

## Câu hỏi

**1. Chọn một.** Tóm tắt đẹp nhưng chưa xem mã. Nên bắt đầu kiểm chứng ở đâu?

A. Chỉ đọc lại tóm tắt.

B. Chỉ yêu cầu agent tự tin hơn.

C. Diff thực tế, gồm cả thay đổi ngoài kế hoạch.

D. Chỉ đếm số commit.

**2. Chọn một.** Agent nói “đã chạy test” nhưng không có kết quả ghi lại. Kết luận phù hợp?

A. Cần chạy/quan sát gate thực tế; lời tuyên bố chưa đủ bằng chứng.

B. Coi là pass vì ngôn ngữ rõ.

C. Bỏ test vì đã có kiểm tra quyền.

D. Chỉ sửa tài liệu để ghi pass.

**3. Chọn một.** Reviewer độc lập có vai trò nào?

A. Bảo đảm không cần test.

B. Tạo góc nhìn mới, bổ sung cho kiểm tra thực thi.

C. Tự động chứng minh mọi requirement đã đạt.

D. Thay thế diff bằng một lời nhận xét chung.

## Đáp án

1. **C.** A và B vẫn dựa lời kể; D không cho biết nội dung thay đổi.
2. **A.** B tin tuyên bố; C nhầm quyền với đúng; D tạo hồ sơ sai.
3. **B.** A và C suy rộng bảo đảm; D bỏ nguồn bằng chứng trực tiếp.
