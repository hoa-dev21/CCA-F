# PDF support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287768), sources/api-lessons/287768.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Tóm tắt

Bài minh họa gửi PDF trong document block, thay vì image block, với media type phù hợp. Có thể yêu cầu tóm tắt hoặc lấy dữ liệu từ nội dung tài liệu. PDF có thể chứa văn bản, bảng, hình và cấu trúc cần hiểu cùng nhau.

Không suy từ hỗ trợ định dạng rằng mọi trang hay mọi bảng đều được hiểu đúng. Nêu trang/phần cần phân tích và kiểm tra kết quả tại nguồn. Đặc biệt phân biệt không thấy dữ liệu với dữ liệu không tồn tại trong tài liệu.

Chi tiết vision và phân tích ảnh nằm ngoài phạm vi Exam Guide đã tải; bài này phục vụ hoàn thiện tóm tắt khóa API, không phải ưu tiên ôn sâu.

## Câu hỏi

**1. Chọn một.** Trong mẫu, PDF được gửi dưới block nào?

A. Chỉ system string không có dữ liệu.

B. Document với media type PDF phù hợp.

C. Chỉ tên file bất kỳ.

D. Luôn image/png dù không đổi file.

**2. Chọn một.** Model không trích được một trường. Có thể kết luận ngay nó không có trong PDF?

A. Luôn có thể.

B. Có nếu output ngắn.

C. Chưa; kiểm tra trang/bảng và khả năng đọc nguồn trước.

D. Có nếu có citation bất kỳ.

**3. Chọn một.** Để kiểm tra bản trích xuất quan trọng nên làm gì?

A. Đối chiếu đúng vị trí trong tài liệu gốc.

B. Chỉ nhìn độ tự tin.

C. Chỉ xem tên file.

D. Chỉ đánh giá văn phong.

## Đáp án

1. **B.** B khớp loại nguồn; A và C không đưa tài liệu, D sai kiểu dữ liệu.

2. **C.** C phân biệt lỗi đọc với dữ liệu vắng; A, B, D kết luận vượt bằng chứng.

3. **A.** A dùng nguồn trực tiếp; B, C, D không xác nhận giá trị trích xuất.

## Đối chiếu tính năng trên Bedrock

Đã đọc [PDF support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308839), sources/bedrock-lessons/308839.json. Mẫu Converse dùng document.format/name/source.bytes. Khả năng hỗ trợ PDF không bảo đảm mọi trang được hiểu đúng; kiểm tra nguồn và đầu ra. Dùng chung tóm tắt/câu hỏi khái niệm, không đếm câu hỏi trùng.

## Bổ sung từ ghi chú khóa học chính thức

Mục [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198) được đối chiếu qua ghi chú do trang khóa cung cấp cho trợ lý của khóa, key vertex, tiêu đề “PDF Support”; nguồn [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: sources/official-note-lessons/vertex-289198.json. Đây là ghi chú tóm tắt chính thức, không phải bản chép video đã xem. Ghi chú chuyển image block thành document với media_type application/pdf và gửi cùng prompt; có thể phân tích text/chart/table nhưng không bảo đảm mọi thành phần đọc đúng. Ví dụ không chứng minh mọi model/provider chấp nhận cùng kích thước/cách mã hóa; giữ citation và kiểm tra trang liên quan. Dùng chung câu hỏi khái niệm.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198), sources/vertex-media/289198.json. Ngoài notes đã review, phụ đề xác nhận ví dụ earth.pdf đổi image block sang document/media_type application/pdf và hỏi tóm tắt. Phân tích PDF có thể gồm text/chart/table nhưng không bảo đảm extraction đúng mọi thành phần, cần kiểm chứng theo nguồn. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
