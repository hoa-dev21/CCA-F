# Anthropic apps — Ví dụ agent thực tế

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287787), sources/api-lessons/287787.json. Bản tóm tắt văn bản và câu hỏi tự biên soạn; không phải xác nhận đã chạy bài thực hành.

## Tóm tắt

Bài giới thiệu Claude Code và computer use như các trường hợp ghép model, tools, nhiều bước và quan sát môi trường. Mục đích là chuẩn bị cho phần agents, không phải coi một tên sản phẩm đủ giải thích kiến trúc.

Code gắn với file/lệnh và workflow phát triển; computer use gắn với thao tác trên giao diện. Cả hai cần biết kết quả hành động để quyết định bước tiếp. Đối với Exam Guide hiện tại, chi tiết computer use nằm ngoài phạm vi, còn nguyên tắc agent/tool và kiểm chứng vẫn hữu ích.

Đây là phần định hướng module, không tuyên bố đã thực hiện bất kỳ thao tác desktop hoặc cài ứng dụng cho người học.

## Câu hỏi

**1. Chọn một.** Điểm kiến trúc chung được bài dùng hai ứng dụng minh họa là gì?

A. Chỉ đổi tên sản phẩm.

B. Ghép tools, nhiều bước và tương tác/quan sát môi trường.

C. Không cần thực thi.

D. Không cần mục tiêu.

**2. Chọn một.** Computer use và Code khác nhau chủ yếu ở lớp thao tác nào trong ví dụ?

A. Không khác gì.

B. Chỉ màu UI.

C. Giao diện desktop so với file/lệnh trong phát triển.

D. Không có công cụ.

**3. Chọn một.** Khi ôn theo Exam Guide đã tải, chi tiết computer use có ưu tiên cao không?

A. Không; đọc định hướng, ưu tiên mục tiêu trong phạm vi thi.

B. Có, thay toàn bộ MCP.

C. Có, là mọi câu hỏi.

D. Có, không cần blueprint.

## Đáp án

1. **B.** B là nguyên tắc agent; A chỉ nhãn, C và D bỏ cấu phần nhiệm vụ.

2. **C.** C phân biệt môi trường; A và B không mô tả vai trò, D trái bài.

3. **A.** A theo phạm vi; B, C, D bỏ trọng tâm đã xác định.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Agents overview](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276804), sources/bedrock-media/276804.json. Bài module agents mở bằng Claude Code và Computer Use, khảo sát thiết kế/thực hành rồi rút nguyên tắc agent hiệu quả. Không có một tên sản phẩm hoặc định nghĩa duy nhất thay cho việc xác định tool loop, quan sát và đánh giá của hệ thống. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.

## Đối chiếu phụ đề chính thức

Đã đọc toàn bộ phụ đề tiếng Anh của [Anthropic apps](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289230), sources/vertex-media/289230.json. Giới thiệu Claude Code chạy terminal và Computer Use như hai agent mẫu để phân tích thiết kế, rồi thực hành và rút nguyên tắc agent hiệu quả. Đây là định hướng module, không phải bằng chứng đã chạy các ứng dụng. Dùng chung câu hỏi phù hợp nội dung, không đếm trùng.
