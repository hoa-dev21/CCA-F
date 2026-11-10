# Kiểm chứng phiên tự chạy

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486938), sources/code-lessons/486938.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Khi để AI tự chạy và ít theo dõi từng bước, bạn càng cần kiểm tra bằng chứng sau khi nó kết thúc. Bắt đầu từ trạng thái tệp thực tế và diff — phần mã đã thay đổi — thay vì chỉ đọc bản tóm tắt của AI.

Đối chiếu các tệp đã sửa với kế hoạch, rồi tìm những thay đổi ngoài phạm vi. Sau đó chạy các kiểm thử phù hợp và xem kết quả thực tế. Nếu một kiểm tra bắt buộc phải đạt trước khi tiếp tục, có thể dùng hook hoặc mã kiểm soát để chặn khi kiểm tra chưa đạt, thay vì chỉ nhắc AI trong yêu cầu.

Với cách chạy không tương tác (headless), hãy xem cả kết quả JSON và mã kết thúc chương trình (exit code). Chỉ một tín hiệu riêng lẻ có thể chưa chứng minh rằng mọi yêu cầu đã được đáp ứng.

Một phiên rà soát độc lập có thể phát hiện lỗi mà phiên viết mã bỏ sót, nhưng vẫn cần kiểm thử thực tế. Kiểm soát quyền chỉ xác định thao tác có được phép hay không, không chứng minh mã đúng.

Ví dụ: AI được giao tổ chức lại mã nhưng còn sửa một tệp triển khai ngoài kế hoạch. Dù các kiểm thử đơn vị đã thành công, bạn vẫn cần xem thay đổi đó và thực hiện kiểm tra phù hợp trước khi chấp nhận.

## Câu hỏi

**1. Chọn một.** Tóm tắt đẹp nhưng chưa xem mã. Nên bắt đầu kiểm chứng ở đâu?

A. Chỉ đọc lại tóm tắt.

B. Chỉ yêu cầu tác nhân AI tự tin hơn.

C. Diff thực tế, gồm cả thay đổi ngoài kế hoạch.

D. Chỉ đếm số commit.

**2. Chọn một.** Tác nhân AI nói “đã chạy test” nhưng không có kết quả ghi lại. Kết luận phù hợp?

A. Cần chạy/quan sát gate thực tế; lời tuyên bố chưa đủ bằng chứng.

B. Coi là pass vì ngôn ngữ rõ.

C. Bỏ test vì đã có kiểm tra quyền.

D. Chỉ sửa tài liệu để ghi pass.

**3. Chọn một.** Người kiểm tra độc lập có vai trò nào?

A. Bảo đảm không cần test.

B. Tạo góc nhìn mới, bổ sung cho kiểm tra thực thi.

C. Tự động chứng minh mọi requirement đã đạt.

D. Thay thế diff bằng một lời nhận xét chung.

## Đáp án

1. **C.** A và B vẫn dựa lời kể; D không cho biết nội dung thay đổi.
2. **A.** B tin tuyên bố; C nhầm quyền với đúng; D tạo hồ sơ sai.
3. **B.** A và C suy rộng bảo đảm; D bỏ nguồn bằng chứng trực tiếp.
