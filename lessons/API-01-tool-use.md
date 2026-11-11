# Kết nối Claude với dữ liệu bên ngoài

Nguồn bài học: [Introducing tool use](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287747), khóa Building with the Claude API. Đã đọc nội dung sau đăng nhập. Đây là bản tóm tắt tự biên soạn; các câu hỏi bên dưới là câu luyện tập mới, không phải câu thi thật.

Bản nội dung đã đọc: sources/api-lessons/287747.json.

## Nội dung bài học

### 1. Vì sao Claude cần công cụ?

Hãy hình dung bạn đang làm một trợ lý chăm sóc khách hàng. Khách hỏi: “Đơn hàng DH102 của tôi đã giao chưa?”. Claude có thể hiểu câu hỏi và biết cách viết câu trả lời lịch sự. Tuy nhiên, kiến thức có được trong quá trình huấn luyện không cho Claude biết trạng thái hiện tại của đơn DH102 trong hệ thống của cửa hàng.

Muốn trả lời, trợ lý cần lấy dữ liệu từ hệ thống quản lý đơn hàng. **Công cụ (tool)** là cách ứng dụng cho phép Claude yêu cầu thực hiện việc đó. Công cụ có thể tra cứu dữ liệu, gọi một dịch vụ bên ngoài hoặc thực hiện một thao tác được ứng dụng cho phép.

Trong bài này, ta học loại công cụ do ứng dụng thực thi, thường gọi là **client tool**. Phần mềm của bạn chịu trách nhiệm chạy công cụ. Đây là điểm quan trọng để hiểu đúng các bước tiếp theo.

### 2. Những thành phần tham gia

- **Người dùng:** đặt câu hỏi, chẳng hạn hỏi trạng thái một đơn hàng.
- **Claude:** hiểu câu hỏi, xác định thông tin cần lấy và đề nghị gọi công cụ phù hợp.
- **Ứng dụng của bạn:** nhận đề nghị từ Claude, chạy mã của công cụ và gửi kết quả trở lại.
- **Hệ thống bên ngoài:** nơi có dữ liệu thật, chẳng hạn cơ sở dữ liệu đơn hàng hoặc dịch vụ thời tiết.

Khi nói ứng dụng “gọi API”, ta đang nói đến việc phần mềm gửi một yêu cầu theo cách mà dịch vụ bên ngoài quy định. Ví dụ, ứng dụng gửi mã đơn hàng đến dịch vụ vận chuyển để nhận trạng thái giao hàng. Người mới chưa cần thuộc cú pháp API ở bài này; trước hết cần hiểu ai gửi yêu cầu và ai có dữ liệu.

### 3. Quá trình sử dụng công cụ diễn ra thế nào?

Quá trình có bốn bước chính:

1. **Ứng dụng gửi câu hỏi và mô tả công cụ cho Claude.** Mô tả cho biết công cụ làm được gì và cần thông tin đầu vào nào. Chẳng hạn, công cụ tra cứu đơn hàng cần mã đơn hàng.
2. **Claude đề nghị gọi công cụ.** Với câu hỏi về DH102, Claude đưa ra yêu cầu tra cứu mã DH102. Đây mới là đề nghị thực hiện, chưa phải dữ liệu lấy được từ hệ thống.
3. **Ứng dụng chạy công cụ.** Mã chương trình gọi hệ thống đơn hàng, nhận kết quả rồi gửi kết quả ấy trở lại Claude.
4. **Claude trả lời người dùng dựa trên kết quả.** Claude đọc dữ liệu vừa nhận và diễn đạt thành câu trả lời phù hợp với câu hỏi ban đầu.

Bạn có thể ghi nhớ theo đường đi: **câu hỏi → đề nghị lấy dữ liệu → ứng dụng lấy dữ liệu → Claude dùng dữ liệu để trả lời**.

### 4. Ví dụ đi từ đầu đến cuối

Đây là ví dụ tự biên soạn, với dữ liệu giả định để minh họa:

