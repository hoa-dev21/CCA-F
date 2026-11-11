# Prefill, delimiter và giới hạn bảo đảm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287729), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287729.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập giữ nguyên yêu cầu tạo ba lệnh AWS CLI và chỉ sửa phần mở đầu câu trả lời (assistant prefill) cùng chuỗi đánh dấu dừng (stop sequences). Kết quả cần có đủ ba lệnh trong một khối mã, không có lời giải thích hoặc chú thích. Bài tập tạo văn bản lệnh, không chạy các lệnh đó.

Nếu phần mở đầu chỉ có ba dấu backtick để mở khối mã Markdown, mô hình có thể sinh tiếp nhãn ngôn ngữ `bash`. Đưa cả nhãn này vào phần mở đầu giúp phần mới sinh bắt đầu ở nội dung lệnh.

Tuy nhiên, mô hình vẫn có thể chia ba lệnh thành nhiều khối hoặc thêm chú thích shell. Video bổ sung chỉ dẫn trong prefill để yêu cầu cả ba lệnh trong một khối không chú thích, rồi dùng dấu đóng khối làm chuỗi dừng. Nếu mô hình vẫn tạo nhiều khối, dấu đóng đầu tiên có thể khiến đầu ra dừng sau một lệnh.

Kỹ thuật này phụ thuộc khả năng hỗ trợ của mô hình và phiên bản. Cần kiểm tra đầu ra thực tế, không chỉ định dạng. Ba dòng lệnh sạch chưa chứng minh lệnh đúng, có quyền chạy hoặc phù hợp về tác động. Khi cần dữ liệu có cấu trúc, vẫn phải dùng và kiểm tra theo cơ chế được hỗ trợ.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Prefill opens a code fence without a language label. Generation starts with `bash`, which a command parser treats as a command. What is happening?

A. Missing permissions caused shell fallback.

B. The API executed Bash before generation.

C. The model is completing the fence's language label.

D. The stop sequence adds Bash for CLI compatibility.

**Question 2 — Choose two.** Three commands are required in one block, but output stops at the first closing fence after one command. Which TWO checks are needed?

A. Verify all three commands and required structure, not just normal termination.

B. Duplicate the first command three times.

C. Check whether separate command blocks cause the first fence to stop output early.

D. Only raise tokens because stop sequences wait for budget exhaustion.

**Question 3 — Choose one.** Output has three AWS CLI commands in one block without comments. What is still required before production execution?

A. Use the same stop marker as a safety check.

B. Validate command content, permissions, and effects before execution.

C. Count three lines as the only gate.

D. Label the fence “production” as authorization.

**Question 4 — Choose one.** A target model does not support the prefill combination. What is better than ignoring errors and prepending text to an empty response?

A. Use a supported mechanism and retest all three commands.

B. Silently reduce the requirement to one command.

C. Remove error checking to always return a code block.

D. Keep old settings because the model belongs to the same family.

**Question 5 — Choose two.** Only prefill and stop sequences may change; three commands remain required. Which TWO evaluation criteria apply?

A. Three commands in one block with no prohibited introduction or comments.

B. Minimum tokens even when only one command remains.

C. Commands were executed merely because they appear in output.

D. All three original operations remain intact and untruncated.

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
