# Trích chủ đề theo quy định về đầu ra

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287748), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287748.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập dùng một đoạn trong bài nghiên cứu và yêu cầu lấy các chủ đề được đề cập thành một mảng JSON gồm các chuỗi. Người học chạy phiên bản ban đầu, mở `report.html` và xem nhóm lỗi. Trong ví dụ, vấn đề đầu tiên là đầu ra không đúng cấu trúc yêu cầu.

Cách sửa gồm: nêu ngay hành động, nguồn và định dạng cần nhận; đặt văn bản nguồn trong thẻ XML; chỉ rõ các bước nhận diện chủ đề, đưa vào mảng và chỉ trả mảng đó. Có thể bổ sung vài ví dụ nếu gặp trường hợp khó.

Đọc được JSON và đúng kiểu mảng vẫn chưa đủ. Cần đối chiếu từng chủ đề với đoạn gốc: không thêm chủ đề chỉ vì liên tưởng và không bỏ sót chủ đề quan trọng. Thẻ XML giúp tách các phần, nhưng không tự biến nội dung nguồn thành chỉ dẫn đáng tin cậy để ứng dụng làm theo.

Các điểm 2.8 và 9.5 trong video chỉ thuộc bộ dữ liệu và tiêu chí của ví dụ. Trước khi kết luận phương pháp có hiệu quả rộng hơn, cần xem lỗi theo nhóm và đánh giá trên dữ liệu mới, gồm tập giữ riêng không dùng để chỉnh prompt (holdout).

## Câu hỏi

**1. Chọn một.** Kết quả ban đầu để so sánh có lời giải thích và danh sách bullet thay JSON array. Thay đổi đầu tiên sát bài nhất?

A. Nêu rõ trích chủ đề được đề cập thành JSON array of strings, rồi kiểm tra output.

B. Chỉ thêm câu hãy thông minh.

C. Chỉ tăng temperature.

D. Chấp nhận mọi text có vẻ liên quan.

**2. Chọn một.** Output parse được nhưng có thêm topic không được đoạn văn đề cập. Loại lỗi chính?

A. Chắc chắn là cú pháp JSON.

B. Không có lỗi vì đúng kiểu array.

C. Lỗi grounding/ngữ nghĩa; kiểm tra từng topic với nguồn.

D. Chỉ là khác thụt dòng.

**3. Chọn một.** Một lần chạy demo đạt9.5 sau sửa prompt. Bước phù hợp trước khi kết luận hiệu quả tổng quát?

A. Bỏ mọi test khó.

B. Coi9.5là xác suất đỗ thi.

C. Dùng output đang chấm làm đáp án chuẩn.

D. Kiểm tra lỗi theo nhóm và đánh giá dữ liệu mới với bảng tiêu chí chấm điểm phù hợp.

## Đáp án

1. **A.** Nêu rõ trích chủ đề được đề cập thành JSON array of strings, rồi kiểm tra output. B/C không xác định quy định về dữ liệu và hành vi; D bỏ yêu cầu downstream.

2. **C.** Lỗi grounding/ngữ nghĩa; kiểm tra từng topic với nguồn. A/D nhầm cấu trúc với nội dung; B bỏ yêu cầu dựa trên nguồn.

3. **D.** Kiểm tra lỗi theo nhóm và đánh giá dữ liệu mới với bảng tiêu chí chấm điểm phù hợp. A gây thiên lệch; B không có quy đổi; C tạo vòng tự xác nhận.

## Đối chiếu bài Vertex qua nội dung hiển thị

Tại thời điểm đọc, trình phát không cung cấp phụ đề tiếng Anh. Hồ sơ kiểm tra các khung hình từ đầu tới cuối ghi nhận: notebook trích chủ đề từ đoạn học thuật thành mảng JSON các chuỗi; báo cáo ban đầu có lỗi định dạng; prompt được sửa để nêu trực tiếp yêu cầu, dùng thẻ XML và chỉ rõ các bước. Kết quả cuối cần mảng chủ đề, không kèm lời bình.

Đây là kiểm tra trực quan nội dung notebook, không phải phụ đề chính thức hoặc xác nhận đã nghe, chép toàn bộ âm thanh. Tệp bằng chứng bên dưới ghi các khung hình đã dùng. Phần bài học và câu hỏi về cấu trúc đầu ra, căn cứ từ nguồn và đánh giá áp dụng cho ví dụ này.

Nguồn đối chiếu: [Exercise on prompting trên Vertex](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289173). Bản lưu: `sources/vertex-media/289173-visual-review.json`.

## Đối chiếu phụ đề chính thức

Phụ đề Bedrock cùng bài trích chủ đề thành mảng JSON: xem báo cáo tìm lỗi, sửa câu mở đầu, dùng thẻ XML và các bước cụ thể. Các điểm 2.8 và 9.5 chỉ là minh họa. Vẫn cần đối chiếu từng chủ đề với nguồn, kiểm tra độ đầy đủ và dùng tập kiểm thử riêng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompting](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276746). Bản lưu: `sources/bedrock-media/276746.json`.