- Khách hỏi: “Đơn DH102 của tôi có giao hôm nay không?”.
- Ứng dụng gửi câu hỏi cho Claude và cho biết có công cụ tra cứu đơn hàng.
- Claude yêu cầu dùng công cụ với mã đơn DH102.
- Ứng dụng tra hệ thống vận chuyển. Hệ thống trả về: “Đang giao; dự kiến giao trước 18 giờ hôm nay”.
- Ứng dụng gửi kết quả này cho Claude.
- Claude trả lời: “Theo trạng thái từ đơn vị vận chuyển, đơn DH102 đang được giao và dự kiến đến trước 18 giờ hôm nay”.

Chữ “dự kiến” cần được giữ lại vì nguồn chỉ đưa ra thời gian dự kiến. Nếu công cụ chưa trả dữ liệu, Claude chưa có cơ sở để khẳng định đơn đang giao. Nếu dữ liệu không tìm thấy đơn hàng, câu trả lời cũng phải phản ánh tình trạng đó.

### 5. Lợi ích và những điều dễ hiểu nhầm

Công cụ giúp trợ lý tiếp cận dữ liệu mới, kết nối với hệ thống doanh nghiệp và trả lời dựa trên thông tin của tình huống cụ thể. Cách trao đổi có cấu trúc cũng giúp ứng dụng biết Claude muốn lấy gì và cần truyền tham số nào.

Tuy nhiên, chỉ viết “hãy tra đơn hàng” trong yêu cầu không tự tạo ra kết nối đến hệ thống đơn hàng. Người xây dựng ứng dụng vẫn phải cung cấp công cụ và mã thực thi tương ứng.

Tương tự, việc Claude đã yêu cầu gọi công cụ không có nghĩa công cụ đã chạy thành công. Cần phân biệt **yêu cầu gọi công cụ** với **kết quả công cụ trả về**. Dữ liệu lấy từ bên ngoài cũng có thể cũ hoặc sai; việc sử dụng công cụ không tự bảo đảm dữ liệu luôn chính xác.

### 6. Tự giải thích lại trước khi làm câu hỏi

Hãy thử trả lời bằng lời của bạn: “Khi khách hỏi trạng thái thanh toán mới nhất, Claude làm phần nào, ứng dụng làm phần nào?”. Nếu bạn giải thích được rằng Claude đề nghị tra cứu, ứng dụng thực sự lấy dữ liệu rồi Claude mới dựa vào đó để trả lời, bạn đã nắm được ý chính.

Áp dụng khi ôn thi Architect: hiểu đường đi của dữ liệu và nơi thực thi công cụ là nền tảng cho thiết kế vòng lặp hoạt động của tác nhân AI. Bài này chưa đủ để triển khai toàn bộ vòng lặp hoặc xử lý lỗi; các bài tiếp theo sẽ bổ sung bản mô tả cấu trúc dữ liệu, các khối nội dung tin nhắn và kết quả công cụ.

## Tự kiểm tra

**Câu 1 — Chọn một.** Bot phải trả trạng thái thanh toán tại thời điểm hỏi. Kho dữ liệu phân tích cập nhật mỗi đêm; hệ thống giao dịch có API đọc. Thay đổi nào đáp ứng yêu cầu mà vẫn giữ Claude ở vai trò diễn giải?

A. Mô tả API thật chi tiết rồi coi yêu cầu gọi công cụ là bằng chứng đã tra cứu.

B. Dùng truy vấn hợp lệ để xác nhận trạng thái.

C. Cho ứng dụng thực thi công cụ đọc API giao dịch rồi đưa kết quả cho Claude.

D. Đưa bản xuất gần nhất vào prompt và yêu cầu Claude suy luận thay đổi trong ngày.

**Câu 2 — Chọn hai.** Claude đề nghị tra đơn DH102. Nhóm muốn phân tách trách nhiệm để nhật ký có thể kiểm toán. Hai sự kiện nào phải được ghi nhận ở phía ứng dụng thực thi?

A. Kết quả hoặc lỗi dịch vụ được chuyển trở lại Claude.

B. Lần cập nhật trọng số mô hình bằng trạng thái đơn vừa tra.

C. Sự xác nhận rằng mọi dữ liệu HTTP 200 đều mới nhất.

