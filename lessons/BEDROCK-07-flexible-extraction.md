# Linh hoạt và hợp đồng chặt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276763), sources/bedrock-lessons/276763.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài dùng công cụ `to_json` có đầu vào là một đối tượng dữ liệu linh hoạt, còn các trường mong muốn được mô tả trong prompt. Cách này giúp thử nhanh khi bản mẫu ứng dụng thường xuyên đổi yêu cầu.

Đổi lại, schema — bản mô tả cấu trúc dữ liệu — không bắt buộc chặt những trường và kiểu dữ liệu cụ thể. Ví dụ: bước tiếp theo cần `amount` là số, nhưng schema cho phép mọi đối tượng. Ép mô hình gọi `to_json` chưa chứng minh `amount` tồn tại và có đúng kiểu.

Khi dữ liệu quan trọng hoặc có cấu trúc lồng nhau phức tạp, cần cân nhắc schema riêng cho nhiệm vụ và kiểm tra phù hợp. JSON hợp lệ vẫn có thể thiếu trường, sai giá trị hoặc không đáp ứng yêu cầu nghiệp vụ.

Thêm một trường vào prompt không tự cập nhật quy định dữ liệu của hệ thống nhận. Hãy chọn mức linh hoạt dựa trên mức độ quan trọng, độ phức tạp và kết quả kiểm thử. Tỷ lệ lợi ích được nêu trong khóa chỉ là minh họa, không phải số đo có thể áp dụng chung.

## Câu hỏi

**1. Chọn một.** Prototype thay cấu trúc thường xuyên, chưa có yêu cầu quy định về dữ liệu và hành vi chặt. Cách linh hoạt trong bài có đánh đổi gì?

A. Không có đánh đổi.

B. Ít quản lý bản mô tả cấu trúc dữ liệu hơn nhưng yếu hơn về cưỡng chế trường/kiểu cụ thể.

C. Bảo đảm chính xác mọi dữ liệu.

D. Tự tạo mọi quyền hệ thống xử lý phía máy chủ.

**2. Chọn một.** Bước xử lý tiếp theo bắt buộc `amount` là số, nhưng schema cho phép mọi đối tượng dữ liệu. Chỉ ép gọi `to_json` đã đủ chưa?

A. Đủ vì tên có JSON.

B. Đủ nếu prompt dài.

C. Chưa; cần hợp đồng/validation kiểu và ngữ nghĩa phù hợp.

D. Đủ nếu không ghi log.

**3. Chọn một.** Khi chọn schema linh hoạt dùng chung hay schema riêng cho một nhiệm vụ, nên dựa vào gì?

A. Độ quan trọng hợp đồng, mức phức tạp và kết quả phép đánh giá thực tế.

B. Chỉ một tỷ lệ minh họa trong video.

C. Chỉ tên công cụ ngắn hơn.

D. Không cần xét downstream.

## Đáp án

1. **B.** A bỏ đánh đổi; C bảo đảm quá mức; D sai phạm vi quyền.
2. **C.** A và B dựa hình thức; D bỏ quan sát mà không tạo quy định về dữ liệu và hành vi.
3. **A.** B không phải phép đo tác vụ; C không nói độ đúng; D bỏ yêu cầu nhận dữ liệu.
