# Điều kiện dừng và chia nhiệm vụ thích ứng

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, tháng 7/2026, mục 1.1, 1.5, 1.6, trang PDF 5, 7–8. Bản nguồn lưu tại `sources/architect-exam-guide-text.json`. Phần giải thích và ví dụ được biên soạn để học; câu hỏi không phải đề thi thật.

## Nội dung bài học

### 1. Tác nhân AI và vòng lặp là gì?

Một tác nhân AI (agent) là hệ thống dùng mô hình AI để lựa chọn hành động tiếp theo nhằm thực hiện một nhiệm vụ. Ví dụ, để tìm nguyên nhân chương trình bị lỗi, tác nhân có thể cần đọc tệp cấu hình, xem thông báo lỗi, rồi đọc thêm một tệp mã liên quan.

Một câu trả lời duy nhất thường chưa đủ để hoàn thành chuỗi việc đó. Ứng dụng phải trao đổi với Claude nhiều lần: gửi yêu cầu, nhận đề nghị gọi công cụ, chạy công cụ, gửi kết quả rồi nhận quyết định tiếp theo. Chuỗi lặp lại này gọi là **vòng lặp hoạt động của tác nhân AI**, hay agentic loop.

Trong vòng lặp này, Claude lựa chọn công cụ dựa trên thông tin đang có. Điều đó khác với một chương trình được viết sẵn rằng lúc nào cũng phải chạy công cụ A, rồi B, rồi C, bất kể kết quả thu được.

### 2. Ứng dụng biết khi nào cần tiếp tục bằng cách nào?

Trong luồng được đề cương mô tả, phản hồi của Claude có trường `stop_reason`, cho biết vì sao mô hình dừng sinh phản hồi ở lượt đó. Hai giá trị cần phân biệt trong bài này là:

| Giá trị | Ý nghĩa | Ứng dụng cần làm gì? |
| --- | --- | --- |
| `tool_use` | Claude đang yêu cầu sử dụng công cụ. | Kiểm tra yêu cầu, thực thi công cụ được phép, gửi kết quả trở lại rồi tiếp tục. |
| `end_turn` | Claude đã kết thúc lượt trả lời. | Kết thúc vòng lặp của lượt này. |

Đây là hai nhánh trọng tâm của bài học, không phải danh sách đầy đủ mọi tình huống mà một ứng dụng thực tế cần xử lý.

Khi gửi kết quả công cụ, ứng dụng cần giữ lịch sử hội thoại liên quan, gồm yêu cầu gọi công cụ và kết quả tương ứng. Mỗi kết quả phải gắn đúng mã định danh của yêu cầu. Nếu không, Claude có thể thiếu thông tin hoặc không biết kết quả thuộc thao tác nào.

Ví dụ, Claude yêu cầu đọc tệp cấu hình và ứng dụng nhận được nội dung tệp. Ứng dụng phải gửi nội dung đó lại trong lượt tiếp theo. Chỉ đọc tệp trên máy rồi không gửi kết quả cho Claude sẽ khiến mô hình chưa biết tệp chứa gì.

### 3. Vì sao không dừng khi thấy câu “tôi đã hoàn thành”?

Câu chữ do mô hình viết ra là nội dung trao đổi với người đọc. `stop_reason` là thông tin mà chương trình dùng để điều khiển luồng xử lý. Hai thứ này có vai trò khác nhau.

Giả sử phản hồi vừa có câu “tôi đã hoàn thành”, vừa có `stop_reason="tool_use"` và một yêu cầu đọc cấu hình. Ứng dụng vẫn phải xử lý yêu cầu công cụ hợp lệ và tiếp tục vòng lặp. Nếu chỉ tìm chữ “hoàn thành” rồi dừng, chương trình sẽ bỏ qua thao tác mà mô hình đang yêu cầu.

Tương tự, giới hạn năm lượt chạy có thể giúp tránh tốn quá nhiều thời gian hoặc chi phí. Nhưng chạm giới hạn đó chỉ có nghĩa chương trình phải dừng vì giới hạn tài nguyên; nó không chứng minh nhiệm vụ đã thành công. Ngay cả khi lượt trả lời đã kết thúc, chất lượng kết quả vẫn cần được đánh giá theo yêu cầu của nhiệm vụ.

### 4. Chia một nhiệm vụ lớn thành các bước nhỏ

Có hai cách chia việc cần phân biệt.

**Cách thứ nhất: chuỗi bước được xác định trước, gọi là prompt chaining.** Cách này phù hợp khi bạn đã biết trình tự cần làm. Ví dụ, khi kiểm tra một thay đổi mã nguồn, bạn có thể đọc từng tệp trước, sau đó kiểm tra các tệp phối hợp với nhau thế nào.

Lượt đọc từng tệp giúp phát hiện lỗi bên trong tệp đó. Lượt kiểm tra liên tệp giúp phát hiện lỗi khi các phần kết nối với nhau. Chẳng hạn, tệp A trả thời gian theo giây nhưng tệp B lại hiểu là mili giây. Đọc riêng từng tệp có thể chưa thấy sự không khớp này.

