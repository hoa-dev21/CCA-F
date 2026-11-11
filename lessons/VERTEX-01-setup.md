# Xác thực và quyền truy cập đúng nhà cung cấp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-google-vertex/307525), sources/vertex-lessons/307525.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài hướng dẫn chuẩn bị để dùng mô hình Anthropic qua Google Vertex AI: có quyền truy cập mô hình trong Model Garden, cài công cụ dòng lệnh gcloud, chọn dự án và thiết lập thông tin xác thực cho ứng dụng.

Các lệnh minh họa gồm `gcloud init`, `gcloud auth login`, `gcloud config set project YOUR_PROJECT_ID` và `gcloud auth application-default login`. Cần phân biệt ba việc: tài khoản đang đăng nhập công cụ dòng lệnh, dự án đang chọn và thông tin xác thực mà thư viện ứng dụng thực sự sử dụng.

Ví dụ: Bạn đã đăng nhập gcloud nhưng ứng dụng vẫn báo lỗi. Đừng chỉ đổi prompt hoặc tham số sinh câu trả lời; hãy kiểm tra danh tính ứng dụng đang dùng, quyền, dự án, vùng triển khai và khả năng truy cập mô hình. Đăng nhập thành công không tự chứng minh tất cả các điều kiện đó đều đúng.

Mẫu tiếp theo dùng `AnthropicVertex` với dự án, vùng và thông tin xác thực Google. Không mặc định khóa API Anthropic trực tiếp thay được thông tin xác thực Google chỉ vì cả hai đều gọi mô hình Claude.

Khi chuyển từ notebook sang môi trường vận hành, chọn danh tính và quyền phù hợp với hạ tầng, không sao chép nguyên cách đăng nhập tương tác. Tên mô hình, vùng và giao diện trong khóa cần được kiểm tra khi triển khai. Khi ôn thi, ưu tiên hiểu sự khác nhau giữa các lớp xác thực và quyền truy cập.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** `gcloud login` succeeds, but an `AnthropicVertex` application fails authentication. What checks the CLI-SDK boundary?

A. Repeat CLI login while retaining runtime credentials.

B. Ask the model to confirm access.

C. Inspect the SDK's actual credentials, project, and permissions.

D. Increase reasoning timeouts.

**Question 2 — Choose one.** A notebook uses personal interactive login, while a production job has no interactive user. What is appropriate?

A. Use a suitable runtime identity and verify permissions and deployment targets.

B. Copy conversation history because the old session authenticated.

C. Reuse personal credentials everywhere without lifecycle review.

D. Use the same SDK name as proof of equal permissions.

**Question 3 — Choose two.** An application has a direct Anthropic key but routes through Vertex. Which TWO checks matter?

A. The authentication mechanism required by the configured client and provider.

B. Only the Claude name, which guarantees shared keys.

C. Vertex project, region, and model-access permissions.

D. Try the direct key in every credential field.

**Question 4 — Choose one.** Credentials are valid, but the model is inaccessible under current configuration. What comes next?

A. Assume the prompt is wrong.

B. Verify model, project, region, and target access permissions.

C. Trust another project's working notebook.

D. Change temperature to enable access.

**Question 5 — Choose two.** Which TWO checks belong on the target production runtime?

A. Verify its actual identity and required minimum permissions.

B. Only check the deployer's CLI account.

C. Verify endpoint, project, region, and model, then test the real invocation path.

D. Only compare prompt content across environments.

## Đáp án và giải thích

1. **C.** C xác định credential mà lời gọi thật sử dụng. A giả định CLI và SDK chung danh tính. B/D là thay đổi không giải quyết nguồn credential và quyền trên request.

2. **A.** A chuyển cả danh tính và cấu hình triển khai. B ngữ cảnh hội thoại không phải xác thực. C bỏ quản lý danh tính/vòng đời môi trường. D thư viện giống nhau không cấp cùng quyền.

3. **A, C.** A/C xét đúng mặt phẳng xác thực và triển khai. B nhầm mô hình tương tự với hợp đồng nhà cung cấp. D thử credential sai loại không giải quyết routing và có thể làm rối cấu hình.

4. **B.** B kiểm tra các điều kiện ngoài việc có credential. A/D trộn lớp suy luận và truy cập. C bằng chứng ở dự án khác không xác nhận quyền/vùng của môi trường hiện tại.

5. **A, C.** A kiểm tra danh tính thực thi, C kiểm tra đường gọi và khả năng truy cập đích. B không chứng minh credential runtime. D giữ prompt giống nhau không làm môi trường xác thực/triển khai giống nhau.