D. Đầu vào thực sự được gửi đến dịch vụ tra cứu.

**Câu 3 — Chọn một.** Log chỉ có một khối yêu cầu tra cứu hợp lệ; dịch vụ chưa được gọi. Người dùng hỏi liệu đơn đã giao chưa. Cách xử lý nào tránh công bố kết luận chưa có bằng chứng?

A. Tra cứu thực tế trước khi xác nhận trạng thái.

B. Trả dự đoán trước, sửa sau khi API trả khác.

C. Dùng kết quả của đơn khác cùng khách hàng vì đã xác minh danh tính.

D. Thông báo tra cứu thành công vì yêu cầu đã vượt kiểm tra cấu trúc.

**Câu 4 — Chọn hai.** API trả HTTP 200, trạng thái “dự kiến giao trước 18 giờ”, bản ghi cập nhật hôm qua. Hai chi tiết nào cần giữ trong câu trả lời cho người đang hỏi trạng thái hiện tại?

A. Ngày cập nhật được thay bằng thời điểm gọi API hôm nay.

B. HTTP 200 được dùng để khẳng định giao hàng chắc chắn.

C. Mốc 18 giờ vẫn được diễn đạt là dự kiến.

D. Hạn chế về độ mới của bản ghi được nêu rõ.

**Câu 5 — Chọn một.** Công cụ báo không tìm thấy DH102. Hội thoại trước từng nói đơn đã thanh toán nhưng không có nguồn đi kèm. Kết luận nào có căn cứ nhất?

A. Đã thanh toán vì kết luận trước đó cần được giữ nhất quán.

B. Chưa đủ cơ sở xác nhận thanh toán; cần kiểm tra mã đơn hoặc nguồn tra cứu.

C. Đã thanh toán với độ tin cậy thấp, lấy câu trả lời trước làm nguồn dự phòng.

D. Chưa thanh toán vì không có bản ghi trả về từ công cụ.

## Đáp án và giải thích

1. **C.** C tạo đường lấy dữ liệu hiện tại. D thiếu cập nhật trong ngày; B có câu truy vấn nhưng chưa có kết quả; A nhầm khai báo và đề nghị với thực thi.

2. **A, D.** D và A chứng minh vòng lấy dữ liệu đã chạy. B không phải bước của vòng tool use; C nhầm thành công truyền tải với độ mới của dữ liệu nghiệp vụ.

3. **A.** A hoàn tất bước còn thiếu. B xác nhận quá sớm; C dùng sai đối tượng; D chỉ chứng minh đầu vào đúng cấu trúc, không chứng minh công cụ đã chạy.

4. **C, D.** C giữ mức chắc chắn của nguồn; D giữ giới hạn bằng chứng. A đánh tráo thời điểm đọc với cập nhật; B dùng thành công kỹ thuật để suy ra cam kết giao hàng.

5. **B.** B phân biệt thiếu dữ liệu với bằng chứng phủ định. A và C dùng phát biểu chưa được xác minh làm nguồn; D suy diễn trạng thái thanh toán từ kết quả không tìm thấy.

## Đối chiếu Bedrock: sử dụng công cụ

Bài Bedrock dùng cùng luồng: mô hình yêu cầu dữ liệu, ứng dụng chạy công cụ rồi mô hình dùng kết quả để trả lời. Thứ tự viết các phần mã trong bài giảng có thể khác thứ tự chúng chạy. Vì kiến thức tương đương, bộ ôn dùng chung câu hỏi.

Nguồn đối chiếu: [bài Bedrock](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276756). Bản lưu: `sources/bedrock-lessons/276756.json`.

## Đối chiếu Vertex

Bài Vertex cũng lấy dữ liệu ngoài qua ba bước: yêu cầu công cụ, thực thi và trả kết quả. Khai báo công cụ không tự chạy mã Python. Ngay cả dữ liệu vừa lấy cũng có thể cũ hoặc sai nên vẫn cần kiểm tra. Dùng chung câu hỏi khái niệm.

Nguồn đối chiếu: [Introducing tool use](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289172). Bản lưu: `sources/vertex-lessons/289172.json`.