**Cách thứ hai: điều chỉnh kế hoạch theo kết quả tìm hiểu.** Cách này phù hợp khi nhiệm vụ còn mở, chẳng hạn “bổ sung kiểm thử toàn diện cho một hệ thống cũ”. Ban đầu, bạn chưa biết phần nào quan trọng, phần nào thiếu kiểm thử hoặc các phần phụ thuộc nhau ra sao.

Một trình tự hợp lý là:

1. Tìm hiểu cấu trúc hệ thống và những luồng sử dụng chính.
2. Xác định các chức năng quan trọng hoặc có nguy cơ gây lỗi lớn.
3. Chọn các việc kiểm thử cần ưu tiên.
4. Thực hiện và cập nhật kế hoạch khi phát hiện thêm quan hệ phụ thuộc.

Ví dụ, khi kiểm tra chức năng thanh toán, bạn phát hiện nó phụ thuộc vào cách làm tròn tiền ở một thư viện dùng chung. Kế hoạch cần bổ sung việc kiểm tra thư viện ấy. Nếu ngay từ đầu giao “mỗi tệp viết một bài kiểm thử” mà chưa hiểu hành vi hệ thống, bạn có thể tạo rất nhiều kiểm thử nhưng vẫn bỏ sót lỗi quan trọng.

### 5. Hook là gì và nên đặt ở đâu?

**Hook** là đoạn xử lý được chạy tại một thời điểm xác định trong quá trình hoạt động, chẳng hạn ngay trước hoặc ngay sau khi chạy công cụ. Trong bài này, hook có hai công dụng khác nhau.

**Trước khi chạy công cụ: kiểm tra và chặn thao tác không được phép.** Giả sử quy định của doanh nghiệp không cho trợ lý tự hoàn tiền quá 500 USD. Ứng dụng cần kiểm tra số tiền trước khi thực hiện giao dịch. Nếu vượt ngưỡng, nó chặn thao tác và chuyển yêu cầu cho người có thẩm quyền xử lý.

Chỉ nhắc Claude “không hoàn tiền quá 500 USD” chưa tạo ra một chốt chặn bằng chương trình. Nếu thao tác vẫn được thực thi mà không kiểm tra, hệ thống vẫn có thể vi phạm quy định. Kiểm tra sau khi tiền đã chuyển cũng không thể coi là đã ngăn giao dịch.

**Sau khi chạy công cụ: chuẩn hóa dữ liệu trước khi mô hình đọc.** Các hệ thống có thể trả dữ liệu theo cách khác nhau. Một công cụ trả thời gian dạng số Unix, công cụ khác trả chuỗi ISO 8601. Hook sau công cụ, chẳng hạn `PostToolUse`, có thể chuyển dữ liệu về một cách biểu diễn thống nhất.

Việc chuyển đổi phải hiểu ý nghĩa dữ liệu gốc. Cần biết số Unix đang tính bằng giây hay mili giây, và chuỗi thời gian có thông tin múi giờ nào. Với mã trạng thái dạng số, cần biết mỗi mã có nghĩa gì ở hệ thống nguồn. Chỉ đổi tên trường cho giống nhau chưa phải là chuẩn hóa đúng.

Nên giữ thông tin nguồn và giá trị gốc khi cần đối chiếu. Không được biến một thông báo lỗi thành kết quả thành công chỉ để dữ liệu có cùng hình thức.

### 6. Tự kiểm tra trước khi làm bài tập

Bạn cần giải thích được ba quyết định: chương trình dựa vào đâu để tiếp tục vòng lặp; khi nào nên dùng kế hoạch cố định hoặc kế hoạch có thể thay đổi; và vì sao chặn giao dịch phải diễn ra trước khi công cụ thực hiện giao dịch. Nếu còn vướng, hãy quay lại ví dụ tương ứng thay vì học thuộc tên thuật ngữ.

## Câu hỏi

**1. Chọn một.** Claude viết “tôi đã hoàn thành” nhưng phản hồi có `stop_reason="tool_use"` và yêu cầu đọc tệp cấu hình. Ứng dụng điều khiển vòng lặp nên làm gì?

A. Ghi nhận hoàn thành theo text, chuyển yêu cầu đọc cấu hình sang tác vụ nền để bổ sung sau.

B. Thực thi yêu cầu công cụ hợp lệ, trả kết quả đúng ID và tiếp tục vòng lặp.

C. Gửi lại câu hỏi người dùng với kết quả đọc cấu hình, bỏ phản hồi yêu cầu công cụ để rút ngắn lịch sử.

D. Khi đã hết ngân sách vòng lặp, dùng câu “đã hoàn thành” làm kết quả thành công thay vì chạy công cụ.

**2. Chọn một.** Bạn nhận yêu cầu “bổ sung kiểm thử toàn diện cho hệ thống mã nguồn cũ”, nhưng chưa biết cấu trúc hệ thống. Cách chia việc nào phù hợp nhất?

