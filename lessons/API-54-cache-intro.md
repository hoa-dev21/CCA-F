# Prompt caching

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287772), sources/api-lessons/287772.json. Tóm tắt/câu hỏi tự biên soạn. Nội dung chi tiết sản phẩm có thể thay đổi; không tuyên bố đã xác minh phiên bản triển khai hiện hành.

## Nội dung bài học


Lưu đệm prompt (prompt caching) cho phép tái sử dụng phần xử lý của nội dung đầu vào lặp lại. Trong trường hợp phù hợp, cách này có thể giảm thời gian phản hồi và chi phí.

Ví dụ: Bạn đặt nhiều câu hỏi khác nhau về cùng một tài liệu dài, hoặc nhiều yêu cầu dùng chung định nghĩa công cụ và hướng dẫn hệ thống ổn định. Đây là những tình huống đáng đo lợi ích của cache.

Cache không phải kho lưu câu trả lời cuối để trả nguyên bản. Nó cũng không thay thế việc gửi ngữ cảnh: ứng dụng vẫn phải tạo yêu cầu với nội dung cần thiết. Nội dung chỉ gần giống nhau chưa chắc được tính là dùng lại cache thành công, còn gọi là cache hit.

Hãy kiểm tra số liệu sử dụng thực tế để biết phần nào được dùng lại. Thời hạn một giờ và cách giải thích bên trong hệ thống ở video là minh họa tại thời điểm giảng, không phải cam kết chung cho mọi mô hình và cấu hình. Theo đề cương đã lưu, chỉ cần biết cơ chế này tồn tại; chi tiết triển khai không phải trọng tâm.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Ứng dụng đã cache tài liệu dài, lượt sau chỉ gửi câu hỏi vì cho rằng dịch vụ tự nhớ tài liệu. Kết quả mất ngữ cảnh. Sửa nào đúng?

A. Vẫn gửi nội dung cần thiết theo cơ chế cache hỗ trợ.

B. Tăng TTL trong prompt văn bản.

C. Yêu cầu mô hình nhớ ID cuộc gọi trước trong câu hỏi.

D. Coi cache là kho câu trả lời và trả đáp án lượt đầu.

**Câu 2 — Chọn một.** Hai câu hỏi khác nhau về cùng tài liệu đều có cache hit. Nhóm lo hệ thống sẽ trả cùng câu trả lời. Diễn giải đúng là gì?

A. Cache hit chứng minh câu hỏi thứ hai giống nghĩa câu đầu.

B. Tái dùng xử lý prefix; câu trả lời vẫn theo request mới.

C. Cần tắt cache mỗi khi câu hỏi đổi dù tài liệu giữ nguyên.

D. Cache hit buộc mô hình phát lại nguyên câu trả lời trước.

**Câu 3 — Chọn hai.** Dịch vụ dùng cùng tài liệu và tool definitions cho nhiều lượt. Hai việc nào giúp đánh giá caching có ích không?

A. Giả định văn bản gần giống nhau luôn được tái sử dụng.

B. Chỉ kiểm tra câu trả lời giống nhau giữa hai lượt.

C. Đo usage phản ánh tạo/đọc cache ở yêu cầu thực.

D. So độ trễ và chi phí trên workload đại diện.

**Câu 4 — Chọn một.** Nhóm thấy lần gọi thứ hai nhanh hơn và tuyên bố cache hoạt động. Kết luận thận trọng nhất?

A. Có thể coi đó là bằng chứng chắc chắn của cache.

B. Cần đối chiếu số liệu cache vì tốc độ còn chịu nhiều yếu tố.

C. Có thể bỏ gửi tài liệu từ lần tiếp theo.

D. Có thể kết luận nội dung đã chính xác hơn nhờ cache.

**Câu 5 — Chọn hai.** Notebook nêu TTL và một mô hình cụ thể. Hai lựa chọn nào phù hợp khi triển khai ở môi trường khác?

A. Xác minh điều kiện cache của mô hình/API đang dùng.

B. Thêm nội dung lặp vô nghĩa để mọi request giống nhau hơn.

C. Áp nguyên TTL vì đó là thuộc tính bất biến của mọi cache.

D. Đo lợi ích trên nội dung lặp lại thật của ứng dụng.

## Đáp án và giải thích

1. **A.** A đúng: Cache tái sử dụng xử lý, không thay hợp đồng ngữ cảnh. B sai: Lời nhắc không cấu hình cache dịch vụ. C sai: Không tự cấp lại nội dung tài liệu. D sai: Các câu hỏi khác nhau có thể cần đáp án khác.

2. **B.** A sai: Hit không là phép đánh giá ngữ nghĩa của câu hỏi. B đúng: Prompt caching không đồng nghĩa response caching. C sai: Đây chính là trường hợp có thể hưởng lợi từ prefix ổn định. D sai: Nhầm loại dữ liệu được tái sử dụng.

3. **C, D.** A sai: Điều kiện khớp cần theo dịch vụ thực tế. B sai: Không chứng minh cache hit. C đúng: Cần bằng chứng sử dụng cache. D đúng: Lợi ích phụ thuộc tần suất và phần lặp lại.

4. **B.** A sai: Không loại trừ nguyên nhân khác. B đúng: Cảm giác nhanh hơn chưa xác nhận hit. C sai: Không suy ra quyền bỏ ngữ cảnh. D sai: Hiệu năng không xác nhận chất lượng.

5. **A, D.** A đúng: Thông số ví dụ có thể không áp dụng. B sai: Tăng đầu vào không phục vụ nhiệm vụ. C sai: Không có cơ sở bảo đảm chung. D đúng: Không suy rộng từ demo.

## Đối chiếu tính năng trên Bedrock

Ví dụ Bedrock nêu thời gian cache còn hiệu lực 5 phút, trong khi bài API nêu 1 giờ. Đây là các ví dụ hoặc cấu hình khác nhau, không nên chọn một con số làm quy tắc chung. Cùng học nguyên tắc tái sử dụng xử lý đầu vào; khi triển khai cần xác minh thời hạn và ngưỡng áp dụng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276786). Bản lưu: `sources/bedrock-lessons/276786.json`.

## Đối chiếu Vertex

Bài Vertex cũng nêu 5 phút, khác 1 giờ trong bài API. Kiểm tra nhà cung cấp, mô hình và cấu hình thực tế trước khi dùng. Cache tái sử dụng tính toán cho đầu vào ổn định, không phải lưu sẵn câu trả lời hoặc tìm nội dung gần nghĩa. Dùng chung câu hỏi.

Nguồn đối chiếu: [Prompt caching](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289196). Bản lưu: `sources/vertex-lessons/289196.json`.
