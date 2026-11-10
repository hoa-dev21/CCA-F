# PDF support

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287768), sources/api-lessons/287768.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Trong mẫu của bài, PDF được gửi bằng khối nội dung kiểu `document` với loại dữ liệu PDF phù hợp, thay vì gửi như một khối ảnh. Bạn có thể yêu cầu tóm tắt hoặc lấy thông tin từ tài liệu đó.

Một PDF có thể chứa văn bản, bảng, hình và bố cục cần đọc cùng nhau. Hỗ trợ nhận tệp PDF không có nghĩa mô hình luôn đọc đúng mọi trang hoặc mọi bảng.

Ví dụ: Bạn cần số liệu trong một bảng ở trang cụ thể. Hãy nêu rõ vị trí và trường cần lấy, rồi đối chiếu kết quả với tài liệu gốc. Nếu mô hình không tìm được một trường, chưa thể kết luận tài liệu không có trường đó; có thể quá trình đọc hoặc trích xuất đã bỏ sót.

Bài này bổ sung kiến thức về đầu vào của API. Chi tiết xử lý hình ảnh và khả năng thị giác không phải trọng tâm của đề cương thi Architect đã lưu.

## Câu hỏi

**1. Chọn một.** Trong mẫu, PDF được gửi dưới block nào?

A. Chỉ system string không có dữ liệu.

B. Document với media type PDF phù hợp.

C. Chỉ tên file bất kỳ.

D. Luôn image/png dù không đổi file.

**2. Chọn một.** Mô hình không trích được một trường. Có thể kết luận ngay nó không có trong PDF?

A. Luôn có thể.

B. Có nếu output ngắn.

C. Chưa; kiểm tra trang/bảng và khả năng đọc nguồn trước.

D. Có nếu có trích dẫn nguồn bất kỳ.

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

Mẫu Converse dùng `document.format`, `name` và `source.bytes`. Hỗ trợ PDF chưa bảo đảm hiểu đúng mọi trang, nên cần đối chiếu nguồn và kết quả. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/308839). Bản lưu: `sources/bedrock-lessons/308839.json`.

## Bổ sung từ ghi chú khóa học chính thức

Hồ sơ nguồn ban đầu dùng ghi chú chính thức cho trợ lý khóa học, khóa `vertex`, tiêu đề “PDF Support”, không phải bản chép video. Mẫu đổi khối ảnh sang khối tài liệu với `media_type` là `application/pdf` rồi gửi kèm prompt. Có thể phân tích văn bản, biểu đồ, bảng nhưng vẫn cần kiểm tra. Không suy từ ví dụ rằng mọi mô hình đều nhận cùng kích thước hoặc cách mã hóa; giữ trích dẫn và đối chiếu trang liên quan. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198); [trang khóa](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api). Bản lưu: `sources/official-note-lessons/vertex-289198.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ đọc toàn bộ phụ đề bổ sung ví dụ `earth.pdf`: đổi khối ảnh sang `document` với `media_type: application/pdf` rồi yêu cầu tóm tắt. Phân tích được các loại nội dung trong PDF không bảo đảm trích xuất đúng mọi chi tiết; vẫn cần kiểm chứng theo nguồn. Dùng chung câu hỏi.

Nguồn đối chiếu: [PDF support](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289198). Bản lưu: `sources/vertex-media/289198.json`.