A. Phân công số lượng test bằng nhau cho từng thư mục, dùng tỷ lệ file có test để quyết định đã kiểm tra đủ.

B. Ưu tiên các hàm có độ phức tạp cao, cố định danh sách đó để giữ tiến độ dù phát hiện thêm phụ thuộc nghiệp vụ.

C. Lập bản đồ, chọn hành vi/rủi ro quan trọng, ưu tiên test và điều chỉnh kế hoạch theo phụ thuộc mới.

D. Hoàn tất toàn bộ test đơn vị theo cấu trúc file trước, sau đó mới khảo sát các luồng nghiệp vụ xuyên mô-đun.

**3. Chọn hai.** Công cụ A trả thời gian dạng Unix, công cụ B trả thời gian dạng ISO 8601. Quy định không cho trợ lý tự hoàn tiền quá 500 USD. Hai lựa chọn nào đặt bước xử lý đúng thời điểm?

A. Chuẩn hóa thời gian sau công cụ theo quy định về dữ liệu và hành vi và giữ nguồn/giá trị gốc.

B. Kiểm tra ngưỡng trong bước chọn công cụ của mô hình, rồi cho bộ thực thi tin mọi yêu cầu đã qua bước này.

C. Dùng PostToolUse phát hiện giao dịch vượt ngưỡng và tạo giao dịch bù, coi đó là cơ chế ngăn hoàn tiền.

D. Chặn yêu cầu vi phạm trước khi thực thi và trả đường chuyển cấp phù hợp.

**4. Chọn một.** Vòng lặp đã dùng hết ngân sách thực thi. Phản hồi cuối vẫn yêu cầu một công cụ hợp lệ, nhưng chưa có kết quả của công cụ đó. Trạng thái nào nên trả cho hệ thống gọi?

A. Thành công với phần văn bản cuối vì yêu cầu công cụ còn lại đã hợp lệ.

B. Chưa hoàn tất do hết ngân sách, kèm trạng thái để người vận hành quyết định tiếp tục.

C. Thành công một phần và coi yêu cầu công cụ chưa chạy là đã chạy nhưng không có dữ liệu.

D. Tiếp tục thực thi vì `tool_use` có độ ưu tiên cao hơn giới hạn ngân sách do ứng dụng đặt.

**5. Chọn hai.** Hai công cụ trả thời gian: A trả `1710000000`, B trả chuỗi ISO có độ lệch múi giờ. Nhóm muốn chuẩn hóa trước khi chuyển cho Claude. Hai yêu cầu nào cần có trong thiết kế?

A. Xác định đơn vị của A và quy tắc xử lý múi giờ của B trước khi chuyển đổi.

B. Giữ cả giá trị gốc và nguồn để kiểm tra lại khi hai kết quả không khớp.

C. Diễn giải cả hai theo múi giờ máy chủ để mọi giá trị được xử lý bằng cùng một quy tắc.

D. Dùng thời gian hiện tại cho giá trị không phân tích được để đầu ra luôn đáp ứng định dạng chung.

## Đáp án

1. **B.** `tool_use` yêu cầu xử lý công cụ hợp lệ và trả kết quả gắn đúng mã định danh trong lịch sử. A có thực thi nhưng đánh dấu thành công quá sớm; C có dữ liệu nhưng phá cấu trúc trao đổi; D nhầm giới hạn tài nguyên với bằng chứng hoàn thành.

2. **C.** Lập bản đồ và đánh giá rủi ro giúp chọn đúng hành vi cần kiểm chứng; phụ thuộc mới có thể làm thay đổi ưu tiên. A tối ưu số file, B tối ưu một chỉ số mã nguồn, D trì hoãn tìm hiểu luồng nghiệp vụ tới sau khi đã tốn công viết test. Các cách đó đều có thể tạo nhiều test mà bỏ sót rủi ro quan trọng.

3. **A, D.** A chuẩn hóa sau khi nhận dữ liệu. D đặt kiểm tra bắt buộc bằng chương trình trước tác động bên ngoài. B giao việc bảo đảm chính sách cho quyết định của mô hình. C là phát hiện và khắc phục sau tác động, không phải ngăn giao dịch; giao dịch bù còn có thể thất bại.

4. **B.** Hết ngân sách là điều kiện dừng vận hành, không xác nhận thành công. A dựa vào văn bản và tính hợp lệ thay vì kết quả. C biến “chưa chạy” thành một kết quả giả. D bỏ qua ràng buộc tài nguyên: cần báo trạng thái chưa hoàn tất để quyết định tiếp tục có chủ đích.

5. **A, B.** Chuẩn hóa phải giữ nguyên ý nghĩa của thời điểm và khả năng đối chiếu. C áp dụng một quy tắc chung nhưng có thể làm sai thời điểm vốn đã có múi giờ. D tạo dữ liệu không có trong nguồn; đúng định dạng không đồng nghĩa đúng nội dung.
