# Mô hình nền tảng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291879), sources/fluency-lessons/291879.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học


AI tạo sinh (Generative AI) có thể tạo nội dung mới, chẳng hạn một đoạn văn hoặc đoạn mã, thay vì chỉ phân tích dữ liệu có sẵn. Sự phát triển của công nghệ này được hỗ trợ bởi tiến bộ trong thuật toán và cấu trúc mô hình, lượng dữ liệu huấn luyện lớn và khả năng tính toán mạnh hơn.

Quá trình huấn luyện là giai đoạn mô hình học từ dữ liệu. Khi sử dụng mô hình, bạn cung cấp thông tin cho nhiệm vụ hiện tại, gọi là ngữ cảnh. Cửa sổ ngữ cảnh (context window) là giới hạn lượng thông tin mô hình có thể xử lý trong một lần. Vì vậy, không nên mặc định rằng mô hình luôn đọc và nhớ được toàn bộ một cuộc trò chuyện dài.

Bài gốc còn giới thiệu các khả năng mới xuất hiện khi mô hình phát triển. Tuy nhiên, tài liệu văn bản hiện có chỉ là phần giới thiệu video, nên không đủ để trình bày chi tiết cấu trúc bên trong mô hình.

Nếu đang ôn Architect Foundations theo đề cương đã lưu trong dự án, bạn chỉ cần nắm các khái niệm này để hiểu khả năng của AI. Hãy ưu tiên phần thiết kế ứng dụng; chi tiết huấn luyện và cấu trúc bên trong mô hình nằm ngoài phạm vi đề cương đó.

## Câu hỏi

**1. Chọn một.** Đặc trưng nổi bật được bài nêu của generative AI là gì?

A. Chỉ lưu nguyên dữ liệu.

B. Tạo nội dung mới.

C. Không bao giờ xử lý ngôn ngữ.

D. Không có giới hạn ngữ cảnh.

**2. Chọn một.** Yếu tố nào thuộc nền tảng phát triển được bài giới thiệu?

A. Chỉ tên giao diện.

B. Chỉ tốc độ gõ người dùng.

C. Chỉ số tab trình duyệt.

D. Tiến bộ thuật toán, dữ liệu lớn và năng lực tính toán.

**3. Chọn một.** Khi ôn nhanh Architect theo Exam Guide đã tải, nên phân bổ chi tiết huấn luyện thế nào?

A. Đọc khái niệm, ưu tiên nội dung ứng dụng nằm trong phạm vi thi.

B. Bỏ mọi nội dung kiến trúc ứng dụng.

C. Chỉ học mô hình weights.

D. Coi huấn luyện nội tại là toàn bộ bài thi.

## Đáp án

1. **B.** B đúng mục tiêu tạo nội dung; A, C, D không mô tả đặc trưng đó.
2. **D.** D là nhóm yếu tố trong bài; A, B, C không giải thích nền tảng công nghệ.
3. **A.** A phù hợp phạm vi; B, C, D chuyển trọng tâm khỏi mục tiêu thi.
