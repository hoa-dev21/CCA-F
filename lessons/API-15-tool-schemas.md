# Hợp đồng gọi công cụ

Nguồn: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287753), sources/api-lessons/287753.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Để Claude sử dụng một công cụ, ứng dụng cần cung cấp cả mã thực thi lẫn bản mô tả công cụ. Bản mô tả cho Claude biết công cụ dùng để làm gì và cần đầu vào nào; bản thân mô tả không chạy thao tác.

Trong bài, bản khai báo có ba phần chính:

- `name`: tên công cụ, nên thể hiện rõ chức năng.
- `description`: giải thích công cụ làm gì, khi nào nên dùng và trả về loại thông tin nào.
- `input_schema`: mô tả cấu trúc đầu vào, gồm các tham số, kiểu dữ liệu và ý nghĩa của chúng. Danh sách `required` chỉ rõ tham số bắt buộc.

Ví dụ: Nếu tham số là một ngày, cần nói rõ ngày phải viết theo định dạng nào. Nếu có hai công cụ tra cứu gần giống nhau, hãy giải thích trường hợp dùng từng công cụ, thay vì cùng mô tả là “lấy dữ liệu”.

Bạn có thể nhờ Claude tạo bản mô tả từ mã và tài liệu, nhưng vẫn cần đối chiếu với hàm thật. Mô tả một tham số mà hàm không nhận sẽ khiến hai bên không khớp nhau. Chú thích kiểu dữ liệu trong mã (type annotation) cũng không thay thế việc viết và kết nối hàm thực thi.

## Tự kiểm tra

**Question 1 — Choose one.** `read_invoice` and `read_payment` both say “get financial data.” The model chooses incorrectly despite valid schemas. What helps most?

A. Add identical optional properties to both schemas.

B. Retry more without changing descriptions.

C. Rename both tools `fetch_data`.

D. Clarify returned data and when each tool should be used.

**Question 2 — Choose two.** A tool accepts dates as YYYY-MM-DD, and its implementation requires `customer_id`. Which TWO checks are needed for an AI-generated schema?

A. Assume type hints also implement the service call.

B. Accept valid JSON even if `customer_id` is absent.

C. Expose date format and parameter meanings to the model.

D. Match names, types, and required parameters to the implementation.

**Question 3 — Choose one.** `amount` is numeric, but a refund exceeds the account's policy limit. Which layer should authorize execution?

A. The host, checking account policy before the transaction.

B. The `amount` description instead of business validation.

C. A tool renamed `safe_refund`, trusting generated requests.

D. The JSON parser, because every number is structurally valid.

**Question 4 — Choose two.** A lookup requires `order_id` and `region`, but only `order_id` is required in its schema. `region` appears only in internal comments. Which TWO changes are needed?

A. Keep the schema because the model can infer unseen comments.

B. Describe `region` and its valid format in the model-facing definition.

C. Have the router select an arbitrary region.

D. Add `region` to the schema and mark it required if the function always needs it.

**Question 5 — Choose one.** A schema is correct, but no implementation is registered. The model produces valid `tool_use`. What is still needed to demonstrate a working tool?

A. Execute the corresponding function and return its actual result to the model.

B. Check only that the tool name matches.

C. Use a screenshot of valid `tool_use` as integration proof.

D. Have the model interpret arguments as though they were service data.

## Đáp án và giải thích

1. **D.** D cung cấp tín hiệu chọn công cụ. A tăng độ phức tạp không sửa ranh giới; C làm mơ hồ hơn; B lặp quyết định dựa trên cùng thông tin thiếu.

2. **C, D.** D kiểm tra hợp đồng hai phía; C giảm mơ hồ về giá trị. A nhầm kiểu với triển khai; B đúng cú pháp nhưng thiếu đầu vào bắt buộc của hàm.

3. **A.** A phân biệt schema dữ liệu với quyền nghiệp vụ. B hướng dẫn không thay chốt thực thi; D nhầm tính hợp lệ số với quyền giao dịch; C tên không cưỡng chế chính sách.

4. **B, D.** D xác định sự hiện diện, B xác định cách điền. C đoán đầu vào có thể truy sai dữ liệu; A giả định model thấy nội dung chưa được cung cấp.

5. **A.** A kiểm chứng đường thực thi và phản hồi. B chỉ kiểm tra khai báo; D nhầm đầu vào với kết quả; C chứng minh model đề nghị đúng, chưa chứng minh công cụ chạy.

## Đối chiếu Bedrock: mô tả đầu vào công cụ bằng JSON Schema

Mẫu Converse dùng `toolSpec` và `inputSchema`, khác trường `input_schema` của Messages API. Tạo schema từ dữ liệu mẫu chỉ là bước đầu; cần đối chiếu với hàm và dữ liệu thật. Không đưa khóa bí mật hoặc dữ liệu riêng vào công cụ chuyển đổi bên ngoài. Dùng chung câu hỏi về khái niệm.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276758). Bản lưu: `sources/bedrock-lessons/276758.json`.

## Đối chiếu Vertex

Mẫu Messages dùng `name`, `description` và `input_schema`. `ToolParam` hỗ trợ kiểm tra kiểu khi phát triển, không thay kiểm tra dữ liệu lúc chạy. Schema do mô hình tạo vẫn cần rà soát. Độ dài mô tả 3–4 câu chỉ là gợi ý; điều chính là nêu phạm vi và lúc dùng công cụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tool schemas](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289174). Bản lưu: `sources/vertex-lessons/289174.json`.
