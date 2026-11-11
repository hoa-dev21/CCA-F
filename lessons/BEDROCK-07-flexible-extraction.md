# Linh hoạt và hợp đồng chặt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276763), sources/bedrock-lessons/276763.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài dùng công cụ `to_json` có đầu vào là một đối tượng dữ liệu linh hoạt, còn các trường mong muốn được mô tả trong prompt. Cách này giúp thử nhanh khi bản mẫu ứng dụng thường xuyên đổi yêu cầu.

Đổi lại, schema — bản mô tả cấu trúc dữ liệu — không bắt buộc chặt những trường và kiểu dữ liệu cụ thể. Ví dụ: bước tiếp theo cần `amount` là số, nhưng schema cho phép mọi đối tượng. Ép mô hình gọi `to_json` chưa chứng minh `amount` tồn tại và có đúng kiểu.

Khi dữ liệu quan trọng hoặc có cấu trúc lồng nhau phức tạp, cần cân nhắc schema riêng cho nhiệm vụ và kiểm tra phù hợp. JSON hợp lệ vẫn có thể thiếu trường, sai giá trị hoặc không đáp ứng yêu cầu nghiệp vụ.

Thêm một trường vào prompt không tự cập nhật quy định dữ liệu của hệ thống nhận. Hãy chọn mức linh hoạt dựa trên mức độ quan trọng, độ phức tạp và kết quả kiểm thử. Tỷ lệ lợi ích được nêu trong khóa chỉ là minh họa, không phải số đo có thể áp dụng chung.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A prototype's `to_json` has a flexible object schema. A new consumer requires numeric `amount`. Does a prompt instruction enforce this?

A. Yes, because tool choice forces the tool.

B. Yes, if demo JSON parses.

C. No; the specific contract needs schema enforcement and validation.

D. No; only higher temperature is needed.

**Question 2 — Choose two.** Which TWO statements describe a flexible prototype schema before a fixed consumer exists?

A. It reduces schema edits while trying new fields.

B. The name `to_json` enforces all fields and types.

C. It provides weaker control and still requires goal-specific checks.

D. Evaluation is unnecessary because any object is useful.

**Question 3 — Choose one.** Financial extraction has nested structures and high-impact amount errors. What is better than retaining a generic schema for convenience?

A. Review only low-confidence results under the generic schema.

B. Use a task-specific schema, validation, and difficult-case evaluation.

C. Add examples and check parsing only.

D. Drop difficult fields and let the consumer use old defaults.

**Question 4 — Choose one.** A prompt adds `currency`, but the consumer still reads only `amount` and assumes a default currency. What must happen before rollout?

A. Assume prompt changes update all components.

B. Have the consumer ignore currency.

C. Send the field and let the consumer infer its meaning.

D. Update the contract and adapter and test currency handling.

**Question 5 — Choose two.** `to_json` returns all fields, but invoice totals conflict. Which TWO actions are appropriate?

A. Distinguish semantic failure from parsing and structural success.

B. Accept because the tool only generates objects.

C. Preserve source evidence and validate or flag the conflict.

D. Silently adjust line items to match the total.

## Đáp án và giải thích

1. **C.** C phân biệt chọn tool, cấu trúc JSON và hợp đồng cụ thể. A không chứng minh trường/kiểu. B demo không bảo đảm mọi đầu vào. D tăng biến thiên không cưỡng chế kiểu dữ liệu.

2. **A, C.** A là lợi ích thử nhanh; C là tradeoff cần quản lý. B tên công cụ không tạo hợp đồng. D parse được không chứng minh nội dung phục vụ mục tiêu.

3. **B.** B tăng kiểm soát phù hợp tác động và độ phức tạp. A phụ thuộc confidence chưa được hiệu chỉnh và không cưỡng chế cấu trúc. C ví dụ/parse không kiểm tra nghiệp vụ. D giá trị mặc định có thể làm sai dữ liệu quan trọng thay vì giải quyết thiếu hụt.

4. **D.** D phối hợp bên tạo và bên nhận. A không có cơ chế cập nhật tự động. B có thể dùng sai tiền tệ. C có dữ liệu mới nhưng chưa có hành vi diễn giải đúng.

5. **A, C.** A xác định tầng lỗi; C xử lý mà giữ căn cứ. B bỏ yêu cầu nghiệp vụ của hệ thống. D tạo sự nhất quán giả và có thể thay đổi dữ liệu đúng thành sai.
