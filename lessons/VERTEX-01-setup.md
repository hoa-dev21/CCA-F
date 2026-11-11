# Xác thực và quyền truy cập đúng nhà cung cấp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-google-vertex/307525), sources/vertex-lessons/307525.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài hướng dẫn chuẩn bị để dùng mô hình Anthropic qua Google Vertex AI: có quyền truy cập mô hình trong Model Garden, cài công cụ dòng lệnh gcloud, chọn dự án và thiết lập thông tin xác thực cho ứng dụng.

Các lệnh minh họa gồm `gcloud init`, `gcloud auth login`, `gcloud config set project YOUR_PROJECT_ID` và `gcloud auth application-default login`. Cần phân biệt ba việc: tài khoản đang đăng nhập công cụ dòng lệnh, dự án đang chọn và thông tin xác thực mà thư viện ứng dụng thực sự sử dụng.

Ví dụ: Bạn đã đăng nhập gcloud nhưng ứng dụng vẫn báo lỗi. Đừng chỉ đổi prompt hoặc tham số sinh câu trả lời; hãy kiểm tra danh tính ứng dụng đang dùng, quyền, dự án, vùng triển khai và khả năng truy cập mô hình. Đăng nhập thành công không tự chứng minh tất cả các điều kiện đó đều đúng.

Mẫu tiếp theo dùng `AnthropicVertex` với dự án, vùng và thông tin xác thực Google. Không mặc định khóa API Anthropic trực tiếp thay được thông tin xác thực Google chỉ vì cả hai đều gọi mô hình Claude.

Khi chuyển từ notebook sang môi trường vận hành, chọn danh tính và quyền phù hợp với hạ tầng, không sao chép nguyên cách đăng nhập tương tác. Tên mô hình, vùng và giao diện trong khóa cần được kiểm tra khi triển khai. Khi ôn thi, ưu tiên hiểu sự khác nhau giữa các lớp xác thực và quyền truy cập.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** gcloud login thành công nhưng ứng dụng dùng AnthropicVertex vẫn lỗi xác thực. Bước điều tra nào nhắm đúng ranh giới giữa CLI và SDK?

A. Đăng nhập CLI lại nhiều lần nhưng giữ nguyên credential runtime.

B. Đổi system prompt để yêu cầu mô hình xác nhận quyền.

C. Kiểm tra credential SDK thực dùng, project và quyền.

D. Tăng timeout suy luận để chờ quyền được nhận.

**Câu 2 — Chọn một.** Notebook chạy được bằng đăng nhập tương tác cá nhân; job production không có người đăng nhập. Cách chuyển phù hợp?

A. Dùng danh tính runtime phù hợp; kiểm tra quyền và đích triển khai.

B. Sao chép lịch sử hội thoại vì notebook đã xác thực trong phiên cũ.

C. Dùng nguyên credential cá nhân trên mọi máy mà không xét lifecycle.

D. Chỉ giữ cùng tên SDK để bảo đảm mọi quyền giống notebook.

**Câu 3 — Chọn hai.** Ứng dụng có API key Anthropic trực tiếp nhưng client đang định tuyến qua Vertex. Hai điều nào phải kiểm tra khi tích hợp?

A. Cơ chế xác thực mà client/provider đang cấu hình thực sự yêu cầu.

B. Chỉ tên mô hình Claude vì cùng mô hình phải dùng chung key.

C. Project, region và quyền truy cập mô hình của môi trường Vertex.

D. Tự đưa API key trực tiếp vào mọi trường credential để thử.

**Câu 4 — Chọn một.** SDK đã lấy được credential hợp lệ nhưng dịch vụ báo không truy cập được mô hình ở cấu hình hiện tại. Điều tra nào phù hợp tiếp theo?

A. Coi lỗi là sai prompt vì xác thực đã thành công.

B. Đối chiếu model/project/region và quyền truy cập đích.

C. Coi notebook ở dự án khác chạy được là đủ để bỏ kiểm tra cấu hình.

D. Đổi temperature vì tham số đó có thể bật quyền mô hình.

**Câu 5 — Chọn hai.** Nhóm muốn tránh sự cố khi chuyển notebook sang production. Hai loại kiểm chứng nào cần làm trên runtime đích?

A. Xác nhận danh tính thật và quyền tối thiểu cần thiết cho lời gọi.

B. Chỉ kiểm tra tài khoản CLI của người triển khai.

C. Xác nhận endpoint/project/region/model phù hợp và chạy thử đường gọi thực tế.

D. Chỉ so sánh nội dung prompt giữa hai môi trường.

## Đáp án và giải thích

1. **C.** C xác định credential mà lời gọi thật sử dụng. A giả định CLI và SDK chung danh tính. B/D là thay đổi không giải quyết nguồn credential và quyền trên request.

2. **A.** A chuyển cả danh tính và cấu hình triển khai. B ngữ cảnh hội thoại không phải xác thực. C bỏ quản lý danh tính/vòng đời môi trường. D thư viện giống nhau không cấp cùng quyền.

3. **A, C.** A/C xét đúng mặt phẳng xác thực và triển khai. B nhầm mô hình tương tự với hợp đồng nhà cung cấp. D thử credential sai loại không giải quyết routing và có thể làm rối cấu hình.

4. **B.** B kiểm tra các điều kiện ngoài việc có credential. A/D trộn lớp suy luận và truy cập. C bằng chứng ở dự án khác không xác nhận quyền/vùng của môi trường hiện tại.

5. **A, C.** A kiểm tra danh tính thực thi, C kiểm tra đường gọi và khả năng truy cập đích. B không chứng minh credential runtime. D giữ prompt giống nhau không làm môi trường xác thực/triển khai giống nhau.
