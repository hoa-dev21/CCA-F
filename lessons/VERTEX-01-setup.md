# Xác thực và quyền truy cập đúng nhà cung cấp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-google-vertex/307525), sources/vertex-lessons/307525.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học

Bài chuẩn bị quyền dùng mô hình Anthropic trong Vertex Mô hình Garden, cài gcloud và thiết lập dự án cùng thông tin xác thực mặc định cho ứng dụng. Ví dụ dùng `gcloud init`, `gcloud auth login`, `gcloud config set project YOUR_PROJECT_ID` và `gcloud auth application-default login`.

Phân biệt tài khoản đăng nhập CLI, dự án đang chọn và credentials mà SDK sử dụng. Đăng nhập thành công không đủ để chứng minh có quyền dùng mô hình, mô hình được bật hoặc vùng triển khai phù hợp. Với môi trường production, chọn cơ chế danh tính và quyền theo hạ tầng thay vì coi đăng nhập tương tác của notebook là công thức triển khai bắt buộc.

Theo bài yêu cầu kế tiếp, ứng dụng dùng AnthropicVertex với project/region và Google credentials; không dùng lẫn API key của Anthropic trực tiếp chỉ vì bài lifecycle có nhắc “API Key”. Các mô hình ID, vùng và giao diện Console trong khóa cần kiểm tra khi triển khai. Bài này cung cấp bối cảnh nhà cung cấp, ưu tiên ôn các quyết định kiến trúc dùng chung cho kỳ thi.

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
