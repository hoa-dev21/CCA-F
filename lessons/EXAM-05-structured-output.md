# bản mô tả cấu trúc dữ liệu và lựa chọn công cụ

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 4.3, trang PDF 17–18. Câu hỏi tự biên soạn; không phải bài video Skilljar.

## Nội dung bài học


Trong cách làm được đề cương kiểm tra, ứng dụng khai báo một công cụ trích xuất với JSON Schema — bản mô tả các trường, kiểu dữ liệu và điều kiện của đầu vào — rồi lấy dữ liệu từ khối `tool_use` mà mô hình trả về.

Cách chọn công cụ qua `tool_choice` cần phù hợp với quy trình:

- `auto`: mô hình có thể trả văn bản hoặc gọi công cụ.
- `any`: yêu cầu gọi một công cụ trong tập được cung cấp.
- Chọn theo tên: yêu cầu gọi một công cụ cụ thể.

Ví dụ: Quy trình phải trích thông tin mô tả tài liệu trước khi bổ sung dữ liệu khác thì nên chọn đúng công cụ cần chạy trước, thay vì chỉ nhắc bằng prompt. Nếu có nhiều công cụ trích xuất theo loại tài liệu và chưa biết loại nào phù hợp, `any` cho phép chọn trong tập mà vẫn yêu cầu gọi công cụ.

Schema giúp quy định cấu trúc, chưa chứng minh dữ liệu đúng nghĩa. Hóa đơn có thể đủ trường và đúng kiểu nhưng tổng tiền sai hoặc một giá trị bị đặt nhầm trường. Việc khai báo schema thông thường cũng không tự bảo đảm kiểm tra nghiêm ngặt ở mọi mô hình/API; cần cấu hình tính năng được môi trường hỗ trợ.

Thiết kế sẵn cách biểu diễn thông tin thiếu hoặc mơ hồ. Optional nghĩa trường có thể không xuất hiện; nullable nghĩa trường có thể nhận giá trị `null`. Đây là hai điều khác nhau. Với danh sách giá trị cho phép (enum), có thể cần `unclear` hoặc `other` kèm phần giải thích theo yêu cầu ứng dụng. Không ép mô hình chọn giá trị cụ thể khi nguồn không có căn cứ.

Kết hợp schema với quy ước chuẩn hóa, chẳng hạn định dạng ngày, và kiểm tra nghiệp vụ sau trích xuất.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A workflow requires metadata extraction before enrichment. Both tools are available with `tool_choice=any`, and enrichment sometimes runs first. Which change enforces the required order?

A. Reorder tool descriptions and add a metadata-first example.

B. Force metadata extraction, then let the host enable enrichment only after validation succeeds.

C. Keep `any` and ask the model to explain why metadata is sufficient.

D. Run both tools and discard enrichment if metadata fails.

**Question 2 — Choose one.** JSON parses and matches the schema, but the invoice total differs from the sum of its line items. What should the system do?

A. Apply business validation, preserve both totals, and flag the conflict.

B. Accept it because structured output guarantees the required shape.

C. Overwrite the stated total with the calculated total.

D. Retry until the model makes both totals equal.

**Question 3 — Choose two.** An output contract requires a tax ID, but some documents omit it and their type may be ambiguous. Which TWO schema choices reduce fabricated data?

A. Require a string and accept an approximate tax ID.

B. Allow `null` with clearly defined meaning distinct from an empty string.

C. Require the most common document type when evidence is insufficient.

D. Support `unclear` or `other`, with an explanation field when consumers need the distinction.

**Question 4 — Choose one.** The host receives the required tool name and correctly typed arguments for updating a customer record. What still needs checking before execution?

A. The correct tool choice proves update permission.

B. Valid JSON proves the customer exists.

C. Record-level permissions, business validity, and action preconditions.

D. A prose confirmation from the same model instead of host-side checks.

**Question 5 — Choose two.** A downstream API distinguishes an omitted field from a checked-but-not-found value. Which TWO design actions preserve that distinction?

A. Define optional fields versus `null` and test the adapter with both.

B. Remove all `null` values to reduce payload size.

C. Preserve missing-data states supported by evidence instead of inventing defaults.

D. Convert both states to empty strings for a consistent type.

## Đáp án và giải thích

1. **B.** B cưỡng chế lựa chọn và điều kiện chuyển bước. A và C chỉ hướng dẫn. D cho phép thực thi bước phụ thuộc trước khi tiền điều kiện được xác nhận.

2. **A.** A phân biệt cấu trúc và ngữ nghĩa, giữ bằng chứng. B không kiểm tra nghiệp vụ. C sửa nguồn mà không biết tổng nào đúng. D có thể ép mô hình tạo sự nhất quán giả.

3. **B, D.** B biểu diễn thiếu dữ liệu; D biểu diễn phân loại chưa xác định. A và C ép một giá trị có vẻ hoàn chỉnh nhưng thiếu căn cứ. Cần thống nhất ngữ nghĩa null với bên tiêu thụ.

4. **C.** C kiểm tra các điều kiện schema không chứng minh được. A nhầm chọn công cụ với cấp quyền. B nhầm kiểu dữ liệu với tồn tại thực thể. D vẫn là lời mô hình, không phải kiểm soát thực thi.

5. **A, C.** A giữ hợp đồng giữa các bên, C tránh tạo dữ kiện. B và D xóa mất khác biệt mà downstream cần, dù payload vẫn có thể parse thành công.

## Đối chiếu bài Bedrock

Mẫu Converse dùng `toolSpec`, `inputSchema.json` và `toolChoice` để lấy dữ liệu từ đầu vào công cụ. Nếu chỉ cần trích xuất, có thể kết thúc ở dữ liệu đã kiểm tra mà không thực hiện hành động bên ngoài giả tạo. Nếu tiếp tục hội thoại công cụ, phải trả kết quả đúng giao thức. Schema thông thường không bảo đảm kiểm tra nghiêm ngặt ở mọi mô hình, API. Dùng chung câu hỏi.

Nguồn đối chiếu: [Structured data with tools](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276765). Bản lưu: `sources/bedrock-lessons/276765.json`.

## Đối chiếu Vertex

Lấy dữ liệu từ `tool_use.input` và chọn đúng công cụ bằng `tool_choice` khi chế độ đó được hỗ trợ. Khai báo `properties` chưa khiến trường bắt buộc; cần `required`, giá trị cho phép, cách biểu diễn null và kiểm tra theo yêu cầu. Lời hứa “đáng tin cậy được bảo đảm” trong bài chưa chứng minh đúng nguồn. Nếu chỉ dùng công cụ để quy định đầu ra, không cần tạo hành động giả; nếu tiếp tục hội thoại, giữ đúng giao thức kết quả công cụ. Dùng chung câu hỏi.

Nguồn đối chiếu: [Tools for structured data](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289181). Bản lưu: `sources/vertex-lessons/289181.json`.
