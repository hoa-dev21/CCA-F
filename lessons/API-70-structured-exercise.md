# Prefill, delimiter và giới hạn bảo đảm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287729), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287729.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập giữ nguyên yêu cầu tạo ba lệnh AWS CLI và chỉ sửa phần mở đầu câu trả lời (assistant prefill) cùng chuỗi đánh dấu dừng (stop sequences). Kết quả cần có đủ ba lệnh trong một khối mã, không có lời giải thích hoặc chú thích. Bài tập tạo văn bản lệnh, không chạy các lệnh đó.

Nếu phần mở đầu chỉ có ba dấu backtick để mở khối mã Markdown, mô hình có thể sinh tiếp nhãn ngôn ngữ `bash`. Đưa cả nhãn này vào phần mở đầu giúp phần mới sinh bắt đầu ở nội dung lệnh.

Tuy nhiên, mô hình vẫn có thể chia ba lệnh thành nhiều khối hoặc thêm chú thích shell. Video bổ sung chỉ dẫn trong prefill để yêu cầu cả ba lệnh trong một khối không chú thích, rồi dùng dấu đóng khối làm chuỗi dừng. Nếu mô hình vẫn tạo nhiều khối, dấu đóng đầu tiên có thể khiến đầu ra dừng sau một lệnh.

Kỹ thuật này phụ thuộc khả năng hỗ trợ của mô hình và phiên bản. Cần kiểm tra đầu ra thực tế, không chỉ định dạng. Ba dòng lệnh sạch chưa chứng minh lệnh đúng, có quyền chạy hoặc phù hợp về tác động. Khi cần dữ liệu có cấu trúc, vẫn phải dùng và kiểm tra theo cơ chế được hỗ trợ.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Prefill mở code fence nhưng không gồm nhãn ngôn ngữ; phần sinh bắt đầu bằng “bash”, parser lệnh coi đó là lệnh đầu tiên. Chẩn đoán nào sát nhất?

A. Ba lệnh bị thiếu quyền nên mô hình đổi sang shell dự phòng.

B. API đã gọi shell bash trước khi sinh ba lệnh.

C. Phần sinh đang hoàn thiện nhãn ngôn ngữ của code fence.

D. Stop sequence thêm nhãn bash để bảo đảm tương thích CLI.

**Câu 2 — Chọn hai.** Bài yêu cầu ba lệnh trong một khối, stop marker là fence đóng. Chỉ nhận một lệnh và kết thúc tại marker đầu tiên. Hai kiểm tra nào cần trước khi coi đầu ra hoàn tất?

A. Kiểm tra đủ ba lệnh và cấu trúc theo hợp đồng, không chỉ phản hồi kết thúc bình thường.

B. Tự nhân bản lệnh đầu thành ba dòng để đáp ứng số lượng.

C. Kiểm tra model có chia mỗi lệnh thành khối riêng khiến marker đầu tiên cắt sớm không.

D. Chỉ tăng max_tokens vì stop sequence sẽ đợi đến khi hết ngân sách.

**Câu 3 — Chọn một.** Output có đúng ba lệnh AWS CLI, không comment, đúng một khối. Pipeline muốn chạy ngay trên tài khoản vận hành. Thiết kế nào còn thiếu?

A. Thêm cùng stop marker vào executor để chặn mọi lệnh nguy hiểm.

B. Kiểm tra nội dung, quyền và tác động từng lệnh trước khi thực thi.

C. Đếm đủ ba dòng rồi dùng đó làm gate duy nhất.

D. Đổi code fence thành nhãn production để xác nhận phạm vi.

**Câu 4 — Chọn một.** Một mô hình khác không hỗ trợ tổ hợp prefill đang dùng. Nhóm bỏ qua lỗi cấu hình rồi ghép thủ công prefix vào phản hồi rỗng. Cách sửa đúng hơn?

A. Chọn cơ chế được hỗ trợ rồi kiểm tra lại đủ ba lệnh.

B. Giảm số lệnh từ ba xuống một mà không đổi yêu cầu nghiệp vụ.

