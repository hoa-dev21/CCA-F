# Exercise on prompting — Trích chủ đề theo output contract

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287748), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287748.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Tóm tắt

Bài dùng một đoạn văn từ bài nghiên cứu làm input content, yêu cầu trích các chủ đề thành JSON array of strings. Người học chạy baseline, xem report.html và tìm nhóm lỗi; trong ví dụ, output không đúng cấu trúc mong muốn là nguyên nhân rõ đầu tiên.

Sửa prompt bằng câu đầu trực tiếp nêu hành động, nguồn và định dạng; bọc content bằng XML tags để phân ranh; thêm các bước xác định chủ đề, đưa vào array và chỉ trả array. Few-shot có thể bổ sung nếu ca khó cần minh họa. Các điểm2.8/9.5 trong video thuộc dataset/rubric demo, không là benchmark hay bằng chứng sẵn sàng production.

Ngoài JSON parse/type validation, cần kiểm tra coverage và grounding: topic phải có trong nguồn, không thêm chủ đề chỉ vì liên tưởng; cũng không bỏ chủ đề quan trọng dù format hợp lệ. XML giúp tổ chức prompt nhưng không tự tạo ranh giới tin cậy. Đo lại trên dữ liệu mới/holdout để tránh chỉ học theo bộ phát triển.

## Câu hỏi

**1. Chọn một.** Baseline có lời giải thích và danh sách bullet thay JSON array. Thay đổi đầu tiên sát bài nhất?

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

D. Kiểm tra lỗi theo nhóm và đánh giá dữ liệu mới với rubric phù hợp.

## Đáp án

1. **A.** Nêu rõ trích chủ đề được đề cập thành JSON array of strings, rồi kiểm tra output. B/C không xác định contract; D bỏ yêu cầu downstream.

2. **C.** Lỗi grounding/ngữ nghĩa; kiểm tra từng topic với nguồn. A/D nhầm cấu trúc với nội dung; B bỏ yêu cầu dựa trên nguồn.

3. **D.** Kiểm tra lỗi theo nhóm và đánh giá dữ liệu mới với rubric phù hợp. A gây thiên lệch; B không có quy đổi; C tạo vòng tự xác nhận.

## Đối chiếu bài Vertex qua nội dung hiển thị

[Exercise on prompting trên Vertex](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289173) không cung cấp track phụ đề tiếng Anh ở trình phát tại lúc đọc. Đã kiểm tra các khung hình của video gốc trải từ đầu tới cuối: notebook yêu cầu trích topics từ đoạn học thuật thành JSON array of strings; report baseline báo lỗi định dạng; prompt được sửa cho trực tiếp, thêm text XML tags và bước xử lý; tiêu chí cuối yêu cầu array chứa các topics, không commentary. Bản ghi bằng chứng: sources/vertex-media/289173-visual-review.json và các frame được ghi trong đó. Đây là review trực quan nội dung notebook, không phải phụ đề chính thức hay tuyên bố đã nghe/chép nguyên văn toàn bộ audio. Phần tóm tắt và câu hỏi về output contract/grounding/eval ở trên áp dụng cho bài thực hành này.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Exercise on prompting](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276746), sources/bedrock-media/276746.json. Cùng bài trích topics của đoạn học thuật thành JSON array of strings: xem report tìm lỗi, câu mở đầu trực tiếp, XML text tags và bước xử lý cụ thể. Các điểm2.8/9.5 là demo; vẫn cần kiểm tra grounding, coverage và holdout. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
