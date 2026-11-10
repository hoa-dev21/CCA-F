# Xác thực và quyền truy cập đúng nhà cung cấp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-google-vertex/307525), sources/vertex-lessons/307525.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài hướng dẫn chuẩn bị để dùng mô hình Anthropic qua Google Vertex AI: có quyền truy cập mô hình trong Model Garden, cài công cụ dòng lệnh gcloud, chọn dự án và thiết lập thông tin xác thực cho ứng dụng.

Các lệnh minh họa gồm `gcloud init`, `gcloud auth login`, `gcloud config set project YOUR_PROJECT_ID` và `gcloud auth application-default login`. Cần phân biệt ba việc: tài khoản đang đăng nhập công cụ dòng lệnh, dự án đang chọn và thông tin xác thực mà thư viện ứng dụng thực sự sử dụng.

Ví dụ: Bạn đã đăng nhập gcloud nhưng ứng dụng vẫn báo lỗi. Đừng chỉ đổi prompt hoặc tham số sinh câu trả lời; hãy kiểm tra danh tính ứng dụng đang dùng, quyền, dự án, vùng triển khai và khả năng truy cập mô hình. Đăng nhập thành công không tự chứng minh tất cả các điều kiện đó đều đúng.

Mẫu tiếp theo dùng `AnthropicVertex` với dự án, vùng và thông tin xác thực Google. Không mặc định khóa API Anthropic trực tiếp thay được thông tin xác thực Google chỉ vì cả hai đều gọi mô hình Claude.

Khi chuyển từ notebook sang môi trường vận hành, chọn danh tính và quyền phù hợp với hạ tầng, không sao chép nguyên cách đăng nhập tương tác. Tên mô hình, vùng và giao diện trong khóa cần được kiểm tra khi triển khai. Khi ôn thi, ưu tiên hiểu sự khác nhau giữa các lớp xác thực và quyền truy cập.

## Câu hỏi

**1. Chọn một.** gcloud đã đăng nhập nhưng SDK vẫn lỗi xác thực. Kiểm tra nào sát vấn đề nhất?

A. Tăng temperature.

B. Thông tin xác thực ứng dụng thực sự đang dùng, dự án và quyền truy cập.

C. Đổi system prompt.

D. Tăng max_tokens.

**2. Chọn một.** Có Anthropic API key trực tiếp. Có thể mặc định dùng nó thay Google credentials trong mẫu AnthropicVertex không?

A. Có, mọi nhà cung cấp dùng chung key.

B. Có, chỉ đổi mô hình name là đủ.

C. Không; xác thực và định tuyến phải theo nhà cung cấp và client được cấu hình.

D. Có, nếu prompt đủ ngắn.

**3. Chọn một.** Notebook gọi mô hình thành công ở một dự án. Điều gì cần kiểm tra khi chuyển sang production?

A. Danh tính runtime, quyền, project/region và khả năng truy cập mô hình của môi trường đích.

B. Chỉ sao chép lịch sử chat.

C. Chỉ tăng temperature.

D. Không cần kiểm tra thêm vì cùng SDK.

## Đáp án

1. **B.** CLI login không đủ để chứng minh SDK lấy đúng danh tính/project. A/C/D là tham số suy luận, không giải quyết xác thực.

2. **C.** A/B nhầm định dạng yêu cầu tương tự với cơ chế xác thực giống nhau; D không liên quan đến credentials.

3. **A.** B/C không xác minh môi trường đích; D bỏ qua khác biệt danh tính, quyền và phạm vi triển khai.
