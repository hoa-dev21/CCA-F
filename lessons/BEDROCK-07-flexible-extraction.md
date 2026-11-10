# Linh hoạt và hợp đồng chặt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276763), sources/bedrock-lessons/276763.json. Câu hỏi tự biên soạn.

## Nội dung bài học

Bài dùng công cụ to_json chấp nhận cấu trúc object linh hoạt, còn prompt mô tả trường mong muốn. Ưu điểm là đổi yêu cầu nhanh ở prototype; đánh đổi là bản mô tả cấu trúc dữ liệu không cưỡng chế chặt các trường/kiểu cần cho downstream.

Ép gọi đúng công cụ không đồng nghĩa mọi trường nghiệp vụ đã được kiểm tra. Với production quan trọng hoặc nested data phức tạp, dùng bản mô tả cấu trúc dữ liệu chuyên biệt và validation thích hợp. JSON hợp lệ vẫn có thể thiếu trường hoặc đặt nhầm giá trị.

Khóa đưa một tỷ lệ lợi ích/chất lượng dạng minh họa; bản ôn không dùng nó như kết quả benchmark được kiểm chứng. Quyết định mức linh hoạt dựa trên dữ liệu và tiêu chí của ứng dụng. Thêm trường vào prompt không tự cập nhật quy định về dữ liệu và hành vi máy đọc ở hệ thống nhận nếu bản mô tả cấu trúc dữ liệu vẫn quá rộng.

## Câu hỏi

**1. Chọn một.** Prototype thay cấu trúc thường xuyên, chưa có yêu cầu quy định về dữ liệu và hành vi chặt. Cách linh hoạt trong bài có đánh đổi gì?

A. Không có đánh đổi.

B. Ít quản lý bản mô tả cấu trúc dữ liệu hơn nhưng yếu hơn về cưỡng chế trường/kiểu cụ thể.

C. Bảo đảm chính xác mọi dữ liệu.

D. Tự tạo mọi quyền hệ thống xử lý phía máy chủ.

**2. Chọn một.** Downstream bắt buộc amount là số nhưng bản mô tả cấu trúc dữ liệu cho phép mọi object. Chỉ ép gọi to_json đủ chưa?

A. Đủ vì tên có JSON.

B. Đủ nếu prompt dài.

C. Chưa; cần hợp đồng/validation kiểu và ngữ nghĩa phù hợp.

D. Đủ nếu không ghi log.

**3. Chọn một.** Khi cần chọn generic hay dedicated bản mô tả cấu trúc dữ liệu nên dựa vào gì?

A. Độ quan trọng hợp đồng, mức phức tạp và kết quả phép đánh giá thực tế.

B. Chỉ một tỷ lệ minh họa trong video.

C. Chỉ tên công cụ ngắn hơn.

D. Không cần xét downstream.

## Đáp án

1. **B.** A bỏ đánh đổi; C bảo đảm quá mức; D sai phạm vi quyền.
2. **C.** A và B dựa hình thức; D bỏ quan sát mà không tạo quy định về dữ liệu và hành vi.
3. **A.** B không phải phép đo tác vụ; C không nói độ đúng; D bỏ yêu cầu nhận dữ liệu.
