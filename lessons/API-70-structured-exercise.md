# Prefill, delimiter và giới hạn bảo đảm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287729), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287729.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập giữ nguyên yêu cầu tạo ba lệnh AWS CLI và chỉ sửa phần mở đầu câu trả lời (assistant prefill) cùng chuỗi đánh dấu dừng (stop sequences). Kết quả cần có đủ ba lệnh trong một khối mã, không có lời giải thích hoặc chú thích. Bài tập tạo văn bản lệnh, không chạy các lệnh đó.

Nếu phần mở đầu chỉ có ba dấu backtick để mở khối mã Markdown, mô hình có thể sinh tiếp nhãn ngôn ngữ `bash`. Đưa cả nhãn này vào phần mở đầu giúp phần mới sinh bắt đầu ở nội dung lệnh.

Tuy nhiên, mô hình vẫn có thể chia ba lệnh thành nhiều khối hoặc thêm chú thích shell. Video bổ sung chỉ dẫn trong prefill để yêu cầu cả ba lệnh trong một khối không chú thích, rồi dùng dấu đóng khối làm chuỗi dừng. Nếu mô hình vẫn tạo nhiều khối, dấu đóng đầu tiên có thể khiến đầu ra dừng sau một lệnh.

Kỹ thuật này phụ thuộc khả năng hỗ trợ của mô hình và phiên bản. Cần kiểm tra đầu ra thực tế, không chỉ định dạng. Ba dòng lệnh sạch chưa chứng minh lệnh đúng, có quyền chạy hoặc phù hợp về tác động. Khi cần dữ liệu có cấu trúc, vẫn phải dùng và kiểm tra theo cơ chế được hỗ trợ.

## Câu hỏi

**1. Chọn một.** Prefill chỉ mở code fence, phần sinh bắt đầu bằng từ bash ngoài mong muốn. Vì sao?

A. Mô hình luôn bỏ qua prefill.

B. Mô hình đang hoàn thiện nhãn ngôn ngữ của code fence.

C. API đã thực thi lệnh bash.

D. Stop sequence tự thêm chữ bash.

**2. Chọn một.** Stop ở fence đóng nhưng chỉ nhận một trong ba lệnh. Nguyên nhân sát ví dụ?

A. Mô hình không hỗ trợ số ba.

B. Phản hồi luôn bị cắt vì mạng.

C. Không thể có nhiều code blocks trong Markdown.

D. Mô hình định viết mỗi lệnh trong một block; marker đầu tiên đã kết thúc generation.

**3. Chọn một.** Đầu ra có đủ ba dòng lệnh và không comment. Có thể tự động chạy ngay không?

A. Chưa; cần kiểm tra nội dung, quyền và tác động, định dạng không chứng minh tính đúng.

B. Có, mọi lệnh do mô hình sinh đều an toàn.

C. Có, prefill là cơ chế cấp quyền.

D. Có, stop sequence validate AWS parameters.

## Đáp án

1. **B.** Mô hình đang hoàn thiện nhãn ngôn ngữ của code fence. A không đúng hiện tượng; C nhầm sinh với thực thi; D không phải vai trò stop marker.

2. **D.** Mô hình định viết mỗi lệnh trong một block; marker đầu tiên đã kết thúc generation. A/B không có bằng chứng; C sai về Markdown.

3. **A.** Chưa; cần kiểm tra nội dung, quyền và tác động, định dạng không chứng minh tính đúng. B suy rộng sai; C/D gán cho kỹ thuật định dạng khả năng authorization/validation không có.

## Đối chiếu qua phụ đề chính thức

Phụ đề xác nhận cùng bài tạo ba lệnh AWS CLI trong một khối mã có nhãn bash, không chú thích, bằng prefill và chuỗi dừng. Bài chỉ tạo văn bản, không chạy lệnh. Hỗ trợ prefill tùy mô hình và nhà cung cấp; đúng định dạng chưa chứng minh lệnh đúng hoặc được phép thực thi.

Nguồn đối chiếu: [Structured data exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276718). Bản lưu: `sources/bedrock-media/276718.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đối chiếu, toàn bộ phụ đề trùng nguyên văn bài API 287729. Dùng chung câu hỏi và giữ lưu ý về xác thực, nhà cung cấp, tính tương thích của mô hình.

Nguồn đối chiếu: [Structured data exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289152). Bản lưu: `sources/vertex-media/289152.json`.
