# Mô hình nền tảng

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291879), sources/fluency-lessons/291879.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học


AI tạo sinh (Generative AI) có thể tạo nội dung mới, chẳng hạn một đoạn văn hoặc đoạn mã, thay vì chỉ phân tích dữ liệu có sẵn. Sự phát triển của công nghệ này được hỗ trợ bởi tiến bộ trong thuật toán và cấu trúc mô hình, lượng dữ liệu huấn luyện lớn và khả năng tính toán mạnh hơn.

Quá trình huấn luyện là giai đoạn mô hình học từ dữ liệu. Khi sử dụng mô hình, bạn cung cấp thông tin cho nhiệm vụ hiện tại, gọi là ngữ cảnh. Cửa sổ ngữ cảnh (context window) là giới hạn lượng thông tin mô hình có thể xử lý trong một lần. Vì vậy, không nên mặc định rằng mô hình luôn đọc và nhớ được toàn bộ một cuộc trò chuyện dài.

Bài gốc còn giới thiệu các khả năng mới xuất hiện khi mô hình phát triển. Tuy nhiên, tài liệu văn bản hiện có chỉ là phần giới thiệu video, nên không đủ để trình bày chi tiết cấu trúc bên trong mô hình.

Nếu đang ôn Architect Foundations theo đề cương đã lưu trong dự án, bạn chỉ cần nắm các khái niệm này để hiểu khả năng của AI. Hãy ưu tiên phần thiết kế ứng dụng; chi tiết huấn luyện và cấu trúc bên trong mô hình nằm ngoài phạm vi đề cương đó.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Trong cuộc chat dài, người dùng đã đưa một quy tắc ở đầu nhưng câu trả lời cuối không tuân thủ. Nhóm cho rằng mô hình đã được “huấn luyện bằng cuộc chat”. Chẩn đoán nào phù hợp?

A. Kiểm tra context đã cấp; thông tin mới chưa chứng minh mô hình đổi.

B. Mọi tin nhắn đã gửi tự động trở thành kiến thức huấn luyện có thể gọi lại.

C. Cửa sổ ngữ cảnh dài chứng minh mọi chi tiết được nhớ chính xác.

D. Lỗi cho thấy AI tạo sinh không thể làm nhiệm vụ nhiều lượt.

**Câu 2 — Chọn một.** Một mô hình tạo được đoạn mã mới, chạy qua ví dụ đầu tiên nhưng sai ở dữ liệu khác. Nhận định nào phù hợp với bản chất AI tạo sinh?

A. Nội dung mới được tạo ra mặc nhiên có tính đúng chức năng.

B. Mô hình chỉ có thể chép lại dữ liệu nên test đầu tiên là đủ.

C. Khả năng sinh nội dung khác bằng chứng đáp ứng yêu cầu.

D. Chỉ cần tăng độ dài context, không cần kiểm tra lại mã.

**Câu 3 — Chọn hai.** Nhóm chuẩn bị đầu vào cho nhiệm vụ dài hơn khả năng xử lý một lượt. Hai quyết định nào phù hợp với khái niệm cửa sổ ngữ cảnh hữu hạn?

A. Chọn và tổ chức dữ liệu liên quan cần có trong từng lần xử lý.

B. Giả định mô hình tự truy cập các đoạn đã không còn được gửi.

C. Giữ các ràng buộc quan trọng trong phần đầu vào thực sự dùng để ra quyết định.

D. Tăng yêu cầu độ dài đầu ra để bù cho tài liệu nguồn không được cung cấp.

**Câu 4 — Chọn một.** Nhóm ôn Architect có ít thời gian và chỉ có phần giới thiệu video về huấn luyện mô hình. Theo phạm vi đề cương đã lưu trong dự án, cách phân bổ nào hợp lý?

A. Suy ra chi tiết kiến trúc mô hình từ vài thuật ngữ trong giới thiệu.

B. Học nền tảng, ưu tiên thiết kế theo đề cương và nêu giới hạn nguồn.

C. Dành phần lớn thời gian học thuật toán huấn luyện vì là nền tảng của mọi tính năng.

D. Bỏ khái niệm context vì đó là vấn đề huấn luyện ngoài phạm vi.

**Câu 5 — Chọn hai.** Sau khi bổ sung tài liệu vào prompt, mô hình trả lời tốt hơn. Hai kết luận nào được phép rút ra từ quan sát này?

A. Mô hình đã cập nhật vĩnh viễn trọng số từ tài liệu vừa gửi.

B. Tài liệu đã cung cấp thêm ngữ cảnh hữu ích cho nhiệm vụ thử nghiệm.

C. Các lần gọi tương lai không kèm tài liệu chắc chắn sẽ giữ kết quả này.

D. Cần quản lý việc cung cấp thông tin liên quan khi dùng trong các yêu cầu khác.

## Đáp án và giải thích

1. **A.** A phân biệt ngữ cảnh khi dùng với giai đoạn huấn luyện. B suy ra cập nhật mô hình không có căn cứ. C sức chứa không bảo đảm sử dụng chính xác mọi chi tiết. D suy rộng từ lỗi quản lý ngữ cảnh sang mọi nhiệm vụ nhiều lượt.

2. **C.** C phân biệt năng lực tạo với tính đúng của sản phẩm. A đánh đồng hai điều này. B hiểu sai khả năng tạo nội dung và suy ra quá nhiều từ một test. D một tài nguyên lớn hơn không thay thế kiểm chứng hành vi.

3. **A, C.** A quản lý lượng thông tin, C duy trì điều kiện quan trọng trong ngữ cảnh. B giả định trí nhớ không được chứng minh. D đầu ra dài hơn không khôi phục được dữ liệu đầu vào thiếu.

4. **B.** B bám mục tiêu và mức bằng chứng hiện có. A vượt nội dung nguồn. C có thể hữu ích cho mục tiêu khác nhưng lệch ưu tiên đã nêu. D context liên quan trực tiếp cách thiết kế đầu vào ứng dụng.

5. **B, D.** B mô tả điều quan sát hỗ trợ; D áp dụng khác biệt giữa huấn luyện và ngữ cảnh. A khẳng định một cơ chế không được quan sát. C suy ra trí nhớ lâu dài từ cải thiện trong một đầu vào cụ thể.
