# Hooks — Chặn trước, kiểm tra sau

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-code-in-action/486933), sources/code-lessons/486933.json. Câu hỏi tự biên soạn.

## Tóm tắt

Hook là mã chạy tại điểm xác định trong vòng xử lý. `PreToolUse` can thiệp trước thao tác; `PostToolUse` phù hợp xử lý sau thao tác thành công; `Stop` kiểm tra điều kiện trước khi kết thúc lượt.

Với điều cấm thao tác, chọn hook trước thực thi. Hook sau không thể làm cho thao tác đã xảy ra thành “chưa xảy ra”. Với định dạng/lint sau chỉnh sửa, điểm sau tool phù hợp hơn.

Bài hướng dẫn PreToolUse trả JSON quyết định allow/deny/ask. Khi sửa input bằng `updatedInput`, cần bảo toàn các trường còn lại theo hợp đồng vì đối tượng đầu vào bị thay. Với exit codes trong mẫu, 2 là lỗi chặn ở sự kiện hỗ trợ; 1 là lỗi không chặn. Không giả định mọi hook event đều hỗ trợ chặn giống nhau.

Để bổ sung context sau compact, bài hiện tại dùng `SessionStart` với compact matcher, thay vì mặc định output của PostCompact được đưa vào hội thoại. Đây là chi tiết phiên bản cần kiểm tra trước triển khai.

Cơ chế quyết định là mã, nhưng độ đúng của quy tắc vẫn phụ thuộc cách viết hook và dữ liệu nó kiểm tra. “Có hook” chưa chứng minh chính sách được thực thi đúng.

## Câu hỏi

**1. Chọn một.** Phải ngăn gửi dữ liệu trước khi lệnh chạy. Hook phù hợp nhất?

A. PostToolUse sau khi gửi xong.

B. Chỉ ghi một lời nhắc ở cuối.

C. PreToolUse kiểm tra và từ chối trước thực thi.

D. Chỉ tóm tắt hội thoại.

**2. Chọn một.** Hook ở sự kiện hỗ trợ blocking muốn chặn nhưng trả exit code 1 theo mẫu khóa. Lỗi nào cần xem lại?

A. 1 không phải blocking code trong mẫu; cần cơ chế quyết định/exit code chặn phù hợp.

B. Mọi exit code đều chặn.

C. Chỉ cần log màu đỏ.

D. Không cần kiểm tra event.

**3. Chọn một.** Hook sửa một trường bằng `updatedInput` rồi làm mất trường bắt buộc khác. Cách sửa?

A. Bỏ schema hoàn toàn.

B. Giữ các trường cần thiết trong đối tượng đầu vào thay thế.

C. Cho model đoán lại sau thao tác.

D. Chỉ sửa tên hook.

## Đáp án

1. **C.** A quá muộn; B và D không cưỡng chế trước hành động.
2. **A.** B sai về ngữ nghĩa exit code; C không quyết định luồng; D bỏ khác biệt sự kiện.
3. **B.** A không khôi phục hợp đồng; C dựa vào đoán; D không sửa input.
