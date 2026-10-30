# Introducing tool use — Kết nối Claude với dữ liệu bên ngoài

Nguồn bài học: [Introducing tool use](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287747), khóa Building with the Claude API. Đã đọc nội dung sau đăng nhập. Đây là bản tóm tắt tự biên soạn; các câu hỏi bên dưới là câu luyện tập mới, không phải câu thi thật.

Bản nội dung đã đọc: sources/api-lessons/287747.json.

## Bài giảng khoảng 5 phút

Kiến thức huấn luyện của Claude không cung cấp trạng thái hiện tại của đơn hàng, thời tiết hay cơ sở dữ liệu doanh nghiệp. Muốn trả lời bằng dữ liệu mới, ứng dụng cần cung cấp một đường truy cập tới hệ thống bên ngoài.

Trong mô hình client tool của bài học, ứng dụng gửi yêu cầu người dùng cùng định nghĩa công cụ. Claude nhận ra thông tin còn thiếu và yêu cầu công cụ với tham số thích hợp. Máy chủ ứng dụng thực thi mã gọi API hoặc truy vấn cơ sở dữ liệu, rồi gửi kết quả trở lại. Claude dùng kết quả đó để trả lời.

Hãy phân biệt hai trách nhiệm: Claude chọn yêu cầu thông tin nào; ứng dụng thực thi thao tác bên ngoài. Chỉ viết tên công cụ trong prompt chưa tạo ra kết nối dữ liệu.

Ví dụ tự biên soạn: khách hỏi đơn hàng có giao hôm nay không. Claude cần yêu cầu tra cứu đơn; ứng dụng gọi hệ thống vận chuyển; kết quả mới được chuyển lại để Claude giải thích. Nếu chưa nhận được kết quả, không có cơ sở kết luận trạng thái giao hàng hiện tại.

Từ khóa: **tool use** — sử dụng công cụ; **tool request** — yêu cầu gọi công cụ; **data retrieval** — lấy dữ liệu; **external API** — API bên ngoài.

Liên hệ ôn Architect: hiểu đường đi của dữ liệu và nơi thực thi công cụ là nền tảng cho thiết kế agentic loop. Bài này chưa đủ để triển khai toàn bộ vòng lặp hoặc xử lý lỗi; các bài tiếp theo sẽ bổ sung schema, message blocks và tool results.

## Tự kiểm tra

**Câu 1 — Chọn một.** Bot hỗ trợ cần trạng thái thanh toán mới nhất. Ứng dụng chỉ gửi câu hỏi cho Claude rồi hiển thị câu trả lời. Thay đổi nào giải quyết đúng nguồn thiếu dữ liệu?

A. Thêm ví dụ các trạng thái thanh toán vào prompt.

B. Cung cấp công cụ tra cứu, thực thi yêu cầu từ Claude và trả kết quả về.

C. Yêu cầu Claude trả lời thật chắc chắn.

D. Tăng độ dài câu trả lời.

**Câu 2 — Chọn hai.** Với client tool trong bài học, trách nhiệm nào thuộc máy chủ ứng dụng?

A. Thực thi mã gọi dịch vụ bên ngoài.

B. Gửi dữ liệu thu được trở lại Claude.

C. Thay đổi kiến thức huấn luyện của Claude.

D. Suy ra thời tiết hiện tại từ dữ liệu huấn luyện.

**Câu 3 — Chọn một.** Claude đã tạo yêu cầu tra cứu đơn hàng nhưng mã ứng dụng chưa thực thi công cụ. Kết luận nào đúng?

A. Claude đã có kết quả mới vì biết tên công cụ.

B. Chỉ cần lặp lại prompt để cập nhật đơn hàng.

C. Luồng lấy dữ liệu chưa hoàn tất; cần thực thi và trả kết quả.

D. Không cần hệ thống đơn hàng nếu mô tả công cụ chi tiết.

## Đáp án và giải thích

1. **B.** Đưa dữ liệu thực tế vào luồng. A chỉ minh họa định dạng; C thay đổi cách diễn đạt; D thay đổi độ dài. Cả ba không lấy trạng thái thanh toán.
2. **A, B.** Máy chủ thực thi và trả dữ liệu. C không xảy ra trong vòng gọi công cụ; D không thể xác lập thời tiết mới nhất.
3. **C.** Yêu cầu công cụ chưa phải kết quả công cụ. A nhầm định nghĩa với thực thi; B không truy cập nguồn dữ liệu; D không thay thế được hệ thống thật.

Nếu sai câu 2 hoặc 3, hãy vẽ lại bốn bước: yêu cầu → Claude yêu cầu công cụ → ứng dụng thực thi → Claude dùng kết quả trả lời.

## Đối chiếu Bedrock: Introducing tool use

Đã đọc [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276756) và đối chiếu khái niệm với bài chung. Cùng luồng yêu cầu dữ liệu–ứng dụng thực thi–model dùng kết quả. Thứ tự viết các thành phần mã có thể khác thứ tự chạy. Nguồn: sources/bedrock-lessons/276756.json. Dùng chung câu hỏi kiến thức tương đương, không đếm thành bộ câu mới.

## Đối chiếu Vertex

Đã đọc [Introducing tool use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289172), sources/vertex-lessons/289172.json. Tool cung cấp dữ liệu ngoài qua vòng request/executor/result. Dữ liệu thời gian thực vẫn có thể cũ hoặc sai; model không tự thực thi Python chỉ nhờ khai báo tool. Dùng chung câu hỏi khái niệm.