C. Bỏ kiểm tra lỗi để downstream luôn nhận một khối mã.

D. Giữ cơ chế cũ vì tên mô hình vẫn thuộc cùng họ.

**Câu 5 — Chọn hai.** Nhóm chỉ được sửa prefill và stop sequences trong bài tập, không đổi yêu cầu tạo ba lệnh. Hai tiêu chí nào cần dùng khi đánh giá bản sửa?

A. Phần sinh đủ ba lệnh trong một khối và không có lời dẫn/comment theo yêu cầu.

B. Chỉ số token thấp nhất kể cả chỉ còn một lệnh.

C. Mọi lệnh đã thực sự chạy thành công chỉ vì chúng có mặt trong đầu ra.

D. Nội dung các lệnh vẫn đáp ứng ba thao tác gốc, không bị cắt hoặc thay nghĩa.

## Đáp án và giải thích

1. **C.** A sai: Không có bằng chứng đã thực thi hoặc kiểm tra quyền trong bài tạo văn bản này. B sai: Sinh nhãn văn bản không phải sự kiện thực thi shell. C đúng: Ranh giới giữa prefill và phần mới sinh ảnh hưởng dữ liệu đầu ra mà downstream nhận. D sai: Chuỗi dừng không có vai trò tự thêm nhãn ngôn ngữ.

2. **A, C.** A đúng: Kết thúc sinh và hoàn tất nhiệm vụ là hai trạng thái khác nhau. B sai: Đủ ba dòng không có nghĩa đủ ba tác vụ lệnh khác nhau theo yêu cầu. C đúng: Điểm dừng đúng cấu hình vẫn có thể xảy ra trước khi đủ nội dung yêu cầu. D sai: Marker có thể kết thúc sớm hơn giới hạn token.

3. **B.** A sai: Marker điều khiển sinh văn bản, không phân tích quyền hay tác động của lệnh. B đúng: Đạt định dạng không chứng minh lệnh đúng mục tiêu, được phép hoặc phù hợp môi trường. C sai: Số dòng không kiểm tra tham số, tài nguyên đích hoặc tác động. D sai: Nhãn Markdown không tạo quyền hay cấu hình tài khoản thực tế.

4. **A.** A đúng: Tương thích là điều kiện của kỹ thuật; ghép chuỗi không khôi phục kết quả chưa được sinh. B sai: Đổi mục tiêu không giải quyết tương thích và vi phạm yêu cầu ban đầu. C sai: Khối rỗng hợp hình thức không đáp ứng tác vụ và che thất bại upstream. D sai: Tên họ không bảo đảm tập tính năng/tổ hợp cấu hình giống nhau.

5. **A, D.** A đúng: Đây là hợp đồng đầu ra mà thay đổi định dạng cần đạt. B sai: Tiết kiệm không bù việc thiếu hai phần bắt buộc. C sai: Bài tạo văn bản không thực thi và không cung cấp bằng chứng môi trường vận hành. D đúng: Thay cách trình bày không cho phép mất chức năng của nhiệm vụ.

## Đối chiếu qua phụ đề chính thức

Phụ đề xác nhận cùng bài tạo ba lệnh AWS CLI trong một khối mã có nhãn bash, không chú thích, bằng prefill và chuỗi dừng. Bài chỉ tạo văn bản, không chạy lệnh. Hỗ trợ prefill tùy mô hình và nhà cung cấp; đúng định dạng chưa chứng minh lệnh đúng hoặc được phép thực thi.

Nguồn đối chiếu: [Structured data exercise](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276718). Bản lưu: `sources/bedrock-media/276718.json`.

## Đối chiếu phụ đề chính thức

Theo hồ sơ đối chiếu, toàn bộ phụ đề trùng nguyên văn bài API 287729. Dùng chung câu hỏi và giữ lưu ý về xác thực, nhà cung cấp, tính tương thích của mô hình.

Nguồn đối chiếu: [Structured data exercise](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289152). Bản lưu: `sources/vertex-media/289152.json`.
