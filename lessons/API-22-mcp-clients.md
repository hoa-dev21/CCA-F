# Khám phá và gọi công cụ

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287775), sources/api-lessons/287775.json. Câu hỏi tự biên soạn.

## Nội dung bài học


MCP client là thành phần trao đổi với MCP server. Hai việc cơ bản của client là lấy danh sách công cụ và gửi yêu cầu gọi một công cụ.

Luồng trong bài gồm: ứng dụng lấy định nghĩa công cụ qua client, gửi câu hỏi và các định nghĩa cho Claude, rồi nhận yêu cầu gọi công cụ. Client chuyển tên và đầu vào đến server. Server thực hiện thao tác với dịch vụ phía sau, trả kết quả về ứng dụng. Cuối cùng, ứng dụng gửi dữ liệu đó lại cho Claude để tạo câu trả lời.

Lấy danh sách chỉ giúp biết công cụ nào có sẵn, chưa chạy công cụ. Tương tự, server trả được dữ liệu chưa có nghĩa Claude đã nhận dữ liệu ấy. Ứng dụng vẫn phải đưa kết quả vào lượt hội thoại tiếp theo.

Bài còn nhắc đến các cách truyền thông điệp giữa client và server, gọi là transport. Ở đây cần nắm trách nhiệm của client; khi triển khai, phải kiểm tra cách kết nối phù hợp với phiên bản giao thức đang dùng.

## Tự kiểm tra

**Câu 1 — Chọn một.** Host kết nối MCP server thành công nhưng tools gửi Claude vẫn là danh sách rỗng. Bước nào đang thiếu trong cầu nối?

A. Gọi thử mọi tool để model tự khám phá.

B. Chèn thông báo “MCP đã kết nối” vào system thay danh sách tools.

C. Yêu cầu server sinh câu trả lời cuối để bỏ bước công bố khả năng.

D. Lấy tools từ server và công bố định nghĩa cho model.

**Câu 2 — Chọn hai.** Claude đã trả tool_use cho một công cụ MCP. Hai bước nào host cần phối hợp tiếp?

A. Chuyển tên và đối số sang client để gọi server.

B. Chỉ lưu kết quả server trong log vận hành rồi kết thúc.

C. Đổi tên công cụ dựa trên vị trí của nó trong danh sách khám phá.

D. Gửi kết quả server vào lượt hội thoại tiếp theo cho Claude.

**Câu 3 — Chọn một.** Server trả kết quả đọc tài liệu đúng trong log client nhưng model nói chưa có tài liệu. Kiểm tra đầu tiên nên nhắm đâu?

A. Độ dài tên tài liệu trong giao diện autocomplete.

B. Cài thêm server khác để model có nhiều lựa chọn.

C. Cầu nối từ kết quả client sang request model kế tiếp.

D. Mô tả công cụ trên server, vì mọi lỗi sau gọi đều do description.

**Câu 4 — Chọn hai.** Một client wrapper được đánh giá để dùng cho nhiều MCP server. Hai hành vi nào là cốt lõi của luồng trong bài?

A. Gọi công cụ theo tên và đối số đã chọn.

B. Suy diễn lại kết quả dịch vụ bằng model trước khi host nhận dữ liệu.

C. Tự trộn lịch sử mọi host thành một hội thoại chung.

D. Liệt kê công cụ để host biết định nghĩa khả dụng.

**Câu 5 — Chọn một.** Server đổi schema một tham số từ document sang doc_id, host vẫn gửi schema cũ cho Claude. Model tiếp tục tạo đối số cũ. Sửa bền vững nhất là gì?

A. Chỉ sửa câu lỗi hiển thị cho người dùng cho dễ hiểu.

B. Cập nhật định nghĩa tool mà host công bố cho model.

C. Giữ schema cũ nhưng coi mọi lỗi tham số là “không tìm thấy tài liệu”.

D. Để Claude đoán tên mới sau mỗi lỗi.

## Đáp án và giải thích

1. **D.** D nối khám phá server với khả năng model thấy. A có thể gây tác động không cần; B thiếu hợp đồng từng công cụ; C đổi trách nhiệm hội thoại.

2. **A, D.** A thực thi yêu cầu, D hoàn tất vòng dữ liệu. B model vẫn chưa nhận kết quả; C mất hợp đồng tên và có thể gọi sai công cụ.

3. **C.** C nhắm ranh giới dữ liệu còn thiếu sau khi đã có kết quả. D ít phù hợp bằng chứng thực thi đúng; A không kiểm tra request; B tăng tích hợp không sửa luồng hiện tại.

4. **A, D.** D là khám phá; A là thực thi. B thêm lớp diễn giải không cần cho giao thức; C phá ranh giới hội thoại và không thuộc trách nhiệm client.

5. **B.** B khôi phục hợp đồng giữa ba bên. A không sửa đầu vào; D dùng thử sai thay đồng bộ định nghĩa; C làm sai bản chất lỗi schema thành lỗi dữ liệu.

## Đối chiếu khóa MCP riêng

Phần kiến thức chính đã được đối chiếu với khóa Introduction to MCP và được trình bày trong bài này. Hai bản có cách diễn đạt khác nhau, không phải bản sao nguyên văn. Dùng chung câu hỏi để tránh học và đếm trùng.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol/296690). Bản lưu: `sources/mcp-lessons/296690.json`.

## Đối chiếu MCP trong khóa Bedrock

Bài Bedrock dùng cùng luồng lấy danh sách và gọi công cụ. Các phương thức truyền thông điệp được liệt kê trong khóa thuộc thời điểm giảng; phải kiểm tra khả năng hỗ trợ khi triển khai. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276793). Bản lưu: `sources/bedrock-lessons/276793.json`.

## Đối chiếu Vertex

Luồng là lấy danh sách qua `list_tools`, cho mô hình chọn, gọi `call_tool`, nhận kết quả rồi gửi lại mô hình. Cách truyền qua stdio hoặc HTTP phải theo đặc tả và cách triển khai. Không mặc định WebSocket được nhắc trong lời giảng là phương thức chuẩn có sẵn ở mọi client. Dùng chung câu hỏi.

Nguồn đối chiếu: [MCP clients](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289204). Bản lưu: `sources/vertex-lessons/289204.json`.
