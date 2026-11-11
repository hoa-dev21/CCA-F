# Mô hình nền tảng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291879), sources/fluency-lessons/291879.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học


AI tạo sinh (Generative AI) có thể tạo nội dung mới, chẳng hạn một đoạn văn hoặc đoạn mã, thay vì chỉ phân tích dữ liệu có sẵn. Sự phát triển của công nghệ này được hỗ trợ bởi tiến bộ trong thuật toán và cấu trúc mô hình, lượng dữ liệu huấn luyện lớn và khả năng tính toán mạnh hơn.

Quá trình huấn luyện là giai đoạn mô hình học từ dữ liệu. Khi sử dụng mô hình, bạn cung cấp thông tin cho nhiệm vụ hiện tại, gọi là ngữ cảnh. Cửa sổ ngữ cảnh (context window) là giới hạn lượng thông tin mô hình có thể xử lý trong một lần. Vì vậy, không nên mặc định rằng mô hình luôn đọc và nhớ được toàn bộ một cuộc trò chuyện dài.

Bài gốc còn giới thiệu các khả năng mới xuất hiện khi mô hình phát triển. Tuy nhiên, tài liệu văn bản hiện có chỉ là phần giới thiệu video, nên không đủ để trình bày chi tiết cấu trúc bên trong mô hình.

Nếu đang ôn Architect Foundations theo đề cương đã lưu trong dự án, bạn chỉ cần nắm các khái niệm này để hiểu khả năng của AI. Hãy ưu tiên phần thiết kế ứng dụng; chi tiết huấn luyện và cấu trúc bên trong mô hình nằm ngoài phạm vi đề cương đó.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** A model forgets an early rule in a long chat, and the team assumes the chat trained it. What diagnosis is appropriate?

A. Inspect supplied context; new conversation content does not prove weight changes.

B. Every message automatically becomes permanent training knowledge.

C. A long window guarantees perfect recall.

D. Generative AI cannot perform multistep conversations.

**Question 2 — Choose one.** Generated code passes one example but fails other inputs. What follows?

A. Novel content is automatically functionally correct.

B. Models only copy, so one test is sufficient.

C. Generation ability differs from evidence of requirement satisfaction.

D. Longer context replaces further testing.

**Question 3 — Choose two.** Which TWO choices suit a task exceeding one context window?

A. Select and organize information relevant to each processing step.

B. Assume omitted passages remain automatically accessible.

C. Keep important constraints in the input actually used for decisions.

D. Increase output length to compensate for missing sources.

**Question 4 — Choose one.** With limited exam time and only an introductory training video, what study allocation fits the stored blueprint?

A. Infer detailed model architecture from introductory terms.

B. Learn foundations, prioritize blueprint-aligned design, and disclose source limits.

C. Spend most time on training algorithms.

D. Ignore context as irrelevant training detail.

**Question 5 — Choose two.** Adding documents improves answers. Which TWO conclusions are supported?

A. The documents permanently updated model weights.

B. The documents provided useful task context in the experiment.

C. Future calls without them will certainly retain the improvement.

D. Relevant information still needs appropriate provisioning in other requests.

## Đáp án và giải thích

1. **A.** A phân biệt ngữ cảnh khi dùng với giai đoạn huấn luyện. B suy ra cập nhật mô hình không có căn cứ. C sức chứa không bảo đảm sử dụng chính xác mọi chi tiết. D suy rộng từ lỗi quản lý ngữ cảnh sang mọi nhiệm vụ nhiều lượt.

2. **C.** C phân biệt năng lực tạo với tính đúng của sản phẩm. A đánh đồng hai điều này. B hiểu sai khả năng tạo nội dung và suy ra quá nhiều từ một test. D một tài nguyên lớn hơn không thay thế kiểm chứng hành vi.

3. **A, C.** A quản lý lượng thông tin, C duy trì điều kiện quan trọng trong ngữ cảnh. B giả định trí nhớ không được chứng minh. D đầu ra dài hơn không khôi phục được dữ liệu đầu vào thiếu.

4. **B.** B bám mục tiêu và mức bằng chứng hiện có. A vượt nội dung nguồn. C có thể hữu ích cho mục tiêu khác nhưng lệch ưu tiên đã nêu. D context liên quan trực tiếp cách thiết kế đầu vào ứng dụng.

5. **B, D.** B mô tả điều quan sát hỗ trợ; D áp dụng khác biệt giữa huấn luyện và ngữ cảnh. A khẳng định một cơ chế không được quan sát. C suy ra trí nhớ lâu dài từ cải thiện trong một đầu vào cụ thể.
