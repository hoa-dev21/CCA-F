# Đánh đổi giữa dự đoán và linh hoạt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287794), sources/api-lessons/287794.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Workflow và agent có điểm mạnh, hạn chế khác nhau. Lựa chọn nên dựa trên nhiệm vụ và kết quả đánh giá, không chỉ dựa vào tên công nghệ.

Workflow quy định các bước từ trước. Bạn dễ kiểm thử từng bước và theo dõi dữ liệu, nhưng khó xử lý yêu cầu nằm ngoài những đường đã thiết kế.

Agent cho mô hình chọn hướng giải quyết từ mục tiêu và công cụ được cấp. Cách này hữu ích khi cần đổi hướng theo phát hiện mới hoặc hỏi thêm dữ liệu. Đổi lại, nhiều chuỗi hành động có thể xảy ra, khiến việc dự đoán, đánh giá và tìm lỗi khó hơn.

Ví dụ: Trích xuất dữ liệu theo cấu trúc cố định có thể dùng workflow với kiểm tra ở từng bước. Điều tra một sự cố chưa rõ nguyên nhân có thể cần agent khảo sát và chọn bước tiếp theo. Một ứng dụng có thể dùng cả hai cho những phần việc khác nhau.

Hãy bắt đầu bằng cách giải quyết đủ tin cậy cho bài toán và thêm quyền tự chủ khi có nhu cầu rõ. Không thể kết luận mọi workflow tốt hơn agent, hoặc ngược lại, nếu chưa xét yêu cầu và dữ liệu cụ thể.

## Câu hỏi

**1. Chọn một.** Hệ thống chỉ xử lý một quy trình đầu vào/đầu ra đã biết, ưu tiên dễ kiểm thử. Lựa chọn ban đầu?

A. Tác nhân AI tự chủ tối đa dù không cần.

B. Quy trình làm việc có các bước và gate rõ.

C. Loại bỏ validation để tăng linh hoạt.

D. Chỉ chọn theo tên công nghệ mới nhất.

**2. Chọn một.** Tác vụ liên tục cần chọn hướng điều tra dựa trên phát hiện mới. Điều gì ủng hộ tác nhân AI?

A. Không cần quan sát công cụ.

B. Mọi bước đều bất biến.

C. Nhu cầu thích ứng đường giải quyết theo thông tin mới.

D. Không cần đánh giá kết quả.

**3. Chọn một.** Vì sao tác nhân AI thường khó đánh giá hơn một quy trình xử lý cố định?

A. Có nhiều chuỗi hành động khả dĩ, không biết trước mọi đường thực thi.

B. Không thể lưu bất kỳ log nào.

C. Công cụ không bao giờ trả kết quả.

D. Tác nhân AI luôn không có mục tiêu.

## Đáp án

1. **B.** A thêm tự do không phục vụ yêu cầu; C bỏ kiểm chứng; D không xét bài toán.
2. **C.** A và D bỏ yêu cầu vận hành; B nghiêng về quy trình làm việc cố định.
3. **A.** B và C không phải đặc tính bắt buộc; D trái định nghĩa tác nhân AI nhận mục tiêu.

## Đối chiếu Vertex

Workflow thường dễ dự đoán và đánh giá hơn nhưng ít linh hoạt; agent thích ứng tốt hơn nhưng khó kiểm soát chi phí và độ tin cậy hơn. Chọn theo yêu cầu và kết quả đo. Nhận định trong video về tỷ lệ hoàn thành thấp hơn không phải số đo chung cho mọi hệ thống; chọn workflow cũng không tự bảo đảm thành công 100%. Dùng chung câu hỏi.

Nguồn đối chiếu: [Workflows vs agents](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289245). Bản lưu: `sources/vertex-lessons/289245.json`.
