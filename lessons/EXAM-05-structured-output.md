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

**Câu 1 — Chọn một.** Workflow bắt buộc trích metadata rồi mới enrichment. Cả hai công cụ được khai báo và tool_choice đặt any. Mô hình đôi khi gọi enrichment đầu tiên. Sửa nào đáp ứng thứ tự bắt buộc?

A. Đổi thứ tự mô tả công cụ và thêm ví dụ metadata đứng trước.

B. Ép metadata; host xác nhận đạt rồi mới cho enrichment.

C. Giữ any nhưng yêu cầu mô hình giải thích vì sao metadata đã đủ.

D. Cho chạy cả hai rồi bỏ enrichment nếu metadata thất bại.

**Câu 2 — Chọn một.** JSON parse được, đúng schema, nhưng tổng hóa đơn khác tổng các dòng. Hệ thống nên làm gì?

A. Validate nghiệp vụ; giữ hai tổng và đánh dấu xung đột.

B. Chấp nhận vì cấu trúc hợp lệ là mục tiêu của structured output.

C. Ghi đè tổng khai báo bằng tổng tính để đảm bảo nhất quán.

D. Retry đến khi mô hình tạo hai tổng bằng nhau.

**Câu 3 — Chọn hai.** Hợp đồng yêu cầu trường mã số thuế, nhưng một số tài liệu không có; loại tài liệu cũng có thể mơ hồ. Hai lựa chọn schema nào giảm việc bịa dữ liệu?

A. Đặt mã số thuế là chuỗi bắt buộc và chấp nhận số gần đúng.

B. Cho phép null theo quy ước rõ, phân biệt với chuỗi rỗng.

C. Bắt chọn loại phổ biến nhất khi không đủ dấu hiệu.

D. Có nhãn unclear/other và trường giải thích nếu downstream cần phân biệt.

**Câu 4 — Chọn một.** Host nhận đúng tên công cụ bắt buộc và arguments đúng kiểu. Công cụ sẽ cập nhật hồ sơ khách hàng. Bằng chứng nào còn cần trước khi thực thi?

A. Mô hình đã chọn đúng công cụ nên quyền cập nhật được suy ra.

B. JSON hợp lệ đủ chứng minh khách hàng tồn tại.

C. Quyền trên hồ sơ, tính hợp lệ nghiệp vụ và tiền điều kiện thao tác.

D. Một câu xác nhận bằng văn xuôi từ cùng mô hình thay cho kiểm tra host.

**Câu 5 — Chọn hai.** Một API downstream phân biệt “không có trường” và “đã kiểm tra nhưng không tìm thấy”. Hai việc nào cần làm khi thiết kế đầu ra?

A. Quy định rõ optional so với null và kiểm thử adapter với cả hai.

B. Xóa mọi null trước khi gửi để payload gọn hơn.

C. Giữ trạng thái thiếu theo bằng chứng thay vì tự điền giá trị mặc định.

D. Chuyển cả hai trường hợp thành chuỗi rỗng để thống nhất kiểu.

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
